import { BOOKING_URL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/clinic";

/**
 * Book / Call bar pinned to the bottom of every page on phones. The body
 * carries matching bottom padding (see layout.tsx) so the footer is never
 * hidden behind it.
 */
export default function StickyActions() {
  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-line pb-[env(safe-area-inset-bottom)]"
      aria-label="Book an appointment or call the office"
      data-track="sticky"
    >
      <div className="flex gap-3 px-4 py-2">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-press flex-1 inline-flex items-center justify-center min-h-12 rounded-lg bg-coral-500 hover:bg-coral-400 text-ink-900 font-semibold text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
        >
          Book Appointment
        </a>
        <a
          href={PHONE_HREF}
          className="btn-press flex-1 inline-flex items-center justify-center min-h-12 rounded-lg bg-white border-2 border-teal-700 text-teal-700 font-semibold text-base hover:bg-teal-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
          aria-label={`Call ${PHONE_DISPLAY}`}
        >
          Call
        </a>
      </div>
    </nav>
  );
}
