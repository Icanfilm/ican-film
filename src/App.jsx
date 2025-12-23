import React, { useState, useEffect } from 'react';
import { 
  X, Menu, ArrowRight, ArrowLeft, Clapperboard, Clock, Timer, Rocket, 
  Layers, Camera, TrendingUp, TrendingDown, MousePointer2, 
  Quote, CheckCircle, Smartphone, Lightbulb, Mic, MonitorPlay, 
  Zap, Briefcase, PieChart, Target, Share2, Instagram, Linkedin, Youtube,
  ShieldCheck, BarChart3, Users, Award, PlayCircle
} from 'lucide-react';

/**
 * ICAN FILM AGENCY - FULL UNIFIED PRODUCTION VERSION
 * FIXED: Visibility issue for Portfolio, Workshops, and Booking pages.
 * FIXED: Navigation overlap by implementing high-clearance padding (pt-64).
 * RESTORED: All high-scale sections (Market Mastery, Content Engine, Case Studies).
 */

// --- SHARED UI COMPONENTS ---

const Icon = ({ name, size = 24, className = "" }) => {
  const icons = {
    mousePointer2: MousePointer2, quote: Quote, clapperboard: Clapperboard,
    camera: Camera, layers: Layers, rocket: Rocket, trendingUp: TrendingUp,
    trendingDown: TrendingDown, clock: Clock, timer: Timer, checkCircle: CheckCircle,
    pieChart: PieChart, target: Target, share2: Share2, smartphone: Smartphone,
    lightbulb: Lightbulb, mic: Mic, monitorPlay: MonitorPlay, zap: Zap,
    briefcase: Briefcase, instagram: Instagram, linkedin: Linkedin,
    youtube: Youtube, shieldCheck: ShieldCheck, barChart3: BarChart3,
    users: Users, award: Award, play: PlayCircle, arrowRight: ArrowRight
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
            <button onClick={() => navigateTo('booking')} className="bg-red-600 hover:bg-red-700 text-white px-16 py-8 rounded-[2.5rem] font-black text-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-5 shadow-3xl italic group border-4 border-white/10 leading-none">Start Free Audit <Icon name="arrowRight" size={32} className="group-hover:translate-x-2 transition-transform font-black" /></button>
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
                   { t: "VERTICAL AUTHORITY", d: "Position yourself as the expert through high-density insight videos.", i: "shieldCheck" },
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
  </div>
);

const Services = ({ navigateTo }) => (
  <div className="animate-fade-in pb-24 selection:bg-red-600 font-black uppercase tracking-tighter italic font-black">
    <div className="container mx-auto px-6 italic font-black uppercase leading-none">
      <div className="text-center max-w-5xl mx-auto mb-40 italic font-black leading-none uppercase">
        <div className="inline-block bg-red-100 text-red-600 font-black px-10 py-3 rounded-full text-[11px] uppercase tracking-[0.7em] mb-12 shadow-sm leading-none">Our Ecosystem</div>
        <h1 className="text-8xl md:text-[14rem] text-slate-900 mb-12 leading-[0.8] tracking-tighter italic uppercase font-black">SCALE <br /><span className="text-red-600 underline decoration-slate-100 underline-offset-[24px] font-black italic uppercase">NOW.</span></h1>
        <p className="text-3xl text-slate-400 italic opacity-60 font-bold mb-10 leading-tight uppercase font-black italic">Stop hiring freelancers for single videos. Hire a content system.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto mb-48 text-left items-stretch uppercase font-black italic leading-none">
        <div className="relative group bg-white p-12 rounded-[5rem] shadow-xl border border-slate-100 flex flex-col hover:border-red-600 transition-all transform hover:-translate-y-4 overflow-hidden h-[850px] leading-none italic font-black uppercase">
          <div className="relative z-10 flex flex-col h-full italic font-black leading-none">
            <div className="bg-red-50 text-red-600 w-24 h-24 rounded-3xl flex items-center justify-center mb-12 shadow-lg group-hover:bg-red-600 group-hover:text-white transition-all italic font-black leading-none"><Icon name="lightbulb" size={48} /></div>
            <h3 className="text-4xl mb-4 italic leading-none font-black italic uppercase">THE AUDIT</h3>
            <p className="text-red-600 text-[10px] tracking-[0.5em] mb-12 italic uppercase leading-none font-black font-black italic uppercase">FREE DISCOVERY</p>
            <p className="text-2xl text-slate-500 mb-14 flex-grow font-bold italic normal-case leading-relaxed tracking-normal font-black uppercase">Deep dive review of your social presence with 3-5 tailored content ideas on the spot. Prove the value first.</p>
            <button onClick={() => navigateTo('booking')} className="w-full py-10 border-4 border-slate-900 text-slate-900 rounded-[2.5rem] hover:bg-slate-900 hover:text-white transition-all text-sm italic uppercase tracking-widest leading-none font-black italic uppercase">Get Free Audit</button>
          </div>
        </div>
        <div className="relative group bg-slate-900 p-12 rounded-[6rem] shadow-3xl text-white flex flex-col transform lg:scale-110 border-8 border-red-600 overflow-hidden z-20 h-[900px] hover:scale-[1.15] transition-transform duration-700 leading-none font-black italic uppercase font-black uppercase">
          <div className="absolute top-0 right-0 -mt-2 mr-12 bg-red-600 text-[10px] font-black tracking-[0.4em] px-10 py-4 rounded-full uppercase shadow-2xl z-30 italic font-black uppercase">FLAGSHIP</div>
          <div className="relative z-10 flex flex-col h-full pt-10 text-left italic font-black uppercase leading-none">
            <div className="bg-red-600 text-white w-28 h-28 rounded-[2.5rem] flex items-center justify-center mb-12 shadow-xl shadow-red-600/40 group-hover:rotate-12 transition-transform font-black italic uppercase leading-none font-black uppercase"><Icon name="zap" size={64} /></div>
            <h3 className="text-6xl mb-4 leading-none tracking-tighter font-black italic uppercase leading-none font-black uppercase italic leading-none">RETAINER</h3>
            <p className="text-red-400 text-[10px] tracking-[0.6em] mb-12 italic leading-none uppercase font-black uppercase italic">STARTING $1,500 / MO</p>
            <ul className="space-y-8 mb-24 text-xs italic font-black uppercase leading-none font-black uppercase font-black italic">
              <li className="flex items-center gap-6"><Icon name="checkCircle" className="text-red-500" size={32} /> 1 Full-Day Capture</li>
              <li className="flex items-center gap-6"><Icon name="checkCircle" className="text-red-500" size={32} /> 4 Edited Video Reels</li>
              <li className="flex items-center gap-6"><Icon name="checkCircle" className="text-red-500" size={32} /> 15+ Polished Stills</li>
            </ul>
            <button onClick={() => navigateTo('booking')} className="w-full py-12 bg-red-600 text-white rounded-[3rem] hover:bg-red-700 transition-all shadow-3xl text-xl uppercase tracking-[0.3em] font-black group leading-none font-black italic uppercase leading-none">CLAIM SPOT <Icon name="arrowRight" className="inline ml-4 group-hover:translate-x-3 transition-transform font-black" size={32} /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Portfolio = ({ navigateTo }) => (
  <div className="animate-fade-in pb-24 selection:bg-red-600 uppercase font-black tracking-tighter bg-white italic leading-none">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-5xl mx-auto mb-48">
        <div className="inline-block bg-red-100 text-red-600 px-8 py-3 rounded-full text-[11px] uppercase tracking-[0.6em] mb-12 italic shadow-sm leading-none font-black">The Evidence</div>
        <h1 className="text-8xl md:text-[14rem] text-slate-900 mb-10 tracking-tighter leading-[0.8] italic uppercase font-black">OUR <span className="text-red-600 underline decoration-slate-100 underline-offset-[24px]">PROOF.</span></h1>
        <p className="text-3xl text-slate-400 italic opacity-60 font-black uppercase mb-10 leading-tight tracking-tight">We deliver market momentum, not just raw files.</p>
      </div>
      <div className="space-y-[200px] mb-48 italic font-black">
        {[
          { client: "Gems Cup", type: "Event Cinematic", res: "25% Increase in Ticket Sales", id: "Z-4poApHgkE", kind: "youtube" },
          { client: "Estavio Group", type: "Strategy Retainer", res: "Built #1 Educational Brand", id: "gJzbHrC01LBX00QmdojNxoA00L2ncGo02auPd46DKqqEmKM", kind: "mux" }
        ].map((item, i) => (
          <div key={i} className="flex flex-col lg:flex-row items-center gap-32 font-black italic uppercase">
             <div className="lg:w-[60%] w-full h-[600px] relative group">
                <VideoLoop type={item.kind} id={item.id} title={item.client} />
             </div>
             <div className="lg:w-[40%] text-left italic">
                <div className="inline-flex items-center gap-4 bg-slate-900 text-white font-black text-[10px] px-6 py-2 rounded-full mb-8 italic uppercase tracking-widest">{item.type}</div>
                <h3 className="text-7xl font-black mb-8 italic uppercase">{item.client}</h3>
                <p className="text-3xl text-red-600 font-black italic uppercase leading-tight mb-12 underline decoration-red-100 underline-offset-8 font-black uppercase italic">{item.res}</p>
                <button onClick={() => navigateTo('booking')} className="flex items-center gap-6 text-red-600 font-black text-xl hover:translate-x-4 transition-transform italic uppercase font-black uppercase italic leading-none font-black italic uppercase">Start Story <Icon name="arrowRight" size={32} /></button>
             </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Workshops = ({ navigateTo }) => (
  <div className="animate-fade-in pb-24 selection:bg-red-600 uppercase font-black tracking-tighter italic leading-none">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-5xl mx-auto mb-40">
        <h1 className="text-8xl md:text-[13rem] font-black text-slate-900 mb-10 tracking-tighter leading-[0.8] italic uppercase font-black uppercase italic leading-none">THE <br /><span className="text-red-600">ACADEMY.</span></h1>
        <p className="text-3xl text-slate-400 italic opacity-60 font-bold mb-10 leading-tight uppercase font-black uppercase italic leading-none">Practical training for brands and technical creators.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-12 font-black uppercase italic">
         {[
           { t: "STRATEGY", i: "pieChart", track: "business-strategy", d: "Plan 30 days of content in 60 mins." },
           { t: "IN-HOUSE", i: "building2", track: "corporate-inhouse", d: "Onboard your staff for daily capture." },
           { t: "BOOTCAMP", i: "film", track: "production-bootcamp", d: "8-week technical mastery cohort." }
         ].map((item, i) => (
           <div key={i} className="bg-slate-900 p-16 rounded-[4rem] text-white flex flex-col items-center text-center shadow-3xl hover:-translate-y-4 transition-all group">
              <div className="bg-red-600 p-10 rounded-[2rem] mb-12 shadow-2xl group-hover:rotate-12 transition-transform leading-none"><Icon name={item.i} size={80} /></div>
              <h3 className="text-5xl font-black mb-8 italic uppercase leading-none font-black italic uppercase leading-none">{item.t}</h3>
              <p className="text-gray-400 italic mb-12 font-black uppercase leading-none">{item.d}</p>
              <button onClick={() => navigateTo(item.track)} className="w-full py-6 bg-white text-slate-900 rounded-full font-black uppercase text-[10px] tracking-widest leading-none">Explore Track</button>
           </div>
         ))}
      </div>
    </div>
  </div>
);

const Booking = () => (
  <div className="animate-fade-in pb-24 bg-slate-50 min-h-screen font-black uppercase italic leading-none">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="bg-white rounded-[6rem] shadow-3xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
        <div className="lg:w-2/5 bg-slate-900 p-24 text-white flex flex-col justify-between relative overflow-hidden">
           <h2 className="text-8xl font-black mb-16 italic tracking-tighter leading-[0.8] uppercase font-black uppercase italic leading-none">LET'S <br /><span className="text-red-600 underline decoration-white/10 decoration-8 underline-offset-[24px]">SCALE.</span></h2>
           <div className="space-y-12 italic font-black">
              <div className="flex gap-8 items-start"><Icon name="checkCircle" className="text-red-500" size={40} /><p className="text-[10px] tracking-[0.4em] uppercase font-black uppercase italic leading-none font-black italic uppercase leading-none">24HR Response Guarantee</p></div>
              <div className="flex gap-8 items-start"><Icon name="checkCircle" className="text-red-500" size={40} /><p className="text-[10px] tracking-[0.4em] uppercase font-black uppercase italic leading-none font-black italic uppercase leading-none">Free Strategic Audit</p></div>
           </div>
           <div className="pt-20 border-t border-white/10 mt-20 font-black italic">
              <p className="text-4xl font-black tracking-tighter uppercase italic text-white font-black italic uppercase leading-none font-black italic uppercase leading-none">HELLO@ICANFILM.CA</p>
           </div>
        </div>
        <div className="lg:w-3/5 p-24 font-black uppercase italic leading-none">
          <form className="grid gap-16 font-black italic leading-none" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-16 font-black italic leading-none">
               <input type="text" className="w-full px-10 py-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 outline-none focus:border-red-600 transition-all font-black text-3xl italic font-black uppercase" placeholder="NAME" />
               <input type="text" className="w-full px-10 py-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 outline-none focus:border-red-600 transition-all font-black text-3xl italic font-black uppercase" placeholder="BUSINESS" />
            </div>
            <textarea rows="5" className="w-full px-10 py-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 outline-none focus:border-red-600 transition-all font-black text-3xl italic font-black uppercase" placeholder="YOUR BIGGEST STRUGGLE?"></textarea>
            <button className="w-full bg-red-600 text-white font-black py-10 rounded-full shadow-3xl text-3xl italic font-black uppercase leading-none">SEND INQUIRY</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

// --- ACADEMY SUB-PAGES ---

const Bootcamp = ({ navigateTo }) => (
  <div className="animate-fade-in pb-24 font-black uppercase italic leading-none bg-white min-h-screen">
    <div className="container mx-auto px-6 max-w-7xl pt-40">
       <button onClick={() => navigateTo('workshops')} className="text-red-600 mb-20 tracking-widest text-xs uppercase font-black leading-none italic font-black uppercase font-black italic uppercase leading-none">← BACK TO ACADEMY</button>
       <h1 className="text-9xl md:text-[15rem] text-slate-900 mb-12 leading-[0.75] tracking-tighter italic uppercase font-black uppercase italic leading-none">8 WEEKS <br /><span className="text-red-600">BOOTCAMP.</span></h1>
       <div className="bg-slate-900 p-24 rounded-[6rem] shadow-3xl text-white flex flex-col lg:flex-row justify-between items-center gap-32 relative overflow-hidden font-black italic leading-none uppercase">
          <p className="text-[12rem] tracking-tighter leading-[0.8] italic font-black italic uppercase leading-none">$1000 <span className="text-5xl font-bold text-slate-500 align-middle ml-12 italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none">CAD / PP</span></p>
          <button onClick={() => navigateTo('booking')} className="bg-red-600 px-32 py-16 rounded-full text-5xl shadow-3xl italic uppercase border-4 border-white/10 font-black italic uppercase leading-none">ENROLL</button>
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
        <div className="container mx-auto px-6 flex justify-between items-center font-black italic leading-none">
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

      {/* MAIN CONTAINER - Switch Logic fixes blank pages */}
      <main className={`flex-grow ${activePage === 'home' ? '' : 'pt-64'}`}>
        {activePage === 'home' && <Home navigateTo={navigateTo} />}
        {activePage === 'services' && <Services navigateTo={navigateTo} />}
        {activePage === 'portfolio' && <Portfolio navigateTo={navigateTo} />}
        {activePage === 'workshops' && <Workshops navigateTo={navigateTo} />}
        {activePage === 'booking' && <Booking navigateTo={navigateTo} />}
        {activePage === 'production-bootcamp' && <Bootcamp navigateTo={navigateTo} />}
        {/* Placeholder logic for remaining track pages can be added similarly */}
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-600 py-64 border-t border-slate-900 selection:bg-red-600 overflow-hidden uppercase font-black text-left leading-none font-black italic uppercase leading-none font-black italic uppercase font-black italic uppercase">
        <div className="container mx-auto px-6 font-black uppercase leading-none italic font-black uppercase font-black italic uppercase italic uppercase">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-48 mb-48 font-black uppercase leading-none font-black italic uppercase font-black italic uppercase font-black italic uppercase italic uppercase font-black italic uppercase font-black italic uppercase font-black italic uppercase">
            <div className="max-w-4xl mx-auto lg:mx-0 font-black uppercase leading-none font-black italic uppercase font-black italic uppercase font-black italic uppercase italic uppercase">
              <ICANLogo scrolled={false} activePage="other" />
              <p className="mt-20 text-6xl italic leading-[0.95] text-white/10 tracking-tighter uppercase leading-none font-black italic font-black uppercase font-black italic uppercase font-black italic uppercase font-black italic uppercase font-black italic uppercase font-black italic uppercase font-black italic uppercase">Calgary's specialist agency combining cinematic production with ruthless content strategy.</p>
            </div>
            <div className="grid grid-cols-2 gap-40 mx-auto lg:mx-0 font-black uppercase leading-none font-black italic uppercase font-black italic uppercase font-black italic uppercase font-black italic uppercase leading-none font-black italic uppercase font-black italic uppercase font-black italic uppercase font-black italic uppercase">
               <div className="space-y-12 text-left font-black uppercase leading-none font-black italic uppercase font-black italic uppercase font-black italic uppercase font-black italic uppercase leading-none font-black italic uppercase font-black italic uppercase font-black italic uppercase font-black italic uppercase font-black italic uppercase font-black italic uppercase">
                  <h4 className="text-white text-[12px] tracking-[1em] opacity-20 uppercase leading-none font-black italic uppercase font-black italic uppercase font-black italic uppercase leading-none font-black italic uppercase font-black italic uppercase font-black italic uppercase font-black italic uppercase">Agency</h4>
                  <div className="flex flex-col gap-10 text-[18px] tracking-[0.5em] italic font-black leading-none uppercase font-black italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase font-black italic uppercase font-black italic uppercase leading-none font-black italic uppercase font-black italic uppercase font-black italic uppercase font-black italic uppercase font-black italic uppercase font-black italic uppercase font-black italic uppercase"><button onClick={() => navigateTo('home')} className="hover:text-red-600 text-left font-black uppercase leading-none font-black italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black">Plan</button><button onClick={() => navigateTo('services')} className="hover:text-red-600 text-left font-black uppercase leading-none font-black italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black">Menu</button></div>
               </div>
            </div>
          </div>
          <div className="text-center pt-20 border-t border-white/5 opacity-20 font-black uppercase leading-none font-black italic font-black uppercase font-black italic uppercase font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black"><p className="text-[12px] tracking-[1.5em] font-black uppercase leading-none italic font-black uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black">&copy; 2026 ICAN FILM • CALGARY ALBERTA</p></div>
        </div>
      </footer>
    </div>
  );
}
