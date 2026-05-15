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
    description:
      'Plataforma educativa especializada en Inteligencia Artificial, programacion y matematicas aplicadas.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    href: '#',
    ctaLabel: 'Ver Proyecto',
    ctaType: 'external',
    image: '/images/profile-placeholder.svg',
    imageAlt: 'Vista conceptual del proyecto Penguin Academy',
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
    description:
      'Aplicacion web interactiva con animaciones 3D creadas con ThreeJS.',
    tags: ['ThreeJS', 'JavaScript', 'WebGL', '3D'],
    href: '#',
    ctaLabel: 'Ver Proyecto',
    ctaType: 'external',
    image: '/images/profile-placeholder.svg',
    imageAlt: 'Vista conceptual del proyecto TREE.JS',
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
    description:
      'Sistema de automajora para agentes de IA, disenado para dominios complejos con ingenieria de software.',
    tags: ['Python', 'AI', 'Machine Learning'],
    href: '#',
    ctaLabel: 'GitHub',
    ctaType: 'github',
    image: '/images/profile-placeholder.svg',
    imageAlt: 'Vista conceptual del proyecto Entropy Evolve',
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
  name: 'Agustin',
  summary:
    'Estudiante y desarrollador frontend enfocado en interfaces limpias, experiencias suaves y codigo mantenible para proyectos web modernos.',
  highlights: [
    {
      title: 'Educacion',
      place: 'Formacion autodidacta y proyectos guiados',
      detail: 'React, TypeScript, UI responsive y buenas practicas de maquetado.',
      period: '2024 - Actualidad',
    },
    {
      title: 'Experiencia',
      place: 'Proyectos personales y practicas de portfolio',
      detail:
        'Desarrollo de interfaces, animaciones, componentes reutilizables y secciones pensadas para escalar.',
      period: '2024 - Actualidad',
    },
  ],
  skillsTitle: 'Habilidades Tecnicas',
} as const

export const hero = {
  name: 'Agustin',
  roles: [
    'Frontend Developer',
    'React Interface Builder',
    'UI Motion Enthusiast',
  ],
  summary:
    'Construyo experiencias web modernas con React, TypeScript y una base ordenada para escalar el portfolio.',
  socialLabel: 'Seguime',
} as const

export const projectsSection = {
  title: 'Mis Proyectos',
  description:
    'Algunos de los proyectos en los que he trabajado',
} as const

export const servicesSection = {
  title: 'Mis Servicios',
  description: 'Lo que puedo hacer por ti',
  cta: {
    label: 'Contratame',
    href: '#contact',
  },
  items: [
    {
      title: 'Desarrollo Web',
      iconKey: 'web',
      description:
        'Creacion de aplicaciones web modernas, responsive y mantenibles con foco en experiencia de usuario.',
    },
    {
      title: 'Inteligencia Artificial',
      iconKey: 'ai',
      description:
        'Integracion de flujos con IA, automatizacion y soluciones orientadas a sistemas utiles para negocios reales.',
    },
    {
      title: 'Full Stack',
      iconKey: 'fullstack',
      description:
        'Construccion de soluciones completas desde el frontend hasta la logica backend, listas para crecer.',
    },
  ],
} as const

export const contactSection = {
  title: 'Contacto',
  subtitle: 'Hablemos de tu idea',
  description:
    'Si tenes una idea, una mejora para tu producto o queres sumar una solucion a medida, podemos conversarlo.',
} as const

export const contact = {
  email: 'pablo616141@gmail.com',
  whatsapp: 'https://wa.me/5492235238756?text=Hola%20Agustin%2C%20quiero%20hablar%20sobre%20un%20proyecto.',
  instagram: 'https://instagram.com/agustin.meza_',
  linkedin: 'https://www.linkedin.com/in/pablo-agustin-meza-6981352a6/',
  github: 'https://github.com/Agus616141',
} as const
