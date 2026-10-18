import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | Urban Medical Center",
  description:
    "Learn how Urban Medical Center collects, uses, and protects your information on our website.",
  robots: { index: false },
  alternates: { canonical: "https://www.urbanmds.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        lede="How we collect, use, and protect your information"
      />

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base text-ink-500 italic mb-8">
            Effective Date: March 2026
          </p>

          <p className="text-ink-700 leading-relaxed mb-6">
            Urban Medical Center (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) operates the website{" "}
            <a
              href="https://www.urbanmds.com"
              className="text-teal-700 underline underline-offset-4 hover:no-underline"
            >
              www.urbanmds.com
            </a>
            . This Privacy Policy explains how we collect, use, and protect
            information when you visit our website.
          </p>

          <div className="bg-cream border-l-4 border-teal-700 rounded-lg p-5 mb-8">
            <p className="text-base text-ink-700 leading-relaxed">
              <strong>Important:</strong> This policy covers our{" "}
              <em>website</em> only. Your patient health records and medical
              information are protected under HIPAA and governed by a separate
              Notice of Privacy Practices, available at our office. Questions
              about medical records?{" "}
              <Link
                href="/contact"
                className="text-teal-700 underline underline-offset-4 hover:no-underline font-medium"
              >
                Contact us directly.
              </Link>
            </p>
          </div>

          {[
            {
              title: "1. Information We Collect",
              content: (
                <>
                  <p className="text-ink-700 leading-relaxed mb-3">
                    We collect limited information through our website:
                  </p>
                  <ul className="list-disc list-inside text-ink-700 space-y-2 mb-3 text-base">
                    <li>
                      <strong>Contact form submissions:</strong> Name, phone
                      number, email address (if provided), subject, and message
                      content.
                    </li>
                    <li>
                      <strong>Website usage data:</strong> IP address, browser
                      type, pages visited, and visit timestamps collected
                      automatically by our web server.
                    </li>
                    <li>
                      <strong>Online booking:</strong> When you book through our
                      scheduling system (Elation Health), your information is
                      managed by Elation Health under their own privacy policy.
                    </li>
                  </ul>
                  <p className="text-ink-700 text-base">
                    We do not collect sensitive personal information such as
                    Social Security numbers, financial account numbers, or health
                    information through this website.
                  </p>
                </>
              ),
            },
            {
              title: "2. How We Use Your Information",
              content: (
                <>
                  <ul className="list-disc list-inside text-ink-700 space-y-2 text-base">
                    <li>Respond to inquiries submitted through the contact form</li>
                    <li>Improve our website based on usage patterns</li>
                    <li>
                      Follow up on requests for information about our services
                    </li>
                  </ul>
                  <p className="text-ink-700 text-base mt-3">
                    We do not sell, rent, or share your personal information with
                    third parties for marketing purposes.
                  </p>
                </>
              ),
            },
            {
              title: "3. Patient Health Information",
              content: (
                <p className="text-ink-700 text-base leading-relaxed">
                  Urban Medical Center is subject to HIPAA. Your medical
                  records, health information, and any data collected during your
                  care are governed separately under our HIPAA Notice of Privacy
                  Practices. A copy is available at our office at 95 Martin
                  Luther King Jr Dr, Jersey City, NJ 07305, or by calling{" "}
                  <a
                    href="tel:+12013327077"
                    className="text-teal-700 underline underline-offset-4 hover:no-underline"
                  >
                    (201) 332-7077
                  </a>
                  .
                </p>
              ),
            },
            {
              title: "4. Third-Party Services",
              content: (
                <>
                  <ul className="list-disc list-inside text-ink-700 space-y-2 text-base">
                    <li>
                      <strong>Google Maps:</strong> Our Home and Contact pages
                      show a map only if you choose &ldquo;Show map&rdquo;. Once
                      loaded, Google may collect usage data per{" "}
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-700 underline underline-offset-4 hover:no-underline"
                      >
                        Google&apos;s Privacy Policy
                      </a>
                      .
                    </li>
                    <li>
                      <strong>Google Fonts:</strong> Used for website typography.
                      Google may collect basic usage data when fonts load.
                    </li>
                    <li>
                      <strong>Vercel Web Analytics and Speed Insights:</strong>{" "}
                      Our hosting provider counts anonymous page views, link
                      clicks and page-load performance so we can improve the
                      site. These tools do not use cookies and do not identify
                      you.
                    </li>
                    <li>
                      <strong>Elation Health:</strong> Patient portal and
                      appointment booking. Your information is managed by Elation
                      Health under their privacy policy and HIPAA requirements.
                    </li>
                  </ul>
                </>
              ),
            },
            {
              title: "5. Cookies and Tracking",
              content: (
                <p className="text-ink-700 text-base leading-relaxed">
                  Our website uses minimal cookies. We only use essential cookies
                  necessary for the website to function properly. We do not use
                  advertising cookies or third-party tracking cookies for
                  marketing purposes. Third-party embeds such as Google Maps may
                  set their own cookies.
                </p>
              ),
            },
            {
              title: "6. Data Security",
              content: (
                <>
                  <ul className="list-disc list-inside text-ink-700 space-y-2 text-base mb-3">
                    <li>
                      Our website uses SSL/TLS encryption (HTTPS) for all data
                      transmission
                    </li>
                    <li>
                      Access to personal information is limited to authorized
                      staff
                    </li>
                    <li>
                      Contact form submissions are retained only as long as
                      needed to address your inquiry
                    </li>
                  </ul>
                  <p className="text-ink-700 text-base">
                    While we take reasonable precautions, no method of internet
                    transmission is completely secure.
                  </p>
                </>
              ),
            },
            {
              title: "7. Children's Privacy",
              content: (
                <p className="text-ink-700 text-base leading-relaxed">
                  Our website is not directed at children under 13. We do not
                  knowingly collect personal information from children under 13
                  through this website. As a pediatric care provider, we do
                  collect health information from minor patients as part of
                  medical care, which is governed separately by HIPAA.
                </p>
              ),
            },
            {
              title: "8. Your Rights",
              content: (
                <>
                  <ul className="list-disc list-inside text-ink-700 space-y-2 text-base mb-3">
                    <li>Request information about what we have collected</li>
                    <li>Request deletion of your personal information</li>
                    <li>Opt out of follow-up communications</li>
                  </ul>
                  <p className="text-ink-700 text-base">
                    To exercise these rights, contact us using the information
                    below. For rights related to your medical records, refer to
                    our HIPAA Notice of Privacy Practices.
                  </p>
                </>
              ),
            },
            {
              title: "9. Changes to This Policy",
              content: (
                <p className="text-ink-700 text-base leading-relaxed">
                  We may update this Privacy Policy periodically. If we make
                  changes, we will update the Effective Date at the top of this
                  page. Continued use of our website after changes indicates
                  acceptance of the updated policy.
                </p>
              ),
            },
            {
              title: "10. Contact Us",
              content: (
                <ul className="list-disc list-inside text-ink-700 space-y-2 text-base">
                  <li>
                    <strong>In person:</strong> 95 Martin Luther King Jr Dr,
                    Jersey City, NJ 07305
                  </li>
                  <li>
                    <strong>Phone:</strong>{" "}
                    <a
                      href="tel:+12013327077"
                      className="text-teal-700 underline underline-offset-4 hover:no-underline"
                    >
                      (201) 332-7077
                    </a>
                  </li>
                  <li>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:info@urbanmds.com"
                      className="text-teal-700 underline underline-offset-4 hover:no-underline"
                    >
                      info@urbanmds.com
                    </a>
                  </li>
                  <li>
                    <strong>Website:</strong>{" "}
                    <Link
                      href="/contact"
                      className="text-teal-700 underline underline-offset-4 hover:no-underline"
                    >
                      Contact page
                    </Link>
                  </li>
                </ul>
              ),
            },
          ].map((section) => (
            <div key={section.title} className="mb-8">
              <h2 className="text-xl font-bold text-teal-700 mb-4 pb-2 border-b border-gray-100">
                {section.title}
              </h2>
              {section.content}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
