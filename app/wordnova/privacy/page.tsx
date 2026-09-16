import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — WordNova: Connect Words, Discover Worlds | ShelNova Labs",
  description:
    "Privacy Policy for WordNova, developed by ShelNova Labs Ltd. Learn how we handle your gameplay progress, advertisements, and privacy choices.",
};

export default function WordNovaPrivacyPolicy() {
  const updated = "17 September 2026";

  return (
    <div className="min-h-screen bg-snl-bg text-snl-text">
      {/* Top bar */}
      <div className="border-b border-snl-border">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-lg tracking-tight">
            Shel<span className="text-snl-accent">Nova</span> Labs
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/wordnova/terms" className="text-snl-muted hover:text-snl-text transition-colors">
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
            Legal · WordNova
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
              <span className="text-snl-text font-medium">WordNova: Connect Words, Discover Worlds</span> (&quot;WordNova&quot; or &quot;the Game&quot;),
              available on Android and iOS devices. This Privacy Policy outlines what information we collect when you play WordNova, how that information is utilized, and the privacy controls available to you.
            </p>
            <p className="mt-3">
              By downloading, installing, or playing WordNova, you consent to the practices described in this Privacy Policy. If you do not agree with this policy, please uninstall and discontinue use of the Game.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">2. Information We Collect</h2>

            <h3 className="text-snl-text font-semibold mb-2 mt-4">2.1 Gameplay Progress &amp; Save Data</h3>
            <p className="mb-3">
              To ensure your game state persists across sessions, WordNova stores your local gameplay progress on your device, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Completed campaign levels across all 9 cosmic regions (Home Orbit through Genesis Singularity)</li>
              <li>Discovered Star Link connections, word completions, and level star ratings (1 to 3 stars)</li>
              <li>Stardust balance, mistake shields, overdrive time freeze boosts, and hint inventory</li>
              <li>Milestone crate unlock statuses, Daily Cosmic Well claims, and high score records</li>
            </ul>

            <h3 className="text-snl-text font-semibold mb-2 mt-6">2.2 Leaderboards &amp; Online Features</h3>
            <p className="mb-3">
              If you participate in WordNova&apos;s global or regional leaderboards:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>You may choose an optional in-game player Callsign / Display Name</li>
              <li>An anonymous Firebase Authentication user identifier is assigned to associate your score records</li>
              <li>Total stars earned, high scores, and region completion records are submitted to our secure cloud database</li>
            </ul>

            <h3 className="text-snl-text font-semibold mb-2 mt-6">2.3 Device &amp; Technical Diagnostics</h3>
            <p>
              We collect non-personal technical telemetry to detect crashes and maintain smooth 60 FPS performance across diverse mobile hardware. This includes device model, operating system version, screen resolution, GPU profile, and crash logs via Firebase Crashlytics. We do not access your contacts, camera, microphone, photos, or precise GPS location.
            </p>

            <h3 className="text-snl-text font-semibold mb-2 mt-6">2.4 Advertising Identifiers &amp; Consent Data</h3>
            <p>
              WordNova is supported by advertisements through Google AdMob. Google AdMob may collect your device&apos;s advertising identifier (Google Advertising ID / GAID on Android or IDFA on iOS), coarse IP address (to determine country/region for regulatory compliance), and ad interaction telemetry.
            </p>
            <p className="mt-2">
              We implement the Google User Messaging Platform (UMP) SDK to ensure compliance with European privacy laws (GDPR/ePrivacy) and applicable US state privacy regulations. Players in eligible jurisdictions can configure their personalized or non-personalized ad consent choices when launching the game.
            </p>
          </section>

          {/* 3. How We Use Information */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>To save and resume your puzzle state, unlock constellations, and track campaign achievements</li>
              <li>To display global and regional leaderboard rankings among WordNova players</li>
              <li>To deliver rewarded video advertisements when requested (e.g. Overdrive boost, Shield boost, Cosmic Crates)</li>
              <li>To display non-intrusive banner and inter-level transition ads</li>
              <li>To diagnose engine anomalies, memory usage, and game crash events</li>
              <li>To verify optional in-app purchase receipts (such as &quot;No Ads&quot;) via Google Play Billing</li>
            </ul>
            <p className="mt-4">
              We never sell, rent, or monetize your personal data. We do not build cross-app behavioral tracking profiles outside of standard Google AdMob monetization.
            </p>
          </section>

          {/* 4. Data Storage & Security */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">4. Data Storage &amp; Security</h2>
            <p className="mb-3">
              Your primary gameplay progress is saved locally in encrypted application storage on your mobile device. When syncing leaderboard scores, data is transmitted over secure HTTPS/TLS 1.3 connections and stored in Google Cloud Firestore.
            </p>
            <p>
              Server-side Firestore security rules ensure that players can only modify their own score entries and cannot access or manipulate the records of other players.
            </p>
          </section>

          {/* 5. Third-Party Partners */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">5. Third-Party Service Providers</h2>
            <p className="mb-5">
              WordNova integrates reliable third-party SDKs to power leaderboards, ads, and diagnostics:
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Google AdMob",
                  purpose: "In-app banner, interstitial, and rewarded video advertising",
                  url: "https://policies.google.com/technologies/ads",
                },
                {
                  name: "Google Firebase (Firestore, Auth, Crashlytics)",
                  purpose: "Leaderboard database, anonymous player IDs, and crash analytics",
                  url: "https://firebase.google.com/support/privacy",
                },
                {
                  name: "Google Play Services",
                  purpose: "Game distribution, automatic updates, and in-app purchase processing",
                  url: "https://policies.google.com/privacy",
                },
              ].map((service) => (
                <div
                  key={service.name}
                  className="bg-snl-card border border-snl-border rounded-lg px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                >
                  <div>
                    <p className="text-snl-text font-medium text-sm">{service.name}</p>
                    <p className="text-xs mt-0.5">{service.purpose}</p>
                  </div>
                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-snl-accent text-xs hover:underline shrink-0"
                  >
                    Privacy Policy →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Children's Privacy */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">6. Children&apos;s Privacy (COPPA &amp; GDPR-K)</h2>
            <p>
              WordNova is an all-ages casual word game suitable for families and puzzle enthusiasts. We do not knowingly solicit or collect personal information from children under 13 (or under 16 in the EEA/UK).
            </p>
            <p className="mt-3">
              Advertising served in WordNova adheres to Google Play Families Policy guidelines. If a parent or guardian discovers that their child has provided personal information or an inappropriate callsign without consent, please email us at{" "}
              <a href="mailto:hello@shelnovalabs.com" className="text-snl-accent hover:underline">
                hello@shelnovalabs.com
              </a>{" "}
              and we will promptly delete the data from our leaderboard databases.
            </p>
          </section>

          {/* 7. In-Game Monetization & Ad Transparency */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">7. In-Game Monetization &amp; Ad Transparency</h2>
            <p className="mb-3">
              WordNova utilizes a player-first monetization model designed to prevent intrusive gameplay interruptions:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <span className="text-snl-text font-medium">Rewarded Ads:</span> Always 100% voluntary. You choose when to watch an ad to earn in-game Stardust, time freezes, or mistake shields.
              </li>
              <li>
                <span className="text-snl-text font-medium">Top Banners:</span> Positioned outside the active puzzle grid to avoid accidental taps or visual disruption.
              </li>
              <li>
                <span className="text-snl-text font-medium">Inter-Level Transitions:</span> Subject to pacing rules and frequency caps, never triggering mid-puzzle.
              </li>
              <li>
                <span className="text-snl-text font-medium">Remove Ads Purchase:</span> Players who purchase &quot;No Ads&quot; permanently disable all banner and interstitial ads while retaining optional rewarded boosts.
              </li>
            </ul>
          </section>

          {/* 8. User Rights & Data Deletion */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">8. Your Rights &amp; Data Deletion</h2>
            <p className="mb-3">You retain full control over your data:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <span className="text-snl-text font-medium">Reset Local Progress:</span> You can reset your campaign progress, stars, and local save files anytime through the in-game Settings menu.
              </li>
              <li>
                <span className="text-snl-text font-medium">Cloud Score Deletion:</span> To delete your callsign and associated scores from our Firebase leaderboards, email{" "}
                <a href="mailto:hello@shelnovalabs.com" className="text-snl-accent hover:underline">
                  hello@shelnovalabs.com
                </a>{" "}
                with your player callsign.
              </li>
              <li>
                <span className="text-snl-text font-medium">Advertising Preferences:</span> You can reset your advertising identifier or opt out of personalized ads at any time via your device settings (Android: <em>Settings → Google → Ads → Delete advertising ID</em>; iOS: <em>Settings → Privacy → Tracking</em>).
              </li>
            </ul>
          </section>

          {/* 9. Policy Updates */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">9. Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect new game features, ad network requirements, or legal compliance mandates. Revisions will be published on this page with an updated &quot;Last updated&quot; date. Continued play of WordNova constitutes acceptance of any modifications.
            </p>
          </section>

          {/* 10. Contact Us */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">10. Contact Information</h2>
            <p>
              If you have any questions, suggestions, or data privacy requests regarding WordNova, please contact our legal and support team:
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
              <p className="text-xs text-snl-muted pt-2">Location: Nairobi, Kenya</p>
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
            <Link href="/wordnova/terms" className="text-snl-muted hover:text-snl-text text-xs transition-colors">
              WordNova Terms
            </Link>
            <Link href="/privacy" className="text-snl-muted hover:text-snl-text text-xs transition-colors">
              All Privacy Policies
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
