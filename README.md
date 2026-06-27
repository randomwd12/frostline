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
- **Checkout** (`/checkout`) — delivery form + order summary (payment is a
  placeholder; see below)
- Content pages: About, Help/FAQ, Delivery & Returns, Privacy, Terms

## Editing the catalogue

All products and categories live in **`src/lib/products.ts`**. Each product has
a price (GBP), specs, features, rating and a gradient/emoji "image" tile. Edit
that one file to add, remove or reprice products — every page updates
automatically.

## Going live — next steps

This ships as a fully working catalogue + cart. To take real money:

1. **Payments** — wire Stripe (or similar) into `src/app/checkout/page.tsx`
   where `placeOrder` currently just confirms the order. Add a checkout API
   route and your keys via environment variables.
2. **Waitlist** — `src/components/WaitlistForm.tsx` currently stores emails in
   `localStorage`. Point it at your email/CRM provider (e.g. Mailchimp, Klaviyo).
3. **Real product images** — swap the emoji tiles in `src/components/ProductImage.tsx`
   for photos (add an `image` field to each product and use `next/image`).
4. **Branding** — the name "Breezely" lives in the Navbar, Footer, layout
   metadata and content pages; rename there if needed.
