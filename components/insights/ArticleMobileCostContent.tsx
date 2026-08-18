import Link from "next/link";
import { CheckCircle2, Sparkles, Smartphone, Layers, ShieldCheck, Zap } from "lucide-react";

export default function ArticleMobileCostContent() {
  return (
    <>
      {/* Section: Introduction */}
      <section id="introduction" className="space-y-5 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          Introduction
        </h2>
        <p>
          Kenya is undeniably a mobile-first economy. From M-Pesa mobile money transactions to agri-tech, logistics, and digital entertainment, over 95% of digital consumer interactions happen on a smartphone screen.
        </p>
        <p>
          For founders and enterprise executives, launching a mobile app is one of the highest-leverage growth moves possible. But budgeting for mobile development in Kenya in 2026 can be daunting. Quotes from local developers and agencies range from <strong>KES 50,000</strong> for basic hybrid wrappers to over <strong>KES 2,500,000</strong> for enterprise fintech applications.
        </p>
        <p>
          In this guide, we break down what mobile application development actually costs in Kenya, how modern cross-platform engineering (Flutter) cuts development costs by nearly half, and the critical architectural decisions that separate top-ranking apps from abandoned projects.
        </p>
        <div className="bg-[#111318] border-l-4 border-snl-accent p-5 rounded-r-xl my-6">
          <p className="text-sm italic text-snl-text font-medium">
            &ldquo;When building applications like BibleWise (150K+ AI conversations) and Kadi Classic (500K+ matches), we learned that the biggest cost driver isn&apos;t drawing screens — it is state management, offline resilience, and backend sync architecture.&rdquo;
          </p>
        </div>
      </section>

      {/* Section: Key Factors Affecting Mobile App Costs */}
      <section id="factors-affecting-cost" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          Key Factors Affecting Mobile App Development Costs
        </h2>
        <p>
          A mobile application is vastly more complex than a responsive website. It runs directly on user hardware, interacts with device operating systems, and must operate seamlessly even under spotty cellular connectivity. The primary cost drivers include:
        </p>

        <div className="space-y-4">
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5">
            <h3 className="font-heading font-bold text-snl-text text-base">
              1. Platform Support (iOS, Android, or Both)
            </h3>
            <p className="text-sm text-snl-muted mt-1.5">
              Historically, building for both platforms required two separate engineering teams: Swift for iOS and Kotlin/Java for Android — doubling your budget. Modern cross-platform frameworks like <strong>Flutter</strong> allow us to write a single type-safe Dart codebase that compiles to native ARM binary on both iOS and Android at 60 FPS, saving 40% to 50% in development and QA costs.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5">
            <h3 className="font-heading font-bold text-snl-text text-base">
              2. Backend Infrastructure &amp; Cloud APIs
            </h3>
            <p className="text-sm text-snl-muted mt-1.5">
              An app is only as fast as the backend powering it. Building secure authentication, relational databases (PostgreSQL/Firestore), media storage, background push workers, and REST/WebSocket APIs constitutes 40–60% of total engineering effort.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5">
            <h3 className="font-heading font-bold text-snl-text text-base">
              3. Offline-First Architecture &amp; Local Caching
            </h3>
            <p className="text-sm text-snl-muted mt-1.5">
              In Kenya and East Africa, mobile network connectivity fluctuates frequently. Apps that crash or show empty white screens when offline lose users immediately. Building local SQLite/Hive caching and background synchronization engines (as we built for{" "}
              <Link href="/projects/nyimbo-za-jeshi" className="text-snl-accent underline hover:text-white">
                Nyimbo za Jeshi
              </Link>
              ) requires thoughtful data conflict resolution.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5">
            <h3 className="font-heading font-bold text-snl-text text-base">
              4. Payment Gateways &amp; Third-Party Services
            </h3>
            <p className="text-sm text-snl-muted mt-1.5">
              Integrating M-Pesa Daraja STK Push, Pesapal, card payments, Google Maps location tracking, Firebase push notifications, and SMS OTP verification requires robust security headers, webhook listeners, and transaction reconciliation algorithms.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5">
            <h3 className="font-heading font-bold text-snl-text text-base">
              5. AI Integrations &amp; Real-Time Systems
            </h3>
            <p className="text-sm text-snl-muted mt-1.5">
              Incorporating LLM conversational coaches, RAG search pipelines, or multiplayer WebSocket matchmaking (like{" "}
              <Link href="/projects/kadi-party" className="text-snl-accent underline hover:text-white">
                Kadi Classic
              </Link>
              ) involves prompt routing, token management, and sub-50ms socket latency engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Typical Mobile App Development Costs in Kenya */}
      <section id="cost-tiers-kenya" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          Typical Mobile App Development Costs in Kenya (2026)
        </h2>
        <p>
          Here is a transparent breakdown of mobile application investment tiers in Kenya when working with an experienced software studio:
        </p>

        <div className="space-y-5">
          {/* Tier 1 */}
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-6 hover:border-snl-accent/40 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-snl-border pb-4">
              <div>
                <span className="text-xs font-mono text-snl-accent font-semibold uppercase">
                  Tier 1 · Minimum Viable Product (MVP)
                </span>
                <h3 className="font-heading text-xl font-bold text-snl-text">
                  Prototype &amp; Early Validation App
                </h3>
              </div>
              <div className="text-right sm:text-right">
                <span className="text-xl font-heading font-bold text-snl-text text-emerald-400">
                  KES 120,000 – 280,000
                </span>
                <p className="text-[11px] font-mono text-snl-subtle">
                  ($920 – $2,150 USD)
                </p>
              </div>
            </div>
            <p className="text-sm text-snl-muted mt-4">
              <strong>Best for:</strong> Startups looking to validate a core concept with real users, pitch to angel investors, or test market demand quickly.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-snl-muted">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-snl-accent shrink-0" />
                <span>Core 4–8 user screens with polished Figma UI/UX</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-snl-accent shrink-0" />
                <span>User authentication (Email, Google sign-in) &amp; profile management</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-snl-accent shrink-0" />
                <span>Single cross-platform Flutter codebase (Android &amp; iOS) with cloud database</span>
              </li>
            </ul>
          </div>

          {/* Tier 2 */}
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-6 hover:border-snl-accent/40 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-snl-border pb-4">
              <div>
                <span className="text-xs font-mono text-snl-accent font-semibold uppercase">
                  Tier 2 · Growth &amp; Commerce
                </span>
                <h3 className="font-heading text-xl font-bold text-snl-text">
                  Commercial Business &amp; Marketplace App
                </h3>
              </div>
              <div className="text-right sm:text-right">
                <span className="text-xl font-heading font-bold text-snl-text text-emerald-400">
                  KES 300,000 – 650,000
                </span>
                <p className="text-[11px] font-mono text-snl-subtle">
                  ($2,300 – $5,000 USD)
                </p>
              </div>
            </div>
            <p className="text-sm text-snl-muted mt-4">
              <strong>Best for:</strong> On-demand delivery, local commerce (like{" "}
              <Link href="/projects/jiranify" className="text-snl-accent underline">
                Jiranify
              </Link>
              ), service booking platforms, and consumer apps.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-snl-muted">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-snl-accent shrink-0" />
                <span>Native M-Pesa STK Push checkout &amp; automated payment reconciliation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-snl-accent shrink-0" />
                <span>Push notification engine (Firebase Cloud Messaging) with deep linking</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-snl-accent shrink-0" />
                <span>Web-based administrative console for order/user management</span>
              </li>
            </ul>
          </div>

          {/* Tier 3 */}
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-6 hover:border-snl-accent/40 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-snl-border pb-4">
              <div>
                <span className="text-xs font-mono text-snl-accent font-semibold uppercase">
                  Tier 3 · Advanced / Real-Time / AI
                </span>
                <h3 className="font-heading text-xl font-bold text-snl-text">
                  Intelligent App &amp; Real-Time Platform
                </h3>
              </div>
              <div className="text-right sm:text-right">
                <span className="text-xl font-heading font-bold text-snl-text text-emerald-400">
                  KES 650,000 – 1,800,000+
                </span>
                <p className="text-[11px] font-mono text-snl-subtle">
                  ($5,000 – $14,000+ USD)
                </p>
              </div>
            </div>
            <p className="text-sm text-snl-muted mt-4">
              <strong>Best for:</strong> AI-powered coaching platforms (like{" "}
              <Link href="/projects/biblewise" className="text-snl-accent underline">
                BibleWise
              </Link>
              ), real-time multiplayer gaming (like{" "}
              <Link href="/projects/kadi-party" className="text-snl-accent underline">
                Kadi Classic
              </Link>
              ), fintech wallets, and enterprise operations engines.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs text-snl-muted">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-snl-accent shrink-0" />
                <span>Conversational AI / RAG pipeline or real-time WebSocket state engine</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-snl-accent shrink-0" />
                <span>Offline data synchronization with local SQLite/Hive storage</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-snl-accent shrink-0" />
                <span>High-concurrency cloud backend, automated CI/CD app store release pipelines</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Link to Services */}
        <div className="pt-2">
          <p className="text-sm text-snl-muted">
            Looking to engineer a world-class mobile app for iOS and Android? Check out our{" "}
            <Link
              href="/services/mobile-applications"
              className="text-snl-accent font-semibold underline hover:text-white"
            >
              Mobile Application Development Services
            </Link>{" "}
            or view our live apps in our{" "}
            <Link
              href="/projects"
              className="text-snl-accent font-semibold underline hover:text-white"
            >
              Projects Portfolio
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Section: The Flutter Advantage */}
      <section id="flutter-cost-advantage" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          The Flutter Advantage: Cutting App Budget by 40–50%
        </h2>
        <p>
          At ShelNova Labs, we build the majority of our client and proprietary mobile applications using <strong>Flutter</strong> (backed by Google). Here is why this delivers unmatched value for businesses:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 space-y-3">
            <span className="text-xs font-mono text-snl-accent uppercase tracking-wider">
              1. Single Codebase, Dual Store Presence
            </span>
            <h3 className="font-heading font-bold text-lg text-snl-text">
              Half the Maintenance Cost
            </h3>
            <p className="text-xs text-snl-muted leading-relaxed">
              Instead of fixing bugs and developing features twice across Swift (iOS) and Kotlin (Android), our team writes and tests once. New features deploy simultaneously to both Google Play and Apple App Store.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 space-y-3">
            <span className="text-xs font-mono text-snl-accent uppercase tracking-wider">
              2. 60 FPS Native Performance
            </span>
            <h3 className="font-heading font-bold text-lg text-snl-text">
              Direct-to-GPU Rendering
            </h3>
            <p className="text-xs text-snl-muted leading-relaxed">
              Unlike web-wrapper hybrid solutions that feel sluggish and laggy on budget Android phones, Flutter uses the Impeller rendering engine to draw pixels directly on the device canvas at 60 to 120 FPS.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Hidden Costs */}
      <section id="hidden-costs" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          Hidden Costs: App Stores, APIs, and Maintenance
        </h2>
        <p>
          When planning your mobile app budget, remember that development is only the initial phase. You should also budget for ongoing operational infrastructure:
        </p>

        <div className="space-y-3">
          <div className="flex items-start gap-3 bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <CheckCircle2 className="w-5 h-5 text-snl-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-snl-text">
                App Store Developer Accounts
              </p>
              <p className="text-xs text-snl-muted mt-0.5">
                Google Play requires a one-time registration fee of <strong>$25 (~KES 3,300)</strong>. Apple Developer Program requires an annual fee of <strong>$99/year (~KES 13,000/year)</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <CheckCircle2 className="w-5 h-5 text-snl-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-snl-text">
                Cloud Backend &amp; Database Hosting
              </p>
              <p className="text-xs text-snl-muted mt-0.5">
                Firebase, Supabase, or AWS serverless backends usually start free and scale as user traffic grows (typically KES 2,500 – 15,000/month for 10,000+ active users).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <CheckCircle2 className="w-5 h-5 text-snl-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-snl-text">
                Operating System Upgrades &amp; Maintenance
              </p>
              <p className="text-xs text-snl-muted mt-0.5">
                Both Apple (iOS 19+) and Google (Android 16+) release mandatory annual API level updates and privacy permission changes. Budgeting for an ongoing{" "}
                <Link href="/services/maintenance-scale" className="text-snl-accent underline">
                  maintenance agreement
                </Link>{" "}
                ensures your app never gets removed from the stores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: How ShelNova Labs Builds Mobile Apps */}
      <section id="how-shelnova-builds-apps" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          How ShelNova Labs Builds Mobile Apps
        </h2>
        <p>
          We do not deliver buggy prototypes that stall after launch. We engineer resilient, production-grade mobile platforms through a structured 5-stage lifecycle:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <h3 className="font-heading font-bold text-snl-text text-sm">
              📱 Bespoke Ergonomic UI/UX
            </h3>
            <p className="text-xs text-snl-muted mt-1">
              Engineered specifically for single-thumb mobile ergonomics and instant responsiveness.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <h3 className="font-heading font-bold text-snl-text text-sm">
              ⚡ High-Speed Local Caching
            </h3>
            <p className="text-xs text-snl-muted mt-1">
              Offline-first architectures that load instantly even in remote or low-bandwidth areas.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <h3 className="font-heading font-bold text-snl-text text-sm">
              💳 Flawless M-Pesa &amp; Card Checkouts
            </h3>
            <p className="text-xs text-snl-muted mt-1">
              Instant STK Push dialogues with automated background status verification.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <h3 className="font-heading font-bold text-snl-text text-sm">
              🚀 Guaranteed Store Approval
            </h3>
            <p className="text-xs text-snl-muted mt-1">
              We handle the entire App Store Review and Google Play compliance process from start to launch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
