import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Your Data — AI Interview | ShelNova Labs",
  description:
    "How to delete your AI Interview data: everything on your phone, and the small amount held by our service.",
};

export default function AiInterviewDelete() {
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
            Delete Your Account &amp; Data
          </h1>
          </div>

        <div className="space-y-10 text-snl-muted leading-relaxed">
          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">There is no account to close</h2>
            <p>
              AI Interview has no sign-up, name or email. Your data lives on your phone, and our service knows you only by a random install ID. Deleting is therefore in two parts.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">Delete everything on your phone (fastest)</h2>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>Open AI Interview and go to <strong className="text-snl-text">Settings</strong>.</li>
              <li>Choose the option to delete your data (documents, history and transcripts). Or simply <strong className="text-snl-text">uninstall</strong> the App, which removes it all.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">Data held by our service</h2>
            <p>
              Our service holds a random install ID, the seconds of free practice used today, request counts for abuse prevention, and, for subscribers, the purchase token or transaction ID, plan and end date. Your CV, questions and answers are not stored. To have these records deleted, email <a href="mailto:hello@shelnovalabs.com" className="text-snl-accent hover:underline">hello@shelnovalabs.com</a> with the subject &quot;Delete my AI Interview data&quot;. We delete what we can link to you (for example using your purchase details from Google Play or Apple) within 30 days. If the records cannot be linked to you, we will tell you; uninstalling and reinstalling starts a new, unlinked install ID.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">What is deleted</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Everything on your phone: documents, job descriptions, practice sessions, transcripts and settings.</li>
              <li>On request: the install ID record, usage counts and stored purchase reference held by our service.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">What is kept, and for how long</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Purchase records held by Google Play or Apple for billing and legal obligations, under their policies.</li>
              <li>Anonymous crash and statistics data held by Google Firebase, under its retention settings. You can switch these off in Settings.</li>
            </ul>
            <p>
              Deleting your data does not cancel a subscription. Cancel it first in Google Play or the App Store.
            </p>
          </section>

          <section className="bg-snl-card border border-snl-border rounded-xl p-6">
            <h2 className="font-heading text-xl font-bold text-snl-text mb-2">Questions</h2>
            <p className="text-sm">See the <Link href="/ai-interview/privacy" className="text-snl-accent hover:underline">Privacy Policy</Link> or email <a href="mailto:legal@shelnovalabs.com" className="text-snl-accent hover:underline">legal@shelnovalabs.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
