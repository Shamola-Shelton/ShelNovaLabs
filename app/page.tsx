import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projectsData, servicesData } from "@/data/projectsData";
import s from "./home.module.css";

const title = "ShelNova Labs | Apps, Games & Web Products from Nairobi, Kenya";
const description =
  "ShelNova Labs is a product studio in Nairobi, Kenya building mobile apps, games, websites and AI tools — including Sancta, BibleWise, Kadi Classic and PupGrid.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "https://shelnovalabs.com", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const featured = ["pupgrid", "kadi-party", "biblewise", "wordnova"].flatMap((id) => projectsData.filter((p) => p.id === id));
const appsAndGames = projectsData.filter((p) => p.status !== "dev" && (p.category === "game" || p.platforms.includes("Android") || p.platforms.includes("iOS")));

function statusText(status: string) {
  return status === "dev" ? "In progress" : status === "beta" ? "Coming soon" : "Live";
}

function Heading({ children, number }: { children: React.ReactNode; number: string }) {
  return <div className={s.heading}><h2>{children}</h2><span>{number}</span></div>;
}

export default function Home() {
  return (
    <div className={s.page}>
      <Navbar />
      <main id="main" className={s.main}>
        <section className={s.intro} aria-labelledby="studio-name">
          <div className={s.eyebrow}><span /> PRODUCT STUDIO · NAIROBI, KENYA</div>
          <div className={s.profile}>
            <div className={s.avatar}><Image src="/images/logo.png" alt="ShelNova Labs logo" width={64} height={56} priority /></div>
            <div>
              <h1 id="studio-name">ShelNova Labs<span className={s.accent}>.</span></h1>
              <p className={s.role}>Mobile apps <span>/</span> Games <span>/</span> Web & AI products</p>
              <div className={s.location}><MapPin size={13} /> Nairobi, Kenya <span>·</span> Shipping to Google Play & the web</div>
            </div>
          </div>
          <div className={s.bio}>
            <p>We design and build <strong>apps, games and web products</strong> that people use every day.</p>
            <p>Our own products include a Catholic prayer app, an AI Bible coach, a digital Kenyan card game, a puppy-themed logic puzzle and a cosmic word game.</p>
            <p>We also build websites, web apps and mobile apps for businesses and organizations.</p>
          </div>
          <div className={s.actions}>
            <Link className={s.primary} href="/contact"><Mail size={15} /> Start a project</Link>
            <a className={s.secondary} href="#work">See our work <ArrowRight size={15} /></a>
          </div>
        </section>

        <section id="work" className={s.section}>
          <Heading number="01">/featured-work</Heading>
          <p className={s.note}>Products we designed, built and shipped.</p>
          <div className={s.projects}>{featured.map((p) => <article className={s.project} key={p.id}>
            <Link className={s.projectImage} href={`/projects/${p.id}`} aria-label={`Explore ${p.name}`}>
              {p.imageSrc
                ? <Image src={p.imageSrc} alt={`${p.name} product preview`} fill sizes="(max-width:600px) 90vw, 360px" />
                : <span className={s.projectFallback} style={{ color: p.accentColor }} aria-hidden="true">{p.name.charAt(0)}</span>}
              <span><ArrowUpRight size={18} /></span>
            </Link>
            <div className={s.projectBody}>
              <div className={s.projectTitle}><h3><Link href={`/projects/${p.id}`}>{p.name}</Link></h3><span>{statusText(p.status)}</span></div>
              <p>{p.tagline}</p>
              <div className={s.tags}>{p.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </article>)}</div>
          <Link className={s.more} href="/projects">All projects <ArrowRight size={15} /></Link>
        </section>

        <section id="apps" className={s.section}>
          <Heading number="02">/apps-and-games</Heading>
          <p className={s.note}>Everything we publish on the app stores, with links to each app&apos;s policies.</p>
          <div className={s.capabilities}>{appsAndGames.map((p, i) => <div key={p.id}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3><Link href={`/projects/${p.id}`}>{p.name}</Link> <small className={s.badge}>{p.category === "game" ? "Game" : "App"} · {statusText(p.status)}</small></h3>
              <p>{p.tagline}</p>
              <div className={s.appLinks}>
                {p.storeLinks?.playStore && <a href={p.storeLinks.playStore} target="_blank" rel="noopener noreferrer">Google Play ↗</a>}
                {p.legalLinks?.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
              </div>
            </div>
            <ArrowUpRight size={17} />
          </div>)}</div>
          <Link className={s.more} href="/privacy">All app policies <ArrowRight size={15} /></Link>
        </section>

        <section className={s.section}>
          <Heading number="03">/what-we-build</Heading>
          <div className={s.capabilities}>{servicesData.slice(0, 4).map((service) => <div key={service.slug}>
            <span>{service.index}</span>
            <div><h3><Link href={`/services/${service.slug}`}>{service.title}</Link></h3><p>{service.description}</p></div>
            <ArrowUpRight size={17} />
          </div>)}</div>
          <Link className={s.more} href="/services">All services <ArrowRight size={15} /></Link>
        </section>

        <section className={s.section}>
          <Heading number="04">/founder</Heading>
          <div className={s.studio}>
            <div className={s.studioLabel}>THE PERSON BEHIND THE STUDIO</div>
            <h3>Shelton Shamola.<br /><span>Founder, builder, curious human.</span></h3>
            <p>ShelNova Labs was started by Shelton in Nairobi to turn ideas into useful products — from a familiar Kenyan card game to tools for studying Scripture. Read more about his work, skills and writing.</p>
            <Link href="/shamolah">Meet Shelton <ArrowUpRight size={15} /></Link>
          </div>
        </section>

        <section id="connect" className={s.contact}>
          <span className={s.eyebrow}>GOOD THINGS START WITH A CONVERSATION</span>
          <h2>Have a product in mind? <span className={s.accent}>Let&apos;s build it.</span></h2>
          <p>Tell us about your idea and we&apos;ll get back to you.</p>
          <div className={s.contactActions}>
            <Link className={s.primary} href="/contact"><Mail size={16} /> Start a project <ArrowUpRight size={15} /></Link>
            <a className={s.secondary} href="https://wa.me/254707605641" target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> WhatsApp</a>
          </div>
          <a className={s.email} href="mailto:hello@shelnovalabs.com">hello@shelnovalabs.com</a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
