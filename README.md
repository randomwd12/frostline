# Breezely ❄️

A UK e-commerce store selling portable air conditioners, fans, evaporative
coolers and dehumidifiers — built and ready for the next British summer.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript** and
**Tailwind CSS v4**.

## Getting started

```bash
npm run dev      # start the dev server (http://localhost:3000)
npm run build    # production build
npm start        # serve the production build
```

## What's included

- **Homepage** — hero, category grid, bestsellers, value props, waitlist capture
- **Shop** (`/shop`) — all products with client-side category filtering
- **Category pages** (`/shop/category/[slug]`)
- **Product pages** (`/shop/[slug]`) — gallery tile, specs, features, related items
- **Cart** — slide-out drawer + full cart page, persisted to `localStorage`
- **Checkout** (`/checkout`) — Stripe Checkout integration (see below)
- Content pages: About, Help/FAQ, Delivery & Returns, Privacy, Terms

## Editing the catalogue

All products and categories live in **`src/lib/products.ts`**. Each product has
a price (GBP), specs, features, rating, an SVG illustration (`art`), an optional
real-photo `image` URL, and a `soldOut` flag. Edit that one file to add, remove,
reprice, restock or hide products — every page updates automatically.

## Payments (Stripe)

Checkout is already wired to **Stripe Checkout**:

- `src/app/api/checkout/route.ts` builds a payment session from the server-side
  catalogue (prices can't be tampered with; sold-out items are skipped).
- The checkout page redirects to Stripe's hosted page for address + card entry.
- `/checkout/success` clears the basket after a successful payment.

To enable it, create `.env.local` (see `.env.example`):

```bash
STRIPE_SECRET_KEY=sk_test_...        # from dashboard.stripe.com/apikeys
NEXT_PUBLIC_BASE_URL=                 # leave blank locally; set to your domain in prod
```

Use **test keys** while developing — card `4242 4242 4242 4242`, any future
expiry/CVC — then swap to live keys when ready.

## Deploying (Vercel)

This repo is on GitHub, so deploying is a few clicks:

1. Go to **https://vercel.com/new** and import the GitHub repo.
2. Framework preset auto-detects **Next.js** — no config needed.
3. Add the environment variables above (`STRIPE_SECRET_KEY`, and
   `NEXT_PUBLIC_BASE_URL` set to your Vercel/production URL).
4. Deploy. Every push to `main` then auto-deploys.

## Other go-live steps

- **Waitlist** — `src/components/WaitlistForm.tsx` stores emails in
  `localStorage`. Point it at your email/CRM provider (Mailchimp, Klaviyo, etc.).
- **Real product images** — add an `image` URL to any product in
  `src/lib/products.ts` and it replaces the SVG illustration automatically
  (allowed image hosts are configured in `next.config.ts`).
