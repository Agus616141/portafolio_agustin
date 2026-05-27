import { LuArrowRight, LuBlocks, LuBrainCircuit, LuMonitorSmartphone } from 'react-icons/lu'
import { servicesSection } from '../../data/site'
import { Button } from '../ui/Button'
import { CenteredSectionHeader } from '../ui/CenteredSectionHeader'
import { SectionShell } from '../ui/SectionShell'
import { cardLiftClass, nameBlinkClass } from '../ui/portfolioStyles'

const serviceIcons = {
  web: LuMonitorSmartphone,
  ai: LuBrainCircuit,
  fullstack: LuBlocks,
} as const

export function ServicesSection() {
  const [servicesLead = servicesSection.title, servicesAccent = ''] =
    servicesSection.title.split(' ')

  return (
    <SectionShell
      id="services"
      className="overflow-hidden"
      contentClassName="relative"
      bodyClassName="gap-8 sm:gap-12"
      header={(
        <CenteredSectionHeader
          title={
            <>
              {servicesLead}{' '}
              {servicesAccent ? (
                <span className={nameBlinkClass}>
                  {servicesAccent}
                </span>
              ) : null}
            </>
          }
          description={servicesSection.description}
        />
      )}
    >
      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(min(100%,280px),360px))] justify-center gap-4 sm:gap-5">
        {servicesSection.items.map((service) => {
          const Icon = serviceIcons[service.iconKey]

          return (
            <article
              key={service.title}
              className={`service-card-surface group w-full rounded-[1.4rem] px-4 py-4 ${cardLiftClass} hover:border-[var(--color-border-strong)] hover:shadow-[var(--panel-shadow-strong)] sm:rounded-[1.55rem] sm:px-6 sm:py-6`}
            >
              <div className="glow-icon-box flex h-12 w-12 items-center justify-center rounded-[1.15rem] sm:h-13 sm:w-13 sm:rounded-2xl">
                <Icon className="text-[1.15rem] sm:text-[1.3rem]" />
              </div>
              <h3 className="mt-4 text-[1.18rem] font-bold tracking-[-0.03em] text-[var(--color-text)] sm:mt-6 sm:text-[1.45rem]">
                {service.title}
              </h3>
              <p className="mt-2.5 max-w-none text-[0.92rem] leading-6 text-[var(--color-muted)] sm:mt-3 sm:max-w-[30ch] sm:text-[0.96rem] sm:leading-7">
                {service.description}
              </p>
            </article>
          )
        })}
      </div>

      <div className="flex justify-center pt-2">
        <Button
          href={servicesSection.cta.href}
          className="w-full justify-center gap-2 px-8 sm:w-auto"
        >
          <LuArrowRight className="text-base" />
          {servicesSection.cta.label}
        </Button>
      </div>
    </SectionShell>
  )
}
