"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { ArrowUpRight, Command, Search, X } from "lucide-react";
import styles from "./CommandPalette.module.css";

const commands = [
  { label: "Selected projects", detail: "Jump to the work I’ve shipped", href: "/#projects", group: "Navigate", keywords: "work portfolio case studies" },
  { label: "My skills", detail: "Explore my full-stack toolkit", href: "/#skills-title", group: "Navigate", keywords: "tools stack orbit developer" },
  { label: "About Shelton", detail: "Founder and full-stack developer", href: "/about", group: "Navigate", keywords: "about founder story timeline" },
  { label: "Get in touch", detail: "Start a conversation", href: "/contact", group: "Navigate", keywords: "contact email hello" },
  { label: "ShelNova OS", detail: "Current build · Studio operations", href: "/projects/shelnova-os", group: "Projects", keywords: "now building flowdesk operations" },
  { label: "BibleWise", detail: "AI Bible study companion", href: "/projects/biblewise", group: "Projects", keywords: "mobile scripture AI" },
  { label: "Kadi Classic", detail: "A Kenyan card game on mobile", href: "/projects/kadi-party", group: "Projects", keywords: "mobile game card" },
  { label: "JiraniFy", detail: "Tools for trusted neighborhoods", href: "/projects/jiranify", group: "Projects", keywords: "community local" },
];

export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);
  const results = useMemo(() => {
    const value = query.trim().toLowerCase();
    return commands.filter((command) => !value || `${command.label} ${command.detail} ${command.keywords}`.toLowerCase().includes(value));
  }, [query]);

  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      inputRef.current?.focus();
    } else if (wasOpen.current) {
      wasOpen.current = false;
      triggerRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const dialog = document.querySelector<HTMLElement>("[aria-label='Quick navigation']");
      const focusable = dialog?.querySelectorAll<HTMLElement>("input, button, a[href]");
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", trapFocus);
    return () => document.removeEventListener("keydown", trapFocus);
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const typing = target?.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target?.tagName ?? "");
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
        setQuery("");
        setActiveIndex(0);
      } else if (event.key === "/" && !typing && !event.metaKey && !event.ctrlKey && !event.altKey) {
        event.preventDefault();
        setOpen(true);
        setQuery("");
        setActiveIndex(0);
      } else if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function handleInputKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => results.length ? (index + 1) % results.length : 0);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => results.length ? (index - 1 + results.length) % results.length : 0);
    } else if (event.key === "Enter" && results[activeIndex]) {
      router.push(results[activeIndex].href);
      setOpen(false);
    }
  }

  return (
    <>
      <button ref={triggerRef} type="button" className={styles.trigger} onClick={() => { setOpen(true); setQuery(""); setActiveIndex(0); }} aria-haspopup="dialog" aria-expanded={open}>
        <Search size={14} /><span>Quick jump</span><kbd><Command size={10} /> K</kbd>
      </button>
      {open && (
        <div className={styles.backdrop} data-no-spark onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
          <section className={styles.palette} role="dialog" aria-modal="true" aria-label="Quick navigation">
            <div className={styles.searchRow}><Search size={18} /><input ref={inputRef} value={query} onChange={(event) => { setQuery(event.target.value); setActiveIndex(0); }} onKeyDown={handleInputKeyDown} placeholder="Where would you like to go?" aria-label="Search pages and projects" /><button type="button" className={styles.close} onClick={() => setOpen(false)} aria-label="Close command palette"><X size={15} /></button></div>
            <div className={styles.results}>
              {results.length ? results.map((item, index) => (
                <Link key={item.href} href={item.href} className={index === activeIndex ? styles.activeResult : styles.result} onMouseEnter={() => setActiveIndex(index)} onClick={() => setOpen(false)}>
                  <span><small>{item.group}</small><strong>{item.label}</strong><em>{item.detail}</em></span><ArrowUpRight size={15} />
                </Link>
              )) : <p className={styles.empty}>No matching pages or projects.</p>}
            </div>
            <div className={styles.hint}><span><kbd>↑</kbd><kbd>↓</kbd> to navigate</span><span><kbd>↵</kbd> to open</span><span>Press <kbd>/</kbd> anywhere</span></div>
          </section>
        </div>
      )}
    </>
  );
}
