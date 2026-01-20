import { Play, Instagram } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function VideoShowcase() {
  const reels = [
    {
      thumbnail: "/charu.PNG",
      title: "Sundowner Bridal Glam 🌻",
      link: "https://www.instagram.com/reel/DO46xlZkvrK/?igsh=MXdwZ2x0ZnZyZmdwZw=="
    },
    {
      thumbnail: "/krati.PNG",
      title: "Cocktail Glam 🍷🥂",
      link: "https://www.instagram.com/reel/DTXrQxWkshF/?igsh=MTQxeXcwM2p4bjY3dA=="
    },
    {
      thumbnail: "/pranjal2.PNG",
      title: "Modern Bridal Glam",
      link: "https://www.instagram.com/reel/DS-FwfTEu4Y/?igsh=MWgyN29wN3RwcTByeA=="
    },
    {
      thumbnail: "/pranjal.PNG",
      title: "Bridal Glam Tutorial",
      link: "https://www.instagram.com/reel/DTP_KTSklcY/?igsh=M3Q2Njl6MmVmcXp4"
    },
    {
      thumbnail: "Mahi.PNG",
      title: "Real Time Bride",
      link: "https://www.instagram.com/reel/DSuaDAbEnjJ/?igsh=MTM3cGEwejl4cGozcw=="
    },
    {
      thumbnail: "logo.PNG",
      title: "Signature Brides of G&G",
      link: "https://www.instagram.com/reel/DGdIcrhSQlO/?igsh=MWY0NHV2Z2VycTZyOA=="
    }
  ];

  return (
    <section id="videos" className="py-20 bg-[var(--obsidian-black)] relative">
      {/* Subtle gold glow background */}
      <div className="absolute inset-0 bg-gradient-radial from-[var(--royal-gold)]/5 via-transparent to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4">Video Highlights & Reels</h2>
          <p className="text-xl text-[var(--champagne-gold)] max-w-2xl mx-auto">
            Watch glam transformations in motion.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--burnished-gold)] via-[var(--royal-gold)] to-[var(--burnished-gold)] mx-auto mt-6 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
        </div>

        {/* Reels Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {reels.slice(0, 3).map((reel, index) => (
            <a 
              key={index} 
              href={reel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg shadow-[0_0_25px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-300 cursor-pointer border border-[var(--royal-gold)]/20"
            >
              <ImageWithFallback 
                src={reel.thumbnail}
                alt={reel.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[var(--obsidian-black)]/60 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--royal-gold)] to-[var(--burnished-gold)] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(212,175,55,0.5)]">
                  <Play className="w-8 h-8 text-[var(--obsidian-black)] ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[var(--obsidian-black)] to-transparent">
                <p className="text-[var(--champagne-gold)]">{reel.title}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Reels Row */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {reels.slice(3, 6).map((reel, index) => (
            <a 
              key={index} 
              href={reel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg shadow-[0_0_25px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-300 cursor-pointer border border-[var(--royal-gold)]/20"
            >
              <ImageWithFallback 
                src={reel.thumbnail}
                alt={reel.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[var(--obsidian-black)]/60 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[var(--royal-gold)] to-[var(--burnished-gold)] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(212,175,55,0.5)]">
                  <Play className="w-8 h-8 text-[var(--obsidian-black)] ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[var(--obsidian-black)] to-transparent">
                <p className="text-[var(--champagne-gold)]">{reel.title}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Featured Reel */}
        <div className="max-w-4xl mx-auto bg-[var(--jet-black)] rounded-lg shadow-[0_0_40px_rgba(212,175,55,0.3)] overflow-hidden border border-[var(--royal-gold)]/30">
          <a 
            href="https://www.instagram.com/reel/DRhQZo2ksu3/?igsh=MXc3c21tZXdwaXZtNg=="
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group"
          >
            <ImageWithFallback 
              src="/Featuredreel.JPG"
              alt="Featured reel of the month"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian-black)] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
          </a>
          <div className="p-8 border-t border-[var(--royal-gold)]/20">
            <h3 className="mb-3">Featured Reel of the Month</h3>
            <p className="text-[var(--champagne-gold)] mb-6">
              Our most loved transformation - a stunning bridal makeover showcasing the perfect blend of elegance and glamour.
            </p>
            <a 
              href="https://www.instagram.com/reel/DRhQZo2ksu3/?igsh=MXc3c21tZXdwaXZtNg==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[var(--royal-gold)] to-[var(--burnished-gold)] text-[var(--obsidian-black)] rounded-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300 font-semibold w-fit"
            >
              <Instagram className="w-5 h-5" />
              View on Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}