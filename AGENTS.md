# AGENTS.md

## Cursor Cloud specific instructions

### Overview

Xscade is a **single Next.js 16 marketing website** (not a monorepo). No backend, database, or environment variables are required. The dev server runs on **port 3001**.

### Running the application

Standard commands are in `README.md` and `package.json`. Key scripts:

- `npm run dev` — starts dev server on port 3001
- `npm run build` — production build
- `npm start` — production server on port 3001

### Known issues

- **Lint is broken**: The `npm run lint` script runs bare `eslint` (v9), but the project only has a legacy `.eslintrc.json` config file. Next.js 16 also removed the `next lint` CLI command. Lint will fail until the ESLint config is migrated to flat config format (`eslint.config.mjs`).

### Notes

- No external services (databases, Redis, etc.) are needed.
- External assets (Unsplash images, Spline 3D scenes, Google Maps embed) load from the internet at runtime — the site renders fine without them, but those sections will show missing content.
- The `output: "standalone"` setting in `next.config.ts` is for Vercel deployment and does not affect local development.
