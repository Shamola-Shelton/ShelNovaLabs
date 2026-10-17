import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Ciudadano: Citizenship Test | ShelNova Labs",
  description:
    "Terms of Service for Ciudadano: Citizenship Test (Ciudadano 128), a U.S. civics test study app by ShelNova Labs Ltd. Not affiliated with USCIS.",
};

export default function CiudadanoTerms() {
  const updated = "17 October 2026";

  return (
    <div data-snl-legal className="min-h-screen bg-snl-bg text-snl-text">
      {/* Top bar */}
      <div className="border-b border-snl-border">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-lg tracking-tight">
            Shel<span className="text-snl-accent">Nova</span> Labs
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/ciudadano/privacy" className="text-snl-muted hover:text-snl-text transition-colors">
              Privacy Policy
            </Link>
            <Link href="/privacy" className="text-snl-muted hover:text-snl-text transition-colors">
              ← All Policies
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-snl-accent text-sm font-medium tracking-widest uppercase mb-3">
            Legal · Ciudadano
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-snl-text mb-3">
            Terms of Service
          </h1>
          <p className="text-snl-muted text-sm">Last updated: {updated}</p>
        </div>

        <div className="space-y-10 text-snl-muted leading-relaxed">

          {/* 1. Acceptance */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing or using{" "}
              <span className="text-snl-text font-medium">Ciudadano: Citizenship Test</span>, also shown as Ciudadano 128 (&quot;the App&quot;), developed and operated by
              ShelNova Labs Ltd. (&quot;ShelNova Labs&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to these Terms of Service (&quot;Terms&quot;).
              If you do not agree, please do not use the App.
            </p>
          </section>

          {/* 2. Independent Study App */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">2. Independent Study App, Not Legal Advice</h2>
            <p>
              Ciudadano helps you study for the civics part of the U.S. naturalization test. It is an independent product and is{" "}
              <span className="text-snl-text font-medium">not affiliated with, endorsed by or connected to U.S. Citizenship and Immigration Services (USCIS)</span>{" "}
              or any government agency.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
              <li>Questions and answers are taken from the official USCIS civics test lists. The official USCIS materials always prevail over the App.</li>
              <li>Some answers change with elections and appointments. Check uscis.gov/citizenship/testupdates and official government sites before your interview.</li>
              <li>The App gives no legal or immigration advice, and practice results, readiness scores and mock interviews do not predict or guarantee the outcome of your interview. For advice about your case, consult a qualified immigration attorney or accredited representative.</li>
              <li>Explanations, translations and speech recognition may contain mistakes. You can report a problem with any question from inside the App.</li>
            </ul>
          </section>

          {/* 3. Licence */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">3. Your Licence to Use the App</h2>
            <p>
              We grant you a limited, personal, non-exclusive, non-transferable and revocable licence to use the App on a device you own or control, for your own study. You agree not to copy, resell or redistribute the App&apos;s audio, explanations or design, not to decompile or reverse engineer it except where the law allows, and not to interfere with the App or the services it relies on.
            </p>
          </section>

          {/* 4. Pass Pack */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">4. Free Features and the Pass Pack</h2>
            <p className="mb-3">
              Some features are free, with limits shown in the App. The optional{" "}
              <span className="text-snl-text font-medium">Pass Pack</span> is a one-time purchase that unlocks the full question lists, unlimited speaking practice and unlimited mock interviews.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><span className="text-snl-text font-medium">No subscription:</span> you pay once, in the price shown by your app store, and are not charged again.</li>
              <li><span className="text-snl-text font-medium">Payments and refunds:</span> the Apple App Store or Google Play processes the payment, and refunds follow that store&apos;s refund policy.</li>
              <li><span className="text-snl-text font-medium">Restoring:</span> you can restore the Pass Pack on a new device signed in to the same store account, using &quot;Restore purchase&quot; in the App.</li>
              <li><span className="text-snl-text font-medium">Changes:</span> we may add, change or improve content and features. We will not remove the core features of a Pass Pack you have bought while the App is offered in the stores.</li>
            </ul>
          </section>

          {/* 5. Your Device and Data */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">5. Progress on Your Device</h2>
            <p>
              The App has no accounts. Your progress is stored only on your device and is lost if you uninstall the App or lose the device. A purchased Pass Pack can be restored, but study progress cannot. Our{" "}
              <Link href="/ciudadano/privacy" className="text-snl-accent hover:underline">Privacy Policy</Link>{" "}
              explains how the App handles information, including spoken answers.
            </p>
          </section>

          {/* 6. Disclaimers */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">6. Disclaimer of Warranties</h2>
            <p>
              The App is provided &quot;as is&quot; and &quot;as available&quot;, without warranties of any kind, express or implied, including accuracy, fitness for a particular purpose and non-infringement. We do not promise the App will always be error-free, uninterrupted, or work on every device, or that speech recognition will understand every answer. Some features depend on third-party services that we do not control.
            </p>
          </section>

          {/* 7. Liability */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, ShelNova Labs Ltd., its founders, directors, employees and partners are not liable for any indirect, incidental, special or consequential loss, including the outcome of any naturalization interview or application, or lost progress or data, arising from your use of, or inability to use, the App. Our total liability for any claim is limited to the amount you paid for the App in the 12 months before the claim. Nothing in these Terms limits liability that cannot be limited by law.
            </p>
          </section>

          {/* 8. Changes */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">8. Changes to the App and Terms</h2>
            <p>
              We may update the App and its content, for example when USCIS changes its test or an answer changes. We may also revise these Terms. The date above shows the latest version, and continued use after a change means you accept it.
            </p>
          </section>

          {/* 9. Ending */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">9. Ending Use</h2>
            <p>
              You can stop using the App at any time by uninstalling it. We may suspend access for anyone who breaks these Terms.
            </p>
          </section>

          {/* 10. Governing Law */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">10. Governing Law and Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of Kenya, without regard to conflict-of-law principles. Any dispute arising from them will be resolved in the competent courts of Nairobi, Kenya, without limiting any mandatory consumer rights you have where you live.
            </p>
          </section>

          {/* 11. Contact */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">11. Contact</h2>
            <p>
              For questions about these Terms, contact:
            </p>
            <div className="mt-4 bg-snl-card border border-snl-border rounded-xl p-5 space-y-1">
              <p className="text-snl-text font-medium">ShelNova Labs Ltd.</p>
              <p>
                Email:{" "}
                <a href="mailto:hello@shelnovalabs.com" className="text-snl-accent hover:underline">
                  hello@shelnovalabs.com
                </a>
              </p>
              <p>Website: https://shelnovalabs.com</p>
              <p className="text-xs text-snl-muted pt-2">Nairobi, Kenya</p>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-snl-border mt-16">
        <div className="max-w-3xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-snl-muted">© {new Date().getFullYear()} ShelNova Labs Ltd.</p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/ciudadano/privacy" className="text-snl-muted hover:text-snl-text transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-snl-muted hover:text-snl-text transition-colors">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
