import { Heart, Sparkles, PartyPopper, Eye, Camera, Palette, Calendar, Scissors } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function Services() {
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

  const services = [
    {
      icon: Heart,
      title: 'Bridal Wedding Makeup',
      description: 'Timeless, flawless bridal looks that make your special day unforgettable.',
      price: 'Starting from ₹10,000',
      bgImage: 'https://images.unsplash.com/photo-1582576192532-06353147fcbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBnbGFtfGVufDF8fHx8MTc2Nzk3MzE0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      glowColor: 'rgba(212,175,55,0.12)'
    },
    {
      icon: Sparkles,
      title: 'Engagement & Pre-Wedding Glam',
      description: 'Glamorous makeup for your engagement and pre-wedding photoshoots.',
      price: 'Starting from ₹8,000',
      bgImage: 'https://images.unsplash.com/photo-1633443362894-227325b61ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtb3JvdXMlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Nzk3MzE0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      glowColor: 'rgba(238,217,182,0.10)'
    },
    {
      icon: PartyPopper,
      title: 'Party & Event Makeup',
      description: 'Stand out at every celebration with stunning, long-lasting makeup.',
      price: 'Starting from ₹2,000',
      bgImage: 'https://images.unsplash.com/photo-1648922798217-f5d339cb7aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBtYWtldXAlMjBiZWF1dHl8ZW58MXx8fHwxNzY3OTczMTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      glowColor: 'rgba(182,141,64,0.12)'
    },
    {
      icon: Palette,
      title: 'Soft Glam / Natural Makeup',
      description: 'Enhance your natural beauty with subtle, elegant looks.',
      bgImage: 'https://images.unsplash.com/photo-1761084490272-c81f4ededf54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYWtldXAlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc5NzMxNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      glowColor: 'rgba(212,175,55,0.10)'
    },
    {
      icon: Sparkles,
      title: 'Full Glam Transformations',
      description: 'Bold, dramatic, and show-stopping makeup for any occasion.',
      bgImage: 'https://images.unsplash.com/photo-1646770267004-c1f630da05b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwbWFrZXVwJTIwZ2xpdHRlcnxlbnwxfHx8fDE3Njc5NzMxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      glowColor: 'rgba(238,217,182,0.12)'
    },
    {
      icon: Eye,
      title: 'Eye Makeup Specialization',
      description: 'Intricate eye artistry including cut crease, smoky eyes, and more.',
      bgImage: 'https://images.unsplash.com/photo-1583012279653-1575246476c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBleWVzaGFkb3clMjBwYWxldHRlfGVufDF8fHx8MTc2Nzk3MzE0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      glowColor: 'rgba(182,141,64,0.10)'
    },
    {
      icon: Camera,
      title: 'Model / Photoshoot Makeup',
      description: 'High-definition, camera-ready makeup for professional shoots.',
      bgImage: 'https://images.unsplash.com/photo-1600637070413-0798fafbb6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWtldXAlMjBhcnRpc3R8ZW58MXx8fHwxNzY3OTcxMTE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      glowColor: 'rgba(212,175,55,0.12)'
    },
    {
      icon: Calendar,
      title: 'Festival & Occasion Makeup',
      description: 'Festive and celebratory looks for all special occasions.',
      price: 'Starting from ₹2,500',
      bgImage: 'https://images.unsplash.com/photo-1582576192532-06353147fcbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBnbGFtfGVufDF8fHx8MTc2Nzk3MzE0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      glowColor: 'rgba(238,217,182,0.10)'
    },
    {
      icon: Scissors,
      title: 'Hairstyling Services',
      description: 'Complete your look with professional hairstyling services.',
    
      bgImage: 'https://images.unsplash.com/photo-1633443362894-227325b61ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtb3JvdXMlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Nzk3MzE0NXww&ixlib=rb-4.1.0&q=80&w=1080',
      glowColor: 'rgba(182,141,64,0.12)'
    }
  ];

  return (
    <section id="services" className="py-20 bg-[var(--obsidian-black)] relative">
      {/* Subtle gold glow background */}
      <div className="absolute inset-0 bg-gradient-radial from-[var(--royal-gold)]/5 via-transparent to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-xl text-[var(--champagne-gold)] max-w-2xl mx-auto">
            Customized makeup artistry for every occasion
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--burnished-gold)] via-[var(--royal-gold)] to-[var(--burnished-gold)] mx-auto mt-6 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative bg-[var(--jet-black)] rounded-lg p-8 shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-500 border border-[var(--royal-gold)]/20 hover:border-[var(--royal-gold)]/50 overflow-hidden group"
            >
              {/* Background Treatment - Blurred image + Gradient Glow + Texture */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {/* Blurred makeup imagery */}
                <div className="absolute inset-0 blur-[30px] opacity-15">
                  <ImageWithFallback 
                    src={service.bgImage}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Organic glow shapes */}
                <div 
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-10 transition-all duration-700 group-hover:opacity-15"
                  style={{ background: service.glowColor }}
                ></div>
                <motion.div 
                  className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full blur-3xl opacity-10"
                  style={{ background: service.glowColor }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    x: [0, 10, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
                
                {/* Fine grain texture */}
                <div 
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                    mixBlendMode: 'overlay'
                  }}
                ></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <motion.div 
                  className="w-14 h-14 mb-5 bg-gradient-to-br from-[var(--royal-gold)] to-[var(--burnished-gold)] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-7 h-7 text-[var(--obsidian-black)]" strokeWidth={2} />
                </motion.div>
                
                <h4 className="mb-3">{service.title}</h4>
                <p className="text-[var(--velvet-ivory)] mb-4 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-[var(--royal-gold)] mb-5 font-semibold">
                  {service.price}
                </p>
                
                <motion.button 
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 border-2 border-[var(--royal-gold)] text-[var(--royal-gold)] rounded-lg hover:bg-[var(--royal-gold)] hover:text-[var(--obsidian-black)] transition-all duration-300 font-semibold"
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}