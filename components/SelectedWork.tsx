"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projectsData, CaseStudy } from "@/data/projectsData";
import CaseStudyModal from "./CaseStudyModal";

interface SelectedWorkProps {
  onOpenContact?: () => void;
}

const featuredIds = ["biblewise", "kadi-party", "shelnova-os"];

export default function SelectedWork({ onOpenContact }: SelectedWorkProps) {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const reduceMotion = useReducedMotion();
  const featuredProjects = useMemo(
    () => featuredIds.map((id) => projectsData.find((project) => project.id === id)).filter((project): project is CaseStudy => Boolean(project)),
    [],
  );

  return (
    <section id="work" className="relative scroll-mt-20 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between md:mb-14">
          <div>
            <span className="mb-3 block text-xs font-mono uppercase tracking-[0.18em] text-snl-accent">01 / Selected work</span>
            <h2 className="font-heading text-4xl font-semibold tracking-tight text-snl-text sm:text-5xl">Made to matter.</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-snl-muted">
              A few products we&apos;ve brought to life for people, teams, and communities.
            </p>
          </div>
          <Link href="/projects" className="group inline-flex items-center gap-2 self-start text-sm font-medium text-snl-text transition-colors hover:text-snl-accent sm:self-auto">
            View all projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-snl-border bg-snl-card/65 transition-colors duration-300 hover:border-snl-accent/40"
            >
              <button
                onClick={() => setActiveCaseStudy(project)}
                aria-label={`Explore the ${project.name} case study`}
                className="block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-snl-accent"
              >
                <div className="relative aspect-[1.38] overflow-hidden bg-snl-bg-sec">
                  <Image
                    src={project.imageSrc ?? "/images/logo.png"}
                    alt={project.imageSrc ? `${project.name} product interface` : ""}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] font-medium text-white/90 backdrop-blur">
                    {project.statusLabel}
                  </span>
                  <span className="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur transition-transform duration-300 group-hover:rotate-45">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <h3 className="font-heading text-xl font-semibold text-snl-text transition-colors group-hover:text-snl-accent">{project.name}</h3>
                    <span className="font-mono text-[11px] text-snl-subtle">{project.index}</span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-6 text-snl-muted">{project.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="rounded-full border border-snl-border px-2.5 py-1 text-[10px] text-snl-subtle">{tag}</span>
                    ))}
                  </div>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <CaseStudyModal project={activeCaseStudy} onClose={() => setActiveCaseStudy(null)} onOpenContact={onOpenContact} />
    </section>
  );
}
