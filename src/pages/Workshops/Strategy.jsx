import React from 'react';
import { ArrowLeft, ArrowRight, PieChart, Clock, Target, Rocket, Share2, CheckCircle } from 'lucide-react';

/**
 * ICAN FILM - STRATEGY TRACK (MODULAR)
 * FIXED: Internalized UI helper to prevent resolution errors in preview.
 * ADDED: The 60-min content map curriculum and "Content Buckets" methodology.
 */

// --- INTERNALIZED UI HELPER ---
const Icon = ({ name, size = 24, className = "" }) => {
  const icons = {
    pieChart: PieChart,
    clock: Clock,
    target: Target,
    rocket: Rocket,
    share2: Share2,
    checkCircle: CheckCircle
  };
  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
};

const Strategy = ({ navigateTo }) => {
  const curriculum = [
    { 
      title: "CONTENT BUCKETS", 
      icon: "pieChart", 
      desc: "Master the method to organize business wins into repeatable tracks so you never run out of ideas." 
    },
    { 
      title: "THE 60-MIN MAP", 
      icon: "clock", 
      desc: "Our step-by-step logic framework to plan 30 days of high-performance marketing in a single sitting." 
    },
    { 
      title: "GOAL ALIGNMENT", 
      icon: "target", 
      desc: "Synchronizing your social output with actual business sales cycles and quarterly revenue targets." 
    },
    { 
      title: "OMNI-CHANNEL SYNC", 
      icon: "share2", 
      desc: "How to plan content for LinkedIn, Instagram, and TikTok simultaneously without doubling the workload." 
    }
  ];

  return (
    <div className="animate-fade-in pt-40 pb-24 uppercase font-black selection:bg-red-600 tracking-tighter bg-white min-h-screen italic">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Navigation Back */}
        <button 
          onClick={() => navigateTo('workshops')} 
          className="text-red-600 flex items-center gap-3 mb-16 hover:-translate-x-3 transition-transform tracking-[0.4em] text-[10px] italic leading-none uppercase font-black"
        >
          <ArrowLeft size={20} /> Back to Academy
        </button>

        <div className="flex flex-col lg:flex-row gap-32 items-center mb-40 italic font-black">
          {/* Left Side: Pitch */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-slate-900 text-white px-6 py-2 rounded-full text-[10px] tracking-[0.5em] mb-10 italic uppercase font-black shadow-lg">
              Training Track 01
            </div>
            <h1 className="text-7xl md:text-[11rem] text-slate-900 mb-12 leading-[0.8] tracking-tighter italic uppercase underline decoration-red-600 decoration-8 underline-offset-[16px]">
              Strategy.
            </h1>
            <p className="text-4xl text-slate-300 mb-16 italic leading-[1.1] uppercase font-black">
              Plan 30 days <br />in 60 minutes.
            </p>
            <p className="normal-case tracking-normal font-bold text-slate-500 leading-relaxed text-2xl italic mb-16 max-w-xl">
              Most businesses do not fail because of poor content quality. They fail because they lack a clear system for consistency. This training removes the guessing and makes your marketing output predictable.
            </p>
            <button 
              onClick={() => navigateTo('booking')} 
              className="w-full py-12 bg-red-600 text-white rounded-[3rem] text-3xl shadow-3xl hover:scale-[1.03] transition-transform italic uppercase tracking-widest group border-4 border-white/10 font-black leading-none"
            >
              Book My Session <ArrowRight className="inline ml-6 group-hover:translate-x-4 transition-transform" size={48} />
            </button>
          </div>

          {/* Right Side: Curriculum Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 gap-10 font-black italic uppercase">
             {curriculum.map((item, i) => (
               <div key={i} className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 shadow-sm flex items-center gap-10 group hover:bg-slate-900 hover:text-white transition-all duration-700 transform hover:-translate-y-2">
                  <div className="bg-red-600 text-white p-7 rounded-3xl group-hover:rotate-12 transition-transform shadow-xl leading-none">
                    <Icon name={item.icon} size={48} />
                  </div>
                  <div>
                     <h4 className="text-3xl mb-3 italic uppercase tracking-tighter leading-none font-black">{item.title}</h4>
                     <p className="normal-case tracking-normal font-bold text-slate-400 text-lg group-hover:text-gray-300 leading-tight italic">{item.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>

        {/* Ideal Profile Section */}
        <div className="bg-slate-900 rounded-[5rem] p-24 text-white shadow-3xl relative overflow-hidden text-center italic font-black uppercase">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] -translate-y-40 translate-x-40"></div>
           <h2 className="text-7xl mb-12 italic uppercase tracking-tighter relative z-10 underline decoration-white/10 underline-offset-8 font-black">Ideal For.</h2>
           <div className="grid md:grid-cols-3 gap-12 relative z-10">
              {["Business Owners", "Marketing Leads", "Internal Teams"].map((target, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-xl p-12 rounded-[3.5rem] border border-white/10 italic">
                   <p className="text-3xl font-black">{target}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Repurposing Logic Visual */}
        <div className="mt-40 text-center italic font-black uppercase">
           <h3 className="text-5xl font-black italic mb-10 tracking-tighter uppercase leading-none text-slate-900 underline decoration-slate-100 underline-offset-8">Stop posting blindly.</h3>
           <p className="text-2xl text-slate-400 italic font-bold mb-16 uppercase tracking-normal">"Consistency is the byproduct of a system, not willpower."</p>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
