import { LuBriefcaseBusiness, LuCode, LuGraduationCap } from 'react-icons/lu'
import { aboutProfile, stack } from '../../data/site'
import { Badge } from '../ui/Badge'
import { HeroVisual } from '../ui/HeroVisual'
import { SectionShell } from '../ui/SectionShell'
import {
  cardLiftClass,
  descriptionHoverClass,
  nameBlinkClass,
  titleHoverClass,
} from '../ui/portfolioStyles'

const highlightIcons = [LuGraduationCap, LuBriefcaseBusiness] as const

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      scrollMarginTop="calc(var(--nav-offset)+0.5rem)"
      bodyClassName="gap-8 sm:gap-12"
      maxWidthClassName="max-w-[1120px]"
    >
      <div className="grid w-full gap-8 md:gap-12 lg:grid-cols-[0.98fr_1fr] lg:items-center lg:gap-16">
        {/* Image — hidden on mobile, visible from lg */}
        <div className="hidden lg:block lg:order-1">
          <HeroVisual
            src={aboutProfile.imageSrc}
            srcLight={aboutProfile.imageSrcLight}
            alt={aboutProfile.imageAlt}
            loading="lazy"
            fetchPriority="low"
          />
        </div>

        <div className="order-1 mx-auto max-w-2xl lg:order-2 lg:mx-0">
          <h2 className={`${titleHoverClass} text-center text-3xl font-black leading-tight text-[var(--color-text)] sm:text-4xl md:text-5xl lg:text-left lg:text-6xl`}>
            Sobre{' '}
            <span className={nameBlinkClass}>
              Mi
            </span>
          </h2>
          <div className={`${descriptionHoverClass} mt-5 max-w-xl sm:mt-6`}>
            <p className="text-center text-2xl font-bold text-[var(--color-text)] lg:text-left">
              {aboutProfile.name}
            </p>
            <p className="mt-4 text-center text-base leading-7 text-[var(--color-muted)] md:text-lg md:leading-8 lg:text-left">
              {aboutProfile.summary}
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:mt-8 md:grid-cols-2">
            {aboutProfile.highlights.map((item, index) => {
              const Icon = highlightIcons[index] ?? LuCode

              return (
                <article
                  key={item.title}
                  className={`surface-card rounded-[1.35rem] px-4 py-4 sm:px-5 ${cardLiftClass} hover:border-[var(--color-border-strong)] hover:shadow-[var(--panel-shadow-strong)]`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="glow-icon-box flex h-9 w-9 shrink-0 items-center justify-center rounded-[0.85rem]">
                      <Icon className="text-[0.95rem]" />
                    </div>
                    <h3 className="text-[1rem] font-bold leading-tight text-[var(--color-text)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-[0.83rem] font-semibold text-[var(--color-text)]">
                    {item.place}
                  </p>
                  <p className="mt-1 text-[0.8rem] leading-[1.6] text-[var(--color-muted)]">
                    {item.detail}
                  </p>
                  <p className="mt-1.5 text-[0.75rem] text-[var(--color-subtle)]">
                    {item.period}
                  </p>
                </article>
              )
            })}

            <article className="skill-card-static surface-card rounded-[1.35rem] px-4 py-4 md:col-span-2 sm:px-5 sm:py-5">
              <div className="flex items-center gap-3">
                <div className="glow-icon-box flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem]">
                  <LuCode className="text-[1.05rem]" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-text)]">
                  {aboutProfile.skillsTitle}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {stack.map((item) => (
                  <Badge
                    key={item}
                    className="skill-badge px-4 py-2 font-medium"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
