"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Adds the `in-view` class to its wrapper the first time it scrolls into
 * view, so touch devices (no hover) can play each service icon's animation
 * once. No-op on devices with hover capability — desktop uses :hover and
 * :focus-visible instead.
 */
export default function InView({
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
    if (window.matchMedia("(hover: hover)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
