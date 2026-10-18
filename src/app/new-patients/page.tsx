import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  BOOKING_URL,
  FORMS_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  PLANS_ACCEPTED_TEXT,
  PLANS_NOT_ACCEPTED_TEXT,
  PORTAL_URL,
} from "@/lib/clinic";

export const metadata: Metadata = {
  title: "New Patients | Urban Medical Center",
  description:
    "New to Urban Medical Center? Learn what to bring, how insurance works, and how to get started as a new patient in Jersey City.",
  alternates: { canonical: "https://www.urbanmds.com/new-patients" },
  openGraph: {
    title: "New Patients | Urban Medical Center Jersey City",
    description:
      "Accepting new patients. Walk in or book online. Learn what to bring and how insurance works at Urban Medical Center.",
    url: "https://www.urbanmds.com/new-patients",
    type: "website",
  },
};

const whatToBring = [
  "Valid photo ID (driver's license, passport, or state ID)",
  "Insurance card",
  "List of current medications and dosages",
  "Any relevant medical records or test results",
  "List of allergies",
  "Questions or concerns you want to discuss",
];

const steps = [
  {
    num: "1",
    title: "Walk In or Book Online",
    desc: "You can walk in during business hours without an appointment, or book an in-office visit online with the Book Online button. Online booking does not need a portal account.",
  },
  {
    num: "2",
    title: "Check In at the Front Desk",
    desc: "Arrive a few minutes early if it's your first visit. Our staff will get you checked in and verify your insurance.",
  },
  {
    num: "3",
    title: "Meet with Dr. Ucheagwu",
    desc: "Dr. Ucheagwu will review your health history, listen to your concerns, and develop a care plan tailored to you.",
  },
  {
    num: "4",
    title: "Prescriptions and Lab Work",
    desc: "If needed, prescriptions can be filled in our on-site pharmacy and bloodwork done without leaving the building.",
  },
];

function ExternalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function NewPatientsPage() {
  return (
    <>
      <PageHeader
        eyebrow="New patients"
        title="Everything you need before your first visit."
        lede="We are accepting new patients. Walk in during office hours or book a time online."
      />

      <section className="bg-white border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            {/* Welcome */}
            <div className="rounded-xl border border-line bg-cream p-6 sm:p-8">
              <h2 className="type-section text-ink-900 mb-3">
                Walk-ins are welcome
              </h2>
              <p className="text-ink-700 leading-relaxed mb-5 max-w-[62ch]">
                You do not need an appointment for your first visit. Walk in
                during our business hours and we will take care of you. If you
                prefer to schedule ahead, you can book online.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href={BOOKING_URL} size="lg">
                  Book Online
                </Button>
                <Button href={PHONE_HREF} variant="secondary" size="lg">
                  Call {PHONE_DISPLAY}
                </Button>
              </div>
            </div>

            {/* Prepare: forms and portal sit directly under the welcome panel */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              <div className="rounded-xl border border-line bg-white p-6 flex flex-col">
                <h2 className="text-lg font-semibold text-ink-900 mb-3">
                  New Patient Intake Forms
                </h2>
                <p className="text-ink-700 text-[0.9375rem] leading-relaxed mb-5 flex-1">
                  Download and print your intake forms before your visit to save
                  time at the front desk. You can fill them out digitally and
                  print, or print blank and complete by hand.
                </p>
                <Button
                  href={FORMS_URL}
                  variant="secondary"
                  external
                  className="self-start"
                >
                  Print New Patient Forms
                </Button>
              </div>

              <div className="rounded-xl border border-line bg-white p-6 flex flex-col">
                <h2 className="text-lg font-semibold text-ink-900 mb-3">
                  Patient Portal
                </h2>
                <p className="text-ink-700 text-[0.9375rem] leading-relaxed mb-5 flex-1">
                  Access your health records, view lab results, request
                  prescription refills, and message your care team through the
                  Elation Health patient portal.
                </p>
                <a
                  href={PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start font-semibold text-teal-700 hover:underline underline-offset-4"
                >
                  Access Patient Portal
                  <ExternalIcon />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What to bring */}
      <section className="bg-cream border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading eyebrow="Come prepared" title="What to bring" />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 list-none">
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
          </Reveal>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading
              eyebrow="What happens"
              title="Your first visit, step by step"
            />
            <ol className="space-y-6 list-none">
              {steps.map((step) => (
                <li key={step.num} className="flex gap-4">
                  <span
                    className="w-8 h-8 shrink-0 rounded-full border-2 border-teal-700 text-teal-700 flex items-center justify-center font-semibold text-sm"
                    aria-hidden="true"
                  >
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-ink-700 leading-relaxed max-w-[62ch]">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Insurance */}
      <section className="bg-cream border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading eyebrow="Coverage" title="Insurance information" />
            <p className="text-ink-700 leading-relaxed mb-4 max-w-[62ch]">
              We accept {PLANS_ACCEPTED_TEXT}
            </p>
            <p className="text-ink-700 leading-relaxed mb-4 max-w-[62ch]">
              {PLANS_NOT_ACCEPTED_TEXT}
            </p>
            <p className="text-ink-700 leading-relaxed max-w-[62ch]">
              If you are uninsured or unsure about your coverage, call us at{" "}
              <a
                href={PHONE_HREF}
                className="text-teal-700 font-semibold hover:underline underline-offset-4"
              >
                {PHONE_DISPLAY}
              </a>{" "}
              and we will help figure out your options.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Shared inner-page CTA band */}
      <section className="bg-teal-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h2 className="type-section text-white mb-3 mx-auto">
            Ready for your first visit?
          </h2>
          <p className="text-white/85 mb-6">
            No appointment needed. Walk in or book online.
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
