import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Etymon | ShelNova Labs",
  description:
    "Terms of Service for Etymon, developed by ShelNova Labs Ltd.",
};

export default function EtymonTermsOfService() {
  const updated = "20 November 2026";

  return (
    <div data-snl-legal className="min-h-screen bg-snl-bg text-snl-text">
      <div className="border-b border-snl-border sticky top-0 z-30 bg-snl-bg/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-lg tracking-tight">
            Shel<span className="text-snl-accent">Nova</span> Labs
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href="/etymon/privacy"
              className="text-snl-muted hover:text-snl-text transition-colors hidden sm:inline"
            >
              ← Etymon Privacy Policy
            </Link>
            <Link href="/privacy" className="text-snl-muted hover:text-snl-text transition-colors">
              ← All Policies
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-snl-accent text-xs font-mono font-medium tracking-widest uppercase">
              Legal Disclosures
            </span>
            <span className="text-snl-subtle text-xs">•</span>
            <span className="text-snl-subtle text-xs font-mono">Etymon</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-snl-text mb-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-snl-muted text-sm font-mono">
            Last updated: {updated}
          </p>
        </div>

        <div className="space-y-10 text-snl-muted leading-relaxed">
          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing or playing <span className="text-snl-text font-medium">Etymon</span> (&quot;the Game&quot;), published by ShelNova Labs Ltd. (&quot;ShelNova Labs&quot;, &quot;we&quot;, &quot;us&quot;), you agree to these Terms of Service. If you do not agree, do not install or play the Game.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">2. The Game</h2>
            <p>
              Etymon is a word-strategy game with single-player levels and optional online matches and a public leaderboard. It is provided for personal, non-commercial entertainment.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">3. Fair play and conduct</h2>
            <p className="mb-3">
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>use cheats, bots, automation or unauthorized tools to manipulate matches, ratings or the leaderboard</li>
              <li>decompile, reverse engineer or extract source code, word lists or level data from the Game</li>
              <li>choose offensive, hateful, defamatory or infringing display names</li>
              <li>interfere with or disrupt our servers, networks, or the integrity of online matches</li>
              <li>artificially generate ad impressions or bypass advertising through modification</li>
            </ul>
            <p className="mt-3">
              We may reset ratings, remove leaderboard entries or block access to online play for conduct that breaks these rules.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">4. Virtual coins and items</h2>
            <p>
              Coins, hints and other in-game items have no cash value, cannot be exchanged or refunded for money, and cannot be transferred between players. They may be earned through play or by optionally watching rewarded videos.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">5. Advertising</h2>
            <p>
              The Game is free and supported by ads served through Google AdMob. Rewarded videos are optional. Ads are provided by third parties, and we are not responsible for their content or for sites and services they link to.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">6. Online play and leaderboard</h2>
            <p>
              Online matches use a display name you choose and an anonymous player ID. Your display name and rating may be shown publicly. How we handle this information is described in our <Link href="/etymon/privacy" className="text-snl-accent hover:underline">Privacy Policy</Link>.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">7. Intellectual property</h2>
            <p className="mb-3">
              All rights in the Game, including software, art, level and puzzle design, audio and the &quot;Etymon&quot; name, belong to ShelNova Labs Ltd.
            </p>
            <p>
              You are granted a limited, personal, non-exclusive, non-transferable, revocable license to play the Game on compatible devices for personal entertainment.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">8. Disclaimer of warranties</h2>
            <p>
              The Game is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;, without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose and non-infringement. We do not guarantee that the Game or online play will be uninterrupted or error-free.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">9. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, ShelNova Labs, its directors, employees and partners are not liable for indirect, incidental, special, consequential or punitive damages, including loss of data or progress, arising from your use of or inability to use the Game.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">10. Changes</h2>
            <p>
              We may update or discontinue features of the Game, and may revise these Terms. Revisions are published on this page with an updated date. Continued use after a revision means you accept it.
            </p>
          </section>
          <section>
            <h2 className="font-heading text-2xl font-bold text-snl-text mb-3">11. Governing law</h2>
            <p>
              These Terms are governed by the laws of Kenya. Disputes are resolved in the competent courts of Nairobi, Kenya.
            </p>
          </section>
          <section className="bg-snl-card border border-snl-border rounded-xl p-6">
            <h2 className="font-heading text-xl font-bold text-snl-text mb-2">12. Contact</h2>
            <div className="space-y-1 text-sm font-mono text-snl-text">
              <p>ShelNova Labs Ltd.</p>
              <p>
                Email:{" "}
                <a href="mailto:hello@shelnovalabs.com" className="text-snl-accent hover:underline">hello@shelnovalabs.com</a>
              </p>
              <p>Phone: +254 707 605 641</p>
              <p>
                Website:{" "}
                <a href="https://shelnovalabs.com" className="text-snl-accent hover:underline">https://shelnovalabs.com</a>
              </p>
              <p className="text-snl-muted text-xs pt-1">Nairobi, Kenya</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
