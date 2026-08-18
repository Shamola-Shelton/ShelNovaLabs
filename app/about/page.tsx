import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Users, Sparkles, Layers, UserCheck, HeartHandshake } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import JsonLd from "@/components/JsonLd";
import { teamMembers, servicesData } from "@/data/projectsData";

export const metadata: Metadata = {
  title: "About ShelNova Labs | Software Development Company in Nairobi, Kenya",
  description:
    "ShelNova Labs is a software development company in Nairobi, Kenya building websites, web applications, mobile apps, and AI systems for businesses worldwide.",
  openGraph: {
    title: "About ShelNova Labs | Software Development Company in Nairobi, Kenya",
    description:
      "A software development company in Nairobi, Kenya building modern digital products.",
    url: "https://shelnovalabs.com/about",
  },
};

const pillars = [
  {
    index: "01",
    title: "Product Thinking",
    description: "We start with your users and business goals — defining what to build before writing a single line of code.",
    icon: Sparkles,
  },
  {
    index: "02",
    title: "Engineering Excellence",
    description: "Clean, scalable, type-safe, and maintainable code built with modern frameworks and strict architectural patterns.",
    icon: Layers,
  },
  {
    index: "03",
    title: "Intuitive Design",
    description: "Interfaces engineered around usability, clarity, speed, and conversion — creating expensive-looking experiences.",
    icon: UserCheck,
  },
  {
    index: "04",
    title: "Long-term Partnerships",
    description: "We work as your embedded product engineering partner, continuously optimizing and scaling your software.",
    icon: HeartHandshake,
  },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About ShelNova Labs",
    url: "https://shelnovalabs.com/about",
    mainEntity: {
      "@type": "Organization",
      name: "ShelNova Labs",
      url: "https://shelnovalabs.com",
      address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
    },
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F5F2] selection:bg-[#635BFF]/30 selection:text-[#F5F5F2]">
      <JsonLd data={jsonLd} />
      <Navbar />
      <main id="main" className="pt-28 pb-16 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-widest text-snl-accent uppercase">
              ABOUT SHELNOVA LABS
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-snl-text leading-[1.08] mt-4">
              About ShelNova Labs
            </h1>
            <p className="text-snl-muted text-base sm:text-xl mt-6 leading-relaxed">
              We&apos;re a small team with a big engineering mindset — a software
              development company based in Nairobi, Kenya.
            </p>
            <p className="text-snl-muted text-base sm:text-lg mt-4 leading-relaxed">
              ShelNova Labs is a digital product studio focused on building thoughtful
              software platforms, mobile applications, and AI-powered systems. We combine
              deep technical expertise with a product-first mindset to help businesses
              build, innovate, and grow.
            </p>
          </div>

          {/* Location */}
          <div className="mt-10 inline-flex items-center gap-2 text-sm text-snl-muted bg-[#0D0F12] border border-snl-border rounded-full px-4 py-2">
            <MapPin className="w-4 h-4 text-snl-accent" />
            <span>Based in Nairobi, Kenya — working with clients worldwide</span>
          </div>

          {/* Pillars */}
          <section className="mt-16">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
              What We Stand For
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.index}
                    className="bg-[#0D0F12] border border-snl-border p-6 rounded-xl space-y-3 hover:border-snl-accent/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-snl-accent font-bold">
                        {p.index}
                      </span>
                      <Icon className="w-5 h-5 text-snl-subtle" />
                    </div>
                    <h3 className="font-heading font-bold text-snl-text">{p.title}</h3>
                    <p className="text-snl-muted text-sm leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* What we do */}
          <section className="mt-16">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
              What We Do
            </h2>
            <p className="text-snl-muted text-base mt-4 leading-relaxed">
              We design and build digital products from idea to deployment — web development,
              mobile app development, SaaS platforms, custom software, AI systems, and
              ongoing maintenance. Explore our services to see how we can help.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {servicesData.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="px-4 py-2 rounded-full bg-snl-card border border-snl-border text-sm text-snl-muted hover:text-snl-accent hover:border-snl-accent/40 transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-snl-accent hover:text-snl-accent-hover transition-colors"
              >
                View all services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Team */}
          <section className="mt-16">
            <div className="flex items-center gap-2 text-xs font-mono text-snl-accent uppercase tracking-widest">
              <Users className="w-3.5 h-3.5" />
              <span>Leadership &amp; Engineering</span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-snl-text tracking-tight mt-3">
              Meet the Team
            </h2>
            <p className="text-snl-muted text-sm leading-relaxed mt-2">
              A focused engineering &amp; design team building products with purpose. Every
              person shapes what ShelNova Labs becomes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="group bg-[#0D0F12] border border-snl-border hover:border-snl-accent/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center space-y-4"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center font-heading font-bold text-lg ring-2 ring-offset-2 ring-offset-[#0D0F12] transition-all"
                    style={{
                      backgroundColor: member.bg,
                      color: member.color,
                      borderColor: member.color,
                    }}
                  >
                    {member.initials}
                  </div>
                  <span
                    className="px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-widest uppercase rounded-full"
                    style={{
                      backgroundColor: `${member.color}15`,
                      color: member.color,
                      border: `1px solid ${member.color}30`,
                    }}
                  >
                    {member.tag}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-snl-text text-base leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-snl-subtle text-xs font-mono mt-1">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-snl-muted text-xs leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Link to work */}
          <section className="mt-16 bg-[#0D0F12] border border-snl-border rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
              See what we&apos;ve built
            </h2>
            <p className="text-snl-muted mt-3 max-w-xl mx-auto">
              Explore our case studies to understand how we approach real products.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-snl-accent hover:bg-snl-accent-hover text-white rounded-full font-medium text-sm tracking-wide transition-colors"
            >
              View Our Work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </div>
      </main>
      <ContactCTA />
      <Footer />
    </div>
  );
}