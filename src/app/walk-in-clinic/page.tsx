import Link from "next/link";
import Button from "@/components/Button";
import ClinicVisitInfo from "@/components/ClinicVisitInfo";
import FaqList, { type Faq } from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  BOOKING_URL,
  FORMS_URL,
  JCMC_ER_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/clinic";
import { carePageJsonLd, carePageMetadata } from "@/lib/seo";

const PATH = "/walk-in-clinic";
const TITLE = "Walk-In Clinic in Jersey City, NJ | Urban Medical Center";
const DESCRIPTION =
  "Walk-in clinic in Jersey City, no appointment needed. Sick visits, minor injuries and physicals for kids and adults. Mon-Fri 9am-5pm, Sat 9am-2pm.";

export const metadata = carePageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  socialTitle: "Walk-in clinic in Jersey City | Urban Medical Center",
});

const walkInCare = [
  "Same-day sick visits",
  "Colds, flu and infections",
  "Minor injuries",
  "School, sports, camp and adult physicals",
  "Routine checkups",
  "Vaccinations",
  "Lab work and screenings",
  "Prescriptions filled at our in-office pharmacy",
];

const whatToBring = [
  "Photo ID",
  "Your insurance card",
  "A list of your medicines and allergies",
  "For children: their insurance card and immunization record",
  "Any school, sports or camp form, if you need a physical",
  "Printed new patient forms, if it is your first visit",
];

const faqs: Faq[] = [
  {
    q: "Do I need an appointment?",
    a: "No. Walk in any time during office hours, Monday to Friday 9am to 5pm and Saturday 9am to 2pm. We are closed on Sunday. You can also book online if you prefer a set time.",
  },
  {
    q: "How long is the wait?",
    a: "It depends on how many patients are in the office that day. If you want a set time, book online, or call (201) 332-7077 before you come.",
  },
  {
    q: "Can children be seen as walk-ins?",
    a: "Yes. Kids and adults can both walk in. Bring your child's insurance card and immunization record.",
  },
  {
    q: "Can I walk in for a physical?",
    a: "Yes. We do school, sports and camp physicals as well as adult physicals. Bring any form the school, team or camp gave you.",
  },
  {
    q: "Is this an urgent care or an emergency room?",
    a: "Neither. We are a family medicine practice that welcomes walk-ins for everyday illnesses and minor injuries. For an emergency, call 911 or go to the nearest emergency room.",
  },
  {
    q: "Can new patients walk in?",
    a: "Yes. New patients are welcome to walk in. Printing and filling in the new patient forms ahead of time makes check-in faster.",
  },
];

const linkClass = "font-semibold text-teal-700 hover:underline underline-offset-4";

export default function WalkInClinicPage() {
  return (
    <>
      <JsonLd
        data={carePageJsonLd({
          path: PATH,
          name: TITLE,
          description: DESCRIPTION,
          specialty: "PrimaryCare",
          crumb: "Walk-In Clinic",
        })}
      />

      <PageHeader
        eyebrow="Walk-in care in Jersey City"
        title="Walk-in clinic in Jersey City. No appointment needed."
        lede="Come in Monday to Friday 9am to 5pm or Saturday 9am to 2pm. Kids and adults welcome."
      />

      <section className="bg-white border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Walk in, check in, see the doctor"
            />
            <p className="text-ink-700 text-lg leading-relaxed mb-4 max-w-[62ch]">
              Urban Medical Center is a family practice that welcomes walk-ins.
              You don&apos;t need an appointment: come in during office hours,
              check in at the front desk, and you will be seen by Dr. Hyacinth
              E. Ucheagwu, MD.
            </p>
            <p className="text-ink-700 leading-relaxed mb-4 max-w-[62ch]">
              Walk-in visits can involve a wait, depending on how busy the
              office is that day. If you would rather have a set time, book
              online. If you are heading over close to closing time, call{" "}
              <a href={PHONE_HREF} className={linkClass}>
                {PHONE_DISPLAY}
              </a>{" "}
              first.
            </p>
            <p className="text-ink-700 leading-relaxed mb-6 max-w-[62ch]">
              Because we are a regular doctor&apos;s office, a walk-in visit
              can turn into ongoing care. The same doctor can follow up with
              you, and your records stay in one place.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href={BOOKING_URL}>Book Appointment</Button>
              <Button href={PHONE_HREF} variant="secondary">
                Call {PHONE_DISPLAY}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading
              eyebrow="Walk-in visits"
              title="What you can walk in for"
            />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 list-none">
              {walkInCare.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-700">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-white border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading
              eyebrow="Emergencies"
              title="When to go to the ER instead"
            />
            <p className="text-ink-700 leading-relaxed mb-4 max-w-[62ch]">
              Walk-in care is for everyday illnesses and minor injuries. For
              chest pain, trouble breathing, signs of a stroke, heavy bleeding,
              a serious injury or any other emergency, call 911 or go to the
              nearest emergency room.
            </p>
            <p className="text-ink-700 leading-relaxed max-w-[62ch]">
              Dr. Ucheagwu is affiliated with Jersey City Medical Center, which
              has an{" "}
              <a
                href={JCMC_ER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                emergency department
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading eyebrow="Come prepared" title="What to bring" />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 list-none mb-5">
              {whatToBring.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-700">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-ink-700 leading-relaxed max-w-[62ch]">
              First visit?{" "}
              <a
                href={FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Print the new patient forms
              </a>{" "}
              and fill them in before you come.
            </p>
          </Reveal>
        </div>
      </section>

      <ClinicVisitInfo lede="No appointment needed. Walk in any time we are open." />

      <section className="bg-cream border-b border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading
              eyebrow="Common questions"
              title="Walk-in clinic FAQ"
            />
            <FaqList faqs={faqs} />
            <p className="mt-8 text-ink-700 leading-relaxed">
              More care at Urban Medical Center:{" "}
              <Link href="/pediatrics" className={linkClass}>
                pediatrics
              </Link>
              ,{" "}
              <Link href="/family-medicine" className={linkClass}>
                family medicine
              </Link>{" "}
              and{" "}
              <Link href="/services" className={linkClass}>
                all services
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Shared inner-page CTA band */}
      <section className="bg-teal-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h2 className="type-section text-white mb-3 mx-auto">
            No appointment needed
          </h2>
          <p className="text-white/85 mb-6">
            Walk in during office hours, or book online if you prefer a set
            time.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href={BOOKING_URL} size="lg" onDarkSurface>
              Book Appointment
            </Button>
            <Button href={PHONE_HREF} variant="onDark" size="lg">
              Call {PHONE_DISPLAY}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
