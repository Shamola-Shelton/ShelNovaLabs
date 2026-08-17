"use client";

import { motion } from "framer-motion";
import { UserCheck, ShieldCheck, HeartHandshake, Sparkles, Layers, Users } from "lucide-react";
import { teamMembers } from "@/data/projectsData";

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
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Studio About Header & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
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
              ShelNova Labs is a digital product studio focused on building thoughtful software platforms,
              mobile applications, and AI-powered systems. We combine deep technical expertise with a
              product-first mindset to help businesses build, innovate, and grow.
            </p>
          </div>

          {/* Right Column: 4 Core Pillars Grid */}
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

        {/* Team Leadership Section */}
        <div className="pt-10 border-t border-snl-border space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-snl-accent uppercase tracking-widest px-3 py-1 bg-snl-accent/15 border border-snl-accent/30 rounded-full">
              <Users className="w-3.5 h-3.5" />
              <span>Leadership &amp; Engineering</span>
            </div>
            <h3 className="font-heading text-3xl font-bold text-snl-text tracking-tight">
              Meet the Team
            </h3>
            <p className="text-snl-muted text-sm leading-relaxed">
              A focused engineering &amp; design team building products with purpose. Every person shapes what ShelNova Labs becomes.
            </p>
          </div>

          {/* 4 Team Member Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group bg-[#111318] border border-snl-border hover:border-snl-accent/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center space-y-4"
              >
                {/* Avatar Badge */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center font-heading font-bold text-lg ring-2 ring-offset-2 ring-offset-[#111318] transition-all"
                  style={{
                    backgroundColor: member.bg,
                    color: member.color,
                    borderColor: member.color,
                  }}
                >
                  {member.initials}
                </div>

                {/* Role Tag */}
                <span
                  className="px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-widest uppercase rounded-full"
                  style={{
                    backgroundColor: `${member.color}15`,
                    color: member.color,
                    border: `1px solid ${member.color}30`,
                  }}
                >
                  {member.tag}
                </span>

                {/* Name & Role Title */}
                <div>
                  <h4 className="font-heading font-bold text-snl-text text-base leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-snl-subtle text-xs font-mono mt-1">
                    {member.role}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-snl-muted text-xs leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
