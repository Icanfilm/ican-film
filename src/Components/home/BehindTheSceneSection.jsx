import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Film, Palette, Zap } from 'lucide-react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80',
    title: 'Professional Filming',
    description: 'Cinema-quality equipment',
  },
  {
    url: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=600&q=80',
    title: 'On-Site Production',
    description: 'We come to you',
  },
  {
    url: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80',
    title: 'Expert Editing',
    description: 'Polished final product',
  },
  {
    url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
    title: 'Strategic Planning',
    description: 'Data-driven approach',
  },
];

const process = [
  {
    icon: Camera,
    title: 'Capture',
    description: 'Professional on-site filming with cinema-grade equipment',
    color: 'from-[#4361ee] to-[#7c3aed]',
  },
  {
    icon: Palette,
    title: 'Edit',
    description: 'Transform raw footage into polished, branded content',
    color: 'from-[#7c3aed] to-[#ff6b6b]',
  },
  {
    icon: Film,
    title: 'Optimize',
    description: 'Format for each platform - Reels, TikTok, Stories, Posts',
    color: 'from-[#ff6b6b] to-orange-500',
  },
  {
    icon: Zap,
    title: 'Deliver',
    description: 'Content calendar + captions ready to post',
    color: 'from-orange-500 to-emerald-500',
  },
];

export default function BehindTheScenesSection() {
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
          <span className="text-[#4361ee] font-medium tracking-wider uppercase text-sm">Behind The Scenes</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            See How We
            <span className="bg-gradient-to-r from-[#4361ee] to-[#ff6b6b] bg-clip-text text-transparent"> Create Magic</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From planning to posting, we handle every step of your content creation journey.
          </p>
        </motion.div>

        {/* Image gallery */}
        <div className="grid md:grid-cols-4 gap-4 mb-20">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-square"
            >
              <img 
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                  <p className="text-gray-300 text-sm">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process flow */}
        <div className="grid md:grid-cols-4 gap-6">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Connection line */}
              {index < process.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent z-0" />
              )}

              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
