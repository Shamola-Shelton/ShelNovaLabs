import Link from "next/link";
import { CheckCircle2, XCircle, ArrowRight, Layers, Database, Shield, Zap } from "lucide-react";

export default function ArticleWebsiteVsWebAppContent() {
  return (
    <>
      {/* Section: Introduction */}
      <section id="introduction" className="space-y-5 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          Introduction
        </h2>
        <p>
          One of the most frequent conversations we have with business owners, startup founders, and corporate directors starts with a seemingly simple request: <em>&ldquo;We need a website that lets users sign up, book appointments, track shipments, pay via M-Pesa, and manage their staff accounts.&rdquo;</em>
        </p>
        <p>
          In reality, what they are asking for is not a website — it is a <strong>custom web application</strong>.
        </p>
        <p>
          Confusing these two terms leads to unrealistic project timelines, under-budgeted bids, and failed software projects. If you hire a team to build a &ldquo;website&rdquo; when your business model actually requires a &ldquo;web application,&rdquo; you often end up with a fragile WordPress site held together by 40 conflicting plugins that crashes under real user traffic.
        </p>
        <div className="bg-[#111318] border-l-4 border-snl-accent p-5 rounded-r-xl my-6">
          <p className="text-sm italic text-snl-text font-medium">
            &ldquo;A website is a digital storefront designed for people to read and discover. A web application is an interactive software tool designed for people to perform tasks and get work done.&rdquo;
          </p>
        </div>
      </section>

      {/* Section: Architectural Differences */}
      <section id="core-differences" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          Core Architectural Differences
        </h2>
        <p>
          To understand why the distinction matters, look beneath the surface at how both systems handle data, users, and state:
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto border border-snl-border rounded-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#111318] border-b border-snl-border text-snl-text font-mono uppercase text-[11px]">
              <tr>
                <th className="p-4">Feature Dimension</th>
                <th className="p-4 text-snl-muted">Standard Website</th>
                <th className="p-4 text-snl-accent">Custom Web Application</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-snl-border bg-[#0D0F12] text-snl-muted">
              <tr>
                <td className="p-4 font-semibold text-snl-text">Primary Purpose</td>
                <td className="p-4">Deliver marketing information, brand credibility, and contact details</td>
                <td className="p-4 text-snl-text">Execute complex business workflows, transactions, and data manipulation</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-snl-text">User Experience</td>
                <td className="p-4">Static / one-way browsing (All visitors see the same content)</td>
                <td className="p-4 text-snl-text">Dynamic / personalized (Each logged-in user sees unique data)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-snl-text">Authentication</td>
                <td className="p-4">None (or basic CMS login for admin only)</td>
                <td className="p-4 text-snl-text">Multi-role authentication (RBAC, JWT/Session tokens, 2FA, OAuth)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-snl-text">Database Layer</td>
                <td className="p-4">Flat files, markdown, or lightweight CMS storage</td>
                <td className="p-4 text-snl-text">Relational/NoSQL database (PostgreSQL, MySQL, Redis, Firestore)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-snl-text">State &amp; APIs</td>
                <td className="p-4">Simple HTML forms and edge cached assets</td>
                <td className="p-4 text-snl-text">Complex state management, REST/GraphQL APIs, background workers</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-snl-text">Security Requirements</td>
                <td className="p-4">Standard SSL &amp; DDoS protection</td>
                <td className="p-4 text-snl-text">Data encryption at rest, SQL injection guards, CSRF/CORS, audit logs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section: When to Build a Website */}
      <section id="when-website-is-enough" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          When a Standard Website Is All You Need
        </h2>
        <p>
          You do not need to over-engineer an expensive web application if your core commercial objective is brand presence, authority, and lead generation.
        </p>

        <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-6 space-y-4">
          <h3 className="font-heading font-bold text-base text-snl-text">
            A website is the ideal choice for:
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-snl-muted">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-snl-accent shrink-0 mt-0.5" />
              <span><strong>Professional services &amp; consultancies:</strong> Law firms, medical clinics, accounting practices, and construction agencies who need to showcase case studies and capture phone/email leads.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-snl-accent shrink-0 mt-0.5" />
              <span><strong>Product landing pages:</strong> Startups launching a mobile app or physical product who need an SEO-optimized landing page with email waitlist capture.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-snl-accent shrink-0 mt-0.5" />
              <span><strong>Publishing &amp; content hubs:</strong> Media outlets and educational blogs focused on high-speed static page delivery and SEO indexation.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section: When You Need a Web Application */}
      <section id="when-you-need-a-web-app" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          When Your Business Requires a Custom Web Application
        </h2>
        <p>
          If user interaction involves accounts, private dashboards, payments, or automated workflows, you require custom software engineering.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 space-y-2">
            <h3 className="font-heading font-bold text-sm text-snl-text">
              1. Multi-Tenant SaaS Platforms
            </h3>
            <p className="text-xs text-snl-muted leading-relaxed">
              Subscription software where companies sign up, manage teams, configure permissions, and generate monthly reports.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 space-y-2">
            <h3 className="font-heading font-bold text-sm text-snl-text">
              2. Internal Business Operations (ERPs &amp; CRM)
            </h3>
            <p className="text-xs text-snl-muted leading-relaxed">
              Custom dashboards like{" "}
              <Link href="/projects/shelnova-os" className="text-snl-accent underline">
                ShelNova OS
              </Link>{" "}
              that automate inventory, invoicing, employee payroll, and pipeline tracking.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 space-y-2">
            <h3 className="font-heading font-bold text-sm text-snl-text">
              3. Data Intelligence &amp; Analytics
            </h3>
            <p className="text-xs text-snl-muted leading-relaxed">
              Platforms like{" "}
              <Link href="/projects/greennexus" className="text-snl-accent underline">
                GreenNexus
              </Link>{" "}
              that ingest environmental satellite telemetry and render interactive geospatial maps.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 space-y-2">
            <h3 className="font-heading font-bold text-sm text-snl-text">
              4. AI Workflow Engines
            </h3>
            <p className="text-xs text-snl-muted leading-relaxed">
              Tools like{" "}
              <Link href="/projects/career-ops" className="text-snl-accent underline">
                CareerOps
              </Link>{" "}
              that execute multi-step LLM batch parsing, resume synthesis, and automated job alignment.
            </p>
          </div>
        </div>
      </section>

      {/* Section: The Danger of the Plugin Trap */}
      <section id="the-plugin-trap" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          The Danger of &ldquo;The Plugin Trap&rdquo;
        </h2>
        <p>
          A common mistake made by non-technical founders is attempting to build a complex web application by stacking 30+ plugins onto WordPress or generic template builders.
        </p>
        <p>
          While this feels cheaper initially, it inevitably creates serious technical debt:
        </p>

        <div className="space-y-3">
          <div className="bg-[#0D0F12] border border-red-500/20 rounded-xl p-4 flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-snl-text">Extreme Security Vulnerabilities</p>
              <p className="text-xs text-snl-muted mt-0.5">
                Over 90% of CMS security exploits occur through outdated third-party plugin scripts with hardcoded vulnerabilities.
              </p>
            </div>
          </div>

          <div className="bg-[#0D0F12] border border-red-500/20 rounded-xl p-4 flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-snl-text">Database Lock-In &amp; Sluggish Performance</p>
              <p className="text-xs text-snl-muted mt-0.5">
                Generic post-meta tables become bloated and un-indexable once you reach 10,000 records, causing page load times to balloon to 8+ seconds.
              </p>
            </div>
          </div>

          <div className="bg-[#0D0F12] border border-red-500/20 rounded-xl p-4 flex items-start gap-3">
            <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-snl-text">Inability to Add Custom Logic</p>
              <p className="text-xs text-snl-muted mt-0.5">
                When your business model requires custom M-Pesa STK split-payments or bespoke automated workflows, pre-packaged plugins cannot be modified cleanly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: How ShelNova Labs Builds Both */}
      <section id="how-shelnova-approaches-both" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          How ShelNova Labs Architects Both Solutions
        </h2>
        <p>
          At ShelNova Labs, we match the technology stack to your actual business objective:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 space-y-3">
            <span className="text-xs font-mono text-snl-accent font-semibold uppercase">For Marketing Websites</span>
            <h3 className="font-heading font-bold text-snl-text text-base">Next.js 16 + Tailwind CSS v4</h3>
            <p className="text-xs text-snl-muted leading-relaxed">
              Static Site Generation (SSG), edge caching, dynamic JSON-LD schemas, and 100/100 Core Web Vitals to maximize search ranking and conversion.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 space-y-3">
            <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">For Web Applications</span>
            <h3 className="font-heading font-bold text-snl-text text-base">React 19 + TypeScript + Go / Node + PostgreSQL</h3>
            <p className="text-xs text-snl-muted leading-relaxed">
              Type-safe full-stack architecture, relational database indexing, secure JWT/Session authentication, and automated continuous delivery.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <p className="text-sm text-snl-muted">
            Ready to explore the right engineering path for your product? See our{" "}
            <Link href="/services/web-applications" className="text-snl-accent font-semibold underline hover:text-white">
              Web Application Development Services
            </Link>{" "}
            or our comprehensive{" "}
            <Link href="/services/product-engineering" className="text-snl-accent font-semibold underline hover:text-white">
              Product Engineering Services
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
