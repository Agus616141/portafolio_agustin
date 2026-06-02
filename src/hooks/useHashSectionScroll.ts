import { useEffect } from 'react'

export function scrollToSectionId(sectionId: string) {
  if (!sectionId) {
    return
  }

  const section = document.getElementById(sectionId)
  if (!section) {
    return
  }

  section.scrollIntoView({
    behavior: 'smooth',
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
