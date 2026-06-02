import { useRef } from 'react'
import {
  AnimatePresence,
  m,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useDocumentTheme } from '../../hooks/useDocumentTheme'
import { useIsMobile } from '../../hooks/useIsMobile'

type HeroVisualProps = {
  src: string
  srcLight?: string
  alt: string
  className?: string
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
}

const NODES = [
  { top: '-1rem',  right: '-1.2rem', size: '0.55rem', color: 'var(--color-accent-alt)', delay: 0,   dur: 2.8 },
  { bottom: '10%', left:  '-1.4rem', size: '0.42rem', color: 'var(--color-accent)',     delay: 0.9, dur: 3.4 },
  { top: '38%',    right: '-1.6rem', size: '0.35rem', color: 'var(--color-accent-soft)',delay: 1.7, dur: 4.0 },
]

export function HeroVisual({
  src,
  srcLight,
  alt,
  className = '',
  loading = 'eager',
  fetchPriority = 'high',
}: HeroVisualProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const frameRef   = useRef<number>(0)
  const reduced    = useReducedMotion()
  const isMobile   = useIsMobile()
  const theme      = useDocumentTheme()

  const disableMotion = reduced || isMobile

  const isLight    = theme === 'light' && Boolean(srcLight)
  const currentSrc = isLight ? (srcLight as string) : src

  const rawX    = useMotionValue(0)
  const rawY    = useMotionValue(0)
  const rotateY = useTransform(rawX, [-0.5, 0.5], [-9,  9])
  const rotateX = useTransform(rawY, [-0.5, 0.5], [ 6, -6])
  const springY = useSpring(rotateY, { stiffness: 70, damping: 18 })
  const springX = useSpring(rotateX, { stiffness: 70, damping: 18 })

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!wrapperRef.current || frameRef.current) return
    const { clientX, clientY } = e
    frameRef.current = requestAnimationFrame(() => {
      if (!wrapperRef.current) return
      const r = wrapperRef.current.getBoundingClientRect()
      rawX.set((clientX - r.left) / r.width  - 0.5)
      rawY.set((clientY - r.top)  / r.height - 0.5)
      frameRef.current = 0
    })
  }

  function onLeave() {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = 0
    }
    rawX.set(0)
    rawY.set(0)
  }

  const stageStyle = isLight
    ? {
        background: 'linear-gradient(160deg,#f0eaff 0%,#fafafe 55%,#eef4ff 100%)',
        boxShadow: 'inset 0 0 40px rgba(140,100,255,0.08)',
      }
    : {
        background: 'linear-gradient(160deg,#1d1443 0%,#0d1029 56%,#090b1d 100%)',
        boxShadow: 'inset 0 0 48px rgba(100,55,210,0.18)',
      }

  return (
    <div
      ref={wrapperRef}
      onMouseMove={disableMotion ? undefined : onMove}
      onMouseLeave={disableMotion ? undefined : onLeave}
      className={`relative mx-auto w-full max-w-[300px] sm:max-w-[440px] lg:max-w-[500px] ${className}`}
      style={disableMotion ? undefined : { perspective: '900px' }}
    >
      <div
        aria-hidden="true"
        className="hero-visual-glow pointer-events-none absolute inset-[-8%] -z-10 rounded-full blur-3xl"
        style={{
          background: isLight
            ? 'radial-gradient(circle at 50% 55%,rgba(180,150,255,0.35) 0%,rgba(100,180,255,0.18) 55%,transparent 80%)'
            : 'radial-gradient(circle at 50% 55%,rgba(139,92,255,0.52) 0%,rgba(121,220,255,0.22) 55%,transparent 80%)',
        }}
      />

      <m.div
        style={
          disableMotion
            ? {}
            : { rotateX: springX, rotateY: springY, transformStyle: 'preserve-3d' }
        }
      >
        <m.div
          animate={disableMotion ? {} : { y: [0, -11, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="image-frame-surface card-lift rounded-[1.35rem] p-2 sm:rounded-[1.75rem] sm:p-2.5">
            <div
              className="relative aspect-[0.9/1.06] overflow-hidden rounded-[1.1rem] sm:rounded-[1.35rem]"
              style={stageStyle}
            >
              <AnimatePresence mode="sync">
                <m.img
                  key={currentSrc}
                  src={currentSrc}
                  alt={alt}
                  loading={loading}
                  fetchPriority={fetchPriority}
                  decoding="async"
                  initial={disableMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={disableMotion ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.37, ease: 'easeInOut' }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
        </m.div>

        {!disableMotion && NODES.map((n, i) => (
          <m.span
            key={i}
            aria-hidden="true"
            animate={{ y: [0, i % 2 === 0 ? -7 : 7, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: n.dur, repeat: Infinity, ease: 'easeInOut', delay: n.delay }}
            className="pointer-events-none absolute rounded-full"
            style={{
              top:    n.top    ?? undefined,
              bottom: n.bottom ?? undefined,
              left:   n.left   ?? undefined,
              right:  n.right  ?? undefined,
              width:  n.size,
              height: n.size,
              background: n.color,
              boxShadow: `0 0 8px 2px ${n.color}`,
            }}
          />
        ))}
      </m.div>
    </div>
  )
}
