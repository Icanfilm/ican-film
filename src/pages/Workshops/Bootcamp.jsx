import React from 'react';
import { ArrowLeft, ArrowRight, Camera, MonitorPlay, Lightbulb, Mic, Smartphone, Layers, Zap, Briefcase, CheckCircle } from 'lucide-react';

/**
 * ICAN FILM - PRODUCTION BOOTCAMP (MODULAR)
 * FIXED: Internalized UI helper to prevent resolution errors in preview.
 * ADDED: Full 8-Week curriculum breakdown and high-scale investment CTA.
 */

// --- INTERNALIZED UI HELPER ---
const Icon = ({ name, size = 24, className = "" }) => {
  const icons = {
    camera: Camera,
    monitorPlay: MonitorPlay,
    lightbulb: Lightbulb,
    mic: Mic,
    smartphone: Smartphone,
    layers: Layers,
    zap: Zap,
    briefcase: Briefcase,
    checkCircle: CheckCircle
  };
  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
};

const Bootcamp = ({ navigateTo }) => {
  const weeks = [
    { title: "CAMERA PHYSICS", icon: "camera", detail: "F-stops, focal lengths, and technical hardware safety protocols." },
    { title: "COMPOSITION LAB", icon: "monitorPlay", detail: "Framing for high-impact social-first viral storytelling." },
    { title: "LIGHTING MOODS", icon: "lightbulb", detail: "Shaping emotion using advanced shadow design and studio lighting." },
    { title: "AUDIO MASTERY", icon: "mic", detail: "Capturing clean studio sound in unpredictable field environments." },
    { title: "SOCIAL SPRINTS", icon: "smartphone", detail: "Fast production hooks for modern mobile attention spans." },
    { title: "EDITING ARCH.", icon: "layers", detail: "Pacing, narrative arcs, and technical workflow speed mastery." },
    { title: "TECHNICAL COLOR", icon: "zap", detail: "Profile matching, correction, and professional grading." },
    { title: "CLIENT WRAP", icon: "briefcase", detail: "Industry delivery standards, codecs, and wrap-up systems." }
  ];

  return (
    <div className="animate-fade-in pt-40 pb-24 font-black selection:bg-red-600 tracking-tighter uppercase bg-white min-h-screen italic">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Navigation Back */}
        <button 
          onClick={() => navigateTo('workshops')} 
          className="text-red-600 flex items-center gap-4 mb-20 hover:-translate-x-3 transition-transform tracking-[0.4em] text-[10px] italic leading-none uppercase font-black"
        >
          <ArrowLeft size={24} /> Back to Academy
        </button>
        
        {/* Main Header */}
        <div className="text-center mb-40 italic font-black">
           <div className="inline-block bg-red-100 text-red-600 px-6 py-2 rounded-full text-[10px] tracking-[0.5em] mb-10 italic shadow-sm uppercase font-black">
             ACADEMY TRACK 03
           </div>
           <h1 className="text-8xl md:text-[15rem] text-slate-900 mb-12 leading-[0.75] tracking-tighter italic uppercase underline decoration-slate-100 underline-offset-[20px]">
             Academy <br /><span className="text-red-600 italic leading-none font-black">8 Weeks.</span>
           </h1>
           <p className="text-4xl text-slate-300 italic leading-none uppercase font-black tracking-widest max-w-4xl mx-auto">
             Zero to Technical Professional Content Creator.
           </p>
        </div>

        {/* 8-Week Curriculum Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-40 italic font-black uppercase">
           {weeks.map((w, i) => (
             <div key={i} className="bg-white p-16 rounded-[5rem] border border-slate-100 shadow-xl group hover:border-red-600 transition-all transform hover:-translate-y-4">
                <p className="text-red-600 text-8xl mb-8 italic leading-none opacity-10 group-hover:opacity-100 transition-opacity font-black">
                  0{i+1}
                </p>
                <div className="bg-slate-50 p-8 rounded-[2rem] w-fit mb-12 group-hover:bg-red-600 group-hover:text-white transition-all shadow-sm leading-none font-black">
                  <Icon name={w.icon} size={48} />
                </div>
                <h4 className="text-3xl mb-6 tracking-tighter uppercase leading-none font-black">{w.title}</h4>
                <p className="normal-case tracking-normal font-bold text-slate-400 text-lg italic leading-tight">
                  {w.detail}
                </p>
             </div>
           ))}
        </div>
        
        {/* Investment CTA Block */}
        <div className="bg-slate-900 p-24 rounded-[6rem] shadow-3xl text-white flex flex-col lg:flex-row justify-between items-center gap-24 relative overflow-hidden group italic font-black uppercase">
           <div className="absolute top-0 left-0 w-full h-full bg-red-600/5 -skew-x-12 translate-x-40 pointer-events-none group-hover:translate-x-20 transition-transform duration-1000"></div>
           
           <div className="relative z-10 text-left font-black">
              <p className="text-red-500 text-[11px] tracking-[1em] mb-8 italic leading-none font-black uppercase">
                THE TUITION INVESTMENT
              </p>
              <p className="text-[10rem] md:text-[14rem] tracking-tighter leading-[0.8] italic font-black uppercase">
                $1000 <span className="text-4xl font-bold text-slate-500 align-middle ml-10 uppercase tracking-widest leading-none font-black">CAD / PP</span>
              </p>
           </div>

           <button 
             onClick={() => navigateTo('booking')} 
             className="relative z-10 bg-red-600 px-24 py-12 rounded-full text-4xl shadow-3xl hover:scale-110 transition-transform italic uppercase group border-4 border-white/10 font-black"
           >
             Enroll Cohort <ArrowRight className="inline ml-8 group-hover:translate-x-4 transition-transform font-black" size={64} />
           </button>
        </div>

        {/* Closing Quote */}
        <div className="mt-40 text-center max-w-4xl mx-auto italic font-black uppercase">
           <h3 className="text-5xl font-black italic mb-10 tracking-tighter uppercase leading-none text-slate-900 underline decoration-slate-100 underline-offset-8">
             Master the Craft.
           </h3>
           <p className="text-2xl text-slate-400 italic font-bold mb-16 uppercase tracking-normal">
             "Equip yourself with the tools of high-end storytelling."
           </p>
        </div>
      </div>
    </div>
  );
};

export default Bootcamp;
