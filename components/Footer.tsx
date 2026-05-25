export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-snl-border bg-snl-bg">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="font-heading font-bold text-lg tracking-tight">
              Shel<span className="text-snl-violet">Nova</span>{" "}
              <span className="text-snl-text">Labs</span>
            </span>
            <p className="text-snl-muted text-sm max-w-xs text-center md:text-left leading-relaxed">
              Building apps that matter — for communities, learners, and players.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-snl-text text-xs font-semibold uppercase tracking-wider mb-1">
              Navigate
            </span>
            {[
              { label: "Apps", href: "#apps" },
              { label: "About", href: "#about" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-snl-muted hover:text-snl-text transition-colors text-sm"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Apps */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-snl-text text-xs font-semibold uppercase tracking-wider mb-1">
              Our Apps
            </span>
            {[
              { label: "Kadi Classic", href: "#apps" },
              { label: "JiraniFy", href: "#apps" },
              { label: "Gist & Gain", href: "#apps" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-snl-muted hover:text-snl-text transition-colors text-sm"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-snl-text text-xs font-semibold uppercase tracking-wider mb-1">
              Connect
            </span>
            <a
              href="mailto:hello@shelnovalabs.com"
              className="text-snl-muted hover:text-snl-text transition-colors text-sm"
            >
              hello@shelnovalabs.com
            </a>
            <a
              href="https://github.com/shelnovalabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-snl-muted hover:text-snl-text transition-colors text-sm"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-snl-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-snl-muted text-xs">
            © {year} ShelNova Labs Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="text-snl-muted hover:text-snl-text text-xs transition-colors"
            >
              Privacy Policy
            </a>
            <p className="text-snl-muted text-xs">
              Built with ❤️ and Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
