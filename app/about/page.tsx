import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, MapPin, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import JsonLd from "@/components/JsonLd";
import { founderMilestones } from "@/data/homeContent";
import { techStackData } from "@/data/projectsData";

export const metadata: Metadata = {
  title: "About Shelton Shamola | Full-Stack Developer & Founder",
  description:
    "Meet Shelton Shamola, Nairobi-based full-stack developer and founder of ShelNova Labs. I build thoughtful web, mobile, and AI products from idea to launch.",
  openGraph: {
    title: "About Shelton Shamola | Full-Stack Developer & Founder",
    description:
      "I’m Shelton, a Nairobi-based full-stack developer and founder building web, mobile, and AI products.",
    url: "https://shelnovalabs.com/about",
  },
};

const strengths = [
  { number: "01", title: "Full-stack by nature", text: "I work across the interface, application logic, APIs, data, and deployment to bring complete products to life." },
  { number: "02", title: "Product-minded", text: "I start with the person using the product, then choose the simplest approach that solves their real problem." },
  { number: "03", title: "Founder & builder", text: "I lead ShelNova Labs while staying close to the code and the details that shape each release." },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Shelton Shamola",
    url: "https://shelnovalabs.com/about",
    mainEntity: {
      "@type": "Person",
      name: "Shelton Shamola",
      jobTitle: "Founder and Full-Stack Developer",
      worksFor: { "@type": "Organization", name: "ShelNova Labs", url: "https://shelnovalabs.com" },
      address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
      sameAs: ["https://github.com/Shamola-Shelton", "https://x.com/_shamolah_", "https://www.linkedin.com/in/shelton-shamola-b83bb4184/"],
    },
  };

  const stack = techStackData.flatMap((category) => category.items).slice(0, 20);

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F5F2] selection:bg-[#635BFF]/30 selection:text-[#F5F5F2]">
      <JsonLd data={jsonLd} />
      <Navbar />
      <main id="main" data-snl-page className="pt-28 pb-16 px-6 md:px-10">
        <div className="mx-auto">
          <section aria-labelledby="about-title" className="max-w-3xl">
            <span className="text-xs font-mono tracking-widest text-snl-accent uppercase">ABOUT / SHELTON</span>
            <h1 id="about-title" className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-snl-text leading-[1.08] mt-4">
              I build useful things for the web and beyond<span className="text-snl-accent">.</span>
            </h1>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-6 text-sm text-snl-muted">
              <span className="inline-flex items-center gap-2"><Code2 className="h-4 w-4 text-snl-accent" /> Full-stack developer</span>
              <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-snl-accent" /> Founder, ShelNova Labs</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-snl-accent" /> Nairobi, Kenya</span>
            </div>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-snl-muted">
              <p>I’m Shelton Shamola — a full-stack developer and founder of ShelNova Labs. I like taking a product from a rough idea all the way to something people can use: shaping the experience, building the frontend and backend, and getting it into production.</p>
              <p>My work moves between web platforms, mobile apps, and AI-powered tools. The common thread is practical software with a clear purpose, built with care for the people on the other side of the screen.</p>
            </div>
            <div className="flex flex-wrap gap-3 mt-7">
              <Link href="/projects" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-snl-accent text-white text-sm font-medium">Explore my work <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-snl-border text-sm text-snl-text hover:border-snl-accent/50">Start a conversation <ArrowUpRight className="h-4 w-4" /></Link>
            </div>
          </section>

          <section className="mt-14" aria-labelledby="approach-title">
            <div className="flex items-end justify-between gap-4 border-y border-dashed border-snl-border py-3">
              <h2 id="approach-title" className="font-mono text-sm font-normal text-snl-text">/how-i-work</h2>
              <span className="font-mono text-[10px] text-snl-subtle">IDEA → SHIPPED</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
              {strengths.map((item) => (
                <article key={item.number} className="bg-[#0D0F12] border border-snl-border rounded-xl p-5">
                  <span className="font-mono text-xs text-snl-accent">{item.number}</span>
                  <h3 className="font-heading text-base font-medium text-snl-text mt-4">{item.title}</h3>
                  <p className="text-xs text-snl-muted leading-relaxed mt-2">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14" aria-labelledby="toolkit-title">
            <div className="flex items-end justify-between gap-4 border-y border-dashed border-snl-border py-3">
              <h2 id="toolkit-title" className="font-mono text-sm font-normal text-snl-text">/the-toolkit</h2>
              <span className="font-mono text-[10px] text-snl-subtle">TOOLS FOR THE JOB</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {stack.map((item) => <span key={item} className="px-2.5 py-1.5 rounded border border-snl-border bg-[#18181A] text-xs text-snl-muted">{item}</span>)}
            </div>
          </section>

          <section className="mt-14" aria-labelledby="journey-title">
            <div className="flex items-end justify-between gap-4 border-y border-dashed border-snl-border py-3">
              <h2 id="journey-title" className="font-mono text-sm font-normal text-snl-text">/the-journey</h2>
              <span className="font-mono text-[10px] text-snl-subtle">A FEW MILESTONES</span>
            </div>
            <ol className="founder-timeline">
              {founderMilestones.map((milestone) => (
                <li key={milestone.marker}>
                  <span className="founder-timeline__marker">{milestone.marker}</span>
                  <div><h3>{milestone.title}</h3><p>{milestone.detail}</p></div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-8 border border-dashed border-snl-border bg-[#18181A] p-6 sm:p-8">
            <span className="font-mono text-[10px] tracking-widest text-snl-accent">WHAT I’M BUILDING</span>
            <h2 className="font-heading text-xl sm:text-2xl font-medium text-snl-text mt-3">Useful products, with a little more thought in every detail.</h2>
            <p className="text-sm leading-relaxed text-snl-muted mt-3">That’s the idea behind ShelNova Labs. See the products taking shape, or tell me what you’re working on.</p>
            <Link href="/projects" className="inline-flex items-center gap-2 mt-5 text-sm text-snl-accent">Browse selected projects <ArrowUpRight className="h-4 w-4" /></Link>
          </section>
        </div>
      </main>
      <ContactCTA />
      <Footer />
    </div>
  );
}
