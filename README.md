# AURA Fashion Store Preview

A responsive women's fashion storefront built with Next.js App Router, React, TypeScript, and Tailwind CSS. The project includes category navigation, product search and filters, product details, a browser-persisted cart and wishlist, and demo checkout screens.

## Important: preview only

This is a frontend storefront preview, not a production commerce system. The product catalog, prices, ratings, review counts, stock, and sale markers are sample data. Product and shipping amounts are seeded in USD, shown in LKR by default using a live USD/LKR exchange rate, and can be switched to USD from the header. The latest rate is cached in the visitor's browser; if the rate service is unavailable, the storefront indicates when it is using a saved or estimated rate. Cart and wishlist data stay in the visitor's browser. Checkout only stores a temporary confirmation in session storage; it does not submit an order, reserve inventory, email the customer, or process a payment. Account, contact, and newsletter forms are previews and do not send or persist submissions.

Do not accept real orders until a trusted catalog/inventory backend, server-side order validation, authentication, payment provider, fulfillment/shipping, support forms, and real commercial policies are connected and tested. The visible sample shipping and return copy is not a live policy.

## Run locally

Use Node.js 20.9 or newer and npm:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validate and run a production preview

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

The app can be deployed as a Next.js Node.js application or on a compatible Next.js hosting platform. Set the build command to `npm run build` and the start command to `npm run start` when using a Node.js host. A successful deployment only publishes the preview storefront; it does not enable live commerce.

## Main routes

- `/` — home page
- `/shop` — searchable catalog with category, subcategory, brand, price, rating, availability, sale, new-arrival, and sorting filters; paginated at 12 products per page
- `/category/[slug]` — category landing pages
- `/product/[slug]` — product details
- `/cart`, `/wishlist`, `/checkout` — browser-only shopping previews
- `/account`, `/about`, `/faq` — account and support previews

## Catalog and images

`src/lib/products.ts` is the storefront's current product source and category taxonomy. It contains a small fixed sample catalog; categories without supplied sample products will show an empty state instead of unrelated items. Verify product names, specifications, image rights, prices, availability, and any review or promotion data before using real inventory.

Product photography and editorial images use Unsplash URLs allowed by `next.config.ts`. Replace these with assets you have permission to use before a commercial launch.
