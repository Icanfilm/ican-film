import React from 'react';
import { ArrowRight, PieChart, Building2, Film, Zap, CheckCircle } from 'lucide-react';

/**
 * ICAN FILM - WORKSHOPS HUB (MODULAR)
 * FIXED: Internalized UI helper to prevent resolution errors in preview.
 * ADDED: The three core Academy tracks with hover-pop effects and detailed descriptions.
 */

// --- INTERNALIZED UI HELPER ---
const Icon = ({ name, size = 24, className = "" }) => {
  const icons = {
    pieChart: PieChart,
    building2: Building2,
    film: Film,
    zap: Zap,
    checkCircle: CheckCircle
  };
  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
};

const Workshops = ({ navigateTo }) => {
  return (
    <div className="animate-fade-in pt-40 pb-24 selection:bg-red-600 selection:text-white uppercase font-black tracking-tighter italic bg-white">
      <div className="container mx-auto px-6 text-center lg:text-left">
        
        {/* 1. ACADEMY HEADER */}
        <div className="text-center max-w-5xl mx-auto mb-40">
          <div className="inline-block bg-red-100 text-red-600 font-black px-8 py-2.5 rounded-full text-[11px] uppercase tracking-[0.6em] mb-10 italic shadow-sm leading-none">
            ICAN Film Academy
          </div>
          <h1 className="text-8xl md:text-[12rem] text-slate-900 mb-10 tracking-tighter leading-[0.8] italic uppercase">
            PRACTICAL <br /><span className="text-red-600 underline decoration-slate-100 underline-offset-[20px]">TRAINING.</span>
          </h1>
          <p className="text-3xl text-slate-400 italic opacity-60 font-bold mb-10 leading-tight uppercase max-w-4xl mx-auto">
            Practical media and content training for businesses and technical creators in Calgary.
          </p>
          <p className="text-xl text-slate-600 font-medium leading-relaxed normal-case tracking-normal max-w-3xl mx-auto italic">
            Most training is too theoretical. We teach the technical SOPs (Standard Operating Procedures) required to move from "having a camera" to "owning the industry feed."
          </p>
        </div>

        {/* 2. THE TRACKS GRID */}
        <div className="grid lg:grid-cols-3 gap-12 mb-40 italic font-black uppercase">
          
          {/* Track 1: Strategy */}
          <div className="relative group rounded-[5rem] overflow-hidden shadow-3xl h-[850px] flex flex-col justify-end p-12 transition-all hover:-translate-y-4 hover:shadow-red-600/10">
             <img 
               src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop" 
               className="absolute inset-0 w-full h-full object-cover brightness-[0.35] contrast-125 group-hover:scale-110 transition-transform duration-1000 group-hover:brightness-[0.25]" 
               alt="Content Strategy" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent"></div>
             
             <div className="relative z-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                <div className="bg-red-600 w-24 h-24 rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl transform group-hover:rotate-12 transition-transform duration-700 border-4 border-white/10">
                   <Icon name="pieChart" size={56} className="text-white" />
                </div>
                <h3 className="text-5xl font-black mb-6 italic leading-[0.85] uppercase tracking-tighter text-white">
                  BUSINESS <br />CONTENT <br />STRATEGY
                </h3>
                <p className="text-xl text-gray-300 mb-12 leading-relaxed italic font-medium normal-case tracking-normal opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  Plan 30 days of content in 60 minutes. Built for owners who struggle with consistency or direction.
                </p>
                <button onClick={() => navigateTo('business-strategy')} className="w-full py-8 bg-red-600 text-white rounded-[2rem] uppercase tracking-widest text-[11px] font-black hover:bg-white hover:text-slate-900 transition-all italic shadow-2xl">
                  ENTER STRATEGY TRACK
                </button>
             </div>
          </div>

          {/* Track 2: In-House */}
          <div className="relative group rounded-[5rem] overflow-hidden shadow-3xl h-[850px] flex flex-col justify-end p-12 transition-all hover:-translate-y-4 hover:shadow-red-600/10">
             <img 
               src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" 
               className="absolute inset-0 w-full h-full object-cover brightness-[0.35] contrast-125 group-hover:scale-110 transition-transform duration-1000 group-hover:brightness-[0.25]" 
               alt="Corporate Training" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent"></div>
             
             <div className="relative z-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                <div className="bg-white text-slate-900 w-24 h-24 rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl transform group-hover:rotate-12 transition-transform duration-700 border-4 border-slate-900/10 leading-none">
                   <Icon name="building2" size={56} />
                </div>
                <h3 className="text-5xl font-black mb-6 italic leading-[0.85] uppercase tracking-tighter text-white">
                  CORPORATE <br />IN-HOUSE <br />TRAINING
                </h3>
                <p className="text-xl text-gray-300 mb-12 leading-relaxed italic font-medium normal-case tracking-normal opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  Train your staff to capture professional daily wins internally without relying on external vendors for every post.
                </p>
                <button onClick={() => navigateTo('corporate-inhouse')} className="w-full py-8 bg-white text-slate-900 rounded-[2rem] uppercase tracking-widest text-[11px] font-black hover:bg-red-600 hover:text-white transition-all italic shadow-2xl">
                  ENTER IN-HOUSE TRACK
                </button>
             </div>
          </div>

          {/* Track 3: Bootcamp */}
          <div className="relative group rounded-[5rem] overflow-hidden shadow-3xl h-[850px] flex flex-col justify-end p-12 transition-all hover:-translate-y-4 hover:shadow-red-600/10">
             <img 
               src="https://images.unsplash.com/photo-1535016120720-40c646bebbdc?q=80&w=1000&auto=format&fit=crop" 
               className="absolute inset-0 w-full h-full object-cover brightness-[0.35] contrast-125 group-hover:scale-110 transition-transform duration-1000 group-hover:brightness-[0.25]" 
               alt="Production Bootcamp" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent"></div>
             
             <div className="relative z-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                <div className="bg-red-600 w-24 h-24 rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl transform group-hover:rotate-12 transition-transform duration-700 border-4 border-white/10">
                   <Icon name="film" size={56} className="text-white" />
                </div>
                <h3 className="text-5xl font-black mb-6 italic leading-[0.85] uppercase tracking-tighter text-white">
                  PRODUCTION <br />SKILLS <br />BOOTCAMP
                </h3>
                <p className="text-xl text-gray-300 mb-12 leading-relaxed italic font-medium normal-case tracking-normal opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  8-week technical mastery. From absolute zero to professional media production in a hands-on environment.
                </p>
                <button onClick={() => navigateTo('production-bootcamp')} className="w-full py-8 bg-red-600 text-white rounded-[2rem] uppercase tracking-widest text-[11px] font-black hover:bg-white hover:text-slate-900 transition-all italic shadow-2xl">
                  ENTER ACADEMY TRACK
                </button>
             </div>
          </div>
        </div>

        {/* 3. CLOSING CTA */}
        <div className="bg-slate-50 rounded-[5rem] p-24 text-center border border-slate-100">
           <h2 className="text-6xl font-black mb-12 tracking-tighter italic uppercase leading-none">The Academy <span className="text-red-600">Philosophy.</span></h2>
           <p className="text-2xl text-slate-500 font-bold max-w-3xl mx-auto italic mb-16 leading-relaxed normal-case tracking-normal">
             We don't teach "vlogging." We teach high-end storytelling, lighting physics, and strategic distribution. Our goal is to make your production internal, efficient, and undisputed.
           </p>
           <button 
            onClick={() => navigateTo('booking')} 
            className="flex items-center gap-6 text-red-600 font-black text-2xl hover:translate-x-4 transition-all italic uppercase tracking-widest group mx-auto"
           >
             Inquire for Enrollment <ArrowRight className="group-hover:scale-125 transition-transform" />
           </button>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
