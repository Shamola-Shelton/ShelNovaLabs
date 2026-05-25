import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AppsShowcase from "@/components/AppsShowcase";
import About from "@/components/About";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AppsShowcase />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
