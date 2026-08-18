export type InsightCategory = "Development" | "Business" | "Case Studies" | "Product";

export interface InsightAuthor {
  name: string;
  role: string;
  company: string;
  avatarUrl?: string;
  initials: string;
  bio: string;
  twitter?: string;
  linkedin?: string;
}

export interface InsightFAQ {
  question: string;
  answer: string;
}

export interface InsightTOCItem {
  id: string;
  title: string;
}

export interface InsightArticle {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: InsightCategory;
  readTime: string;
  publishedDate: string; // e.g. "2026-08-19"
  displayDate: string;   // e.g. "Aug 2026"
  author: InsightAuthor;
  lead: string;
  heroImage?: string;
  toc: InsightTOCItem[];
  faqs: InsightFAQ[];
  relatedServiceSlugs?: string[];
  relatedProjectIds?: string[];
  isFeatured?: boolean;
}

export const insightCategories: { name: InsightCategory; description: string }[] = [
  {
    name: "Business",
    description: "Guides and frameworks to help founders and business leaders make high-ROI technology decisions.",
  },
  {
    name: "Development",
    description: "Deep-dive technical architecture, engineering practices, and software systems design.",
  },
  {
    name: "Case Studies",
    description: "Detailed breakdowns, metrics, and lessons learned from building real-world digital products.",
  },
  {
    name: "Product",
    description: "Strategies for ideating, designing, launching, and iterating high-impact apps and platforms.",
  },
];

export const authors: Record<string, InsightAuthor> = {
  shelton: {
    name: "Shelton Shamola",
    role: "Founder & Software Engineer",
    company: "ShelNova Labs",
    initials: "SS",
    bio: "Software engineer and founder at ShelNova Labs. Specializes in full-lifecycle product engineering, scalable cloud systems, and building high-performance mobile and web products in Nairobi, Kenya.",
    twitter: "https://x.com/shelnovalabs",
    linkedin: "https://www.linkedin.com/in/Shamola-Shelton",
  },
};

export const insightsArticles: InsightArticle[] = [
  {
    slug: "website-development-cost-kenya",
    title: "How Much Does It Cost to Build a Website in Kenya in 2026?",
    seoTitle: "Website Development Cost in Kenya in 2026 | ShelNova Labs",
    metaDescription:
      "Learn what determines website development costs in Kenya in 2026, from basic business websites to e-commerce platforms and custom web applications.",
    category: "Business",
    readTime: "8 min read",
    publishedDate: "2026-08-19",
    displayDate: "Aug 2026",
    author: authors.shelton,
    lead:
      "A transparent breakdown of website and web application development pricing in Kenya for 2026. Understand the engineering factors that dictate costs, realistic market rates, and how to avoid costly rework.",
    heroImage: "/images/insights/website-cost-kenya.jpg",
    isFeatured: true,
    toc: [
      { id: "introduction", title: "Introduction" },
      { id: "what-determines-cost", title: "What Determines Website Cost?" },
      { id: "cost-breakdown-kenya", title: "Typical Website Development Costs in Kenya" },
      { id: "website-vs-web-app", title: "Website vs. Web Application: The Critical Difference" },
      { id: "how-to-choose-a-developer", title: "How to Choose a Developer (and What to Ask)" },
      { id: "our-approach", title: "How ShelNova Labs Approaches Development" },
      { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
    ],
    faqs: [
      {
        question: "How much does a basic business website cost in Kenya in 2026?",
        answer:
          "A professional 5-10 page brochure website with mobile responsiveness, SEO optimization, and contact integrations typically costs between KES 35,000 and KES 85,000 depending on custom design fidelity and copy requirements.",
      },
      {
        question: "Why do custom web applications cost significantly more than traditional websites?",
        answer:
          "Web applications require authenticated user sessions, relational database schemas, secure payment gateways, real-time background jobs, automated testing, and cloud infrastructure rather than static HTML/CSS presentation pages.",
      },
      {
        question: "What recurring annual costs should I budget for after launch?",
        answer:
          "Expect to budget for domain renewal (KES 1,500 – 3,500/year), cloud hosting/servers (KES 10,000 – 60,000+/year), automated backups, transactional email/SMS services, and an ongoing software maintenance retainer to keep dependencies secure.",
      },
      {
        question: "How long does it take to design and launch a website or web app?",
        answer:
          "Standard business websites take 2 to 4 weeks. High-tier corporate or e-commerce platforms take 4 to 8 weeks. Custom web applications and SaaS platforms typically require 6 to 12 weeks of phased agile milestones.",
      },
      {
        question: "Can ShelNova Labs upgrade or take over an existing website built by another team?",
        answer:
          "Yes. We frequently conduct code audits, fix legacy performance bottlenecks, modernize UI/UX, and take over ongoing maintenance for existing digital products across East Africa.",
      },
    ],
    relatedServiceSlugs: ["web-applications", "product-engineering", "maintenance-scale"],
    relatedProjectIds: ["shelnova-os", "greennexus", "biblewise"],
  },
  {
    slug: "mobile-app-development-cost-kenya",
    title: "How Much Does Mobile App Development Cost in Kenya in 2026?",
    seoTitle: "Mobile App Development Cost in Kenya in 2026 | ShelNova Labs",
    metaDescription:
      "Understand mobile app development costs in Kenya in 2026, from MVP apps to cross-platform Flutter platforms and enterprise systems.",
    category: "Business",
    readTime: "9 min read",
    publishedDate: "2026-08-19",
    displayDate: "Aug 2026",
    author: authors.shelton,
    lead:
      "A realistic budget breakdown for building iOS and Android mobile apps in Kenya for 2026. Explore pricing factors, Flutter vs. native cost efficiencies, app store publishing, and maintenance.",
    heroImage: "/images/insights/mobile-cost-kenya.jpg",
    isFeatured: false,
    toc: [
      { id: "introduction", title: "Introduction" },
      { id: "factors-affecting-cost", title: "Key Factors Affecting Mobile App Costs" },
      { id: "cost-tiers-kenya", title: "Typical Mobile App Development Costs in Kenya" },
      { id: "flutter-cost-advantage", title: "The Flutter Advantage: Cutting App Budget by 40-50%" },
      { id: "hidden-costs", title: "Hidden Costs: App Stores, APIs, and Maintenance" },
      { id: "how-shelnova-builds-apps", title: "How ShelNova Labs Builds Mobile Apps" },
      { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
    ],
    faqs: [
      {
        question: "How much does it cost to build a mobile app in Kenya in 2026?",
        answer:
          "A lean MVP mobile app typically ranges between KES 120,000 and KES 280,000. Commercial business/marketplace apps with M-Pesa integration cost between KES 300,000 and KES 650,000, while complex AI or real-time platforms range from KES 650,000 to KES 1,800,000+.",
      },
      {
        question: "Is it cheaper to build for Android first or both Android & iOS together?",
        answer:
          "By using modern cross-platform engineering with Flutter, we build a single shared codebase for both Android and iOS simultaneously. This eliminates the expense of hiring separate iOS and Android teams and cuts project budgets by 40–50%.",
      },
      {
        question: "What are the recurring annual costs of running a mobile app?",
        answer:
          "Standard recurring costs include the Apple Developer Program ($99/year), Google Play Console ($25 one-time), cloud backend hosting (starting free up to KES 15,000+/mo for high traffic), SMS gateway credits for OTPs, and regular OS upgrade maintenance.",
      },
      {
        question: "How long does it take to build and launch a mobile app?",
        answer:
          "A focused MVP typically takes 4 to 8 weeks. Comprehensive commercial apps with complex checkout and backend management consoles take 8 to 14 weeks from design to store approval.",
      },
      {
        question: "How do you handle Google Play and Apple App Store approvals?",
        answer:
          "ShelNova Labs handles end-to-end store submission, compliance checks, privacy policy generation, screenshot preparation, and store review responses until your app is live.",
      },
    ],
    relatedServiceSlugs: ["mobile-applications", "product-engineering", "maintenance-scale"],
    relatedProjectIds: ["biblewise", "kadi-party", "nyimbo-za-jeshi", "jiranify"],
  },
  {
    slug: "website-vs-web-app-difference",
    title: "Website vs. Web App: Which One Does Your Business Actually Need?",
    seoTitle: "Website vs Web App: Which Does Your Business Need? | ShelNova Labs",
    metaDescription:
      "Understand the critical architectural differences between a business website and a custom web application. Learn which one fits your company's growth goals.",
    category: "Development",
    readTime: "7 min read",
    publishedDate: "2026-08-19",
    displayDate: "Aug 2026",
    author: authors.shelton,
    lead:
      "Confusing a marketing website with an interactive web application is one of the most expensive mistakes businesses make. Here is how to evaluate what your digital product actually requires.",
    heroImage: "/images/insights/website-vs-web-app.jpg",
    isFeatured: false,
    toc: [
      { id: "introduction", title: "Introduction" },
      { id: "core-differences", title: "Core Architectural Differences" },
      { id: "when-website-is-enough", title: "When a Standard Website Is All You Need" },
      { id: "when-you-need-a-web-app", title: "When Your Business Requires a Web Application" },
      { id: "the-plugin-trap", title: "The Danger of 'The Plugin Trap'" },
      { id: "how-shelnova-approaches-both", title: "How ShelNova Labs Architects Both Solutions" },
      { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
    ],
    faqs: [
      {
        question: "Can a standard website be converted into a web application later?",
        answer:
          "Yes, but it usually requires rebuilding the frontend with a modern framework (like React/Next.js) and adding a dedicated backend database API layer, rather than trying to patch plugins onto a legacy CMS.",
      },
      {
        question: "Why are web applications more expensive than websites?",
        answer:
          "Web applications require authenticated user sessions, relational database architecture, automated background tasks, external API integrations, extensive unit/integration testing, and dedicated cloud hosting.",
      },
      {
        question: "Is Next.js suitable for both websites and web applications?",
        answer:
          "Yes. Next.js 16 is uniquely powerful because it supports static pre-rendering for lightning-fast marketing pages and server-side dynamic rendering for complex, authenticated web applications in a single unified codebase.",
      },
      {
        question: "How do I know which one my business needs right now?",
        answer:
          "If your users only need to read information, see your work, and send an inquiry, you need a website. If users need to log in, manipulate data, make dynamic purchases, or automate tasks, you need a web application.",
      },
    ],
    relatedServiceSlugs: ["web-applications", "product-engineering", "maintenance-scale"],
    relatedProjectIds: ["shelnova-os", "greennexus", "career-ops"],
  },
  {
    slug: "how-we-built-biblewise",
    title: "Case Study: How We Built BibleWise — AI Scripture Coach for 150K+ Conversations",
    seoTitle: "How We Built BibleWise (AI Scripture Coach) | ShelNova Labs Case Study",
    metaDescription:
      "A deep-dive technical case study into engineering BibleWise: combining Flutter, RAG vector retrieval, and serverless Firestore sync to serve 150,000+ AI conversations.",
    category: "Case Studies",
    readTime: "10 min read",
    publishedDate: "2026-08-19",
    displayDate: "Aug 2026",
    author: authors.shelton,
    lead:
      "How ShelNova Labs designed, architected, and scaled an AI-powered scripture study platform to 150K+ conversations with a 4.9★ rating on the Google Play Store.",
    heroImage: "/images/insights/biblewise-case-study.jpg",
    isFeatured: false,
    toc: [
      { id: "the-vision", title: "The Vision & The Problem" },
      { id: "product-architecture", title: "System Architecture & Technology Stack" },
      { id: "rag-theological-grounding", title: "AI Engineering: RAG & Context Routing" },
      { id: "flutter-mobile-performance", title: "Mobile UI/UX: 60 FPS Flutter & Offline Resilience" },
      { id: "scaling-lessons", title: "Real-World Metrics & Growth Results" },
      { id: "key-takeaways", title: "Key Takeaways for Product Founders" },
      { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
    ],
    faqs: [
      {
        question: "How does BibleWise prevent AI hallucinations during scripture discussions?",
        answer:
          "BibleWise utilizes a deterministic Retrieval-Augmented Generation (RAG) pipeline with semantic vector chunking and strict prompt guardrails. Every answer is grounded directly in verified biblical texts with precise verse citations.",
      },
      {
        question: "What backend technologies power BibleWise's real-time responses?",
        answer:
          "We use serverless Firebase Cloud Functions, Firestore real-time streaming, and LLM APIs (OpenAI & Anthropic Claude) optimized for sub-400ms token streaming latency.",
      },
      {
        question: "How does the mobile app perform in low-connectivity areas?",
        answer:
          "All 1,189 chapter summaries, outlines, and cached conversation threads are stored locally in Hive/SQLite, enabling seamless offline reading and fast startup times.",
      },
      {
        question: "What was the development timeline from concept to Google Play release?",
        answer:
          "The initial MVP was architected, designed in Figma, engineered in Flutter, tested, and published to the Google Play Store in under 8 weeks.",
      },
      {
        question: "Can ShelNova Labs build a custom AI assistant for our business or industry?",
        answer:
          "Yes. We specialize in designing and deploying custom RAG pipelines, domain-specific AI assistants, and enterprise knowledge agents for businesses in East Africa and globally.",
      },
    ],
    relatedServiceSlugs: ["ai-intelligent-systems", "mobile-applications", "product-engineering"],
    relatedProjectIds: ["biblewise", "gist-and-gain", "kadi-party"],
  },
  {
    slug: "choose-software-development-company-kenya",
    title: "How to Choose a Software Development Company in Kenya (2026 Buyer's Guide)",
    seoTitle: "How to Choose a Software Development Company in Kenya | ShelNova Labs",
    metaDescription:
      "A practical buyer's guide for choosing a software development company in Kenya in 2026. Avoid lowball traps, evaluate technical competence, and protect your IP.",
    category: "Business",
    readTime: "8 min read",
    publishedDate: "2026-08-19",
    displayDate: "Aug 2026",
    author: authors.shelton,
    lead:
      "Hiring the wrong software agency can cost your business months of delays and millions in wasted budget. Here is how to evaluate software development companies in Kenya, ask the right technical questions, and protect your intellectual property.",
    heroImage: "/images/insights/choose-agency-kenya.jpg",
    isFeatured: false,
    toc: [
      { id: "introduction", title: "Introduction" },
      { id: "the-risks", title: "The Hidden Costs of Choosing the Wrong Team" },
      { id: "key-evaluation-criteria", title: "6 Critical Criteria to Evaluate a Software Company" },
      { id: "red-flags-to-watch", title: "Red Flags to Watch Out For" },
      { id: "engagement-models", title: "Pricing Models: Fixed-Price vs. Dedicated Retainers" },
      { id: "what-to-ask-in-interviews", title: "5 Essential Questions to Ask Before Signing" },
      { id: "why-choose-shelnova", title: "Why Businesses Choose ShelNova Labs" },
      { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
    ],
    faqs: [
      {
        question: "How do I verify a software company's previous work in Kenya?",
        answer:
          "Ask for live production URLs, App Store links, and past client references. Test their live applications on both Android and iOS devices to verify speed, UI ergonomics, and error handling.",
      },
      {
        question: "Who owns the source code and intellectual property upon delivery?",
        answer:
          "Your contract should explicitly state that 100% of the source code, repositories, design assets, and cloud deployment credentials transfer to your business upon milestone payment.",
      },
      {
        question: "What is the difference between a freelancer and an engineering studio?",
        answer:
          "Freelancers are cost-effective for minor tweaks but carry high single-point-of-failure risks. A studio provides dedicated UI/UX designers, backend architects, QA engineers, and post-launch SLAs.",
      },
      {
        question: "How do software agencies in Kenya structure payment milestones?",
        answer:
          "Standard industry practice uses phased milestone payments (e.g. 30% kickoff, 30% design & prototype approval, 40% testing & production deployment), ensuring you only pay for completed, working software.",
      },
      {
        question: "What warranty or bug-fixing period should be included?",
        answer:
          "Professional software studios offer a 30 to 60-day post-launch warranty period to resolve unexpected edge cases at no additional cost.",
      },
    ],
    relatedServiceSlugs: ["product-engineering", "web-applications", "maintenance-scale"],
    relatedProjectIds: ["shelnova-os", "biblewise", "kadi-party"],
  },
  {
    slug: "flutter-vs-native-app-development",
    title: "Flutter vs. Native App Development: Which Should You Choose in 2026?",
    seoTitle: "Flutter vs Native App Development (2026 Guide) | ShelNova Labs",
    metaDescription:
      "Compare Flutter vs Native (Swift & Kotlin) mobile app development in 2026. Explore performance benchmarks, development cost, time-to-market, and architecture.",
    category: "Development",
    readTime: "8 min read",
    publishedDate: "2026-08-19",
    displayDate: "Aug 2026",
    author: authors.shelton,
    lead:
      "An honest engineering comparison between cross-platform Flutter and pure native iOS (Swift) & Android (Kotlin) development. Learn when Flutter is the clear winner and when native code is still necessary.",
    heroImage: "/images/insights/flutter-vs-native.jpg",
    isFeatured: false,
    toc: [
      { id: "introduction", title: "Introduction" },
      { id: "what-is-flutter", title: "How Flutter Works: Direct-to-GPU Rendering" },
      { id: "performance-benchmarks", title: "Side-by-Side Comparison: Flutter vs. Native" },
      { id: "budget-timeline-comparison", title: "Budget & Time-to-Market Comparison" },
      { id: "when-to-use-flutter", title: "When Flutter Is the Clear Winner" },
      { id: "when-native-is-required", title: "When Pure Native Is Still Required" },
      { id: "our-experience-at-shelnova", title: "Our Experience Building Apps with Flutter" },
      { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
    ],
    faqs: [
      {
        question: "Is Flutter good enough for complex mobile applications?",
        answer:
          "Yes. Global enterprises like Alibaba, Google Pay, BMW, and our own flagship apps like BibleWise and Kadi Classic run smoothly on Flutter, proving it can handle real-time sync, complex state, and massive user scale.",
      },
      {
        question: "Does a Flutter app look and feel truly native on iOS and Android?",
        answer:
          "Yes. Flutter uses Impeller GPU rendering to paint UI components with platform-specific scrolling physics, haptic feedback, and Cupertino/Material typography that users cannot distinguish from native.",
      },
      {
        question: "How much money and time does Flutter save compared to Native?",
        answer:
          "By maintaining a single unified Dart codebase for both iOS and Android, teams typically save 40% to 50% in initial development cost and ship 2x to 3x faster.",
      },
      {
        question: "Can native Kotlin or Swift code be embedded inside a Flutter app?",
        answer:
          "Yes. Flutter provides robust platform channels (MethodChannels/FFI) that allow developers to write custom native Swift, Kotlin, or C++ code whenever low-level hardware access is required.",
      },
    ],
    relatedServiceSlugs: ["mobile-applications", "product-engineering", "maintenance-scale"],
    relatedProjectIds: ["kadi-party", "biblewise", "nyimbo-za-jeshi"],
  },
];
