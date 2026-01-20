import { Award, Sparkles, Star, Palette } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const features = [
    {
      icon: Star,
      title: '4+ Years',
      subtitle: 'Professional Experience'
    },
    {
      icon: Award,
      title: 'Certified',
      subtitle: 'Professional Training'
    },
    {
      icon: Palette,
      title: 'Premium',
      subtitle: 'Quality Products'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[var(--jet-black)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-8 h-8 text-[var(--royal-gold)]" />
          </div>
          <h2 className="mb-4">About the Artist</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--burnished-gold)] via-[var(--royal-gold)] to-[var(--burnished-gold)] mx-auto shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.3)] border border-[var(--royal-gold)]/20">
              <ImageWithFallback 
                src="/archi.jpg"
                alt="Archi - Professional Makeup Artist"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian-black)] via-transparent to-transparent opacity-60"></div>
              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[var(--royal-gold)]"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[var(--royal-gold)]"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="text-lg leading-relaxed mb-8 text-[var(--velvet-ivory)]">
              Glitz & Glam by Archi is a professional makeup artistry brand specializing in flawless, glamorous, and high-definition makeup looks. With a passion for enhancing natural beauty and creating unforgettable transformations, Archi delivers customized makeup for brides, parties, pre-wedding shoots, and all special occasions.
            </p>
            <p className="text-lg leading-relaxed mb-10 text-[var(--champagne-gold)]">
              Every look is crafted with precision, creativity, and premium-quality techniques.
            </p>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-[var(--royal-gold)] to-[var(--burnished-gold)] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                    <feature.icon className="w-8 h-8 text-[var(--obsidian-black)]" strokeWidth={2} />
                  </div>
                  <h5 className="mb-1">{feature.title}</h5>
                  <p className="text-sm text-[var(--mink-taupe)]">{feature.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}