import Link from "next/link";
import { Check, PackageCheck } from "lucide-react";
import { ScrollReveal } from "@/components/motion";
import { ClearCartOnPayment } from "@/components/clear-cart-on-payment";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ orderId: "stripe" }];
}

type SuccessPageProps = {
  params: Promise<{ orderId: string }>;
  searchParams: Promise<{ payment_intent?: string; order_reference?: string }>;
};

export default async function SuccessPage({ params, searchParams }: SuccessPageProps) {
  const { orderId } = await params;
  if (process.env.GITHUB_PAGES === "true") {
    return (
      <ScrollReveal className="page-shell success-shell">
        <span className="eyebrow">STATIC STORE PREVIEW</span>
        <h1>Checkout is unavailable here.</h1>
        <p className="success-copy">GitHub Pages can host this storefront preview, but it cannot run the server required to verify payments.</p>
        <div className="success-actions">
          <Link className="button-primary" href="/shop">Continue Shopping</Link>
          <Link className="text-link" href="/">Back to Home <span aria-hidden="true">↗</span></Link>
        </div>
      </ScrollReveal>
    );
  }

  if (orderId === "stripe") {
    const { payment_intent: paymentIntentId, order_reference: orderReference } = await searchParams;
    return <StripePaymentResult paymentIntentId={paymentIntentId} orderReference={orderReference} />;
  }

  return (
    <ScrollReveal className="page-shell success-shell">
      <div className="success-mark"><Check size={30} /></div>
      <span className="eyebrow">ORDER CONFIRMED</span>
      <h1>Thank You for Your Order.</h1>
      <p className="success-copy">We are preparing your handcrafted AROLAX pieces with utmost care. A confirmation email and tracking link will be provided upon dispatch.</p>
      <div className="order-number"><span>Order Reference</span><strong>{orderId}</strong></div>
      <div className="success-delivery"><PackageCheck size={19} /><span>Complimentary signature gift box &amp; white-glove packaging included.</span></div>
      <div className="success-actions"><Link className="button-primary" href="/shop">Continue Shopping</Link><Link className="text-link" href="/">Back to Home <span aria-hidden="true">↗</span></Link></div>
    </ScrollReveal>
  );
}

async function StripePaymentResult({ paymentIntentId, orderReference: returnedOrderReference }: { paymentIntentId?: string; orderReference?: string }) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  let paid = false;
  let orderReference: string | null = null;
  let verificationError = "";

  if (!secretKey || !secretKey.startsWith("sk_test_")) {
    verificationError = "Stripe test-mode verification is not configured.";
  } else if (paymentIntentId && /^pi_[A-Za-z0-9]+$/.test(paymentIntentId)) {
    try {
      const response = await fetch(`https://api.stripe.com/v1/payment_intents/${paymentIntentId}`, {
        headers: { Authorization: `Bearer ${secretKey}` },
        cache: "no-store",
      });

      if (response.ok) {
        const intent: unknown = await response.json();
        if (
          typeof intent === "object" && intent !== null &&
          "status" in intent && typeof intent.status === "string" &&
          "amount" in intent && typeof intent.amount === "number" &&
          "amount_received" in intent && typeof intent.amount_received === "number" &&
          "currency" in intent && typeof intent.currency === "string" &&
          "livemode" in intent && typeof intent.livemode === "boolean" &&
          "metadata" in intent && typeof intent.metadata === "object" && intent.metadata !== null &&
          "order_reference" in intent.metadata && typeof intent.metadata.order_reference === "string"
        ) {
          orderReference = intent.metadata.order_reference;
          paid =
            intent.status === "succeeded" &&
            intent.amount_received === intent.amount &&
            intent.currency === "usd" &&
            !intent.livemode &&
            (!returnedOrderReference || returnedOrderReference === orderReference);
        } else {
          verificationError = "Stripe returned an invalid payment status.";
        }
      } else {
        console.error(`Stripe payment verification returned HTTP ${response.status}.`);
        verificationError = "We couldn't verify the payment with Stripe.";
      }
    } catch (error) {
      console.error("Could not verify the Stripe payment intent.", error);
      verificationError = "We couldn't verify the payment with Stripe.";
    }
  } else {
    verificationError = "A valid Stripe payment intent was not provided.";
  }

  return (
    <ScrollReveal className="page-shell success-shell">
      {paid && <ClearCartOnPayment paid />}
      {paid ? (
        <>
          <div className="success-mark"><Check size={30} /></div>
          <span className="eyebrow">TEST PAYMENT CONFIRMED</span>
          <h1>Thank You for Your Order.</h1>
          <p className="success-copy">Stripe verified this test payment. No real payment was taken. This preview does not save orders or arrange fulfillment.</p>
          {orderReference && <div className="order-number"><span>Order Reference</span><strong>{orderReference}</strong></div>}
          <div className="success-delivery"><PackageCheck size={19} /><span>Your checkout was completed in Stripe test mode.</span></div>
        </>
      ) : (
        <>
          <span className="eyebrow">PAYMENT NOT CONFIRMED</span>
          <h1>We could not confirm your payment.</h1>
          <p className="success-copy">{verificationError || "The payment is still processing. Please check its status before trying again."}</p>
        </>
      )}
      <div className="success-actions">
        <Link className="button-primary" href={paid ? "/shop" : "/checkout"}>{paid ? "Continue Shopping" : "Return to Checkout"}</Link>
        <Link className="text-link" href="/">Back to Home <span aria-hidden="true">↗</span></Link>
      </div>
    </ScrollReveal>
  );
}
