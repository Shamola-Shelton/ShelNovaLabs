import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  updated: string;
  backHref: string;
  backLabel: string;
  children: ReactNode;
};

const links = [
  { href: "/sda/privacy", label: "Privacy Policy" },
  { href: "/sda/terms", label: "Terms of Service" },
  { href: "/sda/delete-data", label: "Delete My Data" },
];

export function SdaSection({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="font-heading text-xl font-bold text-snl-text mb-3">
        {n}. {title}
      </h2>
      {children}
    </section>
  );
}

export function SdaContactCard() {
  return (
    <div className="mt-4 bg-snl-card border border-snl-border rounded-xl p-5 space-y-1">
      <p className="text-snl-text font-medium">ShelNova Labs Ltd.</p>
      <p>
        Email:{" "}
        <a href="mailto:hello@shelnovalabs.com" className="text-snl-violet hover:underline">
          hello@shelnovalabs.com
        </a>
      </p>
      <p>Website: shelnovalabs.com</p>
    </div>
  );
}

export default function SdaLegalShell({ eyebrow, title, updated, backHref, backLabel, children }: Props) {
  return (
    <div data-snl-legal className="min-h-screen bg-snl-bg text-snl-text">
      <div className="border-b border-snl-border">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-lg tracking-tight">
            Shel<span className="text-snl-violet">Nova</span> Labs
          </Link>
          <Link href={backHref} className="text-snl-muted hover:text-snl-text text-sm transition-colors">
            {backLabel}
          </Link>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-snl-violet text-sm font-medium tracking-widest uppercase mb-3">{eyebrow}</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-snl-text mb-3">{title}</h1>
          <p className="text-snl-muted text-sm">Last updated: {updated}</p>
        </div>
        <div className="space-y-10 text-snl-muted leading-relaxed">{children}</div>
      </div>

      <div className="border-t border-snl-border mt-16">
        <div className="max-w-3xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-snl-muted text-xs">
            © {new Date().getFullYear()} ShelNova Labs Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-snl-muted hover:text-snl-text text-xs transition-colors">
                {l.label}
              </Link>
            ))}
            <Link href="/" className="text-snl-muted hover:text-snl-text text-xs transition-colors">
              shelnovalabs.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
