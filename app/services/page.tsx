import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { servicesData } from "@/data/projectsData";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Software Development Services in Kenya | ShelNova Labs",
  description:
    "Web development, mobile app development, SaaS platforms, AI systems, product design, and software maintenance from ShelNova Labs in Nairobi, Kenya.",
  openGraph: {
    title: "Software Development Services in Kenya | ShelNova Labs",
    description:
      "Web development, mobile app development, SaaS platforms, AI systems, product design, and software maintenance from ShelNova Labs.",
    url: "https://shelnovalabs.com/services",
  },
};

const iconMap = {
  Layers: "bg-snl-accent/10 text-snl-accent border-snl-accent/20",
  Globe: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Smartphone: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  Cpu: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  Layout: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  ShieldCheck: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: servicesData.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        url: `https://shelnovalabs.com/services/${s.slug}`,
        serviceType: s.title,
        areaServed: "KE",
        provider: {
          "@type": "Organization",
          name: "ShelNova Labs",
          url: "https://shelnovalabs.com",
        },
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
              SERVICES
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-snl-text leading-[1.08] mt-4">
              Software Development Services
            </h1>
            <p className="text-snl-muted text-base sm:text-xl mt-6 leading-relaxed">
              We design and build reliable digital products from idea to deployment.
              Web development, mobile apps, SaaS platforms, and AI systems for
              businesses in Kenya and worldwide.
            </p>
          </div>

          {/* Service List */}
          <div className="space-y-6">
            {servicesData.map((service) => {
              const colorClass = iconMap[service.icon as keyof typeof iconMap] || iconMap.Layers;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-center gap-6 bg-[#0D0F12] border border-snl-border hover:border-snl-accent/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className={`w-14 h-14 shrink-0 rounded-xl border flex items-center justify-center ${colorClass}`}>
                    <span className="font-heading font-bold text-lg">{service.index}</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-snl-text group-hover:text-snl-accent transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-snl-muted text-sm mt-1.5 leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs font-mono text-snl-accent shrink-0">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-snl-muted text-lg">Not sure which service you need?</p>
            <a
              href="mailto:hello@shelnovalabs.com"
              className="inline-flex items-center gap-2 mt-4 px-8 py-4 bg-snl-accent hover:bg-snl-accent-hover text-white rounded-full font-medium text-sm tracking-wide transition-colors"
            >
              Talk to us about your project
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>
      <ContactCTA />
      <Footer />
    </div>
  );
}