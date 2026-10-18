import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import InsuranceGrid from "@/components/InsuranceGrid";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { BOOKING_URL, CARE_LINKS, PHONE_DISPLAY, PHONE_HREF, VIDEO_VISIT_URL } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Our Services | Urban Medical Center",
  description:
    "Primary care, pediatrics, walk-in clinic, lab services, telehealth & in-office pharmacy in Jersey City, NJ. Serving families of all ages.",
  alternates: { canonical: "https://www.urbanmds.com/services" },
  openGraph: {
    title: "Services | Urban Medical Center Jersey City",
    description:
      "Primary care, pediatrics, walk-in care, telehealth, lab services & in-office pharmacy in Jersey City, NJ.",
    url: "https://www.urbanmds.com/services",
    type: "website",
  },
};

const services = [
  {
    id: "primary-care",
    page: { href: "/family-medicine", label: "More about family medicine" },
    title: "Primary Care",
    description:
      "Dr. Ucheagwu provides primary care for adults, focusing on prevention, wellness, and management of chronic conditions.",
    items: [
      "Annual physical exams",
      "Chronic disease management (diabetes, hypertension, cholesterol)",
      "Preventive screenings (cancer, diabetes, heart disease)",
      "Immunizations and vaccinations",
      "Sick visits and acute care",
      "Health education and counseling",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: "pediatrics",
    page: { href: "/pediatrics", label: "More about pediatric care" },
    title: "Pediatrics",
    description:
      "Dr. Ucheagwu provides caring, thorough healthcare for infants, children, and adolescents from birth through age 18.",
    items: [
      "Well-child visits and developmental screenings",
      "Childhood immunizations",
      "School and sports physicals",
      "Sick visits",
      "Newborn care",
      "Adolescent health services",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 12h.01M15 12h.01M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
        <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
      </svg>
    ),
  },
  {
    id: "walk-in",
    page: { href: "/walk-in-clinic", label: "More about walk-in visits" },
    title: "Walk-In Care",
    description:
      "We are primarily a walk-in clinic. Visit us without an appointment during business hours, whenever you need care.",
    items: [
      "Same-day sick visits",
      "Minor illness treatment (cold, flu, infections)",
      "Minor injury care",
      "Routine checkups",
      "Vaccinations",
      "Lab work and screenings",
    ],
    note: "Hours: Mon-Fri 9am-5pm, Sat 9am-2pm",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: "telehealth",
    title: "Telehealth / Virtual Visits",
    description:
      "Cannot make it to the clinic? We offer virtual visits via Zoom for your convenience. Get the care you need from the comfort of your home.",
    items: [
      "Follow-up appointments",
      "Medication refills",
      "Minor health concerns",
      "Health consultations",
      "Results review",
    ],
    note: "Video visits are for established patients. New patients, please book an in-office visit first.",
    booking: { href: VIDEO_VISIT_URL, label: "Book a Video Visit" },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ),
  },
  {
    id: "lab",
    title: "Lab Services & Bloodwork",
    description:
      "Skip the trip to an outside lab. Our on-site phlebotomist draws blood right here in the office, making it easy to get the tests you need without extra appointments.",
    items: [
      "Routine bloodwork",
      "Cholesterol screening",
      "Diabetes testing (A1C, glucose)",
      "Thyroid panels",
      "Complete blood count (CBC)",
      "Other diagnostic lab tests",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    id: "pharmacy",
    title: "In-Office Pharmacy",
    description:
      "Convenience matters. Our in-office pharmacy lets you pick up prescriptions before you leave, saving you an extra stop.",
    items: [
      "Prescription filling",
      "Medication counseling",
      "Refill services",
      "Generic medication options",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m19 5 3-3" />
        <path d="m2 22 3-3" />
        <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
        <path d="M7.5 13.5 10 11" />
        <path d="M10.5 16.5 13 14" />
        <path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" />
      </svg>
    ),
  },
];


export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Care for the whole family, at one address."
        lede="Primary care, pediatrics, walk-in visits, telehealth, lab work, and an in-office pharmacy."
      />

      {/* Compact index so a fragment link from anywhere lands in one tap. */}
      <section className="bg-white border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h2 className="type-eyebrow text-teal-500 mb-3">On this page</h2>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 list-none">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={`#${service.id}`}
                  className="text-[0.9375rem] font-medium text-teal-700 hover:underline underline-offset-4"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="type-eyebrow text-teal-500 mt-5 mb-3">
            Dedicated pages
          </h2>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 list-none">
            {CARE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[0.9375rem] font-medium text-teal-700 hover:underline underline-offset-4"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal className="space-y-10">
            {services.map((service) => (
              /* scroll-mt-24 keeps the heading clear of the 64px sticky header. */
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-24 border-t border-line pt-8 first:border-0 first:pt-0"
              >
                <div className="flex items-start gap-4">
                  <span className="text-teal-500 shrink-0 mt-0.5">{service.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h2 className="type-section text-ink-900 mb-3">
                      {service.title}
                    </h2>
                    <p className="text-ink-700 leading-relaxed mb-5 max-w-[62ch]">
                      {service.description}
                    </p>
                    <h3 className="type-eyebrow text-teal-500 mb-3">
                      Services include
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-5 list-none">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[0.9375rem] text-ink-700"
                        >
                          <span
                            className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {service.page && (
                      <p className="mb-5">
                        <Link
                          href={service.page.href}
                          className="font-semibold text-teal-700 hover:underline underline-offset-4"
                        >
                          {service.page.label}
                        </Link>
                      </p>
                    )}
                    {service.note && (
                      <p className="text-[0.9375rem] text-ink-700 bg-teal-50 border border-line rounded-lg px-4 py-2.5 mb-5">
                        {service.note}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-3">
                      <Button href={service.booking?.href ?? BOOKING_URL}>
                        {service.booking?.label ?? "Book Appointment"}
                      </Button>
                      <Button href={PHONE_HREF} variant="secondary">
                        Call {PHONE_DISPLAY}
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-cream border-y border-line">
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

      {/* Shared inner-page CTA band */}
      <section className="bg-teal-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h2 className="type-section text-white mb-3 mx-auto">
            Ready to schedule your visit?
          </h2>
          <p className="text-white/85 mb-6">
            Book online, call us, or walk in during office hours. New patients
            welcome.
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
