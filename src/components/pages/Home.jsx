import React from 'react';
import { 
  ArrowRight, 
  Clapperboard, 
  Clock, 
  Timer, 
  Rocket, 
  Layers, 
  Camera, 
  TrendingUp, 
  TrendingDown, 
  MousePointer2,
  Quote
} from 'lucide-react';

// --- Local Icon Helper for Preview Stability ---
// (You can delete this once you've synced src/components/UI.jsx on GitHub)
const Icon = ({ name, size = 24, className = "" }) => {
  const icons = {
    mousePointer2: MousePointer2,
    quote: Quote,
    clapperboard: Clapperboard,
    camera: Camera,
    layers: Layers,
    rocket: Rocket,
    trendingUp: TrendingUp,
    trendingDown: TrendingDown,
    clock: Clock,
    timer: Timer
  };
  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
};

const Home = ({ navigateTo }) => {
  return (
    <div className="animate-fade-in font-sans selection:bg-red-600 selection:text-white">
      {/* 1. ULTRA-SCALE HERO SECTION */}
      <section className="relative h-screen min-h-[900px] flex items-center bg-slate-900 overflow-hidden">
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10"></div>
        
        {/* Professional Production Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
           <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=90&w=2400&auto=format&fit=crop" 
            alt="Professional Cinematic Camera" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom brightness-[0.4] contrast-125"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 bg-red-600/10 text-red-500 px-6 py-3 rounded-full text-[10px] font-black mb-10 border border-red-600/20 backdrop-blur-md uppercase tracking-[0.4em]">
              <Clapperboard size={16} className="animate-pulse" />
              Calgary's Strategic Event-to-Content Agency
            </div>
            <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.8] mb-10 tracking-tighter uppercase">
              WE CAPTURE.<br />
              YOU <span className="text-red-600 italic">DOMINATE.</span>
            </h1>
            <p className="text-2xl md:text-4xl text-gray-200 mb-14 max-w-4xl font-medium leading-tight tracking-tight">
              Stop letting your events die when the lights go out. We turn your live experiences into <span className="text-white font-black underline decoration-red-600 underline-offset-8 italic">30 days of high-ROI content.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <button 
                onClick={() => navigateTo('booking')} 
                className="bg-red-600 hover:bg-red-700 text-white px-14 py-8 rounded-[2.5rem] font-black text-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-5 shadow-3xl uppercase tracking-widest italic group"
              >
                Start Free Audit <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={() => navigateTo('services')} 
                className="bg-white/10 hover:bg-white text-white hover:text-slate-900 backdrop-blur-xl border border-white/20 px-14 py-8 rounded-[2.5rem] font-black text-2xl transition-all flex items-center justify-center gap-5 uppercase tracking-widest shadow-2xl"
              >
                See Packages
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/30 hidden md:block">
          <Icon name="mousePointer2" size={36} />
        </div>
      </section>

      {/* 2. THE STRATEGY GAP - High Contrast Comparison */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-32">
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none uppercase">
              The <span className="text-red-600 italic underline decoration-slate-100 underline-offset-[16px]">Content Gap.</span>
            </h2>
            <p className="text-2xl text-slate-400 font-bold italic max-w-2xl mx-auto uppercase">
              Calgary businesses are doing great things. No one is seeing them.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Reality Card */}
            <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100 flex flex-col justify-center relative group hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <h3 className="text-4xl font-black text-slate-300 mb-12 flex items-center gap-4 uppercase italic tracking-tighter leading-none">
                <TrendingDown size={32} /> The Reality
              </h3>
              <div className="space-y-16 relative z-10">
                 <div className="flex items-start gap-8">
                    <div className="bg-white p-6 rounded-3xl shadow-sm text-slate-300 border border-slate-100"><Clock size={40} /></div>
                    <div>
                      <p className="text-4xl font-black text-slate-900 leading-none mb-3 tracking-tighter uppercase italic">50% OF OWNERS</p>
                      <p className="text-xl text-slate-500 font-medium leading-tight italic normal-case">Devote less than 1 hour a day to marketing. Consistency is the first thing to die.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-8">
                    <div className="bg-white p-6 rounded-3xl shadow-sm text-slate-300 border border-slate-100"><Timer size={40} /></div>
                    <div>
                      <p className="text-4xl font-black text-slate-900 leading-none mb-3 tracking-tighter uppercase italic">44% STALLING</p>
                      <p className="text-xl text-slate-500 font-medium leading-tight italic normal-case">Procrastinate on social media because they lack a capture-to-post system.</p>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* The "Pop-Up" Solution Card */}
            <div className="bg-slate-900 p-16 rounded-[4rem] border-4 border-red-600 flex flex-col justify-center relative overflow-hidden shadow-3xl transform hover:scale-[1.03] transition-all duration-700 group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-[120px] transition-all duration-1000 group-hover:bg-red-600/20 group-hover:scale-125"></div>
              <h3 className="text-4xl font-black text-red-500 mb-12 flex items-center gap-4 relative z-10 uppercase italic tracking-tighter leading-none">
                <TrendingUp size={32} /> The ICAN Edge
              </h3>
              <div className="space-y-16 relative z-10">
                 <div className="flex items-start gap-8">
                    <div className="bg-red-600 p-6 rounded-3xl shadow-2xl text-white transform group-hover:rotate-12 transition-transform duration-500">
                      <Rocket size={40} />
                    </div>
                    <div>
                      <p className="text-4xl font-black text-white leading-none mb-3 tracking-tighter uppercase italic text-shadow-lg">89% ROI</p>
                      <p className="text-xl text-red-400 font-medium leading-tight italic normal-case">Video drives massive traffic & sales faster than any other digital medium.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-8">
                    <div className="bg-red-600 p-6 rounded-3xl shadow-2xl text-white transform group-hover:-rotate-12 transition-transform duration-500">
                      <Layers size={40} />
                    </div>
                    <div>
                      <p className="text-4xl font-black text-white leading-none mb-3 tracking-tighter uppercase italic text-shadow-lg">300% REACH</p>
                      <p className="text-xl text-red-400 font-medium leading-tight italic normal-case">Repurposing one capture day into 15+ assets increases your visibility 3x.</p>
                    </div>
                 </div>
              </div>
              {/* Overlay glow on hover */}
              <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE CONTENT ENGINE - Ultra High-End Multiplier Visuals */}
      <section className="py-40 bg-slate-950 text-white overflow-hidden relative selection:bg-red-600">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-32">
             <h2 className="text-6xl md:text-[10rem] font-black mb-10 tracking-tighter leading-none italic uppercase">
               THE CONTENT <br />
               <span className="text-red-600 underline decoration-red-600/30">ENGINE.</span>
             </h2>
             <p className="text-3xl text-gray-400 italic font-bold max-w-2xl mx-auto">
               "We convert one-off moments into ongoing digital momentum."
             </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
             {[
               { 
                  title: "CAPTURE", 
                  icon: "camera", 
                  desc: "One focused production day per month. We capture your team, and your wins in cinematic 4K.", 
                  img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000&auto=format&fit=crop" 
               },
               { 
                  title: "FACTORY", 
                  icon: "layers", 
                  desc: "Our editors slice raw footage into Reels, Stills, and Stories optimized for LinkedIn, IG, and TikTok.", 
                  img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop" 
               },
               { 
                  title: "DOMINATE", 
                  icon: "rocket", 
                  desc: "A full month of marketing assets delivered and scheduled. You stay visible while you sleep.", 
                  img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
               }
             ].map((step, i) => (
               <div key={i} className="group relative h-[700px] rounded-[4rem] overflow-hidden border border-white/5 hover:border-red-600/60 transition-all duration-1000 transform hover:-translate-y-6 shadow-3xl">
                  <img 
                    src={step.img} 
                    className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:scale-110 transition-transform duration-1000 group-hover:brightness-[0.2]" 
                    alt={step.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                  
                  {/* Content that "Pops Up" on hover */}
                  <div className="absolute bottom-20 left-12 right-12 z-20 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                     <div className="bg-red-600 w-24 h-24 rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl transform group-hover:rotate-12 transition-transform duration-700 border-4 border-white/10">
                        <Icon name={step.icon} size={48} className="text-white" />
                     </div>
                     <h3 className="text-6xl font-black mb-6 italic tracking-tighter uppercase leading-none">{step.title}</h3>
                     <p className="text-xl text-gray-400 font-medium italic group-hover:text-white transition-colors duration-500 opacity-90 leading-relaxed">
                       {step.desc}
                     </p>
                  </div>

                  <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none"></div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. THE LOCAL TRUST - Brand Voice Restored */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <h2 className="text-6xl md:text-8xl font-black mb-16 italic tracking-tighter uppercase leading-none">
            The <span className="text-red-600">Local</span> touch.
          </h2>
          <p className="text-3xl text-slate-500 font-bold leading-relaxed italic mb-24 opacity-60 uppercase tracking-tight">
            "As Calgarians, we know Stampede week is a huge content opportunity—and we know how to keep you visible in the quiet months too."
          </p>
          <div className="grid md:grid-cols-2 gap-16 text-left">
             <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100 shadow-xl hover:-translate-y-2 hover:border-red-600/30 transition-all duration-500 group">
                <Icon name="quote" className="text-red-600 mb-8 opacity-20 group-hover:opacity-100 transition-opacity" size={64} />
                <p className="text-2xl italic font-bold text-slate-700 leading-relaxed mb-12">
                  "ICAN Film positions itself as the solution to overwhelm. They took the entire content burden off our shoulders."
                </p>
                <div className="flex gap-6 items-center border-t border-slate-200 pt-10">
                   <div className="w-20 h-20 rounded-full bg-slate-200 overflow-hidden border-4 border-white shadow-lg">
                      <img src="https://i.pravatar.cc/150?u=cal1" alt="Nathan G" />
                   </div>
                   <div>
                      <p className="font-black text-slate-900 uppercase text-sm tracking-widest italic leading-none mb-2">Nathan G.</p>
                      <p className="text-[10px] font-black uppercase text-red-600 tracking-tighter">CEO, Calgary Tech Hub</p>
                   </div>
                </div>
             </div>
             <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100 shadow-xl hover:-translate-y-2 hover:border-red-600/30 transition-all duration-500 group">
                <Icon name="quote" className="text-red-600 mb-8 opacity-20 group-hover:opacity-100 transition-opacity" size={64} />
                <p className="text-2xl italic font-bold text-slate-700 leading-relaxed mb-12">
                  "One gala turned into 3 months of digital recruitment. The ROI was immediate and undeniable."
                </p>
                <div className="flex gap-6 items-center border-t border-slate-200 pt-10">
                   <div className="w-20 h-20 rounded-full bg-slate-200 overflow-hidden border-4 border-white shadow-lg">
                      <img src="https://i.pravatar.cc/150?u=cal2" alt="Sarah L" />
                   </div>
                   <div>
                      <p className="font-black text-slate-900 uppercase text-sm tracking-widest italic leading-none mb-2">Sarah L.</p>
                      <p className="text-[10px] font-black uppercase text-red-600 tracking-tighter">Director, Gems Cup</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
