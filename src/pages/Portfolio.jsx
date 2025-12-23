import React, { useEffect } from 'react';
import { ArrowRight, Rocket, Layers, CheckCircle, Camera, ShieldCheck, BarChart3, Users } from 'lucide-react';

/**
 * ICAN FILM - PORTFOLIO PAGE (ULTRA-STABLE VERSION)
 * FIXED: Visibility issue by defaulting to opacity-100 and ensuring styles are locally injected.
 * FIXED: Navigation overlap with pt-48 clearance.
 * FIXED: Corrected Icon mapping for internal components.
 */

// --- INTERNALIZED UI COMPONENTS (Fixes resolution issues in Canvas/Preview) ---

const Icon = ({ name, size = 24, className = "" }) => {
  const icons = {
    camera: Camera,
    rocket: Rocket,
    layers: Layers,
    shieldCheck: ShieldCheck,
    barChart3: BarChart3,
    users: Users,
    checkCircle: CheckCircle,
    arrowRight: ArrowRight
  };
  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
};

const VideoLoop = ({ type, id, title }) => {
  if (type === 'youtube') {
    return (
      <div className="relative w-full h-full overflow-hidden rounded-[3rem] shadow-2xl bg-black border border-white/5 group">
        <iframe
          className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover brightness-90 contrast-110"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0&iv_load_policy=3&enablejsapi=1`}
          title={title}
          allow="autoplay; encrypted-media"
        ></iframe>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-[3rem] shadow-2xl bg-slate-900 border border-white/5 group">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-90 contrast-110"
        poster={`https://image.mux.com/${id}/thumbnail.jpg?width=1200&time=1`}
      >
        <source src={`https://stream.mux.com/${id}/medium.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent group-hover:opacity-0 transition-opacity duration-700"></div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---

const Portfolio = ({ navigateTo }) => {
  // Debug log to verify component mounting in the console
  useEffect(() => {
    console.log("ICAN Portfolio Component Mounted Successfully");
  }, []);

  const portfolioItems = [
    {
      client: "Gems Cup Calgary",
      type: "Event Cinematic Multiplier",
      problem: "A premier national horse competition featuring business leaders. Coverage would usually disappear 24 hours after the event.",
      solution: "Full cinematic deployment with drone operations and high-end 4K ground units. We captured the prestige and the intensity in 4K.",
      result: "Produced a strategic 3-month drip campaign. Early-bird ticket sales for the next year increased by 25% within 30 days.",
      videoType: 'youtube',
      videoId: 'Z-4poApHgkE',
      side: "left"
    },
    {
      client: "Estavio Real Estate Group",
      type: "Weekly Education Retainer",
      problem: "High-value weekly training sessions were locked inside a physical room with only a handful of agents present.",
      solution: "Consistent capture system. We turned 1-hour professional sessions into 10+ authority-building Reels for LinkedIn and IG.",
      result: "Built Estavio into a top-of-mind educational brand in the Calgary real estate market. Recruitment is now driven by content visibility.",
      videoType: 'mux',
      videoId: 'gJzbHrC01LBX00QmdojNxoA00L2ncGo02auPd46DKqqEmKM',
      side: "right"
    },
    {
      client: "MOA Program",
      type: "Educational Storytelling",
      problem: "Vocational programs often look sterile. They needed to show the high-energy professional lifestyle students actually achieve.",
      solution: "High-pacing marketing production focused on hands-on technology and student energy. Designed for modern social-first attention.",
      result: "The cornerstone marketing asset for their quarterly enrollment campaigns. Significant boost in digital inquiries across Alberta.",
      videoType: 'mux',
      videoId: 'tHQPOaEigvny7OAkC5yAfxGd7cykNJEdMF2vUXLolXc',
      side: "left"
    }
  ];

  return (
    <div className="opacity-100 animate-fade-in pt-48 pb-24 selection:bg-red-600 selection:text-white uppercase font-black tracking-tighter bg-white italic leading-none min-h-screen">
      {/* Explicit style injection for reliability */}
      <style>{`
        @keyframes portfolio-fade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: portfolio-fade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .shadow-3xl {
          box-shadow: 0 50px 100px -20px rgba(0,0,0,0.25), 0 30px 60px -30px rgba(0,0,0,0.3);
        }
      `}</style>

      <div className="container mx-auto px-6">
        
        {/* ULTRA-SCALE HEADER */}
        <div className="text-center max-w-5xl mx-auto mb-48">
          <div className="inline-block bg-red-100 text-red-600 px-8 py-3 rounded-full text-[11px] uppercase tracking-[0.6em] mb-12 italic shadow-sm leading-none font-black">
            The Evidence
          </div>
          <h1 className="text-8xl md:text-[14rem] text-slate-900 mb-10 tracking-tighter leading-[0.8] italic uppercase font-black">
            OUR <span className="text-red-600 underline decoration-slate-100 underline-offset-[24px]">PROOF.</span>
          </h1>
          <p className="text-3xl text-slate-400 italic opacity-60 font-black uppercase mb-10 leading-tight tracking-tight">
            We don't hand over raw files. We deliver market momentum.
          </p>
        </div>

        {/* CASE STUDIES */}
        <div className="space-y-[300px] mb-48">
          {portfolioItems.map((item, i) => (
            <div key={i} className={`flex flex-col ${item.side === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-32 font-black uppercase italic`}>
              
              {/* Massive Video Frame */}
              <div className="lg:w-[65%] w-full h-[750px] relative group transform hover:scale-[1.02] transition-transform duration-1000">
                 <div className="absolute -inset-16 bg-red-600/10 rounded-full blur-[140px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                 <VideoLoop type={item.videoType} id={item.videoId} title={item.client} />
                 
                 {/* Floating Indicator */}
                 <div className="absolute -top-8 -right-8 bg-white p-8 rounded-full shadow-3xl border border-slate-100 transform rotate-12 group-hover:rotate-0 transition-transform duration-700 hidden lg:block text-red-600 leading-none">
                    <Icon name="rocket" size={48} />
                 </div>
              </div>

              {/* Project Detail */}
              <div className="lg:w-[35%] text-left font-black uppercase italic">
                <div className="inline-flex items-center gap-4 bg-slate-900 text-white font-black text-[11px] uppercase tracking-[0.5em] px-8 py-3 rounded-full mb-12 italic shadow-2xl leading-none">
                   {item.type}
                </div>
                <h3 className="text-6xl md:text-7xl font-black mb-12 italic tracking-tighter leading-[0.85] uppercase text-slate-900 font-black">
                   {item.client}
                </h3>
                
                <div className="space-y-12 mb-16 font-black uppercase italic">
                  <div className="border-l-8 border-slate-100 pl-10">
                    <h4 className="text-slate-300 text-[11px] uppercase tracking-[0.5em] mb-4 italic leading-none font-black">THE STRUGGLE</h4>
                    <p className="text-2xl text-slate-500 font-bold leading-relaxed italic normal-case tracking-normal">
                      {item.problem}
                    </p>
                  </div>
                  
                  <div className="border-l-8 border-red-600 pl-10">
                    <h4 className="text-red-600 text-[11px] uppercase tracking-[0.5em] mb-4 italic leading-none font-black uppercase">THE RESULT</h4>
                    <p className="text-4xl text-slate-900 font-black leading-tight italic tracking-tighter uppercase underline decoration-red-100 underline-offset-8 font-black">
                      {item.result}
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => navigateTo('booking')} 
                  className="flex items-center gap-8 text-red-600 font-black text-2xl hover:translate-x-6 transition-all italic uppercase tracking-widest group leading-none font-black"
                >
                  Start Your Story <ArrowRight size={40} className="group-hover:translate-x-4 transition-transform font-black" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA BLOCK */}
        <div className="bg-slate-900 rounded-[6rem] p-24 text-center text-white relative overflow-hidden shadow-3xl italic font-black uppercase">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] -translate-y-40 translate-x-40 font-black"></div>
           <div className="relative z-10 font-black">
             <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter leading-none italic uppercase font-black">Ready for <br /><span className="text-red-600 underline decoration-white/10 underline-offset-[20px] font-black italic uppercase">Dominance?</span></h2>
             <p className="text-2xl text-gray-400 font-bold max-w-3xl mx-auto italic normal-case mb-16 opacity-80 leading-relaxed font-black">
               Consistency is the byproduct of a system, not willpower. We provide the system.
             </p>
             <button 
              onClick={() => navigateTo('booking')} 
              className="bg-red-600 hover:bg-red-700 text-white px-20 py-10 rounded-full font-black text-4xl transition-all transform hover:scale-105 shadow-3xl uppercase tracking-widest italic leading-none border-4 border-white/10 font-black"
             >
               Get Free Audit
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
