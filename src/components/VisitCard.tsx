import OpenStatus from "@/components/OpenStatus";
import {
  ADDRESS_CITY,
  ADDRESS_STREET,
  DIRECTIONS_URL,
  HOURS_SHORT,
} from "@/lib/clinic";

/**
 * Today's status, regular hours and the address in one white card with a
 * teal top rule. Used in the homepage hero and on Contact. Coral is
 * reserved for the booking controls, so no accent colour appears here.
 */
export default function VisitCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-white border border-line rounded-xl overflow-hidden ${className}`}
      style={{ boxShadow: "var(--shadow-raised)" }}
    >
      <div className="h-[3px] bg-teal-700" aria-hidden="true" />
      <div className="p-4 space-y-3">
        <OpenStatus />

        <div>
          <p className="type-eyebrow text-teal-500 mb-0.5">Office hours</p>
          <p className="text-ink-700 text-[0.9375rem]">
            {HOURS_SHORT}, Sun closed
          </p>
        </div>

        <div>
          <p className="type-eyebrow text-teal-500 mb-0.5">Address</p>
          <p className="text-ink-700 text-[0.9375rem]">
            {ADDRESS_STREET}, {ADDRESS_CITY}
          </p>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center min-h-11 text-teal-700 font-semibold text-[0.9375rem] hover:underline underline-offset-4"
          >
            Get directions
          </a>
        </div>

        <p className="text-teal-700 font-semibold text-[0.9375rem] pt-2 border-t border-line">
          Se habla español
        </p>
      </div>
    </div>
  );
}
