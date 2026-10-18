import JsonLd from "@/components/JsonLd";

export interface Faq {
  q: string;
  a: string;
}

/**
 * Server-rendered FAQ. Native <details> keeps every answer in the HTML for
 * crawlers and works without JavaScript; the FAQPage JSON-LD is built from
 * the same array so the markup and the visible text cannot drift.
 */
export default function FaqList({ faqs }: { faqs: ReadonlyArray<Faq> }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.q}
            className="group rounded-xl border border-line bg-white overflow-hidden open:border-teal-700"
          >
            <summary className="flex items-center justify-between gap-4 px-5 py-4 min-h-14 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span className="font-semibold text-ink-900 group-hover:text-teal-700 group-open:text-teal-700">
                {faq.q}
              </span>
              <span
                className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-teal-50 text-teal-700 group-open:bg-teal-700 group-open:text-white"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-200 motion-reduce:transition-none group-open:rotate-180"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </summary>
            <div className="px-5 pb-5">
              <p className="text-ink-700 leading-relaxed border-t border-line pt-3">
                {faq.a}
              </p>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
