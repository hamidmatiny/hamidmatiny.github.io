# hamidmatiny.github.io

Personal portfolio for **Mohammadreza ("Hamid") Matiny** — AI Infrastructure & MLOps Engineer.

**Live:** [https://hamidmatiny.github.io](https://hamidmatiny.github.io)

## Stack

- [Astro](https://astro.build) static site (minimal client JS)
- Self-hosted variable fonts (Newsreader + Public Sans + JetBrains Mono)
- Build-time GitHub contribution fetch + text-based OG image (`scripts/`)
- GitHub Actions → GitHub Pages

No raster images, photography, or project screenshots — typography, layout, motion, and inline SVG only.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

`prebuild` generates `public/og.png` and `src/data/contributions.json`.

## Deploy

Pushes to `main` run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

In the repo settings, set **Pages → Source** to **GitHub Actions** (not Deploy from a branch / Jekyll).

## Contact

- Email: [hamidmatiny@gmail.com](mailto:hamidmatiny@gmail.com)
- LinkedIn: [mohammadreza-matiny](https://www.linkedin.com/in/mohammadreza-matiny-46812121a)
- GitHub: [hamidmatiny](https://github.com/hamidmatiny)
