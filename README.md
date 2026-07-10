# Prayaan Capital — Website

Marketing and customer-information website for **Prayaan Capital Private Limited**, an RBI-registered NBFC offering secured business loans to India's small and medium enterprises.

**Live:** https://www.prayaancapital.com

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- framer-motion

## Development

```sh
npm install
npm run dev        # dev server
npx tsc --noEmit   # typecheck
npm run build      # production build (dist/)
```

## Deployment

Pushes to `main` auto-deploy via Vercel.

Regulatory documents (policies, annual returns, customer-education PDFs) are self-hosted under `public/assets/images/downloads/`.
