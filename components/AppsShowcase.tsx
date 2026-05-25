const apps = [
  {
    id: "kadi-classic",
    icon: "🃏",
    name: "Kadi Classic",
    tagline: "The classic card game, reimagined digitally.",
    description:
      "A fast-paced digital version of the beloved Kadi card game featuring real-time multiplayer, AI opponents, and global online matchmaking.",
    status: "live" as const,
    statusLabel: "Live on App Stores",
    accentColor: "#f59e0b",
    borderClass: "hover:border-amber-500/40",
    shadowClass: "hover:shadow-amber-500/10",
    bgGlow: "rgba(245,158,11,0.06)",
  },
  {
    id: "jiranify",
    icon: "🏘️",
    name: "JiraniFy",
    tagline: "Your neighborhood, connected.",
    description:
      "A neighborhood-focused social platform for local communities to connect, share updates, chat, and discover nearby opportunities.",
    status: "dev" as const,
    statusLabel: "In Development",
    accentColor: "#6c63ff",
    borderClass: "hover:border-snl-violet/40",
    shadowClass: "hover:shadow-snl-violet/10",
    bgGlow: "rgba(108,99,255,0.06)",
  },
  {
    id: "gist-and-gain",
    icon: "📚",
    name: "Gist & Gain",
    tagline: "Learn more. In less time.",
    description:
      "An AI-powered self-improvement app offering book summaries, podcasts, flashcards, quizzes, and challenges in Gist and Deep modes.",
    status: "dev" as const,
    statusLabel: "In Development",
    accentColor: "#00d4ff",
    borderClass: "hover:border-snl-cyan/40",
    shadowClass: "hover:shadow-snl-cyan/10",
    bgGlow: "rgba(0,212,255,0.06)",
  },
];

export default function AppsShowcase() {
  return (
    <section id="apps" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-snl-violet text-sm font-medium tracking-widest uppercase mb-3">
            Our Portfolio
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-snl-text mb-4">
            What We&apos;re Building
          </h2>
          <p className="text-snl-muted text-lg max-w-xl mx-auto">
            Each app is designed with care, built for real people, and crafted
            to make a difference.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {apps.map((app) => (
            <div
              key={app.id}
              className={`group relative flex flex-col bg-snl-card border border-snl-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${app.borderClass} ${app.shadowClass}`}
              style={{
                background: `radial-gradient(ellipse at top left, ${app.bgGlow} 0%, #111118 60%)`,
              }}
            >
              {/* App icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 border border-snl-border"
                style={{ backgroundColor: `${app.accentColor}15` }}
              >
                {app.icon}
              </div>

              {/* Status badge */}
              <div className="mb-3">
                {app.status === "live" ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {app.statusLabel}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase rounded-full bg-snl-violet/10 text-snl-violet border border-snl-violet/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-snl-violet" />
                    {app.statusLabel}
                  </span>
                )}
              </div>

              {/* App name & tagline */}
              <h3 className="font-heading text-xl font-bold text-snl-text mb-1">
                {app.name}
              </h3>
              <p
                className="text-sm font-medium mb-3"
                style={{ color: app.accentColor }}
              >
                {app.tagline}
              </p>

              {/* Description */}
              <p className="text-snl-muted text-sm leading-relaxed flex-1">
                {app.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                style={{
                  background: `linear-gradient(to right, transparent, ${app.accentColor}60, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
