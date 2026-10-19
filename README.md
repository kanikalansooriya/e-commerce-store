# goodform.

A responsive storefront built with Next.js App Router, React, TypeScript, and Tailwind CSS. It includes a home page, searchable shop, product details, a persistent cart, demo checkout, order confirmation, account placeholder, and About/contact page.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production checks:

```bash
npm run lint
npm run build
npm start
```

## Project structure

```text
src/
	app/                  App Router pages and global styles
		about/
		account/
		cart/
		checkout/
		product/[slug]/
		shop/
		success/[orderId]/
	components/           Shared navigation, cards, forms, and purchase controls
	context/              Cart state and localStorage persistence
	data/products.json    Mock catalog (16 items across 4 categories)
	lib/products.ts       Product type, lookup, category, and price helpers
```

## Replace the mock catalog

The sample catalog lives in `src/data/products.json`. Each record has stable `id` and `slug` values, category, price, image URLs, rating, and display flags. `src/lib/products.ts` is the UI-facing data boundary; keep its exported `Product`, `products`, `categories`, `getProduct`, and `getRelatedProducts` contract while replacing the JSON import with database or API queries.

For a backend, fetch catalog results in Server Components such as `app/shop/page.tsx` and `app/product/[slug]/page.tsx`, then pass typed results to the existing client components. Move cart persistence and order submission behind server endpoints before taking real orders. Checkout is intentionally a demo: it stores confirmation details in session storage, does not process card payments, and should be connected to a payment provider and server-side order validation before production use.

## Images

Product photography uses Unsplash image URLs configured in `next.config.ts`. Replace the URLs in the JSON with your own optimized asset URLs or storage CDN when connecting a catalog backend.
