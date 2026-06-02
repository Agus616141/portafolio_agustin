import { LuArrowRight, LuChevronRight, LuDownload, LuGithub, LuInstagram, LuLinkedin } from 'react-icons/lu'
import { useRotatingText } from '../../hooks/useRotatingText'
import { contact, hero } from '../../data/site'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { HeroVisual } from '../ui/HeroVisual'
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
  `${roleSwapClass} hero-role-surface inline-flex min-h-[56px] min-w-0 max-w-full items-center rounded-xl px-3 py-3 sm:min-h-[72px] sm:px-5 sm:py-4`

export function HeroSection() {
  const { typedText, isVisible, showNextItem } = useRotatingText(hero.roles)

  return (
    <SectionShell
      id="hero"
      className="overflow-hidden"
      contentClassName="relative"
      bodyClassName="gap-8 sm:gap-12"
      bodyAlign="center"
      maxWidthClassName="max-w-[1120px]"
    >
      <div className="grid w-full gap-8 md:gap-12 lg:grid-cols-[1fr_0.98fr] lg:items-center lg:gap-16">
        <div className="max-w-2xl">
          <h1 className={`${titleHoverClass} text-3xl font-black leading-[1.04] text-[var(--color-text)] sm:text-4xl md:text-5xl lg:text-6xl`}>
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
                'icon-surface-button inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10',
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
              <span className="block whitespace-nowrap font-mono text-[0.92rem] font-semibold tracking-tight text-[var(--color-text)] sm:text-xl md:text-2xl">
                {typedText}
              </span>
              <span className="ml-1.5 h-6 w-1 shrink-0 animate-pulse rounded-full bg-[var(--color-accent-alt)] sm:h-7" />
            </div>
          </div>

          <p className={`${descriptionHoverClass} mt-6 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:mt-8 sm:text-lg sm:leading-8 md:text-xl`}>
            {hero.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button
              href="#contact"
              className="w-full justify-center gap-2 px-6 sm:w-auto"
            >
              <LuArrowRight className="text-base" />
              {hero.primaryButtonLabel}
            </Button>
            <Button
              href={hero.secondaryButtonHref}
              variant="secondary"
              download
              className="w-full justify-center gap-2 px-6 sm:w-auto"
            >
              <LuDownload className="text-base" />
              {hero.secondaryButtonLabel}
            </Button>
          </div>

          <div className="mt-8 max-w-lg border-t border-[var(--color-border)] pt-4 sm:mt-14 sm:pt-5">
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
                    className="transition hover:text-[var(--color-text)]"
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <HeroVisual
          src={hero.imageSrc}
          srcLight={hero.imageSrcLight}
          alt={hero.imageAlt}
        />
      </div>
    </SectionShell>
  )
}
