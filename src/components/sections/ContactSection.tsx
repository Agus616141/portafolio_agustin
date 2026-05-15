import { FaWhatsapp } from 'react-icons/fa6'
import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu'
import { contact, contactSection } from '../../data/site'
import { Button } from '../ui/Button'
import { CenteredSectionHeader } from '../ui/CenteredSectionHeader'
import { SectionFrame } from '../ui/SectionFrame'
import { SectionReveal } from '../ui/SectionReveal'
import {
  interactiveRowClass,
  nameBlinkClass,
  surfaceCardClass,
} from '../ui/portfolioStyles'

export function ContactSection() {
  return (
    <SectionFrame
      id="contact"
      layoutClassName="min-h-0 flex-1 items-stretch"
      spacingClassName="px-0 py-0"
      backgroundClassName="inset-x-0 top-[var(--contact-accent-top)] h-[var(--contact-accent-height)] bg-[radial-gradient(ellipse_80%_128%_at_50%_0%,rgba(148,163,184,0.18),transparent_74%)]"
      role="region"
      ariaLabelledby="contact-title"
    >
      <SectionReveal
        className="mx-auto flex h-full w-full max-w-6xl flex-1 flex-col justify-center px-4 pt-4 pb-2 sm:px-6"
      >
        <CenteredSectionHeader
          title={
            <span className={nameBlinkClass}>
              {contactSection.title}
            </span>
          }
          subtitle={
            <>
              {contactSection.subtitle.split(' ')[0]}{' '}
              <span className={nameBlinkClass}>
                {contactSection.subtitle.split(' ').slice(1).join(' ')}
              </span>
            </>
          }
          description={contactSection.description}
          titleClassName="md:text-5xl lg:text-6xl"
          className="pt-[var(--contact-header-offset)]"
          subtitleClassName="mt-2"
        />

        <div className="mx-auto mt-3.5 grid w-full max-w-4xl gap-3 lg:grid-cols-[1.15fr_0.85fr]">
          <article className={`${surfaceCardClass} px-4 py-4 sm:px-5`}>
            <div className="flex items-start gap-2.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-[0.95rem] bg-slate-950 text-white">
                <LuMail className="text-base" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Email principal
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-1 inline-block break-all text-base font-bold tracking-[-0.02em] text-slate-900 transition-colors hover:text-slate-600 sm:text-lg"
                >
                  {contact.email}
                </a>
                <p className="mt-2 max-w-[38ch] text-sm leading-6 text-slate-500 md:text-base">
                  Ideal para consultas, propuestas, colaboraciones o trabajos freelance.
                </p>
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button
                href={`mailto:${contact.email}`}
                className="w-full justify-center gap-2 border border-black bg-black px-4 py-2 text-white hover:border-slate-800 hover:bg-slate-800 hover:text-white sm:w-auto"
              >
                <LuMail className="text-sm" />
                Enviar mensaje
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
                  <span className="tracking-[0.01em]">WhatsApp</span>
                </span>
              </a>
            </div>
          </article>

          <article className={`${surfaceCardClass} bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-4 py-4 sm:px-5`}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Perfiles
            </p>
            <div className="mt-2.5 space-y-2">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className={interactiveRowClass}
              >
                <span className="inline-flex items-center gap-3 text-base text-slate-900">
                  <LuGithub className="text-base" />
                  GitHub
                </span>
                <span className="text-sm font-medium text-slate-500">Ver perfil</span>
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className={interactiveRowClass}
              >
                <span className="inline-flex items-center gap-3 text-base text-slate-900">
                  <LuLinkedin className="text-base" />
                  LinkedIn
                </span>
                <span className="text-sm font-medium text-slate-500">Conectar</span>
              </a>
            </div>
          </article>
        </div>
      </SectionReveal>
    </SectionFrame>
  )
}
