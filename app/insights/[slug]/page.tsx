import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Calendar,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import JsonLd from "@/components/JsonLd";
import {
  insightsArticles,
  InsightArticle,
} from "@/data/insightsData";
import { servicesData, projectsData } from "@/data/projectsData";
import ArticleWebsiteCostContent from "@/components/insights/ArticleWebsiteCostContent";
import ArticleMobileCostContent from "@/components/insights/ArticleMobileCostContent";
import ArticleWebsiteVsWebAppContent from "@/components/insights/ArticleWebsiteVsWebAppContent";
import ArticleBibleWiseCaseStudyContent from "@/components/insights/ArticleBibleWiseCaseStudyContent";

export function generateStaticParams() {
  return insightsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = insightsArticles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `https://shelnovalabs.com/insights/${article.slug}`,
    },
    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
      url: `https://shelnovalabs.com/insights/${article.slug}`,
      type: "article",
      publishedTime: article.publishedDate,
      authors: [article.author.name],
      siteName: "ShelNova Labs",
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.metaDescription,
      creator: "@shelnovalabs",
    },
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = insightsArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const relatedServices = servicesData.filter((s) =>
    article.relatedServiceSlugs?.includes(s.slug)
  );

  const relatedProjects = projectsData.filter((p) =>
    article.relatedProjectIds?.includes(p.id)
  );

  // Structured Data Schemas
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://shelnovalabs.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Insights",
        item: "https://shelnovalabs.com/insights",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://shelnovalabs.com/insights/${article.slug}`,
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.metaDescription,
    datePublished: `${article.publishedDate}T00:00:00+03:00`,
    dateModified: `${article.publishedDate}T00:00:00+03:00`,
    mainEntityOfPage: `https://shelnovalabs.com/insights/${article.slug}`,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
      worksFor: {
        "@type": "Organization",
        name: "ShelNova Labs",
      },
      url: article.author.linkedin || "https://shelnovalabs.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "ShelNova Labs",
      logo: {
        "@type": "ImageObject",
        url: "https://shelnovalabs.com/images/logo.png",
      },
    },
    articleSection: article.category,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F5F2] selection:bg-[#635BFF]/30 selection:text-[#F5F5F2]">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={articleJsonLd} />
      <JsonLd data={faqJsonLd} />
      <Navbar />

      <main id="main" className="pt-28 pb-20 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs font-mono text-snl-subtle mb-8">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link href="/" className="hover:text-snl-text transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/insights" className="hover:text-snl-text transition-colors">
                  Insights
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-snl-accent truncate max-w-xs sm:max-w-none">
                {article.title}
              </li>
            </ol>
          </nav>

          {/* Article Header & Hero */}
          <header className="space-y-6 pb-12 border-b border-snl-border">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-semibold text-snl-accent uppercase tracking-wider bg-snl-accent/10 px-3 py-1 rounded-md border border-snl-accent/20">
                {article.category}
              </span>
              <span className="text-xs font-mono text-snl-subtle flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
              <span className="text-xs font-mono text-snl-subtle flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.displayDate}
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-snl-text leading-[1.12]">
              {article.title}
            </h1>

            <p className="text-snl-muted text-lg sm:text-xl leading-relaxed">
              {article.lead}
            </p>

            {/* Author Profile Bar */}
            <div className="flex items-center gap-3.5 pt-2">
              <div className="w-11 h-11 rounded-full bg-snl-accent/20 border border-snl-accent/40 text-snl-accent flex items-center justify-center font-heading font-bold text-sm">
                {article.author.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-snl-text">
                  {article.author.name}
                </p>
                <p className="text-xs text-snl-muted font-mono">
                  {article.author.role} · {article.author.company}
                </p>
              </div>
            </div>
          </header>

          {/* Grid Layout: TOC & Article Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">
            {/* Main Content Area */}
            <article className="lg:col-span-8 space-y-14 text-[#D1D5DB] leading-relaxed">
              
              {/* Mobile Table of Contents */}
              <div className="lg:hidden bg-[#0D0F12] border border-snl-border rounded-xl p-5">
                <p className="font-mono text-xs uppercase font-bold text-snl-text tracking-wider mb-3">
                  Table of Contents
                </p>
                <ul className="space-y-2 text-sm text-snl-muted">
                  {article.toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="hover:text-snl-accent transition-colors flex items-center gap-1.5"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-snl-accent shrink-0" />
                        <span>{item.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dynamic Article Body Component */}
              {article.slug === "website-development-cost-kenya" && (
                <ArticleWebsiteCostContent />
              )}
              {article.slug === "mobile-app-development-cost-kenya" && (
                <ArticleMobileCostContent />
              )}
              {article.slug === "website-vs-web-app-difference" && (
                <ArticleWebsiteVsWebAppContent />
              )}
              {article.slug === "how-we-built-biblewise" && (
                <ArticleBibleWiseCaseStudyContent />
              )}

              {/* Section: Frequently Asked Questions */}
              <section id="frequently-asked-questions" className="space-y-6 scroll-mt-28">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {article.faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="group bg-[#0D0F12] border border-snl-border rounded-xl p-5"
                    >
                      <summary className="font-heading font-bold text-snl-text cursor-pointer list-none flex items-center justify-between gap-4 text-sm sm:text-base">
                        <span>{faq.question}</span>
                        <span className="text-snl-accent text-lg font-mono transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="text-snl-muted text-xs sm:text-sm mt-3 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Author Bio Footer Box */}
              <div className="bg-[#0D0F12] border border-snl-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-snl-accent/20 border-2 border-snl-accent text-snl-accent flex items-center justify-center font-heading font-bold text-xl shrink-0">
                  {article.author.initials}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading font-bold text-snl-text text-lg">
                      Written by {article.author.name}
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-snl-accent">
                    {article.author.role} · {article.author.company}
                  </p>
                  <p className="text-xs text-snl-muted leading-relaxed">
                    {article.author.bio}
                  </p>
                  <div className="flex items-center gap-4 pt-1 text-xs text-snl-subtle font-mono">
                    {article.author.linkedin && (
                      <a
                        href={article.author.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-snl-text transition-colors flex items-center gap-1"
                      >
                        LinkedIn <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    {article.author.twitter && (
                      <a
                        href={article.author.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-snl-text transition-colors flex items-center gap-1"
                      >
                        X (Twitter) <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* In-Article Conversion CTA */}
              <section className="bg-gradient-to-br from-[#111318] via-[#0D0F12] to-[#08090B] border border-snl-border hover:border-snl-accent/50 rounded-2xl p-8 sm:p-10 text-center space-y-5 transition-all">
                <span className="text-xs font-mono text-snl-accent font-semibold tracking-wider uppercase">
                  START A PROJECT WITH SHELNOVA LABS
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
                  Have a digital product in mind?
                </h2>
                <p className="text-snl-muted text-sm sm:text-base max-w-xl mx-auto">
                  Whether you are starting from an idea or scaling an existing mobile or web product, ShelNova Labs can help you design, build, and launch it.
                </p>
                <div className="pt-2">
                  <a
                    href="mailto:hello@shelnovalabs.com"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-snl-accent hover:bg-snl-accent-hover text-white rounded-full font-semibold text-sm tracking-wide uppercase transition-all duration-200 shadow-xl shadow-snl-accent/25 hover:scale-105"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </section>

            </article>

            {/* Desktop Sticky Sidebar */}
            <aside className="hidden lg:block lg:col-span-4 space-y-8">
              <div className="sticky top-28 space-y-8">
                {/* Table of Contents */}
                <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-6">
                  <h4 className="font-mono text-xs font-bold text-snl-text uppercase tracking-wider mb-4">
                    Table of Contents
                  </h4>
                  <nav>
                    <ul className="space-y-2.5 text-xs text-snl-muted">
                      {article.toc.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="hover:text-snl-accent transition-colors block py-0.5"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Related Services Box */}
                {relatedServices.length > 0 && (
                  <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-6 space-y-3">
                    <h4 className="font-mono text-xs font-bold text-snl-text uppercase tracking-wider">
                      Related Services
                    </h4>
                    <div className="space-y-2.5">
                      {relatedServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="group block p-2.5 rounded-lg bg-[#111318] border border-snl-border/60 hover:border-snl-accent/40 transition-colors"
                        >
                          <p className="text-xs font-semibold text-snl-text group-hover:text-snl-accent transition-colors">
                            {service.title}
                          </p>
                          <p className="text-[11px] text-snl-muted line-clamp-1 mt-0.5">
                            {service.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Related Work Box */}
                {relatedProjects.length > 0 && (
                  <div className="bg-[#0D0F12] border border-snl-border rounded-xl p-6 space-y-3">
                    <h4 className="font-mono text-xs font-bold text-snl-text uppercase tracking-wider">
                      Featured Work
                    </h4>
                    <div className="space-y-2.5">
                      {relatedProjects.map((proj) => (
                        <Link
                          key={proj.id}
                          href={`/projects/${proj.id}`}
                          className="group block p-2.5 rounded-lg bg-[#111318] border border-snl-border/60 hover:border-snl-accent/40 transition-colors"
                        >
                          <p className="text-xs font-semibold text-snl-text group-hover:text-snl-accent transition-colors">
                            {proj.name}
                          </p>
                          <p className="text-[11px] text-snl-muted line-clamp-1 mt-0.5">
                            {proj.tagline}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>

      <ContactCTA />
      <Footer />
    </div>
  );
}
