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
  bodyAlign?: 'start' | 'center'
  maxWidthClassName?: string
  backgroundClassName?: string
  scrollMarginTop?: string
  children: ReactNode
}

const defaultSectionBackgroundClass =
  ''

export function SectionShell({
  id,
  header,
  className,
  contentClassName,
  bodyClassName,
  bodyAlign = 'start',
  maxWidthClassName,
  backgroundClassName,
  scrollMarginTop = 'calc(var(--nav-offset)+1rem)',
  children,
}: SectionShellProps) {
  return (
    <SectionFrame
      className={className}
      layoutClassName="min-h-[calc(100svh-var(--nav-offset))] items-stretch justify-center"
      spacingClassName="px-4 pb-12 sm:px-6 sm:pb-20"
      backgroundClassName={backgroundClassName ?? defaultSectionBackgroundClass}
    >
      <SectionReveal className={cn('mx-auto flex w-full', maxWidthClassName ?? 'max-w-[min(100%,1440px)]')}>
        <div className={cn('flex w-full flex-1 flex-col', contentClassName)}>
          <div
            aria-hidden="true"
            className="h-[var(--section-shell-top)] shrink-0"
          />
          <div
            id={id}
            aria-hidden="true"
            data-section-anchor="true"
            style={{ scrollMarginTop }}
            className="h-0 w-full shrink-0"
          />

          <div
            className={cn(
              'flex flex-1 flex-col items-center gap-8 sm:gap-12',
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
