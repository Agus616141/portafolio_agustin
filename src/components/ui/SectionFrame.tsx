import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type SectionFrameProps = {
  id: string
  role?: string
  ariaLabelledby?: string
  className?: string
  layoutClassName?: string
  spacingClassName?: string
  backgroundClassName?: string
  children: ReactNode
}

export function SectionFrame({
  id,
  role,
  ariaLabelledby,
  className = '',
  layoutClassName = 'min-h-svh items-center',
  spacingClassName = 'px-4 py-16 sm:px-6 sm:py-20',
  backgroundClassName = '',
  children,
}: SectionFrameProps) {
  return (
    <section
      id={id}
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
