import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { SectionFrame } from './SectionFrame'
import { SectionReveal } from './SectionReveal'

type SectionShellProps = {
  id: string
  header?: ReactNode
  className?: string
  contentClassName?: string
  bodyClassName?: string
  maxWidthClassName?: string
  backgroundClassName?: string
  children: ReactNode
}

const defaultSectionBackgroundClass =
  'inset-x-0 top-[var(--section-accent-top)] h-[var(--section-accent-height)] bg-[radial-gradient(ellipse_72%_125%_at_50%_0%,rgba(148,163,184,0.18),transparent_72%),radial-gradient(ellipse_34%_82%_at_20%_10%,rgba(226,232,240,0.16),transparent_76%)]'

export function SectionShell({
  id,
  header,
  className,
  contentClassName,
  bodyClassName,
  maxWidthClassName,
  backgroundClassName,
  children,
}: SectionShellProps) {
  return (
    <SectionFrame
      id={id}
      className={className}
      layoutClassName="min-h-svh items-stretch"
      spacingClassName="px-4 pb-12 sm:px-6 sm:pb-20"
      backgroundClassName={backgroundClassName ?? defaultSectionBackgroundClass}
    >
      <SectionReveal className={cn('mx-auto flex w-full max-w-[min(100%,1440px)] flex-1', maxWidthClassName)}>
        <div className={cn('mx-auto flex w-full flex-1 flex-col', contentClassName)}>
          <div
            aria-hidden="true"
            className="h-[var(--section-shell-top)] shrink-0"
          />
          <div
            aria-hidden="true"
            data-section-anchor="true"
            className="h-0 w-full shrink-0"
          />

          <div className={cn('flex flex-1 flex-col items-center justify-center gap-8 sm:gap-12', bodyClassName)}>
            {header ? <div className="w-full shrink-0">{header}</div> : null}
            {children}
          </div>
        </div>
      </SectionReveal>
    </SectionFrame>
  )
}
