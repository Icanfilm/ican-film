import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Coffee, Dumbbell, Briefcase, Heart, Store, Users, TrendingDown, Clock, AlertCircle } from 'lucide-react';

const targetMarkets = [
  {
    icon: Coffee,
    name: 'Restaurants & Cafes',
    description: 'Showcase daily specials, events, and atmosphere',
    pain: 'Inconsistent posting, missed event opportunities',
  },
  {
    icon: Store,
    name: 'Boutique Retailers',
    description: 'Highlight products, new arrivals, behind-the-scenes',
    pain: 'Limited time for content creation',
  },
  {
    icon: Dumbbell,
    name: 'Fitness Studios',
    description: 'Document classes, transformations, community',
    pain: 'Struggle to show energy and atmosphere',
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    description: 'Build authority through seminars and expertise',
    pain: 'Difficulty translating expertise to social',
  },
  {
    icon: Heart,
    name: 'Nonprofits',
    description: 'Share impact stories and fundraising events',
    pain: 'Lack budget for marketing staff',
  },
  {
    icon: Building2,
    name: 'Industry Associations',
    description: 'Amplify conferences and member spotlights',
    pain: 'Events end without content leverage',
  },
];

const painPoints = [
  {
    icon: Clock,
    stat: '50%+',
    label: 'of small business owners spend',
    detail: 'less than 1 hour per day on marketing',
  },
  {
    icon: AlertCircle,
    stat: '44%',
    label: 'of SMB owners admit they',
    detail: 'procrastinate on social media tasks',
  },
  {
    icon: TrendingDown,
    stat: '73%',
    label: 'of small businesses',
    detail: 'aren\'t confident their marketing is effective',
  },
];

export default function TargetMarketSection() {
  return (
    <section className="relative py-32 bg-[#0f0f18] overflow-hidden" id="target-market">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80"
          alt="Small business"
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
          <span className="text-[#4361ee] font-medium tracking-wider uppercase text-sm">Who We Serve</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Built for Calgary's
            <span className="bg-gradient-to-r from-[#4361ee] to-[#ff6b6b] bg-clip-text text-transparent"> Small Businesses</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We target small and mid-sized businesses (5-50 employees) that lack in-house 
            marketing teams and struggle to maintain an active social media presence.
          </p>
        </motion.div>

        {/* Pain points statistics */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-red-500/5 to-orange-500/5 border border-red-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <div className="text-4xl font-bold text-red-400 mb-2">{point.stat}</div>
                  <p className="text-white font-medium text-sm mb-1">{point.label}</p>
                  <p className="text-gray-400 text-xs">{point.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Target markets grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetMarkets.map((market, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#4361ee]/30 transition-all">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#4361ee] to-[#7c3aed] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <market.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2">{market.name}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {market.description}
                </p>

                {/* Pain point */}
                <div className="pt-4 border-t border-white/5">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-500">
                      <span className="text-red-400 font-medium">Pain Point:</span> {market.pain}
                    </p>
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
          className="mt-20"
        >
          <div className="p-10 rounded-3xl bg-gradient-to-r from-[#4361ee]/10 to-[#7c3aed]/10 border border-[#4361ee]/20">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The Solution: Content Partners, Not Just Videographers
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  <span className="text-[#4361ee] font-semibold">"You're already doing newsworthy things</span> – 
                  hosting events, serving customers, running your business. We turn those everyday wins into 
                  social media content that keeps your brand visible and growing, while you focus on what you do best."
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10">
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-[#4361ee]" />
                      Unlike Social Media Agencies
                    </h4>
                    <p className="text-gray-400 text-sm">
                      We have filmmaking roots – we excel at capturing high-quality visuals and authentic moments.
                    </p>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-white/[0.03] border border-white/10">
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-[#4361ee]" />
                      Unlike Videographers
                    </h4>
                    <p className="text-gray-400 text-sm">
                      We don't just hand over footage. We plan and deliver a complete content calendar with strategy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Local advantage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-white/[0.02] border border-white/5">
            <p className="text-xl text-gray-300">
              <span className="text-[#4361ee] font-bold">We know Calgary</span> – its events, 
              its seasons, its trends. We leverage that local touch in your content to make it 
              <span className="text-white font-semibold"> authentic and relatable</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
