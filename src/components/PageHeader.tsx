interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  lede?: string;
}

/** Cream band at the top of every inner page. No gradient, no wave. */
export default function PageHeader({ eyebrow, title, lede }: PageHeaderProps) {
  return (
    <section className="bg-cream border-b border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {eyebrow && (
          <p className="type-eyebrow text-teal-500 mb-2">{eyebrow}</p>
        )}
        <h1 className="type-display text-ink-900 max-w-[16ch]">{title}</h1>
        {lede && (
          <p className="mt-3 text-ink-700 text-base leading-relaxed max-w-[52ch]">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}
