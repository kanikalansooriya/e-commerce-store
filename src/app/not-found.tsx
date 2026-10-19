import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="page-shell not-found-shell">
      <div className="not-found-card">
        <span className="eyebrow">404</span>
        <div className="empty-bag-mark not-found-mark"><Compass size={28} /></div>
        <h1>Looks like this one wandered off.</h1>
        <p>Let’s get you back to something good.</p>
        <Link className="button-primary" href="/shop">
          Back to shop <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
