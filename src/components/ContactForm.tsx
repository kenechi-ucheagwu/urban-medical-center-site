"use client";

import { useEffect, useRef, useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  // Honeypot, never shown to real users. The name, id and label carry no
  // autofill meaning (not "company", "url" etc.), so browser and password
  // manager autofill leave it empty and real messages are not dropped.
  umc_hp_check: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    umc_hp_check: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  // Sent as elapsed time, not a wall-clock timestamp, so the server's
  // minimum-fill check is immune to a wrong device clock.
  const mountedAt = useRef<number | null>(null);
  useEffect(() => {
    mountedAt.current = performance.now();
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Client-side validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMsg("Name, email, and message are required.");
      return;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(form.email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          elapsedMs:
            mountedAt.current === null
              ? 0
              : Math.round(performance.now() - mountedAt.current),
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        if (res.status === 429) {
          setErrorMsg(
            data.error ||
              "Too many requests. Please wait before trying again, or call us at (201) 332-7077."
          );
        } else if (res.status === 403) {
          setErrorMsg(
            "Your request was blocked. Please call us at (201) 332-7077."
          );
        } else {
          setErrorMsg(
            data.error ||
              "Failed to send message. Please call us at (201) 332-7077."
          );
        }
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Failed to send message. Please call us at (201) 332-7077.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white rounded-xl p-10 text-center border border-line">
        <div className="w-14 h-14 bg-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-ink-900 mb-2">Message Sent</h3>
        <p className="text-ink-700">
          Your message has been sent! We&apos;ll be in touch within 1-2 business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl p-6 sm:p-8 border border-line space-y-5"
      noValidate
    >
      {/* Honeypot field — hidden from real users, filled by bots */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
      >
        <label htmlFor="umc_hp_check">Leave this field empty</label>
        <input
          type="text"
          id="umc_hp_check"
          name="umc_hp_check"
          value={form.umc_hp_check}
          onChange={handleChange}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-ink-900 mb-1.5"
          >
            Full Name <span className="text-red-700" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            maxLength={100}
            className="w-full min-h-11 border border-line rounded-lg px-4 py-2.5 text-base text-ink-900 placeholder:text-ink-500 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-ink-900 mb-1.5"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(201) 555-0000"
            maxLength={30}
            className="w-full min-h-11 border border-line rounded-lg px-4 py-2.5 text-base text-ink-900 placeholder:text-ink-500 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-ink-900 mb-1.5"
          >
            Email Address <span className="text-red-700" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            maxLength={254}
            className="w-full min-h-11 border border-line rounded-lg px-4 py-2.5 text-base text-ink-900 placeholder:text-ink-500 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-semibold text-ink-900 mb-1.5"
          >
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full min-h-11 border border-line rounded-lg px-4 py-2.5 text-base text-ink-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent"
          >
            <option value="">Select a topic</option>
            <option value="Appointment Inquiry">Appointment Inquiry</option>
            <option value="Insurance Question">Insurance Question</option>
            <option value="Medical Records">Medical Records</option>
            <option value="Billing">Billing</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-ink-900 mb-1.5"
        >
          Message <span className="text-red-700" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          maxLength={5000}
          className="w-full border border-line rounded-lg px-4 py-2.5 text-base text-ink-900 placeholder:text-ink-500 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:border-transparent resize-y"
        />
      </div>

      <p className="text-[0.9375rem] font-semibold text-red-800 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
        For medical emergencies, call 911 immediately. Do not use this form for urgent medical questions.
      </p>

      {status === "error" && errorMsg && (
        <div role="alert" className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-[0.9375rem] text-red-800">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full min-h-12 bg-teal-700 hover:bg-teal-900 disabled:opacity-60 text-white font-semibold rounded-lg transition-colors text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
