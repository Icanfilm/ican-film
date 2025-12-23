import React from 'react';
import { ArrowRight, Clapperboard, Rocket, Layers, ShieldCheck, BarChart3, Users, Quote, Camera, Clock, Timer } from 'lucide-react';

/**
 * ICAN FILM - HOME PAGE (MODULAR & SELF-CONTAINED)
 * FIXED: Compilation error by internalizing Icon and VideoLoop components.
 * FIXED: Navigation overlap with pt-48/pt-56 padding.
 * RESTORED: Market Mastery, Content Gap, and Local Trust sections.
 */

// --- INTERNALIZED UI COMPONENTS (To fix resolution errors in preview) ---

const Icon = ({ name, size = 24, className = "" }) => {
  const icons = {
    clapperboard: Clapperboard,
    rocket: Rocket,
    layers: Layers,
    shieldCheck: ShieldCheck,
    barChart3: BarChart3,
    users: Users,
    quote: Quote,
    camera: Camera,
    clock: Clock,
    timer: Timer
  };
  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
};

const VideoLoop = ({ type, id, title }) => {
  if (type === 'youtube') {
    return (
      <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] shadow-2xl bg-black border border-white/5 group">
        <iframe
          className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover brightness-90 contrast-110"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0&iv_load_policy=3`}
          title={title}
          allow="autoplay; encrypted-media"
        ></iframe>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
      </div>
    );
  }
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] shadow-2xl bg-slate-900 border border-white/5 group leading-none font-black">
      <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover brightness-90 contrast-110">
        <source src={`https://stream.mux.com/${id}/medium.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent group-hover:opacity-0 transition-opacity"></div>
    </div>
  );
};

// --- PAGE COMPONENT ---

const Home = ({ navigateTo }) => {
  return (
    <div className="animate-fade-in font-black uppercase tracking-tighter selection:bg-red-600 selection:text-white">
      
      {/* 1. HERO SECTION - pt-48 fixes Nav Overlap */}
      <section className="relative h-screen min-h-[900px] flex items-center bg-slate-900 overflow-hidden leading-none">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10"></div>
        <div className="absolute inset-0 z-0">
           <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=90&w=2400&auto=format&fit=crop" 
            alt="Production" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom brightness-[0.4]"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-left pt-48 md:pt-56">
          <div className="max-w-5xl animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-red-600/10 text-red-500 px-6 py-3 rounded-full text-[10px] font-black mb-10 border border-red-600/20 backdrop-blur-md uppercase tracking-[0.4em] italic shadow-sm leading-none">
              <Clapperboard size={16} className="animate-pulse" />
              Calgary's Strategic Event-to-Content Agency
            </div>
            <h1 className="text-7xl md:text-[11rem] font-black text-white leading-[0.8] mb-10 tracking-tighter uppercase italic">
              WE CAPTURE.<br />
              YOU <span className="text-red-600">DOMINATE.</span>
            </h1>
            <p className="text-2xl md:text-4xl text-gray-200 mb-14 max-w-4xl font-medium uppercase italic leading-tight normal-case opacity-90 leading-none">
              Stop letting your events die when the lights go out. We turn live experiences into <span className="text-white font-black underline decoration-red-600 underline-offset-8 uppercase italic leading-none">30 days of high-ROI content.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-8 leading-none">
              <button 
                onClick={() => navigateTo('booking')} 
                className="bg-red-600 hover:bg-red-700 text-white px-14 py-8 rounded-[2.5rem] font-black text-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-5 shadow-3xl italic group border-4 border-white/10 leading-none font-black italic"
              >
                Start Free Audit <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button 
                onClick={() => navigateTo('services')} 
                className="bg-white/10 hover:bg-white text-white hover:text-slate-900 backdrop-blur-xl border border-white/20 px-14 py-8 rounded-[2.5rem] font-black text-2xl transition-all flex items-center justify-center gap-5 uppercase shadow-2xl italic leading-none font-black italic"
              >
                See Packages
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MARKET MASTERY */}
      <section className="py-40 bg-slate-50 relative italic uppercase">
        <div className="container mx-auto px-6 italic font-black tracking-tighter">
          <div className="grid lg:grid-cols-2 gap-32 items-center italic">
             <div className="text-left font-black italic leading-none">
                <h2 className="text-6xl md:text-8xl text-slate-900 mb-10 leading-none italic uppercase">Market <span className="text-red-600">Mastery.</span></h2>
                <p className="text-2xl text-slate-500 font-bold italic mb-12 uppercase leading-tight max-w-xl normal-case tracking-normal">We help Calgary brands move from "Being Present" to "Owning the Feed."</p>
                <div className="space-y-12">
                   {[
                     { t: "VERTICAL AUTHORITY", d: "Position yourself as the undisputed expert through high-density insight videos.", i: "shieldCheck" },
                     { t: "CONVERSION LOGIC", d: "Content built to move users from viewers to leads. Every frame counts.", i: "barChart3" },
                     { t: "COMMUNITY SYNC", d: "Leverage local context and Calgary landmarks to build deep trust.", i: "users" }
                   ].map((item, idx) => (
                     <div key={idx} className="flex gap-8 group leading-none">
                        <div className="bg-white p-6 rounded-3xl shadow-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all transform group-hover:rotate-6 leading-none"><Icon name={item.i} size={40} /></div>
                        <div>
                           <h4 className="text-3xl font-black italic uppercase mb-2 leading-none">{item.t}</h4>
                           <p className="normal-case text-slate-400 font-bold italic text-xl leading-snug tracking-normal">{item.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             <div className="relative group p-4 leading-none italic">
                <div className="absolute -inset-10 bg-red-600 rounded-[6rem] rotate-3 opacity-5 group-hover:rotate-0 transition-all duration-1000 leading-none font-black"></div>
                <div className="relative h-[800px] rounded-[5rem] overflow-hidden shadow-3xl border-8 border-white leading-none font-black">
                   <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 leading-none" alt="Strategy" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 leading-none"></div>
                   <div className="absolute bottom-16 left-16 right-16 text-white font-black italic leading-none">
                      <p className="text-5xl mb-4 uppercase leading-none">STRATEGIC DEPTH.</p>
                      <p className="text-sm text-red-500 uppercase tracking-[0.5em] leading-none">EVERY FRAME SERVES THE QUARTERLY GOAL.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. THE GAP */}
      <section className="py-40 bg-white relative overflow-hidden italic leading-none uppercase font-black">
        <div className="container mx-auto px-6 italic leading-none font-black uppercase">
          <div className="text-center max-w-4xl mx-auto mb-32 italic leading-none font-black uppercase">
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-none italic">The <span className="text-red-600 underline decoration-slate-100 underline-offset-[20px]">Content Gap.</span></h2>
            <p className="text-2xl text-slate-400 font-bold italic max-w-2xl mx-auto uppercase leading-tight font-black">Calgary businesses are doing great things. No one is seeing them.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-stretch italic font-black uppercase leading-none">
            <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100 flex flex-col justify-center group hover:shadow-2xl transition-all duration-500 overflow-hidden text-left leading-none italic font-black uppercase">
              <h3 className="text-4xl font-black text-slate-300 mb-12 flex items-center gap-4 uppercase italic tracking-tighter leading-none font-black uppercase"><Icon name="trendingDown" size={40} /> The Reality</h3>
              <div className="space-y-16 relative z-10 font-black italic uppercase leading-none">
                 <div className="flex items-start gap-8 leading-none font-black uppercase">
                    <div className="bg-white p-6 rounded-3xl shadow-md text-slate-300 border border-slate-100 leading-none"><Icon name="clock" size={40} /></div>
                    <div><p className="text-4xl text-slate-900 leading-none mb-4 italic uppercase font-black">50% OF OWNERS</p><p className="text-xl text-slate-500 font-medium italic normal-case tracking-normal leading-none font-black uppercase">Devote less than 1 hour a day to marketing. Consistency is the first thing to die.</p></div>
                 </div>
                 <div className="flex items-start gap-8 leading-none font-black uppercase">
                    <div className="bg-white p-6 rounded-3xl shadow-md text-slate-300 border border-slate-100 leading-none"><Icon name="timer" size={40} /></div>
                    <div><p className="text-4xl text-slate-900 leading-none mb-4 italic uppercase font-black">44% STALLING</p><p className="text-xl text-slate-500 font-medium italic normal-case tracking-normal leading-none font-black uppercase">Procrastinate because they lack a capture-to-post system.</p></div>
                 </div>
              </div>
            </div>
            <div className="bg-slate-900 p-16 rounded-[4rem] border-4 border-red-600 flex flex-col justify-center relative overflow-hidden shadow-3xl transform hover:scale-[1.03] transition-all duration-700 group text-left italic font-black uppercase leading-none">
              <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-[120px] transition-all duration-1000 group-hover:bg-red-600/20 leading-none font-black"></div>
              <h3 className="text-4xl font-black text-red-500 mb-12 flex items-center gap-4 relative z-10 uppercase italic tracking-tighter leading-none font-black uppercase font-black"><Icon name="trendingUp" size={40} /> The ICAN Edge</h3>
              <div className="space-y-16 relative z-10 font-black italic uppercase leading-none">
                 <div className="flex items-start gap-8 leading-none">
                    <div className="bg-red-600 p-6 rounded-3xl shadow-2xl text-white transform group-hover:rotate-12 transition-transform duration-500 leading-none"><Icon name="rocket" size={40} /></div>
                    <div><p className="text-4xl text-white leading-none mb-4 italic font-black italic uppercase font-black uppercase">89% ROI BOOST</p><p className="text-xl text-red-400 font-medium italic normal-case tracking-normal leading-none font-black uppercase">Video drives traffic and trust faster than any other digital medium.</p></div>
                 </div>
                 <div className="flex items-start gap-8 leading-none">
                    <div className="bg-red-600 p-6 rounded-3xl shadow-2xl text-white transform group-hover:-rotate-12 transition-transform duration-500 leading-none"><Icon name="layers" size={40} /></div>
                    <div><p className="text-4xl text-white leading-none mb-4 italic font-black italic uppercase font-black uppercase leading-none">300% VISIBILITY</p><p className="text-xl text-red-400 font-medium italic normal-case tracking-normal leading-none font-black uppercase italic">Repurposing one day into 15+ high-end assets ensures you never go silent.</p></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTENT ENGINE */}
      <section className="py-40 bg-slate-950 text-white overflow-hidden relative italic font-black uppercase">
        <div className="container mx-auto px-6 relative z-10 text-center italic font-black">
          <div className="text-center max-w-4xl mx-auto mb-32 italic leading-none font-black">
             <h2 className="text-6xl md:text-[10rem] font-black mb-10 tracking-tighter leading-none italic uppercase">THE CONTENT <br /><span className="text-red-600 underline decoration-red-600/30">ENGINE.</span></h2>
             <p className="text-3xl text-gray-400 italic font-bold max-w-3xl mx-auto uppercase leading-tight font-black italic">"We turn one-off events into 30 days of market momentum."</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-12 italic font-black">
             {[
               { title: "CAPTURE", icon: "camera", desc: "One monthly production day. We capture your team and expertise in cinematic 4K.", img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000&auto=format&fit=crop" },
               { title: "FACTORY", icon: "layers", desc: "Our editors slice raw footage into Reels, Stills, and Stories optimized for social authority.", img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop" },
               { title: "DOMINATE", icon: "rocket", desc: "A month of marketing assets delivered and scheduled. You stay visible while you sleep.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" }
             ].map((step, i) => (
               <div key={i} className="group relative h-[750px] rounded-[4rem] overflow-hidden border border-white/5 hover:border-red-600/60 transition-all duration-1000 transform hover:-translate-y-6 shadow-3xl">
                  <img src={step.img} className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:scale-110 transition-transform duration-1000 group-hover:brightness-[0.25]" alt={step.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-20 left-12 right-12 z-20 text-left italic font-black uppercase leading-none font-black italic">
                     <div className="bg-red-600 w-24 h-24 rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl transform group-hover:rotate-12 transition-transform duration-700 border-4 border-white/10"><Icon name={step.icon} size={48} className="text-white" /></div>
                     <h3 className="text-6xl font-black mb-6 italic tracking-tighter uppercase leading-none font-black">{step.title}</h3>
                     <p className="text-xl text-gray-400 font-bold italic group-hover:text-white transition-colors duration-500 opacity-90 leading-relaxed normal-case tracking-normal">{step.desc}</p>
                  </div>
                  <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none"></div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. LOCAL TRUST */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 text-center max-w-5xl italic font-black uppercase">
          <h2 className="text-6xl md:text-8xl font-black mb-16 italic tracking-tighter uppercase leading-none text-slate-900 underline decoration-slate-100 underline-offset-[20px]">The <span className="text-red-600">Local</span> touch.</h2>
          <p className="text-3xl text-slate-500 font-bold leading-relaxed italic mb-24 opacity-60 uppercase tracking-tight font-black italic leading-none font-black italic">"Calgary specialists who know Stampede is a content goldmine—and how to keep you visible the other 51 weeks too."</p>
          <div className="grid md:grid-cols-2 gap-16 text-left italic font-black uppercase leading-none font-black italic">
             <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100 shadow-xl hover:-translate-y-2 hover:border-red-600/30 transition-all duration-500 group leading-none font-black italic">
                <Icon name="quote" className="text-red-600 mb-8 opacity-20 group-hover:opacity-100 transition-opacity" size={64} />
                <p className="text-2xl font-black italic leading-relaxed mb-12 uppercase italic font-black italic">"ICAN positions itself as the solution to overwhelm. They took the entire content burden off our shoulders."</p>
                <div className="flex gap-6 items-center border-t border-slate-200 pt-10">
                   <div className="w-20 h-20 rounded-full bg-slate-300 border-4 border-white shadow-lg flex items-center justify-center text-4xl">N</div>
                   <div><p className="uppercase text-sm tracking-widest leading-none mb-2 font-black italic uppercase">Nathan G.</p><p className="text-[10px] text-red-600 tracking-tighter font-black italic uppercase font-black uppercase italic leading-none font-black italic">CEO, Calgary Tech Hub</p></div>
                </div>
             </div>
             <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100 shadow-xl hover:-translate-y-2 hover:border-red-600/30 transition-all duration-500 group leading-none font-black italic">
                <Icon name="quote" className="text-red-600 mb-8 opacity-20 group-hover:opacity-100 transition-opacity" size={64} />
                <p className="text-2xl font-black italic leading-relaxed mb-12 uppercase italic font-black italic">"One gala turned into 3 months of digital recruitment. The ROI was immediate and undeniable."</p>
                <div className="flex gap-6 items-center border-t border-slate-200 pt-10">
                   <div className="w-20 h-20 rounded-full bg-slate-300 border-4 border-white shadow-lg flex items-center justify-center text-4xl">S</div>
                   <div><p className="uppercase text-sm tracking-widest leading-none mb-2 font-black italic uppercase font-black">Sarah L.</p><p className="text-[10px] text-red-600 tracking-tighter font-black italic uppercase font-black uppercase italic leading-none font-black italic">Director, Gems Cup</p></div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
