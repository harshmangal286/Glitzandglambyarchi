import { useState } from 'react';
import { Mail, Phone, Instagram, Send, MessageCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    occasion: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-[var(--obsidian-black)] relative">
      {/* Subtle gold glow background */}
      <div className="absolute inset-0 bg-gradient-radial from-[var(--royal-gold)]/5 via-transparent to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4">Book Your Glam Session</h2>
          <p className="text-xl text-[var(--champagne-gold)] max-w-2xl mx-auto">
            Let{"'"}s create your perfect look together
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--burnished-gold)] via-[var(--royal-gold)] to-[var(--burnished-gold)] mx-auto mt-6 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6">Get in Touch</h3>
              <p className="text-[var(--velvet-ivory)] mb-8">
                Ready to experience the ultimate glam transformation? Reach out to book your appointment or inquire about our services.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-[var(--jet-black)] rounded-lg shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] transition-shadow duration-300 border border-[var(--royal-gold)]/20">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--royal-gold)] to-[var(--burnished-gold)] rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                  <Phone className="w-6 h-6 text-[var(--obsidian-black)]" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-sm text-[var(--mink-taupe)]">Phone / WhatsApp</p>
                  <p className="text-[var(--champagne-gold)]">+91 9131489879</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[var(--jet-black)] rounded-lg shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] transition-shadow duration-300 border border-[var(--royal-gold)]/20">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--royal-gold)] to-[var(--burnished-gold)] rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                  <Mail className="w-6 h-6 text-[var(--obsidian-black)]" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-sm text-[var(--mink-taupe)]">Email</p>
                  <p className="text-[var(--champagne-gold)]">glitzandglambyarchi@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[var(--jet-black)] rounded-lg shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] transition-shadow duration-300 border border-[var(--royal-gold)]/20">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--royal-gold)] to-[var(--burnished-gold)] rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                  <Instagram className="w-6 h-6 text-[var(--obsidian-black)]" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-sm text-[var(--mink-taupe)]">Instagram</p>
                  <p className="text-[var(--champagne-gold)]">@glitzandglam_by_archi</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href="https://wa.me/919131489879" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                Book Now on WhatsApp
              </a>
              <a 
                href="https://www.instagram.com/glitzandglam_by_archi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full mt-4 flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-[#E1306C] to-[#C13584] text-white rounded-lg hover:shadow-[0_0_20px_rgba(225,48,108,0.4)] transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <Instagram className="w-5 h-5" />
                DM on Instagram
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[var(--jet-black)] rounded-lg shadow-[0_0_30px_rgba(212,175,55,0.2)] p-8 border border-[var(--royal-gold)]/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-[var(--champagne-gold)]">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--obsidian-black)] border-2 border-[var(--royal-gold)]/30 rounded-lg focus:outline-none focus:border-[var(--royal-gold)] transition-colors duration-300 text-[var(--velvet-ivory)]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-[var(--champagne-gold)]">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--obsidian-black)] border-2 border-[var(--royal-gold)]/30 rounded-lg focus:outline-none focus:border-[var(--royal-gold)] transition-colors duration-300 text-[var(--velvet-ivory)]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm mb-2 text-[var(--champagne-gold)]">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--obsidian-black)] border-2 border-[var(--royal-gold)]/30 rounded-lg focus:outline-none focus:border-[var(--royal-gold)] transition-colors duration-300 text-[var(--velvet-ivory)]"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="date" className="block text-sm mb-2 text-[var(--champagne-gold)]">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[var(--obsidian-black)] border-2 border-[var(--royal-gold)]/30 rounded-lg focus:outline-none focus:border-[var(--royal-gold)] transition-colors duration-300 text-[var(--velvet-ivory)]"
                />
              </div>

              <div>
                <label htmlFor="occasion" className="block text-sm mb-2 text-[var(--champagne-gold)]">Occasion *</label>
                <select
                  id="occasion"
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--obsidian-black)] border-2 border-[var(--royal-gold)]/30 rounded-lg focus:outline-none focus:border-[var(--royal-gold)] transition-colors duration-300 text-[var(--velvet-ivory)]"
                >
                  <option value="">Select occasion</option>
                  <option value="bridal">Bridal Makeup</option>
                  <option value="engagement">Engagement</option>
                  <option value="party">Party/Event</option>
                  <option value="photoshoot">Photoshoot</option>
                  <option value="festival">Festival/Occasion</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-[var(--champagne-gold)]">Message / Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[var(--obsidian-black)] border-2 border-[var(--royal-gold)]/30 rounded-lg focus:outline-none focus:border-[var(--royal-gold)] transition-colors duration-300 resize-none text-[var(--velvet-ivory)]"
                  placeholder="Tell us about your vision..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-[var(--royal-gold)] to-[var(--burnished-gold)] text-[var(--obsidian-black)] rounded-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <Send className="w-5 h-5" />
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}