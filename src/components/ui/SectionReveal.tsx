import type { ReactNode } from 'react'
import { motion, type HTMLMotionProps, useReducedMotion } from 'framer-motion'
import { cn } from '../../lib/cn'

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

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={reduceMotion ? undefined : { amount: 0.3, once: true }}
      transition={reduceMotion ? undefined : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
