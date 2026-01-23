import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Vidhi Chouhan, Pratapgarh',
      occasion: 'Bridal Makeup',
      rating: 5,
      text: 'Boht pyare lage sare ke sare mkup thanku so much archi ji jesa mene socha tha vesa hi mera mkup huwa he. Or sbse jyada acha to mko apke nature lga jitna softly ap bat krte ho smjate ho samne wale ki tension to uhi km ho jati h. You were my most fav bride.',
      image: 'https://images.unsplash.com/photo-1722340321190-1c7b7384e89b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBlbGVnYW50fGVufDF8fHx8MTc2NTA4MjM4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Khushboo Patidar, Mumbai',
      occasion: 'Bridal Makeup',
      rating: 5,
      text: 'Thank you Archi, for your incredible support and amazing makeup skills. You are not just a great makeup artist but also a very supportive person in every situation. You made all my days so special and gave me so much confidence. I\'m truly grateful for everything!',
      image: 'https://images.unsplash.com/photo-1762074973099-78f2169c9177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtb3JvdXMlMjBwYXJ0eSUyMG1ha2V1cHxlbnwxfHx8fDE3NjUwOTM0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Shikha Sharma, Mandsaur',
      occasion: 'Bridal Makeup',
      rating: 5,
      text: 'HI Archi, you did an absolutely amazing job! From the consultation to the final look, you truly listened to what I wanted and executed it perfectly. Your attention to detail, professionalism, and skill were top-notch. My makeup lasted all day and looked flawless in every photo. I felt confident and beautiful, and I can\'t recommend you enough!',
      image: 'https://images.unsplash.com/photo-1738684033377-eb02299c1d6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwZ2xhbSUyMG1ha2V1cCUyMG5hdHVyYWx8ZW58MXx8fHwxNzY1MDkzNDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Charmi Jain, Indore',
      occasion: 'Wedding Functions',
      rating: 5,
      text: 'Hey Archie! Firstly, a big big thank you for making me feel like the most beautiful version of myself on all my wedding functions! Each and every makeup look was honestly so on point – from the subtle glam to the full bridal look, everything was exactly how I had imagined (maybe even better). You really understood my vibe and made sure I was comfortable throughout. Everyone kept complimenting the looks – especially my bridal day look! I got so many "wow you look stunning" and "who\'s your makeup artist?" comments. More than just the makeup, I really appreciated your calm and positive energy. It helped me stay relaxed during the chaos. You were punctual, professional, yet so friendly – it felt like having a friend around. Thank you for being such an important part of my big day. I\'m honestly so happy I chose you! Would 1000% recommend you to every bride-to-be!',
      image: 'https://images.unsplash.com/photo-1553540751-988bd7918c7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwbWFrZXVwJTIwYnJpZGV8ZW58MXx8fHwxNzY1MDM1NzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Ayushi Songara, Mandsaur',
      occasion: 'Wedding Makeup',
      rating: 5,
      text: 'Such a lovely experience thankyou archi di for this stunning flawless and gorgeous makeup and not only that, but also for taking care of me and me and my family is so impressed by your sweet and caring nature, you made feel special in every way.',
      image: 'https://images.unsplash.com/photo-1585261940669-fc2a2e770ad3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBtYWtldXAlMjBjbG9zZXVwfGVufDF8fHx8MTc2NTA5MzQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Shruti Sharma, Mandsaur',
      occasion: 'Bridal Makeup',
      rating: 5,
      text: 'Sorry for telling you a little late, but Archi, you are truly the best. I really loved your makeup. It looked completely natural and suited me perfectly. The pheras look was the best of all. My entire family praised the makeup a lot. Thank you so much!',
      image: 'https://images.unsplash.com/photo-1653221876213-2c765b7ade25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYWtldXAlMjBnbGFtb3JvdXMlMjB3b21hbnxlbnwxfHx8fDE3NjUwOTM0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Nilam Porwal, Jaora',
      occasion: 'Special Occasion',
      rating: 5,
      text: 'Thank you so much for the gorgeous makeup look, you really made my day. Seriously, thank you for the amazing makeup, it\'s stunning and you totally brightened my day. "I\'m so grateful for this gorgeous look, you absolutely made my day Thanks again.',
      image: 'https://images.unsplash.com/photo-1722340321190-1c7b7384e89b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtYWtldXAlMjBlbGVnYW50fGVufDF8fHx8MTc2NTA4MjM4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Diksha Nanore, Indore',
      occasion: 'Makeup Session',
      rating: 5,
      text: 'Thankyou Archi ❤️ You\'re brilliant at what you do. All the makeup looks were totally amazing and breathtaking ❤️',
      image: 'https://images.unsplash.com/photo-1762074973099-78f2169c9177?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFtb3JvdXMlMjBwYXJ0eSUyMG1ha2V1cHxlbnwxfHx8fDE3NjUwOTM0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Mahi Soni, Agar',
      occasion: 'Special Day',
      rating: 5,
      text: 'It was absolutely best day of my life, thank you so so so much for making me feel beautiful for the first time in my life! You honestly surpassed any of my dreams of how I\'d look. Thank you! 💋🥰',
      image: 'https://images.unsplash.com/photo-1738684033377-eb02299c1d6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwZ2xhbSUyMG1ha2V1cCUyMG5hdHVyYWx8ZW58MXx8fHwxNzY1MDkzNDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-[var(--obsidian-black)] relative">
      {/* Subtle gold glow background */}
      <div className="absolute inset-0 bg-gradient-radial from-[var(--royal-gold)]/5 via-transparent to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4">Client Love</h2>
          <p className="text-xl text-[var(--champagne-gold)] max-w-2xl mx-auto">
            Hear what our beautiful clients have to say
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--burnished-gold)] via-[var(--royal-gold)] to-[var(--burnished-gold)] mx-auto mt-6 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
        </div>

        {/* Featured Testimonial Slider with AnimatePresence */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-[var(--jet-black)] rounded-lg p-10 md:p-16 shadow-[0_0_40px_rgba(212,175,55,0.2)] border border-[var(--royal-gold)]/30 relative"
              >
                <Quote className="w-16 h-16 text-[var(--royal-gold)]/20 absolute top-6 right-6" />
                
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                      <Star className="w-6 h-6 text-[var(--royal-gold)] fill-current" />
                    </motion.div>
                  ))}
                </div>
                
                <p className="text-[var(--velvet-ivory)] text-xl md:text-2xl mb-8 leading-relaxed italic text-center">
                  "<span className="text-[var(--champagne-gold)]">{currentTestimonial.text}</span>"
                </p>
                
                <div className="text-center border-t border-[var(--royal-gold)]/30 pt-6">
                  <h5 className="mb-1">{currentTestimonial.name}</h5>
                  <p className="text-[var(--champagne-gold)]">{currentTestimonial.occasion}</p>
                </div>

                {/* Navigation Arrows */}
                <motion.button 
                  onClick={prevTestimonial}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-[var(--royal-gold)] to-[var(--burnished-gold)] rounded-full flex items-center justify-center hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-[var(--obsidian-black)]" />
                </motion.button>
                <motion.button 
                  onClick={nextTestimonial}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-[var(--royal-gold)] to-[var(--burnished-gold)] rounded-full flex items-center justify-center hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-[var(--obsidian-black)]" />
                </motion.button>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[var(--royal-gold)] w-8 shadow-[0_0_10px_rgba(212,175,55,0.5)]' 
                      : 'bg-[var(--royal-gold)]/30 hover:bg-[var(--royal-gold)]/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* All Testimonials Grid with Editorial Reveal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-[var(--jet-black)] rounded-lg p-8 shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:shadow-[0_0_35px_rgba(212,175,55,0.3)] transition-all duration-300 relative border border-[var(--royal-gold)]/20 hover:border-[var(--royal-gold)]/40 cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <Quote className="w-10 h-10 text-[var(--royal-gold)]/30 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[var(--royal-gold)] fill-current" />
                ))}
              </div>
              
              <p className="text-[var(--velvet-ivory)] mb-6 leading-relaxed italic line-clamp-4">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-[var(--royal-gold)]/30 pt-4">
                <h5 className="mb-1">{testimonial.name}</h5>
                <p className="text-sm text-[var(--champagne-gold)]">{testimonial.occasion}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}