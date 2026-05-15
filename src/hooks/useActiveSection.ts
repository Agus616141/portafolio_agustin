import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    if (sections.length === 0) {
      return
    }

    let frameId = 0

    const updateActiveSection = () => {
      const viewportHeight = window.innerHeight
      const marker = window.scrollY + Math.min(Math.max(viewportHeight * 0.32, 160), 340)

      let currentSection = sections[0]?.id ?? ''

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (marker >= sectionTop && marker < sectionBottom) {
          currentSection = section.id
        }
      })

      const lastSection = sections[sections.length - 1]

      if (lastSection && window.scrollY + viewportHeight >= document.documentElement.scrollHeight - 8) {
        currentSection = lastSection.id
      }

      setActiveSection(currentSection)
    }

    const scheduleUpdate = () => {
      cancelAnimationFrame(frameId)
      frameId = window.requestAnimationFrame(updateActiveSection)
    }

    scheduleUpdate()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [sectionIds])

  return activeSection
}
