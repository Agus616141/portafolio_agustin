import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const sections = sectionIds
      .map((id) => {
        const anchor = document.getElementById(id)
        if (!anchor) return null
        const frame = anchor.closest('[data-section-frame]') as HTMLElement | null
        return { id, el: frame ?? anchor }
      })
      .filter((s): s is { id: string; el: HTMLElement } => s !== null)

    if (sections.length === 0) {
      return
    }

    let frameId = 0

    const updateActiveSection = () => {
      const viewportHeight = window.innerHeight

      const navOffsetValue = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-offset') || '0',
      ) || 0


      let currentSection = sections[0]?.id ?? ''

      sections.forEach(({ id, el }) => {
        const rect = el.getBoundingClientRect()
        const top = rect.top
        const bottom = rect.bottom

        // consider the fixed navbar offset when determining the active section
        if (top <= navOffsetValue + Math.min(Math.max(viewportHeight * 0.32, 160), 340) && bottom > navOffsetValue + 8) {
          currentSection = id
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
