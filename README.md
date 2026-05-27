# Portfolio Agustin

Portfolio profesional construido con React, Vite, TypeScript y Tailwind CSS.

Este repositorio guarda la base visual y tecnica del portfolio. El contenido final, imagenes definitivas y textos profesionales se van a ajustar en una segunda etapa antes del deploy final.

## Stack

- React 19
- Vite 8
- TypeScript 6
- Tailwind CSS 4
- Framer Motion

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estructura

```txt
public/
  cv/
  images/
src/
  components/
    layout/
    sections/
    ui/
  data/
  hooks/
  lib/
  styles/
```

## Contenido editable

Los textos, enlaces, tecnologias, servicios, proyectos e imagenes principales estan centralizados en:

- `src/data/editableContent.ts`
- `src/data/site.ts`
- `src/data/theme.ts`

## Deploy en Vercel

Configuracion recomendada:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

No hay variables de entorno obligatorias en esta etapa. Si mas adelante se agregan, usar `.env.example` como referencia y no subir archivos `.env`.
