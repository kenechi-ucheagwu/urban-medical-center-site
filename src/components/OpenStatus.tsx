"use client";

import { useSyncExternalStore } from "react";

import { CLOSED_DATES } from "@/lib/clinic";

// Office schedule, mirrors HOURS in src/lib/clinic.ts.
// Index 0 = Sunday … 6 = Saturday; [open, close] in 24h, null = closed.
const SCHEDULE: (readonly [number, number] | null)[] = [
  null,
  [9, 17],
  [9, 17],
  [9, 17],
  [9, 17],
  [9, 17],
  [9, 14],
];

const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const WEEKDAY_TO_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

function formatHour(hour24: number): string {
  const period = hour24 >= 12 ? "PM" : "AM";
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return `${hour12}:00 ${period}`;
}

// Current weekday/hour/minute in America/New_York via Intl, so EST/EDT
// (DST) is handled by the platform tz database instead of a fixed offset.
function getNewYorkParts(now: Date): {
  dayIndex: number;
  minutes: number;
  year: number;
  month: number;
  day: number;
} {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);

  let weekday = "";
  let hour = 0;
  let minute = 0;
  let year = 0;
  let month = 0;
  let day = 0;
  for (const part of parts) {
    if (part.type === "weekday") weekday = part.value;
    else if (part.type === "hour") hour = Number(part.value);
    else if (part.type === "minute") minute = Number(part.value);
    else if (part.type === "year") year = Number(part.value);
    else if (part.type === "month") month = Number(part.value);
    else if (part.type === "day") day = Number(part.value);
  }
  return {
    dayIndex: WEEKDAY_TO_INDEX[weekday] ?? 0,
    minutes: hour * 60 + minute,
    year,
    month,
    day,
  };
}

// New York calendar date `offset` days from the given one, as YYYY-MM-DD.
// Plain calendar arithmetic in UTC, so DST changes cannot skip a day.
function isoDate(year: number, month: number, day: number, offset: number) {
  return new Date(Date.UTC(year, month - 1, day + offset))
    .toISOString()
    .slice(0, 10);
}

interface Status {
  open: boolean;
  label: string;
}

function getStatus(now: Date): Status {
  const { dayIndex, minutes, year, month, day } = getNewYorkParts(now);
  const closedOn = (offset: number) =>
    CLOSED_DATES.includes(isoDate(year, month, day, offset));
  const today = SCHEDULE[dayIndex];

  if (today && !closedOn(0)) {
    const [open, close] = today;
    if (minutes >= open * 60 && minutes < close * 60) {
      return { open: true, label: `Open now, closes ${formatHour(close)}` };
    }
  }

  // Closed — find the next opening (today if before open, else a future day).
  // Looks up to two weeks ahead so a multi-day closure is skipped.
  for (let offset = 0; offset < 15; offset++) {
    const idx = (dayIndex + offset) % 7;
    const hours = SCHEDULE[idx];
    if (!hours || closedOn(offset)) continue;
    const [open] = hours;
    if (offset === 0 && minutes >= open * 60) continue;
    if (offset === 0)
      return { open: false, label: `Closed, opens ${formatHour(open)}` };
    if (offset === 1)
      return {
        open: false,
        label: `Closed, opens tomorrow at ${formatHour(open)}`,
      };
    return {
      open: false,
      label: `Closed, opens ${DAY_NAMES[idx]} at ${formatHour(open)}`,
    };
  }
  return { open: false, label: "Closed" };
}

// Nothing is rendered on the server (and during hydration) because the
// server cannot know the visitor's current time. The caller reserves the
// line height so the card never shifts once the client snapshot arrives.
let cached: Status | null = null;
const listeners = new Set<() => void>();
let timer: ReturnType<typeof setInterval> | null = null;

function refresh() {
  const next = getStatus(new Date());
  if (!cached || cached.open !== next.open || cached.label !== next.label) {
    cached = next;
    for (const listener of listeners) listener();
  }
}

function getClientSnapshot(): Status {
  if (cached === null) cached = getStatus(new Date());
  return cached;
}

function getServerSnapshot(): Status | null {
  return null;
}

// Re-checks every 30 seconds so a tab left open overnight does not keep
// claiming the office is open.
function subscribe(onChange: () => void): () => void {
  listeners.add(onChange);
  if (timer === null) timer = setInterval(refresh, 30_000);
  return () => {
    listeners.delete(onChange);
    if (listeners.size === 0 && timer !== null) {
      clearInterval(timer);
      timer = null;
    }
  };
}

export default function OpenStatus({ className = "" }: { className?: string }) {
  const status = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  return (
    <p
      className={`flex items-center gap-2 min-h-6 text-sm font-semibold text-ink-900 ${className}`}
      aria-live="polite"
    >
      {status ? (
        <>
          <span
            className={`w-2 h-2 rounded-full shrink-0 ${
              status.open ? "bg-teal-500" : "bg-ink-500"
            }`}
            aria-hidden="true"
          />
          {status.label}
        </>
      ) : (
        <span className="sr-only">Checking office hours</span>
      )}
    </p>
  );
}
