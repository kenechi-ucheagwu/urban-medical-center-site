import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Page Not Found | Urban Medical Center",
};

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our services" },
  { href: "/contact", label: "Contact and directions" },
];

export default function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="Page not found"
        title="We couldn't find that page."
        lede="The link may be old or mistyped. These pages have what most visitors are looking for."
      />

      <section className="bg-white border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
          <ul className="space-y-1 mb-8 list-none">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center min-h-11 text-lg font-semibold text-teal-700 underline underline-offset-4 hover:no-underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-ink-700 leading-relaxed mb-4 max-w-[52ch]">
            Need help now? Call the office and we will point you in the right
            direction.
          </p>
          <Button href={PHONE_HREF} variant="secondary" size="lg">
            Call {PHONE_DISPLAY}
          </Button>
        </div>
      </section>
    </>
  );
}
