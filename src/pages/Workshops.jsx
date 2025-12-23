import React from 'react';
import { PieChart, Building2, Film, Zap, CheckCircle, ArrowRight } from 'lucide-react';

// --- Local Icon Helper for Canvas Preview Stability ---
// (Note: On your GitHub, you can import this from '../components/UI')
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
    <div className="animate-fade-in pt-40 pb-24 uppercase font-black tracking-tighter selection:bg-red-600 bg-white">
      <div className="container mx-auto px-6 text-center lg:text-left">
        
        {/* 1. ULTRA-SCALE PAGE HEADER */}
        <div className="text-center max-w-5xl mx-auto mb-40">
          <div className="inline-block bg-red-100 text-red-600 font-black px-8 py-2.5 rounded-full text-[11px] uppercase tracking-[0.6em] mb-10 italic shadow-sm leading-none">
            ICAN Film Academy
          </div>
          <h1 className="text-8xl md:text-[12rem] text-slate-900 mb-10 tracking-tighter leading-[0.8] italic uppercase">
            PRACTICAL <br /><span className="text-red-600 underline decoration-slate-100 underline-offset-[20px]">TRAINING.</span>
          </h1>
          <p className="text-3xl text-slate-400 italic opacity-60 max-w-4xl mx-auto tracking-normal font-bold mb-10 uppercase leading-tight">
            Practical media and content training for businesses and individuals in Calgary.
          </p>
          <p className="text-xl text-slate-600 font-medium leading-relaxed normal-case tracking-normal max-w-3xl mx-auto italic">
            ICAN Film Academy offers structured training programs designed to help businesses and individuals create consistent, professional content without confusion or wasted effort. Our workshops focus on real-world skills that can be applied immediately.
          </p>
        </div>

        {/* 2. THE THREE TRAINING TRACKS - Now with Hover-Pop and High-End Imagery */}
        <div className="grid lg:grid-cols-3 gap-12 mb-40">
          
          {/* Track 1: Business Content Strategy */}
          <div className="relative group rounded-[5rem] overflow-hidden shadow-3xl h-[850px] flex flex-col justify-end p-12 transition-all hover:-translate-y-4 hover:shadow-red-600/10">
             <img 
               src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop" 
               className="absolute inset-0 w-full h-full object-cover brightness-[0.35] contrast-125 group-hover:scale-110 transition-transform duration-1000 group-hover:brightness-[0.25]" 
               alt="Content Strategy Planning" 
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
                  Plan 30 days of content in 60 minutes. Built for owners and teams who struggle with consistency or direction.
                </p>
                <button onClick={() => navigateTo('business-strategy')} className="w-full py-8 bg-red-600 text-white rounded-[2rem] uppercase tracking-widest text-[11px] font-black hover:bg-white hover:text-slate-900 transition-all italic shadow-2xl">
                  ENTER STRATEGY TRACK
                </button>
             </div>
             {/* Hover Glow Overlay */}
             <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-1000 pointer-events-none"></div>
          </div>

          {/* Track 2: Corporate In-House Training */}
          <div className="relative group rounded-[5rem] overflow-hidden shadow-3xl h-[850px] flex flex-col justify-end p-12 transition-all hover:-translate-y-4 hover:shadow-red-600/10">
             <img 
               src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" 
               className="absolute inset-0 w-full h-full object-cover brightness-[0.35] contrast-125 group-hover:scale-110 transition-transform duration-1000 group-hover:brightness-[0.25]" 
               alt="Corporate Team Training" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent"></div>
             
             <div className="relative z-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                <div className="bg-white text-slate-900 w-24 h-24 rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl transform group-hover:rotate-12 transition-transform duration-700 border-4 border-slate-900/10">
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
             <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-1000 pointer-events-none"></div>
          </div>

          {/* Track 3: Media Production Bootcamp */}
          <div className="relative group rounded-[5rem] overflow-hidden shadow-3xl h-[850px] flex flex-col justify-end p-12 transition-all hover:-translate-y-4 hover:shadow-red-600/10">
             <img 
               src="https://images.unsplash.com/photo-1535016120720-40c646bebbdc?q=80&w=1000&auto=format&fit=crop" 
               className="absolute inset-0 w-full h-full object-cover brightness-[0.35] contrast-125 group-hover:scale-110 transition-transform duration-1000 group-hover:brightness-[0.25]" 
               alt="Professional Video Production Bootcamp" 
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
                  8-week technical mastery. From absolute zero to confident professional content creator in a hands-on environment.
                </p>
                <button onClick={() => navigateTo('production-bootcamp')} className="w-full py-8 bg-red-600 text-white rounded-[2rem] uppercase tracking-widest text-[11px] font-black hover:bg-white hover:text-slate-900 transition-all italic shadow-2xl">
                  ENTER ACADEMY TRACK
                </button>
             </div>
             <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-1000 pointer-events-none"></div>
          </div>
        </div>

        {/* 3. THE VALUE PROP SECTION - Brand Identity Restored */}
        <div className="bg-slate-900 rounded-[5rem] p-24 text-white shadow-3xl relative overflow-hidden mb-20">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] -translate-y-40 translate-x-40"></div>
           <div className="grid lg:grid-cols-2 gap-24 items-center relative z-10">
              <div>
                 <h2 className="text-7xl mb-12 italic uppercase leading-[0.9] tracking-tighter underline decoration-red-600 decoration-8 underline-offset-[12px]">WHY ACADEMY <br /><span className="text-red-600 italic">WORKS.</span></h2>
                 <div className="space-y-12 normal-case tracking-normal font-medium text-gray-400">
                    <div className="flex gap-6 items-start">
                      <Icon name="checkCircle" className="text-red-600 shrink-0 mt-1" size={32} /> 
                      <p className="text-2xl italic leading-tight">Designed around real business use, not abstract cinematic theory.</p>
                    </div>
                    <div className="flex gap-6 items-start">
                      <Icon name="checkCircle" className="text-red-600 shrink-0 mt-1" size={32} /> 
                      <p className="text-2xl italic leading-tight">Taught by working media professionals actively filming in Calgary.</p>
                    </div>
                    <div className="flex gap-6 items-start">
                      <Icon name="checkCircle" className="text-red-600 shrink-0 mt-1" size={32} /> 
                      <p className="text-2xl italic leading-tight">Practical skills you can use in your brand the very same week.</p>
                    </div>
                 </div>
              </div>
              
              {/* Training Formats / Capabilities */}
              <div className="grid grid-cols-2 gap-10">
                 {["PRIVATE TRAINING", "PUBLIC WORKSHOPS", "TEAM SESSIONS", "SKILL AUDITS"].map((f, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-3xl p-12 rounded-[3.5rem] border border-white/10 flex flex-col items-center gap-6 group hover:border-red-600 transition-all transform hover:-translate-y-2">
                       <Icon name="zap" className="text-red-600" size={48} />
                       <p className="text-sm font-black uppercase tracking-[0.4em] text-center leading-tight italic">{f}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Closing CTA */}
        <div className="text-center max-w-4xl mx-auto py-24">
           <h3 className="text-5xl font-black italic mb-10 tracking-tighter uppercase leading-none text-slate-900">Choose the track that fits your goal.</h3>
           <button onClick={() => navigateTo('booking')} className="flex items-center gap-6 text-red-600 font-black text-2xl hover:translate-x-4 transition-all italic uppercase tracking-widest group mx-auto">
             Get A Free Consultation <ArrowRight className="group-hover:scale-125 transition-transform" />
           </button>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
