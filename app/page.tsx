import { AboutSection } from "./components/about-section"
import { DonationsSection } from "./components/donations-section"
import { FeaturesSection } from "./components/features-section"
import { Footer } from "./components/footer"
import { HeroSection } from "./components/hero-section"
import { Navigation } from "./components/navigation"

export default function Home() {
  return (
    <>
    <Navigation/>
      <HeroSection />
      <FeaturesSection />
      <DonationsSection />
      <AboutSection />
    <Footer/>
    </>
  )
}

