# Portafolio — Agustin Meza

Portfolio profesional de desarrollo backend. Construido con React 19, Vite 8, TypeScript y Tailwind CSS 4.

**Demo:** proximamente en deploy  
**Repo:** [github.com/Agus616141/portafolio_agustin](https://github.com/Agus616141/portafolio_agustin)

---

## Stack

| Tecnología | Version | Rol |
|---|---|---|
| React | 19 | UI y componentes |
| Vite | 8 | Bundler y dev server |
| TypeScript | 6 | Tipado estático |
| Tailwind CSS | 4 | Estilos utility-first |
| Framer Motion | 12 | Animaciones y transiciones |
| react-icons | 5 | Iconografía (Lucide) |

---

## Inicio rápido

```bash
npm install
npm run dev       # dev server en http://localhost:5173
npm run build     # build de producción → dist/
npm run preview   # previsualizar el build
```

---

## Estructura del proyecto

```
public/
  cv/
    Agustin_CV.pdf          # CV descargable
  images/
    hero-dark.png           # Imagen Hero (modo oscuro)
    hero-light.png          # Imagen Hero (modo claro)
    about-dark.png          # Imagen About (modo oscuro)
    about-light.png         # Imagen About (modo claro)
    project-api-notas-dark.svg
    project-api-notas-light.svg
    project-ecommerce-dark.svg
    project-ecommerce-light.svg
    project-haskhelp-dark.svg
    project-haskhelp-light.svg

src/
  components/
    layout/
      Navbar.tsx            # Navegación fija con scroll activo
      Footer.tsx            # Pie de página con links sociales
    sections/
      HeroSection.tsx       # Sección principal con roles rotativos
      AboutSection.tsx      # Presentación y habilidades técnicas
      ProjectsSection.tsx   # Tarjetas de proyectos con imágenes dark/light
      ServicesSection.tsx   # Cards de servicios ofrecidos
      ContactSection.tsx    # Email, WhatsApp, LinkedIn, GitHub
    ui/
      Badge.tsx             # Chip de tecnología
      Button.tsx            # Botón reutilizable
      HeroVisual.tsx        # Visual decorativa de la sección Hero
      SectionShell.tsx      # Contenedor base de cada sección
      SectionFrame.tsx      # Frame con imagen y contenido lado a lado
      CompactSectionShell.tsx
      CenteredSectionHeader.tsx
      SectionImageFrame.tsx
      SectionReveal.tsx     # Animación de entrada por scroll
      ThemeToggle.tsx       # Botón dark/light mode
      portfolioStyles.ts    # Clases de animación reutilizables

  data/
    editableContent.ts      # Todo el contenido editable del sitio
    site.ts                 # Configuración estructural (proyectos, nav, etc.)
    theme.ts                # Config del sistema de temas dark/light

  hooks/
    useTheme.ts             # Leer y cambiar tema (dark/light)
    useDocumentTheme.ts     # Escucha cambios de tema en el DOM
    useActiveSection.ts     # Detecta sección visible al hacer scroll
    useHashSectionScroll.ts # Navegación suave por hash (#section)
    useRotatingText.ts      # Rotación de roles en el Hero

  lib/
    cn.ts                   # Utilidad clsx para clases condicionales

  styles/
    global.css              # Variables CSS, fuentes y estilos base

  main.tsx                  # Entry point
  App.tsx                   # Composición principal de secciones
```

---

## Personalizar contenido

Todo el contenido visible del sitio está centralizado en dos archivos:

### `src/data/editableContent.ts`

Editar aquí para cambiar textos, links, proyectos e imágenes:

```ts
// Hero: nombre, roles rotativos, descripción, botones, imagen
hero: { name, roles, summary, imageSrc, imageSrcLight, ... }

// About: presentación, imagen, highlights de perfil
about: { summary, imageSrc, imageSrcLight, highlights, ... }

// Projects: tarjetas de proyectos (título, descripción, tags, link, imagen)
projects: [{ description, tags, href, ctaLabel, ctaType, image, imageLight, imageAlt }]

// Services: descripción de servicios ofrecidos
servicesSection: { description, ctaLabel, items }

// Contact: email, WhatsApp, redes sociales
contactLinks: { email, whatsapp, linkedin, github, instagram }

// Footer: nombre, resumen, copyright
footer: { name, summary, copyrightText }
```

### `src/data/site.ts`

Configuración estructural: títulos de secciones, visual de tarjetas (gradientes, modo claro/oscuro), navegación.

---

## Imágenes: soporte dark / light

Cada imagen del sitio tiene una versión para modo oscuro y una para modo claro. El cambio entre ambas es animado con Framer Motion.

| Sección | Dark | Light |
|---|---|---|
| Hero | `hero-dark.png` | `hero-light.png` |
| About | `about-dark.png` | `about-light.png` |
| API de Notas | `project-api-notas-dark.svg` | `project-api-notas-light.svg` |
| Ecommerce | `project-ecommerce-dark.svg` | `project-ecommerce-light.svg` |
| HaskHelp | `project-haskhelp-dark.svg` | `project-haskhelp-light.svg` |

Las imágenes de proyectos son SVGs ilustrados que representan visualmente cada proyecto.

---

## Secciones del portfolio

| Sección | ID | Descripción |
|---|---|---|
| Hero | `#hero` | Presentación principal con roles animados y CTA |
| Sobre mí | `#about` | Perfil, formación y habilidades técnicas |
| Proyectos | `#projects` | Tarjetas de proyectos con link a GitHub |
| Servicios | `#services` | Servicios de desarrollo backend ofrecidos |
| Contacto | `#contact` | Email, WhatsApp, LinkedIn y GitHub |

---

## Proyectos incluidos

| Proyecto | Repo | Stack |
|---|---|---|
| API de Notas | [API-Notas-Personales](https://github.com/Agus616141/API-Notas-Personales) | Node.js · Express · PostgreSQL · Zod · TypeScript |
| Ecommerce Fullstack | [ecommerce-tp](https://github.com/Agus616141/ecommerce-tp) | Next.js · Express · MongoDB · Handlebars |
| HaskHelp | [Sistema-de-Tickets-Helpdesk](https://github.com/Agus616141/Sistema-de-Tickets-Helpdesk) | TypeScript · Express · MySQL · JWT · bcrypt · Zod |

---

## Sistema de temas

El tema se persiste en `localStorage` con la clave `portfolio-theme`. El tema por defecto es `dark`.

Configuración en `src/data/theme.ts`:
- Clave de storage: `portfolio-theme`
- Tema por defecto: `dark`
- Colores del meta-tag por tema (para la barra del navegador)

---

## Deploy en Vercel

Configuración recomendada en Vercel:

| Campo | Valor |
|---|---|
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | `npm install` |

No hay variables de entorno obligatorias. Si se agregan en el futuro, documentarlas en `.env.example` y nunca subir archivos `.env`.

---

## Variables de entorno

No requeridas en la versión actual. Si se agregan:

```bash
# Copiar y completar
cp .env.example .env
```

---

## Autor

**Agustin Meza** — Estudiante de Ingeniería en Sistemas, desarrollador backend.

- GitHub: [Agus616141](https://github.com/Agus616141)
- LinkedIn: [pablo-agustin-meza](https://www.linkedin.com/in/pablo-agustin-meza-6981352a6/)
- Email: pablo616141@gmail.com

