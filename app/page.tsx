import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProgramsSection } from "@/components/programs-section"
import { ImpactSection } from "@/components/impact-section"
import { GallerySection } from "@/components/gallery-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <ImpactSection />
        <GallerySection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
