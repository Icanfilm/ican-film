import React from 'react';
import { ArrowRight, CheckCircle, Instagram, Linkedin, Youtube } from 'lucide-react';

/**
 * ICAN FILM - BOOKING PAGE (MODULAR)
 * FIXED: Internalized UI helper to prevent resolution errors in preview.
 * ADDED: High-Scale Inquiry Form with production studio imagery and trust signals.
 */

// --- INTERNALIZED UI HELPER ---
const Icon = ({ name, size = 24, className = "" }) => {
  const icons = {
    checkCircle: CheckCircle,
    instagram: Instagram,
    linkedin: Linkedin,
    youtube: Youtube
  };
  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
};

const Booking = () => {
  return (
    <div className="animate-fade-in pt-40 pb-24 bg-slate-50 min-h-screen uppercase font-black tracking-tighter selection:bg-red-600">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="bg-white rounded-[4rem] md:rounded-[6rem] shadow-3xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          
          {/* 1. BRAND/TRUST SIDE */}
          <div className="lg:w-2/5 bg-slate-900 p-16 md:p-24 text-white flex flex-col justify-between relative overflow-hidden">
             {/* Studio Background Overlay */}
             <img 
               src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop" 
               className="absolute inset-0 w-full h-full object-cover opacity-20 brightness-50"
               alt="Production Studio"
             />
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] -translate-y-20 translate-x-20"></div>
             
             <div className="relative z-10">
                <h2 className="text-7xl md:text-8xl font-black mb-16 italic tracking-tighter leading-[0.8] uppercase">
                  LET'S <br /><span className="text-red-600 italic underline decoration-white/10 decoration-8 underline-offset-[24px]">SCALE.</span>
                </h2>
                <div className="space-y-12">
                   <div className="flex gap-8 items-start">
                      <Icon name="checkCircle" className="text-red-500 shrink-0 mt-2" size={40} /> 
                      <span className="text-gray-300 font-black uppercase tracking-[0.4em] text-[10px] leading-relaxed">
                        24-HOUR RESPONSE <br />TIME GUARANTEE
                      </span>
                   </div>
                   <div className="flex gap-8 items-start">
                      <Icon name="checkCircle" className="text-red-500 shrink-0 mt-2" size={40} /> 
                      <span className="text-gray-300 font-black uppercase tracking-[0.4em] text-[10px] leading-relaxed">
                        CUSTOM MARKETING <br />AUDIT SESSION
                      </span>
                   </div>
                   <div className="flex gap-8 items-start">
                      <Icon name="checkCircle" className="text-red-500 shrink-0 mt-2" size={40} /> 
                      <span className="text-gray-300 font-black uppercase tracking-[0.4em] text-[10px] leading-relaxed">
                        CALGARY-BASED <br />LOCAL EXPERTISE
                      </span>
                   </div>
                </div>
             </div>

             <div className="pt-20 border-t border-white/10 mt-20 relative z-10">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.8em] mb-10 italic leading-none">Inquiry Hub</p>
                <p className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic text-white hover:text-red-600 transition-colors cursor-pointer mb-10">
                  HELLO@ICANFILM.CA
                </p>
                
                <div className="flex gap-8 opacity-40 hover:opacity-100 transition-opacity">
                   <Icon name="instagram" size={24} className="hover:text-red-600 cursor-pointer transition-colors" />
                   <Icon name="linkedin" size={24} className="hover:text-red-600 cursor-pointer transition-colors" />
                   <Icon name="youtube" size={24} className="hover:text-red-600 cursor-pointer transition-colors" />
                </div>
                <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.4em] mt-10 leading-none">Calgary, AB • Macleod Trail</p>
             </div>
          </div>

          {/* 2. INQUIRY FORM SIDE */}
          <div className="lg:w-3/5 p-16 md:p-24 bg-white italic font-black uppercase">
            <form className="grid gap-16" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-16">
                 <div className="space-y-6">
                    <label className="text-[10px] font-black uppercase text-slate-300 tracking-[0.6em] italic ml-4 leading-none">FULL NAME</label>
                    <input type="text" className="w-full px-10 py-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 outline-none focus:ring-8 focus:ring-red-600/5 focus:border-red-600 transition-all font-black text-slate-900 placeholder:opacity-30 uppercase italic text-2xl" placeholder="Jane Doe" />
                 </div>
                 <div className="space-y-6">
                    <label className="text-[10px] font-black uppercase text-slate-300 tracking-[0.6em] italic ml-4 leading-none">BUSINESS</label>
                    <input type="text" className="w-full px-10 py-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 outline-none focus:ring-8 focus:ring-red-600/5 focus:border-red-600 transition-all font-black text-slate-900 placeholder:opacity-30 uppercase italic text-2xl" placeholder="Calgary Ent." />
                 </div>
              </div>
              <div className="space-y-6">
                 <label className="text-[10px] font-black uppercase text-slate-300 tracking-[0.6em] italic ml-4 leading-none text-red-600">PRIMARY STRUGGLE</label>
                 <textarea rows="5" className="w-full px-10 py-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 outline-none focus:ring-8 focus:ring-red-600/5 focus:border-red-600 transition-all font-black text-slate-900 placeholder:opacity-30 uppercase italic text-2xl leading-tight" placeholder="What is your biggest marketing challenge?"></textarea>
              </div>
              <button className="w-full bg-red-600 text-white font-black py-10 rounded-[3rem] shadow-3xl uppercase tracking-[0.5em] text-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-8 italic group border-4 border-white/10">
                SEND INQUIRY <ArrowRight size={40} className="group-hover:translate-x-6 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
