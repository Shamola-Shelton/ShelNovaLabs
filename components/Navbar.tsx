"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenContact?: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Work", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Insights", href: "/insights" },
    { label: "About", href: "/about" },
    { label: "Process", href: "/#process" },
  ];

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08090B]/85 backdrop-blur-md border-b border-snl-border shadow-xl py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 font-heading font-bold text-lg md:text-xl tracking-tight text-snl-text select-none"
        >
          <Image
            src="/images/logo.png"
            alt=""
            aria-hidden="true"
            width={720}
            height={612}
            className="h-10 w-auto md:h-11 object-contain drop-shadow-[0_0_10px_rgba(245,245,242,0.3)] transition-transform group-hover:scale-105"
          />
          <span>
            Shel<span className="text-snl-accent">Nova</span> Labs
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-9">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-snl-muted hover:text-snl-text text-sm font-medium transition-colors duration-200 tracking-wide"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="hidden sm:inline-flex group items-center gap-1.5 px-5 py-2.5 bg-snl-accent hover:bg-snl-accent-hover text-white rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-200 shadow-lg shadow-snl-accent/20 hover:scale-[1.02]"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-snl-muted hover:text-snl-text"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#0D0F12] border-b border-snl-border px-6 py-6 flex flex-col gap-5 animate-in slide-in-from-top duration-200"
        >
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-snl-muted hover:text-snl-text text-base font-medium transition-colors"
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false);
              onOpenContact?.();
            }}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-snl-accent text-white rounded-full text-sm font-semibold tracking-wide uppercase mt-2"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </nav>
  );
}
