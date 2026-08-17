import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-snl-bg text-snl-text font-sans flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
<p className="font-mono text-7xl font-bold text-snl-muted">
  <span className="text-snl-accent">4</span>0<span className="text-snl-accent">4</span>
</p>
        <h1 className="font-heading text-2xl font-bold mt-6">Page not found</h1>
        <p className="text-snl-muted mt-3 text-sm leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-snl-accent hover:bg-snl-accent-hover text-white rounded-full text-xs font-semibold tracking-wide uppercase transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}