import { LuMoonStar, LuSunMedium } from 'react-icons/lu'
import { getOppositeTheme, type ThemeMode } from '../../data/theme'
import { cn } from '../../lib/cn'

type ThemeToggleProps = {
  theme: ThemeMode
  onToggle: () => void
  compact?: boolean
  className?: string
}

export function ThemeToggle({
  theme,
  onToggle,
  compact = false,
  className,
}: ThemeToggleProps) {
  const nextTheme = getOppositeTheme(theme)
  const nextThemeLabel = nextTheme === 'light' ? 'Modo claro' : 'Modo oscuro'
  const ThemeIcon = theme === 'dark' ? LuMoonStar : LuSunMedium

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={nextThemeLabel}
      title={nextThemeLabel}
      className={cn('theme-toggle inline-flex', compact && 'theme-toggle--compact', className)}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__thumb">
          <ThemeIcon className="theme-toggle__icon" />
        </span>
      </span>
      {compact ? null : <span className="theme-toggle__text">{nextThemeLabel}</span>}
    </button>
  )
}
