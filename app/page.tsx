"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import SelectedWork from "@/components/SelectedWork";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import TechStack from "@/components/TechStack";
import AboutSection from "@/components/AboutSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F5F2] selection:bg-[#635BFF]/30 selection:text-[#F5F5F2]">
      {/* Navigation Bar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Page Layout */}
      <main>
        {/* Hero Section with 3D Product Stage */}
        <Hero onOpenContact={handleOpenContact} />

        {/* Credibility & Technology Strip */}
        <TrustStrip />

        {/* 01 / Selected Work Showcase & Interactive Case Studies */}
        <SelectedWork onOpenContact={handleOpenContact} />

        {/* 02 / Services: What We Build */}
        <Services onOpenContact={handleOpenContact} />

        {/* 03 / Process: How We Work */}
        <HowWeWork onOpenContact={handleOpenContact} />

        {/* 04 / Technology Stack Architecture */}
        <TechStack onOpenContact={handleOpenContact} />

        {/* 05 / About ShelNova Labs */}
        <AboutSection />

        {/* 06 / Final Call To Action & Contact Modal */}
        <ContactCTA
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </main>

      {/* Studio Footer */}
      <Footer />
    </div>
  );
}
