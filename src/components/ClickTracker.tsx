"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { BOOKING_URL, DIRECTIONS_URL, FORMS_URL, VIDEO_VISIT_URL } from "@/lib/clinic";

function eventFor(href: string): string | null {
  if (href === BOOKING_URL) return "book_click";
  if (href === VIDEO_VISIT_URL) return "video_visit_click";
  if (href.startsWith("tel:")) return href === "tel:911" ? null : "call_click";
  if (href === DIRECTIONS_URL) return "directions_click";
  if (href === FORMS_URL) return "forms_click";
  return null;
}

// Nearest data-track label wins; otherwise fall back to the landmark the
// link sits in, so buttons on pages without labels are still attributed.
function locationFor(link: Element): string {
  const labelled = link.closest<HTMLElement>("[data-track]");
  if (labelled?.dataset.track) return labelled.dataset.track;
  if (link.closest("header")) return "header";
  if (link.closest("footer")) return "footer";
  return "page";
}

/**
 * One delegated listener for conversion clicks (Book, Call, Get directions,
 * New patient forms) across every page, so the pages themselves stay server
 * components. Renders nothing.
 */
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      const link = e.target.closest("a[href]");
      if (!link) return;
      const name = eventFor(link.getAttribute("href") ?? "");
      if (!name) return;
      track(name, {
        location: locationFor(link),
        page: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
