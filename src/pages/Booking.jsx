import React from 'react';
import { ArrowRight, CheckCircle, Instagram, Linkedin, Youtube } from 'lucide-react';

// --- Local Icon Helper for Canvas Preview Stability ---
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
    <div className="animate-fade-in pt-48 pb-24 bg-slate-50 min-h-screen uppercase font-black tracking-tighter selection:bg-red-600">
      <div className="container mx-auto px-6 max-w-7xl text-center lg:text-left">
        <div className="bg-white rounded-[6rem] shadow-3xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          
          {/* Brand/Trust Side - Now with Production Imagery */}
          <div className="lg:w-2/5 bg-slate-900 p-20 md:p-32 text-white flex flex-col justify-between relative overflow-hidden text-center lg:text-left">
             <img 
               src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop" 
               className="absolute inset-0 w-full h-full object-cover opacity-20 brightness-50"
               alt="Production Studio"
             />
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] -translate-y-20 translate-x-20"></div>
             
             <div className="relative z-10">
                <h2 className="text-8xl font-black mb-16 italic tracking-tighter leading-[0.8] uppercase">
                  LET'S <br /><span className="text-red-600 italic underline decoration-white/10 decoration-8 underline-offset-[24px]">SCALE.</span>
                </h2>
                <div className="space-y-16">
                   <div className="flex gap-10 items-start justify-center lg:justify-start">
                      <Icon name="checkCircle" className="text-red-500 shrink-0 mt-3" size={48} /> 
                      <span className="text-gray-300 font-black uppercase tracking-[0.4em] text-[11px] leading-relaxed text-left">
                        24-HOUR RESPONSE <br />TIME GUARANTEE
                      </span>
                   </div>
                   <div className="flex gap-10 items-start justify-center lg:justify-start">
                      <Icon name="checkCircle" className="text-red-500 shrink-0 mt-3" size={48} /> 
                      <span className="text-gray-300 font-black uppercase tracking-[0.4em] text-[11px] leading-relaxed text-left">
                        CUSTOM MARKETING <br />AUDIT SESSION
                      </span>
                   </div>
                </div>
             </div>

             <div className="pt-24 border-t border-white/10 mt-24 relative z-10">
                <p className="text-[11px] font-black text-slate-500 uppercase tracking-[1em] mb-12 italic leading-none">Inquiry Hub</p>
                <p className="text-4xl font-black tracking-tighter uppercase italic text-white hover:text-red-600 transition-colors cursor-pointer mb-12">
                  HELLO@ICANFILM.CA
                </p>
                
                {/* Social Connect Anchors */}
                <div className="flex gap-10 justify-center lg:justify-start opacity-40 hover:opacity-100 transition-opacity">
                   <Icon name="instagram" size={28} className="hover:text-red-600 cursor-pointer transition-colors" />
                   <Icon name="linkedin" size={28} className="hover:text-red-600 cursor-pointer transition-colors" />
                   <Icon name="youtube" size={28} className="hover:text-red-600 cursor-pointer transition-colors" />
                </div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-[0.5em] mt-10 leading-none">Calgary, AB • Macleod Trail</p>
             </div>
          </div>

          {/* Form Side - High Contrast Professional Form */}
          <div className="lg:w-3/5 p-20 md:p-32">
            <form className="grid gap-20" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-20">
                 <div className="space-y-6">
                    <label className="text-[11px] font-black uppercase text-slate-300 tracking-[0.8em] italic ml-4 leading-none">FULL NAME</label>
                    <input type="text" className="w-full px-12 py-10 rounded-[3rem] bg-slate-50 border border-slate-100 outline-none focus:ring-8 focus:ring-red-600/5 focus:border-red-600 transition-all font-black text-slate-900 placeholder:opacity-30 uppercase italic text-3xl" placeholder="Jane Doe" />
                 </div>
                 <div className="space-y-6">
                    <label className="text-[11px] font-black uppercase text-slate-300 tracking-[0.8em] italic ml-4 leading-none">BUSINESS</label>
                    <input type="text" className="w-full px-12 py-10 rounded-[3rem] bg-slate-50 border border-slate-100 outline-none focus:ring-8 focus:ring-red-600/5 focus:border-red-600 transition-all font-black text-slate-900 placeholder:opacity-30 uppercase italic text-3xl" placeholder="Calgary Ent." />
                 </div>
              </div>
              <div className="space-y-6">
                 <label className="text-[11px] font-black uppercase text-slate-300 tracking-[0.8em] italic ml-4 leading-none text-red-600">PRIMARY STRUGGLE</label>
                 <textarea rows="6" className="w-full px-12 py-10 rounded-[3rem] bg-slate-50 border border-slate-100 outline-none focus:ring-8 focus:ring-red-600/5 focus:border-red-600 transition-all font-black text-slate-900 placeholder:opacity-30 uppercase italic text-3xl leading-tight" placeholder="What's your biggest challenge?"></textarea>
              </div>
              <button className="w-full bg-red-600 text-white font-black py-12 rounded-[4rem] shadow-3xl uppercase tracking-[0.6em] text-2xl hover:scale-[1.03] transition-all flex items-center justify-center gap-10 italic group border-4 border-white/10">
                SEND INQUIRY <ArrowRight size={56} className="group-hover:translate-x-8 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
