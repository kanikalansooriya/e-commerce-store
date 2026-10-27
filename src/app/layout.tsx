import type { Metadata } from "next";
import { cookies } from "next/headers";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Script from "next/script";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CartProvider } from "@/context/cart-context";
import { CurrencyProvider } from "@/context/currency-context";
import { ThemeProvider } from "@/context/theme-context";
import { WishlistProvider } from "@/context/wishlist-context";
import { BackToTop, RouteTransition } from "@/components/motion";
import "./globals.css";
import "./storefront.css";
import "./commerce.css";
import "./design-system.css";

const currencyCookieName = "aura-currency";

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const appearanceBootstrap = `(()=>{try{const saved=JSON.parse(localStorage.getItem("arolax-appearance")||localStorage.getItem("goodform-appearance")||"null")||{};const root=document.documentElement;const options={colorMode:["light","dark","system"],accent:["blue","green","purple","orange","rose"],fontSize:["small","medium","large"],corners:["sharp","rounded"],motion:["on","reduced"],density:["comfortable","compact"]};const defaults={colorMode:"light",accent:"rose",fontSize:"medium",corners:"rounded",motion:"on",density:"comfortable"};for(const key in defaults){root.dataset[key=== "colorMode"?"colorMode":key]=options[key].includes(saved[key])?saved[key]:defaults[key]}}catch{}})();`;

export const metadata: Metadata = {
  title: "AROLAX | Women's Fashion & Modern Collections",
  description: "Discover stunning maxi dresses, tops, sweatshirts, blazers, and signature collections crafted for timeless elegance.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const savedCurrency = process.env.GITHUB_PAGES === "true"
    ? undefined
    : (await cookies()).get(currencyCookieName)?.value;
  const initialCurrency = savedCurrency === "USD" ? "USD" : "LKR";

  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <Script id="appearance-bootstrap" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: appearanceBootstrap }} />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <CurrencyProvider initialCurrency={initialCurrency}>
            <WishlistProvider>
              <CartProvider>
                <SiteHeader />
                <main className="site-main"><RouteTransition>{children}</RouteTransition></main>
                <SiteFooter />
                <BackToTop />
              </CartProvider>
            </WishlistProvider>
          </CurrencyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
