import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — ShelNova Labs",
  description: "Privacy Policy for ShelNova Labs Ltd. and its products.",
};

export default function PrivacyPolicy() {
  const updated = "25 May 2025";

  return (
    <div className="min-h-screen bg-snl-bg text-snl-text">
      {/* Top bar */}
      <div className="border-b border-snl-border">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-heading font-bold text-lg tracking-tight"
          >
            Shel<span className="text-snl-violet">Nova</span> Labs
          </Link>
          <Link
            href="/"
            className="text-snl-muted hover:text-snl-text text-sm transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-snl-violet text-sm font-medium tracking-widest uppercase mb-3">
            Legal
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-snl-text mb-3">
            Privacy Policy
          </h1>
          <p className="text-snl-muted text-sm">
            Last updated: {updated}
          </p>
        </div>

        <div className="space-y-10 text-snl-muted leading-relaxed">

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">
              1. Introduction
            </h2>
            <p>
              ShelNova Labs Ltd. (&quot;ShelNova Labs&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
              committed to protecting your personal information. This Privacy
              Policy explains what information we collect, how we use it, and
              your rights in relation to it. It applies to this website
              (shelnovalabs.com) and all products developed by ShelNova Labs,
              including Kadi Classic, JiraniFy, and Gist &amp; Gain.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We collect information only when you voluntarily provide it to us.
              This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <span className="text-snl-text font-medium">Contact information</span> — name and email address submitted via our
                contact form.
              </li>
              <li>
                <span className="text-snl-text font-medium">Message content</span> — the content of any message you send us
                through our contact form.
              </li>
              <li>
                <span className="text-snl-text font-medium">App-specific data</span> — data collected within our individual
                apps (e.g. game progress, account details) is governed by each
                app&apos;s own privacy notice.
              </li>
            </ul>
            <p className="mt-3">
              This website does not currently use tracking cookies, third-party
              analytics scripts, or advertising technologies.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">
              3. How We Use Your Information
            </h2>
            <p className="mb-3">
              Information you provide through the contact form is used solely to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Respond to your enquiry or message.</li>
              <li>Provide support in relation to our products.</li>
              <li>Follow up on partnership or business enquiries.</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or trade your personal information to any
              third party.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">
              4. Data Storage and Security
            </h2>
            <p>
              Messages submitted via our contact form are delivered directly to
              our team email inbox and are not stored on any external server by
              this website. We take reasonable precautions to protect your
              information from unauthorised access, however no method of
              electronic transmission is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">
              5. Third-Party Services
            </h2>
            <p className="mb-3">
              This website is hosted on{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-snl-violet hover:underline"
              >
                Vercel
              </a>
              . Vercel may collect standard server logs (IP address, browser
              type, pages visited) as part of their infrastructure. Please refer
              to Vercel&apos;s Privacy Policy for details.
            </p>
            <p>
              Our individual apps may integrate additional third-party services
              (e.g. app store platforms, payment providers). These are disclosed
              within each app&apos;s respective privacy notice.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">
              6. Children&apos;s Privacy
            </h2>
            <p>
              Our website and services are not directed at children under the age
              of 13. We do not knowingly collect personal information from
              children. If you believe a child has provided us with personal
              information, please contact us and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">
              7. Your Rights
            </h2>
            <p className="mb-3">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate data.</li>
              <li>Request deletion of your personal data.</li>
              <li>Object to or restrict how we process your data.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:hello@shelnovalabs.com"
                className="text-snl-violet hover:underline"
              >
                hello@shelnovalabs.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. When we do,
              we will revise the &quot;Last updated&quot; date at the top of this page. We
              encourage you to review this policy periodically. Continued use of
              our website or products after changes are posted constitutes your
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">
              9. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or how we
              handle your data, please reach out to us:
            </p>
            <div className="mt-4 bg-snl-card border border-snl-border rounded-xl p-5 space-y-1">
              <p className="text-snl-text font-medium">ShelNova Labs Ltd.</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:hello@shelnovalabs.com"
                  className="text-snl-violet hover:underline"
                >
                  hello@shelnovalabs.com
                </a>
              </p>
              <p>Website: shelnovalabs.com</p>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-snl-border mt-16">
        <div className="max-w-3xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-snl-muted text-xs">
            © {new Date().getFullYear()} ShelNova Labs Ltd. All rights reserved.
          </p>
          <Link href="/" className="text-snl-muted hover:text-snl-text text-xs transition-colors">
            shelnovalabs.com
          </Link>
        </div>
      </div>
    </div>
  );
}
