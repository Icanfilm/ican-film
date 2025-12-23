import React from 'react';
import { ArrowRight, CheckCircle, Zap, Lightbulb, Camera, Rocket, Clock, Timer } from 'lucide-react';

/**
 * ICAN FILM - SERVICES PAGE (MODULAR)
 * FIXED: Internalized Icon component to prevent "Could not resolve" errors in preview.
 * ADDED: The Efficiency Principle table and High-Scale Tiered Ecosystem.
 */

// --- INTERNALIZED UI HELPER ---
const Icon = ({ name, size = 24, className = "" }) => {
  const icons = {
    lightbulb: Lightbulb,
    zap: Zap,
    camera: Camera,
    checkCircle: CheckCircle,
    rocket: Rocket,
    clock: Clock,
    timer: Timer
  };
  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
};

const Services = ({ navigateTo }) => {
  return (
    <div className="animate-fade-in pt-40 pb-24 selection:bg-red-600 selection:text-white uppercase font-black tracking-tighter italic">
      <div className="container mx-auto px-6">
        
        {/* PAGE HEADER */}
        <div className="text-center max-w-5xl mx-auto mb-40">
          <div className="inline-block bg-red-100 text-red-600 font-black px-8 py-2.5 rounded-full text-[11px] uppercase tracking-[0.6em] mb-10 italic shadow-sm leading-none">
            Our Service Ecosystem
          </div>
          <h1 className="text-8xl md:text-[13rem] text-slate-900 mb-10 tracking-tighter leading-[0.8] italic uppercase">
            SCALE <br /><span className="text-red-600 underline decoration-slate-100 underline-offset-[24px]">NOW.</span>
          </h1>
          <p className="text-3xl text-slate-400 italic opacity-60 font-bold uppercase mb-10 leading-tight">
            Stop hiring freelancers for single videos. Hire a content system.
          </p>
          <p className="text-xl text-slate-600 font-medium leading-relaxed normal-case tracking-normal max-w-3xl mx-auto italic">
            ICAN Film productizes high-end videography into a repeatable monthly system. We build the engine that keeps your brand alive across every social platform while you focus on scaling operations.
          </p>
        </div>

        {/* TIERED PACKAGES */}
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto mb-40">
          
          {/* Tier 1: The Audit */}
          <div className="relative group bg-white p-12 rounded-[4rem] shadow-xl border border-slate-100 flex flex-col hover:border-red-600 transition-all transform hover:-translate-y-4 overflow-hidden h-[800px]">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover brightness-[0.9] opacity-10 group-hover:scale-110 transition-transform duration-1000 group-hover:opacity-20" 
              alt="Discovery session" 
            />
            <div className="relative z-10 flex flex-col h-full italic">
              <div className="bg-red-50 text-red-600 w-24 h-24 rounded-3xl flex items-center justify-center mb-12 group-hover:bg-red-600 group-hover:text-white transition-all shadow-lg leading-none">
                <Icon name="lightbulb" size={48} />
              </div>
              <h3 className="text-4xl mb-4 italic leading-none font-black">THE AUDIT</h3>
              <p className="text-red-600 text-[10px] tracking-[0.5em] mb-12 italic leading-none font-black uppercase">FREE DISCOVERY</p>
              <p className="text-2xl text-slate-500 mb-14 flex-grow font-bold italic normal-case tracking-normal leading-relaxed">
                "Prove the value." A deep dive where we review your social presence and give you 3-5 tailored content ideas on the spot. Prove our expertise before you invest.
              </p>
              <button onClick={() => navigateTo('booking')} className="w-full py-8 border-4 border-slate-900 text-slate-900 rounded-[2.5rem] hover:bg-slate-900 hover:text-white transition-all text-sm italic shadow-sm uppercase tracking-widest font-black">
                Get Free Audit
              </button>
            </div>
          </div>

          {/* Tier 2: The Flagship Retainer */}
          <div className="relative group bg-slate-900 p-12 rounded-[5rem] shadow-3xl text-white flex flex-col transform lg:scale-110 border-8 border-red-600 overflow-hidden z-20 h-[850px] hover:scale-[1.15] transition-transform duration-700 font-black italic uppercase">
            <div className="absolute top-0 right-0 -mt-2 mr-12 bg-red-600 text-[10px] font-black tracking-[0.4em] px-10 py-4 rounded-full uppercase shadow-2xl z-30 italic leading-none">FLAGSHIP</div>
            <img 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover brightness-[0.2] group-hover:scale-110 transition-transform duration-1000" 
              alt="Production" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            
            <div className="relative z-10 flex flex-col h-full pt-10">
              <div className="bg-red-600 text-white w-28 h-28 rounded-[2.5rem] flex items-center justify-center mb-12 shadow-xl shadow-red-600/40 transform group-hover:rotate-12 transition-transform leading-none">
                <Icon name="zap" size={64} />
              </div>
              <h3 className="text-6xl mb-4 italic leading-none tracking-tighter">RETAINER</h3>
              <p className="text-red-400 text-[10px] tracking-[0.6em] mb-12 italic leading-none font-black uppercase">STARTING $1,500 / MO</p>
              <ul className="space-y-8 mb-20 text-xs italic tracking-[0.2em] leading-none uppercase font-black">
                <li className="flex items-center gap-6"><Icon name="checkCircle" className="text-red-500" size={32} /> 1 Full-Day Capture</li>
                <li className="flex items-center gap-6"><Icon name="checkCircle" className="text-red-500" size={32} /> 4 Edited Video Reels</li>
                <li className="flex items-center gap-6"><Icon name="checkCircle" className="text-red-500" size={32} /> 15+ Polished Stills</li>
                <li className="flex items-center gap-6"><Icon name="checkCircle" className="text-red-500" size={32} /> Content Calendar</li>
              </ul>
              <button onClick={() => navigateTo('booking')} className="w-full py-10 bg-red-600 text-white rounded-[3rem] hover:bg-red-700 transition-all shadow-3xl text-lg italic uppercase tracking-[0.3em] font-black group leading-none">
                CLAIM YOUR SPOT <ArrowRight className="inline ml-4 group-hover:translate-x-3 transition-transform" size={32} />
              </button>
            </div>
            <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none"></div>
          </div>

          {/* Tier 3: Events */}
          <div className="relative group bg-white p-12 rounded-[4rem] shadow-xl border border-slate-100 flex flex-col hover:border-slate-900 transition-all transform hover:-translate-y-4 overflow-hidden h-[800px] italic font-black uppercase">
            <img 
              src="https://images.unsplash.com/photo-1540575861501-7ad0582373f2?q=80&w=1000&auto=format&fit=crop" 
              className="absolute inset-0 w-full h-full object-cover brightness-[0.9] opacity-10 group-hover:scale-110 transition-transform duration-1000 group-hover:opacity-20" 
              alt="Conference" 
            />
            <div className="relative z-10 flex flex-col h-full">
              <div className="bg-slate-100 text-slate-900 w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-slate-900 group-hover:text-white transition-all shadow-lg leading-none">
                <Icon name="camera" size={40} />
              </div>
              <h3 className="text-4xl mb-4 italic leading-none">EVENTS</h3>
              <p className="text-red-600 text-[10px] tracking-[0.5em] mb-12 italic leading-none uppercase font-black">SELECTIVE SCALE</p>
              <p className="text-xl text-slate-500 mb-14 flex-grow font-bold italic normal-case tracking-normal leading-relaxed">
                Cinematic coverage for summits and conferences. Use one day of high-pressure coverage to generate content that lasts 3 months.
              </p>
              <button onClick={() => navigateTo('booking')} className="w-full py-8 border-4 border-slate-900 text-slate-900 rounded-[2.5rem] hover:bg-slate-900 hover:text-white transition-all text-sm italic shadow-sm uppercase tracking-widest font-black">
                Inquire Project
              </button>
            </div>
          </div>
        </div>

        {/* THE EFFICIENCY PRINCIPLE */}
        <div className="bg-slate-50 rounded-[5rem] p-24 text-center border border-slate-100 italic font-black uppercase leading-none">
           <h2 className="text-6xl font-black mb-12 tracking-tighter italic uppercase leading-none">The <span className="text-red-600">Efficiency</span> Principle.</h2>
           <p className="text-2xl text-slate-500 font-bold max-w-3xl mx-auto normal-case italic mb-20 leading-relaxed tracking-normal">
             "Outsourcing content creation frees up owners' time for high-level scaling." We deliver 300% more reach across platforms for a fraction of the cost of an internal media team.
           </p>
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 italic font-black uppercase leading-none">
              {[
                { label: "1 DAY ON-SITE", value: "INPUT" },
                { label: "4-8 REELS", value: "VIDEO" },
                { label: "15+ PHOTOS", value: "STILLS" },
                { label: "30 DAYS REACH", value: "RESULT" }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-sm group hover:bg-slate-900 hover:text-white transition-all duration-500">
                   <p className="text-red-600 text-xs font-black tracking-widest mb-4 group-hover:text-red-400 italic font-black uppercase leading-none">{stat.value}</p>
                   <p className="text-2xl font-black tracking-tighter uppercase leading-none italic font-black uppercase leading-none">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
