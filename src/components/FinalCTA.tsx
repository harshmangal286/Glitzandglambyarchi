import { Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function FinalCTA() {
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

  // Glam Rain - Slow falling desaturated client visuals
  const fallingImages = [
    {
      src: "https://images.unsplash.com/photo-1761084490272-c81f4ededf54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYWtldXAlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc5NzMxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      left: '10%',
      size: 'w-40 h-52',
      duration: 16,
      delay: 0
    },
    {
      src: "https://images.unsplash.com/photo-1582576192532-06353147fcbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBnbGFtfGVufDF8fHx8MTc2Nzk3MzE0NHww&ixlib=rb-4.1.0&q=80&w=1080",
      left: '25%',
      size: 'w-36 h-48',
      duration: 14,
      delay: 2
    },
    {
      src: "https://images.unsplash.com/photo-1633443362894-227325b61ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtb3JvdXMlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Nzk3MzE0NXww&ixlib=rb-4.1.0&q=80&w=1080",
      left: '50%',
      size: 'w-44 h-56',
      duration: 15,
      delay: 4
    },
    {
      src: "https://images.unsplash.com/photo-1648922798217-f5d339cb7aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBtYWtldXAlMjBiZWF1dHl8ZW58MXx8fHwxNzY3OTczMTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      left: '70%',
      size: 'w-40 h-52',
      duration: 13,
      delay: 1
    },
    {
      src: "https://images.unsplash.com/photo-1646770267004-c1f630da05b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbWFrZXVwJTIwZ2xpdHRlcnxlbnwxfHx8fDE3Njc5NzMxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      left: '85%',
      size: 'w-38 h-50',
      duration: 16,
      delay: 3
    }
  ];

  return (
    <section className="relative py-32 bg-[var(--obsidian-black)] overflow-hidden">
      {/* Glam Rain - Slow Falling Images with Fade Masks */}
      <div className="absolute inset-0 z-0">
        {/* Top Fade Mask */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[var(--obsidian-black)] to-transparent z-10"></div>
        
        {/* Bottom Fade Mask */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--obsidian-black)] to-transparent z-10"></div>
        
        {/* Falling Images */}
        {fallingImages.map((img, index) => (
          <motion.div
            key={index}
            className={`absolute ${img.size} rounded-lg overflow-hidden grayscale opacity-20`}
            style={{ left: img.left }}
            initial={{ y: '-120%' }}
            animate={{ y: '120vh' }}
            transition={{
              duration: img.duration,
              delay: img.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <ImageWithFallback 
              src={img.src}
              alt="Glam showcase"
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[var(--obsidian-black)]/75 z-[5]"></div>
      </div>

      {/* CTA Content - Strong Contrast Panel */}
      <div className="relative z-20 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-gradient-to-br from-[var(--jet-black)] to-[var(--obsidian-black)] border-2 border-[var(--royal-gold)] rounded-2xl p-12 md:p-16 text-center shadow-[0_0_80px_rgba(212,175,55,0.25)]"
        >
          {/* Sparkle Icon */}
          <motion.div 
            className="flex justify-center mb-6"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[var(--royal-gold)] to-[var(--burnished-gold)] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.5)]">
              <Sparkles className="w-8 h-8 text-[var(--obsidian-black)]" strokeWidth={2} />
            </div>
          </motion.div>

          {/* Gold Divider */}
          <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-[var(--royal-gold)] to-transparent mx-auto mb-8"></div>

          {/* Heading */}
          <h2 className="mb-6">Ready to Experience the Glam?</h2>
          
          {/* Description */}
          <p className="text-xl text-[var(--champagne-gold)] mb-4 italic" style={{ fontFamily: 'Playfair Display, serif' }}>
            Your beauty transformation awaits
          </p>
          
          <p className="text-lg text-[var(--velvet-ivory)] mb-10 max-w-2xl mx-auto">
            Book your personalized makeup session today and let us create a stunning, unforgettable look that celebrates your unique beauty.
          </p>

          {/* Gold Divider */}
          <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-[var(--royal-gold)] to-transparent mx-auto mb-10"></div>

          {/* CTA Button */}
          <motion.button 
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-[var(--royal-gold)] to-[var(--burnished-gold)] text-[var(--obsidian-black)] rounded-lg shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] transition-all duration-300 font-semibold text-lg"
          >
            Book Your Transformation Now
          </motion.button>

          {/* Tagline */}
          <p className="text-sm text-[var(--mink-taupe)] mt-8 tracking-wider uppercase">
            Limited Slots Available · Book in Advance
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--royal-gold)]/5 rounded-full blur-[120px] z-[1]"></div>
    </section>
  );
}
