import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms of Service — Wash Rush: Pressure Panic | ShelNova Labs",
  description:
    "Official Privacy Policy and Terms of Service for Wash Rush: Pressure Panic, developed by ShelNova Labs Ltd. Learn how we handle your gameplay data, AdMob advertising, and terms of play.",
};

export default function WashRushPrivacyAndTerms() {
  const updated = "1 October 2026";

  return (
    <div className="min-h-screen bg-snl-bg text-snl-text">
      {/* Top bar */}
      <div className="border-b border-snl-border sticky top-0 z-30 bg-snl-bg/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-lg tracking-tight">
            Shel<span className="text-snl-accent">Nova</span> Labs
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <a
              href="#terms"
              className="text-snl-muted hover:text-snl-text transition-colors hidden sm:inline"
            >
              Jump to Terms
            </a>
            <Link
              href="/privacy"
              className="text-snl-muted hover:text-snl-text transition-colors"
            >
              ← All Policies
            </Link>
          </div>
        </div>
      </div>

      {/* Hero / Header */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-snl-accent text-xs font-mono font-medium tracking-widest uppercase">
              Legal Disclosures
            </span>
            <span className="text-snl-subtle text-xs">•</span>
            <span className="text-snl-subtle text-xs font-mono">Wash Rush: Pressure Panic</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-snl-text mb-4 tracking-tight">
            Privacy Policy &amp; Terms of Service
          </h1>
          <p className="text-snl-muted text-sm font-mono">
            Package ID: com.washrush.washrush · Last updated: {updated}
          </p>
        </div>

        {/* Quick Nav Anchor Pills */}
        <div className="flex flex-wrap items-center gap-3 p-2 bg-snl-card border border-snl-border rounded-xl">
          <a
            href="#privacy"
            className="flex-1 text-center py-2.5 px-4 rounded-lg bg-snl-accent/15 border border-snl-accent/30 text-snl-text font-medium text-sm hover:bg-snl-accent/25 transition-colors"
          >
            1. Privacy Policy
          </a>
          <a
            href="#terms"
            className="flex-1 text-center py-2.5 px-4 rounded-lg bg-snl-border/50 text-snl-muted font-medium text-sm hover:text-snl-text hover:bg-snl-border transition-colors"
          >
            2. Terms of Service
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-20">

        {/* ========================================================= */}
        {/* SECTION 1: PRIVACY POLICY                                 */}
        {/* ========================================================= */}
        <section id="privacy" className="scroll-mt-24 space-y-10 text-snl-muted leading-relaxed">
          <div className="border-b border-snl-border pb-4">
            <h2 className="font-heading text-3xl font-bold text-snl-text">
              Privacy Policy
            </h2>
            <p className="text-sm text-snl-muted mt-1">
              How ShelNova Labs Ltd. collects, protects, and handles player data in Wash Rush: Pressure Panic.
            </p>
          </div>

          {/* 1. Introduction */}
          <div>
            <h3 className="font-heading text-xl font-bold text-snl-text mb-3">
              1. Introduction &amp; Scope
            </h3>
            <p className="mb-3">
              ShelNova Labs Ltd. (&quot;ShelNova Labs&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) develops and operates{" "}
              <span className="text-snl-text font-medium">Wash Rush: Pressure Panic</span> (&quot;Wash Rush&quot; or &quot;the Game&quot;),
              an arcade simulation mobile game available on Android devices.
            </p>
            <p className="mb-3">
              This Privacy Policy explains what information we collect when you install and play Wash Rush: Pressure Panic, how that information is used, and the privacy controls available to you. We are committed to transparency and respecting your digital privacy.
            </p>
            <p>
              By installing, downloading, or playing the Game, you acknowledge and agree to the practices described in this Privacy Policy. If you do not agree with any part of this policy, please do not install or play Wash Rush: Pressure Panic.
            </p>
          </div>

          {/* 2. Information We Collect */}
          <div>
            <h3 className="font-heading text-xl font-bold text-snl-text mb-3">
              2. Information We Collect
            </h3>

            <div className="space-y-6">
              <div className="bg-snl-card border border-snl-border rounded-xl p-5">
                <h4 className="text-snl-text font-semibold mb-2">
                  2.1 Local Game Progress (On-Device Storage)
                </h4>
                <p className="text-sm mb-3">
                  Wash Rush: Pressure Panic does not require personal account creation, email registration, or social media logins. All gameplay progress is saved locally within your device&apos;s isolated application storage sandbox (<code className="text-xs bg-snl-bg px-1.5 py-0.5 rounded text-snl-accent font-mono">user://</code> directory). This includes:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-sm ml-2">
                  <li>Clean coins balance and stars earned per job</li>
                  <li>Unlocked pressure washers, spray nozzles (0°, 15°, 25°, 40°, turbo), and washer skins</li>
                  <li>Completed campaign levels, timed job best scores, and campaign progression</li>
                  <li>Sound effects, music volume, and vibration preferences</li>
                </ul>
                <p className="text-xs text-snl-subtle mt-3">
                  Because this data is stored locally on your device, deleting the app or clearing app storage will reset your save data.
                </p>
              </div>

              <div className="bg-snl-card border border-snl-border rounded-xl p-5">
                <h4 className="text-snl-text font-semibold mb-2">
                  2.2 Diagnostic &amp; Crash Reporting (Firebase Crashlytics)
                </h4>
                <p className="text-sm">
                  To identify stability issues, engine bugs, and device-specific rendering errors, the Game integrates Google Firebase Crashlytics. When an error or crash occurs, automated non-personally identifiable diagnostic reports are sent to our secure Firebase console, including device hardware model, operating system version, memory utilization, and stack trace error logs. We do not link crash reports to your personal identity.
                </p>
              </div>

              <div className="bg-snl-card border border-snl-border rounded-xl p-5">
                <h4 className="text-snl-text font-semibold mb-2">
                  2.3 Gameplay Telemetry &amp; Analytics (Firebase Analytics)
                </h4>
                <p className="text-sm">
                  We collect aggregated, pseudonymous gameplay telemetry using Google Firebase Analytics. This includes non-personal interaction events such as jobs initiated, jobs completed, surface cleaning percentages, wash completion duration, and equipment selection. This data is used solely to balance game difficulty curves, identify frustrating levels, and optimize performance.
                </p>
              </div>

              <div className="bg-snl-card border border-snl-border rounded-xl p-5">
                <h4 className="text-snl-text font-semibold mb-2">
                  2.4 Advertising Data (Google AdMob)
                </h4>
                <p className="text-sm mb-3">
                  Wash Rush: Pressure Panic is supported by advertisements served through Google AdMob (Publisher ID: <code className="text-xs bg-snl-bg px-1.5 py-0.5 rounded text-snl-accent font-mono">ca-app-pub-7925163364817373</code>). AdMob may collect and process:
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-sm ml-2">
                  <li>Your device&apos;s Google Advertising ID (GAID)</li>
                  <li>Approximate location derived from IP address (coarse country/city level)</li>
                  <li>Ad viewability metrics, impressions, and user interactions with ad units</li>
                </ul>
                <p className="text-sm mt-3">
                  The Game utilizes Google&apos;s User Messaging Platform (UMP) SDK. When required by applicable law (such as under the European Union GDPR or UK GDPR), players are presented with a consent dialogue upon launch to choose between personalized ads, non-personalized ads, or to manage privacy preferences.
                </p>
              </div>

              <div className="bg-snl-card border border-snl-border rounded-xl p-5">
                <h4 className="text-snl-text font-semibold mb-2">
                  2.5 Push Notifications (Firebase Cloud Messaging)
                </h4>
                <p className="text-sm">
                  If you grant notification permissions on supported Android devices (Android 13+), we may send optional reminders regarding daily cleaning jobs or updates via Firebase Cloud Messaging (topic: <code className="text-xs bg-snl-bg px-1.5 py-0.5 rounded text-snl-accent font-mono">daily_job</code>). You can disable notifications at any time via Android System Settings.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Information We Do NOT Collect */}
          <div>
            <h3 className="font-heading text-xl font-bold text-snl-text mb-3">
              3. Information We Do NOT Collect
            </h3>
            <p className="mb-3">
              To minimize data processing and safeguard your privacy, Wash Rush: Pressure Panic does <strong className="text-snl-text">not</strong>:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Require user registration, passwords, phone numbers, or email addresses</li>
              <li>Collect physical home addresses, real names, or government identity numbers</li>
              <li>Access device contacts, photo galleries, camera, or microphone</li>
              <li>Track precise GPS location coordinates</li>
              <li>Collect, store, or process credit card numbers or financial banking details</li>
              <li>Sell, rent, or trade player data to data brokers or advertising exchanges</li>
            </ul>
          </div>

          {/* 4. Permissions Used */}
          <div>
            <h3 className="font-heading text-xl font-bold text-snl-text mb-3">
              4. Device Permissions Explained
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border border-snl-border rounded-lg overflow-hidden">
                <thead className="bg-snl-card border-b border-snl-border text-snl-text font-mono text-xs uppercase">
                  <tr>
                    <th className="p-3">Permission</th>
                    <th className="p-3">Technical Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-snl-border">
                  <tr>
                    <td className="p-3 font-mono text-xs text-snl-accent">android.permission.INTERNET</td>
                    <td className="p-3">Enables fetching remote game balancing configs, serving AdMob ads, and sending anonymized crash reports.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs text-snl-accent">android.permission.ACCESS_NETWORK_STATE</td>
                    <td className="p-3">Allows the Game to check network availability before requesting ad fill or remote balance updates.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs text-snl-accent">android.permission.VIBRATE</td>
                    <td className="p-3">Provides tactile haptic feedback during pressure washer trigger operation and surface cleaning.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-xs text-snl-accent">android.permission.POST_NOTIFICATIONS</td>
                    <td className="p-3">Optional Android 13+ permission for daily challenge reminder alerts (can be denied without impacting gameplay).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 5. Third-Party Service Providers */}
          <div>
            <h3 className="font-heading text-xl font-bold text-snl-text mb-3">
              5. Third-Party Service Providers
            </h3>
            <p className="mb-3">
              We rely on trusted third-party technology providers to operate and monetize the Game. These partners process information in accordance with their respective privacy policies:
            </p>
            <ul className="space-y-3">
              <li className="p-3 bg-snl-card border border-snl-border rounded-lg text-sm">
                <span className="text-snl-text font-bold">Google AdMob &amp; Google Mobile Ads: </span>
                Ad serving, monetization, and consent management. Review{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-snl-accent hover:underline">
                  Google&apos;s Privacy Policy
                </a>{" "}
                and{" "}
                <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-snl-accent hover:underline">
                  How Google Uses Information From Sites or Apps
                </a>.
              </li>
              <li className="p-3 bg-snl-card border border-snl-border rounded-lg text-sm">
                <span className="text-snl-text font-bold">Google Firebase (Crashlytics, Analytics, Remote Config, Cloud Messaging): </span>
                Crash diagnosis, pseudonymous telemetry, and remote game balancing. Review{" "}
                <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-snl-accent hover:underline">
                  Firebase Privacy and Security Documentation
                </a>.
              </li>
              <li className="p-3 bg-snl-card border border-snl-border rounded-lg text-sm">
                <span className="text-snl-text font-bold">Google Play Services &amp; In-App Updates: </span>
                Operating system updates and application distribution. Review{" "}
                <a href="https://play.google.com/about/play-terms/" target="_blank" rel="noopener noreferrer" className="text-snl-accent hover:underline">
                  Google Play Terms of Service
                </a>.
              </li>
            </ul>
          </div>

          {/* 6. Children's Privacy */}
          <div>
            <h3 className="font-heading text-xl font-bold text-snl-text mb-3">
              6. Children&apos;s Privacy (COPPA &amp; GDPR-K)
            </h3>
            <p className="mb-3">
              Wash Rush: Pressure Panic is designed for general audiences and casual game enthusiasts. We do not knowingly solicit or collect personal information from children under the age of 13 (or under 16 in the European Union and United Kingdom).
            </p>
            <p>
              In accordance with Google Play Designed for Families and COPPA guidelines, our ad requests are configured to prevent behavioral profiling of young audiences. If you believe that a child has inadvertently provided us with personal data, please contact us immediately at{" "}
              <a href="mailto:legal@shelnovalabs.com" className="text-snl-accent hover:underline">legal@shelnovalabs.com</a>, and we will promptly take steps to delete any such data.
            </p>
          </div>

          {/* 7. Player Privacy Rights */}
          <div>
            <h3 className="font-heading text-xl font-bold text-snl-text mb-3">
              7. Your Rights &amp; Privacy Choices
            </h3>
            <p className="mb-3">Depending on your geographic jurisdiction (such as under GDPR, UK GDPR, or CCPA/CPRA), you have specific privacy rights:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-4">
              <li><strong className="text-snl-text">Revoking Ad Consent:</strong> Players in the EEA and UK can adjust or revoke their advertising consent choices at any time via the in-game &quot;Privacy Options&quot; button or by clearing app data.</li>
              <li><strong className="text-snl-text">Resetting Advertising ID:</strong> You can reset or delete your Google Advertising ID on your Android device by navigating to: <code className="text-xs bg-snl-bg px-1.5 py-0.5 rounded text-snl-accent font-mono">Settings &gt; Google &gt; Ads &gt; Reset advertising ID</code>.</li>
              <li><strong className="text-snl-text">Opting Out of Notifications:</strong> You can revoke notification permissions at any time through <code className="text-xs bg-snl-bg px-1.5 py-0.5 rounded text-snl-accent font-mono">Settings &gt; Apps &gt; Wash Rush &gt; Notifications</code>.</li>
              <li><strong className="text-snl-text">Data Deletion:</strong> Because all game save data is stored locally on your device, you have complete autonomous control to delete your data at any time by uninstalling the Game or clearing the app storage.</li>
            </ul>
          </div>

          {/* 8. Changes to Privacy Policy */}
          <div>
            <h3 className="font-heading text-xl font-bold text-snl-text mb-3">
              8. Changes to this Privacy Policy
            </h3>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in legal requirements, game features, or third-party SDK updates. The &quot;Last updated&quot; date at the top of this document indicates the effective date of the latest revisions. We encourage you to review this policy periodically. Continued use of the Game following notice of modifications constitutes acceptance of the revised policy.
            </p>
          </div>
        </section>

        {/* Divider between Privacy and Terms */}
        <div className="border-t border-snl-border/80 my-16"></div>

        {/* ========================================================= */}
        {/* SECTION 2: TERMS OF SERVICE                               */}
        {/* ========================================================= */}
        <section id="terms" className="scroll-mt-24 space-y-10 text-snl-muted leading-relaxed">
          <div className="border-b border-snl-border pb-4">
            <h2 className="font-heading text-3xl font-bold text-snl-text">
              Terms of Service
            </h2>
            <p className="text-sm text-snl-muted mt-1">
              Terms and conditions governing the use, play, and virtual economy of Wash Rush: Pressure Panic.
            </p>
          </div>

          {/* 1. Acceptance */}
          <div>
            <h3 className="font-heading text-xl font-bold text-snl-text mb-3">
              1. Acceptance of Terms
            </h3>
            <p className="mb-3">
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Player&quot;, &quot;User&quot;, or &quot;you&quot;) and{" "}
              <span className="text-snl-text font-medium">ShelNova Labs Ltd.</span> (&quot;ShelNova Labs&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), governing your download, installation, access, and play of{" "}
              <span className="text-snl-text font-medium">Wash Rush: Pressure Panic</span> (&quot;the Game&quot;).
            </p>
            <p>
              By downloading, installing, or playing Wash Rush: Pressure Panic, you agree to be bound by these Terms. If you do not agree to these Terms, do not install, copy, or play the Game.
            </p>
          </div>

          {/* 2. License Grant & IP */}
          <div>
            <h3 className="font-heading text-xl font-bold text-snl-text mb-3">
              2. License Grant &amp; Intellectual Property
            </h3>
            <p className="mb-3">
              Subject to your ongoing compliance with these Terms, ShelNova Labs Ltd. grants you a limited, revocable, non-exclusive, non-transferable, non-sublicensable personal license to install and play the Game on personal Android devices solely for personal, non-commercial entertainment purposes.
            </p>
            <p className="mb-3">
              The Game, including but not limited to its software code, Godot engine assets, 3D meshes, cleanable surface shaders, audio effects, musical compositions, UI artwork, textures, game mechanics, animations, and the &quot;Wash Rush: Pressure Panic&quot; trademark, are the sole and exclusive intellectual property of ShelNova Labs Ltd. and its licensors.
            </p>
            <p>
              All rights not expressly granted to you under these Terms are reserved by ShelNova Labs Ltd.
            </p>
          </div>

          {/* 3. Player Conduct & Fair Play */}
          <div>
            <h3 className="font-heading text-xl font-bold text-snl-text mb-3">
              3. Player Conduct &amp; Fair Play Rules
            </h3>
            <p className="mb-3">To maintain fair and safe gameplay for everyone, you agree that you will not:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code or proprietary shaders of the Game</li>
              <li>Modify, distribute, sell, lease, sublicense, or create derivative works based on Wash Rush: Pressure Panic</li>
              <li>Use automation tools, bots, memory editors, speed hacks, or third-party cheat engines to falsify cleaning completion percentages, coin balances, or star ratings</li>
              <li>Circumvent, disable, or tamper with security controls, AdMob ad serving integrations, or remote configuration servers</li>
              <li>Use the Game for any unlawful, commercial, or unauthorized purpose</li>
            </ul>
          </div>

          {/* 4. Virtual Economy & Local Save Data */}
          <div>
            <h3 className="font-heading text-xl font-bold text-snl-text mb-3">
              4. Virtual Currency &amp; Local Save Data
            </h3>
            <p className="mb-3">
              Wash Rush: Pressure Panic includes in-game virtual currency (&quot;Clean Coins&quot;), stars, washer equipment upgrades, spray nozzles, and equipment skins. You acknowledge and agree that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-3">
              <li>Virtual currency and equipment upgrades have no real-world monetary value and cannot be redeemed, transferred, or exchanged for fiat currency or real property.</li>
              <li>Clean Coins are earned strictly through gameplay progression or voluntarily watching rewarded video advertisements.</li>
              <li>All game progress is saved locally on your device storage. ShelNova Labs does not maintain a centralized cloud database of your personal save progress. If you uninstall the Game, clear device application storage, or switch to a new phone without a system backup, your virtual currency and unlocked equipment will be permanently lost. ShelNova Labs is not liable for lost local data.</li>
            </ul>
          </div>

          {/* 5. In-Game Advertisements */}
          <div>
            <h3 className="font-heading text-xl font-bold text-snl-text mb-3">
              5. In-Game Advertisements
            </h3>
            <p className="mb-3">
              Wash Rush: Pressure Panic is provided free of charge, supported by third-party advertising via Google AdMob. Ads may appear between cleaning jobs or as voluntary rewarded video opportunities to earn bonus clean coins or equipment access.
            </p>
            <p>
              ShelNova Labs does not endorse, guarantee, or assume responsibility for any products, services, or representations made in third-party advertisements displayed within the Game. Your interactions with advertisers are solely between you and the respective third party.
            </p>
          </div>

          {/* 6. Game Updates & Availability */}
          <div>
            <h3 className="font-heading text-xl font-bold text-snl-text mb-3">
              6. Game Updates &amp; Service Availability
            </h3>
            <p className="mb-3">
              ShelNova Labs may issue updates, patches, bug fixes, or balance adjustments from time to time via Google Play In-App Updates or Play Store releases. Certain updates may be mandatory to continue playing with active network features.
            </p>
            <p>
              We reserve the right to alter, balance, adjust, or discontinue any feature, level, or equipment item in the Game at any time without liability. While we strive for high uptime and smooth gameplay, we do not warrant that the Game will be error-free or uninterrupted.
            </p>
          </div>

          {/* 7. Disclaimer of Warranties */}
          <div>
            <h3 className="font-heading text-xl font-bold text-snl-text mb-3">
              7. Disclaimer of Warranties
            </h3>
            <p className="p-4 bg-snl-card border border-snl-border rounded-lg text-sm text-snl-muted leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, WASH RUSH: PRESSURE PANIC IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITH ALL FAULTS AND WITHOUT WARRANTIES OF ANY KIND. SHELNOVA LABS LTD. EXPRESSLY DISCLAIMS ALL WARRANTIES, EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND QUIET ENJOYMENT.
            </p>
          </div>

          {/* 8. Limitation of Liability */}
          <div>
            <h3 className="font-heading text-xl font-bold text-snl-text mb-3">
              8. Limitation of Liability
            </h3>
            <p className="p-4 bg-snl-card border border-snl-border rounded-lg text-sm text-snl-muted leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL SHELNOVA LABS LTD., ITS DIRECTORS, EMPLOYEES, CONTRACTORS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, DEVICE DAMAGE, DEVICE OVERHEATING, OR LOSS OF GOODWILL, ARISING FROM YOUR ACCESS TO OR USE OF (OR INABILITY TO USE) THE GAME, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </div>

          {/* 9. Governing Law */}
          <div>
            <h3 className="font-heading text-xl font-bold text-snl-text mb-3">
              9. Governing Law &amp; Jurisdiction
            </h3>
            <p>
              These Terms of Service and any dispute arising from or related to the Game shall be governed by and construed in accordance with the laws of the Republic of Kenya, without giving effect to any principles of conflicts of law. You agree to submit to the jurisdiction of the competent courts located in Nairobi, Kenya for the resolution of any dispute.
            </p>
          </div>

          {/* 10. Contact Information */}
          <div className="bg-snl-card border border-snl-border rounded-xl p-6">
            <h3 className="font-heading text-xl font-bold text-snl-text mb-2">
              10. Contact Us
            </h3>
            <p className="text-sm mb-3">
              For any questions, legal notices, or feedback regarding this Privacy Policy or Terms of Service, please contact ShelNova Labs Ltd.:
            </p>
            <div className="space-y-1 text-sm font-mono text-snl-text">
              <p>ShelNova Labs Ltd.</p>
              <p>
                Email:{" "}
                <a href="mailto:legal@shelnovalabs.com" className="text-snl-accent hover:underline">
                  legal@shelnovalabs.com
                </a>{" "}
                /{" "}
                <a href="mailto:contact@shelnovalabs.com" className="text-snl-accent hover:underline">
                  contact@shelnovalabs.com
                </a>
              </p>
              <p>
                Website:{" "}
                <a href="https://shelnovalabs.com" className="text-snl-accent hover:underline">
                  https://shelnovalabs.com
                </a>
              </p>
              <p className="text-snl-muted text-xs pt-1">Nairobi, Kenya</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
