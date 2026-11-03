import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Jobfind | ShelNova Labs",
  description:
    "Privacy Policy for Jobfind, the AI job search and CV assistant by ShelNova Labs Ltd. How we handle your account, CV and career data, AI processing, notifications, advertising and subscriptions, and how to delete your data.",
};

export default function JobfindPrivacy() {
  const updated = "3 November 2026";

  return (
    <div data-snl-legal className="min-h-screen bg-snl-bg text-snl-text">
      {/* Top bar */}
      <div className="border-b border-snl-border sticky top-0 z-30 bg-snl-bg/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-lg tracking-tight">
            Shel<span className="text-snl-accent">Nova</span> Labs
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/jobfind/terms"
              className="text-snl-muted hover:text-snl-text transition-colors hidden sm:inline"
            >
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-snl-muted hover:text-snl-text transition-colors">
              ← All Policies
            </Link>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-snl-accent text-xs font-mono font-medium tracking-widest uppercase">
            Legal Disclosures
          </span>
          <span className="text-snl-subtle text-xs">•</span>
          <span className="text-snl-subtle text-xs font-mono">Jobfind</span>
        </div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-snl-text mb-4 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-snl-muted text-sm font-mono">
          Package ID: com.shelnova.jobfind · Last updated: {updated}
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-10 text-snl-muted leading-relaxed">
        {/* 1. Introduction */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">
            1. Introduction &amp; Scope
          </h2>
          <p className="mb-3">
            ShelNova Labs Ltd. (&quot;ShelNova Labs&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) develops and operates{" "}
            <span className="text-snl-text font-medium">Jobfind</span> (&quot;Jobfind&quot; or &quot;the App&quot;), a mobile app that helps you
            find jobs, build and improve a CV, prepare applications, and keep track of them. This Privacy Policy
            explains what information the App collects, why, who else handles it, how long we keep it, and the
            choices you have.
          </p>
          <p>
            Your CV and career details are personal, and we treat them that way. We do not sell your data, and we do
            not show you advertising based on your CV or job search.
          </p>
        </section>

        {/* 2. What we collect */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">
            2. Information We Collect
          </h2>
          <div className="space-y-6">
            <div className="bg-snl-card border border-snl-border rounded-xl p-5">
              <h3 className="text-snl-text font-semibold mb-2">2.1 Your account</h3>
              <p className="text-sm mb-3">
                When you open Jobfind, it creates a private <strong className="text-snl-text">guest account</strong> for you
                automatically (a Firebase anonymous account). You do not need to register to use the App, and a guest
                account holds only a random identifier.
              </p>
              <p className="text-sm">
                If you choose <strong className="text-snl-text">Save with email</strong>, you add an email address and a
                password to that same account so you can keep your data if you change phones. Passwords are handled by
                Firebase Authentication; we never see or store your password.
              </p>
            </div>

            <div className="bg-snl-card border border-snl-border rounded-xl p-5">
              <h3 className="text-snl-text font-semibold mb-2">2.2 Your career data</h3>
              <p className="text-sm mb-3">
                You decide what to add. Depending on how you use the App, this can include:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm ml-2">
                <li>Career preferences: country, job titles, experience level, work mode and employment type</li>
                <li>Saved jobs, and the applications you track, including any notes you write</li>
                <li>
                  Your CV: name, headline, email, phone, location, links, summary, work experience, education, skills,
                  languages and certifications, whether you type them in or import a PDF or Word file
                </li>
                <li>Saved CV versions, including versions tailored to a particular job</li>
                <li>Your AutoApply rules (job titles, countries, filters and daily limits), and application packages the App prepares for you to review</li>
                <li>Your notification choices</li>
              </ul>
              <p className="text-xs text-snl-subtle mt-3">
                This data is stored in your account in Google Firebase (Cloud Firestore) and is readable only by your
                account. A CV file you import is read once to extract its text and is not stored.
              </p>
            </div>

            <div className="bg-snl-card border border-snl-border rounded-xl p-5">
              <h3 className="text-snl-text font-semibold mb-2">2.3 AI features (Groq)</h3>
              <p className="text-sm mb-3">
                When you ask for an AI feature (importing a CV, improving CV text, checking your fit for a job, tailoring
                your CV, drafting a cover letter, practicing interview answers, or preparing an application package), the
                relevant text is sent from our server to our AI provider, <strong className="text-snl-text">Groq</strong>, to
                generate the result. That text can include parts of your CV, a job listing, and your own practice answers.
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm ml-2">
                <li>Before sending, we remove your email address, phone number, address and links from the CV text.</li>
                <li>Your name is included only when drafting a cover letter.</li>
                <li>Prompts are written to treat your CV and job listings as data, and not to invent qualifications or experience.</li>
                <li>
                  We keep a usage record for each AI request (which feature, when, the model used, token counts and any
                  error code) to apply daily limits and understand cost. It does not contain your CV text, prompts or results.
                </li>
                <li>AI output is shown to you as a suggestion. Nothing is applied to your CV or sent to an employer without your action.</li>
              </ul>
              <p className="text-sm mt-3">
                Groq handles requests under its own terms and privacy policy (see Section 5).
              </p>
            </div>

            <div className="bg-snl-card border border-snl-border rounded-xl p-5">
              <h3 className="text-snl-text font-semibold mb-2">2.4 Job listings and reports</h3>
              <p className="text-sm mb-3">
                Listings come from third-party job boards (currently Remotive and Arbeitnow) and contain no information
                about you. When you open a listing&apos;s link, you leave Jobfind and that site&apos;s own privacy policy applies;
                we cannot see what you do there.
              </p>
              <p className="text-sm">
                If you report a listing, we store the listing, your reason, your optional note and your account identifier,
                so we can review it and remove bad listings.
              </p>
            </div>

            <div className="bg-snl-card border border-snl-border rounded-xl p-5">
              <h3 className="text-snl-text font-semibold mb-2">2.5 Notifications (Firebase Cloud Messaging)</h3>
              <p className="text-sm">
                Notifications are off until you switch them on in Settings. If you do, we store a push token for your
                device and your app language, and may send job alerts that match your AutoApply rules, notices that an
                application package is ready for review, and follow-up reminders about applications you opened. You can turn
                them off in the App or in Android system settings at any time, which removes the device registration.
              </p>
            </div>

            <div className="bg-snl-card border border-snl-border rounded-xl p-5">
              <h3 className="text-snl-text font-semibold mb-2">
                2.6 Analytics, crash reports and security (Firebase)
              </h3>
              <p className="text-sm mb-3">
                We use Google Firebase Analytics to understand which features are used, with events such as &quot;job
                saved&quot;, &quot;CV exported&quot; or &quot;onboarding completed&quot;. These events never include your search text, CV content,
                contact details or notes. Firebase Crashlytics collects crash reports (device model, operating system
                version and error traces) to fix bugs; they are not linked to your CV. Firebase Remote Config delivers
                feature switches, and Firebase App Check helps confirm that requests come from the genuine App.
              </p>
            </div>

            <div className="bg-snl-card border border-snl-border rounded-xl p-5">
              <h3 className="text-snl-text font-semibold mb-2">2.7 Advertising (Google AdMob)</h3>
              <p className="text-sm mb-3">
                The free version of Jobfind may show ads through Google AdMob (Publisher ID:{" "}
                <code className="text-xs bg-snl-bg px-1.5 py-0.5 rounded text-snl-accent font-mono">ca-app-pub-7925163364817373</code>
                ): a clearly labeled banner between search results, an optional rewarded video that you can choose to watch
                for extra AI uses, and, occasionally, a full-screen ad after you close a job. Ads are never shown inside
                your CV, CV exports, or while you edit, upload or apply. People with an active Jobfind Pro subscription see no ads.
              </p>
              <p className="text-sm mb-3">AdMob may collect and process your Google Advertising ID, approximate location derived from your IP address, and ad impression and interaction data. Ad requests do not include your CV, job searches or any other data you enter in Jobfind.</p>
              <p className="text-sm">
                Where required by law (for example in the EEA and the UK), Jobfind uses Google&apos;s User Messaging Platform
                to ask for your consent first, and you can change your choice later in Settings under &quot;Ad privacy choices&quot;.
                Jobfind is not intended for children, and ad requests are not child-directed. Rewards for watching a rewarded
                ad are granted by our server only after Google verifies the view.
              </p>
            </div>

            <div className="bg-snl-card border border-snl-border rounded-xl p-5">
              <h3 className="text-snl-text font-semibold mb-2">2.8 Subscriptions (RevenueCat and Google Play)</h3>
              <p className="text-sm">
                If a Jobfind Pro subscription is offered and you subscribe, payment is handled by Google Play; we never see
                your card details. We use RevenueCat to manage subscription status. RevenueCat receives your account
                identifier and purchase information, and tells our server whether Pro is active so we can unlock it.
              </p>
            </div>
          </div>
        </section>

        {/* 3. What we do not collect */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">
            3. Information We Do NOT Collect
          </h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>We do not sell, rent or trade your data, and we do not use your CV for advertising.</li>
            <li>We do not access your contacts, photos, camera, microphone or precise GPS location.</li>
            <li>We do not collect government ID numbers, and we never ask for your card details ourselves.</li>
            <li>We do not read your email or other apps, and we do not scan your device for documents. You choose any file you import.</li>
            <li>We do not send applications to employers on your behalf without your review and approval.</li>
          </ul>
        </section>

        {/* 4. Permissions */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">
            4. Device Permissions Explained
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border border-snl-border rounded-lg overflow-hidden">
              <thead className="bg-snl-card border-b border-snl-border text-snl-text font-mono text-xs uppercase">
                <tr>
                  <th className="p-3">Permission</th>
                  <th className="p-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-snl-border">
                <tr>
                  <td className="p-3 font-mono text-xs text-snl-accent">android.permission.INTERNET</td>
                  <td className="p-3">Load job listings, sync your account, run AI features and deliver notifications.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-snl-accent">android.permission.ACCESS_NETWORK_STATE</td>
                  <td className="p-3">Check whether a connection is available before network requests and ads.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-snl-accent">android.permission.POST_NOTIFICATIONS</td>
                  <td className="p-3">Optional (Android 13+): job alerts and follow-up reminders you choose to turn on.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-snl-accent">com.google.android.gms.permission.AD_ID</td>
                  <td className="p-3">Lets Google AdMob read the advertising ID to serve and measure ads. You can reset or delete it in Android settings.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-snl-accent">com.android.vending.BILLING</td>
                  <td className="p-3">Lets Google Play process a Jobfind Pro subscription if you buy one.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs text-snl-accent">WAKE_LOCK, FOREGROUND_SERVICE, RECEIVE (C2DM)</td>
                  <td className="p-3">Used by Google Play services and Firebase to receive push notifications reliably.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-snl-subtle mt-3">
            Importing a CV uses the system file picker, so Jobfind sees only the single file you choose.
          </p>
        </section>

        {/* 5. Third parties */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">
            5. Third-Party Service Providers
          </h2>
          <ul className="space-y-3">
            <li className="p-3 bg-snl-card border border-snl-border rounded-lg text-sm">
              <span className="text-snl-text font-bold">Google Firebase (Authentication, Cloud Firestore, Cloud Functions, Cloud Messaging, Analytics, Crashlytics, Remote Config, App Check): </span>
              account, storage, server logic, notifications and diagnostics. Your data is stored in Google data centers in the United States.{" "}
              <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-snl-accent hover:underline">
                Firebase privacy documentation
              </a>
              .
            </li>
            <li className="p-3 bg-snl-card border border-snl-border rounded-lg text-sm">
              <span className="text-snl-text font-bold">Groq: </span>
              AI processing for the features you use.{" "}
              <a href="https://groq.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-snl-accent hover:underline">
                Groq privacy policy
              </a>
              .
            </li>
            <li className="p-3 bg-snl-card border border-snl-border rounded-lg text-sm">
              <span className="text-snl-text font-bold">Google AdMob: </span>
              advertising and consent management.{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-snl-accent hover:underline">
                Google Privacy Policy
              </a>
              .
            </li>
            <li className="p-3 bg-snl-card border border-snl-border rounded-lg text-sm">
              <span className="text-snl-text font-bold">RevenueCat and Google Play: </span>
              subscription management and payments.{" "}
              <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-snl-accent hover:underline">
                RevenueCat privacy policy
              </a>
              .
            </li>
            <li className="p-3 bg-snl-card border border-snl-border rounded-lg text-sm">
              <span className="text-snl-text font-bold">Job boards (Remotive, Arbeitnow): </span>
              the source of job listings. When you open a listing, that site&apos;s policy applies:{" "}
              <a href="https://remotive.com" target="_blank" rel="noopener noreferrer" className="text-snl-accent hover:underline">
                remotive.com
              </a>
              ,{" "}
              <a href="https://www.arbeitnow.com" target="_blank" rel="noopener noreferrer" className="text-snl-accent hover:underline">
                arbeitnow.com
              </a>
              .
            </li>
          </ul>
        </section>

        {/* 6. Retention */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">6. How Long We Keep Data</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border border-snl-border rounded-lg overflow-hidden">
              <thead className="bg-snl-card border-b border-snl-border text-snl-text font-mono text-xs uppercase">
                <tr>
                  <th className="p-3">Data</th>
                  <th className="p-3">Kept</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-snl-border">
                <tr>
                  <td className="p-3">Your account, CV, CV versions, saved jobs, applications, preferences and rules</td>
                  <td className="p-3">Until you delete it or your account</td>
                </tr>
                <tr>
                  <td className="p-3">Guest accounts you stop using</td>
                  <td className="p-3">Deleted automatically, with their data, after 30 days without use</td>
                </tr>
                <tr>
                  <td className="p-3">AI usage records (feature, time, model, token counts, error code; no content)</td>
                  <td className="p-3">90 days</td>
                </tr>
                <tr>
                  <td className="p-3">Job listing reports you send</td>
                  <td className="p-3">1 year</td>
                </tr>
                <tr>
                  <td className="p-3">Records that a rewarded ad was watched</td>
                  <td className="p-3">30 days</td>
                </tr>
                <tr>
                  <td className="p-3">Analytics and crash data</td>
                  <td className="p-3">According to Google&apos;s Firebase retention settings</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 7. Children */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">7. Children&apos;s Privacy</h2>
          <p>
            Jobfind is not intended for anyone under 16, and we do not knowingly collect personal information from
            children. If you believe a child has given us personal information, contact{" "}
            <a href="mailto:legal@shelnovalabs.com" className="text-snl-accent hover:underline">legal@shelnovalabs.com</a>{" "}
            and we will delete it.
          </p>
        </section>

        {/* 8. Rights */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">8. Your Rights &amp; Choices</h2>
          <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
            <li>
              <strong className="text-snl-text">Delete your data:</strong> in the App, open Settings (the profile icon),
              then <em>Privacy and data</em>. <em>Delete my data</em> removes your CV, versions, saved jobs, applications and
              preferences but keeps your account. <em>Delete account</em> removes everything, including the account. See{" "}
              <Link href="/jobfind/delete-account" className="text-snl-accent hover:underline">how to delete your account</Link>.
            </li>
            <li>
              <strong className="text-snl-text">Edit your data:</strong> you can change or remove any CV detail, saved job or application at any time in the App.
            </li>
            <li>
              <strong className="text-snl-text">Ad choices:</strong> change consent in Settings under &quot;Ad privacy choices&quot; (where shown), or reset your advertising ID in Android under <code className="text-xs bg-snl-bg px-1.5 py-0.5 rounded text-snl-accent font-mono">Settings &gt; Google &gt; Ads</code>.
            </li>
            <li>
              <strong className="text-snl-text">Notifications:</strong> switch them off in Settings in the App, or in Android system settings.
            </li>
            <li>
              <strong className="text-snl-text">Access, correction and objection:</strong> depending on where you live (for example under the GDPR, UK GDPR, CCPA/CPRA or Kenya&apos;s Data Protection Act, 2019), you may have rights to access, correct, export, restrict or object to our processing of your data, and to complain to your data protection authority. Email{" "}
              <a href="mailto:legal@shelnovalabs.com" className="text-snl-accent hover:underline">legal@shelnovalabs.com</a>{" "}
              and we will respond within 30 days.
            </li>
          </ul>
        </section>

        {/* 9. Security */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">9. Security</h2>
          <p>
            Your data is encrypted in transit and stored with Google Firebase. Security rules make your CV and career
            data readable only by your account, and sensitive actions such as deleting an account are performed on our
            server. No system is perfectly secure, so please use a strong password if you save your account with email.
          </p>
        </section>

        {/* 10. International transfers */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">10. International Data Transfers</h2>
          <p>
            Firebase stores your data in the United States, and our other providers may process data in other countries.
            If you use Jobfind from outside those countries, your data will be transferred internationally. We rely on
            our providers&apos; contractual safeguards for those transfers.
          </p>
        </section>

        {/* 11. Changes */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">11. Changes to this Policy</h2>
          <p>
            We may update this policy when the App, our providers or the law change. The &quot;Last updated&quot; date above shows
            the latest revision, and we will tell you in the App about material changes.
          </p>
        </section>

        {/* 12. Contact */}
        <section className="bg-snl-card border border-snl-border rounded-xl p-6">
          <h2 className="font-heading text-xl font-bold text-snl-text mb-2">12. Contact Us</h2>
          <p className="text-sm mb-3">Questions about this policy or your data:</p>
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
  );
}
