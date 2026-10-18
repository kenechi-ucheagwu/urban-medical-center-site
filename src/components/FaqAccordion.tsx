import FaqList from "@/components/FaqList";
import {
  PLANS_ACCEPTED_TEXT,
  PLANS_CONFIRM_TEXT,
  PLANS_NOT_ACCEPTED_TEXT,
} from "@/lib/clinic";

const faqs = [
  {
    q: "Do I need an appointment?",
    a: "No. We are primarily a walk-in clinic. Just come in during business hours and we will see you. You can also book online if you prefer a scheduled time.",
  },
  {
    q: "What insurance do you accept?",
    a: `We accept ${PLANS_ACCEPTED_TEXT} ${PLANS_NOT_ACCEPTED_TEXT} ${PLANS_CONFIRM_TEXT}`,
  },
  {
    q: "Are you accepting new patients?",
    a: "Yes. We are currently accepting new patients. Walk in or book your first appointment online.",
  },
  {
    q: "What should I bring to my first visit?",
    a: "Please bring a valid photo ID, your insurance card, a list of current medications, and any relevant medical records.",
  },
  {
    q: "Do you offer telehealth visits?",
    a: "Yes, for established patients. Zoom video visits work for follow-ups, refills and going over results, and you can book one online from our Services page or call (201) 332-7077. New patients need an in-office visit first.",
  },
  {
    q: "Do you have Spanish-speaking staff?",
    a: "Yes, we have bilingual staff members who speak both English and Spanish. Se habla español.",
  },
];

/** Contact-page FAQ; rendering and FAQPage JSON-LD come from the shared FaqList. */
export default function FaqAccordion() {
  return <FaqList faqs={faqs} />;
}
