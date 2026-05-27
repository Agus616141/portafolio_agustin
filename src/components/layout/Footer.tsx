import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu'
import { contact, footerContent } from '../../data/site'
import { footerIconButtonClass } from '../ui/portfolioStyles'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer-surface flex min-h-[15svh] items-stretch text-[var(--footer-text)]">
      <div className="flex w-full flex-col">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 sm:px-6">
          <div className="flex flex-col gap-3 py-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div className="mx-auto md:mx-0">
              <p className="text-base font-bold tracking-[-0.03em] text-[var(--color-text)] sm:text-[1.05rem]">{footerContent.name}</p>
              <p className="mt-1 max-w-md text-[0.78rem] leading-5 text-[var(--color-muted)]">
                {footerContent.summary}
              </p>
            </div>

            <div className="flex items-center justify-center gap-2.5">
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
        </div>

        <div className="border-t border-[var(--footer-border)]">
          <div className="mx-auto flex max-w-6xl flex-col gap-1.5 px-4 py-2 text-center text-[0.72rem] leading-5 text-[var(--color-subtle)] sm:px-6 md:flex-row md:items-center md:justify-between md:text-left">
            <p className="max-w-[34rem] text-balance">&copy; {year} {footerContent.name}. {footerContent.copyrightText}</p>
            <p className="max-w-[30rem] text-balance">{footerContent.availabilityText}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
