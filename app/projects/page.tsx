import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import JsonLd from "@/components/JsonLd";
import { projectsData } from "@/data/projectsData";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | ShelNova Labs",
  description:
    "Case studies from ShelNova Labs — mobile apps, web platforms, SaaS products, and AI systems we have designed and engineered from Nairobi, Kenya.",
  openGraph: {
    title: "Our Work & Case Studies | ShelNova Labs",
    description:
      "Mobile apps, web platforms, SaaS products, and AI systems built by ShelNova Labs.",
    url: "https://shelnovalabs.com/projects",
  },
};

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projectsData.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "SoftwareApplication",
        name: p.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, Android, iOS",
        url: `https://shelnovalabs.com/projects/${p.id}`,
        description: p.summary,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F5F2] selection:bg-[#635BFF]/30 selection:text-[#F5F5F2]">
      <JsonLd data={jsonLd} />
      <Navbar />
      <main id="main" className="pt-28 pb-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono tracking-widest text-snl-accent uppercase">
              OUR WORK
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-snl-text leading-[1.08] mt-4">
              Projects &amp; Case Studies
            </h1>
            <p className="text-snl-muted text-base sm:text-xl mt-6 leading-relaxed">
              A selection of products, platforms, and experiences we&apos;ve designed
              and engineered for businesses, organizations, and communities.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group bg-[#0D0F12] border border-snl-border hover:border-snl-accent/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
              >
                {project.imageSrc ? (
                  <div className="relative w-full h-48 overflow-hidden border-b border-snl-border">
                    <Image
                      src={project.imageSrc}
                      alt={`${project.name} product`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 border-b border-snl-border flex items-center justify-center bg-snl-card">
                    <span
                      className="font-heading font-bold text-5xl"
                      style={{ color: project.accentColor }}
                    >
                      {project.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-snl-accent">
                      {project.index}
                    </span>
                    <span className="text-[11px] font-mono text-snl-muted uppercase">
                      {project.statusLabel}
                    </span>
                  </div>
                  <h2 className="font-heading text-xl font-bold text-snl-text group-hover:text-snl-accent transition-colors">
                    {project.name}
                  </h2>
                  <p className="text-snl-muted text-sm mt-1.5 leading-relaxed">
                    {project.tagline}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-mono text-snl-accent mt-4">
                    View case study
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <section className="mt-20 bg-snl-card border border-snl-border rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
              Want us to build your product?
            </h2>
            <p className="text-snl-muted mt-3 max-w-xl mx-auto">
              From idea to deployment — let&apos;s create something worth using.
            </p>
            <a
              href="mailto:hello@shelnovalabs.com"
              className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-snl-accent hover:bg-snl-accent-hover text-white rounded-full font-medium text-sm tracking-wide transition-colors"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </a>
          </section>
        </div>
      </main>
      <ContactCTA />
      <Footer />
    </div>
  );
}