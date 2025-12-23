import React from 'react';
import { ArrowLeft, ArrowRight, Smartphone, Lightbulb, Mic, MonitorPlay, Layers, CheckCircle } from 'lucide-react';

// --- Local Icon Helper for Canvas Preview Stability ---
// NOTE: On your GitHub, you can eventually import this from '../../components/UI'
const Icon = ({ name, size = 24, className = "" }) => {
  const icons = {
    smartphone: Smartphone,
    lightbulb: Lightbulb,
    mic: Mic,
    monitorPlay: MonitorPlay,
    layers: Layers,
    checkCircle: CheckCircle
  };
  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
};

const InHouse = ({ navigateTo }) => {
  return (
    <div className="animate-fade-in pt-40 pb-24 uppercase font-black selection:bg-red-600 tracking-tighter bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Navigation Back */}
        <button 
          onClick={() => navigateTo('workshops')} 
          className="text-red-600 flex items-center gap-4 mb-20 hover:-translate-x-3 transition-transform tracking-[0.5em] text-[10px] italic leading-none uppercase"
        >
          <ArrowLeft size={24} /> Back to Academy
        </button>

        <div className="flex flex-col lg:flex-row gap-32 items-center mb-40">
          {/* Left Side: Pitch */}
          <div className="lg:w-1/2">
            <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-[10px] tracking-[0.5em] mb-10 italic shadow-lg uppercase">
              Training Track 02
            </div>
            <h1 className="text-8xl md:text-[11rem] text-slate-900 mb-12 leading-[0.8] tracking-tighter italic uppercase underline decoration-slate-100 underline-offset-[20px]">
              In-House.
            </h1>
            <p className="text-4xl text-slate-300 mb-16 italic leading-[1.1] uppercase font-black">
              Train your team <br />to capture wins.
            </p>
            <p className="normal-case tracking-normal font-bold text-slate-500 leading-relaxed text-2xl italic mb-16 max-w-xl">
              Stop waiting for external agencies for every single post. We transform your sales and marketing staff into a high-performance content production unit working within your own brand standards.
            </p>
            <button 
              onClick={() => navigateTo('booking')} 
              className="w-full py-12 bg-slate-900 text-white rounded-[3rem] text-3xl shadow-3xl hover:scale-[1.03] transition-transform italic uppercase tracking-widest group border-4 border-white/10"
            >
              Request Onboarding <ArrowRight className="inline ml-6 group-hover:translate-x-4 transition-transform" size={48} />
            </button>
          </div>

          {/* Right Side: Visual Proof */}
          <div className="lg:w-1/2 relative group">
             <div className="absolute -inset-10 bg-red-600 rounded-[6rem] rotate-6 opacity-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=90&w=1200&auto=format&fit=crop" 
               className="relative rounded-[5rem] shadow-3xl brightness-75 grayscale group-hover:grayscale-0 transition-all duration-1000" 
               alt="Office Team Training" 
             />
             <div className="absolute -bottom-16 -right-16 bg-red-600 p-16 rounded-[4rem] text-white shadow-2xl animate-pulse group-hover:animate-none group-hover:scale-110 transition-transform">
                <Icon name="smartphone" size={80} />
             </div>
          </div>
        </div>
        
        {/* Capability Stack Grid */}
        <div className="bg-slate-50 border border-slate-100 p-24 rounded-[6rem] shadow-xl text-center">
           <h2 className="text-6xl text-slate-900 mb-20 italic uppercase underline decoration-red-600 underline-offset-12 tracking-tighter leading-none">
             The Capability Stack
           </h2>
           <div className="grid md:grid-cols-4 gap-12">
              {[
                { label: "SMARTPHONE CINEMA", icon: "smartphone", desc: "Master professional movement and framing using your phone." },
                { label: "OFFICE LIGHTING", icon: "lightbulb", desc: "Look professional in any corporate or office environment." },
                { label: "AUDIO MASTERY", icon: "mic", desc: "Capture clean studio sound in busy, real-world spaces." },
                { label: "TEAM WORKFLOW", icon: "layers", desc: "Simplified SOPs for high-frequency daily content creation." }
              ].map((f, i) => (
                <div key={i} className="bg-white p-12 rounded-[4.5rem] shadow-sm border border-slate-100 group hover:bg-red-600 transition-all cursor-default">
                   <Icon name={f.icon} className="text-red-600 group-hover:text-white mx-auto mb-8 transition-colors" size={64} />
                   <p className="text-lg font-black group-hover:text-white leading-none tracking-widest uppercase mb-2 italic">{f.label}</p>
                   <p className="normal-case text-slate-400 group-hover:text-white/60 text-xs italic font-medium">{f.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Benefits Quote */}
        <div className="mt-40 text-center max-w-4xl mx-auto">
           <h3 className="text-5xl font-black italic mb-10 tracking-tighter uppercase leading-none text-slate-900 underline decoration-slate-100 underline-offset-8">Eliminate production bottlenecks.</h3>
           <p className="text-2xl text-slate-400 italic font-bold mb-16 uppercase tracking-normal">"Own the media, own the market."</p>
        </div>
      </div>
    </div>
  );
};

export default InHouse;
