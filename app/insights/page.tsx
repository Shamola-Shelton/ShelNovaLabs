import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import JsonLd from "@/components/JsonLd";
import InsightsFeed from "@/components/InsightsFeed";
import { insightsArticles } from "@/data/insightsData";

export const metadata: Metadata = {
  title: "Insights | ShelNova Labs — Technical Guides & Product Engineering",
  description:
    "Ideas, technical guides, architectural breakdowns, and lessons from building digital products, web apps, and mobile platforms.",
  alternates: {
    canonical: "https://shelnovalabs.com/insights",
  },
  openGraph: {
    title: "Insights | ShelNova Labs",
    description:
      "Ideas, technical guides, and lessons from building digital products in Kenya and worldwide.",
    url: "https://shelnovalabs.com/insights",
    siteName: "ShelNova Labs",
    type: "website",
  },
};

export default function InsightsPage() {
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
    ],
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F5F2] selection:bg-[#635BFF]/30 selection:text-[#F5F5F2]">
      <JsonLd data={breadcrumbJsonLd} />
      <Navbar />

      <main id="main" className="pt-32 pb-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header Section */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono tracking-widest text-snl-accent uppercase">
              KNOWLEDGE &amp; ENGINEERING / INSIGHTS
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-snl-text leading-[1.08]">
              Insights
            </h1>
            <p className="text-snl-muted text-lg sm:text-xl leading-relaxed pt-2">
              Ideas, technical guides and lessons from building digital products.
            </p>
          </div>

          {/* Interactive Articles Feed */}
          <InsightsFeed articles={insightsArticles} />
        </div>
      </main>

      <ContactCTA />
      <Footer />
    </div>
  );
}
