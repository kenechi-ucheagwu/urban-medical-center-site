import Link from "next/link";
import type { ReactNode } from "react";

export type ButtonVariant =
  | "primary" // coral fill, dark ink text — the booking action
  | "solid" // deep teal fill, white text
  | "secondary" // white fill, teal border and text
  | "ghost" // teal text only
  | "onDark"; // white fill, teal text — for use on the teal bands

export type ButtonSize = "md" | "lg";

const VARIANTS: Record<ButtonVariant, string> = {
  // #1C2626 on #E8704A is 5.06:1; on the #F08060 hover it is 5.88:1.
  primary:
    "bg-coral-500 hover:bg-coral-400 text-ink-900 border-2 border-transparent",
  solid:
    "bg-teal-700 hover:bg-teal-900 text-white border-2 border-transparent",
  secondary:
    "bg-white hover:bg-teal-50 text-teal-700 border-2 border-teal-700",
  ghost:
    "bg-transparent text-teal-700 hover:underline underline-offset-4 border-2 border-transparent px-0",
  onDark:
    "bg-white hover:bg-teal-50 text-teal-700 border-2 border-transparent",
};

const SIZES: Record<ButtonSize, string> = {
  md: "min-h-11 px-4 py-2 text-base",
  lg: "min-h-12 px-6 py-3 text-base",
};

// btn-press owns the transitions (colour, shadow and a 1px hover lift plus
// a press scale), and is neutralised under prefers-reduced-motion.
const BASE =
  "btn-press inline-flex items-center justify-center gap-2 rounded-lg font-semibold leading-tight focus-visible:outline-2 focus-visible:outline-offset-2";

// Teal outlines disappear against the dark teal bands, so buttons sitting on
// those surfaces focus with a white ring instead.
const FOCUS_LIGHT = "focus-visible:outline-teal-700";
const FOCUS_DARK = "focus-visible:outline-white";

function classes(
  variant: ButtonVariant,
  size: ButtonSize,
  onDarkSurface: boolean,
  className: string,
): string {
  const focus = onDarkSurface || variant === "onDark" ? FOCUS_DARK : FOCUS_LIGHT;
  return `${BASE} ${focus} ${VARIANTS[variant]} ${SIZES[size]} ${className}`.trim();
}

interface ButtonProps {
  children: ReactNode;
  /** Internal route (uses next/link) or absolute/tel/mailto URL (uses <a>). */
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  external?: boolean;
  /** Set on the dark teal CTA bands so the focus ring stays visible. */
  onDarkSurface?: boolean;
  "aria-label"?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  onDarkSurface = false,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const cls = classes(variant, size, onDarkSurface, className);

  if (href.startsWith("/") && !external) {
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  const isHttp = href.startsWith("http") || external;

  return (
    <a
      href={href}
      className={cls}
      aria-label={ariaLabel}
      {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
