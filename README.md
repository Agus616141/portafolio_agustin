# Portafolio — Agustin Meza · v1.2.0

Portfolio profesional de desarrollo backend. Construido con React 19, Vite 8, TypeScript y Tailwind CSS 4.

**Repo:** [github.com/Agus616141/portafolio_agustin](https://github.com/Agus616141/portafolio_agustin)

---

## Stack

| Tecnología | Versión | Rol |
|---|---|---|
| React | 19 | UI y componentes |
| Vite | 8 | Bundler y dev server |
| TypeScript | 6 | Tipado estático |
| Tailwind CSS | 4 | Estilos utility-first |
| Framer Motion | 12 | Animaciones (code-split async) |
| react-icons | 5 | Iconografía (Lucide) |
| sharp | 0.34 | Conversión de imágenes a WebP (devDep) |

---

## Inicio rápido

```bash
npm install
npm run dev       # dev server en http://localhost:5173
npm run build     # build de producción → dist/
npm run preview   # previsualizar el build
```

### Convertir imágenes a WebP (cuando reemplaces las PNGs)

```bash
node scripts/convert-to-webp.mjs
```

---

## Estructura del proyecto

```
public/
  cv/
    Agustin_CV.pdf              # CV descargable
  images/
    hero-dark.webp              # Imagen Hero (modo oscuro)
    hero-light.webp             # Imagen Hero (modo claro)
    about-dark.webp             # Imagen About (modo oscuro)
    about-light.webp            # Imagen About (modo claro)
    project-api-notas-dark.svg
    project-api-notas-light.svg
    project-ecommerce-dark.svg
    project-ecommerce-light.svg
    project-haskhelp-dark.svg
    project-haskhelp-light.svg

scripts/
  convert-to-webp.mjs          # Convierte PNG → WebP con sharp

src/
  components/
    layout/
      Navbar.tsx                # Navegación fija con scroll activo
      Footer.tsx                # Pie de página con links sociales
    sections/
      HeroSection.tsx           # Sección principal con roles rotativos
      AboutSection.tsx          # Presentación y habilidades técnicas
      ProjectsSection.tsx       # Tarjetas de proyectos con imágenes dark/light
      ServicesSection.tsx       # Cards de servicios ofrecidos
      ContactSection.tsx        # Email, WhatsApp, LinkedIn, GitHub
    ui/
      Badge.tsx                 # Chip de tecnología
      Button.tsx                # Botón reutilizable
      HeroVisual.tsx            # Visual decorativa Hero (3D tilt, float, dots)
      SectionShell.tsx          # Contenedor base de cada sección
      SectionFrame.tsx          # Frame con imagen y contenido lado a lado
      SectionReveal.tsx         # Animación de entrada por scroll (desactivada en mobile)
      CompactSectionShell.tsx
      CenteredSectionHeader.tsx
      SectionImageFrame.tsx
      ThemeToggle.tsx           # Botón dark/light mode
      portfolioStyles.ts        # Clases de animación reutilizables

  data/
    editableContent.ts          # Todo el contenido editable del sitio
    site.ts                     # Configuración estructural (proyectos, nav, etc.)
    theme.ts                    # Config del sistema de temas dark/light

  hooks/
    useTheme.ts                 # Leer y cambiar tema (dark/light)
    useDocumentTheme.ts         # Escucha cambios de tema en el DOM
    useIsMobile.ts              # Detecta dispositivos touch/coarse-pointer
    useActiveSection.ts         # Detecta sección visible al hacer scroll
    useHashSectionScroll.ts     # Navegación suave por hash (#section)
    useRotatingText.ts          # Rotación de roles en el Hero

  lib/
    cn.ts                       # Utilidad clsx para clases condicionales
    motionFeatures.ts           # Re-export de domAnimation (carga async con LazyMotion)

  styles/
    global.css                  # Variables CSS, fuentes, estilos base y media queries mobile

  main.tsx                      # Entry point
  App.tsx                       # Composición principal + LazyMotion provider
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

Configuración estructural: títulos de secciones, visual de tarjetas (gradientes dark/light, accentClassName), navegación.

---

## Imágenes: soporte dark / light

Cada imagen del sitio tiene versión oscura y clara. El cambio se anima con Framer Motion (fade suave).

| Sección | Dark | Light |
|---|---|---|
| Hero | `hero-dark.webp` | `hero-light.webp` |
| About | `about-dark.webp` | `about-light.webp` |
| API de Notas | `project-api-notas-dark.svg` | `project-api-notas-light.svg` |
| Ecommerce | `project-ecommerce-dark.svg` | `project-ecommerce-light.svg` |
| HaskHelp | `project-haskhelp-dark.svg` | `project-haskhelp-light.svg` |

Las imágenes PNG originales se mantienen como fuente. Al reemplazarlas, ejecutar `node scripts/convert-to-webp.mjs` para regenerar los WebP.

---

## Optimizaciones de rendimiento

### v1.2.0 — Mobile sin Framer Motion + CSS agresivo

**Framer Motion eliminado del árbol en mobile:**
- `HeroVisual`: dos componentes separados — `HeroVisualStatic` (HTML puro, cero `m.*`) y `HeroVisualAnimated` (desktop). El wrapper elige según `useIsMobile()`
- `ProjectVisual`: `<img>` directa en mobile, sin `AnimatePresence` ni `m.img`
- `App`: en mobile no se monta `LazyMotion` → el chunk `motionFeatures.js` nunca se descarga

**CSS mobile (`hover:none + pointer:coarse`):**

| Elemento | Antes | Después |
|---|---|---|
| `page-theme-dots` / `atmosphere` / `screen-bottom-shadow` | 3 capas fixed compuestas | `display:none` |
| Transiciones | 300 ms | `none` — taps instantáneos |
| `box-shadow` en todos los elementos | Multi-capa | `none` |
| `backdrop-filter` nav/botones | `blur(12-18px)` | `none` |
| `glow-icon-box` | Doble radial-gradient | Fondo sólido |
| `hero-visual-glow` | `blur-3xl` | `display:none` |

**Desktop:**
- `box-shadow` transition: `930ms → 380ms`
- Nav `backdrop-filter`: `18px → 12px`
- `hero-visual-glow`: `will-change: filter` pre-promueve la capa GPU

---

### v1.1.0 — Imágenes WebP + code splitting + lazy loading

**Imágenes WebP:**

| Imagen | PNG original | WebP | Ahorro |
|---|---|---|---|
| hero-dark | 932 KB | 51 KB | -94.6% |
| hero-light | 763 KB | 24 KB | -96.9% |
| about-dark | 286 KB | 30 KB | -89.5% |
| about-light | 254 KB | 27 KB | -89.3% |

**Code splitting de Framer Motion:**

| Chunk | Gzip | Cuándo carga |
|---|---|---|
| `index.js` (principal) | 95 KB | Inmediato |
| `motionFeatures.js` | 9 KB | Async, desktop only |

**Lazy loading:** imágenes de proyectos con `loading="lazy"` + `decoding="async"`

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

El tema se persiste en `localStorage` con la clave `portfolio-theme`. Por defecto: `dark`.

Configuración en `src/data/theme.ts`:
- Clave de storage: `portfolio-theme`
- Tema por defecto: `dark`
- Colores del `<meta name="theme-color">` por tema

---

## Deploy en Vercel

| Campo | Valor |
|---|---|
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Install command | `npm install` |

No hay variables de entorno obligatorias. Si se agregan en el futuro, documentarlas en `.env.example` y nunca subir archivos `.env`.

---

## Autor

**Agustin Meza** — Estudiante de Ingeniería en Sistemas, desarrollador backend.

- GitHub: [Agus616141](https://github.com/Agus616141)
- LinkedIn: [pablo-agustin-meza](https://www.linkedin.com/in/pablo-agustin-meza-6981352a6/)
- Email: pablo616141@gmail.com
