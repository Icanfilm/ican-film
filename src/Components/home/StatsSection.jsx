import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '89%', label: 'of marketers say video delivers strong ROI' },
  { value: '300%', label: 'reach boost from content repurposing' },
  { value: '73%', label: 'of SMBs lack marketing confidence' },
  { value: '3x', label: 'weekly posts from one content day' },
];

export default function StatsSection() {
  return (
    <section className="relative py-24 bg-[#0f0f18] border-y border-white/5">
      {/* Background accent */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
          alt="Analytics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f18] via-[#0f0f18]/95 to-[#0f0f18]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#4361ee] to-[#7c3aed] bg-clip-text text-transparent mb-3">
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
