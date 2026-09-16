import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — WordNova | ShelNova Labs",
  description:
    "Terms of Service for WordNova: Connect Words, Discover Worlds, developed by ShelNova Labs Ltd.",
};

export default function WordNovaTermsOfService() {
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
            <Link href="/wordnova/privacy" className="text-snl-muted hover:text-snl-text transition-colors">
              ← WordNova Privacy Policy
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
            Terms of Service
          </h1>
          <p className="text-snl-muted text-sm">Last updated: {updated}</p>
        </div>

        <div className="space-y-10 text-snl-muted leading-relaxed">

          {/* 1. Acceptance */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, accessing, or playing{" "}
              <span className="text-snl-text font-medium">WordNova: Connect Words, Discover Worlds</span> (&quot;the Game&quot;),
              developed and operated by ShelNova Labs Ltd. (&quot;ShelNova Labs&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;),
              you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not download, install, or play the Game.
            </p>
          </section>

          {/* 2. Description of Game */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">2. Description of the Game</h2>
            <p>
              WordNova is an interactive cosmic word-association and vocabulary puzzle game. The Game features a 600-level galaxy campaign spanning multiple celestial regions (including Home Orbit, Lunar Fields, Asteroid Belt, Mars, Jupiter, Saturn, Uranus, Neptune, and Genesis Singularity), accompanied by Star Link puzzles, constellation discovery, score leaderboards, and virtual economy mechanics. The Game is provided for personal, non-commercial entertainment.
            </p>
          </section>

          {/* 3. Fair Play & Player Conduct */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">3. Fair Play &amp; Player Conduct</h2>
            <p className="mb-3">
              To ensure an enjoyable and honest experience for all players, you agree that you will not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Use cheats, exploits, automation software, bots, hacks, or unauthorized third-party tools to manipulate game progress or leaderboards</li>
              <li>Decompile, reverse engineer, disassemble, or attempt to derive source code or level data from WordNova</li>
              <li>Choose offensive, defamatory, hateful, or infringing player callsigns for public leaderboards</li>
              <li>Interfere with or disrupt the security or integrity of our Firebase servers, databases, or ad network APIs</li>
              <li>Attempt to artificially generate ad impressions or bypass advertising requirements through unauthorized modification</li>
            </ul>
          </section>

          {/* 4. Virtual Currency & Game Boosts */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">4. Virtual Currency &amp; In-Game Items</h2>
            <p className="mb-3">
              WordNova contains virtual gameplay items and economy currencies, including <span className="text-snl-text font-medium">Stardust</span>, <span className="text-snl-text font-medium">Overdrive Boosts</span> (time freeze), <span className="text-snl-text font-medium">Mistake Shields</span>, and <span className="text-snl-text font-medium">Hints</span>.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <span className="text-snl-text font-medium">No Monetary Value:</span> Virtual goods and Stardust have no cash value and cannot be redeemed, exchanged, or refunded for real currency, goods, or services from ShelNova Labs or any third party.
              </li>
              <li>
                <span className="text-snl-text font-medium">Non-Transferable:</span> Virtual goods are licensed strictly to you for your personal gameplay and may not be sold, gifted, or traded to another player or account.
              </li>
              <li>
                <span className="text-snl-text font-medium">Earned Mechanics:</span> Stardust and boosts may be earned via puzzle completion, 3-star level mastery, constellation discovery, Daily Cosmic Well claims, or optional rewarded video advertisements.
              </li>
            </ul>
          </section>

          {/* 5. In-App Purchases & Advertising */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">5. In-App Purchases &amp; Advertising</h2>
            <p className="mb-3">
              WordNova is free to download and supported by mobile advertising:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <span className="text-snl-text font-medium">Advertising:</span> Advertisements are served via Google AdMob (banner ads, rewarded videos, and natural transition interstitials). You may choose to watch rewarded videos at your sole discretion.
              </li>
              <li>
                <span className="text-snl-text font-medium">Remove Ads Purchase:</span> If you purchase the optional &quot;No Ads&quot; upgrade, all persistent banner ads and inter-level interstitial ads will be permanently disabled for your device. Optional rewarded videos remain available should you choose to activate them for bonus Stardust or boosts.
              </li>
              <li>
                <span className="text-snl-text font-medium">Payment Processing:</span> In-app purchases are processed exclusively through Google Play Billing (or Apple App Store Billing). Transactions are subject to the terms and refund policies of the respective store.
              </li>
            </ul>
          </section>

          {/* 6. Intellectual Property */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">6. Intellectual Property Rights</h2>
            <p>
              All rights, title, and interest in and to WordNova—including all software code, visual art, constellation layouts, puzzle designs, word associations, astronomical narrative lore, user interface designs, audio, and the &quot;WordNova&quot; trademark—are and remain the exclusive intellectual property of ShelNova Labs Ltd.
            </p>
            <p className="mt-3">
              You are granted a limited, personal, non-exclusive, non-transferable, revocable license to play WordNova on compatible devices strictly for personal entertainment.
            </p>
          </section>

          {/* 7. Disclaimer of Warranties */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">7. Disclaimer of Warranties</h2>
            <p>
              WordNova is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis, without warranties of any kind, whether express, statutory, or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
            <p className="mt-3">
              While we continuously test and optimize WordNova to deliver smooth 60 FPS gameplay, ShelNova Labs does not guarantee that the Game will be completely error-free, uninterrupted, or compatible with every hardware configuration.
            </p>
          </section>

          {/* 8. Limitation of Liability */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, in no event shall ShelNova Labs Ltd., its founders, directors, employees, or partners be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including loss of data, profits, device malfunction, or goodwill, arising out of or in connection with your access to or inability to use WordNova.
            </p>
          </section>

          {/* 9. Modifications to the Game & Terms */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">9. Modifications to the Game &amp; Terms</h2>
            <p>
              We reserve the right to update, modify, expand, or discontinue features of WordNova (including new levels, economy balancing, or leaderboard formats) at our discretion. We may also revise these Terms of Service periodically. Revisions will be published on this page with an updated &quot;Last updated&quot; date.
            </p>
          </section>

          {/* 10. Governing Law */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">10. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Kenya, without giving effect to any principles of conflicts of law. Any legal action or dispute arising out of these Terms shall be resolved in the competent courts of Nairobi, Kenya.
            </p>
          </section>

          {/* 11. Contact Us */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">11. Contact Information</h2>
            <p>
              For legal inquiries, support requests, or questions regarding these Terms of Service, please reach out to:
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
          <p className="text-snl-muted text-xs">
            © {new Date().getFullYear()} ShelNova Labs Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/wordnova/privacy" className="text-snl-muted hover:text-snl-text text-xs transition-colors">
              WordNova Privacy Policy
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
