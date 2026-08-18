import Link from "next/link";
import { CheckCircle2, Sparkles, Smartphone, Cpu, ShieldCheck, Database, Zap, Star } from "lucide-react";

export default function ArticleBibleWiseCaseStudyContent() {
  return (
    <>
      {/* Section: The Vision & Problem */}
      <section id="the-vision" className="space-y-5 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          The Vision &amp; The Problem
        </h2>
        <p>
          Every day, millions of believers read scripture but struggle to bridge the gap between ancient theological text and practical, daily life application. When questions arise during personal devotional study or group reading, traditional commentaries are either dense, academic textbooks or fragmented across web forums.
        </p>
        <p>
          We set out to build <strong>BibleWise</strong>: an intuitive, mobile-first companion featuring a conversational AI Coach, structured chapter breakdowns across all 1,189 biblical chapters, daily reflection prompts, and habit-forming reading streaks.
        </p>
        <p>
          However, building an AI coach for spiritual and educational contexts presents a non-negotiable engineering challenge: <strong>zero tolerance for theological hallucination or doctrinal misquotes.</strong>
        </p>
        <div className="bg-[#111318] border-l-4 border-snl-accent p-5 rounded-r-xl my-6">
          <p className="text-sm italic text-snl-text font-medium">
            &ldquo;Generic ChatGPT wrappers fail in domain-specific applications. For BibleWise, we had to engineer a deterministic Retrieval-Augmented Generation (RAG) pipeline that grounds every AI response in verified scripture passages with exact verse citations.&rdquo;
          </p>
        </div>
      </section>

      {/* Section: System Architecture & Technology Stack */}
      <section id="product-architecture" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          System Architecture &amp; Technology Stack
        </h2>
        <p>
          To deliver sub-second response times, offline availability, and cross-platform fluid ergonomics, we engineered BibleWise using modern cloud and mobile technologies:
        </p>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-snl-accent">
              <Smartphone className="w-5 h-5" />
              <h3 className="font-heading font-bold text-sm text-snl-text">Mobile Frontend</h3>
            </div>
            <p className="text-xs font-mono text-emerald-400">Flutter (Dart) · 60 FPS Native</p>
            <p className="text-xs text-snl-muted leading-relaxed">
              Cross-platform architecture with single codebase deployment to Google Play Store and Apple App Store. Custom typography rendering and dark-mode ergonomics.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-snl-accent">
              <Cpu className="w-5 h-5" />
              <h3 className="font-heading font-bold text-sm text-snl-text">AI &amp; LLM Orchestration</h3>
            </div>
            <p className="text-xs font-mono text-emerald-400">RAG Context Pipeline · Claude &amp; OpenAI</p>
            <p className="text-xs text-snl-muted leading-relaxed">
              Vector embeddings, semantic chunking of biblical cross-references, and prompt-routing guardrails for structured theological reasoning.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-snl-accent">
              <Database className="w-5 h-5" />
              <h3 className="font-heading font-bold text-sm text-snl-text">Cloud &amp; Database</h3>
            </div>
            <p className="text-xs font-mono text-emerald-400">Serverless Firestore + Cloud Functions</p>
            <p className="text-xs text-snl-muted leading-relaxed">
              Real-time message streaming, automatic synchronization of reading streaks across devices, and low-latency cloud state persistence.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-snl-accent">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="font-heading font-bold text-sm text-snl-text">Local Storage</h3>
            </div>
            <p className="text-xs font-mono text-emerald-400">Hive / SQLite Local Engine</p>
            <p className="text-xs text-snl-muted leading-relaxed">
              Zero-latency offline text rendering for all 66 books, chapter summaries, and previously cached conversational exchanges.
            </p>
          </div>
        </div>
      </section>

      {/* Section: AI Engineering */}
      <section id="rag-theological-grounding" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          AI Engineering: RAG &amp; Context Routing
        </h2>
        <p>
          The core innovation inside BibleWise is its 4-step context pipeline that runs whenever a user asks a question:
        </p>

        <div className="space-y-3.5">
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4 flex items-start gap-3">
            <span className="font-mono text-snl-accent font-bold text-sm shrink-0">01</span>
            <div>
              <p className="text-sm font-semibold text-snl-text">Intent Classification &amp; Safety Filter</p>
              <p className="text-xs text-snl-muted mt-0.5">
                The user&apos;s prompt is parsed to determine whether it is an inquiry about historical context, a personal life application, or a cross-verse comparison.
              </p>
            </div>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4 flex items-start gap-3">
            <span className="font-mono text-snl-accent font-bold text-sm shrink-0">02</span>
            <div>
              <p className="text-sm font-semibold text-snl-text">Vector Search &amp; Context Retrieval</p>
              <p className="text-xs text-snl-muted mt-0.5">
                The query retrieves relevant theological cross-references, verse contexts, and historical timelines from our pre-computed vector index.
              </p>
            </div>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4 flex items-start gap-3">
            <span className="font-mono text-snl-accent font-bold text-sm shrink-0">03</span>
            <div>
              <p className="text-sm font-semibold text-snl-text">Structured Prompt Synthesis</p>
              <p className="text-xs text-snl-muted mt-0.5">
                The LLM is prompted with strict instruction sets: structured markdown headers, citation requirements, reflection questions, and practical action steps.
              </p>
            </div>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4 flex items-start gap-3">
            <span className="font-mono text-snl-accent font-bold text-sm shrink-0">04</span>
            <div>
              <p className="text-sm font-semibold text-snl-text">Streaming Token Delivery</p>
              <p className="text-xs text-snl-muted mt-0.5">
                Tokens stream directly to the Flutter UI with sub-400ms time-to-first-token, giving users an immediate, interactive conversational experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Mobile UI/UX */}
      <section id="flutter-mobile-performance" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          Mobile UI/UX: 60 FPS Flutter &amp; Offline Resilience
        </h2>
        <p>
          Reading text on a mobile screen for 30+ minutes requires deliberate typographic and ergonomic craftsmanship:
        </p>
        <ul className="space-y-2 text-xs sm:text-sm text-snl-muted">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-snl-accent shrink-0" />
            <span><strong>Custom Serif Typography:</strong> Optimized font line-height and contrast ratios to minimize eye fatigue during extended reading sessions.</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-snl-accent shrink-0" />
            <span><strong>Instant Chapter Navigation:</strong> Smooth bottom sheets allowing one-thumb jumping between books, chapters, and reflection tabs.</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-snl-accent shrink-0" />
            <span><strong>Offline Caching:</strong> All 1,189 chapter summaries and study outlines are stored locally, guaranteeing instant load times regardless of internet connectivity.</span>
          </li>
        </ul>
      </section>

      {/* Section: Real-World Metrics & Scaling */}
      <section id="scaling-lessons" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          Real-World Metrics &amp; Growth Results
        </h2>
        <p>
          Since its release on the Google Play Store, BibleWise has achieved remarkable user engagement:
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 text-center space-y-1">
            <p className="text-2xl sm:text-3xl font-heading font-bold text-snl-accent">150,000+</p>
            <p className="text-xs font-mono text-snl-subtle uppercase">AI Conversations Served</p>
          </div>
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 text-center space-y-1">
            <p className="text-2xl sm:text-3xl font-heading font-bold text-emerald-400">1,189</p>
            <p className="text-xs font-mono text-snl-subtle uppercase">Chapter Insights Mapped</p>
          </div>
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-5 text-center space-y-1 flex flex-col items-center justify-center">
            <p className="text-2xl sm:text-3xl font-heading font-bold text-amber-400 flex items-center gap-1">
              4.9 <Star className="w-5 h-5 fill-current text-amber-400 inline" />
            </p>
            <p className="text-xs font-mono text-snl-subtle uppercase">Play Store Rating</p>
          </div>
        </div>

        <p>
          View the full case study breakdown on our{" "}
          <Link href="/projects/biblewise" className="text-snl-accent font-semibold underline hover:text-white">
            BibleWise Project Page
          </Link>{" "}
          or download the app directly on the{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.shelnovalabs.biblewise"
            target="_blank"
            rel="noopener noreferrer"
            className="text-snl-accent font-semibold underline hover:text-white"
          >
            Google Play Store
          </a>
          .
        </p>
      </section>

      {/* Section: Key Takeaways for Founders */}
      <section id="key-takeaways" className="space-y-6 scroll-mt-28">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
          Key Takeaways for Product Founders &amp; Engineering Teams
        </h2>
        <div className="space-y-4">
          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <h3 className="font-heading font-bold text-sm text-snl-text">1. Context &gt; Model Size</h3>
            <p className="text-xs text-snl-muted mt-1">
              A well-architected RAG pipeline with high-quality domain knowledge consistently outperforms massive raw foundation models while costing 80% less in API tokens.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <h3 className="font-heading font-bold text-sm text-snl-text">2. Flutter Delivers Speed to Market</h3>
            <p className="text-xs text-snl-muted mt-1">
              Building in Flutter allowed us to iterate on UI components, streaming token parsers, and animations with immediate hot-reload, slashing total development time to under 8 weeks.
            </p>
          </div>

          <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-4">
            <h3 className="font-heading font-bold text-sm text-snl-text">3. Offline-First Is Essential for Africa</h3>
            <p className="text-xs text-snl-muted mt-1">
              If an app relies 100% on continuous cloud connectivity, user retention drops. Caching core content locally ensures high reliability and positive app reviews.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <p className="text-sm text-snl-muted">
            Interested in building an AI-powered application or cross-platform mobile platform? Explore our{" "}
            <Link href="/services/ai-intelligent-systems" className="text-snl-accent font-semibold underline hover:text-white">
              AI &amp; Intelligent Systems Services
            </Link>{" "}
            and our{" "}
            <Link href="/services/mobile-applications" className="text-snl-accent font-semibold underline hover:text-white">
              Mobile App Development Services
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
