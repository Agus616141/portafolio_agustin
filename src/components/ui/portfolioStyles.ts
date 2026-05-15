export const longEaseClass =
  'ease-[cubic-bezier(0.22,1,0.36,1)]'

export const interactiveMotionClass =
  `transform-gpu transition-all duration-[930ms] ${longEaseClass}`

export const buttonHoverClass =
  `${interactiveMotionClass} hover:scale-[1.09]`

export const titleHoverClass =
  `origin-left transition-transform duration-[1650ms] ${longEaseClass} hover:scale-[1.04]`

export const centeredTitleHoverClass =
  `inline-block origin-center transition-transform duration-[1650ms] ${longEaseClass} hover:scale-[1.04]`

export const nameBlinkClass =
  `animate-[hero-name-blink_4s_ease-in-out_infinite] bg-[linear-gradient(135deg,#0f172a_0%,#0f172a_42%,#94a3b8_62%,#94a3b8_100%)] bg-[length:220%_220%] bg-[position:100%_100%] bg-clip-text text-transparent transition-[background-position,transform] duration-[1810ms] ${longEaseClass} hover:bg-[position:0%_0%]`

export const descriptionHoverClass =
  `transition-transform duration-[1200ms] ${longEaseClass} hover:translate-x-3`

export const roleSwapClass =
  `transition-all duration-[850ms] ${longEaseClass}`

export const imageFrameClass =
  `rounded-[1.35rem] border border-[rgba(15,23,42,0.08)] bg-white p-2 shadow-[0_8px_18px_rgba(15,23,42,0.05),0_22px_42px_rgba(15,23,42,0.12)] transition-all duration-[1240ms] sm:rounded-[1.75rem] sm:p-2.5 ${longEaseClass} hover:scale-[1.035] hover:shadow-[0_12px_24px_rgba(15,23,42,0.07),0_28px_54px_rgba(15,23,42,0.15)]`

export const navbarItemClass =
  `inline-flex items-center gap-1.5 rounded-full px-3 py-2.5 text-[13px] font-medium leading-none sm:px-4 sm:py-3 sm:text-[14px] ${interactiveMotionClass} hover:scale-[1.04]`

export const sectionSubtitleClass =
  'mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-xs sm:tracking-[0.24em]'

export const sectionDescriptionClass =
  'mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--color-muted)] sm:text-base sm:leading-7 md:text-lg'

export const surfaceCardClass =
  'rounded-[1.25rem] border border-slate-200 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.05)]'

export const interactiveRowClass =
  'flex flex-col items-start justify-between gap-2 rounded-[0.9rem] border border-slate-200 bg-white px-3.5 py-3 transition-all duration-300 sm:flex-row sm:items-center sm:gap-3 sm:py-2.5 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_14px_30px_rgba(15,23,42,0.06)]'

export const footerIconButtonClass =
  'inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white'
