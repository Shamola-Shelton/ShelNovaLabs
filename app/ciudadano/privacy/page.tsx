import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — US Citizenship Test 2026 | ShelNova Labs",
  description:
    "Privacy Policy for US Citizenship Test 2026, developed by ShelNova Labs Ltd. How the app handles your study progress, spoken answers, anonymous analytics, crash reports and the Pass Pack purchase.",
};

export default function CiudadanoPrivacyPolicy() {
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
            <Link href="/ciudadano/terms" className="text-snl-muted hover:text-snl-text transition-colors">
              Terms of Service
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
            Legal · US Citizenship Test 2026
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-snl-text mb-3">
            Privacy Policy
          </h1>
          <p className="text-snl-muted text-sm">Last updated: {updated}</p>
        </div>

        <div className="space-y-10 text-snl-muted leading-relaxed">

          {/* 1. Introduction */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">1. Introduction</h2>
            <p>
              ShelNova Labs Ltd. (&quot;ShelNova Labs&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) develops and operates{" "}
              <span className="text-snl-text font-medium">US Citizenship Test 2026</span> (&quot;the App&quot;),
              a study app for the U.S. naturalization civics test, available on Android and iOS. This policy explains what information the App handles, why, and the choices you have.
            </p>
            <p className="mt-3">
              The App is an independent study app. It is not affiliated with, endorsed by or connected to U.S. Citizenship and Immigration Services (USCIS) or any government agency, and it never asks for your immigration details, case number or A-number.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">2. Information the App Handles</h2>

            <h3 className="text-snl-text font-semibold mb-2 mt-4">2.1 Stored on Your Device Only</h3>
            <p>
              There are no accounts. Your study progress, review schedule, streak, mock interview results and settings (test version, languages, the state you chose, reminder time and theme) are saved on your device only. We cannot see them, and they are deleted when you uninstall the App.
            </p>

            <h3 className="text-snl-text font-semibold mb-2 mt-4">2.2 Microphone and Speech Recognition</h3>
            <p>
              When you answer out loud in the Speak or mock interview modes, the App asks for microphone permission and uses your phone&apos;s built-in speech recognition (provided by Apple on iOS and by Google or your device maker on Android) to turn your answer into text. The App compares that text with the accepted answers on your device and then discards it. The App does not record, save or upload your voice or your transcripts.
            </p>
            <p className="mt-3">
              Depending on your phone and settings, the speech recognition service may process your audio on its own servers under its provider&apos;s privacy policy. You can deny or withdraw microphone permission at any time in your phone&apos;s settings and still mark your own answers.
            </p>

            <h3 className="text-snl-text font-semibold mb-2 mt-4">2.3 Analytics and Crash Reports</h3>
            <p>
              We use Google Firebase Analytics and Firebase Crashlytics to understand how the App is used and to fix crashes. These record anonymous events such as installing the App, finishing onboarding, taking a first mock interview, opening the purchase screen, completing a purchase, a spoken answer attempt, and reporting a problem with a question (the question number and the reason you chose). They also record your device model, operating system, app version and crash logs. Your spoken answers, transcripts and the contents of any email are never included.
            </p>

            <h3 className="text-snl-text font-semibold mb-2 mt-4">2.4 Content Updates</h3>
            <p>
              The App reads a small settings file from Firebase Remote Config to receive corrections to question text, and it may download updated audio clips from our storage on Cloudflare. These requests send standard technical information, such as your IP address, app version and platform, and no personal profile.
            </p>

            <h3 className="text-snl-text font-semibold mb-2 mt-4">2.5 Purchases</h3>
            <p>
              The optional Pass Pack is a one-time purchase handled by the Apple App Store or Google Play. We use RevenueCat to confirm purchases and restore them. RevenueCat receives an anonymous app user identifier and the purchase receipt from the store. We never receive your name, payment card or billing details.
            </p>

            <h3 className="text-snl-text font-semibold mb-2 mt-4">2.6 Reminders and Support Email</h3>
            <p>
              If you turn on the daily reminder, it is scheduled on your device as a local notification; no server is involved. If you choose to email us from the App, we receive what you write and your email address, and we use them only to reply and to fix the problem you report.
            </p>

            <h3 className="text-snl-text font-semibold mb-2 mt-4">2.7 What We Do Not Collect</h3>
            <p>
              The App has no advertising and no accounts. It does not access your contacts, camera, photos or location, and it does not sell or share data for advertising.
            </p>
          </section>

          {/* 3. How We Use Information */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">3. How We Use Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>To run the App, check spoken answers and keep your study schedule on your device.</li>
              <li>To correct question text and update audio without a new app release.</li>
              <li>To confirm and restore the Pass Pack purchase.</li>
              <li>To understand which features help people study and to fix crashes.</li>
              <li>To answer you when you contact us.</li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information and we do not use it for advertising.
            </p>
          </section>

          {/* 4. Storage and Sharing */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">4. Where Data Is Processed and Who Receives It</h2>
            <p>
              We use these service providers: Google (Firebase Analytics, Crashlytics and Remote Config), RevenueCat (purchase confirmation), Cloudflare (audio downloads), and Apple and Google (app stores and, on your device, speech recognition). They may process data on servers outside your country. We do not share your information with anyone else, except where the law requires it.
            </p>
          </section>

          {/* 5. Children */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">5. Children</h2>
            <p>
              The App is meant for adults preparing for the naturalization interview. It is not directed to children under 13, and we do not knowingly collect personal information from them. If you believe a child has given us personal information, contact us and we will remove it.
            </p>
          </section>

          {/* 6. Retention */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">6. How Long We Keep Data</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><span className="text-snl-text font-medium">On your device:</span> until you uninstall the App or clear its data.</li>
              <li><span className="text-snl-text font-medium">Analytics and crash reports:</span> kept by Google for the period set in our Firebase settings, then deleted.</li>
              <li><span className="text-snl-text font-medium">Purchase records:</span> kept by RevenueCat and the app store for as long as needed to restore your purchase and meet legal requirements.</li>
              <li><span className="text-snl-text font-medium">Support emails:</span> kept until your request is resolved, then deleted within 12 months.</li>
            </ul>
          </section>

          {/* 7. Your Rights */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">7. Your Rights</h2>
            <p>
              Depending on where you live (for example under Kenya&apos;s Data Protection Act, the GDPR, the UK GDPR, or the CCPA/CPRA), you may have the right to access, correct or delete your personal information, to object to or restrict its use, and to complain to your local data protection authority. Because your progress stays on your device, you can delete it at any time by uninstalling the App. For anything else, contact us.
            </p>
          </section>

          {/* 8. Security and Changes */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">8. Security and Changes</h2>
            <p>
              We rely on the security of our providers and send data over encrypted connections. No system is perfectly secure, so we cannot guarantee absolute security.
            </p>
            <p className="mt-3">
              We may update this policy as the App changes. The date above shows the latest version, and continued use of the App after an update means you accept it.
            </p>
          </section>

          {/* 9. Contact */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">9. Contact Us</h2>
            <p>
              For privacy questions or to use any of your rights, contact:
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
            <Link href="/ciudadano/terms" className="text-snl-muted hover:text-snl-text transition-colors">
              Terms of Service
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
