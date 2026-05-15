import { cn } from '../../lib/cn'
import { imageFrameClass } from './portfolioStyles'

type SectionImageFrameProps = {
  src: string
  alt: string
  gradientClassName: string
  wrapperClassName?: string
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
}

export function SectionImageFrame({
  src,
  alt,
  gradientClassName,
  wrapperClassName = '',
  loading = 'lazy',
  fetchPriority = 'auto',
}: SectionImageFrameProps) {
  return (
    <div className={cn('mx-auto w-full max-w-[300px] sm:max-w-[440px] lg:max-w-[500px]', wrapperClassName)}>
      <div className={imageFrameClass}>
        <div className={cn('aspect-[0.9/1.06] overflow-hidden rounded-[1.1rem] sm:rounded-[1.35rem]', gradientClassName)}>
          <img
            src={src}
            alt={alt}
            loading={loading}
            fetchPriority={fetchPriority}
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
