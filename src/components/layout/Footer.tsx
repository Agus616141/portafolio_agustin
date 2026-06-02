import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu'
import { contact, footerContent } from '../../data/site'
import { footerIconButtonClass } from '../ui/portfolioStyles'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer-surface text-[var(--footer-text)]">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">

        {/* Main row */}
        <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div>
            <p className="text-[0.93rem] font-bold tracking-[-0.02em] text-[var(--color-text)]">
              {footerContent.name}
            </p>
            <p className="mt-0.5 text-[0.78rem] leading-5 text-[var(--color-muted)]">
              {footerContent.summary}
            </p>
          </div>

          <div className="flex items-center gap-2 sm:shrink-0">
            <a
              href={`mailto:${contact.email}`}
              className={footerIconButtonClass}
              aria-label="Email"
            >
              <LuMail />
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className={footerIconButtonClass}
              aria-label="GitHub"
            >
              <LuGithub />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className={footerIconButtonClass}
              aria-label="LinkedIn"
            >
              <LuLinkedin />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--footer-border)] py-3">
          <p className="text-[0.7rem] leading-5 text-[var(--color-subtle)]">
            &copy; {year} {footerContent.name}. {footerContent.copyrightText}
          </p>
        </div>

      </div>
    </footer>
  )
}
