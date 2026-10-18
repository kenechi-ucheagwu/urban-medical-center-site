import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ClosureNotice from "@/components/ClosureNotice";
import { CLOSED_DATES } from "@/lib/clinic";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import ClickTracker from "@/components/ClickTracker";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Urban Medical Center | Jersey City Family Doctor & Walk-In Care",
  description:
    "Jersey City family doctor: primary care, pediatrics, walk-ins and telehealth with Dr. Hyacinth Ucheagwu. Se habla español. Medicare and Medicaid accepted; call to confirm your plan.",
  keywords:
    "primary care Jersey City, walk-in clinic Jersey City, pediatrician Jersey City, family doctor Jersey City, medicaid doctor Jersey City, se habla español",
  openGraph: {
    type: "website",
    siteName: "Urban Medical Center",
    title: "Urban Medical Center | Jersey City Family Doctor & Walk-In Care",
    description:
      "Walk-in primary care & pediatrics in Jersey City, NJ. Accepting Medicare and Medicaid. Book online or call (201) 332-7077.",
    url: "https://www.urbanmds.com",
    // logo.png is the practice mark at its real size. A purpose-made
    // 1200x630 sharing image has not been supplied yet.
    images: [
      {
        url: "https://www.urbanmds.com/images/logo.png",
        width: 400,
        height: 322,
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Medical Center | Jersey City Family Doctor & Walk-In Care",
    description:
      "Walk-in primary care & pediatrics in Jersey City, NJ. Accepting Medicare and Medicaid.",
    images: ["https://www.urbanmds.com/images/logo.png"],
  },
  alternates: {
    canonical: "https://www.urbanmds.com",
  },
  // Tab and home-screen icons come from the app/icon.png and
  // app/apple-icon.png file conventions; /favicon.ico is public/favicon.ico.
};

const CLINIC_ID = "https://www.urbanmds.com/#clinic";

// NPI numbers come from the environment (see .env.example) rather than the
// source. An unset variable leaves its identifier block out of the JSON-LD.
function npiIdentifier(npi: string | undefined) {
  return npi
    ? {
        identifier: {
          "@type": "PropertyValue",
          propertyID: "NPI",
          name: "NPI",
          value: npi,
        },
      }
    : {};
}

const clinic = {
  "@type": "MedicalClinic",
  "@id": CLINIC_ID,
  name: "Urban Medical Center",
  description:
    "Primary care and pediatrics walk-in clinic in Jersey City, NJ. Accepting Medicare and Medicaid.",
  url: "https://www.urbanmds.com",
  logo: "https://www.urbanmds.com/images/logo.png",
  image: "https://www.urbanmds.com/images/logo.png",
  telephone: "+1-201-332-7077",
  faxNumber: "+1-201-332-7003",
  email: "info@urbanmds.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "95 Martin Luther King Jr Dr",
    addressLocality: "Jersey City",
    addressRegion: "NJ",
    postalCode: "07305",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.70358,
    longitude: -74.08795,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  // One-off closures; opens = closes = 00:00 marks the whole day closed.
  specialOpeningHoursSpecification: CLOSED_DATES.map((date) => ({
    "@type": "OpeningHoursSpecification",
    validFrom: date,
    validThrough: date,
    opens: "00:00",
    closes: "00:00",
  })),
  medicalSpecialty: ["PrimaryCare", "Pediatric"],
  // Services listed on the site. Plain Service offers: these are not
  // MedicalProcedures, which is what availableService expects.
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: [
      "Primary Care",
      "Pediatrics",
      "Walk-In Care",
      "Lab Services & Bloodwork",
      "Telehealth",
      "In-Office Pharmacy",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
  paymentAccepted: "Cash, Credit Card, Medicare, Medicaid",
  currenciesAccepted: "USD",
  isAcceptingNewPatients: true,
  // Bilingual front-desk staff; the physician himself is English only.
  knowsLanguage: ["en", "es"],
  ...npiIdentifier(process.env.NEXT_PUBLIC_CLINIC_NPI),
  // WebMD, Vitals and Zocdoc profile URLs are still unknown; add them here
  // once the site owner supplies them.
  sameAs: [
    "https://www.facebook.com/p/URBAN-MEDICAL-CENTER-100069396969155/",
    "https://www.linkedin.com/company/urban-medical",
    "https://maps.google.com/?cid=4316858089011358640",
  ],
};

// schema.org's Physician is a MedicalOrganization type; adding Person makes
// worksFor and knowsLanguage valid for an individual doctor.
const physician = {
  "@type": ["Physician", "Person"],
  "@id": "https://www.urbanmds.com/#physician",
  name: "Hyacinth E. Ucheagwu, MD",
  jobTitle: "Medical Director",
  image: "https://www.urbanmds.com/images/dr-hyacinth-clean.png",
  medicalSpecialty: ["PrimaryCare", "Pediatric"],
  knowsLanguage: "en",
  hospitalAffiliation: {
    "@type": "Hospital",
    name: "Jersey City Medical Center",
  },
  worksFor: { "@id": CLINIC_ID },
  ...npiIdentifier(process.env.NEXT_PUBLIC_PHYSICIAN_NPI),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [clinic, physician],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* Bottom padding clears the fixed mobile Book / Call bar so the
          footer is never covered by it. */}
      <body className="min-h-full flex flex-col antialiased pb-[calc(4rem+env(safe-area-inset-bottom))] md:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-teal-700 focus:shadow-lg"
        >
          Skip to content
        </a>
        <ClosureNotice />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyActions />
        <ClickTracker />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
