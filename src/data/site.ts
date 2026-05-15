import { editableContent } from './editableContent'

export const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mi', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Servicios', href: '#services' },
  { label: 'Contacto', href: '#contact' },
] as const

export const stack = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Tailwind CSS',
  'Vite',
  'Git',
] as const

export const projects = [
  {
    title: 'Penguin Academy',
    ...editableContent.projects[0],
    visual: {
      gradientClassName:
        'bg-[radial-gradient(circle_at_top_left,#38bdf8_0%,rgba(56,189,248,0.05)_18%,transparent_32%),linear-gradient(140deg,#171c72_0%,#24185f_45%,#6a1d8f_100%)]',
      accentClassName: 'bg-cyan-300',
      accentSecondaryClassName: 'bg-fuchsia-400',
      showChart: false,
    },
  },
  {
    title: 'TREE.JS',
    ...editableContent.projects[1],
    visual: {
      gradientClassName:
        'bg-[radial-gradient(circle_at_top_left,#67e8f9_0%,rgba(103,232,249,0.08)_12%,transparent_28%),linear-gradient(145deg,#06104b_0%,#1b2d7a_52%,#261661_100%)]',
      accentClassName: 'bg-sky-300',
      accentSecondaryClassName: 'bg-violet-400',
      showChart: false,
    },
  },
  {
    title: 'Entropy Evolve',
    ...editableContent.projects[2],
    visual: {
      gradientClassName:
        'bg-[radial-gradient(circle_at_top_left,#22d3ee_0%,rgba(34,211,238,0.07)_18%,transparent_36%),linear-gradient(150deg,#031d49_0%,#092d64_45%,#061838_100%)]',
      accentClassName: 'bg-cyan-300',
      accentSecondaryClassName: 'bg-sky-500',
      showChart: true,
    },
  },
] as const

export const aboutProfile = {
  name: editableContent.about.name,
  summary: editableContent.about.summary,
  imageSrc: editableContent.about.imageSrc,
  imageAlt: editableContent.about.imageAlt,
  highlights: [
    {
      title: 'Educacion',
      ...editableContent.about.highlights[0],
    },
    {
      title: 'Experiencia',
      ...editableContent.about.highlights[1],
    },
  ],
  skillsTitle: editableContent.about.skillsTitle,
} as const

export const hero = {
  name: editableContent.hero.name,
  roles: editableContent.hero.roles,
  summary: editableContent.hero.summary,
  socialLabel: editableContent.hero.socialLabel,
  primaryButtonLabel: editableContent.hero.primaryButtonLabel,
  secondaryButtonLabel: editableContent.hero.secondaryButtonLabel,
  secondaryButtonHref: editableContent.hero.secondaryButtonHref,
  imageSrc: editableContent.hero.imageSrc,
  imageAlt: editableContent.hero.imageAlt,
} as const

export const projectsSection = {
  title: 'Mis Proyectos',
  description: editableContent.projectsSection.description,
} as const

export const servicesSection = {
  title: 'Mis Servicios',
  description: editableContent.servicesSection.description,
  cta: {
    label: editableContent.servicesSection.ctaLabel,
    href: editableContent.servicesSection.ctaHref,
  },
  items: [
    {
      title: 'Desarrollo Web',
      iconKey: 'web',
      description: editableContent.servicesSection.items[0].description,
    },
    {
      title: 'Inteligencia Artificial',
      iconKey: 'ai',
      description: editableContent.servicesSection.items[1].description,
    },
    {
      title: 'Full Stack',
      iconKey: 'fullstack',
      description: editableContent.servicesSection.items[2].description,
    },
  ],
} as const

export const contactSection = {
  title: 'Contacto',
  subtitle: editableContent.contactSection.subtitle,
  description: editableContent.contactSection.description,
  emailLabel: editableContent.contactSection.emailLabel,
  emailHelpText: editableContent.contactSection.emailHelpText,
  emailButtonLabel: editableContent.contactSection.emailButtonLabel,
  whatsappButtonLabel: editableContent.contactSection.whatsappButtonLabel,
  profilesLabel: editableContent.contactSection.profilesLabel,
  githubLabel: editableContent.contactSection.githubLabel,
  githubCta: editableContent.contactSection.githubCta,
  linkedinLabel: editableContent.contactSection.linkedinLabel,
  linkedinCta: editableContent.contactSection.linkedinCta,
} as const

export const contact = editableContent.contactLinks

export const footerContent = editableContent.footer
