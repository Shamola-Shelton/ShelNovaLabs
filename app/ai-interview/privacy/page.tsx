import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — AI Interview | ShelNova Labs",
  description:
    "Privacy Policy for AI Interview, the AI interview practice app by ShelNova Labs Ltd. What text is sent to the AI service, what is stored, crash reports, subscriptions and how to delete your data.",
};

export default function AiInterviewPrivacy() {
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
              href="/ai-interview/terms"
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

      <div className="max-w-4xl mx-auto px-6 pt-16 pb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-snl-accent text-xs font-mono font-medium tracking-widest uppercase">
            Legal Disclosures
          </span>
          <span className="text-snl-subtle text-xs">•</span>
          <span className="text-snl-subtle text-xs font-mono">AI Interview</span>
        </div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-snl-text mb-4 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-snl-muted text-sm font-mono">
          Package ID: com.shelnova.aiinterview · Last updated: {updated}
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-10 text-snl-muted leading-relaxed">
        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">1. Introduction &amp; Scope</h2>
          <p>
            ShelNova Labs Ltd. (&quot;ShelNova Labs&quot;, &quot;we&quot;, &quot;us&quot;) provides <strong className="text-snl-text">AI Interview</strong> (&quot;the App&quot;), an app for practising job interviews with AI-written answer drafts. This policy explains what the App handles, who else is involved, how long data is kept, and your choices. You do not create an account, and we do not sell your data or show advertising.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">2. What stays on your phone</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Your documents (CV and notes), job descriptions, practice history, transcripts and settings are stored in a database on your phone only.</li>
            <li><strong className="text-snl-text">Your voice</strong>: microphone audio is turned into text on your phone and is never uploaded or saved.</li>
            <li>Uninstalling the App, or deleting your data in Settings, removes all of this.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">3. What is sent to our service</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>To write an answer, the App sends text to our service: your name, target role, CV and notes, the job description, each question, and your transcribed answer when you ask for feedback.</li>
            <li>Our service forwards that text to a hosted AI model provider (currently Groq) to produce the reply. We do not store or log the text, and we do not use it to train models.</li>
            <li>Our service is hosted on Cloudflare, which handles the connection and may process technical data such as your IP address to deliver it and prevent abuse.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">4. What we keep</h2>
          <p>
            A random <strong className="text-snl-text">install ID</strong> (it is not linked to your name, email or phone number), how many seconds of free practice you used today so the daily limit can work, a count of requests used to prevent abuse, and, if you subscribe, your Google Play purchase token or App Store transaction ID together with the plan and when it ends. We do not collect your name, email address, contacts or location.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">5. Crash reports and statistics</h2>
          <p>
            Release builds send anonymous crash reports and a few usage counts (for example which practice mode was started) to Google Firebase (Crashlytics and Analytics). They contain technical details such as device model, operating system and app version, and a Firebase installation ID. They never contain your CV, questions, answers or voice. The advertising ID is not collected. You can turn this off in <strong className="text-snl-text">Settings</strong> at any time.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">6. Payments</h2>
          <p>
            Subscriptions are sold and processed by Google Play (Android) or the App Store (iPhone). We never see your card details. We receive only the purchase confirmation needed to unlock Premium.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">7. Who else handles data</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Groq (AI model provider): receives the text described in section 3 to generate replies.</li>
            <li>Cloudflare (hosting of our service).</li>
            <li>Google Firebase (crash reports and statistics).</li>
            <li>Google Play or Apple (purchases).</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">8. Your choices and rights</h2>
          <p>
            You can delete everything on your phone from Settings, turn off crash reports and statistics, or cancel a subscription in Google Play or the App Store. To ask about, or request deletion of, anything we hold on our side, see <Link href="/ai-interview/delete-account" className="text-snl-accent hover:underline">Delete your data</Link>. Depending on where you live you may have further rights, such as access and correction; contact us and we will respond within 30 days.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">9. Children</h2>
          <p>
            AI Interview is not directed at children under 16, and we do not knowingly collect their data.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">10. Changes</h2>
          <p>
            If this policy changes we will update the date above, and the App may show a notice for significant changes.
          </p>
        </section>

        <section className="bg-snl-card border border-snl-border rounded-xl p-6">
          <h2 className="font-heading text-xl font-bold text-snl-text mb-2">Contact</h2>
          <p className="text-sm">Questions about privacy: <a href="mailto:legal@shelnovalabs.com" className="text-snl-accent hover:underline">legal@shelnovalabs.com</a> or <a href="mailto:hello@shelnovalabs.com" className="text-snl-accent hover:underline">hello@shelnovalabs.com</a>.</p>
        </section>
      </div>
    </div>
  );
}
