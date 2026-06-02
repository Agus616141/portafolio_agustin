import { useEffect, useState } from 'react'

// Detects touch/coarse-pointer devices (phones, tablets)
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(hover: none) and (pointer: coarse)').matches
  })

  useEffect(() => {
    const mq = window.matchMedia('(hover: none) and (pointer: coarse)')
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return isMobile
}
