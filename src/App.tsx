import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, LazyMotion, m } from 'framer-motion'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { ServicesSection } from './components/sections/ServicesSection'
import { useHashSectionScroll } from './hooks/useHashSectionScroll'
import { useIsMobile } from './hooks/useIsMobile'
import { useTheme } from './hooks/useTheme'

// Loaded async on desktop only — never downloaded on mobile
const loadFeatures = () => import('./lib/motionFeatures').then(mod => mod.default)

function App() {
  useHashSectionScroll()
  const { theme, toggleTheme } = useTheme()
  const isMobile = useIsMobile()
  const [overlayKey, setOverlayKey] = useState(0)
  const toggleRef = useRef(toggleTheme)
  toggleRef.current = toggleTheme

  const handleToggleTheme = useCallback(() => {
    setOverlayKey((k) => k + 1)
    setTimeout(() => toggleRef.current(), 180)
  }, [])

  const shell = (
    <div className="portfolio-app min-h-svh text-[var(--color-text)]">
      <div aria-hidden="true" className="page-theme-atmosphere" />
      <div aria-hidden="true" className="page-theme-dots" />

      {/* Theme transition overlay — desktop only, requires LazyMotion context */}
      {!isMobile && (
        <AnimatePresence>
          <m.div
            key={overlayKey}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[200]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.28, 0] }}
            transition={{ duration: 0.55, ease: 'easeInOut', times: [0, 0.35, 1] }}
            style={{ background: 'rgba(50, 35, 110, 0.6)' }}
          />
        </AnimatePresence>
      )}

      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />
      <div aria-hidden="true" className="screen-bottom-shadow" />
      <main className="relative z-[1]">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <div className="flex flex-col lg:min-h-svh">
          <ContactSection />
          <Footer />
        </div>
      </main>
    </div>
  )

  // Mobile: no LazyMotion provider → motionFeatures chunk never downloads
  if (isMobile) return shell

  return (
    <LazyMotion features={loadFeatures} strict>
      {shell}
    </LazyMotion>
  )
}

export default App
