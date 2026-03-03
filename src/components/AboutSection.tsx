import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cafeInterior from '@/assets/cafe-interior.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-text', { opacity: 0, x: -50 }, {
        opacity: 1, x: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-text', start: 'top 80%' },
      });
      gsap.fromTo('.about-image', { opacity: 0, x: 50 }, {
        opacity: 1, x: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-image', start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding gradient-warm">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="about-text opacity-0">
            <p className="font-body text-sm tracking-[0.3em] text-highlight uppercase mb-4">Our Story</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary mb-6">
              About Love Sugar & Dough
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              What started as a passion project born out of pure love for baking has blossomed into
              Mumbai's most beloved artisanal dessert café. At LSD — Love Sugar & Dough — we believe
              every sweet bite should tell a story.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              From our signature cupcakes topped with velvety frosting to our rich, creamy cheesecakes
              and decadent brownies, every creation is handcrafted with premium ingredients and
              a whole lot of love. Whether it's an intimate celebration or just a Tuesday craving,
              we're here to make every moment a little sweeter.
            </p>
          </div>
          <div className="about-image opacity-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={cafeInterior}
                alt="LSD Café Interior"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
