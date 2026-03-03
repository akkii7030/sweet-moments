import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import GallerySection from '@/components/GallerySection';
import CustomCakesSection from '@/components/CustomCakesSection';
import ReviewsSection from '@/components/ReviewsSection';
import InstagramSection from '@/components/InstagramSection';
import ContactSection from '@/components/ContactSection';
import CTAStrip from '@/components/CTAStrip';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <GallerySection />
      <CustomCakesSection />
      <ReviewsSection />
      <InstagramSection />
      <ContactSection />
      <CTAStrip />
      <Footer />
    </div>
  );
};

export default Index;
