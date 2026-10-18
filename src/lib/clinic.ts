/**
 * Single source for the public clinic facts that the header, footer, hero
 * and every page repeat. Values are copied verbatim from the pages they
 * replace — nothing here is new information.
 */

/** Elation booking for the in-person "Website Booking" (WEB) type, open to new and returning patients. */
export const BOOKING_URL =
  "https://app.elationemr.com/book/1117748590084100?appointment_types=1396794099368041";
/** Elation booking for Zoom video visits; established patients only. */
export const VIDEO_VISIT_URL =
  "https://app.elationemr.com/book/1117748590084100?appointment_types=1117785802014825";
export const PORTAL_URL = "https://app.elationemr.com/passport/login/";
export const FORMS_URL = "/new-patient-forms.html";

export const PHONE_DISPLAY = "(201) 332-7077";
export const PHONE_HREF = "tel:+12013327077";
export const FAX_DISPLAY = "(201) 332-7003";
export const EMAIL = "info@urbanmds.com";
export const EMAIL_HREF = "mailto:info@urbanmds.com";

export const ADDRESS_STREET = "95 Martin Luther King Jr Dr";
export const ADDRESS_CITY = "Jersey City, NJ 07305";
/** The practice's Google Maps listing, so directions land on the real place. */
export const DIRECTIONS_URL = "https://maps.google.com/?cid=4316858089011358640";
export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.6557021691183!2d-74.0879545!3d40.70357979999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2511a64b96555%3A0x7f3676372e697d5b!2s95%20Martin%20Luther%20King%20Dr%2C%20Jersey%20City%2C%20NJ%2007305!5e0!3m2!1sen!2sus!4v1768958674400!5m2!1sen!2sus";

export const JCMC_ER_URL =
  "https://www.rwjbh.org/jersey-city-medical-center/treatment-care/emergency-services/";

/** Short one-line form used in the header, hero card and footer. */
export const HOURS_SHORT = "Mon–Fri 9am–5pm, Sat 9am–2pm";

/** Full week, as shown in the Visit Us and Contact hours tables. */
export const HOURS: ReadonlyArray<readonly [string, string]> = [
  ["Monday", "9:00 AM – 5:00 PM"],
  ["Tuesday", "9:00 AM – 5:00 PM"],
  ["Wednesday", "9:00 AM – 5:00 PM"],
  ["Thursday", "9:00 AM – 5:00 PM"],
  ["Friday", "9:00 AM – 5:00 PM"],
  ["Saturday", "9:00 AM – 2:00 PM"],
  ["Sunday", "Closed"],
];

/** One-off office closures, as America/New_York dates (YYYY-MM-DD).
 *  OpenStatus skips these; the notice banner shows until the last one ends.
 *  Remove past entries once they are over. */
export const CLOSED_DATES: ReadonlyArray<string> = [];

/** Site-wide notice banner (closures or a one-day service change). Keep it
 *  neutral: no reason. It shows through NOTICE_LAST_DATE (America/New_York,
 *  YYYY-MM-DD); "" hides it. A closure also needs its days in CLOSED_DATES. */
export const NOTICE_LAST_DATE: string = "2026-10-15";
export const CLOSURE_NOTICE =
  "Telehealth (video/phone) visits only today, Thursday, October 15. Call (201) 332-7077 to schedule a same-day appointment.";

export const DOCTOR_NAME = "Dr. Hyacinth E. Ucheagwu, MD";
export const DOCTOR_TITLE = "Medical Director, Family & Pediatric Medicine";

/**
 * Plan marks shown in the insurance grid, in display order. Matches the
 * credentialing-verified list of 2026-10-01; only plans with direct evidence
 * of participation appear here.
 */
export const INSURERS: ReadonlyArray<{ name: string; file: string; tall?: boolean }> = [
  { name: "Medicare", file: "medicare.png" },
  { name: "NJ FamilyCare (Medicaid)", file: "medicaid.svg" },
  { name: "UnitedHealthcare", file: "unitedhealthcare.webp" },
  { name: "Horizon Blue Cross Blue Shield of NJ", file: "horizon.png" },
  { name: "Aetna", file: "aetna.png", tall: true },
  { name: "Cigna", file: "cigna.png" },
  { name: "Wellcare", file: "wellcare.png", tall: true },
  { name: "Fidelis Care", file: "fideliscare.png" },
  { name: "Clover Health", file: "clover.png" },
];

/** Full accepted-plans wording, shared by the FAQ, New Patients and the grid caption. */
export const PLANS_ACCEPTED_TEXT =
  "Medicare; Medicare Advantage plans from AARP/UnitedHealthcare (including Dual Complete), Wellcare (Fidelis Dual Align and Assist), Braven Health and Clover Health; NJ FamilyCare (Medicaid) through UnitedHealthcare Community Plan, Fidelis Care (Wellcare) and Aetna Better Health of New Jersey; Horizon Blue Cross Blue Shield of NJ (including OMNIA, Direct Access, Advantage EPO, HMO, POS, PPO, NJ Direct and NJ Educators); and Aetna, Cigna, UnitedHealthcare, Oxford, UMR, Ambetter and Oscar.";
export const PLANS_NOT_ACCEPTED_TEXT =
  "We do not accept Horizon NJ Health or Humana at this time. For Aetna Medicare Advantage, please ask our front desk.";
export const PLANS_CONFIRM_TEXT = "Plans change, so please call (201) 332-7077 to confirm your coverage.";

export const NAV_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/new-patients", label: "New Patients" },
  { href: "/contact", label: "Contact" },
];

/** Dedicated pages for the three services people search for by name. */
export const CARE_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/pediatrics", label: "Pediatrics" },
  { href: "/family-medicine", label: "Family Medicine" },
  { href: "/walk-in-clinic", label: "Walk-In Clinic" },
  { href: "/weight-loss", label: "Weight Loss" },
];

