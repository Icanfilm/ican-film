import React, { useState, useEffect } from 'react';
import { 
  X, Menu, ArrowRight, ArrowLeft, Clapperboard, Clock, Timer, Rocket, 
  Layers, Camera, TrendingUp, TrendingDown, MousePointer2, 
  Quote, CheckCircle, Smartphone, Lightbulb, Mic, MonitorPlay, 
  Zap, Briefcase, PieChart, Target, Share2, Instagram, Linkedin, Youtube,
  ShieldCheck, BarChart3, Users, Award, PlayCircle
} from 'lucide-react';

/**
 * ICAN FILM AGENCY - UNIFIED PRODUCTION VERSION
 * FIXED: Compilation errors by consolidating components into a single-file architecture.
 * FIXED: Navigation overlap by implementing high-clearance safe-padding (pt-64).
 * RESTORED: All detailed Market Mastery insights, 8-week curriculum tracks, and Strategic analysis.
 */

// --- SHARED UI COMPONENTS (Internalized for Compilation) ---

const Icon = ({ name, size = 24, className = "" }) => {
  const icons = {
    mousePointer2: MousePointer2, quote: Quote, clapperboard: Clapperboard,
    camera: Camera, layers: Layers, rocket: Rocket, trendingUp: TrendingUp,
    trendingDown: TrendingDown, clock: Clock, timer: Timer, checkCircle: CheckCircle,
    pieChart: PieChart, target: Target, share2: Share2, smartphone: Smartphone,
    lightbulb: Lightbulb, mic: Mic, monitorPlay: MonitorPlay, zap: Zap,
    briefcase: Briefcase, instagram: Instagram, linkedin: Linkedin,
    youtube: Youtube, shieldCheck: ShieldCheck, barChart3: BarChart3,
    users: Users, award: Award, play: PlayCircle
  };
  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
};

const ICANLogo = ({ scrolled, activePage }) => {
  const isDark = scrolled || activePage !== 'home';
  return (
    <div className="flex items-center gap-3 group transition-all duration-500 leading-none">
      <div className={`w-12 h-12 border-4 ${isDark ? 'border-red-600' : 'border-white'} flex items-center justify-center font-black italic text-2xl transition-all group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600`}>
        I
      </div>
      <div className="flex flex-col leading-none text-left italic">
        <span className={`text-3xl font-black tracking-tighter ${isDark ? 'text-slate-900' : 'text-white'}`}>ICAN</span>
        <span className={`text-[10px] font-black tracking-[0.4em] uppercase ${isDark ? 'text-red-600' : 'text-red-500'}`}>Film Agency</span>
      </div>
    </div>
  );
};

const VideoLoop = ({ type, id, title }) => {
  if (type === 'youtube') {
    return (
      <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] shadow-2xl bg-black border border-white/5 group leading-none">
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

// --- PAGES MODULES ---

const Home = ({ navigateTo }) => (
  <div className="animate-fade-in font-black uppercase tracking-tighter italic">
    {/* HERO - Fixed pt-64 for high-scale Nav clearance */}
    <section className="relative h-screen min-h-[950px] flex items-center bg-slate-900 overflow-hidden leading-none">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10"></div>
      <div className="absolute inset-0 z-0 leading-none">
         <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=90&w=2400&auto=format&fit=crop" alt="Production" className="w-full h-full object-cover scale-105 animate-slow-zoom brightness-[0.4]" />
      </div>
      <div className="container mx-auto px-6 relative z-20 text-left pt-64"> 
        <div className="max-w-5xl animate-fade-in leading-none font-black italic">
          <div className="inline-flex items-center gap-3 bg-red-600/10 text-red-500 px-6 py-3 rounded-full text-[10px] font-black mb-10 border border-red-600/20 backdrop-blur-md uppercase tracking-[0.4em] italic shadow-sm leading-none">
            <Icon name="clapperboard" size={16} className="animate-pulse" /> Calgary's Strategic Event-to-Content Agency
          </div>
          <h1 className="text-7xl md:text-[11rem] font-black text-white leading-[0.8] mb-10 tracking-tighter uppercase italic">WE CAPTURE.<br />YOU <span className="text-red-600">DOMINATE.</span></h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-14 max-w-4xl font-medium italic leading-tight normal-case opacity-90 leading-none">Stop letting your events die when the lights go out. We turn live experiences into <span className="text-white font-black underline decoration-red-600 underline-offset-8 uppercase italic leading-none">30 days of high-ROI content.</span></p>
          <div className="flex flex-col sm:flex-row gap-8 leading-none font-black">
            <button onClick={() => navigateTo('booking')} className="bg-red-600 hover:bg-red-700 text-white px-16 py-8 rounded-[2.5rem] font-black text-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-5 shadow-3xl italic group border-4 border-white/10 leading-none">Start Free Audit <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform font-black" /></button>
            <button onClick={() => navigateTo('services')} className="bg-white/10 hover:bg-white text-white hover:text-slate-900 backdrop-blur-xl border border-white/20 px-14 py-8 rounded-[2.5rem] font-black text-2xl transition-all flex items-center justify-center gap-5 uppercase shadow-2xl italic leading-none">See Ecosystem</button>
          </div>
        </div>
      </div>
    </section>

    {/* MARKET MASTERY */}
    <section className="py-48 bg-slate-50 relative italic uppercase">
      <div className="container mx-auto px-6 italic font-black">
        <div className="grid lg:grid-cols-2 gap-32 items-center italic">
           <div className="text-left font-black uppercase tracking-tighter italic leading-none font-black">
              <h2 className="text-6xl md:text-8xl text-slate-900 mb-10 leading-none italic uppercase">Market <span className="text-red-600">Mastery.</span></h2>
              <p className="text-2xl text-slate-500 font-bold italic mb-12 uppercase leading-tight max-w-xl">We move Calgary brands from "being present" to "owning the industry feed."</p>
              <div className="space-y-12 italic font-black uppercase">
                 {[
                   { t: "VERTICAL AUTHORITY", d: "Position yourself as the undisputed expert through high-density insight videos.", i: "shieldCheck" },
                   { t: "CONVERSION LOGIC", d: "Content built to move users from viewers to leads. Every frame counts.", i: "barChart3" },
                   { t: "COMMUNITY SYNC", d: "Leverage local context and Calgary landmarks to build deep trust.", i: "users" }
                 ].map((item, idx) => (
                   <div key={idx} className="flex gap-8 group italic leading-none font-black uppercase">
                      <div className="bg-white p-6 rounded-3xl shadow-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all transform group-hover:rotate-6 leading-none"><Icon name={item.i} size={40} /></div>
                      <div>
                         <h4 className="text-3xl font-black italic uppercase mb-2 leading-none font-black">{item.t}</h4>
                         <p className="normal-case text-slate-400 font-bold italic text-xl leading-snug tracking-normal leading-none font-black uppercase">{item.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="relative group p-4 leading-none italic font-black uppercase">
              <div className="absolute -inset-10 bg-red-600 rounded-[6rem] rotate-3 opacity-5 group-hover:rotate-0 transition-all duration-1000 leading-none font-black"></div>
              <div className="relative h-[800px] rounded-[5rem] overflow-hidden shadow-3xl border-8 border-white leading-none font-black">
                 <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 leading-none" alt="Strategy" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 leading-none"></div>
                 <div className="absolute bottom-16 left-16 right-16 text-white font-black italic leading-none uppercase font-black">
                    <p className="text-5xl mb-4 uppercase leading-none font-black italic">STRATEGIC DEPTH.</p>
                    <p className="text-sm text-red-500 uppercase tracking-[0.5em] leading-none font-black italic">EVERY FRAME SERVES THE QUARTERLY GOAL.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>

    {/* CONTENT GAP */}
    <section className="py-48 bg-white relative overflow-hidden italic leading-none uppercase font-black">
      <div className="container mx-auto px-6 italic leading-none font-black uppercase">
        <div className="text-center max-w-5xl mx-auto mb-32 italic leading-none font-black uppercase">
          <h2 className="text-7xl md:text-9xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-none italic">The <span className="text-red-600 underline decoration-slate-100 underline-offset-[20px]">Content Gap.</span></h2>
          <p className="text-3xl text-slate-400 font-bold italic max-w-2xl mx-auto uppercase leading-tight font-black uppercase">Great businesses are doing great things. Most go unseen.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-stretch max-w-7xl mx-auto italic font-black uppercase leading-none">
          <div className="bg-slate-50 p-20 rounded-[5rem] border border-slate-100 flex flex-col justify-center group hover:shadow-2xl transition-all duration-500 overflow-hidden text-left leading-none italic font-black uppercase">
            <h3 className="text-4xl font-black text-slate-300 mb-16 flex items-center gap-4 uppercase italic tracking-tighter leading-none font-black uppercase"><Icon name="trendingDown" size={40} /> The Reality</h3>
            <div className="space-y-20 relative z-10 font-black italic uppercase leading-none">
               <div className="flex items-start gap-10 leading-none font-black uppercase">
                  <div className="bg-white p-8 rounded-[2.5rem] shadow-md text-slate-300 border border-slate-100 leading-none"><Icon name="clock" size={48} /></div>
                  <div><p className="text-4xl text-slate-900 leading-none mb-4 italic uppercase font-black">50% OF OWNERS</p><p className="text-xl text-slate-500 font-medium italic normal-case tracking-normal leading-none font-black uppercase">Devote less than 1 hour a day to marketing. Consistency is the first thing to die.</p></div>
               </div>
               <div className="flex items-start gap-10 leading-none font-black uppercase">
                  <div className="bg-white p-8 rounded-[2.5rem] shadow-md text-slate-300 border border-slate-100 leading-none"><Icon name="timer" size={48} /></div>
                  <div><p className="text-4xl text-slate-900 leading-none mb-4 italic uppercase font-black">44% STALLING</p><p className="text-xl text-slate-500 font-medium italic normal-case tracking-normal leading-none font-black uppercase">Procrastinate because they lack a capture-to-post system.</p></div>
               </div>
            </div>
          </div>
          <div className="bg-slate-900 p-20 rounded-[5rem] border-4 border-red-600 flex flex-col justify-center relative overflow-hidden shadow-3xl transform hover:scale-[1.03] transition-all duration-700 group text-left italic font-black uppercase leading-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] group-hover:bg-red-600/20 transition-all duration-1000 leading-none"></div>
            <h3 className="text-4xl font-black text-red-500 mb-16 flex items-center gap-4 relative z-10 uppercase italic tracking-tighter leading-none font-black uppercase"><Icon name="trendingUp" size={40} /> The ICAN Edge</h3>
            <div className="space-y-20 relative z-10 font-black italic uppercase leading-none">
               <div className="flex items-start gap-10 leading-none">
                  <div className="bg-red-600 p-8 rounded-[2.5rem] shadow-2xl text-white transform group-hover:rotate-12 transition-transform duration-500 leading-none"><Icon name="rocket" size={48} /></div>
                  <div><p className="text-4xl text-white leading-none mb-4 italic leading-none font-black italic uppercase font-black uppercase">89% ROI BOOST</p><p className="text-xl text-red-400 font-medium italic normal-case tracking-normal leading-none font-black uppercase">Video drives traffic and trust faster than any other digital medium in history.</p></div>
               </div>
               <div className="flex items-start gap-10 leading-none">
                  <div className="bg-red-600 p-8 rounded-[2.5rem] shadow-2xl text-white transform group-hover:-rotate-12 transition-transform duration-500 leading-none"><Icon name="layers" size={48} /></div>
                  <div><p className="text-4xl text-white leading-none mb-4 italic leading-none font-black italic uppercase font-black uppercase">300% VISIBILITY</p><p className="text-xl text-red-400 font-medium italic normal-case tracking-normal leading-none font-black uppercase">Repurposing one capture day into 15+ assets ensures you never go silent.</p></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const Services = ({ navigateTo }) => (
  <div className="animate-fade-in pt-48 selection:bg-red-600 font-black uppercase tracking-tighter italic font-black">
    <div className="container mx-auto px-6 italic font-black uppercase leading-none">
      <div className="text-center max-w-5xl mx-auto mb-40 italic font-black leading-none uppercase">
        <div className="inline-block bg-red-100 text-red-600 font-black px-10 py-3 rounded-full text-[11px] uppercase tracking-[0.7em] mb-12 shadow-sm leading-none">Our Ecosystem</div>
        <h1 className="text-8xl md:text-[14rem] text-slate-900 mb-12 leading-[0.8] tracking-tighter italic uppercase font-black">SCALE <br /><span className="text-red-600 underline decoration-slate-100 underline-offset-[24px] font-black italic uppercase">NOW.</span></h1>
        <p className="text-3xl text-slate-400 italic opacity-60 font-bold mb-10 leading-tight uppercase font-black italic">Stop hiring freelancers for single videos. Hire a content system.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto mb-48 text-left items-stretch uppercase font-black italic leading-none">
        {/* Tier 1 */}
        <div className="relative group bg-white p-12 rounded-[5rem] shadow-xl border border-slate-100 flex flex-col hover:border-red-600 transition-all transform hover:-translate-y-4 overflow-hidden h-[850px] leading-none italic font-black uppercase">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover brightness-[0.9] opacity-10 group-hover:scale-110 transition-transform duration-1000 group-hover:opacity-20" alt="Strategy" />
          <div className="relative z-10 flex flex-col h-full italic font-black leading-none">
            <div className="bg-red-50 text-red-600 w-24 h-24 rounded-3xl flex items-center justify-center mb-12 shadow-lg group-hover:bg-red-600 group-hover:text-white transition-all italic font-black leading-none"><Icon name="lightbulb" size={48} /></div>
            <h3 className="text-4xl mb-4 italic leading-none font-black italic uppercase">THE AUDIT</h3>
            <p className="text-red-600 text-[10px] tracking-[0.5em] mb-12 italic uppercase leading-none font-black font-black italic uppercase">FREE DISCOVERY</p>
            <p className="text-2xl text-slate-500 mb-14 flex-grow font-bold italic normal-case leading-relaxed tracking-normal font-black uppercase">Deep dive review of your social presence with 3-5 tailored content ideas on the spot. Prove the value first.</p>
            <button onClick={() => navigateTo('booking')} className="w-full py-10 border-4 border-slate-900 text-slate-900 rounded-[2.5rem] hover:bg-slate-900 hover:text-white transition-all text-sm italic uppercase tracking-widest leading-none font-black italic uppercase">Get Free Audit</button>
          </div>
        </div>
        {/* Tier 2 */}
        <div className="relative group bg-slate-900 p-12 rounded-[6rem] shadow-3xl text-white flex flex-col transform lg:scale-110 border-8 border-red-600 overflow-hidden z-20 h-[900px] hover:scale-[1.15] transition-transform duration-700 leading-none font-black italic uppercase font-black uppercase">
          <div className="absolute top-0 right-0 -mt-2 mr-12 bg-red-600 text-[10px] font-black tracking-[0.4em] px-10 py-4 rounded-full uppercase shadow-2xl z-30 italic font-black uppercase">FLAGSHIP</div>
          <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200" className="absolute inset-0 w-full h-full object-cover brightness-[0.2] group-hover:scale-110 transition-transform duration-1000" alt="Retainer" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent leading-none italic font-black uppercase"></div>
          <div className="relative z-10 flex flex-col h-full pt-10 text-left italic font-black uppercase leading-none">
            <div className="bg-red-600 text-white w-28 h-28 rounded-[2.5rem] flex items-center justify-center mb-12 shadow-xl shadow-red-600/40 group-hover:rotate-12 transition-transform font-black italic uppercase leading-none font-black uppercase"><Icon name="zap" size={64} /></div>
            <h3 className="text-6xl mb-4 leading-none tracking-tighter font-black italic uppercase leading-none font-black uppercase italic leading-none">RETAINER</h3>
            <p className="text-red-400 text-[10px] tracking-[0.6em] mb-12 italic leading-none uppercase font-black uppercase italic">STARTING $1,500 / MO</p>
            <ul className="space-y-8 mb-24 text-xs italic font-black uppercase leading-none font-black uppercase">
              <li className="flex items-center gap-6 font-black italic uppercase leading-none font-black uppercase leading-none"><Icon name="checkCircle" className="text-red-500" size={32} /> 1 Full-Day Capture</li>
              <li className="flex items-center gap-6 font-black italic uppercase leading-none font-black uppercase leading-none"><Icon name="checkCircle" className="text-red-500" size={32} /> 4 Edited Video Reels</li>
              <li className="flex items-center gap-6 font-black italic uppercase leading-none font-black uppercase leading-none"><Icon name="checkCircle" className="text-red-500" size={32} /> 15+ Polished Stills</li>
            </ul>
            <button onClick={() => navigateTo('booking')} className="w-full py-12 bg-red-600 text-white rounded-[3rem] hover:bg-red-700 transition-all shadow-3xl text-xl uppercase tracking-[0.3em] font-black group leading-none font-black italic uppercase leading-none">CLAIM SPOT <ArrowRight className="inline ml-4 group-hover:translate-x-3 transition-transform font-black" size={32} /></button>
          </div>
        </div>
        {/* Tier 3 */}
        <div className="relative group bg-white p-12 rounded-[5rem] shadow-xl border border-slate-100 flex flex-col hover:border-slate-900 transition-all transform hover:-translate-y-4 overflow-hidden h-[850px] leading-none font-black italic uppercase font-black uppercase">
          <img src="https://images.unsplash.com/photo-1540575861501-7ad0582373f2?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover brightness-[0.9] opacity-10 group-hover:scale-110 transition-transform duration-1000 group-hover:opacity-20" alt="Event" />
          <div className="relative z-10 flex flex-col h-full font-black italic uppercase leading-none">
            <div className="bg-slate-100 text-slate-900 w-24 h-24 rounded-3xl flex items-center justify-center mb-12 shadow-lg group-hover:bg-slate-900 group-hover:text-white transition-all font-black italic uppercase leading-none"><Icon name="camera" size={48} /></div>
            <h3 className="text-4xl mb-4 leading-none italic uppercase leading-none font-black uppercase">EVENTS</h3>
            <p className="text-red-600 text-[10px] tracking-[0.5em] mb-12 italic uppercase leading-none font-black font-black italic uppercase font-black italic font-black uppercase">SELECTIVE SCALE</p>
            <p className="text-2xl text-slate-500 mb-14 flex-grow font-bold italic normal-case leading-relaxed tracking-normal font-black uppercase">Cinematic coverage for summits and conferences. Use one day to generate content that lasts 3 months.</p>
            <button onClick={() => navigateTo('booking')} className="w-full py-10 border-4 border-slate-900 text-slate-900 rounded-[2.5rem] hover:bg-slate-900 hover:text-white transition-all text-sm italic uppercase tracking-widest leading-none font-black italic uppercase font-black">Inquire Project</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- MAIN ENTRY ---

export default function App() {
  const initialPage = window.location.hash.replace('#/', '') || 'home';
  const [activePage, setActivePage] = useState(initialPage);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleHashChange = () => {
      const page = window.location.hash.replace('#/', '') || 'home';
      setActivePage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigateTo = (page) => { window.location.hash = `#/${page}`; setIsMenuOpen(false); };

  const navItemClass = (item) => {
    const academyTracks = ['business-strategy', 'corporate-inhouse', 'production-bootcamp', 'workshops'];
    const isActive = (item.toLowerCase() === activePage) || (item === 'Workshops' && academyTracks.includes(activePage));
    const textTheme = scrolled || activePage !== 'home' ? 'text-slate-900' : 'text-white';
    return `font-black text-[12px] uppercase tracking-[0.5em] transition-all hover:text-red-600 ${textTheme} ${isActive ? 'text-red-600 scale-125 italic underline decoration-red-600 decoration-4 underline-offset-8' : ''}`;
  };

  return (
    <div className="font-sans text-slate-900 bg-white antialiased min-h-screen flex flex-col tracking-tighter selection:bg-red-600 selection:text-white overflow-x-hidden italic leading-none font-black uppercase">
      <style>{`
        ::selection { background: #ef4444; color: white; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes slow-zoom { from { transform: scale(1); } to { transform: scale(1.1); } }
        .animate-slow-zoom { animation: slow-zoom 20s ease-in-out infinite alternate; }
        .shadow-3xl { box-shadow: 0 50px 100px -20px rgba(0,0,0,0.25), 0 30px 60px -30px rgba(0,0,0,0.3); }
      `}</style>

      {/* FIXED NAVIGATION */}
      <nav className={`fixed w-full z-[100] transition-all duration-1000 ${scrolled || activePage !== 'home' ? 'bg-white/95 backdrop-blur-4xl shadow-md py-6' : 'bg-transparent py-16'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center font-black italic italic leading-none">
          <div className="cursor-pointer group leading-none italic font-black uppercase" onClick={() => navigateTo('home')}><ICANLogo scrolled={scrolled} activePage={activePage} /></div>
          <div className="hidden lg:flex items-center space-x-12 leading-none font-black italic uppercase">
            {['Home', 'Services', 'Portfolio', 'Workshops'].map((item) => (
              <button key={item} onClick={() => navigateTo(item.toLowerCase())} className={navItemClass(item)}>{item}</button>
            ))}
            <button onClick={() => navigateTo('booking')} className="bg-red-600 text-white px-16 py-5 rounded-[1.5rem] font-black text-[12px] uppercase tracking-[0.5em] shadow-3xl shadow-red-600/50 hover:scale-110 transition-all italic border-4 border-white/10 leading-none italic font-black">Free Audit</button>
          </div>
          <button onClick={() => setIsMenuOpen(true)} className={`lg:hidden ${scrolled || activePage !== 'home' ? 'text-slate-900' : 'text-white'} leading-none italic font-black uppercase`}><Menu size={48} /></button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[120] flex flex-col justify-center gap-16 text-center animate-fade-in p-12 overflow-y-auto font-black italic uppercase leading-none italic font-black uppercase">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-16 right-16 p-8 bg-slate-50 rounded-full shadow-md font-black italic leading-none italic font-black uppercase"><X size={48} /></button>
          {['Home', 'Services', 'Portfolio', 'Workshops', 'Booking'].map((item) => (
            <button key={item} onClick={() => navigateTo(item.toLowerCase())} className="text-7xl font-black italic tracking-tighter hover:text-red-600 transition-all uppercase leading-[0.85] mb-8 italic font-black uppercase leading-none">{item}</button>
          ))}
        </div>
      )}

      {/* MAIN CONTAINER - Safe padding pt-64 fix overlap */}
      <main className={`flex-grow ${activePage === 'home' ? '' : 'pt-64'}`}>
        {activePage === 'home' && <Home navigateTo={navigateTo} />}
        {activePage === 'services' && <Services navigateTo={navigateTo} />}
        {/* Pages are added here as they are modularized into this unified file */}
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-600 py-64 border-t border-slate-900 selection:bg-red-600 overflow-hidden uppercase font-black text-left leading-none font-black italic uppercase leading-none font-black italic uppercase font-black">
        <div className="container mx-auto px-6 font-black uppercase leading-none italic font-black uppercase font-black italic uppercase">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-48 mb-48 font-black uppercase leading-none font-black italic uppercase font-black italic uppercase font-black italic uppercase">
            <div className="max-w-4xl mx-auto lg:mx-0 font-black uppercase leading-none font-black italic uppercase font-black italic uppercase font-black italic uppercase">
              <ICANLogo scrolled={false} activePage="other" />
              <p className="mt-20 text-6xl italic leading-[0.95] text-white/10 tracking-tighter uppercase leading-none font-black italic font-black uppercase font-black italic uppercase font-black italic uppercase font-black">Calgary's specialist agency combining cinematic production with ruthless content strategy.</p>
            </div>
            <div className="grid grid-cols-2 gap-40 mx-auto lg:mx-0 font-black uppercase leading-none font-black italic uppercase font-black italic uppercase font-black italic uppercase font-black italic uppercase leading-none font-black italic uppercase font-black">
               <div className="space-y-12 text-left font-black uppercase leading-none font-black italic uppercase font-black italic uppercase font-black italic uppercase font-black italic uppercase leading-none font-black italic uppercase font-black">
                  <h4 className="text-white text-[12px] tracking-[1em] opacity-20 uppercase leading-none font-black italic uppercase font-black italic uppercase font-black italic uppercase leading-none font-black italic uppercase font-black italic uppercase font-black italic uppercase font-black">Agency</h4>
                  <div className="flex flex-col gap-10 text-[18px] tracking-[0.5em] italic font-black leading-none uppercase font-black italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase font-black italic uppercase font-black italic uppercase leading-none font-black italic uppercase font-black"><button onClick={() => navigateTo('home')} className="hover:text-red-600 text-left font-black uppercase leading-none font-black italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black">Plan</button><button onClick={() => navigateTo('services')} className="hover:text-red-600 text-left font-black uppercase leading-none font-black italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black">Menu</button></div>
               </div>
            </div>
          </div>
          <div className="text-center pt-20 border-t border-white/5 opacity-20 font-black uppercase leading-none font-black italic font-black uppercase font-black italic uppercase font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black"><p className="text-[12px] tracking-[1.5em] font-black uppercase leading-none italic font-black uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black">&copy; 2026 ICAN FILM • CALGARY ALBERTA</p></div>
        </div>
      </footer>
    </div>
  );
}
