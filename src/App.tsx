import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { ServicesSection } from './components/sections/ServicesSection'

function App() {
  return (
    <div className="min-h-svh bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <div className="grid min-h-svh grid-rows-[minmax(0,1fr)_auto]">
          <ContactSection />
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
