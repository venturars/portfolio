# Portfolio

Personal portfolio built with `Astro` and `Starlight`, designed to present professional experience in a documentation and case study format.

## Stack

- `Astro`
- `@astrojs/starlight`
- `Tailwind CSS`
- `astro-mermaid`
- `starlight-showcases`

## Development

```bash
pnpm install
pnpm dev
```

Local server: [http://localhost:4321](http://localhost:4321)

Other useful commands:

```bash
pnpm build
pnpm preview
pnpm astro -- --help
```

## Main structure

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

## Where to edit

- `src/content/docs/index.mdx`: portfolio homepage.
- `src/content/docs/professional-project/`: main project case studies.
- `src/content/docs/instructor-experience/`: teaching experience pages.
- `src/components/`: custom components and overrides.
- `src/styles/`: global styles and visual section styles.
- `astro.config.mjs`: sidebar, social links, favicon, and integrations.

## Notes

- Content is published from `src/content/docs` using Starlight collections.
- Project pages use `MDX`, local images, and in some cases Mermaid diagrams and rich showcases.
- The `instructor-experience` section exists in the repository, but it is not currently visible in the sidebar.
