"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Layers, Globe, Smartphone, Cpu, Layout, ShieldCheck, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/projectsData";

const iconMap = {
  Layers: Layers,
  Globe: Globe,
  Smartphone: Smartphone,
  Cpu: Cpu,
  Layout: Layout,
  ShieldCheck: ShieldCheck,
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-10 bg-[#0D0F12]/50 border-y border-snl-border relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-snl-accent uppercase block mb-3">
            02 / WHAT WE BUILD
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-snl-text tracking-tight">
            Our Services
          </h2>
          <p className="text-snl-muted text-base sm:text-lg mt-3 leading-relaxed">
            End-to-end technology solutions for modern businesses. We combine deep technical expertise
            with a product-first mindset.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Layers;
            return (
              <motion.div
                key={service.index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block cursor-pointer bg-[#111318] border border-snl-border hover:border-snl-accent/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-snl-accent/10 flex flex-col justify-between text-left"
                >
                  <div>
                    {/* Card Header: Icon & Index Tag */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-snl-accent/10 border border-snl-accent/20 flex items-center justify-center text-snl-accent group-hover:bg-snl-accent group-hover:text-white transition-colors duration-300">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-snl-subtle group-hover:text-snl-accent transition-colors">
                        {service.index}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-heading text-xl font-bold text-snl-text mb-3 group-hover:text-snl-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-snl-muted text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Action Arrow */}
                  <div className="mt-8 pt-4 border-t border-snl-border/60 flex items-center justify-between text-xs font-mono text-snl-subtle group-hover:text-snl-accent transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
