export const longEaseClass =
  'ease-[cubic-bezier(0.22,1,0.36,1)]'

export const interactiveMotionClass =
  `transform-gpu transition-all duration-[930ms] ${longEaseClass}`

export const buttonHoverClass =
  'motion-button'

export const cardLiftClass =
  'card-lift'

export const titleHoverClass =
  `origin-left transition-transform duration-[1650ms] ${longEaseClass} hover:scale-[1.04]`

export const centeredTitleHoverClass =
  `inline-block origin-center transition-transform duration-[1650ms] ${longEaseClass} hover:scale-[1.04]`

export const nameBlinkClass =
  `portfolio-accent-text animate-[hero-name-blink_4s_ease-in-out_infinite] transition-[background-position,transform] duration-[1810ms] ${longEaseClass} hover:bg-[position:0%_0%]`

export const descriptionHoverClass =
  `transition-transform duration-[1200ms] ${longEaseClass} hover:translate-x-3`

export const roleSwapClass =
  `transition-all duration-[850ms] ${longEaseClass}`

export const imageFrameClass =
  `image-frame-surface ${cardLiftClass} rounded-[1.35rem] p-2 transition-all duration-[1240ms] sm:rounded-[1.75rem] sm:p-2.5 ${longEaseClass} hover:shadow-[var(--panel-shadow-strong)]`

export const navbarItemClass =
  `inline-flex items-center gap-1.5 rounded-full px-3 py-2.5 text-[13px] font-medium leading-none sm:px-4 sm:py-3 sm:text-[14px] ${interactiveMotionClass} hover:scale-[1.04]`

export const sectionSubtitleClass =
  'mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-subtle)] sm:text-xs sm:tracking-[0.24em]'

export const sectionDescriptionClass =
  'mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--color-muted)] sm:text-base sm:leading-7 md:text-lg'

export const surfaceCardClass =
  'surface-card rounded-[1.25rem]'

export const interactiveRowClass =
  `interactive-row flex flex-col items-start justify-between gap-2 rounded-[0.9rem] px-3.5 py-3 sm:flex-row sm:items-center sm:gap-3 sm:py-2.5 ${cardLiftClass} hover:border-[var(--color-border-strong)] hover:shadow-[var(--panel-shadow)]`

export const footerIconButtonClass =
  'footer-icon-button inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors'
