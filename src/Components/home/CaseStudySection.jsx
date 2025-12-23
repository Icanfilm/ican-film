import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Calendar, Video, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CaseStudySection() {
  return (
    <section className="relative py-32 bg-[#0f0f18] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4361ee]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#4361ee] font-medium tracking-wider uppercase text-sm">Featured Case Study</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            From One Event to
            <span className="bg-gradient-to-r from-[#4361ee] to-[#ff6b6b] bg-clip-text text-transparent"> 30 Days of Content</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
                alt="Retail VIP Event"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Overlay badge */}
              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20">
                <span className="text-white font-semibold">Boutique Retail Store</span>
              </div>
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-gradient-to-br from-[#4361ee] to-[#7c3aed] border border-white/20 shadow-2xl"
            >
              <div className="text-4xl font-bold text-white mb-1">30%</div>
              <div className="text-white/90 text-sm">Engagement Increase</div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {/* Challenge */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">The Challenge</h3>
                <p className="text-gray-400 leading-relaxed">
                  A local boutique hosted a VIP shopping night but had no plan to leverage 
                  the event for ongoing marketing. Previous events generated buzz during 
                  the night but were quickly forgotten.
                </p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Our Solution</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  We filmed the 3-hour VIP event, capturing the atmosphere, customer 
                  interactions, and behind-the-scenes moments. Then transformed the 
                  footage into a comprehensive content library:
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.05] border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Video className="w-5 h-5 text-[#4361ee]" />
                      <span className="text-2xl font-bold text-white">4</span>
                    </div>
                    <p className="text-sm text-gray-400">Video Reels</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.05] border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="w-5 h-5 text-[#4361ee]" />
                      <span className="text-2xl font-bold text-white">8</span>
                    </div>
                    <p className="text-sm text-gray-400">Testimonials</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.05] border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <ImageIcon className="w-5 h-5 text-[#4361ee]" />
                      <span className="text-2xl font-bold text-white">12</span>
                    </div>
                    <p className="text-sm text-gray-400">Product Photos</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.05] border border-white/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Calendar className="w-5 h-5 text-[#4361ee]" />
                      <span className="text-2xl font-bold text-white">5</span>
                    </div>
                    <p className="text-sm text-gray-400">Story Highlights</p>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">The Results</h3>
                <ul className="space-y-3">
                  {[
                    '30% increase in Instagram engagement',
                    'Content lasted entire month (vs. 2 days previously)',
                    'Measurable foot traffic from social posts',
                    'Customer testimonials boosted credibility',
                    'Client requested ongoing monthly retainer',
                  ].map((result, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#4361ee] to-[#7c3aed] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <TrendingUp className="w-3 h-3 text-white" />
                      </div>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#4361ee] to-[#7c3aed] hover:opacity-90 text-white px-8 py-6 rounded-full"
                >
                  See More Case Studies
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
