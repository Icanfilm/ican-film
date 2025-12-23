import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Video, GraduationCap, ArrowRight, Check, Star, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceDetailCard from './ServiceDetailCard';

const services = [
  {
    id: 'audit',
    icon: Gift,
    title: 'Free Social Media Audit',
    subtitle: 'Foot-in-the-Door Offer',
    tagline: 'No Risk, All Value',
    description: 'A comprehensive 30-45 minute consultation where we dive deep into your current social media presence and uncover untapped content opportunities.',
    color: 'from-emerald-500 to-teal-500',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    
    whatsIncluded: [
      {
        title: 'Social Media Audit',
        description: 'We review your current Facebook, Instagram, LinkedIn presence, analyzing posting frequency, engagement levels, and content types.',
      },
      {
        title: '3-5 Custom Content Ideas',
        description: 'Receive tailored content suggestions specific to your business - from event coverage to behind-the-scenes series.',
      },
      {
        title: 'Opportunity Assessment',
        description: 'We identify what events or activities you\'re already doing that could become content goldmines.',
      },
      {
        title: 'Strategy Discussion',
        description: 'Brief consultation on how consistent content could impact your business goals and customer engagement.',
      },
    ],
    
    benefits: [
      'Zero financial commitment',
      'Gain expert insights in under an hour',
      'Discover content opportunities you\'re missing',
      'See how professionals approach social media strategy',
      'Get actionable ideas you can implement immediately',
    ],
    
    process: [
      'Book a free 30-45 minute session',
      'We review your social media beforehand',
      'Meet in-person or via Zoom',
      'Receive custom recommendations',
      'No pressure follow-up',
    ],
    
    stats: {
      duration: '30-45 min',
      ideas: '3-5 custom',
      cost: '$0',
      value: '$500+',
    },
    
    whyItWorks: 'This is a proven foot-in-door tactic. By providing immediate value without asking for anything in return, we build trust quickly. Most businesses realize during this session just how much potential they\'re leaving on the table - and how time-consuming it would be to execute alone.',
    
    perfectFor: [
      'Businesses unsure about content marketing',
      'Companies with irregular social media posting',
      'Owners who host events but don\'t leverage them',
      'Anyone wanting professional marketing insights',
    ],
  },
  
  {
    id: 'retainer',
    icon: Video,
    title: 'Monthly Content Retainer',
    subtitle: 'Core Service - Event-to-Content System',
    tagline: 'One Day of Filming = One Month of Marketing',
    description: 'Our flagship service transforms your business activities into a systematic content pipeline. We handle everything from filming to posting strategy, delivering weeks of professional social media content from a single content day.',
    color: 'from-[#4361ee] to-[#7c3aed]',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    featured: true,
    
    packages: [
      {
        name: 'Basic Package',
        price: '$800/month',
        description: 'Perfect for small businesses getting started',
        includes: [
          'Half-day on-site filming (4 hours)',
          '2 professionally edited short-form videos (30-60s)',
          '5 high-quality photos with light editing',
          'Basic captions and hashtag research',
          'Monthly content calendar showing when to post',
          'Email support with 24-48 hour response',
        ],
        deliveryTime: '7-10 business days',
        idealFor: 'Small cafes, boutique shops, single-location businesses',
      },
      {
        name: 'Standard Package',
        price: '$1,500/month',
        description: 'Most popular - for growing businesses',
        includes: [
          'Full-day on-site filming (8 hours) OR two half-days',
          '4 professionally edited videos with motion graphics',
          '10 high-quality photos + 3 graphic designs',
          'Custom captions tailored to your brand voice',
          'Multi-platform content calendar (Facebook, Instagram, LinkedIn)',
          'Monthly analytics report with insights',
          'Priority support with same-day response',
          'Content storage in cloud library',
        ],
        deliveryTime: '5-7 business days',
        idealFor: 'Professional services, fitness studios, restaurants with events',
        popular: true,
      },
      {
        name: 'Premium Package',
        price: '$2,000+/month',
        description: 'Complete content domination',
        includes: [
          'Multiple filming days per month',
          '6+ edited videos in various formats',
          '15+ professional photos',
          'Full social media management (we post for you)',
          'Community engagement monitoring',
          'Advanced analytics dashboard with weekly reports',
          'Dedicated account manager',
          'Quarterly strategy review sessions',
          'Content repurposing into blog posts/newsletters',
          'Same-day revisions and rush edits',
        ],
        deliveryTime: '3-5 business days',
        idealFor: 'Multi-location businesses, agencies, high-growth companies',
      },
    ],
    
    whatsIncluded: [
      {
        title: 'Content Planning Session',
        description: 'We start each month by understanding your goals, upcoming events, and key messages. This ensures every piece of content serves a purpose.',
      },
      {
        title: 'Professional On-Site Filming',
        description: 'Our team arrives with professional equipment to capture your event, daily operations, customer testimonials, or staged content shoots.',
      },
      {
        title: 'Expert Post-Production',
        description: 'Raw footage is transformed into polished videos with color correction, audio enhancement, subtitles, and branded graphics.',
      },
      {
        title: 'Strategic Content Calendar',
        description: 'Receive a detailed calendar showing when to post each piece, on which platform, and with suggested captions and hashtags.',
      },
      {
        title: 'Multi-Format Delivery',
        description: 'Content optimized for Instagram Reels, TikTok, Facebook posts, LinkedIn articles, and Stories - all from the same footage.',
      },
      {
        title: 'Performance Tracking',
        description: 'Monthly reports show what content performed best, helping us refine strategy and maximize engagement over time.',
      },
    ],
    
    benefits: [
      'Save 20+ hours per month on content creation',
      'Consistent posting schedule maintains audience engagement',
      'Professional quality that stands out in crowded feeds',
      'One content day yields 15-20+ pieces of content',
      'Cross-platform optimization maximizes reach',
      'Data-driven strategy improves over time',
      'Less than cost of part-time marketing employee',
    ],
    
    process: [
      'Initial strategy session to understand your business',
      'Schedule monthly content day at your convenience',
      'Our team films for 4-8 hours on-site',
      'Post-production magic transforms raw footage',
      'Receive edited content + posting calendar',
      'Optional: We post content on your behalf',
      'Monthly review and optimization',
    ],
    
    stats: {
      content: '15-20+ pieces',
      timeframe: 'per month',
      savings: '20+ hours',
      roi: '300% reach boost',
    },
    
    whyItWorks: 'This service solves the #1 problem small businesses face: lack of time. Over 73% of SMBs aren\'t confident their marketing is effective, and 44% procrastinate on social media tasks. We remove the burden entirely. Plus, by repurposing one event into many assets, we boost reach by up to 300% across platforms - proven by industry data.',
    
    realWorldExample: 'One retail client hosted a small VIP night. We filmed for 3 hours and created: 4 video reels showcasing the atmosphere, 8 customer testimonial snippets, 12 product highlight photos, and 5 behind-the-scenes stories. This content populated their Instagram and Facebook for an entire month, resulting in 30% increase in online engagement and measurable foot traffic.',
    
    perfectFor: [
      'Businesses hosting regular events',
      'Companies wanting consistent social presence',
      'Owners with limited marketing time/expertise',
      'Brands ready to invest in long-term growth',
    ],
  },
  
  {
    id: 'workshops',
    icon: GraduationCap,
    title: 'Workshops & Training',
    subtitle: 'Supplemental Service',
    tagline: 'Learn to Create Content Like a Pro',
    description: 'Hands-on training sessions that teach your team the fundamentals of content creation. Perfect for businesses wanting to understand the process or supplement our services with in-house capabilities.',
    color: 'from-[#ff6b6b] to-orange-500',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
    
    workshopTypes: [
      {
        name: 'Social Media Marketing 101',
        duration: '4 hours',
        format: 'Public or Private',
        description: 'Foundation workshop covering platform algorithms, content strategy, posting schedules, and engagement tactics for small businesses.',
        topics: [
          'Understanding each platform (Facebook, Instagram, LinkedIn, TikTok)',
          'Content types that drive engagement',
          'Creating a content calendar',
          'Writing captions that convert',
          'Hashtag strategy and reach optimization',
        ],
      },
      {
        name: 'Smartphone Videography & Photography',
        duration: '4 hours',
        format: 'Hands-on Workshop',
        description: 'Learn to capture professional-looking content using just your smartphone. Covers composition, lighting, stabilization, and basic editing.',
        topics: [
          'Phone camera settings and features',
          'Composition and framing techniques',
          'Natural lighting strategies',
          'Stabilization methods',
          'Basic editing with mobile apps',
          'Creating Instagram Reels and TikToks',
        ],
      },
      {
        name: 'Content Planning Made Easy',
        duration: '3 hours',
        format: 'Strategy Workshop',
        description: 'Strategic session on planning content themes, creating content pillars, batch creation, and maintaining consistency without burnout.',
        topics: [
          'Identifying your content pillars',
          'Batch filming and planning',
          'Repurposing content efficiently',
          'Using templates and systems',
          'Measuring what matters',
        ],
      },
      {
        name: 'Custom Corporate Training',
        duration: 'Flexible',
        format: 'Private Only',
        description: 'Tailored training for your team\'s specific needs. We design curriculum around your industry, goals, and skill level.',
        topics: [
          'Customized to your needs',
          'Industry-specific examples',
          'Your brand guidelines integration',
          'Team skill assessment',
          'Ongoing support available',
        ],
      },
    ],
    
    pricing: {
      public: '$149 per person',
      private: '$1,200 - $2,500 per session',
      corporate: 'Custom quote',
    },
    
    whatsIncluded: [
      {
        title: 'Practical Exercises',
        description: 'Not just theory - you\'ll create actual content during the workshop that you can post immediately.',
      },
      {
        title: 'Resource Materials',
        description: 'Take home checklists, templates, and guides to implement what you\'ve learned.',
      },
      {
        title: 'Expert Instruction',
        description: 'Learn from professionals who create content daily for real businesses.',
      },
      {
        title: 'Q&A Support',
        description: 'Get answers to your specific challenges and industry questions.',
      },
    ],
    
    benefits: [
      'Cost-effective compared to hiring',
      'Empower your team with new skills',
      'Understand the content creation process',
      'Create better content in-house',
      'Often leads to service engagement (when you realize the workload!)',
    ],
    
    stats: {
      duration: '3-4 hours',
      format: 'Hands-on',
      materials: 'Included',
      support: '30-day email',
    },
    
    whyItWorks: 'Many attendees think they\'ll learn to DIY their content - and they do learn skills. But they also realize maintaining a robust content pipeline is harder than it looks. We often hear: "This was so valuable, but I don\'t have time to do this myself." That\'s when they become clients. Even those who don\'t convert immediately stay in our ecosystem.',
    
    perfectFor: [
      'Businesses wanting to try DIY first',
      'Companies with marketing staff needing upskilling',
      'Teams wanting to understand content strategy',
      'Organizations seeking team-building activities',
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-32 bg-[#0a0a0f]" id="services">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4361ee]/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#4361ee] font-medium tracking-wider uppercase text-sm">Our Services</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            A Complete Content System
            <span className="bg-gradient-to-r from-[#4361ee] to-[#ff6b6b] bg-clip-text text-transparent"> Built for SMBs</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            From free consultation to full-service content management, our structured offerings 
            meet you wherever you are in your content marketing journey.
          </p>
        </motion.div>

        {/* Detailed service cards */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <ServiceDetailCard 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="inline-block p-12 rounded-3xl bg-gradient-to-r from-[#4361ee]/10 to-[#7c3aed]/10 border border-[#4361ee]/20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure Which Service is Right?
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Start with our free audit. We'll assess your needs and recommend 
              the best path forward for your business.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#4361ee] to-[#7c3aed] hover:opacity-90 text-white px-8 py-6 text-lg rounded-full"
            >
              Schedule Free Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
