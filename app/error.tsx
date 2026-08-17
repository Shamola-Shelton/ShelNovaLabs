"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-snl-bg text-snl-text font-sans flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <p className="font-mono text-7xl font-bold text-snl-muted">
          <span className="text-snl-accent">5</span>0<span className="text-snl-accent">0</span>
        </p>
        <h1 className="font-heading text-2xl font-bold mt-6">Something went wrong</h1>
        <p className="text-snl-muted mt-3 text-sm leading-relaxed">
          An unexpected error occurred. Please try again, or contact us at{" "}
          <a
            href="mailto:hello@shelnovalabs.com"
            className="text-snl-accent hover:text-snl-accent-hover underline underline-offset-4"
          >
            hello@shelnovalabs.com
          </a>
          .
        </p>
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-snl-accent hover:bg-snl-accent-hover text-white rounded-full text-xs font-semibold tracking-wide uppercase transition-colors"
        >
          Try again
        </button>
      </div>
    </main>
  );
}