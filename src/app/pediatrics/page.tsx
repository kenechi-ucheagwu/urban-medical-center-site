import Link from "next/link";
import Button from "@/components/Button";
import ClinicVisitInfo from "@/components/ClinicVisitInfo";
import FaqList, { type Faq } from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { BOOKING_URL, FORMS_URL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/clinic";
import { carePageJsonLd, carePageMetadata } from "@/lib/seo";

const PATH = "/pediatrics";
const TITLE = "Pediatrician in Jersey City, NJ | Urban Medical Center";
const DESCRIPTION =
  "Pediatric care in Jersey City for newborns, kids and teens: checkups, vaccines, sick visits, and school, sports and camp physicals. Walk-ins welcome.";

export const metadata = carePageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  socialTitle: "Pediatric care in Jersey City | Urban Medical Center",
});

const visits = [
  {
    title: "Well-child visits",
    desc: "Regular checkups to follow your child's growth and development, with developmental screenings along the way.",
  },
  {
    title: "Childhood immunizations",
    desc: "Vaccines given at checkups. Bring your child's shot record so we can see what is due.",
  },
  {
    title: "Sick visits",
    desc: "Colds, flu, infections and other everyday illnesses. Walk in during office hours when your child gets sick.",
  },
  {
    title: "Newborn care",
    desc: "Visits for newborns and infants in the first months of life.",
  },
  {
    title: "School, sports and camp physicals",
    desc: "The exam your child needs before the school year, the season or the summer.",
  },
  {
    title: "Teen health",
    desc: "Checkups, physicals and sick visits for adolescents.",
  },
];

const whatToBring = [
  "Your child's insurance card",
  "Photo ID for the parent or guardian",
  "Your child's immunization (shot) record",
  "Any school, sports or camp form for a physical",
  "A list of medicines your child takes and any allergies",
  "Records from a previous doctor, if you are switching",
];

const faqs: Faq[] = [
  {
    q: "Do you see newborns and babies?",
    a: "Yes. Dr. Ucheagwu sees newborns and infants, and keeps caring for children through their teen years and into adulthood.",
  },
  {
    q: "Is Dr. Ucheagwu a pediatrician?",
    a: "Dr. Ucheagwu is a family medicine physician who cares for children as well as adults. Pediatric care at Urban Medical Center includes well-child visits, immunizations, sick visits and physicals.",
  },
  {
    q: "Can I bring my child in without an appointment?",
    a: "Yes. Walk-ins are welcome during office hours, Monday to Friday 9am to 5pm and Saturday 9am to 2pm. You can also book a time online if you would rather not wait.",
  },
  {
    q: "Do you do school, sports and camp physicals?",
    a: "Yes. Bring the form from the school, team or camp, plus your child's immunization record, so the doctor can review them at the visit.",
  },
  {
    q: "What insurance do you accept for children?",
    a: "We accept Medicaid and a number of other plans. The full list is on our New Patients page. Call (201) 332-7077 to confirm your child's plan before the visit.",
  },
  {
    q: "Does anyone at the office speak Spanish?",
    a: "Dr. Ucheagwu speaks English. Our bilingual staff speak English and Spanish. Se habla español.",
  },
];

const linkClass = "font-semibold text-teal-700 hover:underline underline-offset-4";

export default function PediatricsPage() {
  return (
    <>
      <JsonLd
        data={carePageJsonLd({
          path: PATH,
          name: TITLE,
          description: DESCRIPTION,
          specialty: "Pediatric",
          crumb: "Pediatrics",
        })}
      />

      <PageHeader
        eyebrow="Pediatrics in Jersey City"
        title="Pediatric care from newborns to teens."
        lede="Well-child visits, vaccines, sick visits and physicals for school, sports and camp, at a family practice on Martin Luther King Jr Drive."
      />

      <section className="bg-white border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading
              eyebrow="Your child's doctor"
              title="One doctor who knows your family"
            />
            <p className="text-ink-700 text-lg leading-relaxed mb-4 max-w-[62ch]">
              If you are looking for a pediatrician in Jersey City, Urban
              Medical Center sees children of every age, from newborns and
              infants through the teen years. Dr. Hyacinth E. Ucheagwu, MD is a
              family medicine physician who cares for children and adults, so
              your kids and the grown-ups in your home can see the same doctor
              at the same office.
            </p>
            <p className="text-ink-700 leading-relaxed mb-6 max-w-[62ch]">
              Walk in during office hours when your child is sick, or book a
              checkup or physical online at a time that fits around school.
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
              eyebrow="Visits for kids"
              title="What we see children for"
            />
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {visits.map((visit) => (
                <div key={visit.title} className="border-t border-line pt-4">
                  <dt className="font-semibold text-ink-900 mb-1">
                    {visit.title}
                  </dt>
                  <dd className="text-ink-700 leading-relaxed">{visit.desc}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="bg-white border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading
              eyebrow="Physicals"
              title="School, sports and camp physicals"
            />
            <p className="text-ink-700 leading-relaxed mb-4 max-w-[62ch]">
              Many schools, sports teams and summer camps ask for a recent
              physical before a child can start. We do school, sports and camp
              physicals for kids and teens, on a walk-in basis or at a booked
              time.
            </p>
            <p className="text-ink-700 leading-relaxed mb-4 max-w-[62ch]">
              Bring the form the school, league or camp gave you and your
              child&apos;s immunization record, so the doctor can review both
              at the visit. In the weeks before school and camp start, booking
              a time online can save you a wait.
            </p>
            <p className="text-ink-700 leading-relaxed max-w-[62ch]">
              If your child had a physical somewhere else this year, tell us
              before the visit so we can help with the next step. Call{" "}
              <a
                href={PHONE_HREF}
                className="font-semibold text-teal-700 hover:underline underline-offset-4"
              >
                {PHONE_DISPLAY}
              </a>{" "}
              to check availability and any charges. A visit here does not by
              itself clear a student for sports; the school also reviews the
              paperwork.
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
              New to the practice? You can{" "}
              <a
                href={FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                print the new patient forms
              </a>{" "}
              and fill them in before you come.
            </p>
          </Reveal>
        </div>
      </section>

      <ClinicVisitInfo lede="Bring your child in during office hours, or book a time online." />

      <section className="bg-cream border-b border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading
              eyebrow="Questions from parents"
              title="Pediatric care FAQ"
            />
            <FaqList faqs={faqs} />
            <p className="mt-8 text-ink-700 leading-relaxed">
              More care at Urban Medical Center:{" "}
              <Link href="/family-medicine" className={linkClass}>
                family medicine
              </Link>
              ,{" "}
              <Link href="/walk-in-clinic" className={linkClass}>
                walk-in visits
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
            Book your child&apos;s visit
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
