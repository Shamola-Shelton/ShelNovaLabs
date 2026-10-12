import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — PupGrid: Puppy Sudoku | ShelNova Labs",
  description:
    "Terms of Service for PupGrid: Puppy Sudoku, developed by ShelNova Labs Ltd.",
};

export default function PupGridTermsOfService() {
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
            <Link href="/pupgrid/privacy" className="text-snl-muted hover:text-snl-text transition-colors">
              ← PupGrid Privacy Policy
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
            Terms of Service
          </h1>
          <p className="text-snl-muted text-sm">Last updated: {updated}</p>
        </div>

        <div className="space-y-10 text-snl-muted leading-relaxed">

          {/* 1. Acceptance */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing or playing{" "}
              <span className="text-snl-text font-medium">PupGrid: Puppy Sudoku</span> (&quot;the App&quot;), developed and operated by
              ShelNova Labs Ltd. (&quot;ShelNova Labs&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to these Terms of Service (&quot;Terms&quot;).
              If you do not agree, please do not install or play the App.
            </p>
          </section>

          {/* 2. The App */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">2. The App</h2>
            <p>
              PupGrid is a dog-themed logic puzzle. You place dogs on a grid following one-star Star Battle rules: one dog per row, column and region, and no two dogs touching, including diagonally. The App includes a campaign of levels, a daily puzzle, hints, and leaderboards. It is provided free of charge for personal, non-commercial entertainment.
            </p>
          </section>

          {/* 3. Accounts and Leaderboards */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">3. Anonymous Play and Leaderboards</h2>
            <p className="mb-3">
              The App signs you in anonymously. You do not need an email address or an account. When you submit a score, your chosen display name and your scores are shown publicly. You agree that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>your display name will not be offensive, hateful, sexual, threatening, impersonate another person or brand, or contain personal information;</li>
              <li>we may change or remove any display name or score that breaks these rules, and we may block a player who keeps doing so;</li>
              <li>you will not use cheats, modified apps, bots, or tools that alter scores or progress on the leaderboards.</li>
            </ul>
          </section>

          {/* 4. Fair Play and Conduct */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">4. Fair Play and Conduct</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>decompile, reverse engineer or extract the puzzles, code or artwork from the App, except where the law allows it;</li>
              <li>interfere with or disrupt the App, its servers, or the services it relies on;</li>
              <li>send requests designed to create fake scores, fake ad views, or fake hint rewards;</li>
              <li>use the App in any way that breaks the law or these Terms.</li>
            </ul>
          </section>

          {/* 5. Hints, Rewards and Virtual Items */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">5. Hints and Virtual Items</h2>
            <p className="mb-3">
              PupGrid has hints (Think, Sniff and Fetch) and an extra life after a game over. A new player starts with five of each hint. When you run out of a hint, you can watch a short video to unlock one more.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <span className="text-snl-text font-medium">No monetary value:</span> hints and lives have no cash value. They cannot be sold, exchanged or redeemed for money or goods.
              </li>
              <li>
                <span className="text-snl-text font-medium">Not transferable:</span> they belong to your install of the App and cannot be given to another player.
              </li>
              <li>
                <span className="text-snl-text font-medium">We may change them:</span> we can change the number of hints, the rewards, and how they are earned, to balance the game.
              </li>
            </ul>
          </section>

          {/* 6. Advertising */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">6. Advertising</h2>
            <p>
              PupGrid is free and supported by advertising from Google AdMob: banner ads, full-screen ads between some levels, and optional rewarded videos. You decide whether to watch a rewarded video. Do not click on ads in a way that is designed to generate clicks, and do not ask other people to do so. Our privacy policy explains how advertising works and how to change your choices.
            </p>
          </section>

          {/* 7. Intellectual Property */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">7. Intellectual Property</h2>
            <p>
              All rights in PupGrid, including its software, puzzles, level designs, artwork, the Bosco the Corgi character, sound, the logo and the name &quot;PupGrid&quot;, belong to ShelNova Labs Ltd. or its licensors. We grant you a limited, personal, non-exclusive, non-transferable and revocable licence to play the App on a device you own or control, for your own entertainment.
            </p>
          </section>

          {/* 8. Disclaimers */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">8. Disclaimer of Warranties</h2>
            <p>
              PupGrid is provided &quot;as is&quot; and &quot;as available&quot;, without warranties of any kind, express or implied, including fitness for a particular purpose and non-infringement. We do not promise the App will always be error-free, uninterrupted, or work on every device. Leaderboards, ads and updates depend on third-party services that we do not control.
            </p>
          </section>

          {/* 9. Liability */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, ShelNova Labs Ltd., its founders, directors, employees and partners are not liable for any indirect, incidental, special or consequential loss, including lost progress, scores or data, arising from your use of, or inability to use, the App. Nothing in these Terms limits liability that cannot be limited by law.
            </p>
          </section>

          {/* 10. Changes */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">10. Changes to the App and Terms</h2>
            <p>
              We may update, change or stop features of PupGrid, including levels, hints, leaderboards and ads. Where a change is needed for you to keep playing, we may ask you to update the App. We may also revise these Terms. The date above shows the latest version, and continued use after a change means you accept it.
            </p>
          </section>

          {/* 11. Ending */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">11. Ending Use</h2>
            <p>
              You can stop using PupGrid at any time by uninstalling it. We may suspend or end access for anyone who breaks these Terms.
            </p>
          </section>

          {/* 12. Governing Law */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">12. Governing Law and Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of Kenya, without regard to conflict-of-law principles. Any dispute arising from them will be resolved in the competent courts of Nairobi, Kenya, without limiting any mandatory consumer rights you have where you live.
            </p>
          </section>

          {/* 13. Contact */}
          <section>
            <h2 className="font-heading text-xl font-bold text-snl-text mb-3">13. Contact</h2>
            <p>
              For questions about these Terms, contact:
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
            <Link href="/pupgrid/privacy" className="text-snl-muted hover:text-snl-text transition-colors">
              Privacy Policy
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
