import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAP_MAX = 200; // sweep when map grows beyond this
// Humans take longer than this to fill the form; scripted posts usually don't.
// Measured on the client as elapsed time, so a skewed device clock can't trip it.
const MIN_FILL_MS = 3000;

// RFC 2047 encoded-word encoding for non-ASCII header values
function encodeHeaderValue(value: string): string {
  if (!/[^\x20-\x7E]/.test(value)) return value;
  const b64 = Buffer.from(value, "utf-8").toString("base64");
  return `=?utf-8?B?${b64}?=`;
}

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return "unknown";
}

function sweepRateLimit(now: number): void {
  if (rateLimitMap.size < RATE_LIMIT_MAP_MAX) return;
  for (const [key, entry] of rateLimitMap) {
    if (now > entry.resetAt) rateLimitMap.delete(key);
  }
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  sweepRateLimit(now);
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count += 1;
  return true;
}

function getAuth() {
  const keyJson = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!keyJson) throw new Error("GOOGLE_SERVICE_ACCOUNT_KEY not set");
  const key = JSON.parse(keyJson);
  return new google.auth.JWT({
    email: key.client_email,
    key: key.private_key,
    scopes: ["https://www.googleapis.com/auth/gmail.send"],
    subject: "info@urbanmds.com",
  });
}

function hasLineBreak(value: string): boolean {
  return /[\r\n]/.test(value);
}

function makeEmail({
  to,
  from,
  subject,
  body,
  replyTo,
}: {
  to: string;
  from: string;
  subject: string;
  body: string;
  replyTo?: string;
}) {
  if (replyTo !== undefined && hasLineBreak(replyTo)) {
    throw new Error("Refusing to build a Reply-To header containing a line break");
  }
  const encodedSubject = encodeHeaderValue(subject);
  const lines = [
    `From: ${from}`,
    `To: ${to}`,
    ...(replyTo ? [`Reply-To: ${replyTo}`] : []),
    `Subject: ${encodedSubject}`,
    `Content-Type: text/plain; charset=utf-8`,
    ``,
    body,
  ];
  const raw = lines.join("\r\n");
  return Buffer.from(raw)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function POST(req: NextRequest) {
  // Origin check — no Origin header is fine (curl / server-to-server).
  // When present, only accept our own domains and the specific Vercel
  // preview URL for this project (set automatically by Vercel at build time).
  const origin = req.headers.get("origin");
  if (origin) {
    const originHost = (() => {
      try {
        return new URL(origin).hostname;
      } catch {
        return "";
      }
    })();
    // VERCEL_URL is "my-project-abc123.vercel.app" — no protocol prefix.
    const vercelHost = process.env.VERCEL_URL ?? "";
    const allowed =
      originHost === "localhost" ||
      /^localhost:\d+$/.test(originHost) ||
      originHost === "urbanmds.com" ||
      originHost === "www.urbanmds.com" ||
      (vercelHost !== "" && originHost === vercelHost);
    if (!allowed) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  }

  // Parse body first so honeypot can be checked before consuming a rate-limit slot.
  let body: Record<string, unknown>;
  try {
    const parsed: unknown = await req.json();
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: silently succeed when bot field is filled (don't charge rate limit).
  if (body.umc_hp_check && String(body.umc_hp_check).length > 0) {
    return NextResponse.json({ success: true });
  }

  // Minimum fill time. A real person who trips this can simply press Send again.
  const elapsedMs = Number(body.elapsedMs);
  if (!Number.isFinite(elapsedMs) || elapsedMs < MIN_FILL_MS) {
    return NextResponse.json(
      {
        error:
          "Please check your message and press Send again, or call us at (201) 332-7077.",
      },
      { status: 400 }
    );
  }

  // Rate limit (checked after honeypot so bots don't burn real slots).
  const ip = getClientIp(req);
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      {
        error:
          "Too many requests. Please wait before trying again, or call us at (201) 332-7077.",
      },
      { status: 429 }
    );
  }

  try {
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();

    // Required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Length caps
    if (name.length > 100) {
      return NextResponse.json(
        { error: "Name must be 100 characters or fewer." },
        { status: 400 }
      );
    }
    if (email.length > 254) {
      return NextResponse.json(
        { error: "Email address is too long." },
        { status: 400 }
      );
    }
    if (phone.length > 30) {
      return NextResponse.json(
        { error: "Phone number is too long." },
        { status: 400 }
      );
    }
    if (subject.length > 150) {
      return NextResponse.json(
        { error: "Subject must be 150 characters or fewer." },
        { status: 400 }
      );
    }
    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message must be 5000 characters or fewer." },
        { status: 400 }
      );
    }

    // These values reach mail headers (Reply-To, Subject). Reject line breaks
    // outright rather than relying on encoding to neutralise them.
    if (hasLineBreak(name) || hasLineBreak(email) || hasLineBreak(subject)) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Characters that turn one header address into a list or display name.
    if (!emailRe.test(email) || /[,;<>"():\\]/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const auth = getAuth();
    const gmail = google.gmail({ version: "v1", auth });

    // Email to practice
    const practiceBody = [
      `New contact form submission from urbanmds.com`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Subject: ${subject || "General Inquiry"}`,
      ``,
      `Message:`,
      message,
    ].join("\n");

    await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw: makeEmail({
          to: "info@urbanmds.com",
          from: "Urban Medical Center <info@urbanmds.com>",
          subject: `Website Contact: ${subject || name}`,
          body: practiceBody,
          replyTo: email,
        }),
      },
    });

    // Confirmation to the sender. Deliberately generic: echoing the name,
    // subject or message would let anyone use this form to mail arbitrary
    // text to arbitrary inboxes from the practice's address.
    const confirmBody = [
      `Hello,`,
      ``,
      `Thank you for contacting Urban Medical Center. We received your message and will reply within 1-2 business days.`,
      ``,
      `If this is a medical emergency, call 911. For anything urgent, please call the office at (201) 332-7077.`,
      ``,
      `Urban Medical Center`,
      `95 Martin Luther King Jr Dr, Jersey City, NJ 07305`,
      `(201) 332-7077`,
    ].join("\n");

    // The practice already has the message, so a failed confirmation must not
    // show the patient an error and prompt a duplicate submission.
    try {
      await gmail.users.messages.send({
        userId: "me",
        requestBody: {
          raw: makeEmail({
            to: email,
            from: "Urban Medical Center <info@urbanmds.com>",
            subject: "We received your message - Urban Medical Center",
            body: confirmBody,
          }),
        },
      });
    } catch (err) {
      console.error("Contact form confirmation email failed:", err);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please call us at (201) 332-7077." },
      { status: 500 }
    );
  }
}
