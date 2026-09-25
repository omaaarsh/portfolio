# Portfolio — Omar Sherif Elghamry

Personal portfolio of **Omar Sherif Elghamry**, Backend & AI Engineer.
Built with **React + Vite + TypeScript** and **framer-motion**, deployed on GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview
```

## Deploy

Pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`,
which builds and publishes to GitHub Pages.

> `vite.config.ts` uses `base: './'` so the site works both on a project page
> (`/portfolio/`) and on a custom domain at the root.
