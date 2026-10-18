import Image from "next/image";
import Link from "next/link";
import {
  ADDRESS_CITY,
  ADDRESS_STREET,
  EMAIL,
  EMAIL_HREF,
  FORMS_URL,
  HOURS_SHORT,
  CARE_LINKS,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_HREF,
  PORTAL_URL,
} from "@/lib/clinic";

// White focus ring: the global teal outline is invisible on the dark band.
// min-h-11 gives every footer link a 44px tap row.
const linkClass =
  "inline-flex items-center min-h-11 text-white/85 hover:text-white hover:underline underline-offset-4 transition-colors rounded-sm focus-visible:outline-white focus-visible:outline-offset-2";

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 min-h-11 mb-4 rounded-sm focus-visible:outline-white focus-visible:outline-offset-2"
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="font-semibold text-white">Urban Medical Center</span>
        </Link>

        <div className="flex flex-wrap items-center gap-x-6 text-base text-white/85">
          <p>
            {ADDRESS_STREET}, {ADDRESS_CITY}
          </p>
          <p>
            <a href={PHONE_HREF} className={linkClass}>
              {PHONE_DISPLAY}
            </a>
          </p>
          <p>
            <a href={EMAIL_HREF} className={linkClass}>
              {EMAIL}
            </a>
          </p>
          <p>{HOURS_SHORT}</p>
        </div>

        <nav
          className="mt-4 flex flex-wrap gap-x-5 text-base"
          aria-label="Footer navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
          {CARE_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
          <Link href="/privacy" className={linkClass}>
            Privacy Policy
          </Link>
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Patient Portal
          </a>
          <a
            href={FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            New Patient Forms
          </a>
        </nav>

        <div className="mt-6 pt-5 border-t border-white/15 flex flex-col sm:flex-row sm:justify-between gap-1.5 text-sm text-white/75">
          <p>&copy; 2026 Urban Medical Center. All rights reserved.</p>
          <p>Affiliated with Jersey City Medical Center</p>
        </div>
      </div>
    </footer>
  );
}
