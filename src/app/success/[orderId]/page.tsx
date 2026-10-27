import Link from "next/link";
import { Check, PackageCheck } from "lucide-react";
import { ScrollReveal } from "@/components/motion";

export default async function SuccessPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;
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