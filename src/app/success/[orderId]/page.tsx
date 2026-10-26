import Link from "next/link";
import { Check, PackageCheck } from "lucide-react";
import { ScrollReveal } from "@/components/motion";

export default async function SuccessPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;
  return (
    <ScrollReveal className="page-shell success-shell">
      <div className="success-mark"><Check size={30} /></div>
      <span className="eyebrow">That’s a good choice</span>
      <h1>Your order is in.</h1>
      <p className="success-copy">Thanks for exploring AURA. Your demo order details are saved only for this browser session.</p>
      <div className="order-number"><span>Order number</span><strong>{orderId}</strong></div>
      <div className="success-delivery"><PackageCheck size={19} /><span>No email or delivery update will be sent from this demo.</span></div>
      <div className="success-actions"><Link className="button-primary" href="/shop">Keep browsing</Link><Link className="text-link" href="/">Back to home <span aria-hidden="true">↗</span></Link></div>
      <p className="demo-note">This is a storefront demo. No payment or shipment was processed.</p>
    </ScrollReveal>
  );
}