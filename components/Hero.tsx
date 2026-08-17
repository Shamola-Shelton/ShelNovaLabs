"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Activity, Layers, Smartphone, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenContact?: () => void;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-6 md:px-10 overflow-hidden hero-grid">
      {/* Restrained background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-snl-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Studio Tag Badge */}
          <motion.div {...fadeUp(0)} className="mb-6 inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono tracking-wider uppercase text-snl-text/90 border border-snl-border rounded-full bg-snl-card/80 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-snl-accent animate-pulse" />
              Software &amp; Product Engineering Studio
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            {...fadeUp(0.12)}
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-snl-text leading-[1.08] mb-6"
          >
            We build digital products that move businesses forward.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            {...fadeUp(0.24)}
            className="text-snl-muted text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            ShelNova Labs is a software engineering studio building websites,
            mobile applications, platforms, and AI-powered solutions for ambitious
            businesses.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            {...fadeUp(0.36)}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 bg-snl-accent hover:bg-snl-accent-hover text-white rounded-full font-medium text-sm tracking-wide transition-all duration-200 shadow-xl shadow-snl-accent/25 hover:scale-[1.02] flex items-center justify-center gap-2 group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#work"
              className="w-full sm:w-auto px-8 py-4 border border-snl-border hover:border-snl-border-light text-snl-text rounded-full font-medium text-sm tracking-wide transition-all duration-200 hover:bg-snl-card flex items-center justify-center gap-2"
            >
              View Our Work
            </a>
          </motion.div>
        </div>

        {/* 3D Angled Product Stage Mockup (Matches exact reference image) */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 6 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto mt-4"
        >
          <div className="relative rounded-2xl bg-snl-card border border-snl-border p-3 sm:p-6 shadow-2xl overflow-hidden glass-panel">
            {/* Top window controls */}
            <div className="flex items-center gap-2 mb-4 px-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-snl-subtle ml-3 hidden sm:inline">
                shelnova-labs-platform.v2.4
              </span>
            </div>

            {/* Split Screen Stage: Dashboard + Mobile App Mockup */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Laptop Screen Dashboard View */}
              <div className="lg:col-span-8 bg-[#0D0F12] border border-snl-border rounded-xl p-5 sm:p-6 shadow-inner">
                <div className="flex items-center justify-between border-b border-snl-border pb-4 mb-5">
                  <div>
                    <h3 className="font-heading font-semibold text-snl-text text-base">
                      Business Operations Dashboard
                    </h3>
                    <p className="text-snl-subtle text-xs">Real-time analytics &amp; platform metrics</p>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live System
                  </span>
                </div>

                {/* Key Metric Stat Cards */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="bg-snl-card border border-snl-border p-3 sm:p-4 rounded-lg">
                    <p className="text-snl-subtle text-[11px] font-mono uppercase">Revenue</p>
                    <p className="text-snl-text font-heading font-bold text-lg sm:text-xl mt-1">$24,780</p>
                    <p className="text-emerald-400 text-[10px] mt-0.5">↑ +18.4% this mo</p>
                  </div>
                  <div className="bg-snl-card border border-snl-border p-3 sm:p-4 rounded-lg">
                    <p className="text-snl-subtle text-[11px] font-mono uppercase">Active Users</p>
                    <p className="text-snl-text font-heading font-bold text-lg sm:text-xl mt-1">1,248</p>
                    <p className="text-snl-muted text-[10px] mt-0.5">Across 4 products</p>
                  </div>
                  <div className="bg-snl-card border border-snl-border p-3 sm:p-4 rounded-lg">
                    <p className="text-snl-subtle text-[11px] font-mono uppercase">Uptime</p>
                    <p className="text-snl-text font-heading font-bold text-lg sm:text-xl mt-1">99.98%</p>
                    <p className="text-snl-accent text-[10px] mt-0.5">SLA Guaranteed</p>
                  </div>
                </div>

                {/* Simulated Chart Line */}
                <div className="bg-snl-card border border-snl-border p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-snl-muted font-medium">Revenue Growth Analytics</span>
                    <Activity className="w-4 h-4 text-snl-accent" />
                  </div>
                  <div className="h-20 sm:h-24 w-full flex items-end justify-between gap-1 pt-4">
                    {[35, 42, 58, 48, 65, 72, 68, 85, 92, 88, 96, 100].map((val, i) => (
                      <div key={i} className="flex-1 bg-snl-border rounded-t flex items-end hover:bg-snl-accent/50 transition-colors">
                        <div
                          className="w-full bg-snl-accent rounded-t transition-all"
                          style={{ height: `${val}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile Phone Mockup Overlay View (BibleWise AI Coach representation) */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-full max-w-[260px] bg-[#0D0F12] border-4 border-snl-border rounded-[32px] p-4 shadow-2xl relative overflow-hidden">
                  {/* Speaker Notch */}
                  <div className="w-20 h-3 bg-snl-border rounded-full mx-auto mb-4" />

                  {/* App Header */}
                  <div className="text-center mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold px-2.5 py-0.5 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                      ✦ AI Coach Active
                    </span>
                    <h4 className="font-heading text-sm font-bold text-snl-text mt-2">
                      Ask. Learn. Grow in Faith.
                    </h4>
                  </div>

                  {/* Chat Conversation Box */}
                  <div className="bg-[#08090B] border border-snl-border p-3 rounded-xl mb-3 space-y-2">
                    <div className="bg-[#0F4C3A]/30 border border-[#0F4C3A]/50 p-2 rounded-lg text-right">
                      <p className="text-[10px] text-emerald-300 font-medium">What does grace mean?</p>
                    </div>
                    <div className="bg-snl-card p-2 rounded-lg text-left border border-snl-border">
                      <p className="text-[10px] text-snl-muted leading-tight">
                        &quot;Grace is the unmerited favor of God. Ephesians 2:8-9.&quot;
                      </p>
                    </div>
                  </div>

                  {/* Chapter Insights Tag */}
                  <div className="bg-snl-card border border-snl-border p-2.5 rounded-xl flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-snl-text font-semibold">Exodus 1 Insights</p>
                      <p className="text-[9px] text-snl-subtle">Life Application &amp; Key Takeaways</p>
                    </div>
                    <span className="text-xs text-emerald-400 font-bold">→</span>
                  </div>

                  <div className="mt-3 pt-2 border-t border-snl-border flex justify-center">
                    <span className="text-[10px] text-emerald-400 font-semibold px-3 py-1 bg-emerald-500/15 rounded-full">
                      Ask AI Coach
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
