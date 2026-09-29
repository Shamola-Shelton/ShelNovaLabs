"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import AboutSection from "@/components/AboutSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const handleOpenContact = () => setIsContactOpen(true);

  return (
    <div className="min-h-screen bg-snl-bg text-snl-text selection:bg-snl-accent/30 selection:text-snl-text">
      <Navbar onOpenContact={handleOpenContact} />
      <main id="main">
        <Hero onOpenContact={handleOpenContact} />
        <TrustStrip />
        <SelectedWork onOpenContact={handleOpenContact} />
        <Services />
        <HowWeWork onOpenContact={handleOpenContact} />
        <AboutSection />
        <ContactCTA isOpen={isContactOpen} onOpen={handleOpenContact} onClose={() => setIsContactOpen(false)} />
      </main>
      <Footer />
    </div>
  );
}
