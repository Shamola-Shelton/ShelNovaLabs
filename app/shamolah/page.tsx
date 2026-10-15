import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, Users, Mail, MapPin, Sparkles, MessageCircle } from "lucide-react";
import OrbitSkills, { AmbientEffects } from "@/components/home/OrbitSkills";
import { projectsData } from "@/data/projectsData";
import { insightsArticles } from "@/data/insightsData";
import JsonLd from "@/components/JsonLd";
import s from "../home.module.css";

const title = "Shelton Shamola | Founder of ShelNova Labs";
const description = "I'm Shelton Shamola, founder of ShelNova Labs. Explore the web, mobile, and AI products I'm building from Nairobi, Kenya.";
export const metadata: Metadata = {
  title, description,
  alternates: { canonical: "/shamolah" },
  openGraph: { title, description, url: "https://shelnovalabs.com/shamolah", type: "profile" },
  twitter: { card: "summary_large_image", title, description, creator: "@_shamolah_" },
};
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shelton Shamola",
  url: "https://shelnovalabs.com/shamolah",
  jobTitle: "Founder",
  worksFor: { "@type": "Organization", name: "ShelNova Labs", url: "https://shelnovalabs.com" },
  address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
  sameAs: [
    "https://x.com/_shamolah_",
    "https://www.linkedin.com/in/shelton-shamola-b83bb4184/",
    "https://github.com/Shamola-Shelton",
  ],
};
// The studio homepage shows the full project cards; here it's a short index.
const built = projectsData.filter(p => p.status !== "dev");
const writing = ["how-we-built-biblewise", "flutter-vs-native-app-development", "website-vs-web-app-difference"].flatMap(slug => insightsArticles.filter(a => a.slug === slug));
const now = [
  ["Shipping", "PupGrid, WordNova and Wash Rush — three small games, now on Google Play."],
  ["Building", "ShelNova OS, the dashboard I use to run the studio's apps in one place."],
  ["Writing", "Notes on building software in Kenya: costs, tools and what I learn shipping apps."],
];
function Heading({ children, number }: { children: React.ReactNode; number: string }) {
  return <div className={s.heading}><h2>{children}</h2><span>{number}</span></div>;
}

export default function ShamolahPage() {
  return (
    <div className={s.page}>
      <JsonLd data={personJsonLd} />
      <header className={s.nav}>
        <nav aria-label="Main navigation"><Link href="/shamolah" aria-current="page">Home</Link><Link href="/">Studio</Link><a href="#now">Now</a><a href="#built">Built</a><a href="#writing">Writing</a><a href="#connect">Contact</a></nav>
        <a href="https://github.com/Shamola-Shelton" target="_blank" rel="noopener noreferrer" aria-label="Shelton on GitHub"><Code2 size={17} /></a>
      </header>
      <main id="main" className={s.main}>
        <section className={s.intro} aria-labelledby="profile-name">
          <div className={s.eyebrow}><span /> A little corner of the internet</div>
          <div className={s.profile}>
            <div className={s.avatar} aria-label="Shelton Shamola monogram">ss<span><Sparkles size={15} /></span></div>
            <div><h1 id="profile-name">Shelton Shamola<span className={s.accent}>.</span></h1><p className={s.role}>Founder <span>/</span> Builder <span>/</span> Curious human</p><div className={s.location}><MapPin size={13} /> Nairobi, Kenya <span>·</span> Building ShelNova Labs</div></div>
          </div>
          <div className={s.bio}><p>Hey, I’m Shelton — the founder of <a href="#studio">ShelNova Labs</a>.</p><p>I turn ideas into <strong>web, mobile, and AI products</strong> that help people learn, connect, and get things done.</p><p>This is where I share what I’m building, what I’m learning, and the work behind it.</p></div>
          <div className={s.socials}>
            <a href="https://x.com/_shamolah_" target="_blank" rel="noopener noreferrer" aria-label="Follow Shelton on X"><span className={s.socialMark}>𝕏</span><span><strong>X</strong><small>@_shamolah_</small></span><ArrowUpRight size={17} /></a>
            <a href="https://www.linkedin.com/in/shelton-shamola-b83bb4184/" target="_blank" rel="noopener noreferrer"><Users size={20} /><span><strong>LinkedIn</strong><small>Shelton Shamola</small></span><ArrowUpRight size={17} /></a>
            <a href="https://github.com/Shamola-Shelton" target="_blank" rel="noopener noreferrer"><Code2 size={20} /><span><strong>GitHub</strong><small>Shamola-Shelton</small></span><ArrowUpRight size={17} /></a>
            <a href="https://wa.me/254707605641" target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /><span><strong>WhatsApp</strong><small>+254 707 605 641</small></span><ArrowUpRight size={17} /></a>
          </div>
          <div className={s.actions}><Link className={s.primary} href="/contact"><Mail size={15} /> Say hello</Link><Link className={s.secondary} href="/">Visit the studio <ArrowRight size={15} /></Link></div>
        </section>
        <OrbitSkills />
        <section id="now" className={s.section}>
          <Heading number="01">/now</Heading><p className={s.note}>What I&apos;m focused on right now · Oct 2026</p>
          <div className={`${s.capabilities} ${s.now}`}>{now.map(([label, text]) => <div key={label}><span>{label.toLowerCase()}</span><div><p className={s.nowText}>{text}</p></div></div>)}</div>
        </section>
        <section id="studio" className={s.section}>
          <Heading number="02">/about</Heading>
          <div className={s.studio}><div className={s.studioLabel}><Image src="/images/logo.png" alt="" width={32} height={28} /> THE STUDIO I’M BUILDING</div><h3>One curious mind.<br /><span>A whole world of possibilities.</span></h3><p>ShelNova Labs is where I bring ideas to life. From a familiar Kenyan card game and puppy-themed puzzles to tools for studying Scripture and prayer, the goal is simple: make useful things, and make them thoughtfully.</p><Link href="/">Visit ShelNova Labs <ArrowUpRight size={15} /></Link></div>
        </section>
        <section id="built" className={s.section}>
          <Heading number="03">/things-i&apos;ve-built</Heading><p className={s.note}>Shipped through ShelNova Labs. Full case studies live on the studio site.</p>
          <ul className={s.index}>{built.map(p => <li key={p.id}><Link href={`/projects/${p.id}`}><strong>{p.name}</strong><span>{p.tagline}</span><small>{p.category === "game" ? "Game" : p.category === "open-source" ? "Open source" : p.platforms === "Web" ? "Web" : "App"}</small></Link></li>)}</ul>
          <Link className={s.more} href="/projects">All case studies <ArrowRight size={15} /></Link>
        </section>
        <section id="writing" className={s.section}>
          <Heading number="04">/writing</Heading>
          <ul className={s.index}>{writing.map(a => <li key={a.slug}><Link href={`/insights/${a.slug}`}><strong>{a.title}</strong><small>{a.displayDate} · {a.readTime}</small></Link></li>)}</ul>
          <Link className={s.more} href="/insights">All writing <ArrowRight size={15} /></Link>
        </section>
        <section id="connect" className={s.contact}><span className={s.eyebrow}>GOOD THINGS START WITH A CONVERSATION</span><h2>Let’s make something <span className={s.accent}>matter.</span></h2><p>Have an idea, a question, or just want to say hi?<br />I’d love to hear from you.</p><Link className={s.primary} href="/contact"><Mail size={16} /> Get in touch <ArrowUpRight size={15} /></Link><a className={s.email} href="mailto:hello@shelnovalabs.com">hello@shelnovalabs.com</a></section>
      </main>
      <AmbientEffects />
      <footer className={s.footer}><span>Shelton Shamola <span className={s.accent}>✳</span></span><span>Built with intention, in Nairobi.</span><Link href="/privacy">Privacy</Link><a href="#main">Back to top ↑</a></footer>
    </div>
  );
}





