import Image from "next/image";
import {
  INSURERS,
  PLANS_ACCEPTED_TEXT,
  PLANS_CONFIRM_TEXT,
  PLANS_NOT_ACCEPTED_TEXT,
} from "@/lib/clinic";

/**
 * Uniform plan-mark grid. Full colour, one tile height, with the same
 * names repeated as plain text underneath so the list is readable when
 * the logos are unfamiliar.
 */
export default function InsuranceGrid({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 list-none">
        {INSURERS.map((insurer) => (
          <li
            key={insurer.name}
            className="bg-white border border-line rounded-xl h-16 flex items-center justify-center p-3"
          >
            <Image
              src={`/images/${insurer.file}`}
              alt={insurer.name}
              width={96}
              height={32}
              className={`object-contain w-auto h-auto max-w-full ${insurer.tall ? "max-h-10" : "max-h-8"}`}
            />
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[0.9375rem] text-ink-500 leading-relaxed">
        We accept {PLANS_ACCEPTED_TEXT} {PLANS_NOT_ACCEPTED_TEXT}{" "}
        {PLANS_CONFIRM_TEXT}
      </p>
    </div>
  );
}
