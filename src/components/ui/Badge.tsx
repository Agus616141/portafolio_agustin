import { cn } from '../../lib/cn'

type BadgeProps = {
  children: string
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-sm text-[var(--color-muted)]',
        className,
      )}
    >
      {children}
    </span>
  )
}
