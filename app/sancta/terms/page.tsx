import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Sancta | ShelNova Labs",
  description:
    "Terms of Service for Sancta: Catholic Prayer & Bible app, developed by ShelNova Labs Ltd.",
};

export default function SanctaTermsOfService() {
  const updated = "6 September 2026";

  return (
    <div className="min-h-screen bg-snl-bg text-snl-text">
      {/* Top bar */}
      <div className="border-b border-snl-border">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-lg tracking-tight">
            Shel<span className="text-snl-violet">Nova</span> Labs
          </Link>
          <Link href="/sancta/privacy" className="text-snl-muted hover:text-snl-text text-sm transition-colors">
            ← Sancta Privacy Policy
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-snl-violet text-sm font-medium tracking-widest uppercase mb-3">
            Legal · Sancta
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-snl-text mb-3">
            Terms of Service
          </h1>
          <p className="text-snl-muted text-sm">Last updated: {updated}</p>
        </div>

        <div className="space-y-10 text-snl-muted leading-relaxed">

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using <span className="text-snl-text font-medium">Sancta: Catholic Prayer &amp; Bible</span> (&quot;the App&quot;), provided by ShelNova Labs Ltd. (&quot;ShelNova Labs&quot;, &quot;we&quot;, &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">2. Description of Service</h2>
            <p>
              Sancta is a mobile devotional application providing Catholic prayers, Holy Rosary guidance, daily Mass readings, liturgical calendar celebrate stories, audio prayers, and Scripture study tools. The App is provided for personal, non-commercial devotional use.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">3. User Accounts &amp; Conduct</h2>
            <p className="mb-3">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities conducted under your account. You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Use the App for any unlawful, abusive, or unauthorized purpose</li>
              <li>Attempt to decompile, reverse engineer, or extract source code from the App</li>
              <li>Interfere with or compromise the security or integrity of our Firebase servers</li>
              <li>Automate requests or scrape devotional content without written permission</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">4. Intellectual Property</h2>
            <p>
              All application code, original artwork, branding (&quot;Sancta&quot;), editorial celebration stories, audio recordings, and UI design are the intellectual property of ShelNova Labs Ltd. Sacred Scripture translations and public domain liturgical texts are used in accordance with their respective licensing permissions.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">5. In-App Purchases &amp; Subscriptions</h2>
            <p>
              If Sancta offers optional premium subscriptions or digital content purchases, payments will be processed securely through Google Play Store or Apple App Store billing. All purchases are governed by the respective app store&apos;s refund policies.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">6. Disclaimer of Warranties</h2>
            <p>
              Sancta is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or implied. While we strive to maintain 99.9% uptime and accurate liturgical content, we do not guarantee uninterrupted access or error-free performance.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, ShelNova Labs Ltd. shall not be liable for any indirect, incidental, or consequential damages arising from your use of or inability to use the application.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Notice of revisions will be updated on this page. Your continued use of Sancta after revisions are published constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">9. Contact Us</h2>
            <p>If you have any questions regarding these Terms of Service, please contact us:</p>
            <div className="mt-4 bg-snl-card border border-snl-border rounded-xl p-5 space-y-1">
              <p className="text-snl-text font-medium">ShelNova Labs Ltd.</p>
              <p>Email:{" "}
                <a href="mailto:hello@shelnovalabs.com" className="text-snl-violet hover:underline">
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
          <div className="flex items-center gap-4">
            <Link href="/sancta/privacy" className="text-snl-muted hover:text-snl-text text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-snl-muted hover:text-snl-text text-xs transition-colors">
              shelnovalabs.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
