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
        'bg-[radial-gradient(circle_at_top_left,#58d7ff_0%,rgba(88,215,255,0.12)_18%,transparent_34%),linear-gradient(145deg,#10143f_0%,#21155a_45%,#5b1fb3_100%)]',
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
        'bg-[radial-gradient(circle_at_top_left,#79dcff_0%,rgba(121,220,255,0.12)_14%,transparent_30%),linear-gradient(145deg,#090f34_0%,#1a215e_52%,#31156f_100%)]',
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
        'bg-[radial-gradient(circle_at_top_left,#48d8ff_0%,rgba(72,216,255,0.1)_18%,transparent_36%),linear-gradient(150deg,#081433_0%,#13295f_45%,#111636_100%)]',
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
