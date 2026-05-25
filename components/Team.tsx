"use client";

const members = [
  {
    initials: "SSJ",
    name: "Shelton Shamola Juma",
    role: "Chief Executive Officer",
    tag: "CEO",
    bio: "Visionary founder driving ShelNova Labs' strategy, product direction, and growth. Passionate about building technology that creates real-world impact for communities.",
    color: "#6c63ff",
    bg: "rgba(108,99,255,0.12)",
  },
  {
    initials: "QR",
    name: "Qabale Roba",
    role: "Chief Technology Officer",
    tag: "CTO",
    bio: "Engineering leader overseeing architecture, infrastructure, and technical excellence across all ShelNova Labs products. Keeps the lab running at full power.",
    color: "#00d4ff",
    bg: "rgba(0,212,255,0.12)",
  },
  {
    initials: "TK",
    name: "Tom Kariuki",
    role: "Head of Design",
    tag: "Design",
    bio: "Crafting the visual language and user experience across ShelNova Labs' product suite — ensuring every interface is as beautiful as it is functional.",
    color: "#f472b6",
    bg: "rgba(244,114,182,0.12)",
  },
  {
    initials: "BO",
    name: "Bob Otieno",
    role: "Head of Growth",
    tag: "Growth",
    bio: "Driving user acquisition, partnerships, and community building — bringing ShelNova Labs' apps to the people who need them most.",
    color: "#34d399",
    bg: "rgba(52,211,153,0.12)",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-snl-violet text-sm font-medium tracking-widest uppercase mb-3">
            The People
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-snl-text mb-4">
            Meet the Team
          </h2>
          <p className="text-snl-muted text-lg max-w-xl mx-auto">
            A small, focused team building products with purpose. Every person
            here shapes what ShelNova Labs becomes.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <div
              key={i}
              className="group flex flex-col items-center text-center bg-snl-card border border-snl-border rounded-2xl p-6 hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={
                {
                  "--hover-border": member.color,
                } as React.CSSProperties
              }
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = `${member.color}55`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "")
              }
            >
              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center font-heading font-bold text-xl mb-4 ring-2 ring-offset-2 ring-offset-snl-card transition-all duration-300"
                style={{
                  background: member.bg,
                  color: member.color,
                  boxShadow: `0 0 0 2px ${member.color}30`,
                }}
              >
                {member.initials}
              </div>

              {/* Role tag */}
              <span
                className="inline-block px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase rounded-full mb-3"
                style={{
                  backgroundColor: `${member.color}15`,
                  color: member.color,
                  border: `1px solid ${member.color}30`,
                }}
              >
                {member.tag}
              </span>

              {/* Name & title */}
              <h3 className="font-heading font-bold text-snl-text text-base leading-tight mb-1">
                {member.name}
              </h3>
              <p className="text-snl-muted text-xs font-medium mb-4">
                {member.role}
              </p>

              {/* Bio */}
              <p className="text-snl-muted text-xs leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
