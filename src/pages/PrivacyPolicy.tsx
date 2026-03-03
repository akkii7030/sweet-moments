import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 pb-16 section-padding">
        <div className="container mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-bold text-secondary mb-8">Privacy Policy</h1>
          <div className="font-body text-muted-foreground space-y-6 leading-relaxed">
            <p>Last updated: March 2026</p>
            <h2 className="font-display text-2xl font-bold text-secondary">1. Information We Collect</h2>
            <p>When you place an order, contact us, or visit our café, we may collect your name, phone number, email address, delivery address, and payment information necessary to fulfill your order.</p>
            <h2 className="font-display text-2xl font-bold text-secondary">2. How We Use Your Information</h2>
            <p>We use the information collected to process and deliver your orders, communicate with you about your orders and inquiries, improve our products and services, and send promotional offers (with your consent).</p>
            <h2 className="font-display text-2xl font-bold text-secondary">3. Data Sharing</h2>
            <p>We do not sell your personal data. We may share information with delivery partners (Zomato, Swiggy) solely for the purpose of delivering your orders. Payment information is processed securely through our payment gateway partners.</p>
            <h2 className="font-display text-2xl font-bold text-secondary">4. Data Security</h2>
            <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
            <h2 className="font-display text-2xl font-bold text-secondary">5. Contact Us</h2>
            <p>For any privacy-related concerns, please reach out to us at our café locations or through our contact form on the website.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
