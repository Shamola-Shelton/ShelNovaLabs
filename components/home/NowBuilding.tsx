import Link from "next/link";
import { ArrowUpRight, CircleDot } from "lucide-react";
import { currentFocus } from "@/data/homeContent";
import s from "@/app/home.module.css";

export default function NowBuilding() {
  return (
    <section className={s.section} aria-labelledby="now-building-title">
      <div className={s.heading}><h2 id="now-building-title">/now-building</h2><span>ACTIVE PROJECT</span></div>
      <article className={s.nowBuilding}>
        <div className={s.nowTopline}><span><CircleDot size={13} /> CURRENT FOCUS</span><span>{currentFocus.status}</span></div>
        <h3>{currentFocus.title}</h3>
        <p>{currentFocus.summary}</p>
        <ul aria-label="Current focus areas">{currentFocus.focus.map((item) => <li key={item}>{item}</li>)}</ul>
        <Link href={currentFocus.href}>See what I’m building <ArrowUpRight size={15} /></Link>
      </article>
    </section>
  );
}
