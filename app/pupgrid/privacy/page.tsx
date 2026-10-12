import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — PupGrid: Puppy Sudoku | ShelNova Labs",
  description:
    "Privacy Policy for PupGrid: Puppy Sudoku, developed by ShelNova Labs Ltd. How we handle your progress, leaderboard name, anonymous analytics, crash reports and AdMob advertising.",
};

export default function PupGridPrivacyPolicy() {
  const updated = "13 October 2026";

  return (
    <div data-snl-legal className="min-h-screen bg-snl-bg text-snl-text">
      {/* Top bar */}
      <div className="border-b border-snl-border">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-lg tracking-tight">
            Shel<span className="text-snl-accent">Nova</span> Labs
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/pupgrid/terms" className="text-snl-muted hover:text-snl-text transition-colors">
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
            Legal · PupGrid
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
              <span className="text-snl-text font-medium">PupGrid: Puppy Sudoku</span> (&quot;PupGrid&quot; or &quot;the App&quot;),
              available on Android and iOS devices. This policy explains what information the App handles, why, and the choices you have.
            </p>
            <p className="mt-3">
              By installing or playing PupGrid you agree to this policy. If you do not agree, please uninstall the App.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">2. Information We Collect</h2>

            <h3 className="text-snl-text font-semibold mb-2 mt-4">2.1 Stored on Your Device</h3>
            <p>
              Your progress, settings, hint balances, daily streak and the puzzles you have started are saved on your device only. PupGrid does not sign you up, and it does not ask for an email address, a password or your real name.
            </p>

            <h3 className="text-snl-text font-semibold mb-2 mt-4">2.2 Anonymous Sign-In</h3>
            <p>
              To take part in the leaderboards, the App signs you in anonymously with Google Firebase Authentication. This gives your install a random identifier that is not linked to your name, email or phone number. Uninstalling the App or clearing its data creates a new identifier, so you start again on the leaderboards.
            </p>

            <h3 className="text-snl-text font-semibold mb-2 mt-4">2.3 Leaderboards</h3>
            <p>
              If you play a level or a daily puzzle and submit a score, we store the following on Google Cloud Firestore:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
              <li>the random identifier from section 2.2;</li>
              <li>the <span className="text-snl-text font-medium">display name</span> you choose (up to 16 characters, shown publicly);</li>
              <li>your points, stars, hints used, time taken, and the level or daily date.</li>
            </ul>
            <p className="mt-3">
              Display names and scores are <span className="text-snl-text font-medium">public</span> to other players. Do not put personal information in your display name. If a name is offensive or you want your scores removed, contact us (section 10).
            </p>

            <h3 className="text-snl-text font-semibold mb-2 mt-4">2.4 Analytics and Crash Reports</h3>
            <p>
              We use Google Firebase Analytics and Firebase Crashlytics to learn which levels are hard, how often the App is used, and to find and fix crashes. These record anonymous usage events (for example, a level started or completed, the number of hints used, or a daily finished), your device model, operating system version, app version and crash logs. We do not send names, the content of your display name or any free text in these events.
            </p>
            <p className="mt-3">
              You can switch this off at any time: open the pause menu and turn off <span className="text-snl-text font-medium">Share anonymous stats</span>. Reporting then stops straight away.
            </p>

            <h3 className="text-snl-text font-semibold mb-2 mt-4">2.5 Update Checks</h3>
            <p>
              The App reads a small settings file from Firebase Remote Config to find out whether a newer version is required. This request sends the App version and platform, and no personal information.
            </p>

            <h3 className="text-snl-text font-semibold mb-2 mt-4">2.6 Advertising</h3>
            <p>
              PupGrid shows advertisements from Google AdMob: banners, full-screen ads between levels, and optional rewarded videos that you choose to watch to unlock a hint or an extra life. AdMob may collect identifiers such as your device&apos;s advertising ID, your approximate location derived from your IP address, and information about the ads you see and interact with. See section 5.
            </p>

            <h3 className="text-snl-text font-semibold mb-2 mt-4">2.7 What We Do Not Collect</h3>
            <p>
              PupGrid does not access your contacts, camera, microphone, photos or precise GPS location, and it does not make payments. There are no in-app purchases in the current version.
            </p>
          </section>

          {/* 3. How We Use Information */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">3. How We Use Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>To run the game, save your progress and keep the hint and streak counts right.</li>
              <li>To show leaderboards and to rank scores fairly.</li>
              <li>To understand which puzzles work well and to fix crashes and performance problems.</li>
              <li>To show advertising that keeps the game free, in line with the consent choices you have made.</li>
              <li>To tell you when a required update is available.</li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information and we do not use it to build a profile for any purpose other than the ones above.
            </p>
          </section>

          {/* 4. Storage and Sharing */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">4. Where Data Is Stored and Who Receives It</h2>
            <p>
              Data is processed by Google, which provides Firebase, Firestore, Analytics, Crashlytics, Remote Config and AdMob, as our service providers. Google may process data on servers outside your country. We do not share your information with anyone else, except where the law requires it.
            </p>
          </section>

          {/* 5. Advertising and Consent */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">5. Advertising and Your Choices</h2>
            <p>
              Where the law requires it (including the European Economic Area, the United Kingdom and some other regions), you will see a consent form from Google&apos;s User Messaging Platform before ads are requested. It explains your options, including whether ads may be personalised. You can change your choice at any time from the pause menu under <span className="text-snl-text font-medium">Ad privacy choices</span>, which appears wherever the law requires that option.
            </p>
            <p className="mt-3">
              You can also limit ad personalisation in your device settings (for example, &quot;Opt out of Ads Personalization&quot; on Android or &quot;Limit Ad Tracking&quot; on iOS). Google&apos;s own policy on how AdMob uses data is at{" "}
              <a href="https://policies.google.com/technologies/ads" className="text-snl-accent hover:underline" target="_blank" rel="noreferrer">
                policies.google.com/technologies/ads
              </a>.
            </p>
          </section>

          {/* 6. Children */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">6. Children</h2>
            <p>
              PupGrid is not designed for children under 13, and we do not knowingly collect personal information from them. If you believe a child has given us personal information, contact us and we will remove it.
            </p>
          </section>

          {/* 7. Retention */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">7. How Long We Keep Data</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><span className="text-snl-text font-medium">On your device:</span> until you clear the App&apos;s data or uninstall it.</li>
              <li><span className="text-snl-text font-medium">Leaderboard entries:</span> until you ask us to remove them, or until the puzzle&apos;s leaderboard is retired.</li>
              <li><span className="text-snl-text font-medium">Analytics and crash reports:</span> kept by Google for the period set in its Firebase settings, then deleted.</li>
            </ul>
          </section>

          {/* 8. Your Rights */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">8. Your Rights</h2>
            <p>
              Depending on where you live (for example under the GDPR, the UK GDPR, or the CCPA/CPRA), you may have the right to access, correct or delete your personal information, to object to or restrict its use, to withdraw consent, and to complain to your local data protection authority. Most of this is available directly in the App: turn off anonymous stats in the pause menu, change your ad choices, or clear the App&apos;s data. For anything else, contact us.
            </p>
          </section>

          {/* 9. Security and Changes */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">9. Security and Changes</h2>
            <p>
              We rely on Google&apos;s security infrastructure, and our leaderboard rules only allow each player to write their own scores. No system is perfectly secure, so we cannot guarantee absolute security.
            </p>
            <p className="mt-3">
              We may update this policy as the App changes. The date above shows the latest version, and continued use of PupGrid after an update means you accept it.
            </p>
          </section>

          {/* 10. Contact */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">10. Contact Us</h2>
            <p>
              For privacy questions, requests to remove a leaderboard entry, or to use any of your rights, contact:
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
            <Link href="/pupgrid/terms" className="text-snl-muted hover:text-snl-text transition-colors">
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
