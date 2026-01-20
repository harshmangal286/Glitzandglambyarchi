import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[var(--jet-black)]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(212,175,55,0.2)] border-b border-[var(--royal-gold)]/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <Sparkles className="w-6 h-6 text-[var(--royal-gold)] group-hover:rotate-180 transition-transform duration-500" />
            <span className="font-['Playfair_Display'] text-xl text-[var(--royal-gold)] hover:text-[var(--champagne-gold)] transition-colors">
              Glitz & Glam
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative text-[var(--velvet-ivory)] hover:text-[var(--royal-gold)] transition-colors duration-300 group ${
                  activeSection === link.id ? 'text-[var(--royal-gold)]' : ''
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--royal-gold)] to-[var(--burnished-gold)] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-[var(--royal-gold)] text-[var(--obsidian-black)] rounded-lg hover:bg-[var(--burnished-gold)] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transform hover:scale-105 font-semibold"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[var(--royal-gold)] p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-[var(--jet-black)]/98 backdrop-blur-md border-b border-[var(--royal-gold)]/30 shadow-[0_4px_20px_rgba(212,175,55,0.2)]">
            <div className="flex flex-col py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="px-6 py-3 text-left text-[var(--velvet-ivory)] hover:text-[var(--royal-gold)] hover:bg-[var(--royal-gold)]/10 transition-all duration-300"
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="mx-6 mt-2 px-6 py-3 bg-[var(--royal-gold)] text-[var(--obsidian-black)] rounded-lg hover:bg-[var(--burnished-gold)] transition-all duration-300 font-semibold text-center"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
