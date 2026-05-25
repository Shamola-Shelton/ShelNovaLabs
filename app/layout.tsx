import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShelNova Labs — Building Apps That Matter",
  description:
    "ShelNova Labs Ltd. engineers digital experiences for communities, learners, and players. Discover Kadi Classic, JiraniFy, and Gist & Gain.",
  keywords: ["ShelNova Labs", "digital apps", "Kadi Classic", "JiraniFy", "Gist and Gain", "mobile apps"],
  openGraph: {
    title: "ShelNova Labs — Building Apps That Matter",
    description:
      "We craft digital experiences for communities, learners, and players — one elegant app at a time.",
    url: "https://shelnovalabs.com",
    siteName: "ShelNova Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShelNova Labs — Building Apps That Matter",
    description: "We craft digital experiences for communities, learners, and players.",
  },
  metadataBase: new URL("https://shelnovalabs.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="bg-snl-bg text-snl-text font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
