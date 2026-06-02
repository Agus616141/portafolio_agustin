import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type SectionFrameProps = {
  role?: string
  ariaLabelledby?: string
  className?: string
  layoutClassName?: string
  spacingClassName?: string
  backgroundClassName?: string
  children: ReactNode
}

export function SectionFrame({
  role,
  ariaLabelledby,
  className = '',
  layoutClassName = 'min-h-[calc(100svh-var(--nav-offset))] items-center',
  spacingClassName = 'px-4 py-16 sm:px-6 sm:py-20',
  backgroundClassName = '',
  children,
}: SectionFrameProps) {
  return (
    <section
      role={role}
      aria-labelledby={ariaLabelledby}
      data-section-frame="true"
      className={cn(
        'relative z-0 flex scroll-mt-[calc(var(--nav-offset)+1rem)] overflow-hidden isolate',
        layoutClassName,
        spacingClassName,
        className,
      )}
    >
      {backgroundClassName ? (
        <div className={cn('pointer-events-none absolute -z-10', backgroundClassName)} />
      ) : null}
      {children}
    </section>
  )
}
