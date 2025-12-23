import React from 'react';
import { motion } from 'framer-motion';
import { Video, Lightbulb, TrendingUp, Calendar, Zap, Award, Target, Shield } from 'lucide-react';

const valueProps = [
  {
    icon: Video,
    title: 'Turn Events into Assets',
    description: 'Every event or live experience produces a wealth of valuable content. We capture it and extend the impact for weeks or months.',
    stat: '300%',
    statLabel: 'reach boost from repurposing',
  },
  {
    icon: TrendingUp,
    title: 'Proven ROI',
    description: '89% of marketers say video delivers strong ROI and drives website traffic. We make video content accessible and systematic.',
    stat: '89%',
    statLabel: 'of marketers see video ROI',
  },
  {
    icon: Calendar,
    title: 'Consistency Builds Trust',
    description: 'A robust, regular online presence builds audience trust and stops you from being forgotten. We make consistency effortless.',
    stat: '3x/week',
    statLabel: 'posting frequency achieved',
  },
  {
    icon: Zap,
    title: 'Time Multiplication',
    description: 'One day of filming yields a month\'s worth of marketing. An efficient approach for busy business owners.',
    stat: '20+',
    statLabel: 'posts from one content day',
  },
];

const differentiators = [
  {
    icon: Award,
    title: 'Dual Positioning',
    points: [
      'Content production studio quality',
      'Social media strategy expertise',
      'Rare combination in Calgary SMB market',
    ],
  },
  {
    icon: Target,
    title: 'Problem-Solution Fit',
    points: [
      'Address time scarcity pain point',
      'Remove marketing overwhelm',
      'Enable business owners to focus on core',
    ],
  },
  {
    icon: Shield,
    title: 'Investment, Not Expense',
    points: [
      'Amplify existing business activities',
      'Less than part-time employee cost',
      'Measurable engagement improvements',
    ],
  },
];

export default function ValuePropositionSection() {
  return (
    <section className="relative py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4361ee]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff6b6b]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#4361ee] font-medium tracking-wider uppercase text-sm">Our Value</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Why Choose
            <span className="bg-gradient-to-r from-[#4361ee] to-[#ff6b6b] bg-clip-text text-transparent"> ICAN Film</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We're not just another marketing service. We're a strategic partner that multiplies 
            the value of what you're already doing.
          </p>
        </motion.div>

        {/* Value propositions grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-[#4361ee]/30 transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#4361ee] to-[#7c3aed] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <prop.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Stat badge */}
                  <div className="text-right">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#4361ee] to-[#7c3aed] bg-clip-text text-transparent">
                      {prop.stat}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{prop.statLabel}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{prop.title}</h3>
                <p className="text-gray-400 leading-relaxed">{prop.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Our Competitive Edge
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-full p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#4361ee] to-[#7c3aed] flex items-center justify-center mb-5">
                    <diff.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-4">{diff.title}</h4>
                  
                  <ul className="space-y-3">
                    {diff.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4361ee] mt-2 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final value statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block p-10 rounded-3xl bg-gradient-to-r from-[#4361ee]/10 to-[#7c3aed]/10 border border-[#4361ee]/20 max-w-4xl">
            <Lightbulb className="w-12 h-12 text-[#4361ee] mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              We Amplify What You're Already Doing
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Most businesses don't need more work – they need someone to help them leverage 
              what they're already doing. That's where we come in. We're not adding to your 
              plate; we're <span className="text-[#4361ee] font-semibold">multiplying the value of what's already on it</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
