import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { buttonHoverClass } from './portfolioStyles'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function Button({
  children,
  className = '',
  variant = 'primary',
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-[var(--color-accent)] text-slate-950 hover:bg-[var(--color-accent-soft)]',
    secondary:
      'border border-[var(--color-border)] bg-white text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
  } as const

  return (
    <a
      className={cn(
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold',
        buttonHoverClass,
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
