import type { ReactNode } from 'react'
import { motion, type HTMLMotionProps, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { useIsMobile } from '../../hooks/useIsMobile'

type SectionRevealProps = {
  className?: string
  children: ReactNode
} & HTMLMotionProps<'div'>

export function SectionReveal({
  className = '',
  children,
  ...props
}: SectionRevealProps) {
  const reduceMotion = useReducedMotion()
  const isMobile     = useIsMobile()

  // On mobile or reduced motion: skip animation entirely, render children immediately
  if (reduceMotion || isMobile) {
    return <div className={cn(className)}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
