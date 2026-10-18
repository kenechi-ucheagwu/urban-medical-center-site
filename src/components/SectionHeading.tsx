interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  id?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  id,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-6 lg:mb-8 ${className}`}>
      {eyebrow && <p className="type-eyebrow text-teal-500 mb-2">{eyebrow}</p>}
      <h2 id={id} className="type-section text-ink-900 max-w-[24ch]">
        {title}
      </h2>
      {lede && (
        <p className="mt-2 text-ink-700 leading-relaxed max-w-[56ch]">{lede}</p>
      )}
    </div>
  );
}
