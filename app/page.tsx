import { LanguageProvider } from "@/lib/LanguageContext";
import Progress from "@/components/Progress";
import RevealController from "@/components/RevealController";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <LanguageProvider>
      <Progress />
      <RevealController />
      <TopBar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Work />
        <Skills />
        <Contact />
      </main>
    </LanguageProvider>
  );
}
