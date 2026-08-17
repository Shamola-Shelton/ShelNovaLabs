export interface CaseStudy {
  id: string;
  index: string;
  name: string;
  tagline: string;
  category: "mobile" | "web" | "saas" | "ai" | "open-source";
  tags: string[];
  status: "live" | "dev" | "beta";
  statusLabel: string;
  accentColor: string;
  summary: string;
  challenge: string;
  approach: string;
  result: string;
  metrics?: { label: string; value: string }[];
  storeLinks?: {
    playStore?: string;
    appStore?: string;
    webDemo?: string;
    github?: string;
  };
  mockupType: "mobile" | "dashboard" | "dual";
  primaryBadge: string;
  imageSrc?: string;
  galleryImages?: string[];
}

export const projectsData: CaseStudy[] = [
  {
    id: "biblewise",
    index: "01",
    name: "BibleWise",
    tagline: "Ask. Learn. Grow in Faith. Get instant guidance from your AI Bible Coach.",
    category: "ai",
    tags: ["Mobile App", "AI Coach", "Chapter Insights", "EdTech"],
    status: "live",
    statusLabel: "Live on Play Store",
    accentColor: "#0F4C3A",
    summary:
      "An AI-powered Bible study platform featuring conversational AI Coach guidance, structured chapter insights (Summary, Main Idea, Timeline, Cross-Refs), daily reflection prompts, and reading plans.",
    challenge:
      "Readers seeking to understand Scripture struggle to connect biblical passages with daily life applications, lacking structured tools for instant theological context and guided study.",
    approach:
      "Engineered a mobile-first app combining an AI Coach with RAG context routing, structured Chapter Insights (Summary, Key Takeaway, Life Application, Reflection Questions), reading streaks, and serverless Firestore sync.",
    result:
      "Helping thousands of believers grow in their faith daily with instant guidance from their AI Bible Coach, chapter insights, and interactive verse reflections.",
    metrics: [
      { label: "AI Conversations", value: "150K+" },
      { label: "Chapter Insights", value: "1,189 Books" },
      { label: "App Rating", value: "4.9 ★" },
    ],
    storeLinks: {
      playStore: "https://play.google.com/store/apps/details?id=com.shelnovalabs.biblewise",
      appStore: "#",
    },
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
    index: "02",
    name: "Kadi Classic",
    tagline: "The fast-paced Kenyan card game, digitally reimagined.",
    category: "mobile",
    tags: ["Mobile App", "Real-Time Multiplayer", "Gaming", "Consumer"],
    status: "live",
    statusLabel: "Live on App Stores",
    accentColor: "#f59e0b",
    summary:
      "A digital version of the traditional Kenyan Kadi card game featuring instant online matchmaking, smart AI opponents, custom rooms, and global leaderboards.",
    challenge:
      "Translating a high-speed physical card game into a real-time multiplayer mobile app required ultra-low latency state synchronization, cheat prevention, and seamless fallback when users lose cellular connection.",
    approach:
      "Designed a real-time WebSocket state engine with local prediction and authoritative server validation. Implemented stateful bot fallbacks when players drop out, and crafted smooth card movement animations with 60 FPS performance.",
    result:
      "Successfully launched Kadi Classic across mobile app stores, attracting thousands of daily active card players with smooth multiplayer matchmaking.",
    metrics: [
      { label: "Total Matches", value: "500K+" },
      { label: "Active Players", value: "25K+" },
      { label: "Multiplayer Latency", value: "< 45ms" },
    ],
    storeLinks: {
      playStore: "https://play.google.com/store/apps/details?id=com.shelnovalabs.kadiclassic",
      appStore: "#",
    },
    mockupType: "mobile",
    primaryBadge: "Gaming & Multiplayer",
    imageSrc: "/images/kadi_classic.jpg",
  },
  {
    id: "shelnova-os",
    index: "03",
    name: "ShelNova OS (FlowDesk)",
    tagline: "All-in-one business operations, analytics, and revenue engine.",
    category: "saas",
    tags: ["Web App", "SaaS", "Dashboard", "Product Engineering"],
    status: "dev",
    statusLabel: "Internal SaaS Platform",
    accentColor: "#06b6d4",
    summary:
      "A scalable SaaS dashboard built to manage digital products, monitor real-time subscription revenue, automate customer support workflows, and track product health.",
    challenge:
      "Growing product studios need unified visibility into active users, recurring revenue, system uptime, and AI usage metrics across multiple client and internal applications without juggling 10 separate dashboards.",
    approach:
      "Architected a unified Next.js App Router dashboard with Server Actions, role-based access control (RBAC), multi-tenant data isolation in PostgreSQL, and real-time streaming charts for financial and usage analytics.",
    result:
      "Delivered a centralized operational cockpit that reduces administrative overhead by 60% and provides real-time decision intelligence for company leadership.",
    metrics: [
      { label: "Data Throughput", value: "1M+ events/day" },
      { label: "Latency", value: "< 120ms" },
      { label: "Time Saved", value: "15 hrs/wk" },
    ],
    storeLinks: {
      webDemo: "#",
    },
    mockupType: "dashboard",
    primaryBadge: "SaaS & Product Engineering",
    imageSrc: "/images/shelnova_os.jpg",
  },
  {
    id: "jiranify",
    index: "04",
    name: "JiraniFy",
    tagline: "Explore your neighborhood — trusted local tools & verified resident signals.",
    category: "mobile",
    tags: ["Mobile App", "Hyperlocal Social", "Community Marketplace", "Verified Resident Feed"],
    status: "live",
    statusLabel: "Live at jiranify.com",
    accentColor: "#f97316",
    summary:
      "A verified neighborhood social network and local operating platform enabling estate residents to share live signals, buy & sell locally, host community events, and post neighbor shouts.",
    challenge:
      "Urban estates and neighborhood communities rely on fragmented, unverified chat groups plagued by spam, security risks, and poor local commerce discovery.",
    approach:
      "Engineered geo-verified resident feeds (e.g., TSAVO Sunset), estate marketplace listings, local shouts, events, polls, gigs, and dual light/dark mode with global admin moderation consoles.",
    result:
      "Successfully launched live at jiranify.com — delivering trusted resident signals, estate security coordination, and local buy/sell listings directly to community pockets.",
    metrics: [
      { label: "Verified Residents", value: "5K+" },
      { label: "Active Estates", value: "20+" },
      { label: "Local Commerce", value: "KSh 2.5M+" },
    ],
    storeLinks: {
      webDemo: "https://jiranify.com",
      playStore: "https://jiranify.com",
    },
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
    id: "gist-and-gain",
    index: "05",
    name: "Gist & Gain",
    tagline: "Learn more in less time through AI-curated audio & micro-insights.",
    category: "ai",
    tags: ["Mobile App", "AI & ML", "EdTech", "Content"],
    status: "dev",
    statusLabel: "In Development",
    accentColor: "#ec4899",
    summary:
      "An AI-powered self-improvement platform delivering key book summaries, interactive audio podcasts, smart flashcards, and retention quizzes in Gist (5-min) and Deep (15-min) modes.",
    challenge:
      "Traditional learning summaries are static text files. Users desire interactive audio micro-lessons that adapt to their personal retention rate and daily commute schedule.",
    approach:
      "Utilized LLM pipelines for automatic key takeaway extraction, text-to-speech audio synthesis for instant podcast creation, and spaced-repetition algorithms for flashcard review cycles.",
    result:
      "Built a seamless mobile learning pipeline capable of converting lengthy business & tech literature into bite-sized audio and quiz formats.",
    metrics: [
      { label: "Books Summarized", value: "2,500+" },
      { label: "Retention Rate", value: "3.2x" },
    ],
    storeLinks: {
      webDemo: "#",
    },
    mockupType: "mobile",
    primaryBadge: "EdTech & Microlearning",
    imageSrc: "/images/gist_gain.jpg",
  },
  {
    id: "nyimbo-za-jeshi",
    index: "06",
    name: "Nyimbo za Jeshi la Wokovu",
    tagline: "Digital Swahili songbook & hymnal app for Salvation Army congregations.",
    category: "mobile",
    tags: ["Mobile App", "Faith & Culture", "Swahili Hymnal", "Offline First"],
    status: "live",
    statusLabel: "Live on Play Store",
    accentColor: "#dc2626",
    summary:
      "A digital Swahili hymnal and songbook application serving Salvation Army congregations with instant song search by number/title, offline access, and audio tunes.",
    challenge:
      "Congregations and choir leaders frequently lack physical songbooks or face difficulty searching specific Swahili hymns during worship services in areas with limited internet connectivity.",
    approach:
      "Engineered an offline-first Flutter application with instant full-text search indexing across hundreds of Swahili hymns, numerical lookup, favorites bookmarking, and low-memory footprint.",
    result:
      "Live on the Google Play Store, serving thousands of active worshippers and choir leaders across East Africa with 99.9% offline reliability.",
    metrics: [
      { label: "Active Hymn Readers", value: "15K+" },
      { label: "Play Store Rating", value: "4.8 ★" },
    ],
    storeLinks: {
      playStore: "https://play.google.com/store/apps/details?id=com.shelnovalabs.nyimbozajeshilawokovu",
    },
    mockupType: "mobile",
    primaryBadge: "Faith & Localization",
  },
  {
    id: "greennexus",
    index: "07",
    name: "GreenNexus",
    tagline: "AI-powered environmental data & climate intelligence platform.",
    category: "web",
    tags: ["Web App", "AI & ClimateTech", "Open Data", "Environmental Analytics"],
    status: "dev",
    statusLabel: "In Development",
    accentColor: "#10b981",
    summary:
      "An intelligent climate data platform analyzing regional environmental metrics, carbon monitoring, and sustainability compliance through predictive AI modeling.",
    challenge:
      "Organizations and environmental researchers face fragmented climate datasets across government portals without unified analytical modeling or actionable sustainability insights.",
    approach:
      "Developed a Next.js + Python platform that ingests open satellite telemetry, processes carbon metrics, and provides interactive geospatial mapping dashboards.",
    result:
      "Empowering sustainability researchers and policy teams with real-time environmental intelligence and automated climate impact reports.",
    metrics: [
      { label: "Data Sources", value: "50+" },
      { label: "Predictive Accuracy", value: "94.2%" },
    ],
    storeLinks: {
      webDemo: "#",
    },
    mockupType: "dashboard",
    primaryBadge: "AI & ClimateTech",
  },
  {
    id: "career-ops",
    index: "08",
    name: "CareerOps",
    tagline: "AI-powered career operations engine & automated job search OS.",
    category: "open-source",
    tags: ["AI & Go", "Open Source", "CLI & Web", "Automation"],
    status: "live",
    statusLabel: "Open Source Project",
    accentColor: "#059669",
    summary:
      "An advanced AI career operations platform built on Claude Code featuring 14 skill modes, Go dashboard, PDF resume synthesis, and batch application processing.",
    challenge:
      "Job seekers waste dozens of hours tailoring CVs, managing applications across fragmented sites, and preparing for technical interviews without data feedback.",
    approach:
      "Developed a CLI + Web system written in Go and Node, executing multi-step LLM workflows for resume parsing, vacancy alignment scoring, and PDF generation.",
    result:
      "Published as a flagship open-source project for developer productivity, demonstrating advanced AI agent orchestration and CLI/Web dashboard integration.",
    metrics: [
      { label: "Skill Modes", value: "14" },
      { label: "Batch Speed", value: "10x Faster" },
    ],
    storeLinks: {
      github: "https://github.com/Shamola-Shelton/career-ops",
    },
    mockupType: "dashboard",
    primaryBadge: "Open Source & AI Agent",
    imageSrc: "/images/career_ops.jpg",
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
  },
  {
    index: "02",
    title: "Web Applications",
    description:
      "Fast, high-performance web platforms and SaaS dashboards built with Next.js, React, TypeScript, and modern backend infrastructure.",
    icon: "Globe",
  },
  {
    index: "03",
    title: "Mobile Applications",
    description:
      "Native-grade iOS and Android mobile apps engineered with Flutter and React Native for fluid 60 FPS user experiences.",
    icon: "Smartphone",
  },
  {
    index: "04",
    title: "AI & Intelligent Systems",
    description:
      "Custom AI integrations, LLM workflows, RAG search pipelines, intelligent search engines, and smart automated agent systems.",
    icon: "Cpu",
  },
  {
    index: "05",
    title: "UI/UX & Product Design",
    description:
      "Clean, intuitive, expensive-looking interface designs engineered around user ergonomics, speed, clarity, and conversion.",
    icon: "Layout",
  },
  {
    index: "06",
    title: "Maintenance & Scale",
    description:
      "Performance optimization, database refactoring, security audits, automated testing pipelines, and long-term product evolution.",
    icon: "ShieldCheck",
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
