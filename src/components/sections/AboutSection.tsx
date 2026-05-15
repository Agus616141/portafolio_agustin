import { aboutProfile, stack } from '../../data/site'
import { Badge } from '../ui/Badge'
import { SectionImageFrame } from '../ui/SectionImageFrame'
import { SectionShell } from '../ui/SectionShell'
import {
  descriptionHoverClass,
  nameBlinkClass,
  titleHoverClass,
} from '../ui/portfolioStyles'

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
          gradientClassName="bg-[linear-gradient(160deg,#ffffff,#dde4ff)]"
          wrapperClassName="order-2 lg:order-1"
          loading="lazy"
          fetchPriority="low"
        />

        <div className="order-1 max-w-2xl lg:order-2">
          <h2 className={`${titleHoverClass} text-3xl font-black leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl`}>
            Sobre{' '}
            <span className={nameBlinkClass}>
              Mi
            </span>
          </h2>
          <div className={`${descriptionHoverClass} mt-5 max-w-xl sm:mt-6`}>
            <p className="text-2xl font-bold text-slate-900">
              {aboutProfile.name}
            </p>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)] md:text-lg md:leading-8">
              {aboutProfile.summary}
            </p>
          </div>

          <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-7">
            {aboutProfile.highlights.map((item) => (
              <div key={item.title} className={descriptionHoverClass}>
                <h3 className="border-l-4 border-slate-900 pl-3 text-xl font-bold text-slate-900 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-base font-semibold text-slate-900 sm:mt-3">
                  {item.place}
                </p>
                <p className="mt-1 text-sm leading-6 text-[var(--color-muted)] sm:leading-7">
                  {item.detail}
                </p>
                <p className="mt-1 text-sm leading-6 text-[var(--color-muted)] sm:leading-7">
                  {item.period}
                </p>
              </div>
            ))}

            <div>
              <h3 className="border-l-4 border-slate-900 pl-3 text-2xl font-bold text-slate-900">
                {aboutProfile.skillsTitle}
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {stack.map((item) => (
                  <Badge
                    key={item}
                    className="border-black bg-white px-4 py-2 font-medium text-black hover:bg-slate-800 hover:text-white"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
