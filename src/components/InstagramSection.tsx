import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram } from 'lucide-react';
import cupcakesImg from '@/assets/cupcakes.jpg';
import chocolateCakeImg from '@/assets/chocolate-cake.jpg';
import redVelvetImg from '@/assets/red-velvet.jpg';
import macaronsImg from '@/assets/macarons.jpg';
import customCakeImg from '@/assets/custom-cake.jpg';
import coffeeImg from '@/assets/coffee-dessert.jpg';

gsap.registerPlugin(ScrollTrigger);

const feedImages = [cupcakesImg, chocolateCakeImg, redVelvetImg, macaronsImg, customCakeImg, coffeeImg];

export default function InstagramSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.insta-item', { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.insta-grid', start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Instagram className="mx-auto mb-4 text-highlight" size={32} />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary">Follow @lovesugardough</h2>
          <p className="font-body text-muted-foreground mt-2">Sweet moments from our kitchen to your feed</p>
        </div>
        <div className="insta-grid grid grid-cols-3 md:grid-cols-6 gap-3">
          {feedImages.map((src, i) => (
            <a
              key={i}
              href="https://instagram.com/lovesugardough"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-item group relative aspect-square rounded-xl overflow-hidden opacity-0"
            >
              <img src={src} alt="Instagram" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-highlight/0 group-hover:bg-highlight/30 transition-all duration-300 flex items-center justify-center">
                <Instagram className="text-highlight-foreground opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
