import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import customCakeImg from '@/assets/custom-cake.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function CustomCakesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cake-content', { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.cake-content', start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="custom-cakes" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Sprinkles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-4 rounded-full animate-sprinkle pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 30}%`,
            backgroundColor: ['#F8C8DC', '#C2185B', '#A5D6A7', '#FFF8E7', '#4E342E'][i % 5],
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}

      <div className="container mx-auto cake-content opacity-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={customCakeImg}
              alt="Custom Celebration Cake"
              className="w-full h-[400px] md:h-[550px] object-cover"
            />
          </div>
          <div>
            <p className="font-body text-sm tracking-[0.3em] text-highlight uppercase mb-4">Made For You</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary mb-6">
              Celebrate Every Occasion with a Custom Cake
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              From birthdays to weddings, baby showers to anniversaries — our bespoke cakes are
              designed to make your celebration unforgettable. Share your vision, and we'll bring
              it to life with buttercream, fondant, and a touch of magic.
            </p>
            <a
              href="#contact"
              className="inline-block bg-highlight text-highlight-foreground px-10 py-4 rounded-full font-body font-bold text-lg sweet-glow hover-bounce transition-all"
            >
              Design Your Cake
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
