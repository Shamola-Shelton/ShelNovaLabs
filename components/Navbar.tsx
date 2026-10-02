"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Writing", href: "/insights" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="snl-inner-nav">
      <div className="snl-inner-nav__inner">
        <Link href="/" className="snl-inner-nav__brand" aria-label="Shelton Shamola, home">
          <strong>Shelton Shamola</strong>
          <small>Founder · ShelNova Labs</small>
        </Link>

        <nav aria-label="Main navigation" className="snl-inner-nav__links">
          {navItems.map(({ label, href }) => <Link key={label} href={href}>{label}</Link>)}
        </nav>

        <Link href="/contact" className="snl-inner-nav__cta">
          Let&apos;s talk <ArrowUpRight aria-hidden="true" size={14} />
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="snl-mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="snl-inner-nav__toggle"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {menuOpen && (
        <nav id="snl-mobile-menu" aria-label="Mobile navigation" className="snl-inner-nav__mobile">
          {navItems.map(({ label, href }) => (
            <Link key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk ↗</Link>
        </nav>
      )}
    </header>
  );
}
