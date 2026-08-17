"use client";

import { motion } from "framer-motion";
import { Cpu, Smartphone, Globe, ShieldCheck, Zap, Database, Server } from "lucide-react";

export default function TrustStrip() {
  const techLogos = [
    { name: "Flutter", icon: Smartphone },
    { name: "React", icon: Globe },
    { name: "Next.js", icon: Zap },
    { name: "Laravel", icon: Server },
    { name: "Node.js", icon: Cpu },
    { name: "Firebase", icon: Database },
    { name: "AWS", icon: ShieldCheck },
  ];

  const metrics = [
    { label: "ACTIVE USERS", value: "50K+" },
    { label: "PRODUCTS BUILT", value: "10+" },
    { label: "GLOBAL MARKETS", value: "5+" },
    { label: "PLATFORM UPTIME", value: "99.9%" },
  ];

  return (
    <section className="py-12 border-y border-snl-border bg-[#0D0F12]/60 backdrop-blur-sm relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header Label */}
        <p className="text-center text-xs font-mono tracking-widest text-snl-subtle uppercase mb-8">
          Trusted by businesses, founders &amp; creators worldwide
        </p>

        {/* Tech Stack Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 opacity-80 hover:opacity-100 transition-opacity mb-12">
          {techLogos.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="flex items-center gap-2 text-snl-muted hover:text-snl-text transition-colors duration-200"
              >
                <Icon className="w-4 h-4 text-snl-accent/70" />
                <span className="text-sm font-mono font-medium tracking-tight">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Verified Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-snl-border/60">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-heading font-bold text-2xl sm:text-3xl text-snl-text tracking-tight">
                {m.value}
              </p>
              <p className="text-[11px] font-mono text-snl-subtle tracking-wider uppercase mt-1">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
