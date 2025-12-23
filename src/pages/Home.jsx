import React from "react"

import HeroSection from "../Components/home/HeroSection"
import StatsSection from "../Components/home/StatsSection"
import TargetMarketSection from "../Components/home/TargetMarketSection"
import ValuePropositionSection from "../Components/home/ValuePropositionSection"
import ServicesSection from "../Components/home/ServicesSection"
import BehindTheScenesSection from "../Components/home/BehindTheScenesSection"
import ProcessSection from "../Components/home/ProcessSection"
import CaseStudySection from "../Components/home/CaseStudySection"
import TestimonialsSection from "../Components/home/TestimonialsSection"
import PricingSection from "../Components/home/PricingSection"
import TeamSection from "../Components/home/TeamSection"
import CTASection from "../Components/home/CTASection"
import Footer from "../Components/home/Footer"

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
  )
}

