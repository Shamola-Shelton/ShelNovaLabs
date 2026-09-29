"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenContact?: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 opacity-60" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-16 h-[34rem] w-[34rem] rounded-full bg-snl-accent/15 blur-[130px]"
        animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.55 }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-snl-border bg-snl-card/70 px-4 py-2 text-xs font-medium tracking-wide text-snl-muted backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-snl-accent" />
            Independent product studio
            <span className="mx-0.5 h-1 w-1 rounded-full bg-snl-subtle" />
            Nairobi, Kenya
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.08 }}
            className="max-w-3xl font-heading text-[clamp(3.2rem,7vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-snl-text"
          >
            From bold idea to{" "}
            <span className="hero-gradient-text">product people use.</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.18 }}
            className="mt-7 max-w-xl text-base leading-8 text-snl-muted sm:text-lg"
          >
            We design and build thoughtful web, mobile, and AI products for ambitious teams — from Nairobi to everywhere.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.28 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <button
              onClick={onOpenContact}
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-snl-accent px-6 text-sm font-semibold text-white shadow-lg shadow-snl-accent/20 transition duration-200 hover:-translate-y-0.5 hover:bg-snl-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-snl-accent"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#work"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-snl-border px-6 text-sm font-medium text-snl-text transition-colors hover:border-snl-border-light hover:bg-white/[0.03]"
            >
              Explore our work
            </a>
          </motion.div>

          <div className="mt-9 flex items-center gap-2 text-xs text-snl-subtle">
            <MapPin className="h-3.5 w-3.5 text-snl-accent" />
            <span>Building for communities, learners, and businesses worldwide</span>
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.16 }}
          className="hero-stage relative mx-auto h-[390px] w-full max-w-[620px] sm:h-[490px] lg:col-span-6 lg:h-[560px]"
          role="img"
          aria-label="A preview of ShelNova Labs products"
        >
          <div aria-hidden="true" className="hero-orbit hero-orbit-one" />
          <div aria-hidden="true" className="hero-orbit hero-orbit-two" />

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-4 top-12 bottom-12 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#101218] p-2 shadow-2xl shadow-black/50 sm:inset-x-9 sm:top-10 sm:bottom-10"
          >
            <div className="flex h-9 items-center gap-1.5 px-2">
              <span className="h-2 w-2 rounded-full bg-rose-400/80" />
              <span className="h-2 w-2 rounded-full bg-amber-300/80" />
              <span className="h-2 w-2 rounded-full bg-emerald-300/80" />
              <span className="ml-2 text-[10px] font-mono text-snl-subtle">SHELNOVA / PRODUCTS</span>
            </div>
            <div className="relative h-[calc(100%-2.25rem)] overflow-hidden rounded-[1.1rem] border border-white/10">
              <Image src="/images/shelnova_os.jpg" alt="" fill priority sizes="(max-width: 1024px) 90vw, 48vw" className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between sm:bottom-6 sm:left-6 sm:right-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">Built with purpose</p>
                  <p className="mt-1 font-heading text-lg font-semibold text-white sm:text-2xl">ShelNova OS</p>
                </div>
                <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[10px] text-white/80 backdrop-blur">Operations, made clear</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -left-1 bottom-4 w-[42%] overflow-hidden rounded-2xl border border-white/10 bg-[#111318] p-1.5 shadow-2xl shadow-black/40 sm:left-0 sm:bottom-6"
          >
            <div className="relative aspect-[1.35] overflow-hidden rounded-xl">
              <Image src="/images/biblewise.jpg" alt="" fill sizes="34vw" className="object-cover object-top" />
            </div>
            <p className="px-2 pb-1 pt-2 text-xs font-medium text-white">BibleWise <span className="text-snl-subtle">· AI study</span></p>
          </motion.div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-1 top-2 w-[38%] overflow-hidden rounded-2xl border border-white/10 bg-[#111318] p-1.5 shadow-2xl shadow-black/40 sm:right-0 sm:top-5"
          >
            <div className="relative aspect-[1.5] overflow-hidden rounded-xl">
              <Image src="/images/kadi_classic.jpg" alt="" fill sizes="30vw" className="object-cover object-top" />
            </div>
            <p className="px-2 pb-1 pt-2 text-xs font-medium text-white">Kadi Classic <span className="text-snl-subtle">· multiplayer</span></p>
          </motion.div>

          <div className="absolute right-[8%] top-[48%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_22px_5px_rgba(103,232,249,0.35)]" />
        </motion.div>
      </div>
    </section>
  );
}
