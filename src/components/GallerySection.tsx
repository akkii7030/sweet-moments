import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X } from 'lucide-react';
import cupcakesImg from '@/assets/cupcakes.jpg';
import chocolateCakeImg from '@/assets/chocolate-cake.jpg';
import redVelvetImg from '@/assets/red-velvet.jpg';
import blueberryImg from '@/assets/blueberry-cheesecake.jpg';
import browniesImg from '@/assets/brownies.jpg';
import macaronsImg from '@/assets/macarons.jpg';
import customCakeImg from '@/assets/custom-cake.jpg';
import coffeeImg from '@/assets/coffee-dessert.jpg';

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  { src: cupcakesImg, title: 'Oreo Cupcakes', category: 'Cupcakes' },
  { src: chocolateCakeImg, title: 'Chocolate Ganache Cake', category: 'Custom Cakes' },
  { src: redVelvetImg, title: 'Red Velvet Cheesecake', category: 'Cheesecakes' },
  { src: blueberryImg, title: 'Blueberry Cheesecake', category: 'Cheesecakes' },
  { src: browniesImg, title: 'Fudgy Brownies', category: 'Cupcakes' },
  { src: macaronsImg, title: 'French Macarons', category: 'Cupcakes' },
  { src: customCakeImg, title: 'Celebration Cake', category: 'Custom Cakes' },
  { src: coffeeImg, title: 'Coffee & Cupcake', category: 'Cafe Moments' },
];

const categories = ['All', 'Cupcakes', 'Cheesecakes', 'Custom Cakes', 'Cafe Moments'];

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === 'All' ? galleryItems : galleryItems.filter(i => i.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.gallery-item', { opacity: 0, scale: 0.9 }, {
        opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.gallery-grid', start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="section-padding gradient-warm">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-sm tracking-[0.3em] text-highlight uppercase mb-4">Sweet Moments</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary">Our Gallery</h2>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-body text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-highlight text-highlight-foreground'
                  : 'bg-card text-muted-foreground hover:bg-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="gallery-item group relative rounded-xl overflow-hidden cursor-pointer shadow-md opacity-0"
              onClick={() => setLightbox(i)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115"
                />
              </div>
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/50 transition-all duration-300 flex items-end">
                <p className="font-body text-sm text-secondary-foreground p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-secondary/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-secondary-foreground" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].title}
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl animate-scale-in"
          />
        </div>
      )}
    </section>
  );
}
