import type { IconType } from 'react-icons'
import {
  LuFolder,
  LuHouse,
  LuMail,
  LuSettings2,
  LuUserRound,
} from 'react-icons/lu'
import { useActiveSection } from '../../hooks/useActiveSection'
import { cn } from '../../lib/cn'
import { navItems } from '../../data/site'
import { navbarItemClass } from '../ui/portfolioStyles'

const sectionIds = navItems.map((item) => item.href.replace('#', ''))

const iconsBySection: Record<string, IconType> = {
  hero: LuHouse,
  about: LuUserRound,
  projects: LuFolder,
  services: LuSettings2,
  contact: LuMail,
}

function getNavLinkClass(active: boolean, compact = false) {
  return cn(
    navbarItemClass,
    compact && 'min-w-11 justify-center px-3',
    active
      ? 'bg-black text-white'
      : 'text-[var(--color-muted)] hover:bg-slate-100 hover:text-[var(--color-text)]',
  )
}

export function Navbar() {
  const activeSection = useActiveSection(sectionIds)

  return (
    <header className="fixed top-0 right-0 left-0 z-20 px-3 py-3 sm:px-4 sm:py-4 md:px-6">
      <div className="mx-auto flex max-w-6xl justify-center">
        <div className="flex w-full max-w-full items-center justify-center rounded-full border border-[rgba(15,23,42,0.1)] bg-white px-2 py-2 shadow-[0_14px_22px_rgba(15,23,42,0.07),0_24px_38px_rgba(15,23,42,0.1)] backdrop-blur sm:w-auto sm:max-w-fit sm:px-3 sm:py-3">
          <nav aria-label="Navegacion principal" className="hidden items-center gap-1.5 md:flex">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '')
              const Icon = iconsBySection[sectionId]

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={activeSection === sectionId ? 'location' : undefined}
                  className={getNavLinkClass(activeSection === sectionId)}
                >
                  <Icon className="text-[15px]" />
                  <span>{item.label}</span>
                </a>
              )
            })}
          </nav>

          <nav aria-label="Navegacion principal movil" className="flex items-center gap-0.5 sm:gap-1 md:hidden">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '')
              const Icon = iconsBySection[sectionId]

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  aria-current={activeSection === sectionId ? 'location' : undefined}
                  className={getNavLinkClass(activeSection === sectionId, true)}
                >
                  <Icon className="text-[15px]" />
                  <span className="sr-only">{item.label}</span>
                </a>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}
