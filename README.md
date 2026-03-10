# Portfolio

Portfolio personal construido con `Astro` y `Starlight`, orientado a presentar experiencia profesional en formato de documentación y case studies.

## Stack

- `Astro`
- `@astrojs/starlight`
- `Tailwind CSS`
- `astro-mermaid`
- `starlight-showcases`

## Desarrollo

```bash
pnpm install
pnpm dev
```

Servidor local habitual: [http://localhost:4321](http://localhost:4321)

Otros comandos útiles:

```bash
pnpm build
pnpm preview
pnpm astro -- --help
```

## Estructura principal

```text
.
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   │   └── docs/
│   ├── pages/
│   ├── styles/
│   └── content.config.ts
├── astro.config.mjs
└── package.json
```

## Dónde editar

- `src/content/docs/index.mdx`: portada del portfolio.
- `src/content/docs/professional-project/`: proyectos principales.
- `src/content/docs/instructor-experience/`: experiencias de docencia.
- `src/components/`: overrides y componentes personalizados.
- `src/styles/`: estilos globales y secciones visuales.
- `astro.config.mjs`: sidebar, enlaces sociales, favicon e integraciones.

## Notas

- El contenido se publica desde `src/content/docs` usando colecciones de Starlight.
- Las páginas de proyectos usan `MDX`, imágenes locales y, en algunos casos, diagramas Mermaid y showcases enriquecidos.
- La sección de `instructor-experience` existe en el repositorio, pero ahora mismo no está visible en la sidebar.
