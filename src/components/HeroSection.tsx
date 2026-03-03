import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import HeroCanvas from './HeroCanvas';
import heroImage from '@/assets/hero-desserts.jpg';
import { Heart } from 'lucide-react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo(headingRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo(subRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .fromTo(btnsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4');
  }, []);

  return (
    <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium artisanal desserts"
          className="w-full h-full object-cover scale-110"
          style={{ animation: 'slowZoom 20s ease-in-out infinite alternate' }}
        />
        <div className="absolute inset-0 gradient-pink opacity-85" />
      </div>

      <HeroCanvas />

      {/* Floating hearts */}
      {[1, 2, 3, 4, 5].map((i) => (
        <Heart
          key={i}
          className="absolute text-highlight/20 animate-heart z-10"
          size={16 + i * 4}
          style={{
            left: `${15 + i * 15}%`,
            bottom: `${10 + i * 5}%`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1
          ref={headingRef}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-secondary leading-tight opacity-0"
        >
          Baked with Love.
          <br />
          <span className="text-highlight">Served with Sweetness.</span>
        </h1>
        <p
          ref={subRef}
          className="mt-6 font-body text-lg md:text-xl text-secondary/80 max-w-2xl mx-auto opacity-0"
        >
          Mumbai's Favorite Destination for Cupcakes, Cheesecakes & Celebration Cakes
        </p>
        <div ref={btnsRef} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center opacity-0">
          <a
            href="#contact"
            className="bg-highlight text-highlight-foreground px-10 py-4 rounded-full font-body font-bold text-lg sweet-glow hover-bounce transition-all"
          >
            Order Online
          </a>
          <a
            href="#contact"
            className="border-2 border-secondary text-secondary px-10 py-4 rounded-full font-body font-bold text-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
          >
            Visit Us
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1.1); }
          100% { transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
}
