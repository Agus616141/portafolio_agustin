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
    primary: 'button-surface-primary',
    secondary: 'button-surface-secondary',
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
