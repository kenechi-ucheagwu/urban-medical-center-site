import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.urbanmds.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/new-patients`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/pediatrics`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/family-medicine`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/walk-in-clinic`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/weight-loss`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
