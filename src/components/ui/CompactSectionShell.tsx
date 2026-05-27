import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { SectionFrame } from './SectionFrame'
import { SectionReveal } from './SectionReveal'

type CompactSectionShellProps = {
  id: string
  header?: ReactNode
  className?: string
  contentClassName?: string
  bodyClassName?: string
  bodyAlign?: 'start' | 'center'
  maxWidthClassName?: string
  backgroundClassName?: string
  ariaLabelledby?: string
  children: ReactNode
}

export function CompactSectionShell({
  id,
  header,
  className,
  contentClassName,
  bodyClassName,
  bodyAlign = 'start',
  maxWidthClassName,
  backgroundClassName,
  ariaLabelledby,
  children,
}: CompactSectionShellProps) {
  return (
    <SectionFrame
      id={id}
      className={className}
      layoutClassName="min-h-[85svh] items-stretch"
      spacingClassName="px-4 pb-4 sm:px-6 sm:pb-6"
      backgroundClassName={backgroundClassName}
      role="region"
      ariaLabelledby={ariaLabelledby}
    >
      <SectionReveal
        className={cn(
          'mx-auto flex h-full w-full max-w-[min(100%,1440px)]',
          maxWidthClassName,
        )}
      >
        <div className={cn('mx-auto flex h-full w-full flex-1 flex-col', contentClassName)}>
          <div
            aria-hidden="true"
            className="h-[calc(var(--nav-offset)+0.5rem)] shrink-0"
          />
          <div
            aria-hidden="true"
            data-section-anchor="true"
            className="h-0 w-full shrink-0"
          />

          <div
            className={cn(
              'flex flex-1 flex-col gap-4',
              bodyAlign === 'center' ? 'justify-center' : 'justify-start',
              bodyClassName,
            )}
          >
            {header ? <div className="w-full shrink-0">{header}</div> : null}
            {children}
          </div>
        </div>
      </SectionReveal>
    </SectionFrame>
  )
}
