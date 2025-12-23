import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="relative py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80"
          alt="Team meeting"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4361ee]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#ff6b6b]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4361ee]/10 border border-[#4361ee]/20 mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#4361ee]" />
          <span className="text-sm text-[#4361ee]">Free Strategy Session</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          Ready to Transform Your
          <br />
          <span className="bg-gradient-to-r from-[#4361ee] via-[#7c3aed] to-[#ff6b6b] bg-clip-text text-transparent">
            Social Media Presence?
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Book your free content audit today. We'll review your current social media, 
          identify opportunities, and show you exactly how we can turn your events into 
          weeks of engaging content.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#4361ee] to-[#7c3aed] hover:opacity-90 text-white px-8 py-6 text-lg rounded-full group"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Book Free Audit
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
          >
            View Pricing
          </Button>
        </motion.div>

        {/* Trust message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-gray-500 text-sm"
        >
          No commitment required. Just 30-45 minutes of your time for valuable insights.
        </motion.p>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 rounded-3xl bg-white/[0.03] border border-white/10"
        >
          <blockquote className="text-lg md:text-xl text-gray-300 italic">
            "If you chase two rabbits, you catch neither. This blueprint makes sure 
            we're chasing one really important rabbit — and with the right strategy, 
            we're poised to catch it."
          </blockquote>
          <p className="mt-4 text-[#4361ee] font-medium">— ICAN Film Team</p>
        </motion.div>
      </div>
    </section>
  );
}
