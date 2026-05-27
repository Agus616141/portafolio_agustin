import { useEffect } from 'react'

export function scrollToSectionId(sectionId: string) {
  if (!sectionId) {
    return
  }

  const section = document.getElementById(sectionId)

  if (!section) {
    return
  }

  const targetTop = window.scrollY + section.getBoundingClientRect().top

  window.scrollTo({
    top: Math.max(0, targetTop),
    left: 0,
    behavior: 'auto',
  })
}

export function useHashSectionScroll() {
  useEffect(() => {
    window.requestAnimationFrame(() => {
      scrollToSectionId(window.location.hash.replace('#', ''))
    })
  }, [])
}
