import Link from "next/link";
import { CheckCircle2, XCircle, AlertTriangle, ShieldCheck, ArrowRight, FileText, Code2, Users, Zap } from "lucide-react";

export default function ArticleChooseCompanyContent() {
  return (
    <>
      {/* Section: Introduction */}
      <section id="introduction" className="space-y-5 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          Introduction
        </h2>
        <p>
          Kenya&apos;s technology ecosystem is booming. From Silicon Savannah fintech innovations in Nairobi to logistics, healthcare, and retail platforms across East Africa, businesses of every size are investing heavily in custom software.
        </p>
        <p>
          However, finding the right engineering partner remains one of the greatest risks for founders and enterprise leaders. The market is saturated with hundreds of web design shops, freelance developers, and agencies making extravagant promises.
        </p>
        <p>
          Nearly <strong>60% of custom software projects</strong> in the region suffer from severe scope creep, delayed deliveries, or poor architectural foundations that require complete rewrites within 12 months.
        </p>
        <div className="bg-[#111318] border-l-4 border-snl-accent p-5 rounded-r-xl my-6">
          <p className="text-sm italic text-snl-text font-medium">
            &ldquo;The most expensive software you will ever build is the one you have to pay to build twice. Choosing an engineering partner based solely on the lowest quote is the fastest route to technical debt.&rdquo;
          </p>
        </div>
      </section>

      {/* Section: The Risks */}
      <section id="the-risks" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          The Hidden Costs of Choosing the Wrong Team
        </h2>
        <p>
          When an unqualified team handles your product, the damage goes far beyond the initial invoice:
        </p>

        <div className="space-y-3">
          <div className="bg-[#0D0F12] border border-red-500/20 rounded-xl p-4 flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-snl-text">Spaghetti Code &amp; Zero Documentation</p>
              <p className="text-xs text-snl-muted mt-0.5">
                Lack of type safety, modular architecture, and automated tests means subsequent developers cannot fix bugs without breaking existing features.
              </p>
            </div>
          </div>

          <div className="bg-[#0D0F12] border border-red-500/20 rounded-xl p-4 flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-snl-text">Security Vulnerabilities &amp; Data Leaks</p>
              <p className="text-xs text-snl-muted mt-0.5">
                Hardcoding M-Pesa API keys in client-side code, missing CORS protections, and unvalidated database queries put your customers&apos; financial data at risk.
              </p>
            </div>
          </div>

          <div className="bg-[#0D0F12] border border-red-500/20 rounded-xl p-4 flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-snl-text">Hostage IP &amp; Deployment Lock-In</p>
              <p className="text-xs text-snl-muted mt-0.5">
                Unscrupulous agencies register domain names and cloud accounts under their own names, holding your business asset hostage when disputes arise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Key Evaluation Criteria */}
      <section id="key-evaluation-criteria" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          6 Critical Criteria to Evaluate a Software Company
        </h2>
        <p>
          Before signing any master service agreement, evaluate potential software partners against these 6 engineering benchmarks:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-snl-accent">
              <Code2 className="w-5 h-5" />
              <h3 className="font-heading font-bold text-sm text-snl-text">1. Modern Tech Stack</h3>
            </div>
            <p className="text-xs text-snl-muted leading-relaxed">
              Do they build with maintainable, future-proof frameworks (Next.js, React 19, TypeScript, Flutter, Go, PostgreSQL) rather than outdated legacy monoliths?
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-snl-accent">
              <Users className="w-5 h-5" />
              <h3 className="font-heading font-bold text-sm text-snl-text">2. Proven Shipping Track Record</h3>
            </div>
            <p className="text-xs text-snl-muted leading-relaxed">
              Can they show real, production apps live on Google Play, the App Store, or web URLs with verifiable user reviews and metrics?
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-snl-accent">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="font-heading font-bold text-sm text-snl-text">3. 100% IP &amp; Code Ownership</h3>
            </div>
            <p className="text-xs text-snl-muted leading-relaxed">
              Do they guarantee full transfer of GitHub repositories, design tokens, and cloud infrastructure directly to your business upon milestone delivery?
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-snl-accent">
              <FileText className="w-5 h-5" />
              <h3 className="font-heading font-bold text-sm text-snl-text">4. Phased Milestone Scoping</h3>
            </div>
            <p className="text-xs text-snl-muted leading-relaxed">
              Do they break projects into clear, testable sprints (Discover, Design, Build, Launch, Improve) with transparent acceptance criteria?
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-snl-accent">
              <Zap className="w-5 h-5" />
              <h3 className="font-heading font-bold text-sm text-snl-text">5. Performance &amp; SEO Standards</h3>
            </div>
            <p className="text-xs text-snl-muted leading-relaxed">
              Do their web products score 95+ on Google PageSpeed Insights with sub-second Time-to-First-Byte (TTFB) on Kenyan mobile networks?
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-snl-accent">
              <CheckCircle2 className="w-5 h-5" />
              <h3 className="font-heading font-bold text-sm text-snl-text">6. Post-Launch Maintenance</h3>
            </div>
            <p className="text-xs text-snl-muted leading-relaxed">
              Do they provide structured SLAs, security updates, and automated telemetry monitoring after release?
            </p>
          </div>
        </div>
      </section>

      {/* Section: Red Flags */}
      <section id="red-flags-to-watch" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          Red Flags to Watch Out For
        </h2>
        <p>
          If you observe any of the following warning signs during early discovery calls, proceed with extreme caution:
        </p>

        <div className="space-y-3">
          <div className="bg-[#0D0F12] border border-amber-500/30 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-snl-text">Instant Quotes Without Technical Scoping</p>
              <p className="text-xs text-snl-muted mt-0.5">
                If a developer gives you an exact price 5 minutes into a conversation without reviewing API integrations or database schemas, they are guessing.
              </p>
            </div>
          </div>

          <div className="bg-[#0D0F12] border border-amber-500/30 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-snl-text">No Figma or Prototype Phase</p>
              <p className="text-xs text-snl-muted mt-0.5">
                Teams that jump straight into coding without clickable wireframes and design sign-offs inevitably waste 50% of the project budget redesigning features in code.
              </p>
            </div>
          </div>

          <div className="bg-[#0D0F12] border border-amber-500/30 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-snl-text">Unrealistically Low Bids</p>
              <p className="text-xs text-snl-muted mt-0.5">
                A quote of KES 25,000 for a custom multi-vendor marketplace or mobile app indicates either complete inexperience or hidden costs that will surface later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Engagement Models */}
      <section id="engagement-models" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          Pricing Models: Fixed-Price vs. Dedicated Retainers
        </h2>
        <p>
          Understanding how development companies charge helps you structure contracts for maximum accountability:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 space-y-3">
            <span className="text-xs font-mono text-snl-accent uppercase tracking-wider">
              Fixed-Price Milestone Model
            </span>
            <h3 className="font-heading font-bold text-lg text-snl-text">
              Best for Defined MVPs &amp; Websites
            </h3>
            <p className="text-xs text-snl-muted leading-relaxed">
              Scope is strictly locked upfront. Payments are tied to concrete deliverables (e.g., 30% kickoff, 30% design &amp; alpha build, 40% launch and code transfer).
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 space-y-3">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              Monthly Dedicated Retainer
            </span>
            <h3 className="font-heading font-bold text-lg text-snl-text">
              Best for Scaling Platforms &amp; SaaS
            </h3>
            <p className="text-xs text-snl-muted leading-relaxed">
              Continuous agile feature delivery, performance optimization, and SLA response times. You get a dedicated engineering team without full-time payroll overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Section: What to Ask */}
      <section id="what-to-ask-in-interviews" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          5 Essential Questions to Ask Before Signing
        </h2>
        <div className="space-y-3.5">
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <p className="text-sm font-semibold text-snl-accent">
              1. &ldquo;Can you walk me through your CI/CD and deployment pipeline?&rdquo;
            </p>
            <p className="text-xs text-snl-muted mt-1">
              Top teams use automated GitHub Actions, preview environments (Vercel/Cloudflare), and automated linting rather than manual FTP uploads.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <p className="text-sm font-semibold text-snl-accent">
              2. &ldquo;How do you handle Kenyan payment gateway edge cases?&rdquo;
            </p>
            <p className="text-xs text-snl-muted mt-1">
              Ensure they understand Daraja STK timeout callbacks, idempotency keys, and automated ledger reconciliation.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <p className="text-sm font-semibold text-snl-accent">
              3. &ldquo;Who will be my primary point of contact during the build?&rdquo;
            </p>
            <p className="text-xs text-snl-muted mt-1">
              You should have direct access to the lead engineer or product manager via dedicated Slack/WhatsApp channels, not layered account managers.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <p className="text-sm font-semibold text-snl-accent">
              4. &ldquo;What warranty and bug-fixing period is included post-launch?&rdquo;
            </p>
            <p className="text-xs text-snl-muted mt-1">
              Reputable studios include a 30 to 60-day post-launch warranty to resolve any unexpected edge cases without charging extra.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <p className="text-sm font-semibold text-snl-accent">
              5. &ldquo;Can I speak to a past client whose product is currently live?&rdquo;
            </p>
            <p className="text-xs text-snl-muted mt-1">
              A studio confident in its work will readily provide references from past founders and business leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Why ShelNova Labs */}
      <section id="why-choose-shelnova" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          Why Businesses Choose ShelNova Labs
        </h2>
        <p>
          At ShelNova Labs, we combine high-conviction product design with rigorous, type-safe full-stack engineering:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <h3 className="font-heading font-bold text-snl-text text-sm">🛡️ 100% IP &amp; Code Handover</h3>
            <p className="text-xs text-snl-muted mt-1">You own every line of code, repository, and asset from day one.</p>
          </div>
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <h3 className="font-heading font-bold text-snl-text text-sm">⚡ Sub-Second Speed Standards</h3>
            <p className="text-xs text-snl-muted mt-1">Next.js 16 and Flutter architectures engineered for maximum performance.</p>
          </div>
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <h3 className="font-heading font-bold text-snl-text text-sm">🚀 Proven Live Products</h3>
            <p className="text-xs text-snl-muted mt-1">From BibleWise (150K+ users) to Kadi Classic and ShelNova OS.</p>
          </div>
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <h3 className="font-heading font-bold text-snl-text text-sm">🤝 Transparent Phased Sprints</h3>
            <p className="text-xs text-snl-muted mt-1">No guesswork or hidden fees. Working software delivered every 2 weeks.</p>
          </div>
        </div>

        <div className="pt-2">
          <p className="text-sm text-snl-muted">
            Ready to discuss your next digital product? Explore our{" "}
            <Link href="/services/product-engineering" className="text-snl-accent font-semibold underline hover:text-white">
              Product Engineering Services
            </Link>{" "}
            or learn more{" "}
            <Link href="/about" className="text-snl-accent font-semibold underline hover:text-white">
              About Our Studio
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
