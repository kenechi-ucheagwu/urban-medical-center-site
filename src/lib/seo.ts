import type { Metadata } from "next";

export const SITE_URL = "https://www.urbanmds.com";

/** The clinic entity is defined once, in the root layout's JSON-LD. */
export const CLINIC_REF = { "@id": `${SITE_URL}/#clinic` } as const;

const SHARE_IMAGE = {
  url: `${SITE_URL}/images/logo.png`,
  width: 400,
  height: 322,
};

/**
 * Next.js replaces a parent segment's openGraph and twitter objects instead
 * of merging them, so a page that sets its own must repeat the share image,
 * site name and locale or they disappear from that page.
 */
export function carePageMetadata({
  path,
  title,
  description,
  socialTitle,
}: {
  path: string;
  title: string;
  description: string;
  socialTitle: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "Urban Medical Center",
      locale: "en_US",
      title: socialTitle,
      description,
      url,
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description,
      images: [SHARE_IMAGE.url],
    },
  };
}

/** MedicalWebPage plus its breadcrumb trail (Home > Services > page). */
export function carePageJsonLd({
  path,
  name,
  description,
  specialty,
  crumb,
}: {
  path: string;
  name: string;
  description: string;
  specialty: "Pediatric" | "PrimaryCare";
  crumb: string;
}) {
  const url = `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: "en-US",
        specialty: `https://schema.org/${specialty}`,
        medicalAudience: "https://schema.org/Patient",
        about: CLINIC_REF,
        publisher: CLINIC_REF,
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${SITE_URL}/services`,
          },
          { "@type": "ListItem", position: 3, name: crumb, item: url },
        ],
      },
    ],
  };
}
