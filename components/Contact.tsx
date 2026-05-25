"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact from ${name || "Website Visitor"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    window.location.href = `mailto:hello@shelnovalabs.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputClass =
    "w-full bg-snl-bg border border-snl-border rounded-xl px-4 py-3 text-snl-text placeholder-snl-muted text-sm focus:outline-none focus:border-snl-violet/60 focus:ring-1 focus:ring-snl-violet/30 transition-all duration-200";

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-snl-violet/3 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-snl-violet/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-snl-violet text-sm font-medium tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-snl-text mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-snl-muted text-lg max-w-xl mx-auto">
            Have a question, a partnership idea, or just want to say hello?
            We&apos;d love to hear from you.
          </p>
        </div>

        <div className="bg-snl-card border border-snl-border rounded-2xl p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-snl-muted text-xs font-medium uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-snl-muted text-xs font-medium uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-snl-muted text-xs font-medium uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell us what's on your mind..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-snl-violet hover:bg-snl-violet/85 text-white rounded-xl font-medium transition-all duration-200 hover:shadow-xl hover:shadow-snl-violet/25 hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-snl-border" />
            <span className="text-snl-muted text-xs">or reach us directly</span>
            <div className="flex-1 h-px bg-snl-border" />
          </div>

          {/* Direct contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:hello@shelnovalabs.com"
              className="flex items-center gap-2 text-snl-muted hover:text-snl-text transition-colors text-sm group"
            >
              <span className="w-8 h-8 rounded-lg bg-snl-border flex items-center justify-center group-hover:bg-snl-violet/15 transition-colors">
                ✉️
              </span>
              hello@shelnovalabs.com
            </a>

            <a
              href="https://github.com/shelnovalabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-snl-muted hover:text-snl-text transition-colors text-sm group"
            >
              <span className="w-8 h-8 rounded-lg bg-snl-border flex items-center justify-center group-hover:bg-snl-violet/15 transition-colors">
                🐙
              </span>
              github.com/shelnovalabs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
