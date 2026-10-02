"use client";

import { useEffect, useState } from "react";
import s from "./OrbitSkills.module.css";

const skills = [
  "Java", "HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js", "Express", "Spring Security", "Spring JPA", "Spring MVC", "Thymeleaf", "Spring Boot", "MySQL", "MongoDB", "Git", "GitHub", "Postman", "Swagger", "VS Code", "Linux", "Windows", "Docker", "Maven", "Firebase", "Supabase", "Vercel", "Netlify", "Render", "Notion",
  "Next.js", "Tailwind CSS", "Flutter", "Dart", "Kotlin", "Swift", "PostgreSQL", "Firestore", "REST APIs", "GraphQL", "Figma", "GitHub Actions", "CI/CD", "AWS", "Google Cloud", "Kubernetes", "Python", "Go", "OpenAI", "Claude", "Gemini", "LLMs", "RAG", "Prompt design", "UI design", "UX design", "Responsive design", "Accessibility", "SEO", "App Store", "Play Store", "Product strategy", "Prototyping", "Analytics", "Testing", "Agile",
];
const rings = ["orbitOne", "orbitTwo", "orbitThree", "orbitFour"];

export default function OrbitSkills() {
  return (
    <section className={s.section} aria-labelledby="skills-title">
      <div className={s.titleRow}><h2 id="skills-title">My skills</h2><span>{skills.length} skills · always learning</span></div>
      <div className={s.orbitWindow}>
        <div className={s.orbitStage}>
          <div className={s.center}><span>SS</span><small>BUILD · LEARN · REPEAT</small></div>
          {rings.map((ring, ringIndex) => {
            const ringSkills = skills.filter((_, index) => index % rings.length === ringIndex);
            return <div className={`${s.orbit} ${s[ring]}`} key={ring} role="list" aria-label={`Skills orbit ${ringIndex + 1}`}>
              {ringSkills.map((skill, index) => {
                const angle = (360 / ringSkills.length) * index;
                return <div className={s.skillPosition} role="listitem" key={skill} style={{ "--angle": `${angle}deg` } as React.CSSProperties}>
                  <span className={s.skillLabel}>{skill}</span>
                </div>;
              })}
            </div>;
          })}
        </div>
      </div>
      <p className={s.caption}>Tap open space for a little spark and chime.</p>
    </section>
  );
}

interface Spark { id: number; x: number; y: number; hue: number }
export function AmbientEffects() {
  const [sparks, setSparks] = useState<Spark[]>([]);
  useEffect(() => {
    let nextId = 0;
    const onClick = (event: MouseEvent) => {
      if ((event.target as Element).closest("a, button, input, textarea, select, summary, [role='button'], [data-no-spark]")) return;
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


