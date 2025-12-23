import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import TargetMarketSection from '../components/home/TargetMarketSection';
import ValuePropositionSection from '../components/home/ValuePropositionSection';
import ServicesSection from '../components/home/ServicesSection';
import BehindTheScenesSection from '../components/home/BehindTheScenesSection';
import ProcessSection from '../components/home/ProcessSection';
import CaseStudySection from '../components/home/CaseStudySection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PricingSection from '../components/home/PricingSection';
import TeamSection from '../components/home/TeamSection';
import CTASection from '../components/home/CTASection';
import Footer from '../components/home/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <TargetMarketSection />
      <ValuePropositionSection />
      <ServicesSection />
      <BehindTheScenesSection />
      <ProcessSection />
      <CaseStudySection />
      <TestimonialsSection />
      <PricingSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>
  );
}
