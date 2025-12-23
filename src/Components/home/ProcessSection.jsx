import React from 'react';
import { motion } from 'framer-motion';
import { Search, MessageSquare, FileCheck, Rocket, BarChart, Heart } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description: 'We identify your business as a perfect fit and reach out with a personalized value proposition.',
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'Free Audit',
    description: 'A 30-45 minute session where we review your social presence and share 3-5 actionable content ideas.',
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Custom Proposal',
    description: 'Within 48 hours, you receive a tailored proposal showing exactly how we\'ll transform your content.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Kickoff & Filming',
    description: 'We schedule your first content day, capture everything, and handle all post-production.',
  },
  {
    number: '05',
    icon: BarChart,
    title: 'Content Delivery',
    description: 'Receive edited videos, photos, captions, and a posting calendar. Your month of content is ready.',
  },
  {
    number: '06',
    icon: Heart,
    title: 'Ongoing Success',
    description: 'Monthly reports, strategy refinements, and continuous content creation keep your brand growing.',
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-32 bg-[#0f0f18] overflow-hidden" id="process">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
            alt="Process"
            className="w-full h-full object-cover"
          />
        </div>
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
          <span className="text-[#4361ee] font-medium tracking-wider uppercase text-sm">Our Process</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            From First Contact to
            <span className="bg-gradient-to-r from-[#4361ee] to-[#ff6b6b] bg-clip-text text-transparent"> Lasting Results</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our systematic approach takes you from overwhelmed business owner to consistent content machine.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#4361ee]/30 transition-all duration-500">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-gradient-to-r from-[#4361ee] to-[#7c3aed] flex items-center justify-center text-white font-bold text-sm">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-[#4361ee]/10 transition-colors">
                  <step.icon className="w-6 h-6 text-[#4361ee]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>

                {/* Connection line (hidden on last items of each row) */}
                {index % 3 !== 2 && index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
