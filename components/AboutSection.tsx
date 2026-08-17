"use client";

import { motion } from "framer-motion";
import { UserCheck, ShieldCheck, HeartHandshake, Sparkles, Layers } from "lucide-react";

export default function AboutSection() {
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

  return (
    <section id="about" className="py-24 px-6 md:px-10 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Narrative & Founder Card (Matches reference image) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono tracking-widest text-snl-accent uppercase block">
              05 / ABOUT SHELNOVA LABS
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-snl-text tracking-tight">
              About ShelNova Labs
            </h2>
            <p className="text-snl-muted text-lg leading-relaxed">
              We&apos;re a small team with a big engineering mindset.
            </p>
            <p className="text-snl-muted text-base leading-relaxed">
              ShelNova Labs is a technology company focused on building thoughtful digital products,
              software platforms, and experiences. We combine deep technical expertise with a
              product-first mindset to help businesses build, innovate, and grow.
            </p>

            {/* Founder Card */}
            <div className="pt-4">
              <div className="inline-flex items-center gap-4 bg-[#111318] border border-snl-border p-4 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-snl-accent/20 border border-snl-accent/40 flex items-center justify-center font-heading font-bold text-snl-accent">
                  SS
                </div>
                <div>
                  <h3 className="font-heading font-bold text-snl-text text-sm">
                    Shelton Shamola
                  </h3>
                  <p className="text-snl-subtle text-xs font-mono">
                    Founder · Lead Software Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Core Pillars Grid (Matches reference image) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.index}
                  className="bg-[#111318] border border-snl-border p-5 rounded-xl space-y-2 hover:border-snl-accent/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-snl-accent font-bold">
                      {p.index}
                    </span>
                    <Icon className="w-4 h-4 text-snl-subtle" />
                  </div>
                  <h3 className="font-heading font-bold text-snl-text text-sm">
                    {p.title}
                  </h3>
                  <p className="text-snl-muted text-xs leading-relaxed">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
