"use client";

import { useEffect, useState } from "react";
import s from "./OrbitSkills.module.css";

type Skill = { name: string; icon: string; color: string };
const skills: Skill[] = [
  { name: "Java", icon: "java", color: "#f89820" },
  { name: "HTML", icon: "html", color: "#e34f26" },
  { name: "CSS", icon: "css", color: "#1572b6" },
  { name: "JavaScript", icon: "javascript", color: "#f7df1e" },
  { name: "TypeScript", icon: "typescript", color: "#3178c6" },
  { name: "React", icon: "react", color: "#61dafb" },
  { name: "Node.js", icon: "nodejs", color: "#68a063" },
  { name: "Express", icon: "express", color: "#dedede" },
  { name: "Spring Security", icon: "spring-security", color: "#6db33f" },
  { name: "Spring JPA", icon: "spring-jpa", color: "#6db33f" },
  { name: "Spring MVC", icon: "spring-mvc", color: "#6db33f" },
  { name: "Thymeleaf", icon: "thymeleaf", color: "#005f0f" },
  { name: "Spring Boot", icon: "spring-boot", color: "#6db33f" },
  { name: "MySQL", icon: "mysql", color: "#4479a1" },
  { name: "MongoDB", icon: "mongodb", color: "#47a248" },
  { name: "Git", icon: "git", color: "#f05032" },
  { name: "GitHub", icon: "github", color: "#f0f0f0" },
  { name: "Postman", icon: "postman", color: "#ff6c37" },
  { name: "Swagger", icon: "swagger", color: "#85ea2d" },
  { name: "VS Code", icon: "vscode", color: "#007acc" },
  { name: "Linux", icon: "linux", color: "#fcc624" },
  { name: "Windows", icon: "windows", color: "#00a4ef" },
  { name: "Docker", icon: "docker", color: "#2496ed" },
  { name: "Maven", icon: "maven", color: "#c71a36" },
  { name: "Firebase", icon: "firebase", color: "#ffca28" },
  { name: "Supabase", icon: "supabase", color: "#3ecf8e" },
  { name: "Vercel", icon: "vercel", color: "#eeeeee" },
  { name: "Netlify", icon: "netlify", color: "#00c7b7" },
  { name: "Render", icon: "render", color: "#46e3b7" },
  { name: "Notion", icon: "notion", color: "#eeeeee" },
  { name: "Next.js", icon: "nextjs", color: "#ededed" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "#38bdf8" },
  { name: "Flutter", icon: "flutter", color: "#54c5f8" },
  { name: "Dart", icon: "dart", color: "#0175c2" },
  { name: "Kotlin", icon: "kotlin", color: "#a97bff" },
  { name: "Swift", icon: "swift", color: "#f05138" },
  { name: "PostgreSQL", icon: "postgresql", color: "#4169e1" },
  { name: "GraphQL", icon: "graphql", color: "#e535ab" },
  { name: "Figma", icon: "figma", color: "#f24e1e" },
  { name: "GitHub Actions", icon: "githubactions", color: "#2088ff" },
  { name: "AWS", icon: "amazonwebservices", color: "#ff9900" },
  { name: "Google Cloud", icon: "googlecloud", color: "#4285f4" },
  { name: "Kubernetes", icon: "kubernetes", color: "#326ce5" },
  { name: "Python", icon: "python", color: "#3776ab" },
  { name: "Go", icon: "go", color: "#00add8" },
  { name: "Vue.js", icon: "vuejs", color: "#4fc08d" },
  { name: "Angular", icon: "angular", color: "#dd0031" },
  { name: "Redis", icon: "redis", color: "#dc382d" },
  { name: "Android", icon: "android", color: "#3ddc84" },
  { name: "Terraform", icon: "terraform", color: "#844fba" },
];
const spotlightGroups = Array.from({ length: Math.ceil(skills.length / 5) }, (_, index) => skills.slice(index * 5, index * 5 + 5));

export default function OrbitSkills() {
  const [activeGroup, setActiveGroup] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => setActiveGroup(current => (current + 1) % spotlightGroups.length), 3200);
    return () => window.clearInterval(interval);
  }, []);
  const featured = spotlightGroups[activeGroup];
  const satellites = skills.filter(skill => !featured.includes(skill));
  const rings = [0, 1, 2, 3].map(ring => satellites.filter((_, index) => index % 4 === ring));

  return (
    <section className={s.section} aria-labelledby="skills-title">
      <div className={s.titleRow}><h2 id="skills-title">My skills</h2><span>50 skills · always learning</span></div>
      <div className={s.orbitWindow}>
        <div className={s.orbitStage}>
          {rings.map((ringSkills, ringIndex) => {
            const ringClass = [s.orbitInner, s.orbitMiddle, s.orbitOuter, s.orbitFarthest][ringIndex];
            return <div className={`${s.orbit} ${ringClass}`} role="list" aria-label={`Orbiting skills ${ringIndex + 1}`} key={ringIndex}>
              {ringSkills.map((skill, index) => <SkillOrbitItem key={skill.icon} skill={skill} index={index} total={ringSkills.length} ringIndex={ringIndex} />)}
            </div>;
          })}
          <div className={s.spotlight} aria-live="polite" aria-atomic="true">
            <div className={s.spotlightEyebrow}>IN MY TOOLKIT <span>{String(activeGroup + 1).padStart(2, "0")} / {String(spotlightGroups.length).padStart(2, "0")}</span></div>
            <div className={s.spotlightSkills}>
              {featured.map((skill, index) => <div key={`${activeGroup}-${skill.icon}`} className={s.spotlightSkill} style={{ "--skill-color": skill.color, "--delay": `${index * 75}ms` } as React.CSSProperties}>
                <img src={`/images/skills/${skill.icon}.svg`} alt="" aria-hidden="true" />
                <span>{skill.name}</span>
              </div>)}
            </div>
          </div>
        </div>
      </div>
      <p className={s.caption}>Tap open space for a little spark and chime.</p>
    </section>
  );
}

function SkillOrbitItem({ skill, index, total, ringIndex }: { skill: Skill; index: number; total: number; ringIndex: number }) {
  const angle = (360 / total) * index;
  return <span role="listitem" aria-label={skill.name} title={skill.name} className={s.skillPosition} style={{ "--angle": `${angle}deg`, "--skill-color": skill.color } as React.CSSProperties}>
    <span className={`${s.orbitTag} ${ringIndex % 2 ? s.tagReverse : s.tagForward}`}>
      <img src={`/images/skills/${skill.icon}.svg`} alt="" aria-hidden="true" />
      <span>{skill.name}</span>
    </span>
  </span>;
}

interface Spark { id: number; x: number; y: number; hue: number }
export function AmbientEffects() {
  const [sparks, setSparks] = useState<Spark[]>([]);
  useEffect(() => {
    let nextId = 0;
    const onClick = (event: MouseEvent) => {
      if ((event.target as Element).closest("a, button, input, textarea, select, summary, [role='button'], [role='listitem'], [data-no-spark]")) return;
      const spark = { id: nextId++, x: event.clientX, y: event.clientY, hue: Math.random() > .5 ? 275 : 190 };
      setSparks(current => [...current.slice(-2), spark]);
      window.setTimeout(() => setSparks(current => current.filter(item => item.id !== spark.id)), 850);
      try {
        const AudioContextClass = window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!AudioContextClass) return;
        const context = new AudioContextClass();
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(660 + Math.random() * 220, context.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(440, context.currentTime + .11);
        gain.gain.setValueAtTime(.025, context.currentTime);
        gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + .14);
        oscillator.connect(gain); gain.connect(context.destination);
        oscillator.start(); oscillator.stop(context.currentTime + .14);
        oscillator.onended = () => void context.close();
      } catch { /* Audio may be unavailable in a restricted browser. */ }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return <div className={s.effects} aria-hidden="true">{sparks.map(spark => <span key={spark.id} className={s.burst} style={{ left: spark.x, top: spark.y, "--hue": spark.hue } as React.CSSProperties}>{Array.from({ length: 14 }, (_, i) => <i key={i} style={{ "--angle": `${i * (360 / 14)}deg`, "--distance": `${32 + (i % 3) * 13}px` } as React.CSSProperties} />)}<b>✦</b></span>)}</div>;
}



