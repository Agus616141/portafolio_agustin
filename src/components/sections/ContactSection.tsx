import { FaWhatsapp } from 'react-icons/fa6'
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu'
import { contact, contactSection } from '../../data/site'
import { Button } from '../ui/Button'
import { CompactSectionShell } from '../ui/CompactSectionShell'
import { CenteredSectionHeader } from '../ui/CenteredSectionHeader'
import {
  interactiveRowClass,
  nameBlinkClass,
  surfaceCardClass,
} from '../ui/portfolioStyles'

export function ContactSection() {
  const [subtitleLead = contactSection.subtitle, ...subtitleRest] =
    contactSection.subtitle.split(' ')

  return (
    <CompactSectionShell
      id="contact"
      scrollMarginTop="calc(var(--nav-offset)+0.5rem)"
      layoutClassName="items-stretch justify-center min-h-[60svh] lg:flex-1 lg:min-h-0"
      contentClassName="h-full"
      bodyClassName="gap-3 sm:gap-3.5"
      bodyAlign="center"
      ariaLabelledby="contact-title"
    >
      <CenteredSectionHeader
        titleId="contact-title"
        title={
          <span className={nameBlinkClass}>
            {contactSection.title}
          </span>
        }
        subtitle={
          <>
            {subtitleLead}{' '}
            <span className={nameBlinkClass}>
              {subtitleRest.join(' ')}
            </span>
          </>
        }
        description={contactSection.description}
        titleClassName="md:text-5xl lg:text-6xl"
        className="w-full"
        subtitleClassName="mt-2"
      />

      <div className="mx-auto grid w-full max-w-4xl justify-center gap-3 px-4 sm:px-0 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
        <article className={`${surfaceCardClass} px-4 py-4 sm:px-5`}>
          <div className="flex items-start gap-2.5">
            <div className="glow-icon-box flex h-10 w-10 items-center justify-center rounded-[0.9rem] sm:h-11 sm:w-11 sm:rounded-[0.95rem]">
              <LuMail className="text-base" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-subtle)]">
                {contactSection.emailLabel}
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-1 inline-block break-all text-base font-bold tracking-[-0.02em] text-[var(--color-text)] transition-colors hover:text-[var(--color-accent-soft)] sm:text-lg"
              >
                {contact.email}
              </a>
              <p className="mt-2 max-w-[38ch] text-sm leading-6 text-[var(--color-muted)] md:text-base">
                {contactSection.emailHelpText}
              </p>
            </div>
          </div>

          <div className="mt-3 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button
              href={`mailto:${contact.email}`}
              className="w-full justify-center gap-2 px-4 py-2 sm:w-auto"
            >
              <LuMail className="text-sm" />
              {contactSection.emailButtonLabel}
            </Button>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-border-sweep inline-flex w-full items-center justify-center gap-2 rounded-full px-1.5 py-1.5 text-sm font-semibold sm:w-auto"
              aria-label="Abrir WhatsApp"
            >
              <span className="whatsapp-button-surface relative z-10 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2 sm:w-auto">
                <span className="whatsapp-icon-shell inline-flex h-7 w-7 items-center justify-center rounded-full">
                  <FaWhatsapp className="shrink-0 text-[0.95rem]" />
                </span>
                <span className="tracking-[0.01em]">{contactSection.whatsappButtonLabel}</span>
              </span>
            </a>
          </div>
        </article>

        <article className={`${surfaceCardClass} px-4 py-4 sm:px-5`}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-subtle)]">
            {contactSection.profilesLabel}
          </p>
          <div className="mt-2.5 space-y-2">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className={interactiveRowClass}
            >
              <span className="inline-flex items-center gap-3 text-base text-[var(--color-text)]">
                <LuGithub className="text-base" />
                {contactSection.githubLabel}
              </span>
              <span className="text-sm font-medium text-[var(--color-muted)]">{contactSection.githubCta}</span>
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className={interactiveRowClass}
            >
              <span className="inline-flex items-center gap-3 text-base text-[var(--color-text)]">
                <LuLinkedin className="text-base" />
                {contactSection.linkedinLabel}
              </span>
              <span className="text-sm font-medium text-[var(--color-muted)]">{contactSection.linkedinCta}</span>
            </a>
          </div>
        </article>
      </div>
    </CompactSectionShell>
  )
}
