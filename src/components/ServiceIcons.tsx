const svgProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

/**
 * Primary Care — EKG line. On hover/focus/in-view a bright trace segment
 * sweeps left-to-right over a dimmed ghost of the line, with a leading
 * pulse dot riding the same path (CSS motion path, @supports-gated).
 */
export function PrimaryCareIcon() {
  return (
    <svg {...svgProps}>
      <path className="svc-ekg-base" d="M22 12h-4l-3 9L9 3l-3 9H2" />
      {/* Same geometry, drawn left-to-right so the dash sweep travels left-to-right */}
      <path className="svc-ekg-trace" d="M2 12h4l3-9 6 18 3-9h4" />
      <circle className="svc-ekg-dot" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Pediatrics — baby face. Plays once per trigger: a tear drops from the
 * left eye, then the sad mouth cross-fades into a smile (two mouth paths,
 * opacity only — no `d` animation, no SMIL).
 */
export function PediatricsIcon() {
  return (
    <svg {...svgProps}>
      <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
      <path d="M9 12h.01M15 12h.01" />
      <circle className="svc-tear" cx="9" cy="13.8" r="0.9" fill="currentColor" stroke="none" />
      <path className="svc-mouth-sad" d="M10 16.5c.5-.3 1.2-.5 2-.5s1.5.2 2 .5" />
      <path className="svc-mouth-smile" d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
    </svg>
  );
}

/**
 * Walk-In Care — walking figure (lucide stroke style, static pose is
 * mid-stride). On trigger: legs swing counter-phase around the hip, arms
 * swing counter-phase around the shoulder, whole figure bobs.
 */
export function WalkInIcon() {
  return (
    <svg {...svgProps}>
      <g className="svc-walker">
        <circle cx="13" cy="4.5" r="2.1" />
        <path d="M12.3 7L12 14" />
        <path className="svc-walk-arm-a" d="M12.2 9.5L9.3 12.8" />
        <path className="svc-walk-arm-b" d="M12.3 9.5L15.2 12.3" />
        <path className="svc-walk-leg-a" d="M12 14L10 20.3" />
        <path className="svc-walk-leg-b" d="M12 14L14 20.3" />
      </g>
    </svg>
  );
}

/**
 * Telehealth — monitor. On trigger the screen "turns on": a heartbeat
 * trace draws itself once inside the screen, and a tiny camera-on dot
 * fades in and pulses.
 */
export function TelehealthIcon() {
  return (
    <svg {...svgProps}>
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
      <path className="svc-screen-ekg" d="M6 10.5h2.5l1.5-3 3 6 1.5-3H18" />
      <circle className="svc-cam-dot" cx="12" cy="5.4" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Lab Services — test tube (replaces the old document icon). On trigger
 * liquid rises into the tube (a clipped rect translating up) and two
 * bubbles rise through it, staggered.
 */
export function LabIcon() {
  return (
    <svg {...svgProps}>
      <clipPath id="svc-lab-clip">
        <path d="M10 3h4v8l4.2 8a2.3 2.3 0 0 1-2 3.5H7.8a2.3 2.3 0 0 1-2-3.5L10 11V3z" />
      </clipPath>
      <path d="M9 3h6" />
      <path d="M10 3v8l-4.2 8a2.3 2.3 0 0 0 2 3.5h8.4a2.3 2.3 0 0 0 2-3.5L14 11V3" />
      <g clipPath="url(#svc-lab-clip)">
        <rect className="svc-lab-liquid" x="4" y="14" width="16" height="10" fill="currentColor" stroke="none" opacity="0.4" />
        <circle className="svc-lab-bubble-a" cx="10.5" cy="20" r="0.8" fill="currentColor" stroke="none" />
        <circle className="svc-lab-bubble-b" cx="13.5" cy="21" r="0.6" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

/**
 * In-Office Pharmacy — two capsules. On trigger each capsule gets a small
 * decaying rotation rattle around its own center, counter-phase.
 */
export function PharmacyIcon() {
  return (
    <svg {...svgProps}>
      <path d="m19 5 3-3" />
      <path d="m2 22 3-3" />
      <g className="svc-pill-a">
        <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
        <path d="M7.5 13.5 10 11" />
        <path d="M10.5 16.5 13 14" />
      </g>
      <g className="svc-pill-b">
        <path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" />
      </g>
    </svg>
  );
}
