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
];
