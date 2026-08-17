"use client";

import { useEffect } from "react";
import { X, ExternalLink, Play, ArrowLeft, CheckCircle2, ShieldAlert } from "lucide-react";
import { CaseStudy } from "@/data/projectsData";

interface CaseStudyModalProps {
  project: CaseStudy | null;
  onClose: () => void;
  onOpenContact?: () => void;
}

export default function CaseStudyModal({
  project,
  onClose,
  onOpenContact,
}: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-[#0D0F12] border border-snl-border rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-snl-border bg-snl-card/80 sticky top-0 z-20">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-snl-muted hover:text-snl-text text-xs font-mono uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Selected Work</span>
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-snl-border text-snl-muted hover:text-snl-text transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal content body */}
        <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-8">
          {/* Title & metadata */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-snl-accent uppercase tracking-widest px-3 py-1 bg-snl-accent/15 border border-snl-accent/30 rounded-full">
                {project.index} / {project.primaryBadge}
              </span>
              <span className="text-xs font-mono text-emerald-400 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                ● {project.statusLabel}
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-snl-text">
              {project.name}
            </h2>
            <p className="text-snl-muted text-lg mt-2 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Metrics bar if available */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-snl-card border border-snl-border rounded-xl">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-xs font-mono text-snl-subtle uppercase">{m.label}</p>
                  <p className="font-heading text-xl font-bold text-snl-text mt-0.5">{m.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Deep dive sections: Problem -> Approach -> Result */}
          <div className="space-y-6 pt-4 border-t border-snl-border">
            {/* The Challenge */}
            <div className="bg-snl-card/50 border border-snl-border p-6 rounded-xl space-y-2">
              <h3 className="font-heading text-sm font-mono uppercase tracking-wider text-snl-accent flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" />
                The Challenge
              </h3>
              <p className="text-snl-muted text-sm sm:text-base leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Our Approach */}
            <div className="bg-snl-card/50 border border-snl-border p-6 rounded-xl space-y-2">
              <h3 className="font-heading text-sm font-mono uppercase tracking-wider text-snl-accent flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Our Approach &amp; Architecture
              </h3>
              <p className="text-snl-muted text-sm sm:text-base leading-relaxed">
                {project.approach}
              </p>
            </div>

            {/* The Result */}
            <div className="bg-snl-card/50 border border-snl-border p-6 rounded-xl space-y-2">
              <h3 className="font-heading text-sm font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                The Result &amp; Impact
              </h3>
              <p className="text-snl-muted text-sm sm:text-base leading-relaxed">
                {project.result}
              </p>
            </div>
          </div>

          {/* Tech Tags */}
          <div>
            <p className="text-xs font-mono text-snl-subtle uppercase mb-3">Technologies Employed</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md bg-snl-border text-snl-text font-mono text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Store / Demo Links */}
          {project.storeLinks && (
            <div className="pt-4 border-t border-snl-border flex flex-wrap gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-3">
                {project.storeLinks.playStore && (
                  <a
                    href={project.storeLinks.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-snl-accent hover:bg-snl-accent-hover text-white rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors"
                  >
                    <span>Google Play Store</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.storeLinks.github && (
                  <a
                    href={project.storeLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 border border-snl-border hover:border-snl-border-light text-snl-text rounded-lg text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-colors"
                  >
                    <span>GitHub Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenContact?.();
                }}
                className="text-xs font-mono text-snl-accent hover:underline flex items-center gap-1"
              >
                <span>Build a product like this →</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
