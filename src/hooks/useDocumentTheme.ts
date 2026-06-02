import { useEffect, useState } from 'react'

export function useDocumentTheme(): 'dark' | 'light' {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const t = document.documentElement.dataset.theme
    return t === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const t = document.documentElement.dataset.theme
      setTheme(t === 'light' ? 'light' : 'dark')
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
    return () => observer.disconnect()
  }, [])

  return theme
}
