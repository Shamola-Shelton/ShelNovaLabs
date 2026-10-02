import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, Users, Mail, MapPin, Sparkles, MessageCircle } from "lucide-react";
import OrbitSkills, { AmbientEffects } from "@/components/home/OrbitSkills";
import { projectsData } from "@/data/projectsData";
import s from "./home.module.css";

const title = "Shelton Shamola | Founder of ShelNovaLabs";
const description = "I'm Shelton Shamola, founder of ShelNovaLabs. Explore the web, mobile, and AI products I'm building from Nairobi, Kenya.";
export const metadata: Metadata = {
  title, description,
  openGraph: { title, description, url: "https://shelnovalabs.com", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};
const featured = ["biblewise", "kadi-party", "shelnova-os", "jiranify"].flatMap(id => projectsData.filter(p => p.id === id));
function Heading({ children, number }: { children: React.ReactNode; number: string }) {
  return <div className={s.heading}><h2>{children}</h2><span>{number}</span></div>;
}

export default function Home() {
  return (
    <div className={s.page}>
      <header className={s.nav}>
        <nav aria-label="Main navigation"><Link href="/" aria-current="page">Home</Link><Link href="/projects">Projects</Link><Link href="/insights">Writing</Link><a href="#skills-title">Skills</a><a href="#connect">Contact</a></nav>
        <a href="https://github.com/shelnovalabs" aria-label="ShelNovaLabs on GitHub"><Code2 size={17} /></a>
      </header>
      <main id="main" className={s.main}>
        <section className={s.intro} aria-labelledby="profile-name">
          <div className={s.eyebrow}><span /> A little corner of the internet</div>
          <div className={s.profile}>
            <div className={s.avatar} aria-label="Shelton Shamola monogram">ss<span><Sparkles size={15} /></span></div>
            <div><h1 id="profile-name">Shelton Shamola<span className={s.accent}>.</span></h1><p className={s.role}>Founder <span>/</span> Builder <span>/</span> Curious human</p><div className={s.location}><MapPin size={13} /> Nairobi, Kenya <span>·</span> Building ShelNovaLabs</div></div>
          </div>
          <div className={s.bio}><p>Hey, I’m Shelton — the founder of <a href="#studio">ShelNovaLabs</a>.</p><p>I turn ideas into <strong>web, mobile, and AI products</strong> that help people learn, connect, and get things done.</p><p>This is where I share what I’m building, what I’m learning, and the work behind it.</p></div>
          <div className={s.socials}>
            <a href="https://x.com/_shamolah_" target="_blank" rel="noopener noreferrer" aria-label="Follow Shelton on X"><span className={s.socialMark}>𝕏</span><span><strong>X</strong><small>@_shamolah_</small></span><ArrowUpRight size={17} /></a>
            <a href="https://www.linkedin.com/in/shelton-shamola-b83bb4184/" target="_blank" rel="noopener noreferrer"><Users size={20} /><span><strong>LinkedIn</strong><small>Shelton Shamola</small></span><ArrowUpRight size={17} /></a>
            <a href="https://github.com/Shamola-Shelton" target="_blank" rel="noopener noreferrer"><Code2 size={20} /><span><strong>GitHub</strong><small>Shamola-Shelton</small></span><ArrowUpRight size={17} /></a>
            <a href="https://wa.me/254707605641" target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /><span><strong>WhatsApp</strong><small>+254 707 605 641</small></span><ArrowUpRight size={17} /></a>
          </div>
          <div className={s.actions}><a className={s.primary} href="mailto:hello@shelnovalabs.com"><Mail size={15} /> Say hello</a><a className={s.secondary} href="#projects">Explore my work <ArrowRight size={15} /></a></div>
        </section>
        <OrbitSkills />
        <section id="studio" className={s.section}>
          <Heading number="01">/about</Heading>
          <div className={s.studio}><div className={s.studioLabel}><Image src="/images/logo.png" alt="" width={32} height={28} /> THE STUDIO I’M BUILDING</div><h3>One curious mind.<br /><span>A whole world of possibilities.</span></h3><p>ShelNovaLabs is where I bring ideas to life. From a familiar Kenyan card game to tools for studying Scripture and running a business, the goal is simple: make useful things, and make them thoughtfully.</p><Link href="/about">More about ShelNovaLabs <ArrowUpRight size={15} /></Link></div>
        </section>
        <section id="projects" className={s.section}>
          <Heading number="02">/selected-projects</Heading><p className={s.note}>A few ideas that made it out of the notebook.</p>
          <div className={s.projects}>{featured.map(p => <article className={s.project} key={p.id}>
            <Link className={s.projectImage} href={`/projects/${p.id}`} aria-label={`Explore ${p.name}`}><Image src={p.imageSrc ?? "/images/logo.png"} alt={`${p.name} product preview`} fill sizes="(max-width:600px) 90vw, 360px" /><span><ArrowUpRight size={18} /></span></Link>
            <div className={s.projectBody}><div className={s.projectTitle}><h3><Link href={`/projects/${p.id}`}>{p.name}</Link></h3><span>{p.status === "dev" ? "In progress" : p.status === "beta" ? "Beta" : "Live"}</span></div><p>{p.tagline}</p><div className={s.tags}>{p.tags.slice(0,3).map(tag => <span key={tag}>{tag}</span>)}</div></div>
          </article>)}</div><Link className={s.more} href="/projects">All projects <ArrowRight size={15} /></Link>
        </section>
        <section className={s.section}>
          <Heading number="03">/what-i-build</Heading>
          <div className={s.capabilities}>{[["01","Web experiences","Thoughtful websites and applications that make complex things feel simple."],["02","Mobile products","Useful everyday companions, built to feel at home in your hands."],["03","AI-powered tools","Practical intelligence that helps people find answers and move forward."]].map(([n,name,text]) => <div key={n}><span>{n}</span><div><h3>{name}</h3><p>{text}</p></div><ArrowUpRight size={17} /></div>)}</div><Link className={s.more} href="/services">Explore studio services <ArrowRight size={15} /></Link>
        </section>
        <section id="connect" className={s.contact}><span className={s.eyebrow}>GOOD THINGS START WITH A CONVERSATION</span><h2>Let’s make something <span className={s.accent}>matter.</span></h2><p>Have an idea, a question, or just want to say hi?<br />I’d love to hear from you.</p><a className={s.primary} href="mailto:hello@shelnovalabs.com"><Mail size={16} /> Get in touch <ArrowUpRight size={15} /></a><a className={s.email} href="mailto:hello@shelnovalabs.com">hello@shelnovalabs.com</a></section>
      </main>
      <AmbientEffects />
      <footer className={s.footer}><span>Shelton Shamola <span className={s.accent}>✳</span></span><span>Built with intention, in Nairobi.</span><Link href="/privacy">Privacy</Link><a href="#main">Back to top ↑</a></footer>
    </div>
  );
}





