import type { NextConfig } from "next";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const isDev = process.env.NODE_ENV !== "production";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // React's dev tooling needs eval; production builds do not.
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}${gaId ? " https://www.googletagmanager.com" : ""}`,
      "style-src 'self' 'unsafe-inline'",
      gaId ? "img-src 'self' data: blob: https://www.google-analytics.com https://www.googletagmanager.com" : "img-src 'self' data: blob:",
      "font-src 'self' data:",
      gaId
        ? "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com"
        : "connect-src 'self'",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;