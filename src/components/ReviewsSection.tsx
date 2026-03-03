import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: 'Priya M.',
    text: 'The cupcakes are absolutely divine! Every flavor is a little piece of heaven. The frosting is so smooth and the cakes are always perfectly moist.',
    rating: 4,
  },
  {
    name: 'Rahul S.',
    text: 'Best cheesecakes in Mumbai, hands down! Ordered a blueberry cheesecake for my wife\'s birthday and it was perfection.',
    rating: 4,
  },
  {
    name: 'Ananya K.',
    text: 'The presentation is always stunning — every cake looks like a work of art. Instagram-worthy for sure! The custom cake they made for our anniversary was breathtaking.',
    rating: 5,
  },
  {
    name: 'Vikram D.',
    text: 'Love the café vibe and the brownies are insanely good. Perfect place to hang out with friends over coffee and desserts.',
    rating: 4,
  },
];

export default function ReviewsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.reviews-content', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.reviews-content', start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  return (
    <section ref={sectionRef} className="section-padding gradient-warm">
      <div className="container mx-auto reviews-content opacity-0">
        <div className="text-center mb-12">
          <p className="font-body text-sm tracking-[0.3em] text-highlight uppercase mb-4">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary">What Customers Say</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl text-center relative">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={i < reviews[current].rating ? 'text-highlight fill-highlight' : 'text-border'}
                />
              ))}
            </div>
            <p className="font-body text-lg text-foreground/80 italic leading-relaxed mb-6">
              "{reviews[current].text}"
            </p>
            <p className="font-display text-xl font-bold text-secondary">{reviews[current].name}</p>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
