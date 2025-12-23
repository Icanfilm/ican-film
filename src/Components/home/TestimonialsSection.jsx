import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Owner, The Daily Grind Cafe',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    content: 'ICAN Film transformed our social media presence completely. We used to struggle posting once a week, now we have fresh content 3-4 times weekly. Our engagement has increased 40% and we\'re seeing more foot traffic directly from Instagram.',
    result: '40% increase in engagement',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Director, Calgary Tech Association',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    content: 'We host monthly networking events and before ICAN, the content just disappeared after each event. Now one event gives us a month of promotional material. The ROI is incredible - we\'ve seen 30% increase in event attendance.',
    result: '30% more event attendance',
    rating: 5,
  },
  {
    name: 'Jennifer Martinez',
    role: 'Manager, FitCore Studio',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    content: 'As a fitness studio, showing our energy and community was always a challenge. ICAN captured the atmosphere perfectly. Their monthly content keeps our feed alive with transformation stories, class highlights, and member testimonials. Worth every penny.',
    result: '25+ new members from social',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-32 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#4361ee] font-medium tracking-wider uppercase text-sm">Client Success Stories</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Real Results from
            <span className="bg-gradient-to-r from-[#4361ee] to-[#ff6b6b] bg-clip-text text-transparent"> Real Businesses</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See how Calgary businesses are transforming their social media presence with our content systems.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-[#4361ee]/30 transition-all relative overflow-hidden">
                {/* Quote icon */}
                <Quote className="absolute -top-2 -right-2 w-24 h-24 text-[#4361ee] opacity-5" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 leading-relaxed mb-6 relative z-10 italic">
                  "{testimonial.content}"
                </p>

                {/* Result badge */}
                <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#4361ee]/20 to-[#7c3aed]/20 border border-[#4361ee]/30 mb-6">
                  <span className="text-[#4361ee] font-semibold text-sm">{testimonial.result}</span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#4361ee]/30"
                  />
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
