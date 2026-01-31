import { Instagram, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function InstagramFeed() {
  const posts = [
    {
      image: "/b1.jpeg",
      likes: "2.3k"
    },
    {
      image: "/b2.JPG",
      likes: "1.8k"
    },
    {
      image: "/b3.PNG",
      likes: "3.1k"
    },
    {
      image: "/b4.jpeg",
      likes: "2.7k"
    },
    {
      image: "/b5.jpeg",
      likes: "4.2k"
    },
    {
      image: "/b6.jpeg",
      likes: "3.5k"
    }
  ];

  return (
    <section id="instagram" className="py-20 bg-[var(--jet-black)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-[var(--royal-gold)]" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl break-words">Follow @glitzandglam_by_archi</h2>
          </div>
          <p className="text-xl text-[var(--champagne-gold)] max-w-2xl mx-auto">
            Stay updated with our latest looks and transformations
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--burnished-gold)] via-[var(--royal-gold)] to-[var(--burnished-gold)] mx-auto mt-6 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto mb-10">
          {posts.map((post, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 cursor-pointer aspect-square border border-[var(--royal-gold)]/20">
              <ImageWithFallback 
                src={post.image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian-black)] via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center gap-2 text-[var(--royal-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-6 h-6 fill-current" />
                  <span className="font-semibold">{post.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://www.instagram.com/glitzandglam_by_archi/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--royal-gold)] to-[var(--burnished-gold)] text-[var(--obsidian-black)] rounded-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}