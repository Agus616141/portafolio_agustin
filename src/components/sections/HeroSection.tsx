import { LuArrowRight, LuChevronRight, LuDownload, LuGithub, LuInstagram, LuLinkedin } from 'react-icons/lu'
import { useRotatingText } from '../../hooks/useRotatingText'
import { contact, hero } from '../../data/site'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { SectionImageFrame } from '../ui/SectionImageFrame'
import { SectionShell } from '../ui/SectionShell'
import {
  buttonHoverClass,
  descriptionHoverClass,
  nameBlinkClass,
  roleSwapClass,
  titleHoverClass,
} from '../ui/portfolioStyles'

const socialIcons = {
  Instagram: LuInstagram,
  LinkedIn: LuLinkedin,
  GitHub: LuGithub,
} as const

const socialLinks = [
  { label: 'Instagram', hrefKey: 'instagram' },
  { label: 'LinkedIn', hrefKey: 'linkedin' },
  { label: 'GitHub', hrefKey: 'github' },
] as const

const roleCardClass =
  `${roleSwapClass} inline-flex min-h-[56px] min-w-0 max-w-full items-center rounded-xl border border-slate-200 bg-slate-100 px-3.5 py-3 shadow-[0_12px_24px_rgba(15,23,42,0.08)] sm:min-h-[72px] sm:px-5 sm:py-4`

export function HeroSection() {
  const { typedText, isVisible, showNextItem } = useRotatingText(hero.roles)

  return (
    <SectionShell id="hero" className="overflow-hidden" contentClassName="relative max-w-[1120px]">
      <div className="grid gap-10 md:gap-12 lg:grid-cols-[1fr_0.98fr] lg:items-center lg:gap-16">
        <div className="max-w-2xl">
          <h1 className={`${titleHoverClass} text-3xl font-black leading-[1.04] text-black sm:text-4xl md:text-5xl lg:text-6xl`}>
            Hola, soy{' '}
            <span className={nameBlinkClass}>
              {hero.name}
            </span>
          </h1>

          <div className="mt-5 flex w-full max-w-full items-center gap-2.5 sm:mt-6 sm:gap-4">
            <button
              type="button"
              onClick={showNextItem}
              aria-label="Mostrar siguiente rol"
              className={cn(
                'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-950 sm:h-10 sm:w-10',
                buttonHoverClass,
              )}
            >
              <LuChevronRight className="text-sm sm:text-lg" />
            </button>

            <div
              className={cn(
                roleCardClass,
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-0',
              )}
            >
              <span className="block whitespace-nowrap font-mono text-base font-semibold tracking-tight text-slate-900 sm:text-xl md:text-2xl">
                {typedText}
              </span>
              <span className="ml-1.5 h-6 w-1 shrink-0 animate-pulse rounded-full bg-sky-400 sm:h-7" />
            </div>
          </div>

          <p className={`${descriptionHoverClass} mt-6 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:mt-8 sm:text-lg sm:leading-8 md:text-xl`}>
            {hero.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button
              href="#contact"
              className="w-full justify-center gap-2 border border-black bg-white px-6 text-black hover:border-slate-800 hover:bg-slate-800 hover:text-white sm:w-auto"
            >
              <LuArrowRight className="text-base" />
              Contacto
            </Button>
            <Button
              href="/cv/Agustin_CV.pdf"
              download
              className="w-full justify-center gap-2 border-black bg-black px-6 text-white hover:border-slate-800 hover:bg-slate-800 hover:text-white sm:w-auto"
            >
              <LuDownload className="text-base" />
              Descargar CV
            </Button>
          </div>

          <div className="mt-10 max-w-lg border-t border-[var(--color-border)] pt-5 sm:mt-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--color-muted)]">
              {hero.socialLabel}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xl text-[var(--color-muted)]">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.label]

                return (
                  <a
                    key={link.label}
                    href={contact[link.hrefKey]}
                    aria-label={link.label}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-black"
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <SectionImageFrame
          src="/images/profile-placeholder.svg"
          alt={`Placeholder visual de ${hero.name}`}
          gradientClassName="bg-[linear-gradient(160deg,#d6deff,#ffffff)]"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </SectionShell>
  )
}
