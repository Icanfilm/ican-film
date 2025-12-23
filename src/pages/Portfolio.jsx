import React from 'react';
import { ArrowRight, Rocket, Layers, CheckCircle } from 'lucide-react';

/**
 * ICAN FILM - PORTFOLIO PAGE (MODULAR)
 * FIXED: Internalized VideoLoop and Icons to prevent resolution errors in preview.
 * ADDED: Ultra-scale "Evidence" layout with high-contrast case studies.
 */

// --- INTERNALIZED UI COMPONENTS ---
const VideoLoop = ({ type, id, title }) => {
  if (type === 'youtube') {
    return (
      <div className="relative w-full h-full overflow-hidden rounded-[3rem] shadow-2xl bg-black border border-white/5 group">
        <iframe
          className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover brightness-90 contrast-110"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0&iv_load_policy=3`}
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

const Portfolio = ({ navigateTo }) => {
  const portfolioItems = [
    {
      client: "Gems Cup Calgary",
      type: "Event Cinematic Multiplier",
      problem: "A premier horse competition featuring business leaders. Coverage would usually disappear 24 hours after the final whistle.",
      solution: "Full cinematic deployment with drone operations and ground units. We captured the prestige of the keynote and the intensity of the track.",
      result: "Produced a strategic 3-month drip campaign. Early-bird ticket sales for the following year increased by 25% within 30 days.",
      videoType: 'youtube',
      videoId: 'Z-4poApHgkE',
      side: "left"
    },
    {
      client: "Estavio Real Estate",
      type: "Weekly Knowledge Engine",
      problem: "High-value weekly training sessions were locked inside a physical room with only 20 agents.",
      solution: "Consistent capture system. We turned 1-hour professional sessions into 10+ authority-building Reels for LinkedIn and IG.",
      result: "Built Estavio into the #1 educational real estate brand in Calgary. Recruitment is now driven entirely by content visibility.",
      videoType: 'mux',
      videoId: 'gJzbHrC01LBX00QmdojNxoA00L2ncGo02auPd46DKqqEmKM',
      side: "right"
    },
    {
      client: "MOA Program",
      type: "Educational Storytelling",
      problem: "Vocational programs often look sterile. They needed to show the professional lifestyle students actually achieve.",
      solution: "High-pacing marketing production focused on hands-on technology and student energy. Designed for modern social-first attention.",
      result: "Significant boost in digital inquiries. The cornerstone marketing asset for their quarterly enrollment campaigns across Alberta.",
      videoType: 'mux',
      videoId: 'tHQPOaEigvny7OAkC5yAfxGd7cykNJEdMF2vUXLolXc',
      side: "left"
    }
  ];

  return (
    <div className="animate-fade-in pt-40 pb-24 selection:bg-red-600 selection:text-white uppercase font-black tracking-tighter bg-white">
      <div className="container mx-auto px-6">
        
        {/* ULTRA-SCALE HEADER */}
        <div className="text-center max-w-5xl mx-auto mb-48">
          <div className="inline-block bg-red-100 text-red-600 px-8 py-3 rounded-full text-[11px] uppercase tracking-[0.6em] mb-12 italic shadow-sm leading-none">
            The Evidence
          </div>
          <h1 className="text-8xl md:text-[14rem] text-slate-900 mb-10 tracking-tighter leading-[0.8] italic uppercase">
            OUR <span className="text-red-600 underline decoration-slate-100 underline-offset-[24px]">PROOF.</span>
          </h1>
          <p className="text-3xl text-slate-400 italic opacity-60 font-black uppercase mb-10 leading-tight tracking-tight">
            We don't hand over raw files. We deliver market momentum.
          </p>
        </div>

        {/* CASE STUDIES */}
        <div className="space-y-[300px] mb-48">
          {portfolioItems.map((item, i) => (
            <div key={i} className={`flex flex-col ${item.side === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-32`}>
              
              {/* Massive Video Frame */}
              <div className="lg:w-[65%] w-full h-[750px] relative group transform hover:scale-[1.02] transition-transform duration-1000">
                 <div className="absolute -inset-16 bg-red-600/10 rounded-full blur-[140px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                 <VideoLoop type={item.videoType} id={item.videoId} title={item.client} />
                 
                 {/* Float Badge */}
                 <div className="absolute -top-8 -right-8 bg-white p-8 rounded-full shadow-2xl border border-slate-100 transform rotate-12 group-hover:rotate-0 transition-transform duration-700 hidden lg:block text-red-600">
                    <Rocket size={40} />
                 </div>
              </div>

              {/* Project Detail */}
              <div className="lg:w-[35%]">
                <div className="inline-flex items-center gap-4 bg-slate-900 text-white font-black text-[11px] uppercase tracking-[0.5em] px-8 py-3 rounded-full mb-12 italic shadow-2xl">
                   {item.type}
                </div>
                <h3 className="text-6xl md:text-7xl font-black mb-12 italic tracking-tighter leading-[0.85] uppercase text-slate-900">
                   {item.client}
                </h3>
                
                <div className="space-y-12 mb-16">
                  <div className="border-l-8 border-slate-100 pl-10">
                    <h4 className="text-slate-300 text-[11px] uppercase tracking-[0.5em] mb-4 italic leading-none font-black">THE STRUGGLE</h4>
                    <p className="text-xl text-slate-500 font-bold leading-relaxed italic normal-case tracking-normal">
                      {item.problem}
                    </p>
                  </div>
                  
                  <div className="border-l-8 border-red-600 pl-10">
                    <h4 className="text-red-600 text-[11px] uppercase tracking-[0.5em] mb-4 italic leading-none font-black uppercase">THE ICAN RESULT</h4>
                    <p className="text-4xl text-slate-900 font-black leading-tight italic tracking-tighter uppercase underline decoration-red-100 underline-offset-8">
                      {item.result}
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => navigateTo('booking')} 
                  className="flex items-center gap-6 text-red-600 font-black text-xl hover:translate-x-4 transition-transform italic uppercase tracking-widest group"
                >
                  Start Your Story <ArrowRight className="group-hover:scale-125 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA BLOCK */}
        <div className="bg-slate-900 rounded-[6rem] p-24 text-center text-white relative overflow-hidden shadow-3xl">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] -translate-y-40 translate-x-40"></div>
           <div className="relative z-10">
             <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter leading-none italic uppercase">Ready for <br /><span className="text-red-600 underline decoration-white/10 underline-offset-[20px]">Dominance?</span></h2>
             <p className="text-2xl text-gray-400 font-bold max-w-3xl mx-auto italic normal-case mb-16 opacity-80 leading-relaxed">
               Consistency is the byproduct of a system, not willpower. We are the system.
             </p>
             <button 
              onClick={() => navigateTo('booking')} 
              className="bg-red-600 hover:bg-red-700 text-white px-20 py-10 rounded-full font-black text-3xl transition-all transform hover:scale-105 shadow-2xl uppercase tracking-widest italic leading-none"
             >
               Get Your Free Audit
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
