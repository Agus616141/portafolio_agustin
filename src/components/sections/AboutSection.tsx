import { LuBriefcaseBusiness, LuCode, LuGraduationCap } from 'react-icons/lu'
import { aboutProfile, stack } from '../../data/site'
import { Badge } from '../ui/Badge'
import { SectionImageFrame } from '../ui/SectionImageFrame'
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
      bodyClassName="gap-8 sm:gap-12"
      maxWidthClassName="max-w-[1120px]"
    >
      <div className="grid w-full gap-8 md:gap-12 lg:grid-cols-[0.98fr_1fr] lg:items-center lg:gap-16">
        <SectionImageFrame
          src={aboutProfile.imageSrc}
          alt={aboutProfile.imageAlt}
          gradientClassName=""
          wrapperClassName="order-2 lg:order-1"
          loading="lazy"
          fetchPriority="low"
        />

        <div className="order-1 max-w-2xl lg:order-2">
          <h2 className={`${titleHoverClass} text-3xl font-black leading-tight text-[var(--color-text)] sm:text-4xl md:text-5xl lg:text-6xl`}>
            Sobre{' '}
            <span className={nameBlinkClass}>
              Mi
            </span>
          </h2>
          <div className={`${descriptionHoverClass} mt-5 max-w-xl sm:mt-6`}>
            <p className="text-2xl font-bold text-[var(--color-text)]">
              {aboutProfile.name}
            </p>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)] md:text-lg md:leading-8">
              {aboutProfile.summary}
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:mt-8 md:grid-cols-2">
            {aboutProfile.highlights.map((item, index) => {
              const Icon = highlightIcons[index] ?? LuCode

              return (
                <article
                  key={item.title}
                  className={`surface-card rounded-[1.35rem] px-4 py-4 sm:px-5 sm:py-5 ${cardLiftClass} hover:border-[var(--color-border-strong)] hover:shadow-[var(--panel-shadow-strong)]`}
                >
                  <div className="flex items-start gap-3">
                    <div className="glow-icon-box flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem]">
                      <Icon className="text-[1.05rem]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--color-text)] sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-base font-semibold text-[var(--color-text)] sm:mt-3">
                        {item.place}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[var(--color-muted)] sm:leading-7">
                        {item.detail}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[var(--color-subtle)] sm:leading-7">
                        {item.period}
                      </p>
                    </div>
                  </div>
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
