import { cn } from '../../lib/cn'

type BadgeProps = {
  children: string
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'badge-surface rounded-full px-3 py-1 text-sm',
        className,
      )}
    >
      {children}
    </span>
  )
}
