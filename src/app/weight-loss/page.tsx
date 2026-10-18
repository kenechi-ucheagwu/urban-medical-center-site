import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import ClinicVisitInfo from "@/components/ClinicVisitInfo";
import FaqList, { type Faq } from "@/components/FaqList";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { BOOKING_URL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/clinic";
import { carePageJsonLd, carePageMetadata } from "@/lib/seo";

const PATH = "/weight-loss";
const TITLE = "Medical Weight Loss in Jersey City, NJ | Urban Medical Center";
const DESCRIPTION =
  "Physician-led GLP-1 weight loss in Jersey City: semaglutide $299/month, tirzepatide $449/month. Weekly injections at our office or at home. Book online or call.";

/** Program prices, from the practice's GLP-1 program flyer (September 2026). */
const PRICES = [
  {
    name: "Semaglutide",
    detail: "Single-action GLP-1 with steady, consistent results",
    amount: "$299",
  },
  {
    name: "Tirzepatide",
    detail: "Dual-action GLP-1/GIP, our advanced option",
    amount: "$449",
  },
];

export const metadata = carePageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  socialTitle: "GLP-1 weight loss program in Jersey City | Urban Medical Center",
});

const steps = [
  {
    title: "1. Consultation",
    desc: "Medical history, BMI and a safety screening to confirm the program is right for you.",
  },
  {
    title: "2. Your plan",
    desc: "Your doctor recommends semaglutide or tirzepatide, and you choose injections at our office or at home.",
  },
  {
    title: "3. Start low, go slow",
    desc: "Your dose begins low and increases gradually over several months to help limit side effects.",
  },
  {
    title: "4. Track and adjust",
    desc: "At each visit we record your weight, review side effects and fine-tune your dose.",
  },
];

const options = [
  {
    label: "Option 1",
    title: "Weekly injections at our office",
    desc: "Come in once a week and our clinical team gives your injection, checks your weight and asks how you are feeling.",
    visits: "Visits: every week",
  },
  {
    label: "Option 2",
    title: "Self-injection at home",
    desc: "We teach you how to give your own weekly injection safely at home, then see you in the office to track your progress and adjust your dose.",
    visits: "Visits: monthly follow-up",
  },
];

const faqs: Faq[] = [
  {
    q: "How much does the program cost?",
    a: "The monthly medication fee is $299 for semaglutide or $449 for tirzepatide. Sliding-scale pricing and savings for prepaying three months are available; ask us during your consultation.",
  },
  {
    q: "Does insurance cover this?",
    a: "The monthly medication fee is self-pay, so you do not need insurance for the medication. Your doctor visits can be billed to your insurance (copays may apply). If you do not have insurance, doctor visits are an additional self-pay cost. Ask our front desk for current visit rates.",
  },
  {
    q: "Is this the same as Ozempic or Wegovy?",
    a: "No. Those are FDA-approved brand-name products. Our program uses compounded semaglutide or tirzepatide prepared for individual patients. Compounded medications are not FDA-approved, which is why physician oversight matters.",
  },
  {
    q: "Is this treatment safe?",
    a: "Semaglutide and tirzepatide have been studied in large clinical trials. Like any medication, they can cause side effects, which is why we start at a low dose, increase it slowly and monitor you throughout. If something does not feel right, we adjust.",
  },
  {
    q: "What side effects should I expect?",
    a: "The most common are nausea, reduced appetite, diarrhea and constipation, usually mild and most noticeable early on or after a dose increase. Call us right away for severe stomach pain, persistent vomiting or signs of an allergic reaction.",
  },
  {
    q: "Which injection option is right for me?",
    a: "Weekly injections at our office suit patients who want hands-on support and a weekly check-in. Self-injection at home suits patients who are comfortable giving their own shot and prefer a monthly office visit. Your doctor will help you decide.",
  },
  {
    q: "How long will I be on the program?",
    a: "Many patients stay on for 6 to 12 months while building lasting habits. Your doctor will then discuss a maintenance dose or gradually coming off the medication. Some weight can return after stopping if habits have not changed, so we use your time in the program to help you build routines that last.",
  },
  {
    q: "How do I get started?",
    a: "Book a consultation online and mention weight loss as the reason, or call us at (201) 332-7077. You can also walk in during office hours and ask about the program.",
  },
  {
    q: "Does anyone at the office speak Spanish?",
    a: "Dr. Ucheagwu speaks English. Our bilingual staff speak English and Spanish. Se habla español.",
  },
];

const linkClass = "font-semibold text-teal-700 hover:underline underline-offset-4";

export default function WeightLossPage() {
  return (
    <>
      <JsonLd
        data={carePageJsonLd({
          path: PATH,
          name: TITLE,
          description: DESCRIPTION,
          specialty: "PrimaryCare",
          crumb: "Weight Loss",
        })}
      />

      <PageHeader
        eyebrow="Medical weight loss in Jersey City"
        title="Physician-led GLP-1 weight loss program."
        lede="Medically supervised, tracked every step of the way, and adjusted to how your body responds. Semaglutide $299 a month or tirzepatide $449 a month."
      />

      <section className="bg-white border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <SectionHeading
                  eyebrow="Our weight loss program"
                  title="Care from a doctor you see in person"
                />
                <p className="text-ink-700 text-lg leading-relaxed mb-4">
                  Dr. Hyacinth E. Ucheagwu, MD reviews your history, prescribes
                  your plan and oversees your treatment from start to finish.
                  Regular weigh-ins and check-ins let you see your progress,
                  and your dose is adjusted gradually based on your results and
                  how you feel.
                </p>
                <p className="text-ink-700 leading-relaxed mb-6">
                  The medication is self-pay, so you do not need insurance to
                  get started.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button href={BOOKING_URL}>Book a Consultation</Button>
                  <Button href={PHONE_HREF} variant="secondary">
                    Call {PHONE_DISPLAY}
                  </Button>
                </div>
              </div>
              <Image
                src="/images/weight-loss-flyer.jpg"
                alt="Ask about our weight loss program: affordable weight loss injections without the wait. No insurance needed."
                width={1128}
                height={639}
                className="w-full h-auto rounded-xl border border-line"
                sizes="(min-width: 1024px) 28rem, 100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading eyebrow="How it works" title="Four steps, at your pace" />
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {steps.map((step) => (
                <div key={step.title} className="border-t border-line pt-4">
                  <dt className="font-semibold text-ink-900 mb-1">{step.title}</dt>
                  <dd className="text-ink-700 leading-relaxed">{step.desc}</dd>
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
              eyebrow="Your choice"
              title="Two ways to take your medication"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {options.map((opt) => (
                <div key={opt.title} className="rounded-xl border border-line p-5">
                  <p className="type-eyebrow text-teal-500 mb-2">{opt.label}</p>
                  <h3 className="font-semibold text-ink-900 text-lg mb-2">
                    {opt.title}
                  </h3>
                  <p className="text-ink-700 leading-relaxed mb-3">{opt.desc}</p>
                  <p className="font-semibold text-ink-900">{opt.visits}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream border-b border-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading eyebrow="Pricing" title="Medication pricing" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {PRICES.map((price) => (
                <div
                  key={price.name}
                  className="rounded-xl border border-line bg-white px-6 py-5"
                >
                  <h3 className="font-semibold text-ink-900 text-lg">{price.name}</h3>
                  <p className="text-ink-700 text-[0.9375rem] mb-3">{price.detail}</p>
                  <p className="text-teal-700">
                    <span className="text-4xl font-semibold">{price.amount}</span>{" "}
                    <span className="text-ink-700">/ month</span>
                  </p>
                </div>
              ))}
            </div>
            <p className="text-ink-700 leading-relaxed mb-3 max-w-[62ch]">
              <strong>Sliding-scale pricing</strong> and savings when you prepay
              three months are available. Ask us during your consultation.
            </p>
            <p className="text-ink-700 leading-relaxed mb-6 max-w-[62ch]">
              <strong>Doctor visits are billed separately.</strong> With
              insurance, visits are billed to your plan (copays may apply).
              Without insurance, visits are self-pay.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href={BOOKING_URL}>Book a Consultation</Button>
              <Button href={PHONE_HREF} variant="secondary">
                Call {PHONE_DISPLAY}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <ClinicVisitInfo lede="Start with a consultation: book online, call, or walk in during office hours." />

      <section className="bg-cream border-b border-line">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <Reveal>
            <SectionHeading eyebrow="Questions" title="Weight loss program FAQ" />
            <FaqList faqs={faqs} />
            <p className="mt-8 text-sm text-ink-700 leading-relaxed">
              <strong>Important safety information:</strong> Not appropriate for
              everyone, including people with a personal or family history of
              medullary thyroid cancer or MEN2, a history of pancreatitis, or
              who are pregnant or planning pregnancy. Eligibility is determined
              by your doctor. Compounded medications are prepared for
              individual patients and are not FDA-approved; they are not the
              same as brand-name Ozempic®, Wegovy®, Mounjaro® or Zepbound®.
              Individual results vary.
            </p>
            <p className="mt-6 text-ink-700 leading-relaxed">
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

      <section className="bg-teal-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h2 className="type-section text-white mb-3 mx-auto">
            Ready to take the first step?
          </h2>
          <p className="text-white/85 mb-6">
            Book a consultation online, call us, or walk in during office hours.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href={BOOKING_URL} size="lg" onDarkSurface>
              Book a Consultation
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
