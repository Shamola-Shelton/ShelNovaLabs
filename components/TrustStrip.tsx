const technologies = ["Flutter", "React", "Next.js", "Laravel", "Node.js", "Firebase", "AWS"];

export default function TrustStrip() {
  return (
    <section aria-label="Studio capabilities" className="border-y border-snl-border/80 bg-white/[0.015] px-6 py-7 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-center text-xs font-mono uppercase tracking-[0.16em] text-snl-subtle md:text-left">
          Thoughtful products, engineered end to end
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-end" aria-label="Technologies">
          {technologies.map((technology) => (
            <li key={technology} className="text-sm font-medium tracking-tight text-snl-muted transition-colors hover:text-snl-text">
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
