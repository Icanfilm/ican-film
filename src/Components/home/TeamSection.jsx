import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Camera, Scissors, Share2, Handshake } from 'lucide-react';

const roles = [
  {
    icon: Lightbulb,
    title: 'Creative Director',
    description: 'Leads strategy, ensures quality, and maintains client relationships as the main point of contact.',
    color: 'from-[#4361ee] to-[#7c3aed]',
  },
  {
    icon: Camera,
    title: 'Content Producer',
    description: 'Captures videos and photos on-site, skilled in both videography and photography for social-ready content.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Scissors,
    title: 'Content Editor',
    description: 'Transforms raw footage into polished videos, graphics, and posts while maintaining brand consistency.',
    color: 'from-[#ff6b6b] to-orange-500',
  },
  {
    icon: Share2,
    title: 'Social Media Manager',
    description: 'Handles scheduling, posting, and analytics tracking to ensure consistent execution of content calendars.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Handshake,
    title: 'Business Development',
    description: 'Drives outreach, networking, and partnerships to grow our client base and industry presence.',
    color: 'from-amber-500 to-yellow-500',
  },
];

export default function TeamSection() {
  return (
    <section className="relative py-32 bg-[#0f0f18]" id="team">
      {/* Background image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
          alt="Team collaboration"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#4361ee] font-medium tracking-wider uppercase text-sm">Our Team</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Specialists in
            <span className="bg-gradient-to-r from-[#4361ee] to-[#ff6b6b] bg-clip-text text-transparent"> Every Role</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A dedicated team covering strategy, production, editing, and distribution — 
            your complete content marketing department.
          </p>
        </motion.div>

        {/* Team roles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative ${index === 4 ? 'lg:col-start-2' : ''}`}
            >
              <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${role.color} flex items-center justify-center flex-shrink-0`}>
                    <role.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{role.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{role.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-[#4361ee]/10 to-[#7c3aed]/10 border border-[#4361ee]/20">
            <p className="text-xl md:text-2xl text-white font-medium">
              "We're not just a camera crew — we're your 
              <span className="text-[#4361ee]"> content marketing partner</span>."
            </p>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Part production studio, part social media strategist. We fill the gap many 
              small businesses face due to limited time and marketing expertise.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
