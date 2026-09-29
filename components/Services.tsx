"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, Layers, Smartphone } from "lucide-react";

const capabilities = [
  { title: "Product engineering", description: "A clear path from early idea to a dependable product in the hands of real users.", href: "/services/product-engineering", icon: Layers },
  { title: "Web platforms", description: "Fast, thoughtful websites, customer portals, and SaaS platforms built to grow.", href: "/services/web-applications", icon: Code2 },
  { title: "Mobile products", description: "Useful iOS and Android experiences designed for the way people actually live.", href: "/services/mobile-applications", icon: Smartphone },
  { title: "AI systems", description: "Practical assistants, search, and automation that make complex work feel simpler.", href: "/services/ai-intelligent-systems", icon: Cpu },
];

export default function Services() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="services" className="relative scroll-mt-20 border-y border-snl-border/80 bg-white/[0.015] px-6 py-24 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-5 md:grid-cols-2 md:items-end">
          <div>
            <span className="mb-3 block text-xs font-mono uppercase tracking-[0.18em] text-snl-accent">02 / What we build</span>
            <h2 className="font-heading text-4xl font-semibold tracking-tight text-snl-text sm:text-5xl">One team. The full journey.</h2>
          </div>
          <div className="md:justify-self-end md:text-right">
            <p className="max-w-xl text-base leading-7 text-snl-muted md:ml-auto">
              Product strategy, design, engineering, and the care that helps good software keep getting better.
            </p>
            <Link href="/services" className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-snl-text transition-colors hover:text-snl-accent">
              Explore all services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ title, description, href, icon: Icon }, index) => (
            <motion.div key={title} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.07 }}>
              <Link href={href} className="group flex h-full min-h-56 flex-col rounded-2xl border border-snl-border bg-snl-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-snl-accent/40 hover:bg-snl-card sm:p-7">
                <span className="mb-8 grid h-11 w-11 place-items-center rounded-xl border border-snl-accent/20 bg-snl-accent/10 text-snl-accent transition-colors group-hover:bg-snl-accent group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-snl-text">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-snl-muted">{description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-snl-subtle transition-colors group-hover:text-snl-accent">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
