import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Your Account — Jobfind | ShelNova Labs",
  description:
    "How to delete your Jobfind account and data, what is removed, and what is kept for a limited time.",
};

export default function JobfindDeleteAccount() {
  return (
    <div data-snl-legal className="min-h-screen bg-snl-bg text-snl-text">
      <div className="border-b border-snl-border sticky top-0 z-30 bg-snl-bg/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-lg tracking-tight">
            Shel<span className="text-snl-accent">Nova</span> Labs
          </Link>
          <Link href="/jobfind/privacy" className="text-sm text-snl-muted hover:text-snl-text transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-16 pb-8">
        <span className="text-snl-accent text-xs font-mono font-medium tracking-widest uppercase">Jobfind</span>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-snl-text mt-3 mb-4 tracking-tight">
          Delete Your Account &amp; Data
        </h1>
        <p className="text-snl-muted text-sm font-mono">Package ID: com.shelnova.jobfind</p>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-10 text-snl-muted leading-relaxed">
        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">Delete inside the app (fastest)</h2>
          <ol className="list-decimal list-inside space-y-2 ml-2">
            <li>Open Jobfind and tap the profile icon on Home or My CV to open <strong className="text-snl-text">Settings</strong>.</li>
            <li>Go to <strong className="text-snl-text">Privacy and data</strong>.</li>
            <li>
              Choose <strong className="text-snl-text">Delete my data</strong> to remove your CV, versions, saved jobs,
              applications and preferences but keep your account, or{" "}
              <strong className="text-snl-text">Delete account</strong> to remove everything including the account.
            </li>
            <li>If you saved your account with an email, you will be asked to re-enter your password to confirm.</li>
          </ol>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">Can&apos;t open the app?</h2>
          <p>
            Email{" "}
            <a href="mailto:hello@shelnovalabs.com" className="text-snl-accent hover:underline">hello@shelnovalabs.com</a>{" "}
            from the address linked to your account (or tell us your sign-in email) with the subject &quot;Delete my Jobfind
            account&quot;. Guest accounts without an email cannot be identified from outside the app, so use the in-app option
            or reinstall and delete from there. We complete email requests within 30 days.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">What is deleted</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Your CV and all saved CV versions</li>
            <li>Saved jobs, tracked applications and your notes</li>
            <li>Career preferences, AutoApply rules and prepared application packages</li>
            <li>Notification settings and device push tokens</li>
            <li>Your sign-in account (when you choose Delete account)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">What is kept, and for how long</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border border-snl-border rounded-lg overflow-hidden">
              <thead className="bg-snl-card border-b border-snl-border text-snl-text font-mono text-xs uppercase">
                <tr>
                  <th className="p-3">Data</th>
                  <th className="p-3">Why</th>
                  <th className="p-3">Kept</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-snl-border">
                <tr>
                  <td className="p-3">AI usage records (no CV or prompt content)</td>
                  <td className="p-3">Daily limits and cost control</td>
                  <td className="p-3">Up to 90 days, then removed automatically</td>
                </tr>
                <tr>
                  <td className="p-3">Job listing reports</td>
                  <td className="p-3">Keeping listings safe</td>
                  <td className="p-3">Up to 1 year</td>
                </tr>
                <tr>
                  <td className="p-3">Rewarded-ad records</td>
                  <td className="p-3">Preventing duplicate rewards</td>
                  <td className="p-3">Up to 30 days</td>
                </tr>
                <tr>
                  <td className="p-3">Purchase records</td>
                  <td className="p-3">Held by Google Play and RevenueCat for billing and legal obligations</td>
                  <td className="p-3">Under their policies</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-snl-subtle mt-3">
            If you subscribed to Jobfind Pro, deleting your account does not cancel the subscription. Cancel it in Google
            Play first. Analytics and crash data held by Google follow Firebase&apos;s retention settings.
          </p>
        </section>

        <section className="bg-snl-card border border-snl-border rounded-xl p-6">
          <h2 className="font-heading text-xl font-bold text-snl-text mb-2">Questions</h2>
          <p className="text-sm">
            See the <Link href="/jobfind/privacy" className="text-snl-accent hover:underline">Privacy Policy</Link> or email{" "}
            <a href="mailto:legal@shelnovalabs.com" className="text-snl-accent hover:underline">legal@shelnovalabs.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
