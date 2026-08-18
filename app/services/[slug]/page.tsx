import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import JsonLd from "@/components/JsonLd";
import { servicesData, projectsData, workflowSteps } from "@/data/projectsData";

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.metaDescription,
    alternates: { canonical: `https://shelnovalabs.com/services/${service.slug}` },
    openGraph: {
      title: service.seoTitle,
      description: service.metaDescription,
      url: `https://shelnovalabs.com/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedProjects = projectsData.filter((p) =>
    service.relatedProjectIds.includes(p.id)
  );

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://shelnovalabs.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://shelnovalabs.com/services" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://shelnovalabs.com/services/${service.slug}` },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    url: `https://shelnovalabs.com/services/${service.slug}`,
    areaServed: { "@type": "Country", name: "Kenya" },
    provider: { "@type": "Organization", name: "ShelNova Labs", url: "https://shelnovalabs.com" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F5F2] selection:bg-[#635BFF]/30 selection:text-[#F5F5F2]">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
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
                <Link href="/services" className="hover:text-snl-text transition-colors">Services</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-snl-accent">{service.title}</li>
            </ol>
          </nav>

          {/* Header */}
          <span className="text-xs font-mono tracking-widest text-snl-accent uppercase">
            {service.index} / SERVICE
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-snl-text leading-[1.08] mt-4">
            {service.title}
          </h1>
          <p className="text-snl-muted text-base sm:text-lg mt-6 leading-relaxed">
            {service.intro}
          </p>

          {/* What We Build */}
          <section className="mt-16">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
              What We Build
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
              {service.whatWeBuild.map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0D0F12] border border-snl-border rounded-xl p-6"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-snl-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-heading font-bold text-snl-text">{item.title}</h3>
                      <p className="text-snl-muted text-sm mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mt-16">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
              Our Process
            </h2>
            <div className="mt-8 space-y-4">
              {workflowSteps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-5 bg-[#0D0F12] border border-snl-border rounded-xl p-5"
                >
                  <span className="font-mono text-snl-accent font-bold text-sm shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-snl-text uppercase text-sm tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-snl-muted text-sm mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Related Work */}
          {relatedProjects.length > 0 && (
            <section className="mt-16">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
                Related Work
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
                {relatedProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="group bg-[#0D0F12] border border-snl-border hover:border-snl-accent/40 rounded-xl p-6 transition-colors"
                  >
                    <h3 className="font-heading font-bold text-snl-text group-hover:text-snl-accent transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-snl-muted text-sm mt-1.5 leading-relaxed">
                      {project.tagline}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs font-mono text-snl-accent mt-4">
                      View case study
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          <section className="mt-16">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 space-y-4">
              {service.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-[#0D0F12] border border-snl-border rounded-xl p-5"
                >
                  <summary className="font-heading font-bold text-snl-text cursor-pointer list-none flex items-center justify-between gap-4">
                    <span>{faq.question}</span>
                    <span className="text-snl-accent text-lg font-mono transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="text-snl-muted text-sm mt-3 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-20 bg-snl-card border border-snl-border rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">
              Have a project in mind?
            </h2>
            <p className="text-snl-muted mt-3 max-w-xl mx-auto">
              Tell us what you want to build and we&apos;ll take it from there.
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