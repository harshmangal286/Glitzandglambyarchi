import { Sparkles, ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function Hero() {
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

  // Floating background images with depth layers
  const floatingImages = [
    {
      src: "https://images.unsplash.com/photo-1761084490272-c81f4ededf54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYWtldXAlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc5NzMxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      layer: 'back', // heavily blurred, low opacity
      position: 'left-[10%] top-[20%]',
      size: 'w-64 h-80',
      duration: 15
    },
    {
      src: "https://images.unsplash.com/photo-1633443362894-227325b61ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtb3JvdXMlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Nzk3MzE0NXww&ixlib=rb-4.1.0&q=80&w=1080",
      layer: 'middle', // normal clarity
      position: 'right-[15%] top-[15%]',
      size: 'w-72 h-96',
      duration: 18
    },
    {
      src: "https://images.unsplash.com/photo-1582576192532-06353147fcbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBnbGFtfGVufDF8fHx8MTc2Nzk3MzE0NHww&ixlib=rb-4.1.0&q=80&w=1080",
      layer: 'front', // larger scale, soft shadow
      position: 'left-[5%] bottom-[10%]',
      size: 'w-80 h-[28rem]',
      duration: 20
    },
    {
      src: "https://images.unsplash.com/photo-1648922798217-f5d339cb7aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBtYWtldXAlMjBiZWF1dHl8ZW58MXx8fHwxNzY3OTczMTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      layer: 'middle',
      position: 'right-[8%] bottom-[15%]',
      size: 'w-72 h-96',
      duration: 16
    }
  ];

  const getLayerStyles = (layer: string) => {
    switch (layer) {
      case 'back':
        return 'blur-[12px] opacity-25';
      case 'middle':
        return 'blur-[2px] opacity-40';
      case 'front':
        return 'opacity-50 shadow-2xl';
      default:
        return '';
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--obsidian-black)]">
      {/* Floating Background Images - Three Depth Layers */}
      <div className="absolute inset-0 z-0">
        {floatingImages.map((img, index) => (
          <motion.div
            key={index}
            className={`absolute ${img.position} ${img.size} rounded-lg overflow-hidden ${getLayerStyles(img.layer)}`}
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: img.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ImageWithFallback 
              src={img.src}
              alt="Glam makeup artistry"
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--obsidian-black)]/85 via-[var(--obsidian-black)]/75 to-[var(--obsidian-black)]/85"></div>
        {/* Gold Glow Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-[var(--royal-gold)]/10 via-transparent to-transparent opacity-50"></div>
      </div>

      {/* Content - Semi-transparent Overlay Panel */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-[var(--jet-black)]/60 backdrop-blur-md border border-[var(--royal-gold)]/30 rounded-2xl p-12 md:p-16 shadow-[0_0_60px_rgba(212,175,55,0.2)] max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-12 h-12 text-[var(--royal-gold)]" strokeWidth={1.5} />
            </motion.div>
          </div>
          
          {/* Thin Gold Divider Top */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[var(--royal-gold)] to-transparent mx-auto mb-8"></div>
          
          <h1 className="mb-6 max-w-4xl mx-auto">
            Glitz & Glam by Archi
          </h1>
          
          <p className="text-2xl md:text-3xl mb-4 text-[var(--champagne-gold)] italic max-w-3xl mx-auto" style={{ fontFamily: 'Playfair Display, serif' }}>
            Transform Your Beauty Dreams Into Reality
          </p>

          <p className="text-lg md:text-xl mb-10 text-[var(--velvet-ivory)] max-w-2xl mx-auto">
            Professional makeup artistry for bridal, editorial, and special occasions — creating flawless, camera-ready looks that last
          </p>

          {/* Thin Gold Divider Bottom */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[var(--royal-gold)] to-transparent mx-auto mb-12"></div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button 
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-[var(--royal-gold)] text-[var(--obsidian-black)] rounded-lg hover:bg-[var(--burnished-gold)] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] font-semibold text-lg"
            >
              Book Your Glam Session
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('portfolio')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-transparent text-[var(--royal-gold)] rounded-lg border-2 border-[var(--royal-gold)] hover:bg-[var(--royal-gold)] hover:text-[var(--obsidian-black)] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] font-semibold text-lg"
            >
              Explore Portfolio
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.button 
          onClick={() => scrollToSection('about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex flex-col items-center gap-2 mx-auto text-[var(--royal-gold)] hover:text-[var(--champagne-gold)] transition-colors duration-300 group"
        >
          <span className="text-sm tracking-widest uppercase">Discover More</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </div>

      {/* Decorative Gold Line at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--royal-gold)] to-transparent z-10"></div>
    </section>
  );
}