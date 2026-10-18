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

const PATH = "/family-medicine";
const TITLE = "Family Doctor in Jersey City, NJ | Urban Medical Center";
const DESCRIPTION =
  "Family doctor in Jersey City for adults, seniors and kids. Physicals, diabetes and blood pressure care, and bloodwork on site. Walk-ins welcome.";

export const metadata = carePageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  socialTitle: "Family doctor in Jersey City | Urban Medical Center",
});

const visits = [
  {
    title: "Physicals and checkups",
    desc: "Yearly exams for adults, plus school, sports and camp physicals for kids.",
  },
  {
    title: "Chronic condition care",
    desc: "Ongoing visits for diabetes, high blood pressure and high cholesterol, with your medicines reviewed and adjusted as needed.",
  },
  {
    title: "Preventive screenings",
    desc: "Screenings for cancer, diabetes and heart disease based on your age and history.",
  },
  {
    title: "Sick visits",
    desc: "Same-day care for colds, flu, infections and minor injuries. Walk-ins welcome.",
  },
  {
    title: "Immunizations",
    desc: "Vaccines for adults and children.",
  },
  {
    title: "Lab work on site",
    desc: "Our phlebotomist draws blood here, so routine bloodwork, A1C, cholesterol and thyroid tests don't need a trip to an outside lab.",
  },
  {
    title: "In-office pharmacy",
    desc: "Pick up your prescriptions before you leave.",
  },
  {
    title: "Telehealth for existing patients",
    desc: "Zoom visits for follow-ups, medication refills and going over results.",
  },
];

const whatToBring = [
  "Photo ID and your insurance card",
  "Your medicine bottles, or a current list with doses",
  "A list of allergies",
  "Home blood pressure or blood sugar readings, if you keep them",
  "Records or recent test results from a previous doctor",
  "The questions you want to ask",
];

const faqs: Faq[] = [
  {
    q: "Can my whole family see the same doctor?",
    a: "Yes. Dr. Ucheagwu sees patients of all ages, from infants to older adults, so parents, children and grandparents can all be seen at the same practice.",
  },
  {
    q: "Are you accepting new patients?",
    a: "Yes. Walk in during office hours for your first visit or book a time online. Printing and filling in the new patient forms ahead of time makes check-in faster.",
  },
  {
    q: "Do you accept Medicare?",
    a: "Yes, we accept Medicare. The full list of plans is on our New Patients page. Call (201) 332-7077 if you have questions about your coverage.",
  },
  {
    q: "Can I get blood work done at the office?",
    a: "Yes. Our on-site phlebotomist draws blood at the office, so routine bloodwork such as cholesterol, A1C and thyroid tests can be done without a trip to an outside lab.",
  },
  {
    q: "Do you offer telehealth visits?",
    a: "Yes, for existing patients. Virtual visits by Zoom work for follow-ups, refills and going over results. You can book one online from our Services page or call (201) 332-7077. New patients need an in-office visit first.",
  },
  {
    q: "Does the doctor speak Spanish?",
    a: "Dr. Ucheagwu speaks English. Our bilingual staff speak English and Spanish. Se habla español.",
  },
];

const linkClass = "font-semibold text-teal-700 hover:underline underline-offset-4";

export default function FamilyMedicinePage() {
  return (
    <>
      <JsonLd
        data={carePageJsonLd({
          path: PATH,
          name: TITLE,
          description: DESCRIPTION,
          specialty: "PrimaryCare",
          crumb: "Family Medicine",
        })}
      />

      <PageHeader
        eyebrow="Family medicine in Jersey City"
        title="A family doctor for everyone in your home."
        lede="Physicals, ongoing care for chronic conditions, sick visits, lab work and an in-office pharmacy, all at 95 Martin Luther King Jr Drive."
      />

      <section className="bg-white border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading
              eyebrow="Your family doctor"
              title="One doctor for the whole family"
            />
            <p className="text-ink-700 text-lg leading-relaxed mb-4 max-w-[62ch]">
              Family medicine means one doctor who can care for everyone in
              your household, from infants to older adults. At Urban Medical
              Center that doctor is Dr. Hyacinth E. Ucheagwu, MD. He has been
              caring for Jersey City families since 2007 and is affiliated with
              Jersey City Medical Center.
            </p>
            <p className="text-ink-700 leading-relaxed mb-6 max-w-[62ch]">
              Seeing the same doctor over time means he already knows your
              history, your medicines and what has worked before. Parents and
              children can see the same doctor at the same office, and bloodwork
              and prescriptions are handled in the building.
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
            <SectionHeading eyebrow="Visits" title="What we can help with" />
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
              eyebrow="Ongoing care"
              title="Living with diabetes or high blood pressure"
            />
            <p className="text-ink-700 leading-relaxed mb-4 max-w-[62ch]">
              Conditions like diabetes, high blood pressure and high
              cholesterol need regular follow-up, not just a visit when
              something goes wrong. Dr. Ucheagwu checks in on how you are
              doing, reviews your medicines and orders the lab work you need,
              which can be drawn here at the office.
            </p>
            <p className="text-ink-700 leading-relaxed max-w-[62ch]">
              If you check your blood pressure or blood sugar at home, bring
              your readings. They show how things look between visits. Existing
              patients can also use a telehealth visit for some follow-ups and
              refills.
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

      <ClinicVisitInfo lede="Walk in during office hours or book a time online." />

      <section className="bg-cream border-b border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading
              eyebrow="Common questions"
              title="Family medicine FAQ"
            />
            <FaqList faqs={faqs} />
            <p className="mt-8 text-ink-700 leading-relaxed">
              More care at Urban Medical Center:{" "}
              <Link href="/pediatrics" className={linkClass}>
                pediatrics
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
