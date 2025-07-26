import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ContactCTA from '@/components/ContactCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ContactCTA />
    </main>
  )
}
