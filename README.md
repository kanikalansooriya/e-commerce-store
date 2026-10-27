# AURA Fashion Store Preview

A responsive women's fashion storefront built with Next.js App Router, React, TypeScript, and Tailwind CSS. The project includes category navigation, product search and filters, product details, a browser-persisted cart and wishlist, and demo checkout screens.

## Important: preview only

This is a storefront preview, not a production commerce system. The product catalog, prices, ratings, review counts, stock, and sale markers are sample data. Product and shipping amounts are seeded in USD, shown in LKR by default in the storefront, and can be switched to USD from the header. The checkout charges in USD.

Checkout uses Stripe Elements in **test mode** to securely collect card details only. Wallet methods such as Google Pay, Apple Pay, and Link are disabled. Card data is handled by Stripe and is never collected by this app. Checkout sends customer and delivery details to Stripe and validates product prices and quantities against the server catalog. A successful return is verified against Stripe, but this preview does not reserve inventory, persist orders, or send fulfillment notifications. Do not use a live Stripe key or accept real orders until persistent order/inventory storage, webhook-based payment verification, fulfillment/shipping, support forms, and real commercial policies are connected and tested. Account, contact, and newsletter forms remain previews and do not send or persist submissions.

### Configure Stripe test payments

Set these server-side environment variables (for example in a local `.env.local`; never expose or commit the secret key):

```env
STRIPE_SECRET_KEY=sk_test_your_stripe_test_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_test_publishable_key
```

Use matching Stripe test keys only. Restart the dev server after setting them. The checkout route rejects live secret keys. Stripe Elements handles card entry only.

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

### Publish a static preview on GitHub Pages

The `Deploy static preview to GitHub Pages` workflow publishes the storefront from the `main` branch. In the repository settings, open **Pages** and select **GitHub Actions** as the build and deployment source. Push this repository to GitHub to start the workflow; later pushes to `main` publish updates automatically.

The Pages build uses the repository path `/e-commerce-store`. If the GitHub repository is renamed, update `GITHUB_PAGES_BASE_PATH` in `.github/workflows/deploy-pages.yml` to match its new URL path.

GitHub Pages only hosts static files. Catalog, product, and category pages are prebuilt. Stripe payment creation and server-side payment verification are unavailable in this preview, so checkout is informational only. The live server-backed checkout requires a Next.js hosting platform and the Stripe test keys described above.

## Main routes

- `/` — home page
- `/shop` — searchable catalog with category, subcategory, brand, price, rating, availability, sale, new-arrival, and sorting filters; paginated at 12 products per page
- `/category/[slug]` — category landing pages
- `/product/[slug]` — product details
- `/cart`, `/wishlist` — browser-persisted shopping previews
- `/checkout` — Stripe test payment form when configured
- `/account`, `/about`, `/faq` — account and support previews

## Catalog and images

`src/lib/products.ts` is the storefront's current product source and category taxonomy. It contains a small fixed sample catalog; categories without supplied sample products will show an empty state instead of unrelated items. Verify product names, specifications, image rights, prices, availability, and any review or promotion data before using real inventory.

Product photography and editorial images use Unsplash URLs allowed by `next.config.ts`. Replace these with assets you have permission to use before a commercial launch.
