import { LuArrowRight, LuBlocks, LuBrainCircuit, LuMonitorSmartphone } from 'react-icons/lu'
import { servicesSection } from '../../data/site'
import { Button } from '../ui/Button'
import { CenteredSectionHeader } from '../ui/CenteredSectionHeader'
import { SectionShell } from '../ui/SectionShell'
import { nameBlinkClass } from '../ui/portfolioStyles'

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
      contentClassName="relative space-y-12"
      backgroundClassName="inset-x-0 top-[var(--section-accent-top)] h-[var(--section-accent-height)] bg-[radial-gradient(ellipse_76%_130%_at_50%_0%,rgba(148,163,184,0.18),transparent_74%),radial-gradient(ellipse_36%_84%_at_18%_10%,rgba(226,232,240,0.16),transparent_76%)]"
    >
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
        className="pt-[var(--section-header-offset)]"
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),360px))] justify-center gap-4 sm:gap-5">
        {servicesSection.items.map((service) => {
          const Icon = serviceIcons[service.iconKey]

          return (
            <article
              key={service.title}
              className="group w-full rounded-[1.55rem] border border-slate-200/90 bg-white px-5 py-5 sm:px-6 sm:py-6 shadow-[0_12px_30px_rgba(15,23,42,0.06),0_18px_44px_rgba(15,23,42,0.04)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-slate-300 hover:shadow-[0_20px_44px_rgba(15,23,42,0.1),0_28px_60px_rgba(15,23,42,0.08)]"
            >
              <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#30394a_0%,#111827_100%)] text-white shadow-[0_10px_20px_rgba(15,23,42,0.2)]">
                <Icon className="text-[1.3rem]" />
              </div>
              <h3 className="mt-5 text-[1.25rem] font-bold tracking-[-0.03em] text-slate-900 sm:mt-6 sm:text-[1.45rem]">
                {service.title}
              </h3>
              <p className="mt-3 max-w-none text-[0.94rem] leading-7 text-slate-500 sm:max-w-[30ch] sm:text-[0.96rem]">
                {service.description}
              </p>
            </article>
          )
        })}
      </div>

      <div className="flex justify-center pt-2">
        <Button
          href={servicesSection.cta.href}
          className="w-full justify-center gap-2 border border-black bg-black px-8 text-white hover:border-slate-800 hover:bg-slate-800 hover:text-white sm:w-auto"
        >
          <LuArrowRight className="text-base" />
          {servicesSection.cta.label}
        </Button>
      </div>
    </SectionShell>
  )
}
