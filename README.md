# Triozy Web

A Next.js App Router landing page for Triozy, built with React 19, Tailwind CSS v4, and interactive client-side UI powered by Framer Motion.

## Project Structure

```text
triozy_web/
├── .vscode/
│   └── settings.json
├── app/
│   ├── [city]/
│   │   └── [locality]/
│   │       └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── privacy/
│   │   └── page.tsx
│   ├── terms/
│   │   └── page.tsx
│   ├── apple-icon.png
│   ├── globals.css
│   ├── HomeClient.tsx
│   ├── icon.png
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── BlogLayout.tsx
│   ├── CTASection.tsx
│   ├── FAQSection.tsx
│   ├── GlobalHeader.tsx
│   ├── LocalityPage.tsx
│   ├── RelatedArticles.tsx
│   └── TOC.tsx
├── content/
│   ├── blog/
│   │   ├── best-areas-to-live-in-indore.ts
│   │   ├── best-tiffin-services-in-indore.ts
│   │   ├── buy-and-sell-used-furniture-in-indore.ts
│   │   ├── common-rental-scams-in-indore.ts
│   │   ├── cost-of-living-in-indore.ts
│   │   ├── how-to-find-broker-free-pgs-in-indore.ts
│   │   ├── how-to-find-flatmates-in-indore.ts
│   │   ├── how-to-find-maids-in-indore.ts
│   │   ├── index.ts
│   │   ├── safe-areas-for-girls-in-indore.ts
│   │   ├── student-housing-guide-indore.ts
│   │   └── types.ts
│   └── locality/
│       ├── bhawarkuan.ts
│       ├── index.ts
│       ├── scheme-54.ts
│       ├── super-corridor.ts
│       ├── types.ts
│       └── vijay-nagar.ts
├── public/
│   ├── Banner.png
│   ├── Main_SS.png
│   ├── SS_2.png
│   ├── SS_3.png
│   ├── SS_4.png
│   ├── SS_5.png
│   ├── SS_6.png
│   ├── SS_7.png
│   ├── playstore_icon.png
│   └── triozy_logo.png
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
└── tsconfig.tsbuildinfo
```

## Key Features

- Next.js App Router with server and client components
- Global `metadata` configuration and Open Graph / Twitter metadata
- Client-side animations using `framer-motion`
- Sticky header with scroll hide/show behavior
- `next/image` optimization for local static images
- Tailwind CSS v4 styling and responsive design
- Structured JSON-LD schema markup injected on the homepage
- Local landing pages and blog content for Indore-focused services

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` — Start the Next.js development server
- `npm run build` — Create a production build
- `npm run start` — Start the production server after build
- `npm run lint` — Run ESLint

## Important Files

- `app/layout.tsx` — Application root layout, fonts, `metadata`, and global page structure
- `app/page.tsx` — Homepage server component wrapper with page-level metadata
- `app/HomeClient.tsx` — Interactive homepage content, hero section, FAQ, and structured data
- `app/components/GlobalHeader.tsx` — Persistent sticky navigation with scroll-aware behavior
- `app/blog/.../page.tsx` — Blog landing pages for local content and SEO-friendly topics
- `next.config.ts` — Configures remote image patterns for `images.unsplash.com`
- `public/` — Static assets used by the homepage and metadata images

## Notes

- `app/layout.tsx` and `app/page.tsx` both configure `metadataBase` for correct Open Graph and canonical URLs.
- The header behavior is implemented entirely in `app/components/GlobalHeader.tsx` using client-side scroll state.
- The homepage injects SEO-friendly JSON-LD schema with organization, business, FAQ, and app metadata.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router](https://nextjs.org/docs/app)
- [Next.js Image Component](https://nextjs.org/docs/app/api-reference/components/image)
- [Next.js Metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)

## Deploy

This project can be deployed on Vercel or any hosting platform that supports Next.js.

For Vercel deployment, follow the official guide:

- https://nextjs.org/docs/app/building-your-application/deploying
