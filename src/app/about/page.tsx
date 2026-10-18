import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  BOOKING_URL,
  DOCTOR_NAME,
  DOCTOR_TITLE,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/clinic";

export const metadata: Metadata = {
  title: "About Us | Urban Medical Center",
  description:
    "Meet Dr. Hyacinth Ucheagwu of Urban Medical Center. Compassionate healthcare for Jersey City families since 2007.",
  alternates: { canonical: "https://www.urbanmds.com/about" },
  openGraph: {
    title: "About Urban Medical Center | Dr. Hyacinth Ucheagwu",
    description:
      "Serving Jersey City since 2007. Dr. Hyacinth Ucheagwu provides compassionate primary care and pediatrics for all ages.",
    url: "https://www.urbanmds.com/about",
    type: "website",
  },
};

const values = [
  {
    title: "Compassion",
    desc: "We treat every patient with kindness, empathy, and respect.",
  },
  {
    title: "Community",
    desc: "We are proud to serve and support the Jersey City community.",
  },
  {
    title: "Excellence",
    desc: "We hold ourselves to the highest standards in healthcare delivery.",
  },
  {
    title: "Accessibility",
    desc: "Walk-in friendly hours make quality healthcare easy to reach.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Dedicated to your health since 2007."
        lede="A neighborhood practice on Martin Luther King Jr Drive, caring for Jersey City families of every age."
      />

      {/* Mission */}
      <section className="bg-white border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading eyebrow="Why we are here" title="Our mission" />
            <p className="text-ink-700 text-lg leading-relaxed mb-4 max-w-[62ch]">
              At Urban Medical Center, we provide high-quality, compassionate
              healthcare to the Jersey City community. We believe everyone
              deserves access to excellent medical care regardless of their
              background or circumstances.
            </p>
            <p className="text-ink-700 leading-relaxed max-w-[62ch]">
              Dr. Ucheagwu and our staff partner with patients and their
              families to understand each person&apos;s unique needs, delivering personalized care that
              addresses the whole person. From routine checkups to chronic disease
              management, we&apos;re here for every stage of life.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Doctor */}
      <section className="bg-cream border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading eyebrow="Meet the doctor" title={DOCTOR_NAME} />
            <div className="rounded-xl border border-line bg-white overflow-hidden">
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8">
                {/* Preserve the full portrait framing without cropping. */}
                <div
                  className="w-40 sm:w-[240px] shrink-0 rounded-xl border border-line bg-white p-2"
                  style={{ boxShadow: "var(--shadow-frame)" }}
                >
                  <Image
                    src="/images/dr-hyacinth-clean.png"
                    alt={`${DOCTOR_NAME}, Medical Director at Urban Medical Center`}
                    width={1022}
                    height={1538}
                    sizes="(min-width: 640px) 240px, 160px"
                    className="rounded-lg w-full h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink-900">
                    {DOCTOR_NAME}
                  </h3>
                  <p className="text-teal-700 font-semibold mb-4">
                    {DOCTOR_TITLE}
                  </p>
                  <p className="text-ink-700 leading-relaxed mb-4">
                    Dr. Ucheagwu leads Urban Medical Center with years of
                    experience in family and pediatric medicine. He provides
                    comprehensive care for patients of all ages, from newborns
                    through adulthood.
                  </p>
                  <p className="text-ink-700 leading-relaxed">
                    Known for taking time with each patient, Dr. Ucheagwu focuses
                    on education and prevention alongside treatment. He is
                    affiliated with Jersey City Medical Center.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-[0.9375rem] text-ink-500">
              Dr. Ucheagwu speaks English. Our bilingual staff speak English and
              Spanish. <span lang="es">Se habla español.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading eyebrow="How we work" title="Our values" />
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {values.map((value) => (
                <div key={value.title} className="border-t border-line pt-4">
                  <dt className="font-semibold text-ink-900 mb-1">
                    {value.title}
                  </dt>
                  <dd className="text-ink-700 leading-relaxed">{value.desc}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* History */}
      <section className="bg-cream border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading
              eyebrow="Our history"
              title="Serving Jersey City since 2007"
            />
            <p className="text-ink-700 text-lg leading-relaxed mb-4 max-w-[62ch]">
              Urban Medical Center has been providing quality healthcare to the
              Jersey City community since 2007. Located on Martin Luther King Jr.
              Drive, we have been a trusted healthcare resource for our neighbors
              for nearly two decades.
            </p>
            <p className="text-ink-700 leading-relaxed max-w-[62ch]">
              As a walk-in clinic, we make it easy for patients to get the care
              they need without the hassle of scheduling weeks in advance. We also
              offer telehealth appointments via Zoom for added convenience.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Shared inner-page CTA band */}
      <section className="bg-teal-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h2 className="type-section text-white mb-3 mx-auto">
            Become a patient
          </h2>
          <p className="text-white/85 mb-6">
            We are accepting new patients. Walk in or schedule your first visit.
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
