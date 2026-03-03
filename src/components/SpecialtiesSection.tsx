import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cupcakesImg from '@/assets/cupcakes.jpg';
import chocolateCakeImg from '@/assets/chocolate-cake.jpg';
import browniesImg from '@/assets/brownies.jpg';
import customCakeImg from '@/assets/custom-cake.jpg';
import coffeeImg from '@/assets/coffee-dessert.jpg';

gsap.registerPlugin(ScrollTrigger);

const specialties = [
  { emoji: '🧁', title: 'Cupcakes', desc: 'Handcrafted with artisan frosting', image: cupcakesImg },
  { emoji: '🍰', title: 'Cheesecakes', desc: 'Rich, creamy & irresistible', image: chocolateCakeImg },
  { emoji: '🍫', title: 'Brownies', desc: 'Fudgy, gooey perfection', image: browniesImg },
  { emoji: '🎂', title: 'Custom Cakes', desc: 'Celebrate every occasion', image: customCakeImg },
  { emoji: '☕', title: 'Coffee & Beverages', desc: 'Perfect pairing for desserts', image: coffeeImg },
];

export default function SpecialtiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.specialty-card', { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.specialty-grid', start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="specialties" ref={sectionRef} className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] text-highlight uppercase mb-4">What We Serve</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary">Our Specialties</h2>
        </div>
        <div className="specialty-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {specialties.map((item, i) => (
            <div
              key={i}
              className="specialty-card group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer opacity-0"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent transition-all duration-500 group-hover:from-secondary/90" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-secondary-foreground">
                <span className="text-3xl mb-2 block">{item.emoji}</span>
                <h3 className="font-display text-xl font-bold">{item.title}</h3>
                <p className="font-body text-sm opacity-80 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
