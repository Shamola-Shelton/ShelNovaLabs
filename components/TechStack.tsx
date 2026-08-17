"use client";

import { motion } from "framer-motion";
import { Code2, ArrowRight } from "lucide-react";
import { techStackData } from "@/data/projectsData";

interface TechStackProps {
  onOpenContact?: () => void;
}

export default function TechStack({ onOpenContact }: TechStackProps) {
  return (
    <section className="py-24 px-6 md:px-10 bg-[#0D0F12]/50 border-y border-snl-border relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-snl-accent uppercase block mb-3">
            04 / TECHNOLOGY STACK
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-snl-text tracking-tight">
            Built for the modern web.
          </h2>
          <p className="text-snl-muted text-base sm:text-lg mt-3 leading-relaxed">
            We use proven, modern technologies to build fast, scalable, and secure digital products.
          </p>
        </div>

        {/* 6 Categorized Technology Cards (Matches reference image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {techStackData.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#111318] border border-snl-border p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <h3 className="font-heading text-base font-bold text-snl-text mb-4 border-b border-snl-border pb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-snl-card border border-snl-border font-mono text-xs text-snl-muted hover:text-snl-text hover:border-snl-accent/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout Box (Matches reference image) */}
        <div className="bg-[#111318] border border-snl-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-snl-accent/15 border border-snl-accent/30 flex items-center justify-center text-snl-accent shrink-0">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-snl-text">
                The right tools for long-term success.
              </h3>
              <p className="text-snl-muted text-xs sm:text-sm mt-0.5">
                Scalable. Secure. Future-ready.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-6 py-3 bg-snl-accent hover:bg-snl-accent-hover text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-lg shadow-snl-accent/20 shrink-0 flex items-center justify-center gap-2"
          >
            <span>Let&apos;s Build Together</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
