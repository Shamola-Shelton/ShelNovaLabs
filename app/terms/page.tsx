import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — ShelNova Labs Apps & Games",
  description:
    "General Terms of Service for the mobile apps, games and websites developed by ShelNova Labs Ltd.",
  alternates: { canonical: "/terms" },
};

// Apps with their own terms. Those terms take precedence for that app (section 1).
const appTerms = [
  { name: "Sancta: Catholic Prayer & Bible", href: "/sancta/terms" },
  { name: "SDA Worship and Hymnal", href: "/sda/terms" },
  { name: "PupGrid: Puppy Sudoku", href: "/pupgrid/terms" },
  { name: "WordNova", href: "/wordnova/terms" },
  { name: "Etymon", href: "/etymon/terms" },
  { name: "Wash Rush: Car Wash Tycoon", href: "/wash-rush/terms" },
  { name: "AI Interview", href: "/ai-interview/terms" },
  { name: "Jobfind", href: "/jobfind/terms" },
  { name: "US Citizenship Test 2026", href: "/us-citizenship-test/terms" },
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-heading text-xl font-bold text-snl-text mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export default function TermsOfService() {
  const updated = "27 November 2026";

  return (
    <div data-snl-legal className="min-h-screen bg-snl-bg text-snl-text">
      {/* Top bar */}
      <div className="border-b border-snl-border">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-lg tracking-tight">
            Shel<span className="text-snl-accent">Nova</span> Labs
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/privacy" className="text-snl-muted hover:text-snl-text transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-snl-accent text-sm font-medium tracking-widest uppercase mb-3">
            Legal · All Apps &amp; Games
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-snl-text mb-3">
            Terms of Service
          </h1>
          <p className="text-snl-muted text-sm">Last updated: {updated}</p>
        </div>

        <div className="space-y-10 text-snl-muted leading-relaxed">

          <section className="bg-snl-card border border-snl-border rounded-xl p-6">
            <h2 className="font-heading text-lg font-bold text-snl-text mb-3">App-Specific Terms</h2>
            <p className="text-sm mb-4">
              Some of our apps have their own terms with details about that app&apos;s features, purchases and data.
              Where an app has its own terms, those terms apply to that app together with these general terms.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {appTerms.map((app) => (
                <li key={app.href}>
                  <Link href={app.href} className="text-snl-accent hover:underline">
                    {app.name} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <Section id="about" title="1. About These Terms">
            <p>
              These Terms of Service (&quot;Terms&quot;) apply to the mobile apps, games and websites developed and operated by{" "}
              <span className="text-snl-text font-medium">ShelNova Labs Ltd.</span>{" "}
              (&quot;ShelNova Labs&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;),
              including apps published on Google Play and the Apple App Store and the website at shelnovalabs.com (each a &quot;Service&quot;).
            </p>
            <p>
              By downloading, installing, accessing or using a Service, you agree to these Terms. If you do not agree, please do not use the Service.
            </p>
            <p>
              If an app has its own terms of service, those app-specific terms also apply. If they conflict with these Terms, the app-specific terms win for that app.
            </p>
          </Section>

          <Section id="eligibility" title="2. Who Can Use Our Services">
            <p>
              You must be at least 13 years old, or the minimum age required to consent to the use of online services in your country if that is higher, to use our Services.
              If you are under the age of majority where you live, you may only use a Service with the permission and supervision of a parent or legal guardian, who accepts these Terms on your behalf.
            </p>
            <p>
              Some apps may set a higher minimum age, which will be stated in that app&apos;s store listing or app-specific terms.
            </p>
          </Section>

          <Section id="licence" title="3. Your Licence to Use Our Apps">
            <p>
              Subject to these Terms, we grant you a limited, personal, non-exclusive, non-transferable, revocable licence to download and use our apps on devices you own or control,
              for your personal, non-commercial use.
            </p>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Copy, modify, distribute, sell or rent any part of a Service</li>
              <li>Decompile, reverse engineer or attempt to extract the source code, content or data of a Service, except where the law allows it</li>
              <li>Use cheats, bots, automation, exploits or modified versions of an app</li>
              <li>Interfere with or disrupt a Service, its servers or other users</li>
              <li>Use a Service for anything unlawful, harmful, fraudulent or abusive</li>
            </ul>
            <p>
              If you downloaded an app from the Apple App Store, Apple&apos;s Licensed Application End User License Agreement also applies, and Apple is not responsible for the app or its support.
            </p>
          </Section>

          <Section id="accounts" title="4. Accounts">
            <p>
              Some Services let you sign in or create an account, for example to sync progress or appear on a leaderboard. You are responsible for keeping your login details secure and for activity under your account.
              Please give accurate information and do not use a display name that is offensive, misleading or impersonates someone else.
            </p>
            <p>
              You can ask us to delete your account and associated data at any time. Where an app has a dedicated deletion page or in-app option, use that; otherwise email us at the address below.
            </p>
          </Section>

          <Section id="conduct" title="5. Community Features and Your Content">
            <p>
              Where a Service lets you post content, such as a display name, messages, reviews or other material, you keep ownership of it. You give us a worldwide, royalty-free licence to host, display and process that content only as needed to run the Service.
            </p>
            <p>
              Do not post anything unlawful, hateful, harassing, sexually explicit, infringing or spam. We may remove content or names that break these rules and may suspend or close accounts that repeatedly do so.
            </p>
          </Section>

          <Section id="purchases" title="6. Purchases, Subscriptions and Refunds">
            <p>
              Many of our apps are free. Some offer in-app purchases or subscriptions, for example to remove ads or unlock premium features. All payments are processed by Google Play or the Apple App Store, not by us, and are subject to their terms and payment policies.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Prices are shown in the app or store before you buy.</li>
              <li>Subscriptions renew automatically until you cancel them. Cancel at least 24 hours before the end of the current period to avoid being charged for the next one.</li>
              <li>You can manage or cancel subscriptions in Google Play (Payments &amp; subscriptions) or on iPhone in Settings → your name → Subscriptions. Deleting an app does not cancel a subscription.</li>
              <li>Refunds are handled by Google Play or Apple under their refund policies. We cannot issue refunds for store purchases directly.</li>
            </ul>
            <p>Nothing in these Terms limits any rights you have under consumer protection laws that apply to you.</p>
          </Section>

          <Section id="virtual-items" title="7. Virtual Items and In-Game Currency">
            <p>
              Our games may include virtual items such as coins, hints, lives, boosts or other in-game currency. These are licensed to you for use within the game only. They have no cash value, cannot be exchanged for real money and cannot be transferred or sold outside the game.
            </p>
            <p>
              We may change, rebalance or discontinue virtual items as part of developing a game. Unused virtual items may be lost if you uninstall an app, clear its data or delete your account, unless the app offers a way to back up or sync your progress.
            </p>
          </Section>

          <Section id="ads" title="8. Advertising">
            <p>
              Some of our free apps are supported by ads, including ads served by Google AdMob. Ads may appear as banners, between levels or screens, or as optional rewarded videos that you can choose to watch for an in-app reward.
            </p>
            <p>
              Do not click on ads in a way designed to generate artificial clicks, and do not ask others to. We are not responsible for the content of third-party ads or the websites and products they promote. Our{" "}
              <Link href="/privacy" className="text-snl-accent hover:underline">Privacy Policy</Link>{" "}
              explains how advertising works and how to manage your ad choices.
            </p>
          </Section>

          <Section id="ai" title="9. AI Features">
            <p>
              Some of our apps use artificial intelligence to generate answers, explanations, feedback or other content. AI-generated content can be incomplete or wrong, and you should check anything important before relying on it.
            </p>
            <p>
              AI features are provided for learning, practice and general information. They are not professional advice of any kind, including religious, legal, immigration, medical, financial or career advice.
              Do not enter sensitive personal information into AI features unless the app asks for it to provide the feature.
            </p>
          </Section>

          <Section id="ip" title="10. Our Intellectual Property">
            <p>
              The Services, including their software, design, text, puzzles, levels, artwork, characters, audio, names and logos, are owned by ShelNova Labs or our licensors and are protected by copyright, trademark and other laws.
              These Terms do not give you any rights to them other than the limited licence in section 3.
            </p>
            <p>
              Some content, such as Bible translations, hymn texts or public reference material, belongs to its respective owners or is in the public domain and is used with permission or as allowed by law.
            </p>
          </Section>

          <Section id="third-parties" title="11. Third-Party Services">
            <p>
              Our Services rely on third-party services such as Google Play, the Apple App Store, Firebase, Google AdMob and AI model providers. Your use of those services may also be subject to their own terms and privacy policies.
              We are not responsible for third-party services, websites or content that we do not control.
            </p>
          </Section>

          <Section id="privacy" title="12. Privacy">
            <p>
              We care about your privacy. Our{" "}
              <Link href="/privacy" className="text-snl-accent hover:underline">Privacy Policy</Link>{" "}
              and each app&apos;s own privacy policy explain what information we collect, how we use it and the choices you have.
            </p>
          </Section>

          <Section id="changes-to-services" title="13. Updates, Availability and Termination">
            <p>
              We regularly update our apps to add features, fix bugs and improve performance. Some updates may be required to keep using an app. We may change, suspend or stop offering any Service or feature at any time, and a Service may not always be available or free of errors.
            </p>
            <p>
              You can stop using a Service at any time by uninstalling it. We may suspend or end your access if you break these Terms or if required by law. Sections that by their nature should continue after termination, such as sections 10, 14, 15 and 16, will continue to apply.
            </p>
          </Section>

          <Section id="disclaimer" title="14. Disclaimer">
            <p className="uppercase text-sm">
              To the fullest extent permitted by law, the Services are provided &quot;as is&quot; and &quot;as available&quot;, without warranties of any kind, whether express or implied,
              including warranties of merchantability, fitness for a particular purpose and non-infringement. We do not guarantee that a Service will be uninterrupted, secure or error-free,
              or that progress, scores or data will never be lost.
            </p>
          </Section>

          <Section id="liability" title="15. Limitation of Liability">
            <p>
              To the fullest extent permitted by law, ShelNova Labs will not be liable for any indirect, incidental, special, consequential or punitive damages, or for any loss of data, progress, virtual items, profits or goodwill, arising from your use of or inability to use the Services.
            </p>
            <p>
              Our total liability for any claim relating to the Services is limited to the greater of the amount you paid us for the relevant Service in the 12 months before the claim, or USD 50.
            </p>
            <p>
              Some countries do not allow certain limitations of liability, so some of these limits may not apply to you. Nothing in these Terms excludes liability that cannot be excluded by law.
            </p>
          </Section>

          <Section id="law" title="16. Governing Law and Disputes">
            <p>
              These Terms are governed by the laws of Kenya, without regard to conflict-of-law principles. Any dispute will be handled by the courts of Nairobi, Kenya,
              without limiting any mandatory consumer rights you have in the country where you live. Before starting any formal dispute, please contact us so we can try to resolve the issue informally.
            </p>
          </Section>

          <Section id="changes" title="17. Changes to These Terms">
            <p>
              We may update these Terms from time to time. When we do, we will change the &quot;Last updated&quot; date above and, for significant changes, let you know through the app or our website.
              Continuing to use a Service after the changes take effect means you accept the updated Terms.
            </p>
          </Section>

          <Section id="contact" title="18. Contact">
            <p>For questions about these Terms, contact:</p>
            <div className="mt-4 bg-snl-card border border-snl-border rounded-xl p-5 space-y-1">
              <p className="text-snl-text font-medium">ShelNova Labs Ltd.</p>
              <p>
                Email:{" "}
                <a href="mailto:legal@shelnovalabs.com" className="text-snl-accent hover:underline">
                  legal@shelnovalabs.com
                </a>{" "}
                /{" "}
                <a href="mailto:hello@shelnovalabs.com" className="text-snl-accent hover:underline">
                  hello@shelnovalabs.com
                </a>
              </p>
              <p>Website: https://shelnovalabs.com</p>
              <p className="text-xs text-snl-muted pt-2">Nairobi, Kenya</p>
            </div>
          </Section>

        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-snl-border mt-16">
        <div className="max-w-3xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-snl-muted">© {new Date().getFullYear()} ShelNova Labs Ltd.</p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/privacy" className="text-snl-muted hover:text-snl-text transition-colors">
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
