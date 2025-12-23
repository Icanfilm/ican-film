import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Basic',
    price: '$800',
    period: '/month',
    description: 'Perfect for small businesses just getting started with content marketing.',
    features: [
      'Half-day on-site filming',
      '2 edited short-form videos',
      '5 professional photos',
      'Basic captions & hashtags',
      'Monthly content calendar',
      'Email support',
    ],
    color: 'from-gray-500 to-gray-600',
    buttonVariant: 'outline',
  },
  {
    name: 'Standard',
    price: '$1,500',
    period: '/month',
    description: 'Our most popular package for growing businesses with regular content needs.',
    features: [
      'Full-day on-site filming',
      '4 edited short-form videos',
      '10 professional photos',
      'Custom captions & strategy',
      'Multi-platform calendar',
      'Monthly analytics report',
      'Priority support',
    ],
    color: 'from-[#4361ee] to-[#7c3aed]',
    featured: true,
    buttonVariant: 'default',
  },
  {
    name: 'Premium',
    price: '$2,000+',
    period: '/month',
    description: 'For businesses that need maximum content output and full-service management.',
    features: [
      'Multiple filming days',
      '6+ edited videos',
      '15+ professional photos',
      'Full posting management',
      'Community engagement',
      'Detailed analytics dashboard',
      'Dedicated account manager',
      'Quarterly strategy sessions',
    ],
    color: 'from-[#ff6b6b] to-orange-500',
    buttonVariant: 'outline',
  },
];

export default function PricingSection() {
  return (
    <section className="relative py-32 bg-[#0a0a0f] overflow-hidden" id="pricing">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
          alt="Pricing"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4361ee]/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#4361ee] font-medium tracking-wider uppercase text-sm">Pricing</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Invest in
            <span className="bg-gradient-to-r from-[#4361ee] to-[#ff6b6b] bg-clip-text text-transparent"> Consistent Growth</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            For less than a part-time employee, get a full content team working on your brand every month.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative ${plan.featured ? 'md:-mt-8' : ''}`}
            >
              <div className={`relative h-full rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border ${plan.featured ? 'border-[#4361ee]/50 ring-1 ring-[#4361ee]/20' : 'border-white/10'} p-8 overflow-hidden`}>
                {/* Featured badge */}
                {plan.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#4361ee] to-[#7c3aed] text-white text-sm font-medium">
                    Most Popular
                  </div>
                )}

                {/* Plan name */}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full py-6 rounded-xl ${plan.featured ? 'bg-gradient-to-r from-[#4361ee] to-[#7c3aed] hover:opacity-90 text-white' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 mt-12"
        >
          All plans include a 3-month pilot period. Custom packages available for unique needs.
        </motion.p>
      </div>
    </section>
  );
}
