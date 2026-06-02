// Edita este archivo para cambiar textos, enlaces e imagenes del portfolio.
// Los titulos principales de las secciones se mantienen en site.ts.

export const editableContent = {
  // Hero: texto principal, CTA, redes e imagen destacada.
  hero: {
    name: 'Agustin',
    roles: [
      'Backend Developer',
      'API Developer',
      'Node.js Developer',
      'Express Developer',
      'JavaScript Developer',
      'Web Developer',
      'Fullstack Developer',
    ],
    summary:
      'Desarrollo soluciones backend enfocadas en arquitectura, APIs, bases de datos, autenticacion y logica de negocio escalable.',
    socialLabel: 'Seguime',
    primaryButtonLabel: 'Contactame',
    secondaryButtonLabel: 'Descargar CV',
    secondaryButtonHref: '/cv/Agustin_CV.pdf',
    imageSrc: '/images/hero-dark.webp',
    imageSrcLight: '/images/hero-light.webp',
    imageAlt: 'Arquitectura backend abstracta con conexiones de datos',
  },

  // About: presentacion breve, imagen y bloques de perfil.
  about: {
    name: 'Agustin',
    summary:
      'Estudiante de Ingenieria en Sistemas y desarrollador backend. Me interesa la arquitectura de software, base de datos y el desarrollo de soluciones mantenibles orientadas a proyectos reales.',
    imageSrc: '/images/about-dark.webp',
    imageSrcLight: '/images/about-light.webp',
    imageAlt: 'Desarrollador trabajando en su setup',
    highlights: [
      {
        place: 'Ingenieria en Sist. & Backend',
        detail: 'Cursando Ingenieria en Sistemas. Enfoque en arquitectura de software, desarrollo backend y manejo de base de datos.',
        period: 'En formacion continua',
      },
      {
        place: 'Proyectos personales y practicas tecnicas',
        detail: 'APIs REST, autenticacion, bases de datos y logica backend en proyectos academicos y personales.',
        period: 'Proyectos activos',
      },
    ],
    skillsTitle: 'Habilidades Tecnicas',
  },

  // Projects: texto general de la seccion.
  projectsSection: {
    description: 'Proyectos desarrollados aplicando logica backend, APIs REST y manejo de bases de datos.',
  },

  // Projects list: tarjetas, links y miniaturas.
  projects: [
    {
      description:
        'API REST para gestion de notas personales con operaciones CRUD, persistencia de datos y autenticacion basica',
      tags: ['Node.js', 'Express', 'SQL/PostgreSQL', 'Zod', 'React', 'TypeScript'],
      href: 'https://github.com/Agus616141/API-Notas-Personales',
      ctaLabel: 'Ver Proyecto',
      ctaType: 'github',
      image: '/images/project-api-notas-dark.svg',
      imageLight: '/images/project-api-notas-light.svg',
      imageAlt: 'Vista conceptual del proyecto API de Notas',
    },
    {
      description:
        'Aplicacion desarrollada como proyecto final, con autenticacion, manejo de productos, base de datos y logica backend.',
      tags: ['Next.js', 'Express', 'MongoDB', 'Handlebars','APIs REST'],
      href: 'https://github.com/Agus616141/ecommerce-tp',
      ctaLabel: 'Ver Proyecto',
      ctaType: 'github',
      image: '/images/project-ecommerce-dark.svg',
      imageLight: '/images/project-ecommerce-light.svg',
      imageAlt: 'Vista conceptual del proyecto Ecommerce Fullstack',
    },
    {
      description:
        'Sistema orientado a organizacion y gestion de informacion utilizando logica backend y almacenamiento en base de datos.',
      tags: ['TypeScript', 'Express', 'MySQL', 'REST APIs', 'JWT', 'bcrypt', 'Zod'],
      href: 'https://github.com/Agus616141/Sistema-de-Tickets-Helpdesk',
      ctaLabel: 'Ver Proyecto',
      ctaType: 'github',
      image: '/images/project-haskhelp-dark.svg',
      imageLight: '/images/project-haskhelp-light.svg',
      imageAlt: 'Vista conceptual del proyecto HaskHelp',
    },
  ],

  // Services: texto general, CTA y descripcion de cards.
  servicesSection: {
    description: 'Soluciones backend orientadas a calidad, mantenibilidad y rendimiento.',
    ctaLabel: 'Contratame',
    ctaHref: '#contact',
    items: [
      {
        description:
          'Desarrollo de APIs REST, autenticacion, manejo de base de datos y logica de negocio escalable.',
      },
      {
        description:
          'Diseño de sistemas backend mantenibles utilizando buenas practicas, validaciones y estructuras escalables.',
      },
      {
        description:
          'Modelo y manejo de datos con SQL y MongoDB para aplicaciones modernas y eficientes.',
      },
    ],
  },

  // Contact: textos de cierre y llamadas a la accion.
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

  // Contact links: cambia aqui mail, WhatsApp y perfiles.
  contactLinks: {
    email: 'pablo616141@gmail.com',
    whatsapp:
      'https://wa.me/5492235238756?text=Hola%20Agustin%2C%20quiero%20hablar%20sobre%20un%20proyecto.',
    instagram: 'https://instagram.com/agustin.meza_',
    linkedin: 'https://www.linkedin.com/in/pablo-agustin-meza-6981352a6/',
    github: 'https://github.com/Agus616141',
  },

  // Footer: resumen y texto final del sitio.
  footer: {
    name: 'Agustin Meza',
    summary:
      'Portfolio profesional orientado a desarrollo backend, APIs REST y soluciones tecnicas escalables.',
    copyrightText:
      'Presencia digital, proyectos y canales de contacto.',
    availabilityText:
      'Disponible para colaboraciones, mejoras de producto y nuevas oportunidades.',
  },
} as const
