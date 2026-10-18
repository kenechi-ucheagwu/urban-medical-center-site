import type { Metadata } from "next";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import InsuranceGrid from "@/components/InsuranceGrid";
import MapEmbed from "@/components/MapEmbed";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import VisitCard from "@/components/VisitCard";
import {
  ADDRESS_CITY,
  ADDRESS_STREET,
  BOOKING_URL,
  DIRECTIONS_URL,
  EMAIL,
  EMAIL_HREF,
  FAX_DISPLAY,
  HOURS,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Contact Us | Urban Medical Center",
  description:
    "Contact Urban Medical Center in Jersey City, NJ. Call (201) 332-7077, walk in Mon-Fri 9am-5pm, Sat 9am-2pm, or send us a message.",
  alternates: { canonical: "https://www.urbanmds.com/contact" },
  openGraph: {
    title: "Contact Urban Medical Center | (201) 332-7077",
    description:
      "Reach Urban Medical Center in Jersey City. Walk-ins welcome, Mon-Fri 9am-5pm, Sat 9am-2pm.",
    url: "https://www.urbanmds.com/contact",
    type: "website",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Urban Medical Center",
  url: "https://www.urbanmds.com/contact",
  // The full clinic entity is defined once, in the root layout.
  mainEntity: { "@id": "https://www.urbanmds.com/#clinic" },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />

      <PageHeader
        eyebrow="Contact"
        title="We are here to help."
        lede="Call, walk in during office hours, or send us a message."
      />

      {/* Reach us */}
      <section className="bg-white border-b border-line" data-track="contact_details">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
              <div>
                <SectionHeading eyebrow="Get in touch" title="Reach the office" />

                <dl className="space-y-5">
                  <div>
                    <dt className="type-eyebrow text-teal-500 mb-1">Phone</dt>
                    <dd>
                      <a
                        href={PHONE_HREF}
                        className="text-lg font-semibold text-teal-700 hover:underline underline-offset-4"
                      >
                        {PHONE_DISPLAY}
                      </a>
                      <p className="mt-2 text-[0.9375rem] text-ink-700">
                        Patients of our Bergen Avenue office can reach us at{" "}
                        {PHONE_DISPLAY}.
                      </p>
                      <p lang="es" className="mt-1 text-[0.9375rem] text-ink-700">
                        Los pacientes de nuestra oficina de Bergen Avenue pueden
                        comunicarse con nosotros al {PHONE_DISPLAY}.
                      </p>
                    </dd>
                  </div>
                  <div>
                    <dt className="type-eyebrow text-teal-500 mb-1">Address</dt>
                    <dd className="text-ink-700">
                      {ADDRESS_STREET}
                      <br />
                      {ADDRESS_CITY}
                      <br />
                      <a
                        href={DIRECTIONS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-1 font-semibold text-teal-700 hover:underline underline-offset-4"
                      >
                        Get directions
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="type-eyebrow text-teal-500 mb-1">Email</dt>
                    <dd>
                      <a
                        href={EMAIL_HREF}
                        className="text-teal-700 font-semibold hover:underline underline-offset-4"
                      >
                        {EMAIL}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="type-eyebrow text-teal-500 mb-1">Fax</dt>
                    <dd className="text-ink-700">{FAX_DISPLAY}</dd>
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
                    </dd>
                  </div>
                  <div>
                    <dt className="type-eyebrow text-teal-500 mb-1">Languages</dt>
                    <dd className="text-ink-700">
                      Dr. Ucheagwu speaks English. Our bilingual staff speak
                      English and Spanish.{" "}
                      <span className="text-teal-700 font-semibold">
                        Se habla español
                      </span>
                    </dd>
                  </div>
                </dl>

                <div className="flex flex-wrap gap-3 mt-8">
                  <Button href={BOOKING_URL} size="lg">
                    Book Appointment
                  </Button>
                  <Button href={PHONE_HREF} variant="secondary" size="lg">
                    Call {PHONE_DISPLAY}
                  </Button>
                </div>
              </div>

              <div className="space-y-5">
                <VisitCard />
                <MapEmbed className="h-[320px] lg:h-[380px]" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Message form */}
      <section className="bg-cream border-b border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading
              eyebrow="Write to us"
              title="Send us a message"
              lede="For general office questions. We reply within 1–2 business days. For anything about your care, call the office or use the patient portal."
            />
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Insurance */}
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

      {/* FAQ */}
      <section className="bg-cream border-b border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading eyebrow="Good to know" title="Common questions" />
            <FaqAccordion />
          </Reveal>
        </div>
      </section>

      {/* Shared inner-page CTA band */}
      <section className="bg-teal-700" data-track="cta_band">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h2 className="type-section text-white mb-3 mx-auto">
            Ready to visit?
          </h2>
          <p className="text-white/85 mb-6">
            Walk in during business hours or book online.
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
