import { Award, Star, Heart, Users, Palette, Zap } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: '4+ Years Experience',
      description: 'Professional makeup artistry with extensive training and industry experience'
    },
    {
      icon: Star,
      title: 'Certified Professional',
      description: 'Accredited makeup artist with specialized certifications in bridal and editorial makeup'
    },
    {
      icon: Palette,
      title: 'Premium Products',
      description: 'Only the finest international brands - MAC, Huda Beauty, Bobbi Brown, and more'
    },
    {
      icon: Users,
      title: '800+ Happy Clients',
      description: 'Trusted by brides, models, and celebrities for their most important moments'
    },
    {
      icon: Heart,
      title: 'Personalized Approach',
      description: 'Every look is customized to enhance your unique features and match your vision'
    },
    {
      icon: Zap,
      title: 'Long-Lasting Results',
      description: 'HD-quality makeup that stays flawless from morning ceremonies to late-night parties'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-[var(--jet-black)] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial from-[var(--royal-gold)]/5 via-transparent to-transparent opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--royal-gold)]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--burnished-gold)]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4">Why Choose Glitz & Glam</h2>
          <p className="text-xl text-[var(--champagne-gold)] max-w-2xl mx-auto">
            Your beauty deserves the best - here's what sets us apart
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--burnished-gold)] via-[var(--royal-gold)] to-[var(--burnished-gold)] mx-auto mt-6 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-[var(--obsidian-black)] rounded-lg p-8 border border-[var(--royal-gold)]/20 hover:border-[var(--royal-gold)]/50 shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:shadow-[0_0_35px_rgba(212,175,55,0.25)] transition-all duration-300 hover:transform hover:scale-105 relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--royal-gold)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 mb-5 bg-gradient-to-br from-[var(--royal-gold)] to-[var(--burnished-gold)] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-[var(--obsidian-black)]" strokeWidth={2} />
                </div>
                
                <h4 className="mb-3">{feature.title}</h4>
                <p className="text-[var(--velvet-ivory)] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Gold Corner Accents */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[var(--royal-gold)] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[var(--royal-gold)] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Social Proof Bar */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-['Playfair_Display'] text-[var(--royal-gold)] mb-2 group-hover:scale-110 transition-transform duration-300">800+</div>
              <p className="text-[var(--champagne-gold)]">Happy Clients</p>
            </div>
            <div className="group">
              <div className="text-5xl font-['Playfair_Display'] text-[var(--royal-gold)] mb-2 group-hover:scale-110 transition-transform duration-300">4+</div>
              <p className="text-[var(--champagne-gold)]">Years Experience</p>
            </div>
            <div className="group">
              <div className="text-5xl font-['Playfair_Display'] text-[var(--royal-gold)] mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
              <p className="text-[var(--champagne-gold)]">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
