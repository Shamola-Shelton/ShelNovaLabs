import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — AI Interview | ShelNova Labs",
  description:
    "Terms of Service for AI Interview, the AI interview practice app by ShelNova Labs Ltd. Free daily practice time, Premium subscriptions, acceptable use and limits of liability.",
};

export default function AiInterviewTerms() {
  const updated = "16 November 2026";

  return (
    <div data-snl-legal className="min-h-screen bg-snl-bg text-snl-text">
      <div className="border-b border-snl-border sticky top-0 z-30 bg-snl-bg/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-lg tracking-tight">
            Shel<span className="text-snl-accent">Nova</span> Labs
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/ai-interview/privacy"
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
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-snl-accent text-xs font-mono font-medium tracking-widest uppercase">
              Legal Disclosures
            </span>
            <span className="text-snl-subtle text-xs">•</span>
            <span className="text-snl-subtle text-xs font-mono">AI Interview</span>
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
              These Terms govern your use of AI Interview (&quot;the App&quot;), provided by ShelNova Labs Ltd. (&quot;we&quot;, &quot;us&quot;). By using the App you agree to them and to our <Link href="/ai-interview/privacy" className="text-snl-accent hover:underline">Privacy Policy</Link>. If you do not agree, please do not use the App. You must be at least 16 years old.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">2. What the App is for</h2>
            <p>
              AI Interview is a <strong className="text-snl-text">rehearsal tool</strong> for practising interviews. Answers are AI-written drafts and may contain mistakes or invented details. Check them, make them true for you, and do not state anything in a real interview that is not true. Do not use the App during a real interview if the employer forbids it. You are responsible for how you use what it produces.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">3. Free use</h2>
            <p>
              Free use includes 5 minutes of practice per day, counted while a practice screen is open and in the foreground. The allowance resets at midnight in your time zone. We may change the allowance.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">4. Premium subscription</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Premium removes the daily limit. It is sold monthly or yearly through Google Play (Android) or the App Store (iPhone), at the price shown in the App before you buy.</li>
              <li>Payment is charged to your Google Play or Apple ID account. The subscription renews automatically until you cancel it at least 24 hours before the end of the current period.</li>
              <li>One subscription is used on one device at a time. Using it on a new device moves it there.</li>
              <li>There is no free trial.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">5. Cancelling and refunds</h2>
            <p>
              Manage or cancel in Google Play (Menu, Payments and subscriptions, Subscriptions) or on an iPhone in Settings, your name, Subscriptions. Cancelling stops the next renewal; you keep Premium until the end of the period you paid for. Refunds are handled by Google Play or Apple under their policies.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">6. Acceptable use</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Do not misuse the service: no automated or excessive requests, reverse engineering, or attempts to avoid limits or payment.</li>
              <li>Do not enter unlawful content, or other people&apos;s personal data without permission.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">7. Availability and changes</h2>
            <p>
              The App and its AI service are provided as available. They may be interrupted, limited or changed. We may update these Terms; continuing to use the App means you accept the update.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">8. Disclaimer and liability</h2>
            <p>
              The App is provided &quot;as is&quot;. We do not promise that answers are accurate or that using the App will get you a job. To the extent the law allows, ShelNova Labs is not liable for indirect or consequential loss, and our total liability is limited to the amount you paid for Premium in the 12 months before the claim. Nothing here limits rights you have by law.
            </p>
          </section>

          <section className="bg-snl-card border border-snl-border rounded-xl p-6">
            <h2 className="font-heading text-xl font-bold text-snl-text mb-2">Contact</h2>
            <p className="text-sm">Questions about these Terms: <a href="mailto:legal@shelnovalabs.com" className="text-snl-accent hover:underline">legal@shelnovalabs.com</a> or <a href="mailto:hello@shelnovalabs.com" className="text-snl-accent hover:underline">hello@shelnovalabs.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
