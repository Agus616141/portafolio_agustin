import type { MouseEvent } from 'react'
import { useEffect, useRef } from 'react'
import type { IconType } from 'react-icons'
import {
  LuFolder,
  LuHouse,
  LuMail,
  LuSettings2,
  LuUserRound,
} from 'react-icons/lu'
import type { ThemeMode } from '../../data/theme'
import { navItems } from '../../data/site'
import { scrollToSectionId } from '../../hooks/useHashSectionScroll'
import { useActiveSection } from '../../hooks/useActiveSection'
import { cn } from '../../lib/cn'
import { navbarItemClass } from '../ui/portfolioStyles'
import { ThemeToggle } from '../ui/ThemeToggle'

const sectionIds = navItems.map((item) => item.href.replace('#', ''))

const iconsBySection: Record<string, IconType> = {
  hero: LuHouse,
  about: LuUserRound,
  projects: LuFolder,
  services: LuSettings2,
  contact: LuMail,
}

type NavigationLinksProps = {
  activeSection: string
  ariaLabel: string
  className: string
  compact?: boolean
}

function getNavLinkClass(active: boolean, compact = false) {
  return cn(
    navbarItemClass,
    compact && 'min-w-9 justify-center px-2',
    active
      ? 'nav-link-active'
      : 'text-[var(--color-muted)] hover:bg-[var(--nav-hover-bg)] hover:text-[var(--color-text)]',
  )
}

function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
  event.preventDefault()

  const sectionId = href.replace('#', '')
  scrollToSectionId(sectionId)

  window.history.pushState(null, '', href)
}

function NavigationLinks({
  activeSection,
  ariaLabel,
  className,
  compact = false,
}: NavigationLinksProps) {
  return (
    <nav aria-label={ariaLabel} className={className}>
      {navItems.map((item) => {
        const sectionId = item.href.replace('#', '')
        const Icon = iconsBySection[sectionId]

        return (
          <a
            key={item.href}
            href={item.href}
            onClick={(event) => handleNavClick(event, item.href)}
            aria-label={compact ? item.label : undefined}
            aria-current={activeSection === sectionId ? 'location' : undefined}
            className={getNavLinkClass(activeSection === sectionId, compact)}
          >
            <Icon className="text-[15px]" />
            {compact ? <span className="sr-only">{item.label}</span> : <span>{item.label}</span>}
          </a>
        )
      })}
    </nav>
  )
}

type NavbarProps = {
  theme: ThemeMode
  onToggleTheme: () => void
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const activeSection = useActiveSection(sectionIds)
  const headerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    function setNavOffset() {
      if (!headerRef.current) return
      const h = headerRef.current.offsetHeight
      document.documentElement.style.setProperty('--nav-offset', `${h}px`)
    }

    setNavOffset()

    let ro: ResizeObserver | null = null
    if (window.ResizeObserver) {
      ro = new ResizeObserver(() => setNavOffset())
      if (headerRef.current) ro.observe(headerRef.current)
    } else {
      window.addEventListener('resize', setNavOffset)
    }

    return () => {
      if (ro && headerRef.current) ro.unobserve(headerRef.current)
      if (!ro) window.removeEventListener('resize', setNavOffset)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className="fixed top-0 right-0 left-0 z-20 px-3 pt-[max(0.75rem,env(safe-area-inset-top))] pb-3 sm:px-4 sm:pt-[max(1rem,env(safe-area-inset-top))] sm:pb-4 md:px-6"
    >
      <div className="mx-auto flex max-w-6xl justify-center">
        <div className="nav-shell flex w-full max-w-full items-center justify-center gap-2 rounded-full px-2 py-2 sm:w-auto sm:max-w-fit sm:px-3 sm:py-3 md:justify-between">
          <NavigationLinks
            activeSection={activeSection}
            ariaLabel="Navegacion principal"
            className="hidden items-center gap-1.5 md:flex"
          />
          <div className="hidden md:flex">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <NavigationLinks
              activeSection={activeSection}
              ariaLabel="Navegacion principal movil"
              className="flex min-w-max items-center gap-0.5 sm:gap-1"
              compact
            />
            <ThemeToggle theme={theme} onToggle={onToggleTheme} compact />
          </div>
        </div>
      </div>
    </header>
  )
}
