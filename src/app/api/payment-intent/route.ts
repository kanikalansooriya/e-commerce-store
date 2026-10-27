import { products } from "@/lib/products";

type PaymentIntentRequest = {
  items?: { slug?: unknown; quantity?: unknown }[];
  delivery?: unknown;
  customer?: {
    name?: unknown;
    email?: unknown;
    phone?: unknown;
    address?: unknown;
    city?: unknown;
    postal?: unknown;
    country?: unknown;
  };
};

function isNonEmptyString(value: unknown, maxLength: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.trim().length <= maxLength;
}

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey || !secretKey.startsWith("sk_test_")) {
    return Response.json({ error: "Secure test payments are not configured. Add a Stripe test secret key to .env.local." }, { status: 503 });
  }

  let body: PaymentIntentRequest;
  try {
    body = await request.json() as PaymentIntentRequest;
  } catch {
    return Response.json({ error: "Checkout details must be valid JSON." }, { status: 400 });
  }

  const customer = body.customer;
  if (
    !customer ||
    !isNonEmptyString(customer.name, 120) ||
    !isNonEmptyString(customer.email, 254) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email) ||
    !isNonEmptyString(customer.phone, 40) ||
    !isNonEmptyString(customer.address, 200) ||
    !isNonEmptyString(customer.city, 100) ||
    !isNonEmptyString(customer.postal, 30) ||
    !isNonEmptyString(customer.country, 2) ||
    !/^[A-Za-z]{2}$/.test(customer.country)
  ) {
    return Response.json({ error: "Enter valid contact and delivery details, including a two-letter country code." }, { status: 400 });
  }
  if (!Array.isArray(body.items) || body.items.length < 1 || body.items.length > 50) {
    return Response.json({ error: "Your bag is empty or contains too many different products." }, { status: 400 });
  }
  if (body.delivery !== "standard" && body.delivery !== "express") {
    return Response.json({ error: "Choose a valid delivery method." }, { status: 400 });
  }

  const lineItems = [];
  for (const item of body.items) {
    if (typeof item.slug !== "string" || typeof item.quantity !== "number" || !Number.isInteger(item.quantity) || item.quantity < 1) {
      return Response.json({ error: "One or more bag items are invalid." }, { status: 400 });
    }

    const product = products.find((entry) => entry.slug === item.slug);
    if (!product || item.quantity > product.stock) {
      return Response.json({ error: "A product in your bag is unavailable in the requested quantity. Please review your bag." }, { status: 400 });
    }
    lineItems.push({ product, quantity: item.quantity });
  }

  const subtotal = lineItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = body.delivery === "express" ? 15 : subtotal >= 100 ? 0 : 8;
  const totalInCents = Math.round((subtotal + shipping) * 100);
  if (!Number.isSafeInteger(totalInCents) || totalInCents < 50 || totalInCents > 99_999_999) {
    return Response.json({ error: "The order total is outside Stripe's supported range." }, { status: 400 });
  }

  const orderReference = `ARX-${crypto.randomUUID()}`;
  const form = new URLSearchParams();
  form.set("amount", String(totalInCents));
  form.set("currency", "usd");
  form.set("payment_method_types[0]", "card");
  form.set("receipt_email", customer.email.trim());
  form.set("description", `AROLAX order ${orderReference}`);
  form.set("shipping[name]", customer.name.trim());
  form.set("shipping[phone]", customer.phone.trim());
  form.set("shipping[address][line1]", customer.address.trim());
  form.set("shipping[address][city]", customer.city.trim());
  form.set("shipping[address][postal_code]", customer.postal.trim());
  form.set("shipping[address][country]", customer.country.trim().toUpperCase());
  form.set("metadata[order_reference]", orderReference);
  form.set("metadata[delivery]", body.delivery);

  try {
    const response = await fetch("https://api.stripe.com/v1/payment_intents", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: form,
      cache: "no-store",
    });
    const data: unknown = await response.json();

    if (!response.ok) {
      const message =
        typeof data === "object" && data !== null && "error" in data &&
        typeof data.error === "object" && data.error !== null && "message" in data.error &&
        typeof data.error.message === "string"
          ? data.error.message
          : `Stripe returned HTTP ${response.status}.`;
      console.error("Could not create Stripe PaymentIntent.", message);
      return Response.json({ error: "We couldn't start secure payment. Check your Stripe test configuration and try again." }, { status: 502 });
    }

    if (
      typeof data !== "object" || data === null ||
      !("client_secret" in data) || typeof data.client_secret !== "string" ||
      !("amount" in data) || data.amount !== totalInCents ||
      !("currency" in data) || data.currency !== "usd"
    ) {
      console.error("Stripe returned an invalid PaymentIntent.");
      return Response.json({ error: "Stripe returned an invalid payment response. Please try again." }, { status: 502 });
    }

    return Response.json({
      clientSecret: data.client_secret,
      orderReference,
    });
  } catch (error) {
    console.error("Could not reach Stripe to create a PaymentIntent.", error);
    return Response.json({ error: "We couldn't reach secure payment. Please try again." }, { status: 502 });
  }
}
