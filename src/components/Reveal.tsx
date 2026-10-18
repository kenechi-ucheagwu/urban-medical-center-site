"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * One-time reveal for a section of content.
 *
 * Deliberately renders its children in their final visible state. Nothing is
 * hidden on the server, without JavaScript, or on first paint: the hidden
 * class is only applied after an IntersectionObserver has confirmed the
 * element is currently outside the viewport, so content already on screen
 * never flashes and never animates twice.
 *
 * prefers-reduced-motion is honoured at mount and again whenever the OS
 * setting changes, in which case the element is shown immediately. Focus
 * entering still-pending content also settles it at once, so keyboard users
 * and scripted focus never land on something invisible.
 */
export default function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | null = null;
    let firstReading = true;

    // Hoisted so settle() and onFocusIn() can refer to each other.
    function settle(animate: boolean) {
      observer?.disconnect();
      observer = null;
      el!.removeEventListener("focusin", onFocusIn);
      el!.classList.remove("reveal-pending");
      if (animate) el!.classList.add("reveal-shown");
    }

    // Keyboard tabbing or a scripted focus() can reach content that is still
    // waiting to be revealed. Show it immediately, without animating.
    function onFocusIn() {
      settle(false);
    }

    el.addEventListener("focusin", onFocusIn);

    if (!reduceMotion.matches) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (firstReading) {
              firstReading = false;
              // Already on screen at load: leave it alone entirely.
              if (entry.isIntersecting) {
                settle(false);
                return;
              }
              el.classList.add("reveal-pending");
              continue;
            }
            if (entry.isIntersecting) settle(true);
          }
        },
        // threshold 0 with an isIntersecting check: a section taller than the
        // viewport can never satisfy a percentage threshold, which would leave
        // it hidden forever. No rootMargin either, so the first reading matches
        // real visibility exactly and nothing already on screen is hidden.
        { threshold: 0 },
      );
      observer.observe(el);
    }

    const onPreferenceChange = () => {
      if (reduceMotion.matches) settle(false);
    };
    reduceMotion.addEventListener("change", onPreferenceChange);

    return () => {
      observer?.disconnect();
      el.removeEventListener("focusin", onFocusIn);
      reduceMotion.removeEventListener("change", onPreferenceChange);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
