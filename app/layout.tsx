import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-snl-bg text-snl-text font-sans antialiased selection:bg-snl-accent/30 selection:text-snl-text">
        {children}
      </body>
    </html>
  );
}
