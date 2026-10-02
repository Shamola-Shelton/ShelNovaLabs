import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="snl-inner-footer">
      <div className="snl-inner-footer__top">
        <div>
          <Link href="/" className="snl-inner-footer__name">Shelton Shamola <span aria-hidden="true">✳</span></Link>
          <div style={{ marginTop: 5 }}>Founder, ShelNova Labs · Nairobi, Kenya</div>
        </div>
        <nav aria-label="Footer navigation" className="snl-inner-footer__links">
          <Link href="/projects">Work</Link>
          <Link href="/services">Services</Link>
          <Link href="/insights">Writing</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
      <div className="snl-inner-footer__bottom">
        <span>© {currentYear} ShelNova Labs Ltd.</span>
        <nav aria-label="Social links" className="snl-inner-footer__social">
          <a href="https://x.com/_shamolah_" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://www.linkedin.com/in/shelton-shamola-b83bb4184/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Shamola-Shelton" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://wa.me/254707605641" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </nav>
        <nav aria-label="Legal pages" className="snl-inner-footer__links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/privacy/biblewise">BibleWise privacy</Link>
        </nav>
      </div>
    </footer>
  );
}
