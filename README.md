# FloodWatch

FloodWatch is a Vite + React application that lets users upload or capture images of a location and run instant flood-risk analysis. The UI is built with Tailwind CSS and shadcn/ui components for a clean, responsive experience.

## Stack

- React 18 with Vite
- Tailwind CSS + shadcn/ui
- Lucide icons
- TanStack Query for async state

## Getting Started

```bash
git clone <repo-url>
cd flood
npm install
npm run dev
```

Navigate to `http://localhost:5173` to use the app locally.

## Available Scripts

- `npm run dev` – start the Vite dev server
- `npm run build` – build the production bundle
- `npm run preview` – preview the production build
- `npm run lint` – run ESLint

## Environment

Create a `.env` file if you need to supply API endpoints or keys. Vite exposes env vars prefixed with `VITE_`.

## Deploying

1. Run `npm run build`.
2. Deploy the contents of `dist/` to your preferred static host (Netlify, Vercel, Cloudflare Pages, etc.).

## Contributing

Feel free to open issues or submit pull requests for any improvements, including UI enhancements, new analysis features, or bug fixes.
