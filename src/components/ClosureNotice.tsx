"use client";

import { useSyncExternalStore } from "react";

import { CLOSURE_NOTICE, NOTICE_LAST_DATE, PHONE_HREF } from "@/lib/clinic";

// Last notice date, New York time. The notice is rendered on the server (so
// it is in the HTML crawlers and first paint see) and hidden on the client
// once that day is over.
const LAST_CLOSED = NOTICE_LAST_DATE;

function todayInNewYork(): string {
  // en-CA formats as YYYY-MM-DD.
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York",
  }).format(new Date());
}

function subscribe(): () => void {
  return () => {};
}

export default function ClosureNotice() {
  const visible = useSyncExternalStore(
    subscribe,
    () => LAST_CLOSED !== "" && todayInNewYork() <= LAST_CLOSED,
    () => LAST_CLOSED !== "",
  );

  if (!visible) return null;

  return (
    <div
      role="status"
      className="bg-red-700 text-white border-b-4 border-red-900 px-4 py-3.5 sm:py-4"
    >
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-center sm:text-left">
        <p className="text-[1.0625rem] sm:text-xl font-bold leading-snug">
          {CLOSURE_NOTICE}
        </p>
        <a
          href={PHONE_HREF}
          className="shrink-0 rounded-full bg-white text-red-700 px-5 py-2 text-base sm:text-lg font-bold hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Call now
        </a>
      </div>
    </div>
  );
}
