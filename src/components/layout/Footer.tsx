import { LuGithub, LuLinkedin, LuMail } from 'react-icons/lu'
import { contact } from '../../data/site'
import { footerIconButtonClass } from '../ui/portfolioStyles'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[linear-gradient(180deg,#1a1d24_0%,#111318_100%)] text-slate-300">
      <div className="pointer-events-none h-8 bg-[linear-gradient(180deg,rgba(15,23,42,0)_0%,rgba(15,23,42,0.06)_45%,rgba(15,23,42,0.18)_100%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 text-center sm:px-6 md:flex-row md:items-center md:justify-between md:text-left">
        <div className="mx-auto md:mx-0">
          <p className="text-base font-bold tracking-[-0.03em] text-white sm:text-[1.05rem]">Agustin Meza</p>
          <p className="mt-1 max-w-md text-[0.78rem] leading-5 text-slate-400">
            Portfolio profesional orientado a desarrollo frontend, interfaces cuidadas y soluciones web con criterio tecnico.
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

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-center text-[0.72rem] leading-5 text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between md:text-left">
          <p className="max-w-[34rem] text-balance">&copy; {year} Agustin Meza. Presencia digital, proyectos y canales de contacto.</p>
          <p className="max-w-[30rem] text-balance">Disponible para colaboraciones, mejoras de producto y nuevas oportunidades.</p>
        </div>
      </div>
    </footer>
  )
}
