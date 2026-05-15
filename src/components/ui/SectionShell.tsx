import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { SectionFrame } from './SectionFrame'
import { SectionReveal } from './SectionReveal'

type SectionShellProps = {
  id: string
  className?: string
  contentClassName?: string
  backgroundClassName?: string
  children: ReactNode
}

const defaultSectionBackgroundClass =
  'inset-x-0 top-[var(--section-accent-top)] h-[var(--section-accent-height)] bg-[radial-gradient(ellipse_72%_125%_at_50%_0%,rgba(148,163,184,0.18),transparent_72%),radial-gradient(ellipse_34%_82%_at_20%_10%,rgba(226,232,240,0.16),transparent_76%)]'

export function SectionShell({
  id,
  className,
  contentClassName,
  backgroundClassName,
  children,
}: SectionShellProps) {
  return (
    <SectionFrame
      id={id}
      className={className}
      backgroundClassName={backgroundClassName ?? defaultSectionBackgroundClass}
    >
      <SectionReveal className={cn('mx-auto w-full max-w-[min(100%,1440px)]', contentClassName)}>
        {children}
      </SectionReveal>
    </SectionFrame>
  )
}
