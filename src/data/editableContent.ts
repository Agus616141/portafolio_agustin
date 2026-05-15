// Edita este archivo para cambiar textos, enlaces e imagenes del portfolio.
// Los titulos principales de las secciones se mantienen en site.ts.

export const editableContent = {
  hero: {
    name: 'Agustin',
    roles: [
      'Frontend Developer',
      'React Interface Builder',
      'UI Motion Enthusiast',
    ],
    summary:
      'Construyo experiencias web modernas con React, TypeScript y una base ordenada para escalar el portfolio.',
    socialLabel: 'Seguime',
    primaryButtonLabel: 'Contacto',
    secondaryButtonLabel: 'Descargar CV',
    secondaryButtonHref: '/cv/Agustin_CV.pdf',
    imageSrc: '/images/profile-placeholder.svg',
    imageAlt: 'Placeholder visual de Agustin',
  },
  about: {
    name: 'Agustin',
    summary:
      'Estudiante y desarrollador frontend enfocado en interfaces limpias, experiencias suaves y codigo mantenible para proyectos web modernos.',
    imageSrc: '/images/profile-placeholder.svg',
    imageAlt: 'Placeholder visual de Agustin',
    highlights: [
      {
        place: 'Formacion autodidacta y proyectos guiados',
        detail: 'React, TypeScript, UI responsive y buenas practicas de maquetado.',
        period: '2024 - Actualidad',
      },
      {
        place: 'Proyectos personales y practicas de portfolio',
        detail:
          'Desarrollo de interfaces, animaciones, componentes reutilizables y secciones pensadas para escalar.',
        period: '2024 - Actualidad',
      },
    ],
    skillsTitle: 'Habilidades Tecnicas',
  },
  projectsSection: {
    description: 'Algunos de los proyectos en los que he trabajado',
  },
  projects: [
    {
      description:
        'Plataforma educativa especializada en Inteligencia Artificial, programacion y matematicas aplicadas.',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
      href: '#',
      ctaLabel: 'Ver Proyecto',
      ctaType: 'external',
      image: '/images/profile-placeholder.svg',
      imageAlt: 'Vista conceptual del proyecto Penguin Academy',
    },
    {
      description:
        'Aplicacion web interactiva con animaciones 3D creadas con ThreeJS.',
      tags: ['ThreeJS', 'JavaScript', 'WebGL', '3D'],
      href: '#',
      ctaLabel: 'Ver Proyecto',
      ctaType: 'external',
      image: '/images/profile-placeholder.svg',
      imageAlt: 'Vista conceptual del proyecto TREE.JS',
    },
    {
      description:
        'Sistema de automajora para agentes de IA, disenado para dominios complejos con ingenieria de software.',
      tags: ['Python', 'AI', 'Machine Learning'],
      href: '#',
      ctaLabel: 'GitHub',
      ctaType: 'github',
      image: '/images/profile-placeholder.svg',
      imageAlt: 'Vista conceptual del proyecto Entropy Evolve',
    },
  ],
  servicesSection: {
    description: 'Lo que puedo hacer por ti',
    ctaLabel: 'Contratame',
    ctaHref: '#contact',
    items: [
      {
        description:
          'Creacion de aplicaciones web modernas, responsive y mantenibles con foco en experiencia de usuario.',
      },
      {
        description:
          'Integracion de flujos con IA, automatizacion y soluciones orientadas a sistemas utiles para negocios reales.',
      },
      {
        description:
          'Construccion de soluciones completas desde el frontend hasta la logica backend, listas para crecer.',
      },
    ],
  },
  contactSection: {
    subtitle: 'Hablemos de tu idea',
    description:
      'Si tenes una idea, una mejora para tu producto o queres sumar una solucion a medida, podemos conversarlo.',
    emailLabel: 'Email principal',
    emailHelpText:
      'Ideal para consultas, propuestas, colaboraciones o trabajos freelance.',
    emailButtonLabel: 'Enviar mensaje',
    whatsappButtonLabel: 'WhatsApp',
    profilesLabel: 'Perfiles',
    githubLabel: 'GitHub',
    githubCta: 'Ver perfil',
    linkedinLabel: 'LinkedIn',
    linkedinCta: 'Conectar',
  },
  contactLinks: {
    email: 'pablo616141@gmail.com',
    whatsapp:
      'https://wa.me/5492235238756?text=Hola%20Agustin%2C%20quiero%20hablar%20sobre%20un%20proyecto.',
    instagram: 'https://instagram.com/agustin.meza_',
    linkedin: 'https://www.linkedin.com/in/pablo-agustin-meza-6981352a6/',
    github: 'https://github.com/Agus616141',
  },
  footer: {
    name: 'Agustin Meza',
    summary:
      'Portfolio profesional orientado a desarrollo frontend, interfaces cuidadas y soluciones web con criterio tecnico.',
    copyrightText:
      'Presencia digital, proyectos y canales de contacto.',
    availabilityText:
      'Disponible para colaboraciones, mejoras de producto y nuevas oportunidades.',
  },
} as const
