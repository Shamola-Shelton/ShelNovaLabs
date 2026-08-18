import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ArticleWebsiteCostContent() {
  return (
    <>
      {/* Section: Introduction */}
      <section id="introduction" className="space-y-5 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          Introduction
        </h2>
        <p>
          If you are planning to build a website or web platform in Kenya in 2026, the first question on your mind is almost certainly: <em>&ldquo;How much is this actually going to cost?&rdquo;</em>
        </p>
        <p>
          Search online or ask around Nairobi, and you will receive quotes ranging from <strong>KES 15,000</strong> on social media classifieds to <strong>KES 2,000,000+</strong> from established software agencies. This massive spread causes confusion for founders, SME owners, and corporate executives alike.
        </p>
        <p>
          The reason for this disparity is straightforward: <strong>the word &ldquo;website&rdquo; is used to describe completely different things.</strong> A one-page digital business card is not engineered the same way as an interactive customer portal, a multi-vendor marketplace, or a mission-critical business web application.
        </p>
        <div className="bg-[#111318] border-l-4 border-snl-accent p-5 rounded-r-xl my-6">
          <p className="text-sm italic text-snl-text font-medium">
            &ldquo;During our own projects at ShelNova Labs, we have found that one of the biggest mistakes businesses make is treating a web application as if it were simply a static brochure website.&rdquo;
          </p>
        </div>
      </section>

      {/* Section: What Determines Website Cost? */}
      <section id="what-determines-cost" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          What Determines Website Cost?
        </h2>
        <p>
          Software pricing is a function of engineering complexity, design fidelity, security rigor, and infrastructure requirements. The 7 core drivers include:
        </p>

        <div className="space-y-4">
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5">
            <h3 className="font-heading font-bold text-snl-text text-base">
              1. Type &amp; Scope of Website
            </h3>
            <p className="text-sm text-snl-muted mt-1.5">
              A simple 5-page informational site requires minimal technical architecture. Conversely, a dynamic portal with role-based user permissions, real-time data sync, or automated billing requires full-stack engineering.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5">
            <h3 className="font-heading font-bold text-snl-text text-base">
              2. Design Requirements &amp; Brand Ergonomics
            </h3>
            <p className="text-sm text-snl-muted mt-1.5">
              Pre-made generic WordPress templates are fast to spin up but look generic, suffer from bloated scripts, and score poorly on Google Core Web Vitals. Bespoke UI/UX engineered in Figma and coded with modern frameworks (React 19 / Tailwind CSS v4) delivers high conversion rates and an expensive, premium brand feel.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5">
            <h3 className="font-heading font-bold text-snl-text text-base">
              3. Interactive Features &amp; Custom Logic
            </h3>
            <p className="text-sm text-snl-muted mt-1.5">
              Interactive cost calculators, multi-step booking flows, instant search filters, user dashboards, and custom animations require meticulous JavaScript/TypeScript engineering and thorough unit testing.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5">
            <h3 className="font-heading font-bold text-snl-text text-base">
              4. Backend Architecture &amp; Database Design
            </h3>
            <p className="text-sm text-snl-muted mt-1.5">
              Does the site store user data, process transactions, or communicate with private servers? Relational databases (PostgreSQL/MySQL), stateful backends (Node.js, Go, Laravel), and schema migrations add engineering overhead but provide bulletproof reliability.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5">
            <h3 className="font-heading font-bold text-snl-text text-base">
              5. Local &amp; International Integrations
            </h3>
            <p className="text-sm text-snl-muted mt-1.5">
              Integrating Kenyan payment gateways (M-Pesa Daraja STK Push, Pesapal, Flutterwave), automated SMS notifications (AfricasTalking), CRM platforms, or AI services requires secure webhook handling and API token encryption.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5">
            <h3 className="font-heading font-bold text-snl-text text-base">
              6. Hosting Infrastructure &amp; Domain
            </h3>
            <p className="text-sm text-snl-muted mt-1.5">
              Cheap shared hosting (KES 3,000/year) often leads to slow TTFB (Time to First Byte) and downtime during traffic spikes. Modern global edge infrastructure (Vercel, AWS, Cloudflare CDN) ensures sub-second page loads across East Africa and worldwide.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5">
            <h3 className="font-heading font-bold text-snl-text text-base">
              7. Long-Term Maintenance &amp; Security
            </h3>
            <p className="text-sm text-snl-muted mt-1.5">
              Websites require security patching, dependency updates, automated backups, uptime monitoring, and continuous SEO refinements post-launch.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Typical Website Development Costs in Kenya */}
      <section id="cost-breakdown-kenya" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          Typical Website Development Costs in Kenya (2026)
        </h2>
        <p>
          Below is a realistic market guide for professional engineering in Nairobi and across Kenya. These numbers represent professional studio standards with clean code, responsive layouts, and proper search optimization:
        </p>

        {/* Pricing Breakdown Cards */}
        <div className="space-y-5">
          {/* Tier 1 */}
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-6 hover:border-snl-accent/40 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-snl-border pb-4">
              <div>
                <span className="text-xs font-mono text-snl-accent font-semibold uppercase">
                  Tier 1 · Starter
                </span>
                <h3 className="font-heading text-xl font-bold text-snl-text">
                  Basic Business Website
                </h3>
              </div>
              <div className="text-right sm:text-right">
                <span className="text-xl font-heading font-bold text-snl-text text-emerald-400">
                  KES 35,000 – 80,000
                </span>
                <p className="text-[11px] font-mono text-snl-subtle">
                  ($270 – $620 USD)
                </p>
              </div>
            </div>
            <p className="text-sm text-snl-muted mt-4">
              <strong>Best for:</strong> Local service providers, consultants, law firms, clinics, and startups needing a clean digital presence.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-snl-muted">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-snl-accent shrink-0" />
                <span>3 to 7 custom responsive pages (Home, About, Services, Contact)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-snl-accent shrink-0" />
                <span>WhatsApp direct click-to-chat &amp; lead capture contact forms</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-snl-accent shrink-0" />
                <span>Basic technical SEO, meta tags, and Google Search Console indexing</span>
              </li>
            </ul>
          </div>

          {/* Tier 2 */}
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-6 hover:border-snl-accent/40 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-snl-border pb-4">
              <div>
                <span className="text-xs font-mono text-snl-accent font-semibold uppercase">
                  Tier 2 · Growth
                </span>
                <h3 className="font-heading text-xl font-bold text-snl-text">
                  Corporate &amp; Growth Website
                </h3>
              </div>
              <div className="text-right sm:text-right">
                <span className="text-xl font-heading font-bold text-snl-text text-emerald-400">
                  KES 85,000 – 220,000
                </span>
                <p className="text-[11px] font-mono text-snl-subtle">
                  ($650 – $1,700 USD)
                </p>
              </div>
            </div>
            <p className="text-sm text-snl-muted mt-4">
              <strong>Best for:</strong> Established companies, financial consultancies, educational institutions, and B2B enterprises.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-snl-muted">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-snl-accent shrink-0" />
                <span>Custom UI/UX design with interactive component states</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-snl-accent shrink-0" />
                <span>Dynamic CMS / Blog / Insights engine with JSON-LD schema markup</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-snl-accent shrink-0" />
                <span>CRM lead forwarding, newsletter automation, and 98+ PageSpeed scores</span>
              </li>
            </ul>
          </div>

          {/* Tier 3 */}
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-6 hover:border-snl-accent/40 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-snl-border pb-4">
              <div>
                <span className="text-xs font-mono text-snl-accent font-semibold uppercase">
                  Tier 3 · Commerce
                </span>
                <h3 className="font-heading text-xl font-bold text-snl-text">
                  E-Commerce &amp; Storefront
                </h3>
              </div>
              <div className="text-right sm:text-right">
                <span className="text-xl font-heading font-bold text-snl-text text-emerald-400">
                  KES 120,000 – 350,000
                </span>
                <p className="text-[11px] font-mono text-snl-subtle">
                  ($920 – $2,700 USD)
                </p>
              </div>
            </div>
            <p className="text-sm text-snl-muted mt-4">
              <strong>Best for:</strong> Retail brands, apparel, wholesale distributors, and digital product merchants.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-snl-muted">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-snl-accent shrink-0" />
                <span>Product catalog, inventory management, dynamic variations, and shopping cart</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-snl-accent shrink-0" />
                <span>Automated M-Pesa STK Push checkout, card processing &amp; instant order receipts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-snl-accent shrink-0" />
                <span>Customer accounts, order tracking, and administrative dispatch dashboard</span>
              </li>
            </ul>
          </div>

          {/* Tier 4 */}
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-6 hover:border-snl-accent/40 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-snl-border pb-4">
              <div>
                <span className="text-xs font-mono text-snl-accent font-semibold uppercase">
                  Tier 4 · Enterprise / SaaS
                </span>
                <h3 className="font-heading text-xl font-bold text-snl-text">
                  Custom Web Application / SaaS
                </h3>
              </div>
              <div className="text-right sm:text-right">
                <span className="text-xl font-heading font-bold text-snl-text text-emerald-400">
                  KES 300,000 – 1,500,000+
                </span>
                <p className="text-[11px] font-mono text-snl-subtle">
                  ($2,300 – $11,500+ USD)
                </p>
              </div>
            </div>
            <p className="text-sm text-snl-muted mt-4">
              <strong>Best for:</strong> Tech startups, booking engines, fintech platforms, internal ERPs, and automated workflows.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-snl-muted">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-snl-accent shrink-0" />
                <span>Multi-tenant architecture, user authentication, role-based access control</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-snl-accent shrink-0" />
                <span>REST/GraphQL API endpoints, relational database indexing, asynchronous queues</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-snl-accent shrink-0" />
                <span>Analytics dashboards, automated reports, webhooks &amp; high security auditing</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Link to Services */}
        <div className="pt-2">
          <p className="text-sm text-snl-muted">
            Looking for a custom web platform or high-performance corporate site? Explore our{" "}
            <Link
              href="/services/web-applications"
              className="text-snl-accent font-semibold underline hover:text-white"
            >
              Web Application Development Services
            </Link>{" "}
            or our full-lifecycle{" "}
            <Link
              href="/services/product-engineering"
              className="text-snl-accent font-semibold underline hover:text-white"
            >
              Product Engineering Services
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Section: Website vs Web Application */}
      <section id="website-vs-web-app" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          Website vs. Web Application: The Critical Difference
        </h2>
        <p>
          Understanding this distinction saves businesses hundreds of thousands of shillings in failed hires and scope creep.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 space-y-3">
            <span className="text-xs font-mono text-snl-subtle uppercase tracking-wider">
              Standard Website
            </span>
            <h3 className="font-heading font-bold text-lg text-snl-text">
              Informational / Marketing
            </h3>
            <p className="text-xs text-snl-muted leading-relaxed">
              Primarily informational. Users read content, view portfolios, look at pricing, and submit a contact form. Everyone sees the same public data.
            </p>
            <div className="pt-2 text-xs font-mono text-snl-accent space-y-1">
              <p>✓ Marketing Pages</p>
              <p>✓ Fast Edge CDN Delivery</p>
              <p>✓ Lead Capture</p>
            </div>
          </div>

          <div className="bg-[#0D0F12] border border-snl-accent/40 rounded-xl p-5 space-y-3">
            <span className="text-xs font-mono text-snl-accent uppercase tracking-wider">
              Web Application
            </span>
            <h3 className="font-heading font-bold text-lg text-snl-text">
              Software / Interactive Engine
            </h3>
            <p className="text-xs text-snl-muted leading-relaxed">
              A software program running in the browser. Users log in, manipulate unique records, trigger automated background tasks, make payments, and view personal analytics.
            </p>
            <div className="pt-2 text-xs font-mono text-emerald-400 space-y-1">
              <p>✓ Authentication &amp; RBAC</p>
              <p>✓ Live Database Queries</p>
              <p>✓ Payment &amp; API Pipelines</p>
            </div>
          </div>
        </div>

        <p>
          For example, when we engineered{" "}
          <Link
            href="/projects/biblewise"
            className="text-snl-accent font-semibold underline hover:text-white"
          >
            BibleWise
          </Link>{" "}
          and{" "}
          <Link
            href="/projects/greennexus"
            className="text-snl-accent font-semibold underline hover:text-white"
          >
            GreenNexus
          </Link>
          , the platforms required real-time state management, predictive AI pipelines, and custom cloud infrastructure — far beyond static webpage generation.
        </p>
      </section>

      {/* Section: How to Choose a Developer */}
      <section id="how-to-choose-a-developer" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          How to Choose a Developer (and What to Ask)
        </h2>
        <p>
          When vetting agencies or freelance engineers in Kenya, do not simply ask for price. Ask these 5 technical questions to test their competence:
        </p>

        <div className="space-y-4">
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4 sm:p-5">
            <h3 className="font-heading font-bold text-snl-text text-sm sm:text-base text-snl-accent">
              Q1: &ldquo;What stack will you build this with, and why?&rdquo;
            </h3>
            <p className="text-xs sm:text-sm text-snl-muted mt-2">
              If an agency answers &ldquo;WordPress with 35 plugins&rdquo; for a complex web app, expect speed and security issues. Modern engineering uses framework-native solutions (Next.js, TypeScript, PostgreSQL) tailored to scale.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4 sm:p-5">
            <h3 className="font-heading font-bold text-snl-text text-sm sm:text-base text-snl-accent">
              Q2: &ldquo;How do you ensure mobile speed and Core Web Vitals?&rdquo;
            </h3>
            <p className="text-xs sm:text-sm text-snl-muted mt-2">
              Over 80% of web traffic in Kenya originates from mobile smartphones on 4G/3G connections. Unoptimized image assets and heavy scripts will cause potential clients to bounce.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4 sm:p-5">
            <h3 className="font-heading font-bold text-snl-text text-sm sm:text-base text-snl-accent">
              Q3: &ldquo;Who owns the code repository and cloud hosting accounts?&rdquo;
            </h3>
            <p className="text-xs sm:text-sm text-snl-muted mt-2">
              Ensure you receive full administrative ownership of your GitHub repository, DNS records, and cloud accounts upon handover.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4 sm:p-5">
            <h3 className="font-heading font-bold text-snl-text text-sm sm:text-base text-snl-accent">
              Q4: &ldquo;How is security and payment data handled?&rdquo;
            </h3>
            <p className="text-xs sm:text-sm text-snl-muted mt-2">
              Verify that API secrets (M-Pesa Consumer Keys, webhook signatures) are stored securely in environment variables rather than exposed on the client bundle.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4 sm:p-5">
            <h3 className="font-heading font-bold text-snl-text text-sm sm:text-base text-snl-accent">
              Q5: &ldquo;What happens post-launch if something breaks?&rdquo;
            </h3>
            <p className="text-xs sm:text-sm text-snl-muted mt-2">
              Professional studios offer structured warranty periods and ongoing{" "}
              <Link
                href="/services/maintenance-scale"
                className="text-snl-accent underline hover:text-white"
              >
                maintenance &amp; scaling agreements
              </Link>{" "}
              to handle operating system updates and bug fixes.
            </p>
          </div>
        </div>
      </section>

      {/* Section: How ShelNova Labs Approaches Development */}
      <section id="our-approach" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          How ShelNova Labs Approaches Website Development
        </h2>
        <p>
          At ShelNova Labs, we treat websites and platforms as revenue-generating digital assets rather than aesthetic side projects. Our engineering process guarantees:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <h3 className="font-heading font-bold text-snl-text text-sm">
              ⚡ 100/100 Core Web Vitals
            </h3>
            <p className="text-xs text-snl-muted mt-1">
              Sub-second load times engineered with Next.js, static rendering, and edge image optimization.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <h3 className="font-heading font-bold text-snl-text text-sm">
              🔒 Zero-Compromise Security
            </h3>
            <p className="text-xs text-snl-muted mt-1">
              Strict Content Security Policies, TLS 1.3 encryption, and enterprise-grade input validation.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <h3 className="font-heading font-bold text-snl-text text-sm">
              📈 Conversion Architecture
            </h3>
            <p className="text-xs text-snl-muted mt-1">
              Strategically mapped user journeys, high-intent CTAs, and automated lead capture pipelines.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <h3 className="font-heading font-bold text-snl-text text-sm">
              🔍 Rich Search Schema Markup
            </h3>
            <p className="text-xs text-snl-muted mt-1">
              Dynamic JSON-LD structured data on every page to maximize Google search ranking and snippet clicks.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
