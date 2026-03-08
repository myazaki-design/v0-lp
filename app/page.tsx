import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ParticleTypographySection } from "@/components/particle-typography-section"
import { AboutSection } from "@/components/about-section"
import { WorkSection } from "@/components/work-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ParticleTypographySection />
        <AboutSection />
        <WorkSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
