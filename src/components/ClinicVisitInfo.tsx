import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  ADDRESS_CITY,
  ADDRESS_STREET,
  DIRECTIONS_URL,
  HOURS,
  INSURERS,
  PHONE_DISPLAY,
  PHONE_HREF,
  PLANS_NOT_ACCEPTED_TEXT,
} from "@/lib/clinic";

const planNames = INSURERS.map((i) => i.name);
const planSentence = `${planNames.slice(0, -1).join(", ")} and ${planNames[planNames.length - 1]}`;

const linkClass =
  "font-semibold text-teal-700 hover:underline underline-offset-4";

/**
 * Hours, location, insurance and language facts shared by the pediatrics,
 * family medicine and walk-in pages. Everything comes from clinic.ts.
 */
export default function ClinicVisitInfo({ lede }: { lede?: string }) {
  return (
    <section className="bg-white border-b border-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
        <Reveal>
          <SectionHeading
            eyebrow="Visit us"
            title="Hours, location and insurance"
            lede={lede}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <dl className="space-y-5">
              <div>
                <dt className="type-eyebrow text-teal-500 mb-1">Address</dt>
                <dd className="text-ink-700 leading-relaxed">
                  {ADDRESS_STREET}, {ADDRESS_CITY}
                  <br />
                  We are on Martin Luther King Jr Drive in the Greenville
                  section of Jersey City.
                  <br />
                  <a
                    href={DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block mt-1 ${linkClass}`}
                  >
                    Get directions
                  </a>
                </dd>
              </div>
              <div>
                <dt className="type-eyebrow text-teal-500 mb-2">Hours</dt>
                <dd>
                  <table className="text-[0.9375rem] w-full max-w-xs">
                    <caption className="sr-only">Office hours</caption>
                    <tbody>
                      {HOURS.map(([day, hours]) => (
                        <tr
                          key={day}
                          className="border-b border-line last:border-0"
                        >
                          <th
                            scope="row"
                            className="py-1.5 pr-6 text-left font-medium text-ink-700"
                          >
                            {day}
                          </th>
                          <td className="py-1.5 text-ink-700">{hours}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="mt-2 text-[0.9375rem] text-ink-700">
                    Walk-ins are welcome any time we are open.
                  </p>
                </dd>
              </div>
            </dl>

            <dl className="space-y-5">
              <div>
                <dt className="type-eyebrow text-teal-500 mb-1">Phone</dt>
                <dd>
                  <a href={PHONE_HREF} className={`text-lg ${linkClass}`}>
                    {PHONE_DISPLAY}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="type-eyebrow text-teal-500 mb-1">Insurance</dt>
                <dd className="text-ink-700 leading-relaxed">
                  We accept plans including {planSentence}.{" "}
                  {PLANS_NOT_ACCEPTED_TEXT} Call{" "}
                  <a href={PHONE_HREF} className={linkClass}>
                    {PHONE_DISPLAY}
                  </a>{" "}
                  to confirm your plan before your visit.{" "}
                  <Link href="/new-patients" className={linkClass}>
                    Insurance details for new patients
                  </Link>
                </dd>
              </div>
              <div>
                <dt className="type-eyebrow text-teal-500 mb-1">Languages</dt>
                <dd className="text-ink-700 leading-relaxed">
                  Dr. Ucheagwu speaks English. Our bilingual staff speak
                  English and Spanish.{" "}
                  <span lang="es" className="text-teal-700 font-semibold">
                    Se habla español.
                  </span>
                </dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
