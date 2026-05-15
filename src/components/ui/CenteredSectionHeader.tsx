import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'
import {
  centeredTitleHoverClass,
  sectionDescriptionClass,
  sectionSubtitleClass,
} from './portfolioStyles'

type CenteredSectionHeaderProps = {
  title: ReactNode
  subtitle?: ReactNode
  description?: ReactNode
  className?: string
  titleClassName?: string
  subtitleClassName?: string
  descriptionClassName?: string
}

export function CenteredSectionHeader({
  title,
  subtitle,
  description,
  className,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
}: CenteredSectionHeaderProps) {
  return (
    <header className={cn('mx-auto max-w-3xl px-1 text-center sm:px-0', className)}>
      <h2
        className={cn(
          centeredTitleHoverClass,
          'text-3xl font-black leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl',
          titleClassName,
        )}
      >
        {title}
      </h2>

      {subtitle ? (
        <p className={cn(sectionSubtitleClass, subtitleClassName)}>
          {subtitle}
        </p>
      ) : null}

      {description ? (
        <p className={cn(sectionDescriptionClass, descriptionClassName)}>
          {description}
        </p>
      ) : null}
    </header>
  )
}
