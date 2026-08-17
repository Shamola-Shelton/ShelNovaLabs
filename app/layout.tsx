import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "ShelNova Labs — Software & Product Engineering Studio",
  description:
    "ShelNova Labs is a digital product engineering studio building mobile applications, scalable web platforms, SaaS systems, and AI-powered solutions for ambitious businesses.",
  keywords: [
    "ShelNova Labs",
    "Product Engineering Studio",
    "Mobile Application Development",
    "SaaS Architecture",
    "Next.js Development Studio",
    "Flutter Mobile Apps",
    "AI Product Development",
    "Kadi Classic",
    "BibleWise AI",
  ],
  authors: [{ name: "ShelNova Labs Ltd.", url: "https://shelnovalabs.com" }],
  creator: "ShelNova Labs Ltd.",
  publisher: "ShelNova Labs Ltd.",
  alternates: {
    canonical: "https://shelnovalabs.com",
  },
  icons: {
    icon: [
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "ShelNova Labs — Software & Product Engineering Studio",
    description:
      "We build digital products that move businesses forward. Mobile apps, web applications, SaaS platforms, and AI systems engineered for impact.",
    url: "https://shelnovalabs.com",
    siteName: "ShelNova Labs",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://shelnovalabs.com/og.png",
        width: 1200,
        height: 630,
        alt: "ShelNova Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShelNova Labs — Software & Product Engineering Studio",
    description:
      "We build digital products that move businesses forward. Mobile apps, web applications, SaaS platforms, and AI systems.",
    creator: "@shelnovalabs",
    images: ["https://shelnovalabs.com/og.png"],
  },
  metadataBase: new URL("https://shelnovalabs.com"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ShelNova Labs",
    url: "https://shelnovalabs.com",
    logo: "https://shelnovalabs.com/og.png",
    sameAs: [
      "https://github.com/shelnovalabs",
      "https://www.linkedin.com/in/Shamola-Shelton",
      "https://x.com/shelnovalabs",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@shelnovalabs.com",
      areaServed: "Worldwide",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    description:
      "Digital product engineering studio building mobile apps, web platforms, SaaS systems, and AI-powered software.",
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-snl-bg text-snl-text font-sans antialiased selection:bg-snl-accent/30 selection:text-snl-text">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}
        {children}
      </body>
    </html>
  );
}
