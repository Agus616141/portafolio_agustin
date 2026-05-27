import { useEffect, useState } from 'react'
import {
  defaultTheme,
  getOppositeTheme,
  isThemeMode,
  themeMetaColors,
  themeStorageKey,
  type ThemeMode,
} from '../data/theme'

function readInitialTheme(): ThemeMode {
  if (typeof document !== 'undefined') {
    const htmlTheme = document.documentElement.dataset.theme

    if (htmlTheme === 'dark' || htmlTheme === 'light') {
      return htmlTheme
    }
  }

  if (typeof window !== 'undefined') {
    const storedTheme = window.localStorage.getItem(themeStorageKey)

    if (isThemeMode(storedTheme)) {
      return storedTheme
    }
  }

  return defaultTheme
}

function applyTheme(theme: ThemeMode) {
  document.documentElement.dataset.theme = theme

  const themeColorMeta = document.querySelector('meta[name="theme-color"]')
  themeColorMeta?.setAttribute('content', themeMetaColors[theme])
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(() => readInitialTheme())

  useEffect(() => {
    applyTheme(theme)
    window.localStorage.setItem(themeStorageKey, theme)
  }, [theme])

  return {
    theme,
    isDarkTheme: theme === 'dark',
    setTheme,
    toggleTheme: () => setTheme((currentTheme) => getOppositeTheme(currentTheme)),
  }
}
