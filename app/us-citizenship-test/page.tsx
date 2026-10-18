import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Mic, Headphones, ClipboardCheck, Languages, ShieldCheck, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const pageUrl = "https://shelnovalabs.com/us-citizenship-test";

export const metadata: Metadata = {
  title: "US Citizenship Test 2026: Civics Practice in English and Spanish | ShelNova Labs",
  description:
    "Practice the 2025 (128 questions) and 2008 (100 questions) U.S. civics test out loud. Audio for every question, spoken answers, mock interviews that stop like the real one, and explanations in Spanish. Not affiliated with USCIS.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "US Citizenship Test 2026 | ShelNova Labs",
    description: "Practice the U.S. civics test out loud, with explanations in Spanish.",
    url: pageUrl,
  },
};

const features = [
  {
    icon: Mic,
    title: "Speak your answers",
    body: "Tap the microphone and answer in English. Your phone's speech recognition checks your answer against every accepted answer from the official question lists.",
  },
  {
    icon: Headphones,
    title: "Hear every question",
    body: "Every question and answer is recorded in natural voices. Listen at normal or slow speed, even with the screen off.",
  },
  {
    icon: ClipboardCheck,
    title: "Mock interviews that stop like the real one",
    body: "Random questions read aloud. The 2025 mock ends at 12 correct or 9 incorrect; the 2008 mock at 6 correct or 5 incorrect.",
  },
  {
    icon: Languages,
    title: "Explanations in Spanish or English",
    body: "Every question has a short explanation, plus flashcards with spaced repetition, a readiness score by topic, and answers for your state.",
  },
];

const faqs = [
  {
    q: "Which test will I take, 2025 or 2008?",
    a: "It depends on when you filed Form N-400, not on your interview date. If you filed on or after October 20, 2025, you take the 2025 test (128 questions, 20 asked, 12 needed to pass). If you filed before that date, you take the 2008 test (100 questions, 10 asked, 6 needed). The app covers both.",
  },
  {
    q: "Is the app free?",
    a: "You can study the first 20 questions, answer 3 questions out loud each day, and take one full mock interview for free. The Pass Pack is a one-time purchase, not a subscription, that unlocks all questions from both tests, unlimited speaking practice and unlimited mock interviews.",
  },
  {
    q: "I bought the Pass Pack. How do I get it on a new phone?",
    a: "Install the app with the same Apple ID or Google account, then open Settings and tap Restore purchase. Study progress is stored only on your phone, so it does not move to a new device.",
  },
  {
    q: "The app did not understand my spoken answer. What can I do?",
    a: "Speak close to the phone in a quiet place. If the app marks a correct answer wrong, tap “Dije bien, aunque no lo reconoció” to count it as correct. If speech recognition is unavailable, you can mark your own answers.",
  },
  {
    q: "An answer looks wrong or out of date.",
    a: "Answers that change with elections, like the names of officials, can change before your interview, so always check the latest answers on the USCIS website. To report a problem, tap “Reportar un problema” on the question card or email us.",
  },
];

export default function UsCitizenshipTestPage() {
  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "US Citizenship Test 2026",
    description:
      "U.S. civics test practice with audio, spoken answers, mock interviews and Spanish explanations.",
    applicationCategory: "EducationalApplication",
    operatingSystem: "iOS, Android",
    inLanguage: ["en", "es"],
    url: pageUrl,
    author: { "@type": "Organization", name: "ShelNova Labs", url: "https://shelnovalabs.com" },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F5F2] selection:bg-[#635BFF]/30 selection:text-[#F5F5F2]">
      <JsonLd data={appJsonLd} />
      <JsonLd data={faqJsonLd} />
      <Navbar />
      <main id="main" data-snl-page className="pt-28 pb-16 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs font-mono text-snl-subtle mb-8">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link href="/" className="hover:text-snl-text transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-snl-accent">US Citizenship Test 2026</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-mono font-bold text-snl-accent uppercase tracking-widest px-3 py-1 bg-snl-accent/15 border border-snl-accent/30 rounded-full">
              iOS / Android
            </span>
            <span className="text-xs font-mono text-emerald-400 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              ● English + Español
            </span>
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-snl-text leading-[1.08]">
            US Citizenship Test 2026
          </h1>
          <p className="text-snl-muted text-base sm:text-lg mt-4 leading-relaxed">
            Practice the civics part of your U.S. naturalization interview the way the test is given: out loud. Covers
            the new 2025 civics test (128 questions) and the 2008 test (100 questions), with explanations in Spanish.
          </p>
          <p className="text-snl-muted text-base mt-3 leading-relaxed">
            Practica en voz alta y aprueba tu examen de ciudadanía. Explicaciones en español para cada pregunta.
          </p>

          {/* Features */}
          <section className="mt-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">What you get</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {features.map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-[#0D0F12] border border-snl-border p-6 rounded-xl space-y-3">
                  <h3 className="font-heading text-sm font-mono uppercase tracking-wider text-snl-accent flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {title}
                  </h3>
                  <p className="text-snl-muted text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Test versions */}
          <section className="mt-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">Both test versions</h2>
            <div className="grid grid-cols-2 gap-4 p-6 bg-snl-card border border-snl-border rounded-xl mt-6">
              <div>
                <p className="text-xs font-mono text-snl-subtle uppercase">Filed on or after Oct 20, 2025</p>
                <p className="font-heading text-2xl font-bold text-snl-text mt-1">2025 test</p>
                <p className="text-snl-muted text-sm mt-1">128 questions · 20 asked · 12 to pass</p>
              </div>
              <div>
                <p className="text-xs font-mono text-snl-subtle uppercase">Filed before Oct 20, 2025</p>
                <p className="font-heading text-2xl font-bold text-snl-text mt-1">2008 test</p>
                <p className="text-snl-muted text-sm mt-1">100 questions · 10 asked · 6 to pass</p>
              </div>
            </div>
          </section>

          {/* Privacy */}
          <section className="mt-12">
            <div className="bg-[#0D0F12] border border-snl-border p-6 sm:p-8 rounded-xl space-y-3">
              <h2 className="font-heading text-sm font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Private and offline
              </h2>
              <p className="text-snl-muted text-sm sm:text-base leading-relaxed">
                No account and no ads. Your progress stays on your phone, the app works offline, and your voice is never
                recorded or uploaded by the app.
              </p>
            </div>
          </section>

          {/* FAQ / Support */}
          <section className="mt-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-snl-text">Help and support</h2>
            <div className="space-y-4 mt-6">
              {faqs.map((f) => (
                <div key={f.q} className="bg-snl-card border border-snl-border p-6 rounded-xl">
                  <h3 className="text-snl-text font-semibold flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-snl-accent mt-1 shrink-0" />
                    {f.q}
                  </h3>
                  <p className="text-snl-muted text-sm leading-relaxed mt-2">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <div className="flex flex-wrap gap-3 mt-10 pt-8 border-t border-snl-border">
            <a
              href="mailto:hello@shelnovalabs.com?subject=US%20Citizenship%20Test%202026"
              className="px-5 py-2.5 bg-snl-accent hover:bg-snl-accent-hover text-white rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email support</span>
            </a>
            <Link
              href="/us-citizenship-test/privacy"
              className="px-5 py-2.5 bg-snl-card border border-snl-border hover:border-snl-border-light text-snl-text rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/us-citizenship-test/terms"
              className="px-5 py-2.5 border border-snl-border hover:border-snl-border-light text-snl-text rounded-lg text-xs font-mono uppercase tracking-wider transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          <p className="text-xs text-snl-subtle mt-8 leading-relaxed">
            US Citizenship Test 2026 is an independent study app by ShelNova Labs Ltd. It is not affiliated with,
            endorsed by or connected to U.S. Citizenship and Immigration Services (USCIS) or any government agency, and it
            does not give legal advice.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
