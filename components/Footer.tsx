import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-snl-border bg-[#08090B] py-16 px-6 md:px-10 text-snl-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-snl-border/60">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-3 font-heading font-bold text-xl text-snl-text tracking-tight select-none"
            >
              <Image
                src="/images/logo.png"
                alt=""
                aria-hidden="true"
                width={720}
                height={612}
                className="h-12 w-auto md:h-14 object-contain drop-shadow-[0_0_10px_rgba(245,245,242,0.3)]"
              />
              <span>
                Shel<span className="text-snl-accent">Nova</span> Labs
              </span>
            </Link>
            <p className="text-sm text-snl-muted max-w-sm leading-relaxed">
              Building digital products for ambitious businesses — websites, mobile applications,
              platforms, and AI-powered software systems from Nairobi, Kenya.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold text-snl-text uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              {[                 { label: "Our Work", href: "/projects" },
                { label: "Our Services", href: "/services" },
                { label: "About Studio", href: "/about" },
                { label: "Our Process", href: "/#process" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-snl-text transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold text-snl-text uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href="https://github.com/Shamola-Shelton"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-snl-text transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-snl-accent" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/Shamola-Shelton"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-snl-text transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-snl-accent" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/shelnovalabs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-snl-text transition-colors"
              >
                <svg className="w-4 h-4 fill-current text-snl-accent" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>X / Twitter</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-snl-subtle">
          <p>© {currentYear} ShelNova Labs Ltd. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-snl-text transition-colors">
              Privacy Policy
            </Link>
            <Link href="/privacy/biblewise" className="hover:text-snl-text transition-colors">
              BibleWise Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
