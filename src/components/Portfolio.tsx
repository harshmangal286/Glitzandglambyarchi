import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { X } from 'lucide-react';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const allImages = [
    {
      src: "/b1.jpeg",
      alt: "Elegant bridal makeup",
      category: 'bridal'
    },
    {
      src: "/b2.JPG",
      alt: "Wedding makeup look",
      category: 'bridal'
    },
    {
      src: "/b3.PNG",
      alt: "Bridal makeup style",
      category: 'bridal'
    },
    {
      src: "/b4.jpeg",
      alt: "Beautiful bridal look",
      category: 'bridal'
    },
    {
      src: "/b5.jpeg",
      alt: "Glamorous bridal makeup",
      category: 'bridal'
    },
    {
      src: "/b6.jpeg",
      alt: "Traditional bridal makeup",
      category: 'bridal'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'bridal', label: 'Bridal' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-[var(--jet-black)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4">Portfolio Gallery</h2>
          <p className="text-xl text-[var(--champagne-gold)] max-w-2xl mx-auto">
            Handpicked transformations created with style and precision
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--burnished-gold)] via-[var(--royal-gold)] to-[var(--burnished-gold)] mx-auto mt-6 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-[var(--royal-gold)] to-[var(--burnished-gold)] text-[var(--obsidian-black)] shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : 'bg-[var(--obsidian-black)] text-[var(--champagne-gold)] border-2 border-[var(--royal-gold)]/30 hover:border-[var(--royal-gold)] hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-[0_0_25px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-300 border border-[var(--royal-gold)]/20 cursor-pointer aspect-[3/4]"
              onClick={() => setLightboxImage(image.src)}
            >
              <ImageWithFallback 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian-black)] via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
              
              {/* Click to View Indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-[var(--royal-gold)] text-[var(--obsidian-black)] px-6 py-3 rounded-lg font-semibold">
                  Click to View
                </div>
              </div>
              
              {/* Gold corner accents */}
              <div className="absolute top-2 right-2 w-12 h-12 border-t border-r border-[var(--royal-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 w-12 h-12 border-b border-l border-[var(--royal-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div 
            className="fixed inset-0 z-50 bg-[var(--obsidian-black)]/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button 
              className="absolute top-6 right-6 w-12 h-12 bg-[var(--royal-gold)] text-[var(--obsidian-black)] rounded-full flex items-center justify-center hover:bg-[var(--burnished-gold)] transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0.5)]"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={lightboxImage} 
              alt="Portfolio image" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-[0_0_50px_rgba(212,175,55,0.3)] border-2 border-[var(--royal-gold)]/30"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}