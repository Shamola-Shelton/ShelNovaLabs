import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Jobfind | ShelNova Labs",
  description:
    "Terms of Service for Jobfind, the AI job search and CV assistant by ShelNova Labs Ltd. Your responsibilities, how AI suggestions work, subscriptions, ads and limits of liability.",
};

export default function JobfindTerms() {
  const updated = "3 November 2026";

  return (
    <div data-snl-legal className="min-h-screen bg-snl-bg text-snl-text">
      <div className="border-b border-snl-border sticky top-0 z-30 bg-snl-bg/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-lg tracking-tight">
            Shel<span className="text-snl-accent">Nova</span> Labs
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/jobfind/privacy"
              className="text-snl-muted hover:text-snl-text transition-colors hidden sm:inline"
            >
              Privacy Policy
            </Link>
            <Link href="/privacy" className="text-snl-muted hover:text-snl-text transition-colors">
              ← All Policies
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-snl-accent text-xs font-mono font-medium tracking-widest uppercase">
              Legal Disclosures
            </span>
            <span className="text-snl-subtle text-xs">•</span>
            <span className="text-snl-subtle text-xs font-mono">Jobfind</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-snl-text mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-snl-muted text-sm font-mono">
            Last updated: {updated}
          </p>
        </div>

        <div className="space-y-10 text-snl-muted leading-relaxed">
          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">1. Agreement</h2>
            <p>
              These Terms govern your use of Jobfind (the &quot;App&quot;), provided by ShelNova Labs Ltd. (&quot;ShelNova
              Labs&quot;, &quot;we&quot;, &quot;us&quot;). By using the App you agree to them and to our{" "}
              <Link href="/jobfind/privacy" className="text-snl-accent hover:underline">Privacy Policy</Link>. If you do not
              agree, please do not use the App. You must be at least 16 years old to use Jobfind.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">2. What Jobfind Does</h2>
            <p className="mb-3">
              Jobfind helps you discover job listings, build and improve a CV, prepare cover letters and interview
              practice, track applications, and set rules (&quot;AutoApply&quot;) that find matching jobs and prepare application
              packages for you to review.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>We are not an employer, recruiter or employment agency, and we do not guarantee interviews, offers or any outcome.</li>
              <li>Listings come from third-party job boards. We do not control or verify them, and a listing may be inaccurate, expired or fraudulent. Check employers independently and never pay to apply for a job.</li>
              <li>Opening a listing takes you to another website with its own terms.</li>
              <li>
                AutoApply prepares packages for your approval. Jobfind does not currently submit applications to employers
                on your behalf, and nothing is sent to an employer unless you do it yourself.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">3. AI-Generated Content</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>AI output (CV edits, fit scores, tailored CVs, cover letters, interview feedback) is a suggestion and can be wrong, incomplete or unsuitable.</li>
              <li>You are responsible for reviewing it and for everything you put on a CV or send to an employer. Do not include claims that are not true.</li>
              <li>Fit scores are estimates and not predictions of an employer&apos;s decision.</li>
              <li>AI features have daily usage limits, which may differ for free and Pro users and may change.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">4. Your Account and Content</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>You keep ownership of the CV and other content you add. You give us the limited right to store and process it to operate the App for you, including sending relevant text to our AI provider as described in the Privacy Policy.</li>
              <li>Keep your sign-in details secure. You are responsible for activity on your account. Guest accounts that are unused for 30 days are deleted automatically.</li>
              <li>You may delete your data or account at any time (see{" "}
                <Link href="/jobfind/delete-account" className="text-snl-accent hover:underline">account deletion</Link>).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">5. Acceptable Use</h2>
            <p className="mb-2">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Provide false, misleading or someone else&apos;s information, or impersonate anyone</li>
              <li>Use the App to spam employers or to submit mass or automated applications outside the App&apos;s features</li>
              <li>Scrape, copy or resell job listings or AI output, or reverse engineer the App</li>
              <li>Attempt to bypass usage limits, ad verification, subscriptions or security, or interfere with the service</li>
              <li>Submit unlawful, abusive or infringing content, or content that tries to manipulate the AI features</li>
            </ul>
            <p className="mt-3">We may limit or suspend access if these Terms are breached or to protect the service or other users.</p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">6. Ads, Rewards and Jobfind Pro</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>The free version may show ads. You may choose to watch a rewarded ad for extra AI uses; the reward is granted after the view is verified and is capped per day. Rewards have no cash value.</li>
              <li>
                Jobfind Pro, when offered, is an auto-renewing subscription billed through Google Play. Price, billing period
                and benefits are shown before you buy. It renews until you cancel in Google Play subscriptions, and cancelling
                stops future renewals but does not refund the current period, except as required by law or Google Play policy.
              </li>
              <li>Refunds are handled by Google Play under its policies.</li>
              <li>Features, limits and pricing may change, and we will not change the price of a running subscription period.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">7. Intellectual Property</h2>
            <p>
              The App, its design, code and branding belong to ShelNova Labs or its licensors. We grant you a personal,
              non-exclusive, non-transferable licence to use it for your own job search. Job listings belong to their
              respective publishers and employers.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">8. Disclaimers</h2>
            <p>
              The App is provided &quot;as is&quot; and &quot;as available&quot;. To the extent the law allows, we do not warrant that it will
              be uninterrupted, error-free or that listings or AI output are accurate, and we disclaim implied warranties
              of merchantability, fitness for a particular purpose and non-infringement.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">9. Limitation of Liability</h2>
            <p>
              To the extent the law allows, ShelNova Labs is not liable for indirect, incidental or consequential
              damages, lost opportunities or lost income arising from your use of the App, from third-party listings or
              from AI output. Our total liability for any claim is limited to the amount you paid us in the 12 months
              before the claim, or USD 50 if you paid nothing. Nothing here limits liability that cannot be limited by law,
              or your statutory consumer rights.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">10. Changes and Termination</h2>
            <p>
              We may update the App or these Terms. For material changes we will give notice in the App, and continued
              use after the change means you accept it. You may stop using the App at any time. We may suspend or end
              access as described in Section 5, or if we discontinue the App.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the Republic of Kenya, and the courts of Nairobi, Kenya have
              jurisdiction, without affecting any mandatory consumer rights you have in your country of residence.
            </p>
          </section>

          <section className="bg-snl-card border border-snl-border rounded-xl p-6">
            <h2 className="font-heading text-xl font-bold text-snl-text mb-2">12. Contact</h2>
            <div className="space-y-1 text-sm font-mono text-snl-text">
              <p>ShelNova Labs Ltd.</p>
              <p>
                Email:{" "}
                <a href="mailto:legal@shelnovalabs.com" className="text-snl-accent hover:underline">legal@shelnovalabs.com</a>{" "}
                /{" "}
                <a href="mailto:contact@shelnovalabs.com" className="text-snl-accent hover:underline">contact@shelnovalabs.com</a>
              </p>
              <p>
                Website:{" "}
                <a href="https://shelnovalabs.com" className="text-snl-accent hover:underline">https://shelnovalabs.com</a>
              </p>
              <p className="text-snl-muted text-xs pt-1">Nairobi, Kenya</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
