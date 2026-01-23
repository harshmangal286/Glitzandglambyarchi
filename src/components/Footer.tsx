import { Instagram, Facebook, Youtube, Mail, Phone, Sparkles } from 'lucide-react';

export function Footer() {
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
    }
  };

  return (
    <footer className="bg-[var(--jet-black)] text-[var(--velvet-ivory)] py-12 border-t border-[var(--royal-gold)]/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-[var(--royal-gold)]" />
              <h4>Glitz & Glam by Archi</h4>
            </div>
            <p className="text-[var(--champagne-gold)] mb-4 leading-relaxed">
              Professional makeup artistry specializing in flawless, glamorous, and high-definition makeup looks for all occasions.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/glitzandglam_by_archi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-[var(--royal-gold)] to-[var(--burnished-gold)] hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-[var(--obsidian-black)]" />
              </a>
              <a 
                href="https://www.facebook.com/share/1a6gAC8kd8/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-[var(--royal-gold)] to-[var(--burnished-gold)] hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5 text-[var(--obsidian-black)]" />
              </a>
              <a 
                href="https://youtube.com/@mua_archidhanotiya?si=K0kmt6n63w53s_Vw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-[var(--royal-gold)] to-[var(--burnished-gold)] hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Youtube className="w-5 h-5 text-[var(--obsidian-black)]" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="mb-4">Contact</h5>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[var(--champagne-gold)]">
                <Phone className="w-4 h-4 text-[var(--royal-gold)]" />
                <span>+91 91314 89879</span>
              </li>
              <li className="flex items-center gap-2 text-[var(--champagne-gold)]">
                <Mail className="w-4 h-4 text-[var(--royal-gold)]" />
                <span>glitzandglam@gmail.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-[var(--mink-taupe)]">Operating Hours:</p>
              <p className="text-sm text-[var(--champagne-gold)]">Mon - Sat: 10:00 AM - 7:00 PM</p>
              <p className="text-sm text-[var(--champagne-gold)]">Sunday: By Appointment</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--royal-gold)]/30 pt-8 text-center">
          <p className="text-[var(--champagne-gold)] text-sm">
            © {new Date().getFullYear()} Glitz & Glam by Archi. All rights reserved.
          </p>
          <p className="text-[var(--mink-taupe)] text-xs mt-2">
            Crafted with love for beauty and artistry
          </p>
          <p className="text-[var(--mink-taupe)] text-xs mt-2">
            Developed with ✨ by{' '}
            <span className="text-[var(--royal-gold)] font-semibold">Harsh Mangal</span>
          </p>
        </div>
      </div>
    </footer>
  );
}