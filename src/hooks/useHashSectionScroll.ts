import { useEffect } from 'react'

export function scrollToSectionId(sectionId: string) {
  if (!sectionId) return

  const section = document.getElementById(sectionId)
  if (!section) return

  const isMobile = window.matchMedia('(hover: none) and (pointer: coarse)').matches

  section.scrollIntoView({
    behavior: isMobile ? 'instant' : 'smooth',
    block: 'start',
  })
}

export function useHashSectionScroll() {
  useEffect(() => {
    window.requestAnimationFrame(() => {
      scrollToSectionId(window.location.hash.replace('#', ''))
    })
  }, [])
}
