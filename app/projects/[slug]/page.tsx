import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ShieldAlert, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import JsonLd from "@/components/JsonLd";
import { projectsData, servicesData } from "@/data/projectsData";

export function generateStaticParams() {
  return projectsData.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.id === slug);
  if (!project) return {};
  return {
    title: `${project.name} Case Study | ShelNova Labs`,
    description: project.summary,
    alternates: { canonical: `https://shelnovalabs.com/projects/${project.id}` },
    openGraph: {
      title: `${project.name} | ShelNova Labs Case Study`,
      description: project.summary,
      url: `https://shelnovalabs.com/projects/${project.id}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.id === slug);
  if (!project) notFound();

  const relatedServices = servicesData.filter((s) =>
    s.relatedProjectIds.includes(project.id)
  );

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://shelnovalabs.com" },
      { "@type": "ListItem", position: 2, name: "Projects", item: "https://shelnovalabs.com/projects" },
      { "@type": "ListItem", position: 3, name: project.name, item: `https://shelnovalabs.com/projects/${project.id}` },
    ],
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.summary,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android, iOS",
    url: `https://shelnovalabs.com/projects/${project.id}`,
    author: { "@type": "Organization", name: "ShelNova Labs", url: "https://shelnovalabs.com" },
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F5F2] selection:bg-[#635BFF]/30 selection:text-[#F5F5F2]">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={productJsonLd} />
      <Navbar />
      <main id="main" className="pt-28 pb-16 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs font-mono text-snl-subtle mb-8">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link href="/" className="hover:text-snl-text transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/projects" className="hover:text-snl-text transition-colors">Projects</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-snl-accent">{project.name}</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-mono font-bold text-snl-accent uppercase tracking-widest px-3 py-1 bg-snl-accent/15 border border-snl-accent/30 rounded-full">
              {project.index} / {project.primaryBadge}
            </span>
            <span className="text-xs font-mono text-emerald-400 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              ● {project.statusLabel}
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-snl-text leading-[1.08]">
            {project.name}
          </h1>
          <p className="text-snl-muted text-base sm:text-lg mt-4 leading-relaxed">
            {project.tagline}
          </p>

          {/* Overview */}
          <section className="mt-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">Overview</h2>
            <p className="text-snl-muted text-base sm:text-lg mt-4 leading-relaxed">
              {project.summary}
            </p>
          </section>

          {/* Main Image */}
          {project.imageSrc && (
            <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden border border-snl-border mt-10">
              <Image
                src={project.imageSrc}
                alt={`${project.name} product showcase`}
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-cover object-top"
              />
            </div>
          )}

          {/* Challenge / Approach / Result */}
          <div className="space-y-6 mt-12">
            <div className="bg-[#0D0F12] border border-snl-border p-6 sm:p-8 rounded-xl space-y-3">
              <h2 className="font-heading text-sm font-mono uppercase tracking-wider text-snl-accent flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" />
                The Challenge
              </h2>
              <p className="text-snl-muted text-sm sm:text-base leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="bg-[#0D0F12] border border-snl-border p-6 sm:p-8 rounded-xl space-y-3">
              <h2 className="font-heading text-sm font-mono uppercase tracking-wider text-snl-accent flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Our Approach
              </h2>
              <p className="text-snl-muted text-sm sm:text-base leading-relaxed">
                {project.approach}
              </p>
            </div>

            <div className="bg-[#0D0F12] border border-snl-border p-6 sm:p-8 rounded-xl space-y-3">
              <h2 className="font-heading text-sm font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                The Result
              </h2>
              <p className="text-snl-muted text-sm sm:text-base leading-relaxed">
                {project.result}
              </p>
            </div>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-6 bg-snl-card border border-snl-border rounded-xl mt-10">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-xs font-mono text-snl-subtle uppercase">{m.label}</p>
                  <p className="font-heading text-2xl font-bold text-snl-text mt-1">{m.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Gallery */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <section className="mt-12">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">Screenshots</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                {project.galleryImages.map((img, i) => (
                  <div
                    key={img}
                    className="relative h-48 rounded-xl overflow-hidden border border-snl-border bg-snl-card"
                  >
                    <Image
                      src={img}
                      alt={`${project.name} screenshot ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tech Tags */}
          <section className="mt-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">Technology</h2>
            <div className="flex flex-wrap gap-2 mt-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-md bg-snl-card border border-snl-border text-snl-text font-mono text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Store / Demo Links */}
          {project.storeLinks && (
            <div className="flex flex-wrap gap-3 mt-10 pt-8 border-t border-snl-border">
              {project.storeLinks.webDemo && project.storeLinks.webDemo !== "#" && (
                <a
                  href={project.storeLinks.webDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-snl-accent hover:bg-snl-accent-hover text-white rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors"
                >
                  <span>Visit Product Site</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.storeLinks.playStore && project.storeLinks.playStore !== "#" && (
                <a
                  href={project.storeLinks.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-snl-card border border-snl-border hover:border-snl-border-light text-snl-text rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors"
                >
                  <span>Google Play Store</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.storeLinks.github && (
                <a
                  href={project.storeLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-snl-border hover:border-snl-border-light text-snl-text rounded-lg text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-colors"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          )}

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <section className="mt-16">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
                Need something like this?
              </h2>
              <div className="space-y-4 mt-6">
                {relatedServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group flex items-center justify-between gap-4 bg-[#0D0F12] border border-snl-border hover:border-snl-accent/40 rounded-xl p-6 transition-colors"
                  >
                    <div>
                      <h3 className="font-heading font-bold text-snl-text group-hover:text-snl-accent transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-snl-muted text-sm mt-1 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-snl-accent shrink-0 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="mt-16 bg-snl-card border border-snl-border rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
              Want us to build your product?
            </h2>
            <p className="text-snl-muted mt-3 max-w-xl mx-auto">
              Let&apos;s create something worth using.
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