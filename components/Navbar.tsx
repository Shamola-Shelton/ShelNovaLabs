"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-snl-bg/85 backdrop-blur-md border-b border-snl-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading font-bold text-lg tracking-tight select-none"
        >
          Shel<span className="text-snl-violet">Nova</span>{" "}
          <span className="text-snl-text">Labs</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Apps", href: "#apps" },
            { label: "About", href: "#about" },
            { label: "Team", href: "#team" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-snl-muted hover:text-snl-text transition-colors text-sm font-medium"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#apps"
            className="hidden md:inline-flex items-center px-4 py-2 bg-snl-violet hover:bg-snl-violet/80 text-white rounded-full text-sm font-medium transition-all hover:shadow-lg hover:shadow-snl-violet/25"
          >
            Explore Apps
          </a>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-1"
          >
            <span
              className={`block w-5 h-0.5 bg-snl-text transition-all duration-200 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-snl-text transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-snl-text transition-all duration-200 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-snl-card border-b border-snl-border px-6 py-4 flex flex-col gap-4">
          {[
            { label: "Apps", href: "#apps" },
            { label: "About", href: "#about" },
            { label: "Team", href: "#team" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-snl-muted hover:text-snl-text transition-colors text-sm font-medium"
            >
              {label}
            </a>
          ))}
          <a
            href="#apps"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-4 py-2 bg-snl-violet text-white rounded-full text-sm font-medium"
          >
            Explore Apps
          </a>
        </div>
      )}
    </nav>
  );
}
