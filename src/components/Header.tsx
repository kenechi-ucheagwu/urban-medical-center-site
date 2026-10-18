"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  BOOKING_URL,
  JCMC_ER_URL,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_HREF,
  PORTAL_URL,
} from "@/lib/clinic";

function PhoneIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // The emergency bar lives inside <header> (so it sits in a landmark), but
  // it should scroll away like before while the nav row stays pinned. A
  // negative sticky offset equal to the bar's height does that; the height
  // is measured because the bar wraps to two lines on narrow phones.
  const emergencyBarRef = useRef<HTMLDivElement>(null);
  const [emergencyBarHeight, setEmergencyBarHeight] = useState(0);
  useEffect(() => {
    const bar = emergencyBarRef.current;
    if (!bar || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(() =>
      setEmergencyBarHeight(bar.offsetHeight),
    );
    observer.observe(bar);
    return () => observer.disconnect();
  }, []);

  // Close the menu when the route changes, including on browser back/forward.
  const [menuPath, setMenuPath] = useState(pathname);
  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

  // Escape closes the menu and returns focus to the button that opened it.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b border-line"
      style={emergencyBarHeight ? { top: -emergencyBarHeight } : undefined}
    >
      {/* Utility bar: emergency routing only. The 911 link gets a full
          44px target; it is the one link that must never be mis-tapped. */}
      <div
        ref={emergencyBarRef}
        className="bg-teal-900 text-white text-center text-sm leading-relaxed py-1 px-4"
      >
        <strong>Medical emergency?</strong> Call{" "}
        <a
          href="tel:911"
          className="inline-flex items-center justify-center min-h-11 min-w-11 px-2 align-middle underline font-bold focus-visible:outline-white focus-visible:outline-offset-2"
        >
          911
        </a>{" "}
        or visit{" "}
        <a
          href={JCMC_ER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline focus-visible:outline-white focus-visible:outline-offset-2"
        >
          Jersey City Medical Center ER
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 min-w-0"
            aria-label="Urban Medical Center, home"
          >
            <Image
              src="/images/logo.png"
              alt=""
              width={36}
              height={36}
              className="object-contain shrink-0"
              loading="eager"
            />
            <span className="font-semibold text-teal-700 text-[15px] sm:text-base leading-tight">
              Urban Medical Center
            </span>
          </Link>

          <nav
            className="hidden xl:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent(link.href) ? "page" : undefined}
                className={`text-sm font-medium border-b-2 py-1 transition-colors ${
                  isCurrent(link.href)
                    ? "text-teal-700 border-teal-700"
                    : "text-ink-700 border-transparent hover:text-teal-700 hover:border-line"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={PHONE_HREF}
              className="hidden xl:inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:underline underline-offset-4"
            >
              <PhoneIcon />
              {PHONE_DISPLAY}
            </a>
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:inline text-sm font-medium text-ink-700 hover:text-teal-700"
            >
              Patient Portal
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press hidden md:inline-flex items-center justify-center min-h-10 px-4 rounded-lg bg-coral-500 hover:bg-coral-400 text-ink-900 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              Book Appointment
            </a>

            {/* Phone icon covers every width below xl, including 768-1279 where the
                fixed bottom bar is hidden and the phone text link is not shown. */}
            <a
              href={PHONE_HREF}
              className="xl:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-teal-700 hover:bg-teal-50 transition-colors"
              aria-label={`Call ${PHONE_DISPLAY}`}
            >
              <PhoneIcon size={20} />
            </a>

            <button
              ref={menuButtonRef}
              onClick={() => setMenuOpen((open) => !open)}
              className="xl:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-ink-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Always mounted so the panel can animate closed as well as open.
          inert and aria-hidden flip the moment the menu closes, so the links
          leave the tab order and the accessibility tree immediately rather
          than waiting for the collapse transition to finish. */}
      <div
        id="mobile-menu"
        data-open={menuOpen}
        inert={!menuOpen}
        aria-hidden={!menuOpen}
        className="menu-panel"
        data-track="mobile_menu"
      >
        <div>
          <div className="bg-white border-t border-line px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent(link.href) ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                  isCurrent(link.href)
                    ? "bg-teal-50 text-teal-700"
                    : "text-ink-700 hover:bg-teal-50 hover:text-teal-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-3 rounded-lg text-base font-medium text-ink-700 hover:bg-teal-50 hover:text-teal-700"
            >
              Patient Portal
            </a>
            <a
              href={PHONE_HREF}
              className="block px-3 py-3 rounded-lg text-base font-semibold text-teal-700 hover:bg-teal-50"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
