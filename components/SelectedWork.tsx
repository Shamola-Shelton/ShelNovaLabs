"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { projectsData, CaseStudy } from "@/data/projectsData";
import CaseStudyModal from "./CaseStudyModal";

interface SelectedWorkProps {
  onOpenContact?: () => void;
}

export default function SelectedWork({ onOpenContact }: SelectedWorkProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);

  const filterCategories = [
    { id: "all", label: "All Products" },
    { id: "ai", label: "AI & EdTech" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "saas", label: "SaaS & Platforms" },
    { id: "open-source", label: "Open Source" },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <section id="work" className="py-24 px-6 md:px-10 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest text-snl-accent uppercase block mb-3">
              01 / SELECTED WORK
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-snl-text tracking-tight">
              Selected Work
            </h2>
            <p className="text-snl-muted text-base sm:text-lg max-w-xl mt-3 leading-relaxed">
              A selection of products, platforms, and experiences we&apos;ve designed
              and engineered.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                aria-pressed={selectedFilter === cat.id}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wide transition-all ${
                  selectedFilter === cat.id
                    ? "bg-snl-accent text-white shadow-lg shadow-snl-accent/25"
                    : "bg-snl-card border border-snl-border text-snl-muted hover:text-snl-text"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Large Editorial Card Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-[#0D0F12] border border-snl-border rounded-2xl p-6 sm:p-10 glow-card overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Project Info & Narrative */}
                <div className="lg:col-span-6 space-y-6">
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-bold text-snl-accent">
                      {project.index}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase bg-snl-card border border-snl-border text-snl-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-snl-accent" />
                      {project.statusLabel}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text group-hover:text-snl-accent transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-snl-muted text-sm font-medium mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md bg-snl-card border border-snl-border text-snl-subtle text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Summary */}
                  <p className="text-snl-muted text-sm leading-relaxed">
                    {project.summary}
                  </p>

                  {/* CTA Action */}
                  <div className="pt-2">
                    <button
                      onClick={() => setActiveCaseStudy(project)}
                      className="inline-flex items-center gap-2 text-snl-text font-mono text-xs font-semibold tracking-wider uppercase group-hover:text-snl-accent transition-colors"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Right Column: High-Res Product Visual Mockup */}
                <div className="lg:col-span-6 flex justify-center">
                  {project.imageSrc ? (
                    <div className="w-full relative rounded-xl overflow-hidden border border-snl-border shadow-2xl group-hover:border-snl-accent/40 transition-colors bg-snl-card h-[300px] sm:h-[320px]">
                      <Image
                        src={project.imageSrc}
                        alt={`${project.name} product mockup`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : project.mockupType === "mobile" ? (
                    <div className="w-full max-w-[280px] bg-snl-card border-4 border-snl-border rounded-[36px] p-4 shadow-2xl relative overflow-hidden group-hover:border-snl-accent/40 transition-colors">
                      <div className="w-24 h-3 bg-snl-border rounded-full mx-auto mb-4" />
                      <div className="bg-[#08090B] border border-snl-border rounded-2xl p-4 text-center space-y-3">
                        <div
                          className="w-10 h-10 rounded-xl border flex items-center justify-center font-bold font-mono mx-auto"
                          style={{
                            backgroundColor: `${project.accentColor}15`,
                            borderColor: `${project.accentColor}40`,
                            color: project.accentColor,
                          }}
                        >
                          {project.name.charAt(0)}
                        </div>
                        <h4 className="font-heading text-sm font-bold text-snl-text">
                          {project.name}
                        </h4>
                        <p className="text-[11px] text-snl-muted italic leading-tight">
                          &quot;{project.tagline}&quot;
                        </p>
                        <div className="py-2 bg-snl-card rounded-lg text-[10px] text-snl-subtle font-mono border border-snl-border">
                          ● {project.statusLabel}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full bg-snl-card border border-snl-border rounded-xl p-4 shadow-2xl space-y-3 group-hover:border-snl-accent/40 transition-colors">
                      <div className="flex items-center gap-1.5 pb-2 border-b border-snl-border">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        <span className="text-[10px] font-mono text-snl-subtle ml-2">
                          {project.id}.shelnovalabs.com
                        </span>
                      </div>
                      <div className="bg-[#08090B] p-4 rounded-lg space-y-2 border border-snl-border">
                        <div className="flex justify-between items-center text-xs font-mono text-snl-muted">
                          <span>SYSTEM TELEMETRY</span>
                          <span className="text-emerald-400">STATUS: ONLINE</span>
                        </div>
                        <div className="h-16 bg-snl-card rounded p-2 flex items-center justify-center">
                          <Terminal className="w-6 h-6 text-snl-accent" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
}
