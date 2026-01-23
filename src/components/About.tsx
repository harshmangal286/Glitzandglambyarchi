import { Award, Sparkles, Star, Palette } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const features = [
    { icon: Star, title: '4+ Years', subtitle: 'Professional Experience' },
    { icon: Award, title: 'Certified', subtitle: 'Professional Training' },
    { icon: Palette, title: 'Premium', subtitle: 'Quality Products' }
  ];

  return (
    <section id="about" className="py-20 bg-[var(--jet-black)]">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-8 h-8 text-[var(--royal-gold)]" />
          </div>
          <h2 className="mb-4">About the Artist</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[var(--burnished-gold)] via-[var(--royal-gold)] to-[var(--burnished-gold)] shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
        </div>

        {/* Images – PERFECTLY ALIGNED */}
        <div className="grid md:grid-cols-2 gap-14 mb-16 items-stretch justify-items-center">

          {/* CARD 1 */}
          <div className="flex flex-col items-center w-full max-w-[358px]">
            {/* Frame */}
            <div className="relative w-full aspect-square rounded-full p-[3px]
              bg-gradient-to-br from-[var(--royal-gold)] via-[var(--champagne-gold)] to-[var(--burnished-gold)]
              shadow-[0_0_35px_rgba(212,175,55,0.35)]">

              <div className="relative w-full h-full rounded-full overflow-hidden
                bg-[var(--obsidian-black)] border border-[var(--royal-gold)]/50">

                <ImageWithFallback
                  src="/archi.PNG"
                  alt="Archi Dhanotiya - Professional Makeup Artist"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Label */}
            <div className="mt-8 w-full text-center bg-gradient-to-r from-[var(--royal-gold)] to-[var(--burnished-gold)]
              rounded-lg py-3 shadow-lg h-[76px] flex flex-col justify-center">
              <p className="text-[var(--obsidian-black)] font-bold text-lg">
                Archi Dhanotiya
              </p>
              <p className="text-sm text-[var(--obsidian-black)]">
                Founder, Glitz & Glam
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col items-center w-full max-w-[358px]">
            {/* Frame – IDENTICAL STRUCTURE */}
            <div className="relative w-full aspect-square rounded-full p-[3px]
              bg-gradient-to-br from-[var(--royal-gold)] via-[var(--champagne-gold)] to-[var(--burnished-gold)]
              shadow-[0_0_35px_rgba(212,175,55,0.35)]">

              <div className="relative w-full h-full rounded-full overflow-hidden
                bg-[var(--obsidian-black)] border border-[var(--royal-gold)]/50">

                <ImageWithFallback
                  src="/mother.PNG"
                  alt="Anita Dhanotiya - Founder Touch & Glow"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Label – SAME HEIGHT */}
            <div className="mt-8 w-full text-center bg-gradient-to-r from-[var(--royal-gold)] to-[var(--burnished-gold)]
              rounded-lg py-3 shadow-lg h-[76px] flex flex-col justify-center">
              <p className="text-[var(--obsidian-black)] font-bold text-lg">
                Anita Dhanotiya
              </p>
              <p className="text-sm text-[var(--obsidian-black)]">
                Founder, Touch & Glow
              </p>
            </div>
          </div>
        </div>

        {/* Content - Centered Below */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Individual Introductions */}
          <div className="mb-12 space-y-8">
            {/* Archi's Introduction */}
            <div className="bg-[var(--obsidian-black)]/40 border border-[var(--royal-gold)]/20 rounded-lg p-8 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <h3 className="text-2xl mb-4 text-[var(--royal-gold)]">Meet Archi Dhanotiya</h3>
              <p className="text-lg leading-relaxed text-[var(--velvet-ivory)] mb-4">
                Archi Dhanotiya is a passionate makeup artist with over 4 years of professional experience in creating stunning, 
                personalized looks that celebrate each client's unique beauty. Growing up surrounded by the artistry and dedication 
                of her mother's renowned salon, <span className="text-[var(--champagne-gold)] font-semibold">Touch & Glow Beauty Salon</span>, 
                Archi developed an early appreciation for the transformative power of makeup and beauty services.
              </p>
             
              <p className="text-lg leading-relaxed text-[var(--champagne-gold)]">
                <span className="text-[var(--royal-gold)] font-semibold">Glitz & Glam by Archi</span> represents her vision 
                of bringing glamour, sophistication, and premium artistry to every client, ensuring they look and feel absolutely radiant.
              </p>
            </div>

            {/* Anita's Introduction */}
            <div className="bg-[var(--obsidian-black)]/40 border border-[var(--royal-gold)]/20 rounded-lg p-8 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <h3 className="text-2xl mb-4 text-[var(--royal-gold)]">The Legacy of Anita Dhanotiya</h3>
              <p className="text-lg leading-relaxed text-[var(--velvet-ivory)] mb-4">
                Anita Dhanotiya is the visionary founder of <span className="text-[var(--champagne-gold)] font-semibold">Touch & Glow Beauty Salon</span> With 10+ years of experience, 
                an established name in the beauty industry known for excellence, innovation, and unwavering commitment to client satisfaction. 
                With decades of experience, Anita has built a reputation for delivering world-class beauty treatments and creating a welcoming 
                space where clients feel pampered and valued.
              </p>
              <p className="text-lg leading-relaxed text-[var(--velvet-ivory)] mb-4">
                Her salon offers comprehensive beauty services including advanced skincare treatments, hair styling, spa therapies, 
                and professional makeup.
              </p>
              <p className="text-lg leading-relaxed text-[var(--champagne-gold)]">
                As a mentor and inspiration to Archi, Anita's expertise and business acumen have shaped the foundation upon which 
                Glitz & Glam thrives, creating a powerful mother-daughter legacy in the beauty industry.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-[var(--obsidian-black)]/40 border border-[var(--royal-gold)]/20 rounded-lg p-6 text-center shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                <div className="flex justify-center mb-4">
                  <feature.icon className="w-12 h-12 text-[var(--royal-gold)]" />
                </div>
                <h4 className="text-xl mb-2 text-[var(--royal-gold)]">{feature.title}</h4>
                <p className="text-md text-[var(--velvet-ivory)]">{feature.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Closing Note */}
          <div className="text-lg leading-relaxed text-[var(--velvet-ivory)] max-w-3xl mx-auto">
            <p className="mb-4">
              At <span className="text-[var(--royal-gold)] font-semibold">Glitz & Glam</span>, we believe in the power of beauty to transform, empower, and inspire. 
              Our passion is to provide each client with an exceptional experience that exceeds expectations and celebrates individuality.
            </p>
            <p>
              Join us on a journey of beauty and self-discovery, and let us be a part of your story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}