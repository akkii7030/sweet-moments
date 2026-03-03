import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const locations = [
  { name: 'Ghatkopar East', phone: '+91 98XXX XXXXX' },
  { name: 'Goregaon West', phone: '+91 98XXX XXXXX' },
  { name: 'Oshiwara', phone: '+91 98XXX XXXXX' },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-content', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-content', start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="section-padding gradient-warm">
      <div className="container mx-auto contact-content opacity-0">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] text-highlight uppercase mb-4">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary">Contact Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-2xl font-bold text-secondary mb-6">Our Locations</h3>
            <div className="space-y-6">
              {locations.map((loc) => (
                <div key={loc.name} className="bg-card rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-3 mb-2">
                    <MapPin className="text-highlight mt-1 flex-shrink-0" size={18} />
                    <div>
                      <p className="font-body font-bold text-foreground">{loc.name}, Mumbai</p>
                      <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                        <Phone size={14} />
                        <span className="font-body text-sm">{loc.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="font-body font-bold text-foreground mb-3">Order via Delivery Partners</p>
              <div className="flex gap-3">
                <a href="#" className="bg-highlight text-highlight-foreground px-6 py-3 rounded-full font-body font-bold text-sm sweet-glow hover-bounce">
                  Zomato
                </a>
                <a href="#" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-body font-bold text-sm hover:opacity-90 transition-opacity">
                  Swiggy
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold text-secondary mb-6">Send us a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl bg-card border border-border font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl bg-card border border-border font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl bg-card border border-border font-body focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full bg-highlight text-highlight-foreground py-4 rounded-full font-body font-bold text-lg sweet-glow hover-bounce transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
