import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Account & Data Deletion — Sancta | ShelNova Labs",
  description:
    "Request deletion of your account and personal data for Sancta: Catholic Prayer & Bible app, developed by ShelNova Labs Ltd.",
};

export default function SanctaDeleteAccount() {
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
            Data Safety · Sancta
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-snl-text mb-3">
            Account &amp; Data Deletion
          </h1>
          <p className="text-snl-muted text-sm">Last updated: {updated}</p>
        </div>

        <div className="space-y-10 text-snl-muted leading-relaxed">

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">1. Overview</h2>
            <p>
              ShelNova Labs Ltd. respects your privacy and gives you complete control over your personal data in <span className="text-snl-text font-medium">Sancta: Catholic Prayer &amp; Bible</span>. In compliance with Google Play Store User Data policies, you can delete your account and associated data at any time either within the mobile application or by submitting a web deletion request.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">2. How to Delete Your Account In-App</h2>
            <p className="mb-4">
              If you have the Sancta mobile app installed on your device, deleting your account is instant and automatic:
            </p>
            <div className="bg-snl-card border border-snl-border rounded-xl p-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="bg-snl-violet/20 text-snl-violet font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm shrink-0 mt-0.5">1</span>
                <p className="text-snl-text">Open the <span className="font-semibold">Sancta</span> app on your phone.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-snl-violet/20 text-snl-violet font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm shrink-0 mt-0.5">2</span>
                <p className="text-snl-text">Navigate to the <span className="font-semibold">Profile</span> tab from the bottom menu.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-snl-violet/20 text-snl-violet font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm shrink-0 mt-0.5">3</span>
                <p className="text-snl-text">Tap <span className="font-semibold">Settings → Account</span>.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-snl-violet/20 text-snl-violet font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm shrink-0 mt-0.5">4</span>
                <p className="text-snl-text">Scroll down and tap <span className="font-semibold text-red-400">Delete Account</span>, then confirm.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">3. Requesting Deletion via Email / Web</h2>
            <p className="mb-4">
              If you no longer have access to the app or have uninstalled Sancta, you may submit a manual account deletion request directly to our privacy team:
            </p>
            <div className="bg-snl-card border border-snl-border rounded-xl p-6 space-y-3">
              <p className="text-snl-text font-medium">Send an email to:</p>
              <p>
                <a href="mailto:hello@shelnovalabs.com?subject=Sancta%20Account%20Deletion%20Request" className="text-snl-violet hover:underline text-lg font-semibold">
                  hello@shelnovalabs.com
                </a>
              </p>
              <p className="text-xs text-snl-muted">
                Subject: <span className="text-snl-text font-mono">Sancta Account Deletion Request</span>
              </p>
              <p className="text-sm">
                Please send the request from the email address associated with your Sancta account so we can verify account ownership. Requests are processed within 7 business days.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">4. What Data Is Deleted</h2>
            <p className="mb-3">Upon account deletion, the following data is permanently purged from our Firebase servers:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Your Firebase Authentication account record and user ID</li>
              <li>Your email address and profile preferences</li>
              <li>All saved prayer streaks, Rosary history, and prayer logs</li>
              <li>Bookmarked Bible verses, custom intentions, and personal notes</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">5. Data Retention Policy</h2>
            <p>
              When you initiate an in-app deletion, data removal occurs immediately. For email requests, your data will be permanently purged within 30 days of ownership verification. Anonymous crash logs collected via Firebase Crashlytics may be retained in aggregated form without personal identifiers to help maintain software stability.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">6. Contact Us</h2>
            <p>For any further questions regarding account deletion or privacy policies, please reach out:</p>
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
