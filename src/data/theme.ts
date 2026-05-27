export const themeStorageKey = 'portfolio-theme'

export type ThemeMode = 'dark' | 'light'

export const defaultTheme: ThemeMode = 'dark'

export const themeMetaColors: Record<ThemeMode, string> = {
  dark: '#090813',
  light: '#f6f1ff',
}

export function isThemeMode(value: string | null): value is ThemeMode {
  return value === 'dark' || value === 'light'
}

export function getOppositeTheme(theme: ThemeMode): ThemeMode {
  return theme === 'dark' ? 'light' : 'dark'
}
