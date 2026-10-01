import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Wash Rush: Pressure Panic | ShelNova Labs",
  description:
    "Terms of Service for Wash Rush: Pressure Panic, developed and operated by ShelNova Labs Ltd.",
};

export default function WashRushTermsOfService() {
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
            <Link
              href="/wash-rush/privacy"
              className="text-snl-muted hover:text-snl-text transition-colors"
            >
              ← Wash Rush Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-snl-accent text-xs font-mono font-medium tracking-widest uppercase">
              Legal Disclosures
            </span>
            <span className="text-snl-subtle text-xs">•</span>
            <span className="text-snl-subtle text-xs font-mono">Wash Rush: Pressure Panic</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-snl-text mb-3 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-snl-muted text-sm font-mono">
            Package ID: com.washrush.washrush · Last updated: {updated}
          </p>
        </div>

        <div className="space-y-10 text-snl-muted leading-relaxed">
          {/* 1. Acceptance */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="mb-3">
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Player&quot;, &quot;User&quot;, or &quot;you&quot;) and{" "}
              <span className="text-snl-text font-medium">ShelNova Labs Ltd.</span> (&quot;ShelNova Labs&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), governing your download, installation, access, and play of{" "}
              <span className="text-snl-text font-medium">Wash Rush: Pressure Panic</span> (&quot;the Game&quot;).
            </p>
            <p>
              By downloading, installing, or playing Wash Rush: Pressure Panic, you agree to be bound by these Terms. If you do not agree to these Terms, do not install, copy, or play the Game.
            </p>
          </section>

          {/* 2. License Grant & IP */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">
              2. License Grant &amp; Intellectual Property
            </h2>
            <p className="mb-3">
              Subject to your ongoing compliance with these Terms, ShelNova Labs Ltd. grants you a limited, revocable, non-exclusive, non-transferable, non-sublicensable personal license to install and play the Game on personal Android devices solely for personal, non-commercial entertainment purposes.
            </p>
            <p className="mb-3">
              The Game, including but not limited to its software code, Godot engine assets, 3D meshes, cleanable surface shaders, audio effects, musical compositions, UI artwork, textures, game mechanics, animations, and the &quot;Wash Rush: Pressure Panic&quot; trademark, are the sole and exclusive intellectual property of ShelNova Labs Ltd. and its licensors.
            </p>
            <p>
              All rights not expressly granted to you under these Terms are reserved by ShelNova Labs Ltd.
            </p>
          </section>

          {/* 3. Player Conduct & Fair Play */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">
              3. Player Conduct &amp; Fair Play Rules
            </h2>
            <p className="mb-3">To maintain fair and safe gameplay for everyone, you agree that you will not:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code or proprietary shaders of the Game</li>
              <li>Modify, distribute, sell, lease, sublicense, or create derivative works based on Wash Rush: Pressure Panic</li>
              <li>Use automation tools, bots, memory editors, speed hacks, or third-party cheat engines to falsify cleaning completion percentages, coin balances, or star ratings</li>
              <li>Circumvent, disable, or tamper with security controls, AdMob ad serving integrations, or remote configuration servers</li>
              <li>Use the Game for any unlawful, commercial, or unauthorized purpose</li>
            </ul>
          </section>

          {/* 4. Virtual Economy & Local Save Data */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">
              4. Virtual Currency &amp; Local Save Data
            </h2>
            <p className="mb-3">
              Wash Rush: Pressure Panic includes in-game virtual currency (&quot;Clean Coins&quot;), stars, washer equipment upgrades, spray nozzles, and equipment skins. You acknowledge and agree that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mb-3">
              <li>Virtual currency and equipment upgrades have no real-world monetary value and cannot be redeemed, transferred, or exchanged for fiat currency or real property.</li>
              <li>Clean Coins are earned strictly through gameplay progression or voluntarily watching rewarded video advertisements.</li>
              <li>All game progress is saved locally on your device storage. ShelNova Labs does not maintain a centralized cloud database of your personal save progress. If you uninstall the Game, clear device application storage, or switch to a new phone without a system backup, your virtual currency and unlocked equipment will be permanently lost. ShelNova Labs is not liable for lost local data.</li>
            </ul>
          </section>

          {/* 5. In-Game Advertisements */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">
              5. In-Game Advertisements
            </h2>
            <p className="mb-3">
              Wash Rush: Pressure Panic is provided free of charge, supported by third-party advertising via Google AdMob. Ads may appear between cleaning jobs or as voluntary rewarded video opportunities to earn bonus clean coins or equipment access.
            </p>
            <p>
              ShelNova Labs does not endorse, guarantee, or assume responsibility for any products, services, or representations made in third-party advertisements displayed within the Game. Your interactions with advertisers are solely between you and the respective third party.
            </p>
          </section>

          {/* 6. Game Updates & Availability */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">
              6. Game Updates &amp; Service Availability
            </h2>
            <p className="mb-3">
              ShelNova Labs may issue updates, patches, bug fixes, or balance adjustments from time to time via Google Play In-App Updates or Play Store releases. Certain updates may be mandatory to continue playing with active network features.
            </p>
            <p>
              We reserve the right to alter, balance, adjust, or discontinue any feature, level, or equipment item in the Game at any time without liability. While we strive for high uptime and smooth gameplay, we do not warrant that the Game will be error-free or uninterrupted.
            </p>
          </section>

          {/* 7. Disclaimer of Warranties */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">
              7. Disclaimer of Warranties
            </h2>
            <p className="p-4 bg-snl-card border border-snl-border rounded-lg text-sm text-snl-muted leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, WASH RUSH: PRESSURE PANIC IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITH ALL FAULTS AND WITHOUT WARRANTIES OF ANY KIND. SHELNOVA LABS LTD. EXPRESSLY DISCLAIMS ALL WARRANTIES, EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND QUIET ENJOYMENT.
            </p>
          </section>

          {/* 8. Limitation of Liability */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">
              8. Limitation of Liability
            </h2>
            <p className="p-4 bg-snl-card border border-snl-border rounded-lg text-sm text-snl-muted leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL SHELNOVA LABS LTD., ITS DIRECTORS, EMPLOYEES, CONTRACTORS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, DEVICE DAMAGE, DEVICE OVERHEATING, OR LOSS OF GOODWILL, ARISING FROM YOUR ACCESS TO OR USE OF (OR INABILITY TO USE) THE GAME, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          {/* 9. Governing Law */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">
              9. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms of Service and any dispute arising from or related to the Game shall be governed by and construed in accordance with the laws of the Republic of Kenya, without giving effect to any principles of conflicts of law. You agree to submit to the jurisdiction of the competent courts located in Nairobi, Kenya for the resolution of any dispute.
            </p>
          </section>

          {/* 10. Contact Information */}
          <section className="bg-snl-card border border-snl-border rounded-xl p-6">
            <h2 className="font-heading text-xl font-bold text-snl-text mb-2">
              10. Contact Us
            </h2>
            <p className="text-sm mb-3">
              For any questions, legal notices, or feedback regarding these Terms of Service, please contact ShelNova Labs Ltd.:
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
          </section>
        </div>
      </div>
    </div>
  );
}
