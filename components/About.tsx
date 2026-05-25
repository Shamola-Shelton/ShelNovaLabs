const values = [
  {
    icon: "⚡",
    title: "Innovation First",
    description:
      "We challenge conventions and push the boundaries of what apps can do, embracing emerging technologies to craft truly forward-thinking solutions.",
  },
  {
    icon: "🌍",
    title: "Community-Centered",
    description:
      "We build for real people and real communities. Every feature starts with a question: does this make someone's life meaningfully better?",
  },
  {
    icon: "💎",
    title: "Craft Over Speed",
    description:
      "We release fewer things, but we release them with excellence. Quality is not optional — it's the foundation of everything we ship.",
  },
  {
    icon: "♿",
    title: "Accessible by Design",
    description:
      "Great software should be available to everyone, everywhere. We design with inclusion in mind from the very first pixel.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-snl-violet/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-snl-violet text-sm font-medium tracking-widest uppercase mb-3">
            Who We Are
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-snl-text mb-4">
            About ShelNova Labs
          </h2>
          <p className="text-snl-muted text-lg max-w-2xl mx-auto leading-relaxed">
            We are a digital product studio obsessed with building apps that
            connect, educate, and entertain. From day one, we've believed that
            great software is equal parts empathy and engineering.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Mission */}
          <div className="bg-snl-card border border-snl-border rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-snl-violet to-transparent rounded-t-2xl" />
            <div className="w-10 h-10 rounded-lg bg-snl-violet/15 border border-snl-violet/20 flex items-center justify-center text-lg mb-5">
              🎯
            </div>
            <h3 className="font-heading text-xl font-bold text-snl-text mb-4">
              Our Mission
            </h3>
            <p className="text-snl-muted leading-relaxed italic border-l-2 border-snl-violet/40 pl-4">
              &ldquo;To engineer digital experiences that simplify complexity, empower
              communities, and transform everyday challenges into intuitive,
              elegant solutions.&rdquo;
            </p>
          </div>

          {/* Vision */}
          <div className="bg-snl-card border border-snl-border rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-snl-cyan to-transparent rounded-t-2xl" />
            <div className="w-10 h-10 rounded-lg bg-snl-cyan/15 border border-snl-cyan/20 flex items-center justify-center text-lg mb-5">
              🔭
            </div>
            <h3 className="font-heading text-xl font-bold text-snl-text mb-4">
              Our Vision
            </h3>
            <p className="text-snl-muted leading-relaxed italic border-l-2 border-snl-cyan/40 pl-4">
              &ldquo;To become a globally recognized software lab where innovation
              meets accessibility — building apps that make a meaningful
              difference in how people connect, learn, and play.&rdquo;
            </p>
          </div>
        </div>

        {/* Core values */}
        <div className="text-center mb-10">
          <h3 className="font-heading text-2xl font-bold text-snl-text mb-2">
            Our Core Values
          </h3>
          <p className="text-snl-muted">The principles that guide every decision we make.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex gap-4 bg-snl-card border border-snl-border rounded-xl p-6 hover:border-snl-violet/30 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-snl-border flex items-center justify-center text-lg shrink-0 mt-0.5">
                {value.icon}
              </div>
              <div>
                <h4 className="font-heading font-bold text-snl-text mb-1.5">
                  {value.title}
                </h4>
                <p className="text-snl-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
