import type { Metadata } from "next";
import { Mail, MapPin, Globe, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact ShelNova Labs | Software Development Nairobi, Kenya",
  description:
    "Contact ShelNova Labs to start your software project. Tell us what you want to build — websites, web apps, mobile apps, or AI systems.",
  openGraph: {
    title: "Contact ShelNova Labs | Software Development Nairobi, Kenya",
    description:
      "Start your software project with ShelNova Labs in Nairobi, Kenya.",
    url: "https://shelnovalabs.com/contact",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact ShelNova Labs",
    url: "https://shelnovalabs.com/contact",
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F5F2] selection:bg-[#635BFF]/30 selection:text-[#F5F5F2]">
      <JsonLd data={jsonLd} />
      <Navbar />
      <main id="main" className="pt-28 pb-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Header + details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-mono tracking-widest text-snl-accent uppercase">
                  CONTACT
                </span>
                <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-snl-text leading-[1.08] mt-4">
                  Let&apos;s build something great together.
                </h1>
                <p className="text-snl-muted text-base sm:text-lg mt-6 leading-relaxed">
                  Tell us about your project and we&apos;ll take it from there — scoping,
                  architecture, design, and delivery. We reply within one business day.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:hello@shelnovalabs.com"
                  className="flex items-center gap-3 text-sm text-snl-muted hover:text-snl-text transition-colors"
                >
                  <span className="w-11 h-11 rounded-xl bg-snl-accent/10 border border-snl-accent/20 flex items-center justify-center text-snl-accent shrink-0">
                    <Mail className="w-5 h-5" />
                  </span>
                  <span>hello@shelnovalabs.com</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-snl-muted">
                  <span className="w-11 h-11 rounded-xl bg-snl-accent/10 border border-snl-accent/20 flex items-center justify-center text-snl-accent shrink-0">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-snl-muted">
                  <span className="w-11 h-11 rounded-xl bg-snl-accent/10 border border-snl-accent/20 flex items-center justify-center text-snl-accent shrink-0">
                    <Globe className="w-5 h-5" />
                  </span>
                  <span>Remote-friendly studio — working with clients worldwide</span>
                </div>
              </div>

              <div className="pt-4">
                <h2 className="font-heading text-lg font-bold text-snl-text">What happens next?</h2>
                <ul className="mt-4 space-y-3 text-sm text-snl-muted">
                  {[
                    "We review your project details and reply with questions or a scope outline.",
                    "If it's a fit, we schedule a discovery call to align on goals and approach.",
                    "You get a clear proposal with timeline and budget — no obligation.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="font-mono text-xs font-bold text-snl-accent shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-snl-accent hover:text-snl-accent-hover transition-colors"
                >
                  Explore our services
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#0D0F12] border border-snl-border rounded-2xl p-6 sm:p-10">
                <h2 className="font-heading text-2xl font-bold text-snl-text">
                  Start a Conversation
                </h2>
                <p className="text-xs text-snl-subtle font-mono mt-1 mb-8">
                  Messages are delivered directly to hello@shelnovalabs.com
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}