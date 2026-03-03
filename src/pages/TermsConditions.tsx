import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsConditions() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-16 section-padding">
        <div className="container mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-secondary mb-8">Terms & Conditions</h1>
          <div className="font-body text-muted-foreground space-y-6 leading-relaxed">
            <p>Last updated: March 2026</p>
            <h2 className="font-display text-2xl font-bold text-secondary">1. Order Policies</h2>
            <p>All custom cake orders require a minimum of 48 hours advance notice. Prices may vary based on design complexity, size, and ingredients. Orders are confirmed only after payment is received.</p>
            <h2 className="font-display text-2xl font-bold text-secondary">2. Refund & Cancellation</h2>
            <p>Custom cake orders can be cancelled up to 24 hours before the scheduled pickup/delivery for a full refund. Cancellations within 24 hours may be subject to a 50% cancellation fee. Refunds for quality issues will be assessed on a case-by-case basis.</p>
            <h2 className="font-display text-2xl font-bold text-secondary">3. Delivery Disclaimer</h2>
            <p>Delivery is subject to availability and service area. Orders placed through third-party platforms (Zomato, Swiggy) are governed by their respective terms. We are not responsible for delays caused by delivery partners.</p>
            <h2 className="font-display text-2xl font-bold text-secondary">4. Allergen Information</h2>
            <p>Our products may contain nuts, dairy, eggs, wheat, and soy. Please inform us of any allergies when placing your order. While we take precautions, we cannot guarantee a completely allergen-free environment.</p>
            <h2 className="font-display text-2xl font-bold text-secondary">5. Contact</h2>
            <p>For any questions regarding these terms, please visit us at any of our Mumbai locations or use the contact form on our website.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
