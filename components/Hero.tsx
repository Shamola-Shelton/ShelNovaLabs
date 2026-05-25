"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-16">
      {/* Dot-grid background */}
      <div className="absolute inset-0 hero-grid" />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-snl-violet/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-snl-cyan/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Eyebrow badge */}
        <motion.div {...fadeUp(0)} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-snl-violet border border-snl-violet/30 rounded-full bg-snl-violet/8">
            <span className="w-1.5 h-1.5 rounded-full bg-snl-violet animate-pulse" />
            ShelNova Labs Ltd.
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.15)}
          className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
        >
          Building Apps
          <span className="block bg-gradient-to-r from-snl-violet via-purple-400 to-snl-cyan bg-clip-text text-transparent mt-1">
            That Matter
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-snl-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          We craft digital experiences for communities, learners, and players —
          one elegant app at a time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.45)}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#apps"
            className="px-8 py-3.5 bg-snl-violet hover:bg-snl-violet/85 text-white rounded-full font-medium transition-all duration-200 hover:shadow-xl hover:shadow-snl-violet/30 hover:-translate-y-0.5"
          >
            See Our Apps
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 border border-snl-border hover:border-snl-violet/50 text-snl-text rounded-full font-medium transition-all duration-200 hover:bg-snl-violet/5"
          >
            Learn About Us
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-snl-muted text-[10px] tracking-[0.2em] uppercase font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-snl-muted/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
