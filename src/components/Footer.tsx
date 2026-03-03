import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="font-display text-3xl font-bold">LSD</h3>
          <p className="font-body text-sm tracking-[0.3em] opacity-70 mt-1">Love Sugar & Dough</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2 font-body text-sm opacity-80">
              <a href="#home" className="hover:opacity-100 transition-opacity">Home</a>
              <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
              <a href="#specialties" className="hover:opacity-100 transition-opacity">Menu</a>
              <a href="#gallery" className="hover:opacity-100 transition-opacity">Gallery</a>
              <a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a>
            </nav>
          </div>
          <div className="text-center">
            <h4 className="font-display text-lg font-bold mb-4">Locations</h4>
            <div className="flex flex-col gap-2 font-body text-sm opacity-80">
              <span>Ghatkopar East, Mumbai</span>
              <span>Goregaon West, Mumbai</span>
              <span>Oshiwara, Mumbai</span>
            </div>
          </div>
          <div className="text-center">
            <h4 className="font-display text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex justify-center gap-4">
              <a href="https://instagram.com/lovesugardough" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram size={22} />
              </a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={22} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={22} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center font-body text-sm opacity-60">
          <div className="flex justify-center gap-6 mb-4">
            <Link to="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link to="/terms" className="hover:opacity-100 transition-opacity">Terms & Conditions</Link>
          </div>
          <p>© {new Date().getFullYear()} Love Sugar & Dough. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
