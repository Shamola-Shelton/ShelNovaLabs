"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { projectsData } from "@/data/projectsData";
import s from "@/app/home.module.css";

const featured = ["biblewise", "kadi-party", "shelnova-os", "jiranify"].flatMap((id) =>
  projectsData.filter((project) => project.id === id),
);

export default function HomeProjects() {
  const [openProject, setOpenProject] = useState<string | null>(null);

  return (
    <>
      <div className={s.projects}>
        {featured.map((project) => {
          const isOpen = openProject === project.id;
          return (
            <article className={s.project} key={project.id}>
              <Link className={s.projectImage} href={`/projects/${project.id}`} aria-label={`Explore ${project.name}`}>
                <Image src={project.imageSrc ?? "/images/logo.png"} alt={`${project.name} product preview`} fill sizes="(max-width:600px) 90vw, 360px" />
                <span><ArrowUpRight size={18} /></span>
              </Link>
              <div className={s.projectBody}>
                <div className={s.projectTitle}>
                  <h3><Link href={`/projects/${project.id}`}>{project.name}</Link></h3>
                  <span>{project.status === "dev" ? "In progress" : project.status === "beta" ? "Beta" : "Live"}</span>
                </div>
                <p>{project.tagline}</p>
                <div className={s.tags}>{project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
                <button className={s.peekAction} type="button" aria-expanded={isOpen} aria-controls={`preview-${project.id}`} onClick={() => setOpenProject(isOpen ? null : project.id)}>
                  {isOpen ? "Close preview" : "Quick preview"}<ChevronDown size={14} className={isOpen ? s.peekOpen : ""} />
                </button>
              </div>
              <div className={s.projectPreview} id={`preview-${project.id}`} hidden={!isOpen}>
                <div><span>THE PROBLEM</span><p>{project.challenge}</p></div>
                <div><span>MY ROLE &amp; APPROACH</span><p>{project.approach}</p></div>
                <div><span>THE RESULT</span><p>{project.result}</p></div>
                <Link href={`/projects/${project.id}`}>Full case study <ArrowUpRight size={14} /></Link>
              </div>
            </article>
          );
        })}
      </div>
      <Link className={s.more} href="/projects">All projects <ArrowRight size={15} /></Link>
    </>
  );
}
