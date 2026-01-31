import { MapPin, Phone, Globe } from 'lucide-react';

export function Location() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
    <section id="location" className="py-20 bg-[var(--jet-black)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">Studio Location & Travel Services</h2>
          <p className="text-xl text-[var(--champagne-gold)] max-w-3xl mx-auto">
            Glitz & Glam by Archi is available for studio appointments and on-location services for bridal events, shoots, and special occasions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--burnished-gold)] via-[var(--royal-gold)] to-[var(--burnished-gold)] mx-auto mt-6 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Location Details */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--royal-gold)] to-[var(--burnished-gold)] rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                <MapPin className="w-6 h-6 text-[var(--obsidian-black)]" strokeWidth={2} />
              </div>
              <div>
                <h4 className="mb-2">Studio Location</h4>
                <p className="text-[var(--velvet-ivory)]">
                  Mandsaur/Indore,Madhya Pradesh<br />
                  Available for studio appointments by booking
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--royal-gold)] to-[var(--burnished-gold)] rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                <Globe className="w-6 h-6 text-[var(--obsidian-black)]" strokeWidth={2} />
              </div>
              <div>
                <h4 className="mb-2">Service Radius</h4>
                <p className="text-[var(--velvet-ivory)]">
                  • Available within All cities<br />
                  • On-location services for events<br />
                  • Destination weddings accepted
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--royal-gold)] to-[var(--burnished-gold)] rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                <Phone className="w-6 h-6 text-[var(--obsidian-black)]" strokeWidth={2} />
              </div>
              <div>
                <h4 className="mb-2">Travel Services</h4>
                <p className="text-[var(--velvet-ivory)]">
                  We bring the glam to you! Available for bridal homes, venues, and destination events.
                </p>
              </div>
            </div>

            <button 
              onClick={scrollToContact}
              className="w-full py-4 bg-gradient-to-r from-[var(--royal-gold)] to-[var(--burnished-gold)] text-[var(--obsidian-black)] rounded-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300 transform hover:scale-105 font-semibold"
            >
              Check Availability
            </button>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.3)] h-[400px] border-2 border-[var(--royal-gold)]/30 bg-[var(--obsidian-black)]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3638.9372500029267!2d75.00837702535019!3d24.208977178360307!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3965d5eda3888561%3A0x28679eef420aea33!2sTouch%20and%20Glow%20beauty%20salon!5e0!3m2!1sen!2sin!4v1769105549010!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                frameBorder="0"
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Location Map"
                className="w-full h-full"
              ></iframe>
            </div>
            <a 
              href="https://maps.app.goo.gl/nVbHQ5psmEENkjNy9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-6 bg-[var(--jet-black)] text-[var(--royal-gold)] rounded-lg border-2 border-[var(--royal-gold)]/30 hover:border-[var(--royal-gold)] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 font-semibold"
            >
              <MapPin className="w-5 h-5" />
              Open in Google Maps
            </a>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-16 text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl break-words px-4">
            Follow @glitzandglam_by_archi
          </h2>
        </div>
      </div>
    </section>
  );
}