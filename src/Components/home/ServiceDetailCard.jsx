import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ChevronDown, ChevronUp, Star, Clock, DollarSign, Users, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ServiceDetailCard({ service, index }) {
  const [expandedSection, setExpandedSection] = useState(null);
  const isEven = index % 2 === 0;

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className={`grid lg:grid-cols-2 gap-12 items-start ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
        {/* Image side */}
        <div className={`relative ${!isEven ? 'lg:order-2' : ''}`}>
          <div className="sticky top-24">
            {service.featured && (
              <div className="absolute -top-4 -right-4 z-20">
                <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#4361ee] to-[#7c3aed] text-white text-sm font-bold flex items-center gap-2 shadow-lg">
                  <Star className="w-4 h-4 fill-current" />
                  MOST POPULAR
                </div>
              </div>
            )}
            
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`} />
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Overlay stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(service.stats).map(([key, value]) => (
                    <div key={key} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                        {value}
                      </div>
                      <div className="text-white/80 text-xs uppercase tracking-wider mt-1">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content side */}
        <div className={!isEven ? 'lg:order-1' : ''}>
          {/* Header */}
          <div className="mb-8">
            <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${service.color} bg-opacity-10 border border-white/10 mb-4`}>
              <service.icon className={`w-5 h-5 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
              <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                {service.subtitle}
              </span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {service.title}
            </h3>
            
            <p className={`text-xl font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}>
              {service.tagline}
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* What's Included */}
          {service.whatsIncluded && (
            <div className="mb-8">
              <button
                onClick={() => toggleSection('included')}
                className="w-full flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all mb-4"
              >
                <h4 className="text-xl font-bold text-white flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  What's Included
                </h4>
                {expandedSection === 'included' ? 
                  <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                }
              </button>
              
              {expandedSection === 'included' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="space-y-4 pl-4"
                >
                  {service.whatsIncluded.map((item, i) => (
                    <div key={i} className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                      <h5 className="text-white font-semibold mb-2">{item.title}</h5>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          )}

          {/* Packages (for retainer service) */}
          {service.packages && (
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                Choose Your Package
              </h4>
              
              <div className="space-y-4">
                {service.packages.map((pkg, i) => (
                  <div 
                    key={i}
                    className={`p-6 rounded-2xl bg-white/[0.03] border ${pkg.popular ? 'border-[#4361ee]/50 ring-2 ring-[#4361ee]/20' : 'border-white/10'} hover:border-white/20 transition-all relative`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-[#4361ee] text-white text-xs font-bold">
                        RECOMMENDED
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h5 className="text-xl font-bold text-white mb-1">{pkg.name}</h5>
                        <p className="text-gray-400 text-sm">{pkg.description}</p>
                      </div>
                      <div className="text-right">
                        <div className={`text-3xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                          {pkg.price}
                        </div>
                        {pkg.deliveryTime && (
                          <div className="text-xs text-gray-500 mt-1">
                            <Clock className="w-3 h-3 inline mr-1" />
                            {pkg.deliveryTime}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {pkg.includes.slice(0, 4).map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-300 text-sm">
                          <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                          <span>{item}</span>
                        </li>
                      ))}
                      {pkg.includes.length > 4 && (
                        <li className="text-[#4361ee] text-sm font-medium cursor-pointer">
                          + {pkg.includes.length - 4} more features
                        </li>
                      )}
                    </ul>
                    
                    {pkg.idealFor && (
                      <div className="pt-4 border-t border-white/5">
                        <p className="text-xs text-gray-500">
                          <Users className="w-3 h-3 inline mr-1" />
                          Ideal for: <span className="text-gray-400">{pkg.idealFor}</span>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Workshop Types (for workshop service) */}
          {service.workshopTypes && (
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                Workshop Options
              </h4>
              
              <div className="space-y-4">
                {service.workshopTypes.map((workshop, i) => (
                  <div 
                    key={i}
                    className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h5 className="text-lg font-bold text-white mb-1">{workshop.name}</h5>
                        <div className="flex items-center gap-3 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {workshop.duration}
                          </span>
                          <span>•</span>
                          <span>{workshop.format}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-4">{workshop.description}</p>
                    
                    <div className="space-y-2">
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Topics Covered:</p>
                      <div className="flex flex-wrap gap-2">
                        {workshop.topics.slice(0, 3).map((topic, j) => (
                          <Badge key={j} variant="outline" className="text-xs bg-white/5 border-white/10">
                            {topic}
                          </Badge>
                        ))}
                        {workshop.topics.length > 3 && (
                          <Badge variant="outline" className="text-xs bg-[#4361ee]/10 border-[#4361ee]/20 text-[#4361ee]">
                            +{workshop.topics.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {service.pricing && (
                <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-[#4361ee]/5 to-[#7c3aed]/5 border border-[#4361ee]/10">
                  <p className="text-sm text-gray-400 mb-2">Workshop Pricing:</p>
                  <div className="flex flex-wrap gap-4 text-white">
                    <span className="font-semibold">Public: {service.pricing.public}</span>
                    <span>•</span>
                    <span className="font-semibold">Private: {service.pricing.private}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Key Benefits */}
          <div className="mb-8">
            <button
              onClick={() => toggleSection('benefits')}
              className="w-full flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all mb-4"
            >
              <h4 className="text-xl font-bold text-white flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                Key Benefits
              </h4>
              {expandedSection === 'benefits' ? 
                <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                <ChevronDown className="w-5 h-5 text-gray-400" />
              }
            </button>
            
            {expandedSection === 'benefits' && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                className="grid md:grid-cols-2 gap-3 pl-4"
              >
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02]">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Why It Works */}
          {service.whyItWorks && (
            <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-[#4361ee]/5 to-[#7c3aed]/5 border border-[#4361ee]/10">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <TrendingUp className={`w-5 h-5 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                Why This Works
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.whyItWorks}
              </p>
            </div>
          )}

          {/* Real World Example */}
          {service.realWorldExample && (
            <div className="mb-8 p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Real-World Success
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed italic">
                "{service.realWorldExample}"
              </p>
            </div>
          )}

          {/* Perfect For */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-4">Perfect for:</h4>
            <div className="flex flex-wrap gap-2">
              {service.perfectFor.map((item, i) => (
                <Badge 
                  key={i}
                  className={`bg-gradient-to-r ${service.color} bg-opacity-10 border-white/10 text-white`}
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className={`flex-1 bg-gradient-to-r ${service.color} hover:opacity-90 text-white px-8 py-6 rounded-full`}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex-1 border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-6 rounded-full"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
