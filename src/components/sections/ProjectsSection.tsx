import { projects, projectsSection } from '../../data/site'
import { LuArrowRight, LuGithub, LuSquareArrowOutUpRight } from 'react-icons/lu'
import { Badge } from '../ui/Badge'
import { CenteredSectionHeader } from '../ui/CenteredSectionHeader'
import { SectionShell } from '../ui/SectionShell'
import { cardLiftClass, nameBlinkClass } from '../ui/portfolioStyles'

type ProjectVisualProps = {
  image: string
  imageAlt: string
  visual: {
    gradientClassName: string
    accentClassName: string
    accentSecondaryClassName: string
    showChart: boolean
  }
}

function ProjectVisual({
  image,
  imageAlt,
  visual,
}: ProjectVisualProps) {
  return (
    <div
      className={`relative isolate h-[182px] overflow-hidden rounded-t-[1.15rem] border-b border-[var(--color-border)] sm:h-[196px] ${visual.gradientClassName}`}
    >
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[930ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
      />

      <div
        className={`absolute top-4 left-5 h-7 w-7 rotate-45 rounded-[0.8rem] opacity-95 blur-[1px] ${visual.accentClassName}`}
      />
      <div
        className={`absolute right-5 bottom-5 h-5 w-5 rotate-12 rounded-[0.7rem] opacity-95 ${visual.accentSecondaryClassName}`}
      />

      {visual.showChart ? (
        <div className="absolute top-4 left-4 rounded-xl border border-cyan-300/35 bg-cyan-300/10 p-2.5 shadow-[0_0_24px_rgba(34,211,238,0.18)]">
          <div className="relative h-14 w-14">
            <div className="absolute bottom-0 left-0 h-full w-px bg-cyan-300" />
            <div className="absolute bottom-0 left-0 h-px w-full bg-cyan-300" />
            <div className="absolute bottom-3.5 left-3.5 h-px w-7 origin-left rotate-[-45deg] bg-cyan-300" />
            <span className="absolute top-0.5 right-0.5 text-[8px] font-semibold tracking-[0.14em] text-cyan-300">
              Ax+y=C
            </span>
          </div>
        </div>
      ) : null}

    </div>
  )
}

export function ProjectsSection() {
  const [projectsLead = projectsSection.title, projectsAccent = ''] =
    projectsSection.title.split(' ')

  return (
    <SectionShell
      id="projects"
      header={(
        <CenteredSectionHeader
          title={
            <>
              {projectsLead}{' '}
              {projectsAccent ? (
                <span className={nameBlinkClass}>
                  {projectsAccent}
                </span>
              ) : null}
            </>
          }
          description={projectsSection.description}
        />
      )}
    >
      <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(min(100%,280px),360px))] justify-center gap-5 sm:gap-6">
        {projects.map((project) => {
          const LinkIcon =
            project.ctaType === 'github' ? LuGithub : LuSquareArrowOutUpRight
          const isPlaceholderLink = project.href === '#'
          const isExternalLink = /^https?:\/\//.test(project.href)

          return (
            <div key={project.title} className="group relative w-full">
              <article className={`project-card-surface relative flex w-full flex-col overflow-hidden rounded-[1.15rem] ${cardLiftClass} group-hover:border-[var(--color-border-strong)] group-hover:shadow-[var(--panel-shadow-strong)]`}>
                <ProjectVisual
                  image={project.image}
                  imageAlt={project.imageAlt}
                  visual={project.visual}
                />

                <div className="flex min-h-[204px] flex-1 flex-col justify-between space-y-3 px-4 py-4 sm:min-h-[232px] sm:space-y-4 sm:px-5 sm:py-5">
                  <div className="space-y-2">
                    <h3 className="text-[1.22rem] font-bold leading-tight tracking-[-0.03em] text-[var(--color-text)]">
                      {project.title}
                    </h3>
                    <p className="text-[0.9rem] leading-6 text-[var(--color-muted)] sm:min-h-[74px] sm:text-[0.92rem]">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="rounded-[0.55rem] px-2.5 py-1 text-[0.72rem] font-medium leading-none shadow-none"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2 sm:pt-3">
                    {isPlaceholderLink ? (
                      <span className="inline-flex items-center gap-2 text-[0.92rem] font-semibold text-[var(--color-text)] opacity-80">
                        <LinkIcon className="text-[0.98rem]" />
                        <span>{project.ctaLabel}</span>
                      </span>
                    ) : (
                      <a
                        href={project.href}
                        target={isExternalLink ? '_blank' : undefined}
                        rel={isExternalLink ? 'noreferrer' : undefined}
                        className="inline-flex items-center gap-2 text-[0.92rem] font-semibold text-[var(--color-text)] underline decoration-[var(--color-border-strong)] underline-offset-4 transition-all hover:text-[var(--color-accent-soft)] hover:decoration-[var(--color-accent-soft)]"
                      >
                        <LinkIcon className="text-[0.98rem]" />
                        <span>{project.ctaLabel}</span>
                      </a>
                    )}
                    <LuArrowRight className="text-[1rem] text-[var(--color-accent-soft)] transition-transform duration-[930ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            </div>
          )
        })}
      </div>
    </SectionShell>
  )
}
