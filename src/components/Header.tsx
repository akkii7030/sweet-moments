import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#specialties' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Custom Cakes', href: '#custom-cakes' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-card/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <a href="#home" className="font-display text-2xl md:text-3xl font-bold text-gradient">
          LSD
          <span className="block text-xs font-body font-light tracking-[0.3em] text-muted-foreground">
            Love Sugar & Dough
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body text-sm tracking-wide text-foreground/80 hover:text-highlight transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-highlight text-highlight-foreground px-6 py-2.5 rounded-full font-body text-sm font-bold tracking-wide sweet-glow hover-bounce transition-all"
          >
            Order Now
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-md border-t border-border animate-fade-in-up">
          <nav className="flex flex-col items-center gap-4 py-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-body text-base text-foreground/80 hover:text-highlight transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-highlight text-highlight-foreground px-8 py-3 rounded-full font-body font-bold sweet-glow"
              onClick={() => setMobileOpen(false)}
            >
              Order Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
