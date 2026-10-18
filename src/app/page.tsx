import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import InsuranceGrid from "@/components/InsuranceGrid";
import InView from "@/components/InView";
import MapEmbed from "@/components/MapEmbed";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import VisitCard from "@/components/VisitCard";
import {
  ADDRESS_CITY,
  ADDRESS_STREET,
  BOOKING_URL,
  DIRECTIONS_URL,
  DOCTOR_NAME,
  FORMS_URL,
  HOURS,
  PHONE_DISPLAY,
  PHONE_HREF,
  PORTAL_URL,
} from "@/lib/clinic";
import {
  PrimaryCareIcon,
  PediatricsIcon,
  WalkInIcon,
  TelehealthIcon,
  LabIcon,
  PharmacyIcon,
} from "@/components/ServiceIcons";

export const metadata: Metadata = {
  title: "Urban Medical Center | Jersey City Family Doctor & Walk-In Care",
  description:
    "Jersey City family doctor: primary care, pediatrics, walk-ins and telehealth with Dr. Hyacinth Ucheagwu. Se habla español. Medicare and Medicaid accepted; call to confirm your plan.",
  alternates: { canonical: "https://www.urbanmds.com" },
};

const services = [
  {
    id: "primary-care",
    title: "Primary Care",
    line: "Physicals, chronic disease management, and preventive screenings for adults.",
    icon: <PrimaryCareIcon />,
  },
  {
    id: "pediatrics",
    title: "Pediatrics",
    line: "Well-child visits, immunizations, and care from newborns through teens.",
    icon: <PediatricsIcon />,
  },
  {
    id: "walk-in",
    title: "Walk-In Care",
    line: "No appointment needed. Walk in during office hours.",
    icon: <WalkInIcon />,
  },
  {
    id: "telehealth",
    title: "Telehealth",
    line: "Virtual visits via Zoom for follow-ups, refills, and consultations.",
    icon: <TelehealthIcon />,
  },
  {
    id: "lab",
    title: "Lab Services",
    line: "On-site phlebotomist for bloodwork, cholesterol, and diabetes testing.",
    icon: <LabIcon />,
  },
  {
    id: "pharmacy",
    title: "In-Office Pharmacy",
    line: "Pick up prescriptions before you leave, without an extra trip.",
    icon: <PharmacyIcon />,
  },
];

const testimonials = [
  {
    text: "Love Dr. Hyacinth! My kids have been going to him since they were babies. It's never a long wait and he never tries to just rush you in and out.",
    source: "Review on WebMD",
  },
  {
    text: "Dr. Hyacinth is very knowledgeable. During an office visit, you actually feel like you are being educated at the same time. He is also a huge advocate for prevention of illness and disease.",
    source: "Review on Vitals",
  },
  {
    text: "He actually listened without condescension and responded to concerns with kindness and professionalism. I was very pleasantly surprised.",
    source: "Review on Zocdoc",
  },
];

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        className="bg-cream border-b border-line"
        aria-label="Introduction"
        data-track="hero"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-7">
            {/* No entrance animation on the headline or the actions row: the
                H1 is the mobile LCP element and Book should be usable on the
                first frame. */}
            <div className="lg:col-start-1 lg:col-span-7 lg:row-start-1">
              <p className="type-eyebrow text-teal-500 mb-3">
                Family and walk-in care in Jersey City
              </p>
              <h1 className="type-display text-ink-900 max-w-[16ch]">
                Your family doctor on Martin Luther King Jr Drive.
              </h1>
              <p className="mt-4 text-ink-700 text-base sm:text-lg leading-relaxed max-w-[52ch]">
                Primary care, pediatrics, lab work, and an in-office pharmacy at
                one address. Book online or call (201) 332-7077 today.
              </p>
            </div>

            {/* Preserve the full portrait framing at each responsive size. */}
            <figure className="motion-rise motion-delay-1 flex items-center gap-3.5 lg:block lg:col-start-9 lg:col-span-4 lg:row-start-1 lg:row-span-2">
              <div
                className="shrink-0 w-[72px] p-1 lg:w-auto lg:max-w-[300px] lg:p-2 rounded-xl overflow-hidden border border-line bg-white"
                style={{ boxShadow: "var(--shadow-frame)" }}
              >
                {/* min-width 1024px matches Tailwind's lg breakpoint, which is
                    where the layout actually switches to the 300px portrait. */}
                <Image
                  src="/images/dr-hyacinth-clean.png"
                  alt={`${DOCTOR_NAME}, Medical Director at Urban Medical Center`}
                  width={1022}
                  height={1538}
                  sizes="(min-width: 1024px) 300px, 72px"
                  className="rounded-lg w-full h-auto"
                  preload
                  fetchPriority="high"
                />
              </div>
              <figcaption className="lg:mt-3">
                <span className="block font-semibold text-ink-900">
                  {DOCTOR_NAME}
                </span>
                <span className="block text-[0.9375rem] text-ink-500">
                  Medical Director
                </span>
              </figcaption>
            </figure>

            {/* Only the visit card animates here; the actions row is static so
                Book and Call are on screen from the first frame. */}
            <div className="lg:col-start-1 lg:col-span-7 lg:row-start-2">
              <div className="flex flex-wrap items-center gap-3">
                <Button href={BOOKING_URL} size="lg">
                  Book Appointment
                </Button>
                {/* Call is already in the header icon and the fixed bottom
                    bar on phones, so it only appears from sm up. */}
                <div className="hidden sm:block">
                  <Button href={PHONE_HREF} variant="secondary" size="lg">
                    Call {PHONE_DISPLAY}
                  </Button>
                </div>
              </div>
              <VisitCard className="motion-rise motion-delay-2 mt-5 max-w-md" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Weight loss program banner ───────────────────────────── */}
      <section className="bg-teal-700" data-track="weight-loss-banner">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-white text-lg leading-snug">
            <strong>New: physician-led GLP-1 weight loss program.</strong>{" "}
            <span className="text-white/85">
              Doctor-supervised weight loss injections. No insurance needed
              for the medication.
            </span>
          </p>
          <Link
            href="/weight-loss"
            className="inline-flex items-center justify-center min-h-11 px-5 rounded-lg bg-white text-teal-700 font-semibold hover:bg-cream transition-colors shrink-0"
          >
            Learn more
          </Link>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section className="bg-white border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading eyebrow="Services" title="What we do here" />
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 list-none">
              {services.map((service) => (
                <li key={service.id}>
                  <InView className="h-full">
                    <Link
                      href={`/services#${service.id}`}
                      className="group svc-row flex h-full items-start gap-4 rounded-xl border border-line bg-white p-4 lg:p-5 hover:border-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
                    >
                      <span className="svc-icon-wrap text-teal-500 group-hover:text-teal-700 shrink-0">
                        {service.icon}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block font-semibold text-ink-900 mb-1">
                          {service.title}
                        </span>
                        <span className="block text-[0.9375rem] text-ink-500 leading-relaxed">
                          {service.line}
                        </span>
                      </span>
                      <span
                        className="svc-arrow text-teal-700 shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <ArrowIcon />
                      </span>
                    </Link>
                  </InView>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── The practice & first visit ───────────────────────────── */}
      <section className="bg-cream border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              <div>
                <SectionHeading
                  eyebrow="The practice"
                  title="Serving Jersey City since 2007"
                />
                <p className="text-ink-700 leading-relaxed mb-4 max-w-[56ch]">
                  Dr. Ucheagwu has been caring for Jersey City families since
                  2007, from newborns through grandparents. Affiliated with Jersey
                  City Medical Center, he takes time with every patient and
                  focuses on prevention as much as treatment.
                </p>
                <p className="text-ink-700 leading-relaxed mb-5 max-w-[56ch]">
                  He speaks English, and our bilingual staff is here to help in
                  Spanish. Se habla español.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-semibold text-teal-700 hover:underline underline-offset-4"
                >
                  More about Dr. Ucheagwu
                  <ArrowIcon />
                </Link>
              </div>

              <div>
                <SectionHeading eyebrow="New patients" title="Before your first visit" />
                <ul className="space-y-2.5 mb-6">
                  {[
                    "A valid photo ID",
                    "Your insurance card",
                    "A list of your current medications",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-ink-700">
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Button href={FORMS_URL} variant="secondary" external>
                    Print New Patient Forms
                  </Button>
                  <Button href={PORTAL_URL} variant="secondary">
                    Patient Portal
                  </Button>
                </div>
                <p className="mt-4 text-[0.9375rem] text-ink-500">
                  <Link
                    href="/new-patients"
                    className="text-teal-700 font-semibold hover:underline underline-offset-4"
                  >
                    What to expect, step by step
                  </Link>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Insurance ────────────────────────────────────────────── */}
      <section className="bg-white border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading
              eyebrow="Coverage"
              title="Insurance plans we accept"
              lede={`Call ${PHONE_DISPLAY} to confirm your specific plan before your visit.`}
            />
            <InsuranceGrid />
          </Reveal>
        </div>
      </section>

      {/* ── Patient feedback ─────────────────────────────────────── */}
      <section className="bg-cream border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading eyebrow="In their words" title="Patient feedback" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {testimonials.map((t) => (
                <figure
                  key={t.source}
                  className="flex flex-col rounded-xl border border-line bg-white p-4 lg:p-5"
                >
                  <blockquote className="text-ink-700 leading-relaxed flex-1">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 pt-3 border-t border-line text-[0.9375rem] text-ink-500">
                    {t.source}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Visit us ─────────────────────────────────────────────── */}
      <section className="bg-white" data-track="visit">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading eyebrow="Find us" title="Visit us" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <div>
                  <h3 className="type-eyebrow text-teal-500 mb-2">Hours</h3>
                  <table className="text-[0.9375rem] w-full max-w-xs">
                    <caption className="sr-only">Office hours</caption>
                    <tbody>
                      {HOURS.map(([day, hours]) => (
                        <tr key={day} className="border-b border-line last:border-0">
                          <th scope="row" className="py-1.5 pr-6 text-left font-medium text-ink-700">
                            {day}
                          </th>
                          <td className="py-1.5 text-ink-700">{hours}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div>
                  <h3 className="type-eyebrow text-teal-500 mb-2">Address</h3>
                  <p className="text-ink-700">
                    {ADDRESS_STREET}
                    <br />
                    {ADDRESS_CITY}
                  </p>
                  <a
                    href={DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 font-semibold text-teal-700 hover:underline underline-offset-4"
                  >
                    Get directions
                  </a>
                </div>

                <div>
                  <h3 className="type-eyebrow text-teal-500 mb-2">Phone</h3>
                  <a
                    href={PHONE_HREF}
                    className="text-lg font-semibold text-teal-700 hover:underline underline-offset-4"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>

                <Button href={BOOKING_URL} size="lg">
                  Book Appointment
                </Button>
              </div>

              <MapEmbed className="h-[320px] lg:h-[420px]" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
