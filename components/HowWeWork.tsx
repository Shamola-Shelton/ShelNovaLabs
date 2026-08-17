"use client";

import { motion } from "framer-motion";
import { Search, Compass, Code, Rocket, TrendingUp, ArrowRight } from "lucide-react";
import { workflowSteps } from "@/data/projectsData";

const stepIcons = [Search, Compass, Code, Rocket, TrendingUp];

interface HowWeWorkProps {
  onOpenContact?: () => void;
}

export default function HowWeWork({ onOpenContact }: HowWeWorkProps) {
  return (
    <section id="process" className="py-24 px-6 md:px-10 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-snl-accent uppercase block mb-3">
            03 / OUR PROCESS
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-snl-text tracking-tight">
            How We Work
          </h2>
          <p className="text-snl-muted text-base sm:text-lg mt-3 leading-relaxed">
            A proven, transparent process for building digital products that create real impact.
          </p>
        </div>

        {/* 5 Process Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {workflowSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Search;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#0D0F12] border border-snl-border hover:border-snl-accent/40 p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-snl-accent">
                      {step.number}
                    </span>
                    <Icon className="w-4 h-4 text-snl-subtle" />
                  </div>

                  <h3 className="font-heading text-base font-bold text-snl-text mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs font-medium text-snl-subtle mb-3">
                    {step.subtitle}
                  </p>
                </div>
                <p className="text-xs text-snl-muted leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Callout (Matches reference image) */}
        <div className="bg-[#111318] border border-snl-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 glow-panel">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-snl-accent/15 border border-snl-accent/30 flex items-center justify-center text-snl-accent shrink-0">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-snl-text">
                Your idea. Our engineering expertise.
              </h3>
              <p className="text-snl-muted text-xs sm:text-sm mt-0.5">
                Let&apos;s turn your vision into a powerful digital product.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-6 py-3 bg-snl-accent hover:bg-snl-accent-hover text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-lg shadow-snl-accent/20 shrink-0 flex items-center justify-center gap-2"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
