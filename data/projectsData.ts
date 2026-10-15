export interface CaseStudy {
  id: string;
  index: string;
  name: string;
  tagline: string;
  category: "mobile" | "web" | "saas" | "ai" | "open-source" | "game";
  tags: string[];
  status: "live" | "dev" | "beta";
  statusLabel: string;
  accentColor: string;
  summary: string;
  challenge: string;
  approach: string;
  result: string;
  // Only list facts that can be verified (content counts, store data).
  metrics?: { label: string; value: string }[];
  storeLinks?: {
    playStore?: string;
    appStore?: string;
    webDemo?: string;
    github?: string;
  };
  // Policy pages linked from store listings. Never remove or rename these paths.
  legalLinks?: { label: string; href: string }[];
  platforms: string;
  mockupType: "mobile" | "dashboard" | "dual";
  primaryBadge: string;
  imageSrc?: string;
  galleryImages?: string[];
}

export const projectsData: CaseStudy[] = [
  {
    id: "sancta",
    index: "01",
    name: "Sancta",
    tagline: "Catholic Prayer & Bible App — Daily Rosary, Scripture & Liturgical Celebrations.",
    category: "mobile",
    tags: ["Mobile App", "Faith & Culture", "Catholic Devotions", "Offline First"],
    status: "live",
    statusLabel: "Live on Google Play",
    accentColor: "#6B21A8",
    summary:
      "A Catholic prayer, Holy Rosary, and Bible companion application featuring liturgical calendar celebration stories, daily scripture readings, offline audio prayers, intention tracking, and prayer streaks.",
    challenge:
      "Catholic believers seek a unified, beautifully designed digital companion for daily prayer, Rosary meditations, and liturgical saint stories that operates seamlessly offline.",
    approach:
      "Engineered an offline-first Flutter application with a curated General Roman Calendar story engine, audio Rosary decade player, offline Bible reader, and serverless Firebase synchronization for bookmarks and prayer progress.",
    result:
      "Published on Google Play as a daily Catholic prayer companion with a complete liturgical calendar, offline Bible and audio Rosary.",
    metrics: [
      { label: "Liturgical Celebrations", value: "218+" },
      { label: "Works Offline", value: "Yes" },
    ],
    storeLinks: {
      playStore: "https://play.google.com/store/apps/details?id=com.shelnovalabs.sancta",
    },
    legalLinks: [
      { label: "Privacy Policy", href: "/sancta/privacy" },
      { label: "Terms of Service", href: "/sancta/terms" },
      { label: "Delete Account", href: "/sancta/delete-account" },
    ],
    platforms: "Android",
    mockupType: "mobile",
    primaryBadge: "Catholic Prayer & Liturgy",
  },
  {
    id: "biblewise",
    index: "02",
    name: "BibleWise",
    tagline: "Ask. Learn. Grow in Faith. Get instant guidance from your AI Bible Coach.",
    category: "ai",
    tags: ["Mobile App", "AI Coach", "Chapter Insights", "EdTech"],
    status: "live",
    statusLabel: "Live on Google Play",
    accentColor: "#0F4C3A",
    summary:
      "An AI-powered Bible study platform featuring conversational AI Coach guidance, structured chapter insights (Summary, Main Idea, Timeline, Cross-Refs), daily reflection prompts, and reading plans.",
    challenge:
      "Readers seeking to understand Scripture struggle to connect biblical passages with daily life applications, lacking structured tools for instant theological context and guided study.",
    approach:
      "Engineered a mobile-first app combining an AI Coach with RAG context routing, structured Chapter Insights (Summary, Key Takeaway, Life Application, Reflection Questions), reading streaks, and serverless Firestore sync.",
    result:
      "Live on Google Play, giving readers instant guidance from an AI Bible Coach alongside chapter insights and interactive verse reflections.",
    metrics: [
      { label: "Chapter Insights", value: "1,189 chapters" },
      { label: "Books Covered", value: "66" },
    ],
    storeLinks: {
      playStore: "https://play.google.com/store/apps/details?id=com.shelnovalabs.biblewise",
    },
    legalLinks: [{ label: "Privacy Policy", href: "/privacy/biblewise" }],
    platforms: "Android",
    mockupType: "mobile",
    primaryBadge: "AI Coach & Scripture Study",
    imageSrc: "/images/biblewise.jpg",
    galleryImages: [
      "/images/biblewise.jpg",
      "/images/biblewise_1.jpg",
      "/images/biblewise_2.jpg",
    ],
  },
  {
    id: "kadi-party",
    index: "03",
    name: "Kadi Classic",
    tagline: "The fast-paced Kenyan card game, digitally reimagined.",
    category: "game",
    tags: ["Mobile Game", "Real-Time Multiplayer", "Gaming", "Consumer"],
    status: "live",
    statusLabel: "Live on Google Play",
    accentColor: "#f59e0b",
    summary:
      "A digital version of the traditional Kenyan Kadi card game featuring instant online matchmaking, smart AI opponents, custom rooms, and global leaderboards.",
    challenge:
      "Translating a high-speed physical card game into a real-time multiplayer mobile app required low-latency state synchronization, cheat prevention, and seamless fallback when users lose cellular connection.",
    approach:
      "Designed a real-time WebSocket state engine with local prediction and authoritative server validation. Implemented stateful bot fallbacks when players drop out, and crafted smooth card movement animations at 60 FPS.",
    result:
      "Launched on Google Play with online matchmaking, AI opponents and private rooms, bringing a game Kenyans grew up playing to their phones.",
    metrics: [
      { label: "Game Modes", value: "Online · AI · Rooms" },
      { label: "Target Frame Rate", value: "60 FPS" },
    ],
    storeLinks: {
      playStore: "https://play.google.com/store/apps/details?id=com.shelnovalabs.kadiclassic",
    },
    platforms: "Android",
    mockupType: "mobile",
    primaryBadge: "Gaming & Multiplayer",
    imageSrc: "/images/kadi_classic.jpg",
  },
  {
    id: "pupgrid",
    index: "04",
    name: "PupGrid: Puppy Sudoku",
    tagline: "A dog-themed logic puzzle — one pup per row, column and region.",
    category: "game",
    tags: ["Mobile Game", "Logic Puzzle", "Daily Challenge", "AdMob"],
    status: "beta",
    statusLabel: "Launching on mobile",
    accentColor: "#d97706",
    summary:
      "A dog-themed take on one-star Star Battle puzzles. Place dogs on a grid so there is exactly one per row, column and region, and no two dogs touch — not even diagonally. Includes a level campaign, a daily puzzle, hints and leaderboards.",
    challenge:
      "Logic puzzles like Star Battle are satisfying but intimidating for casual players. The goal was to make the rules click instantly and keep players returning every day without paywalls.",
    approach:
      "Built a campaign of hand-tuned levels plus a daily puzzle, a three-tier hint system (Think, Sniff and Fetch) that teaches the deduction instead of just giving the answer, and optional rewarded videos so the game stays free.",
    result:
      "A free, all-ages puzzle game with a campaign, daily puzzle and leaderboards, supported by optional rewarded ads.",
    metrics: [
      { label: "Modes", value: "Campaign · Daily" },
      { label: "Hint Types", value: "3" },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "/pupgrid/privacy" },
      { label: "Terms of Service", href: "/pupgrid/terms" },
    ],
    platforms: "Android, iOS",
    mockupType: "mobile",
    primaryBadge: "Puzzle Game",
  },
  {
    id: "wordnova",
    index: "05",
    name: "WordNova",
    tagline: "Connect words, discover worlds — a cosmic word-association puzzle.",
    category: "game",
    tags: ["Mobile Game", "Word Puzzle", "Vocabulary", "Casual"],
    status: "beta",
    statusLabel: "Launching on mobile",
    accentColor: "#7c3aed",
    summary:
      "A word-association and vocabulary puzzle game set across a 600-level galaxy campaign — from Home Orbit and Lunar Fields out to Neptune and the Genesis Singularity — with Star Link puzzles, constellation discovery and leaderboards.",
    challenge:
      "Word games are crowded. WordNova needed a sense of journey and discovery that keeps players moving level after level, while staying friendly for all ages.",
    approach:
      "Wrapped word-association puzzles in a space-exploration progression, with regions that unlock as you play, constellation collection, and an in-game economy (Stardust, time freezes, mistake shields) earned through play or optional rewarded ads.",
    result:
      "A family-friendly word puzzle game with a 600-level campaign that saves progress locally on the device.",
    metrics: [
      { label: "Campaign Levels", value: "600" },
      { label: "Galaxy Regions", value: "9" },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "/wordnova/privacy" },
      { label: "Terms of Service", href: "/wordnova/terms" },
    ],
    platforms: "Android",
    mockupType: "mobile",
    primaryBadge: "Word Game",
  },
  {
    id: "wash-rush",
    index: "06",
    name: "Wash Rush: Pressure Panic",
    tagline: "A satisfying 3D pressure-washing game against the clock.",
    category: "game",
    tags: ["Mobile Game", "Godot", "3D", "Casual"],
    status: "beta",
    statusLabel: "Launching on Android",
    accentColor: "#0ea5e9",
    summary:
      "A 3D casual game built in Godot where you blast grime off surfaces with a pressure washer before time runs out, using custom cleanable-surface shaders.",
    challenge:
      "Pressure-washing games live or die on how satisfying the cleaning feels. That needs real-time surface cleaning that still runs smoothly on budget Android phones.",
    approach:
      "Built in the Godot engine with custom cleanable-surface shaders, Firebase Remote Config for tuning difficulty without app updates, and anonymous analytics to find levels where players get stuck.",
    result:
      "A lightweight 3D game tuned for mid-range Android devices, with progress saved on the device and difficulty adjustable remotely.",
    legalLinks: [
      { label: "Privacy Policy", href: "/wash-rush/privacy" },
      { label: "Terms of Service", href: "/wash-rush/terms" },
    ],
    platforms: "Android",
    mockupType: "mobile",
    primaryBadge: "3D Casual Game",
  },
  {
    id: "jiranify",
    index: "07",
    name: "JiraniFy",
    tagline: "Explore your neighborhood — trusted local tools & verified resident signals.",
    category: "web",
    tags: ["Web App", "Hyperlocal Social", "Community Marketplace", "Verified Resident Feed"],
    status: "live",
    statusLabel: "Live at jiranify.com",
    accentColor: "#f97316",
    summary:
      "A verified neighborhood social network and local operating platform enabling estate residents to share live signals, buy & sell locally, host community events, and post neighbor shouts.",
    challenge:
      "Urban estates and neighborhood communities rely on fragmented, unverified chat groups plagued by spam, security risks, and poor local commerce discovery.",
    approach:
      "Engineered geo-verified resident feeds, estate marketplace listings, local shouts, events, polls, gigs, and dual light/dark mode with global admin moderation consoles.",
    result:
      "Live at jiranify.com — giving residents a verified feed for security alerts, local buy/sell listings and community events.",
    storeLinks: {
      webDemo: "https://jiranify.com",
    },
    platforms: "Web",
    mockupType: "mobile",
    primaryBadge: "Community & Local Commerce",
    imageSrc: "/images/jiranify.jpg",
    galleryImages: [
      "/images/jiranify_1.jpg",
      "/images/jiranify_2.jpg",
      "/images/jiranify_3.jpg",
    ],
  },
  {
    id: "nyimbo-za-jeshi",
    index: "08",
    name: "Nyimbo za Jeshi la Wokovu",
    tagline: "Digital Swahili songbook & hymnal app for Salvation Army congregations.",
    category: "mobile",
    tags: ["Mobile App", "Faith & Culture", "Swahili Hymnal", "Offline First"],
    status: "live",
    statusLabel: "Live on Google Play",
    accentColor: "#dc2626",
    summary:
      "A digital Swahili hymnal and songbook application serving Salvation Army congregations with instant song search by number/title, offline access, and audio tunes.",
    challenge:
      "Congregations and choir leaders frequently lack physical songbooks or face difficulty searching specific Swahili hymns during worship services in areas with limited internet connectivity.",
    approach:
      "Engineered an offline-first Flutter application with instant full-text search indexing across hundreds of Swahili hymns, numerical lookup, favorites bookmarking, and low-memory footprint.",
    result:
      "Live on Google Play, giving worshippers and choir leaders across East Africa a searchable hymnal that works without internet.",
    metrics: [
      { label: "Language", value: "Swahili" },
      { label: "Works Offline", value: "Yes" },
    ],
    storeLinks: {
      playStore: "https://play.google.com/store/apps/details?id=com.shelnovalabs.nyimbozajeshilawokovu",
    },
    platforms: "Android",
    mockupType: "mobile",
    primaryBadge: "Faith & Localization",
  },
  {
    id: "career-ops",
    index: "09",
    name: "CareerOps",
    tagline: "AI-powered career operations engine & automated job search OS.",
    category: "open-source",
    tags: ["AI & Go", "Open Source", "CLI & Web", "Automation"],
    status: "live",
    statusLabel: "Open Source Project",
    accentColor: "#059669",
    summary:
      "An AI career operations platform built on Claude Code featuring 14 skill modes, a Go dashboard, PDF resume synthesis, and batch application processing.",
    challenge:
      "Job seekers waste dozens of hours tailoring CVs, managing applications across fragmented sites, and preparing for technical interviews without data feedback.",
    approach:
      "Developed a CLI + Web system written in Go and Node, executing multi-step LLM workflows for resume parsing, vacancy alignment scoring, and PDF generation.",
    result:
      "Published as an open-source project for developer productivity, demonstrating AI agent orchestration and CLI/Web dashboard integration.",
    metrics: [{ label: "Skill Modes", value: "14" }],
    storeLinks: {
      github: "https://github.com/Shamola-Shelton/career-ops",
    },
    platforms: "CLI, Web",
    mockupType: "dashboard",
    primaryBadge: "Open Source & AI Agent",
    imageSrc: "/images/career_ops.jpg",
  },
  {
    id: "shelnova-os",
    index: "10",
    name: "ShelNova OS (FlowDesk)",
    tagline: "All-in-one business operations, analytics, and revenue engine.",
    category: "saas",
    tags: ["Web App", "SaaS", "Dashboard", "Product Engineering"],
    status: "dev",
    statusLabel: "In Development",
    accentColor: "#06b6d4",
    summary:
      "A SaaS dashboard being built to manage digital products, monitor subscription revenue, automate customer support workflows, and track product health.",
    challenge:
      "Growing product studios need unified visibility into active users, recurring revenue, system uptime, and AI usage across multiple applications without juggling separate dashboards.",
    approach:
      "Architecting a Next.js App Router dashboard with Server Actions, role-based access control (RBAC), multi-tenant data isolation in PostgreSQL, and streaming charts for financial and usage analytics.",
    result:
      "In active development as the internal operations cockpit for ShelNova Labs products.",
    platforms: "Web",
    mockupType: "dashboard",
    primaryBadge: "SaaS & Product Engineering",
    imageSrc: "/images/shelnova_os.jpg",
  },
  {
    id: "gist-and-gain",
    index: "11",
    name: "Gist & Gain",
    tagline: "Learn more in less time through AI-curated audio & micro-insights.",
    category: "ai",
    tags: ["Mobile App", "AI & ML", "EdTech", "Content"],
    status: "dev",
    statusLabel: "In Development",
    accentColor: "#ec4899",
    summary:
      "An AI-powered self-improvement app delivering key book summaries, audio lessons, smart flashcards, and retention quizzes in Gist (5-min) and Deep (15-min) modes.",
    challenge:
      "Traditional learning summaries are static text. Learners want interactive audio micro-lessons that fit their commute and help them actually remember what they read.",
    approach:
      "Using LLM pipelines for key-takeaway extraction, text-to-speech for instant audio lessons, and spaced-repetition scheduling for flashcard reviews.",
    result:
      "In development: a mobile learning pipeline that turns long business and tech books into bite-sized audio and quiz formats.",
    metrics: [{ label: "Lesson Modes", value: "5 min · 15 min" }],
    platforms: "Android, iOS",
    mockupType: "mobile",
    primaryBadge: "EdTech & Microlearning",
    imageSrc: "/images/gist_gain.jpg",
  },
  {
    id: "greennexus",
    index: "12",
    name: "GreenNexus",
    tagline: "AI-powered environmental data & climate intelligence platform.",
    category: "web",
    tags: ["Web App", "AI & ClimateTech", "Open Data", "Environmental Analytics"],
    status: "dev",
    statusLabel: "In Development",
    accentColor: "#10b981",
    summary:
      "A climate data platform in development for analyzing regional environmental metrics, carbon monitoring, and sustainability compliance.",
    challenge:
      "Organizations and environmental researchers face fragmented climate datasets across government portals without unified analysis or actionable sustainability insights.",
    approach:
      "Building a Next.js + Python platform that ingests open satellite data, processes carbon metrics, and provides interactive geospatial dashboards.",
    result:
      "In development, aimed at giving sustainability researchers and policy teams one place to explore environmental data.",
    platforms: "Web",
    mockupType: "dashboard",
    primaryBadge: "AI & ClimateTech",
  },
];

export const teamMembers = [
  {
    name: "Shelton Shamola Juma",
    role: "Chief Executive Officer & Founder",
    tag: "CEO · FOUNDER",
    bio: "Visionary founder driving ShelNova Labs' strategic direction, product architecture, and engineering growth. Passionate about building software that creates real-world community impact.",
    color: "#635BFF",
    bg: "rgba(99,91,255,0.15)",
    initials: "SSJ",
  },
  {
    name: "Qabale Bonaya Roba",
    role: "Chief Technology Officer",
    tag: "CTO · ENGINEERING",
    bio: "Engineering leader overseeing technical infrastructure, cloud architecture, and technical excellence across all ShelNova Labs products.",
    color: "#06b6d4",
    bg: "rgba(6,182,212,0.15)",
    initials: "QBR",
  },
  {
    name: "Tom Kariuki",
    role: "Head of Design & UX",
    tag: "HEAD OF DESIGN",
    bio: "Crafting the visual language and user experience across ShelNova Labs' product suite — ensuring every interface is intuitive, fluid, and expensive-looking.",
    color: "#ec4899",
    bg: "rgba(236,72,153,0.15)",
    initials: "TK",
  },
  {
    name: "Bob Otieno",
    role: "Head of Growth & Operations",
    tag: "HEAD OF GROWTH",
    bio: "Driving user acquisition, strategic partnerships, and community engagement — bringing ShelNova Labs' apps to the people who need them most.",
    color: "#10b981",
    bg: "rgba(16,185,129,0.15)",
    initials: "BO",
  },
];

export const servicesData = [
  {
    index: "01",
    title: "Product Engineering",
    description:
      "From napkin idea to production-ready digital product. We handle full-lifecycle architecture, code quality, testing, and deployment.",
    icon: "Layers",
    slug: "product-engineering",
    seoTitle: "Product Engineering Company Nairobi | ShelNova Labs",
    metaDescription:
      "Full-lifecycle product engineering in Nairobi, Kenya — architecture, development, testing and deployment of reliable software products.",
    intro:
      "ShelNova Labs is a product engineering company in Nairobi, Kenya. We take products from idea to production, covering architecture, development, testing, deployment, and ongoing evolution.",
    whatWeBuild: [
      {
        title: "MVP Development",
        description: "Validate your idea fast with a lean, production-quality MVP you can ship to real users and investors.",
      },
      {
        title: "Full-Product Builds",
        description: "End-to-end construction of complex products with clean architecture, type-safe code, and automated testing.",
      },
      {
        title: "Platform Architecture",
        description: "Scalable system design — APIs, databases, cloud infrastructure, and CI/CD pipelines built to grow with you.",
      },
      {
        title: "Product Evolution",
        description: "Post-launch iteration driven by real usage data, performance optimization, and continuous feature releases.",
      },
    ],
    faqs: [
      {
        question: "How much does product engineering cost in Kenya?",
        answer:
          "Costs vary with scope and complexity. We typically scope fixed packages for MVPs and retainers for ongoing product work. Contact us for a tailored estimate.",
      },
      {
        question: "How long does it take to build a product?",
        answer:
          "A focused MVP usually ships in 6-12 weeks depending on scope. Larger platforms are phased into milestones so you see working software early.",
      },
    ],
    relatedProjectIds: ["shelnova-os", "career-ops"],
  },
  {
    index: "02",
    title: "Web Applications",
    description:
      "Fast, high-performance web platforms and SaaS dashboards built with Next.js, React, TypeScript, and modern backend infrastructure.",
    icon: "Globe",
    slug: "web-applications",
    seoTitle: "Web Application Development Kenya | ShelNova Labs",
    metaDescription:
      "Custom web applications and SaaS platforms built in Nairobi, Kenya with Next.js, React, Node.js and modern backend infrastructure.",
    intro:
      "ShelNova Labs builds custom web applications and SaaS platforms for businesses in Kenya and worldwide. From dashboards to marketplaces, we engineer fast, scalable, maintainable web products.",
    whatWeBuild: [
      {
        title: "SaaS Platforms",
        description: "Multi-tenant software products with subscription billing, role-based access, and real-time collaboration.",
      },
      {
        title: "Business Dashboards",
        description: "Operational cockpits that stream live analytics, usage metrics, and decision intelligence to leadership teams.",
      },
      {
        title: "Portals & Marketplaces",
        description: "Customer portals, vendor marketplaces, and two-sided platforms engineered for reliability and scale.",
      },
      {
        title: "Custom Web Applications",
        description: "Internal tools and line-of-business applications tailored to your organization's exact workflows.",
      },
    ],
    faqs: [
      {
        question: "What technologies do you use for web applications?",
        answer:
          "We build with Next.js, React, and TypeScript on the frontend, and Node.js, Laravel, or Go on the backend — with PostgreSQL, Redis, and cloud infrastructure on AWS or Vercel.",
      },
      {
        question: "Do you build e-commerce websites?",
        answer:
          "Yes. We build custom e-commerce and marketplace platforms with secure payments, inventory management, and admin consoles tailored to your business.",
      },
    ],
    relatedProjectIds: ["shelnova-os", "greennexus"],
  },
  {
    index: "03",
    title: "Mobile Applications",
    description:
      "Native-grade iOS and Android mobile apps engineered with Flutter and React Native for fluid 60 FPS user experiences.",
    icon: "Smartphone",
    slug: "mobile-applications",
    seoTitle: "Mobile App Development Kenya | ShelNova Labs",
    metaDescription:
      "Android and iOS app development in Nairobi, Kenya with Flutter. Business, consumer, e-commerce, and educational mobile applications.",
    intro:
      "ShelNova Labs designs and develops modern mobile applications for Android and iOS. We build apps for startups, businesses, and organizations using Flutter and user-focused design.",
    whatWeBuild: [
      {
        title: "Business Applications",
        description: "Operational apps that streamline field work, approvals, inventory, and internal communication.",
      },
      {
        title: "Consumer Applications",
        description: "Beautiful, engaging consumer apps with onboarding, push notifications, and social features.",
      },
      {
        title: "E-commerce Applications",
        description: "Mobile shopping experiences with secure payments, order tracking, and local delivery integration.",
      },
      {
        title: "Educational & Community Applications",
        description: "Learning, faith, and community platforms — including offline-first apps for low-connectivity regions.",
      },
    ],
    faqs: [
      {
        question: "Do you build for both Android and iOS?",
        answer:
          "Yes. We use Flutter to deliver a single codebase that runs natively on both Android and iOS, cutting time and cost in half.",
      },
      {
        question: "Can the app work offline?",
        answer:
          "Yes. We build offline-first apps where needed, using local storage and sync engines — ideal for regions with unreliable connectivity.",
      },
    ],
    relatedProjectIds: ["sancta", "biblewise", "kadi-party", "pupgrid", "wordnova", "nyimbo-za-jeshi"],
  },
  {
    index: "04",
    title: "AI & Intelligent Systems",
    description:
      "Custom AI integrations, LLM workflows, RAG search pipelines, intelligent search engines, and smart automated agent systems.",
    icon: "Cpu",
    slug: "ai-intelligent-systems",
    seoTitle: "AI Development Company Kenya | ShelNova Labs",
    metaDescription:
      "Custom AI development in Nairobi, Kenya — LLM integrations, RAG pipelines, intelligent agents, and AI-powered product features.",
    intro:
      "ShelNova Labs builds AI-powered features and intelligent systems. From LLM integrations to RAG search pipelines, we engineer AI that is reliable, useful, and production-ready.",
    whatWeBuild: [
      {
        title: "AI Coaches & Assistants",
        description: "Conversational AI experiences grounded in your content with structured, verified answers.",
      },
      {
        title: "RAG & Intelligent Search",
        description: "Retrieval-augmented generation pipelines that search your data and answer with citations.",
      },
      {
        title: "AI Agents & Automation",
        description: "Multi-step automated workflows for document processing, job matching, and operations.",
      },
      {
        title: "Predictive Analytics",
        description: "ML models for forecasting, scoring, and classification applied to real business data.",
      },
    ],
    faqs: [
      {
        question: "What AI technologies do you use?",
        answer:
          "We work with OpenAI, Anthropic Claude, vector embeddings, RAG pipelines, and PyTorch — integrated into products with Node.js, Python, or Go backends.",
      },
      {
        question: "Can you add AI to an existing product?",
        answer:
          "Yes. We integrate AI features into existing apps and platforms, adding assistants, search, and automation without a rewrite.",
      },
    ],
    relatedProjectIds: ["biblewise", "gist-and-gain", "greennexus", "career-ops"],
  },
  {
    index: "05",
    title: "UI/UX & Product Design",
    description:
      "Clean, intuitive, expensive-looking interface designs engineered around user ergonomics, speed, clarity, and conversion.",
    icon: "Layout",
    slug: "uiux-product-design",
    seoTitle: "UI/UX Design Company Kenya | ShelNova Labs",
    metaDescription:
      "Product design and UI/UX services in Nairobi, Kenya — interfaces engineered for clarity, speed, and conversion.",
    intro:
      "ShelNova Labs designs clean, intuitive interfaces engineered around user ergonomics, speed, clarity, and conversion. We turn complex workflows into simple, elegant experiences.",
    whatWeBuild: [
      {
        title: "Product UX Strategy",
        description: "User research, journeys, and information architecture that shape what you build.",
      },
      {
        title: "UI Design & Design Systems",
        description: "High-fidelity interfaces and reusable design systems that keep your product consistent as it scales.",
      },
      {
        title: "Prototyping & Testing",
        description: "Clickable prototypes validated with users before a single line of production code is written.",
      },
      {
        title: "Design Engineering",
        description: "Pixel-perfect implementation of designs in code, so what ships matches what was designed.",
      },
    ],
    faqs: [
      {
        question: "Do you offer design and development together?",
        answer:
          "Yes. Most projects include design and engineering in one workflow, which keeps the product consistent and speeds up delivery.",
      },
    ],
    relatedProjectIds: ["kadi-party", "jiranify", "biblewise"],
  },
  {
    index: "06",
    title: "Maintenance & Scale",
    description:
      "Performance optimization, database refactoring, security audits, automated testing pipelines, and long-term product evolution.",
    icon: "ShieldCheck",
    slug: "maintenance-scale",
    seoTitle: "Software Maintenance & Support Kenya | ShelNova Labs",
    metaDescription:
      "Website and app maintenance, performance optimization, bug fixing, and security audits for businesses in Kenya and worldwide.",
    intro:
      "ShelNova Labs keeps existing products healthy. We diagnose and fix bugs, optimize performance, harden security, and evolve your software as your business grows.",
    whatWeBuild: [
      {
        title: "Bug Fixing & Reliability",
        description: "Rapid diagnosis and resolution of issues in your existing websites and applications.",
      },
      {
        title: "Performance Optimization",
        description: "Speed up slow pages, databases, and APIs with profiling, caching, and refactoring.",
      },
      {
        title: "Security Audits & Hardening",
        description: "Identify vulnerabilities, patch them, and add automated guardrails to your deployment.",
      },
      {
        title: "Feature Evolution",
        description: "Continuous product improvement — new features, integrations, and infrastructure upgrades.",
      },
    ],
    faqs: [
      {
        question: "Can you maintain software built by another team?",
        answer:
          "Yes. We take on existing codebases, audit their quality, fix bugs, and provide ongoing maintenance regardless of who built them.",
      },
    ],
    relatedProjectIds: ["shelnova-os", "career-ops"],
  },
];

export const workflowSteps = [
  {
    number: "01",
    title: "DISCOVER",
    subtitle: "Understand problem, target users, and technical scope.",
    description:
      "We dive deep into your business objectives, target audience requirements, and existing infrastructure to define a sharp product blueprint.",
  },
  {
    number: "02",
    title: "DESIGN",
    subtitle: "Define product experience and system architecture.",
    description:
      "We craft high-fidelity UI wireframes, establish interactive design systems, and model robust API schemas before writing code.",
  },
  {
    number: "03",
    title: "BUILD",
    subtitle: "Engineer with modern frameworks and rigorous testing.",
    description:
      "Our team writes clean, modular, type-safe code using Next.js, Flutter, Go, and Laravel with continuous integration and automated testing.",
  },
  {
    number: "04",
    title: "LAUNCH",
    subtitle: "Deploy, verify performance, and release to real users.",
    description:
      "We orchestrate seamless cloud deployments (Vercel, AWS, Firebase), monitor error metrics, and launch your product cleanly.",
  },
  {
    number: "05",
    title: "IMPROVE",
    subtitle: "Measure analytics, optimize speed, and evolve features.",
    description:
      "Post-launch, we analyze real-world telemetry, refine user conversion funnels, and ship iterative feature updates.",
  },
];

export const techStackData = [
  {
    category: "Frontend Frameworks",
    items: ["React 19", "Next.js 16", "Flutter", "TypeScript", "Tailwind CSS v4"],
  },
  {
    category: "Backend & APIs",
    items: ["Laravel", "Node.js", "Go", "Python", "REST & WebSockets"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "Firebase", "Vercel", "Cloudflare", "Docker"],
  },
  {
    category: "Databases & Storage",
    items: ["PostgreSQL", "MySQL", "Firestore", "Redis", "SQLite"],
  },
  {
    category: "AI & Machine Learning",
    items: ["OpenAI API", "Claude / Anthropic", "Vector Embeddings", "RAG Pipelines", "PyTorch"],
  },
  {
    category: "Engineering Tools",
    items: ["Git & GitHub", "GitHub Actions CI/CD", "Jest / Vitest", "Turbopack", "Postman"],
  },
];
