import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { useHashSectionScroll } from './hooks/useHashSectionScroll'
import { useTheme } from './hooks/useTheme'

function App() {
  useHashSectionScroll()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="portfolio-app min-h-svh text-[var(--color-text)]">
      <div aria-hidden="true" className="page-theme-atmosphere" />
      <div aria-hidden="true" className="page-theme-dots" />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <div aria-hidden="true" className="screen-bottom-shadow" />
      <main className="relative z-[1]">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <div className="grid min-h-svh grid-rows-[minmax(85svh,1fr)_minmax(15svh,auto)]">
          <ContactSection />
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
