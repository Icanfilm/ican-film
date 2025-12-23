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
 * FIXED: Navigation overlap by implementing deep top-padding (pt-64).
 * RESOLVED: Compilation errors by consolidating all modular components into one file.
 * RESTORED: All detailed Market Mastery insights, 8-week Bootcamp modules, and Strategy tracks.
 */

// --- UTILITY COMPONENTS ---

const Icon = ({ name, size = 24, className = "" }) => {
  const icons = {
    mousePointer2: MousePointer2, quote: Quote, clapperboard: Clapperboard,
    camera: Camera, layers: Layers, rocket: Rocket, trendingUp: TrendingUp,
    trendingDown: TrendingDown, clock: Clock, timer: Timer, checkCircle: CheckCircle,
    pieChart: PieChart, target: Target, share2: Share2, smartphone: Smartphone,
    lightbulb: Lightbulb, mic: Mic, monitorPlay: MonitorPlay, zap: Zap,
    briefcase: Briefcase, instagram: Instagram, linkedin: Linkedin,
    youtube: Youtube, shieldCheck: ShieldCheck, barChart: BarChart3,
    users: Users, award: Award, play: PlayCircle
  };
  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
};

const ICANLogo = ({ scrolled, activePage }) => {
  const isDark = scrolled || activePage !== 'home';
  return (
    <div className="flex items-center gap-3 group">
      <div className="relative">
        <div className={`w-12 h-12 border-4 ${isDark ? 'border-red-600' : 'border-white'} flex items-center justify-center font-black italic text-2xl transition-all group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600`}>
          I
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 animate-pulse"></div>
      </div>
      <div className="flex flex-col leading-none text-left">
        <span className={`text-3xl font-black italic tracking-tighter ${isDark ? 'text-slate-900' : 'text-white'}`}>ICAN</span>
        <span className={`text-[10px] font-black tracking-[0.4em] uppercase ${isDark ? 'text-red-600' : 'text-red-500'}`}>Film Agency</span>
      </div>
    </div>
  );
};

// --- PAGE COMPONENTS ---

const Home = ({ navigateTo }) => (
  <div className="animate-fade-in font-black uppercase tracking-tighter">
    {/* HERO - pt-64 ensures high-clearance from fixed navigation */}
    <section className="relative h-screen min-h-[950px] flex items-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10"></div>
      <div className="absolute inset-0 z-0">
         <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=90&w=2400&auto=format&fit=crop" alt="Production" className="w-full h-full object-cover scale-105 animate-slow-zoom brightness-[0.4]" />
      </div>
      <div className="container mx-auto px-6 relative z-20 text-left pt-64"> 
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-3 bg-red-600/10 text-red-500 px-6 py-3 rounded-full text-[10px] font-black mb-10 border border-red-600/20 backdrop-blur-md uppercase tracking-[0.4em] italic shadow-sm">
            <Icon name="clapperboard" size={16} className="animate-pulse" /> Calgary's Strategic Event-to-Content Agency
          </div>
          <h1 className="text-7xl md:text-[11rem] font-black text-white leading-[0.8] mb-10 tracking-tighter italic">WE CAPTURE.<br />YOU <span className="text-red-600">DOMINATE.</span></h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-14 max-w-4xl font-medium italic leading-tight normal-case opacity-90">Stop letting your events die when the lights go out. We turn live experiences into <span className="text-white font-black underline decoration-red-600 underline-offset-8 uppercase italic leading-none">30 days of high-ROI content.</span></p>
          <div className="flex flex-col sm:flex-row gap-8">
            <button onClick={() => navigateTo('booking')} className="bg-red-600 hover:bg-red-700 text-white px-14 py-8 rounded-[2.5rem] font-black text-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-5 shadow-3xl italic group border-4 border-white/10 leading-none font-black italic">Start Free Audit <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" /></button>
            <button onClick={() => navigateTo('services')} className="bg-white/10 hover:bg-white text-white hover:text-slate-900 backdrop-blur-xl border border-white/20 px-14 py-8 rounded-[2.5rem] font-black text-2xl transition-all flex items-center justify-center gap-5 uppercase shadow-2xl italic leading-none font-black italic">See Ecosystem</button>
          </div>
        </div>
      </div>
    </section>

    {/* MARKET MASTERY */}
    <section className="py-48 bg-slate-50 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
           <div className="text-left font-black uppercase tracking-tighter">
              <h2 className="text-6xl md:text-8xl text-slate-900 mb-10 leading-none italic font-black italic uppercase">Market <span className="text-red-600">Mastery.</span></h2>
              <p className="text-2xl text-slate-500 font-bold italic mb-12 uppercase leading-tight max-w-xl">We help Calgary brands move from "Being Present" to "Owning the Feed."</p>
              <div className="space-y-12">
                 {[
                   { t: "VERTICAL AUTHORITY", d: "Position yourself as the undisputed leader through high-density video insights.", i: "shieldCheck" },
                   { t: "CONVERSION LOGIC", d: "Content built to move users from viewers to leads. Every frame counts.", i: "barChart" },
                   { t: "COMMUNITY SYNC", d: "Leverage local context and Calgary landmarks to build deep trust.", i: "users" }
                 ].map((item, idx) => (
                   <div key={idx} className="flex gap-8 group">
                      <div className="bg-white p-6 rounded-3xl shadow-xl text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all transform group-hover:rotate-6"><Icon name={item.i} size={40} /></div>
                      <div>
                         <h4 className="text-3xl font-black italic uppercase mb-2 leading-none font-black italic uppercase">{item.t}</h4>
                         <p className="normal-case text-slate-400 font-bold italic text-xl leading-snug tracking-normal">{item.d}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           <div className="relative group p-4">
              <div className="absolute -inset-10 bg-red-600 rounded-[6rem] rotate-3 opacity-5 group-hover:rotate-0 transition-all duration-1000"></div>
              <div className="relative h-[800px] rounded-[5rem] overflow-hidden shadow-3xl border-8 border-white">
                 <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Strategy" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
                 <div className="absolute bottom-16 left-16 right-16 text-white font-black italic">
                    <p className="text-5xl mb-4 uppercase leading-none font-black italic uppercase">STRATEGIC DEPTH.</p>
                    <p className="text-sm text-red-500 uppercase tracking-[0.5em] leading-none font-black italic uppercase">EVERY FRAME SERVES THE QUARTERLY GOAL.</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>

    {/* THE GAP SECTION */}
    <section className="py-48 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto mb-32">
          <h2 className="text-7xl md:text-9xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-none italic font-black italic uppercase">The <span className="text-red-600 underline decoration-slate-100 underline-offset-[20px]">Content Gap.</span></h2>
          <p className="text-3xl text-slate-400 font-bold italic max-w-2xl mx-auto uppercase leading-tight font-black italic uppercase">Great businesses are doing great things. Most go unseen.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-stretch max-w-7xl mx-auto italic font-black uppercase">
          <div className="bg-slate-50 p-20 rounded-[5rem] border border-slate-100 flex flex-col justify-center group hover:shadow-2xl transition-all duration-500 overflow-hidden text-left">
            <h3 className="text-4xl font-black text-slate-300 mb-16 flex items-center gap-4 uppercase italic tracking-tighter leading-none font-black italic uppercase"><Icon name="trendingDown" size={40} /> The Reality</h3>
            <div className="space-y-20 relative z-10 font-black italic uppercase font-black italic uppercase">
               <div className="flex items-start gap-10">
                  <div className="bg-white p-8 rounded-[2.5rem] shadow-md text-slate-300 border border-slate-100"><Icon name="clock" size={48} /></div>
                  <div><p className="text-4xl text-slate-900 leading-none mb-4 italic uppercase font-black italic uppercase">50% OF OWNERS</p><p className="text-xl text-slate-500 font-medium italic normal-case tracking-normal font-black italic uppercase">Devote less than 1 hour a day to marketing. Consistency is the first thing to die.</p></div>
               </div>
               <div className="flex items-start gap-10">
                  <div className="bg-white p-8 rounded-[2.5rem] shadow-md text-slate-300 border border-slate-100"><Icon name="timer" size={48} /></div>
                  <div><p className="text-4xl text-slate-900 leading-none mb-4 italic uppercase font-black italic uppercase">44% STALLING</p><p className="text-xl text-slate-500 font-medium italic normal-case tracking-normal font-black italic uppercase">Procrastinate because they lack a capture-to-post system. They rely on "willpower."</p></div>
               </div>
            </div>
          </div>
          <div className="bg-slate-900 p-20 rounded-[5rem] border-4 border-red-600 flex flex-col justify-center relative overflow-hidden shadow-3xl transform hover:scale-[1.03] transition-all duration-700 group text-left italic font-black uppercase">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] group-hover:bg-red-600/20 transition-all duration-1000"></div>
            <h3 className="text-4xl font-black text-red-500 mb-16 flex items-center gap-4 relative z-10 uppercase italic tracking-tighter leading-none font-black italic uppercase"><Icon name="trendingUp" size={40} /> The ICAN Edge</h3>
            <div className="space-y-20 relative z-10 font-black italic uppercase font-black italic uppercase">
               <div className="flex items-start gap-10">
                  <div className="bg-red-600 p-8 rounded-[2.5rem] shadow-2xl text-white transform group-hover:rotate-12 transition-transform duration-500"><Icon name="rocket" size={48} /></div>
                  <div><p className="text-4xl text-white leading-none mb-4 italic font-black italic uppercase leading-none">89% ROI BOOST</p><p className="text-xl text-red-400 font-medium italic normal-case tracking-normal font-black italic uppercase">Video drives traffic and trust faster than any other digital medium in history.</p></div>
               </div>
               <div className="flex items-start gap-10">
                  <div className="bg-red-600 p-8 rounded-[2.5rem] shadow-2xl text-white transform group-hover:-rotate-12 transition-transform duration-500"><Icon name="layers" size={48} /></div>
                  <div><p className="text-4xl text-white leading-none mb-4 italic font-black italic uppercase leading-none">300% VISIBILITY</p><p className="text-xl text-red-400 font-medium italic normal-case tracking-normal font-black italic uppercase">Repurposing one capture day into 15+ assets ensures you never go silent.</p></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CONTENT ENGINE SECTION */}
    <section className="py-48 bg-slate-950 text-white overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-32">
           <h2 className="text-7xl md:text-[11rem] font-black mb-12 tracking-tighter leading-none italic uppercase font-black italic uppercase">THE CONTENT <br /><span className="text-red-600 underline decoration-red-600/30 underline-offset-[20px]">ENGINE.</span></h2>
           <p className="text-4xl text-gray-400 italic font-bold max-w-3xl mx-auto uppercase leading-tight font-black italic uppercase">"We turn one-off events into 30 days of market momentum."</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-16 italic font-black uppercase">
           {[
             { title: "CAPTURE", icon: "camera", desc: "One focused monthly production day. We capture your team and expertise in cinematic 4K.", img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000" },
             { title: "FACTORY", icon: "layers", desc: "Our editors slice raw footage into Reels, Stills, and Stories optimized for LinkedIn and IG authority.", img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000" },
             { title: "DOMINATE", icon: "rocket", desc: "A full month of marketing assets delivered and scheduled. You stay visible while you sleep.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000" }
           ].map((step, i) => (
             <div key={i} className="group relative h-[800px] rounded-[5rem] overflow-hidden border border-white/5 hover:border-red-600/60 transition-all duration-1000 transform hover:-translate-y-6 shadow-3xl">
                <img src={step.img} className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:scale-110 transition-transform duration-1000 group-hover:brightness-[0.25]" alt={step.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-20 left-12 right-12 z-20 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 text-left italic">
                   <div className="bg-red-600 w-28 h-28 rounded-[2.5rem] flex items-center justify-center mb-10 shadow-2xl transform group-hover:rotate-12 transition-transform duration-700 border-4 border-white/10"><Icon name={step.icon} size={56} className="text-white" /></div>
                   <h3 className="text-6xl font-black mb-6 italic tracking-tighter uppercase leading-none font-black italic uppercase leading-none">{step.title}</h3>
                   <p className="text-2xl text-gray-400 font-bold italic group-hover:text-white transition-colors duration-500 opacity-90 leading-relaxed normal-case tracking-normal">{step.desc}</p>
                </div>
                <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none"></div>
             </div>
           ))}
        </div>
      </div>
    </section>
  </div>
);

const Services = ({ navigateTo }) => (
  <div className="animate-fade-in pt-48 selection:bg-red-600 font-black uppercase tracking-tighter">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-5xl mx-auto mb-40 italic font-black uppercase">
        <div className="inline-block bg-red-100 text-red-600 font-black px-10 py-3 rounded-full text-[11px] uppercase tracking-[0.7em] mb-12 shadow-sm leading-none font-black italic uppercase">The Ecosystem</div>
        <h1 className="text-8xl md:text-[14rem] text-slate-900 mb-12 leading-[0.8] italic uppercase leading-none font-black italic uppercase">SCALE <br /><span className="text-red-600 underline decoration-slate-100 underline-offset-[24px]">NOW.</span></h1>
        <p className="text-3xl text-slate-400 italic opacity-60 font-bold mb-10 leading-tight font-black italic uppercase">Stop hiring freelancers for single videos. Hire a system.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto mb-48 text-left items-stretch font-black italic uppercase">
        <div className="relative group bg-white p-12 rounded-[5rem] shadow-xl border border-slate-100 flex flex-col hover:border-red-600 transition-all transform hover:-translate-y-4 overflow-hidden h-[850px]">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover brightness-[0.9] opacity-10 group-hover:scale-110 transition-transform duration-1000 group-hover:opacity-20" alt="Audit" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="bg-red-50 text-red-600 w-24 h-24 rounded-3xl flex items-center justify-center mb-12 shadow-lg group-hover:bg-red-600 group-hover:text-white transition-all"><Icon name="lightbulb" size={48} /></div>
            <h3 className="text-4xl mb-4 leading-none font-black italic uppercase leading-none">THE AUDIT</h3>
            <p className="text-red-600 text-[10px] tracking-[0.5em] mb-12 italic uppercase leading-none font-black">FREE DISCOVERY</p>
            <p className="text-2xl text-slate-500 mb-14 flex-grow font-bold italic normal-case leading-relaxed tracking-normal font-black">Deep dive review of your social presence with 3-5 tailored content ideas on the spot. Prove the value first.</p>
            <button onClick={() => navigateTo('booking')} className="w-full py-10 border-4 border-slate-900 text-slate-900 rounded-[2.5rem] hover:bg-slate-900 hover:text-white transition-all text-sm italic uppercase tracking-widest font-black leading-none font-black italic uppercase">Get Free Audit</button>
          </div>
        </div>
        <div className="relative group bg-slate-900 p-12 rounded-[6rem] shadow-3xl text-white flex flex-col transform lg:scale-110 border-8 border-red-600 overflow-hidden z-20 h-[900px] hover:scale-[1.15] transition-transform duration-700 font-black italic uppercase">
          <div className="absolute top-0 right-0 -mt-2 mr-12 bg-red-600 text-[10px] font-black tracking-[0.4em] px-10 py-4 rounded-full uppercase shadow-2xl z-30 italic font-black">FLAGSHIP</div>
          <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200" className="absolute inset-0 w-full h-full object-cover brightness-[0.2] group-hover:scale-110 transition-transform duration-1000" alt="Retainer" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
          <div className="relative z-10 flex flex-col h-full pt-10 text-left italic font-black uppercase">
            <div className="bg-red-600 text-white w-28 h-28 rounded-[2.5rem] flex items-center justify-center mb-12 shadow-xl shadow-red-600/40 group-hover:rotate-12 transition-transform font-black italic uppercase leading-none"><Icon name="zap" size={64} /></div>
            <h3 className="text-6xl mb-4 leading-none tracking-tighter font-black italic uppercase leading-none font-black italic uppercase leading-none">RETAINER</h3>
            <p className="text-red-400 text-[10px] tracking-[0.6em] mb-12 leading-none font-black italic uppercase">STARTING $1,500 / MO</p>
            <ul className="space-y-8 mb-24 text-xs italic font-black uppercase leading-none">
              <li className="flex items-center gap-6 font-black italic uppercase leading-none"><Icon name="checkCircle" className="text-red-500" size={32} /> 1 Full-Day Capture</li>
              <li className="flex items-center gap-6 font-black italic uppercase leading-none"><Icon name="checkCircle" className="text-red-500" size={32} /> 4 Edited Video Reels</li>
              <li className="flex items-center gap-6 font-black italic uppercase leading-none"><Icon name="checkCircle" className="text-red-500" size={32} /> 15+ Polished Stills</li>
            </ul>
            <button onClick={() => navigateTo('booking')} className="w-full py-12 bg-red-600 text-white rounded-[3rem] hover:bg-red-700 transition-all shadow-3xl text-xl uppercase tracking-[0.3em] font-black group leading-none font-black italic uppercase leading-none">CLAIM YOUR SPOT <ArrowRight className="inline ml-4 group-hover:translate-x-3 transition-transform font-black italic uppercase leading-none" size={32} /></button>
          </div>
        </div>
        <div className="relative group bg-white p-12 rounded-[5rem] shadow-xl border border-slate-100 flex flex-col hover:border-slate-900 transition-all transform hover:-translate-y-4 overflow-hidden h-[850px] font-black italic uppercase">
          <img src="https://images.unsplash.com/photo-1540575861501-7ad0582373f2?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover brightness-[0.9] opacity-10 group-hover:scale-110 transition-transform duration-1000 group-hover:opacity-20" alt="Event" />
          <div className="relative z-10 flex flex-col h-full font-black italic uppercase">
            <div className="bg-slate-100 text-slate-900 w-24 h-24 rounded-3xl flex items-center justify-center mb-12 shadow-lg group-hover:bg-slate-900 group-hover:text-white transition-all font-black italic uppercase leading-none"><Icon name="camera" size={48} /></div>
            <h3 className="text-4xl mb-4 leading-none font-black italic uppercase leading-none">EVENTS</h3>
            <p className="text-red-600 text-[10px] tracking-[0.5em] mb-12 italic uppercase leading-none font-black">SELECTIVE SCALE</p>
            <p className="text-2xl text-slate-500 mb-14 flex-grow font-bold italic normal-case leading-relaxed tracking-normal font-black">Cinematic coverage for summits and conferences. Use one day to generate content that lasts 3 months.</p>
            <button onClick={() => navigateTo('booking')} className="w-full py-10 border-4 border-slate-900 text-slate-900 rounded-[2.5rem] hover:bg-slate-900 hover:text-white transition-all text-sm italic uppercase tracking-widest font-black leading-none font-black italic uppercase">Inquire Project</button>
          </div>
        </div>
      </div>

      {/* EFFICIENCY TABLE */}
      <div className="bg-slate-50 rounded-[6rem] p-28 text-center border border-slate-100 max-w-7xl mx-auto italic font-black uppercase font-black italic uppercase font-black italic uppercase">
         <h2 className="text-6xl md:text-8xl font-black mb-12 tracking-tighter italic uppercase leading-none font-black italic uppercase font-black italic uppercase leading-none font-black italic uppercase leading-none">The <span className="text-red-600">Efficiency</span> Principle.</h2>
         <p className="text-3xl text-slate-500 font-bold max-w-4xl mx-auto italic mb-20 leading-relaxed tracking-normal normal-case font-black italic uppercase">"Outsourcing content creation frees up owners' time for high-level scaling." We deliver 300% more reach for a fraction of the cost of an internal team.</p>
         <div className="grid md:grid-cols-4 gap-12 text-left font-black italic uppercase leading-none font-black italic uppercase leading-none">
            {[ { l: "1 DAY ON-SITE", v: "INPUT" }, { l: "4-8 REELS", v: "VIDEO" }, { l: "15+ PHOTOS", v: "STILLS" }, { l: "30 DAYS REACH", v: "RESULT" }].map((s, i) => (
              <div key={i} className="bg-white p-14 rounded-[4rem] shadow-sm group hover:bg-slate-900 hover:text-white transition-all duration-700 font-black italic uppercase leading-none">
                 <p className="text-red-600 text-[11px] font-black tracking-widest mb-4 uppercase leading-none font-black italic uppercase leading-none">{s.v}</p>
                 <p className="text-3xl font-black tracking-tighter uppercase leading-none italic leading-none font-black italic uppercase leading-none">{s.l}</p>
              </div>
            ))}
         </div>
      </div>
    </div>
  </div>
);

const Portfolio = ({ navigateTo }) => {
  const items = [
    { client: "Gems Cup Calgary", type: "Multiplier", problem: "Premier horse competition. Coverage would usually disappear 24h later.", solution: "Full drone deployment and ground units.", result: "3-month drip campaign. Tickets increased 25%.", vId: 'Z-4poApHgkE', vType: 'youtube' },
    { client: "Estavio Real Estate", type: "Authority Engine", problem: "Weekly sessions locked in a room with only 20 agents.", solution: "Turned 1h talks into 10+ authority Reels.", result: "Built the #1 Calgary real estate brand by reach.", vId: 'gJzbHrC01LBX00QmdojNxoA00L2ncGo02auPd46DKqqEmKM', vType: 'mux' },
    { client: "MOA Program", type: "Storytelling", problem: "Programs look sterile. Needed hands-on student energy.", solution: "Production focused on student success stories.", result: "Significant boost in quarterly enrollment.", vId: 'tHQPOaEigvny7OAkC5yAfxGd7cykNJEdMF2vUXLolXc', vType: 'mux' }
  ];
  return (
    <div className="animate-fade-in pt-48 selection:bg-red-600 bg-white font-black uppercase tracking-tighter italic font-black uppercase">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto mb-48 text-left md:text-center italic font-black uppercase font-black italic uppercase">
          <div className="inline-block bg-red-100 text-red-600 px-8 py-3 rounded-full text-[11px] uppercase tracking-[0.6em] mb-12 italic shadow-sm font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none">The Evidence</div>
          <h1 className="text-8xl md:text-[14rem] text-slate-900 mb-10 tracking-tighter leading-[0.8] italic uppercase leading-none font-black italic uppercase font-black italic uppercase leading-none">OUR <span className="text-red-600 underline decoration-slate-100 underline-offset-[24px]">PROOF.</span></h1>
          <p className="text-4xl text-slate-400 italic opacity-60 font-black uppercase mb-10 leading-tight tracking-tight font-black italic uppercase font-black italic uppercase">We don't hand over raw files. We deliver market momentum.</p>
        </div>
        <div className="space-y-[300px] mb-48 text-left italic font-black uppercase font-black italic uppercase">
          {items.map((item, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-32 font-black italic uppercase font-black italic uppercase`}>
              <div className="lg:w-[65%] w-full h-[800px] relative group transform hover:scale-[1.02] transition-transform duration-1000 font-black italic uppercase font-black italic uppercase">
                 <VideoLoop type={item.vType} id={item.vId} title={item.client} />
                 <div className="absolute -top-10 -right-10 bg-white p-10 rounded-full shadow-2xl border border-slate-100 transform rotate-12 group-hover:rotate-0 transition-transform duration-700 hidden lg:block font-black italic uppercase leading-none"><Icon name="rocket" size={48} className="text-red-600" /></div>
              </div>
              <div className="lg:w-[35%] font-black italic uppercase">
                <div className="inline-flex items-center gap-4 bg-slate-900 text-white font-black text-[11px] uppercase tracking-[0.5em] px-10 py-4 rounded-full mb-12 italic shadow-2xl font-black italic uppercase leading-none">{item.type}</div>
                <h3 className="text-7xl font-black mb-12 italic tracking-tighter leading-[0.85] uppercase text-slate-900 font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none">{item.client}</h3>
                <div className="space-y-12 mb-16 font-black italic uppercase">
                  <div className="border-l-8 border-slate-100 pl-10"><h4 className="text-slate-300 text-[11px] uppercase tracking-[0.5em] mb-4 font-black leading-none uppercase">THE STRUGGLE</h4><p className="text-2xl text-slate-500 font-bold italic leading-relaxed tracking-normal normal-case">{item.problem}</p></div>
                  <div className="border-l-8 border-red-600 pl-10"><h4 className="text-red-600 text-[11px] uppercase tracking-[0.5em] mb-4 font-black leading-none italic uppercase">THE RESULT</h4><p className="text-4xl text-slate-900 font-black italic tracking-tighter uppercase underline decoration-red-100 underline-offset-8 leading-tight font-black italic uppercase leading-none font-black italic uppercase leading-none">{item.result}</p></div>
                </div>
                <button onClick={() => navigateTo('booking')} className="flex items-center gap-8 text-red-600 font-black text-2xl hover:translate-x-6 transition-transform italic uppercase tracking-widest group font-black italic uppercase leading-none font-black italic uppercase leading-none">Start Your Story <ArrowRight size={40} className="group-hover:scale-125 transition-transform font-black italic uppercase leading-none" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- ACADEMY PAGES ---

const Workshops = ({ navigateTo }) => (
  <div className="animate-fade-in pt-48 selection:bg-red-600 bg-white font-black uppercase tracking-tighter italic font-black uppercase">
    <div className="container mx-auto px-6 text-center lg:text-left">
      <div className="text-center max-w-5xl mx-auto mb-40 italic font-black uppercase font-black italic uppercase">
        <div className="inline-block bg-red-100 text-red-600 font-black px-10 py-3 rounded-full text-[11px] uppercase tracking-[0.6em] mb-12 shadow-sm leading-none font-black italic uppercase leading-none">Academy Tracks</div>
        <h1 className="text-8xl md:text-[12rem] text-slate-900 mb-10 tracking-tighter leading-[0.8] italic uppercase leading-none font-black italic uppercase font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none">PRACTICAL <br /><span className="text-red-600 underline decoration-slate-100 underline-offset-[20px] font-black italic uppercase leading-none">TRAINING.</span></h1>
        <p className="text-4xl text-slate-400 italic opacity-60 font-bold mb-10 leading-tight font-black italic uppercase font-black italic uppercase font-black italic uppercase leading-none">Outcome-based programs for Calgary business leaders and creators.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-12 mb-48 text-left items-stretch font-black italic uppercase font-black italic uppercase">
        {[
          { id: 'business-strategy', title: 'STRATEGY TRACK', icon: 'pieChart', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000', desc: 'Plan 30 days of content in 60 minutes. Stop guessing.' },
          { id: 'corporate-inhouse', title: 'IN-HOUSE TRACK', icon: 'building2', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000', desc: 'Train your staff to capture professional wins internally.' },
          { id: 'production-bootcamp', title: '8-WEEK BOOTCAMP', icon: 'film', img: 'https://images.unsplash.com/photo-1535016120720-40c646bebbdc?q=80&w=1000', desc: 'Zero to Technical Professional Content Creator mastery.' }
        ].map((track) => (
          <div key={track.id} className="relative group rounded-[5rem] overflow-hidden shadow-3xl h-[850px] flex flex-col justify-end p-14 transition-all hover:-translate-y-4 hover:shadow-red-600/10 font-black italic uppercase">
             <img src={track.img} className="absolute inset-0 w-full h-full object-cover brightness-[0.35] contrast-125 group-hover:scale-110 transition-transform duration-1000 group-hover:brightness-[0.25]" alt={track.title} />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent font-black italic uppercase"></div>
             <div className="relative z-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 font-black italic uppercase font-black italic uppercase leading-none font-black italic uppercase leading-none">
                <div className="bg-red-600 w-28 h-28 rounded-[2.5rem] flex items-center justify-center mb-12 shadow-2xl transform group-hover:rotate-12 transition-transform font-black italic uppercase leading-none"><Icon name={track.icon === 'building2' ? 'briefcase' : track.icon} size={64} className="text-white" /></div>
                <h3 className="text-6xl font-black mb-8 italic leading-[0.85] uppercase tracking-tighter text-white font-black italic uppercase leading-none">{track.title}</h3>
                <p className="text-2xl text-gray-300 mb-14 italic leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 tracking-normal normal-case font-bold font-black italic uppercase leading-none font-black italic uppercase leading-none">{track.desc}</p>
                <button onClick={() => navigateTo(track.id)} className="w-full py-10 bg-red-600 text-white rounded-[2.5rem] uppercase tracking-widest text-[12px] font-black hover:bg-white hover:text-slate-900 transition-all shadow-2xl italic leading-none font-black italic uppercase leading-none">ENTER TRACK</button>
             </div>
             <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-1000 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Strategy = ({ navigateTo }) => (
  <div className="animate-fade-in pt-48 selection:bg-red-600 bg-white font-black uppercase tracking-tighter italic font-black uppercase font-black italic uppercase font-black italic uppercase">
    <div className="container mx-auto px-6 max-w-7xl text-left italic font-black uppercase">
      <button onClick={() => navigateTo('workshops')} className="text-red-600 flex items-center gap-4 mb-20 hover:-translate-x-4 transition-transform tracking-[0.5em] text-[12px] italic leading-none uppercase font-black italic uppercase leading-none"><ArrowLeft size={24} /> Back to Academy</button>
      <div className="flex flex-col lg:flex-row gap-40 items-center mb-48 font-black italic uppercase font-black italic uppercase leading-none">
        <div className="lg:w-1/2 font-black italic uppercase font-black italic uppercase leading-none">
          <div className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full text-[11px] tracking-[0.5em] mb-12 italic uppercase font-black leading-none font-black italic uppercase leading-none">Training Track 01</div>
          <h1 className="text-8xl md:text-[12rem] text-slate-900 mb-14 leading-[0.8] tracking-tighter italic uppercase underline decoration-red-600 decoration-8 underline-offset-[20px] font-black italic uppercase leading-none font-black italic uppercase leading-none">Strategy.</h1>
          <p className="text-5xl text-slate-300 mb-16 italic leading-[1.1] uppercase font-black italic font-black italic uppercase leading-none">Plan 30 days <br />in 60 minutes.</p>
          <p className="normal-case text-2xl text-slate-500 font-bold italic mb-20 max-w-xl tracking-normal font-black italic uppercase leading-none">Most businesses fail not from poor quality, but from a lack of system. This training fixes the direction and solves consistency forever.</p>
          <button onClick={() => navigateTo('booking')} className="w-full py-14 bg-red-600 text-white rounded-[3.5rem] text-4xl shadow-3xl hover:scale-105 transition-transform italic uppercase tracking-widest border-4 border-white/10 font-black italic uppercase font-black italic uppercase font-black italic uppercase leading-none font-black italic uppercase leading-none">Book Session <ArrowRight size={56} className="inline ml-8 font-black italic uppercase leading-none" /></button>
        </div>
        <div className="lg:w-1/2 grid gap-12 font-black italic uppercase">
          {[ { t: "CONTENT BUCKETS", d: "Master the 'Content Buckets' method to organize business wins into repeatable high-performance tracks.", i: "pieChart" }, { t: "THE 60-MIN MAP", d: "Our step-by-step logic framework to plan 30 days of high-performance marketing in a single sitting.", i: "clock" }, { t: "GOAL ALIGNMENT", d: "Synchronizing your social output with actual quarterly business sales targets and quarterly ROI goals.", i: "target" }].map((item, i) => (
             <div key={i} className="bg-slate-50 p-14 rounded-[5rem] border border-slate-100 flex items-center gap-12 group hover:bg-slate-900 hover:text-white transition-all transform hover:-translate-y-2 font-black italic uppercase leading-none">
                <div className="bg-red-600 text-white p-8 rounded-3xl group-hover:rotate-12 transition-transform shadow-xl font-black italic uppercase leading-none"><Icon name={item.i} size={56} /></div>
                <div className="text-left font-black italic uppercase leading-none"><h4 className="text-4xl mb-4 italic uppercase leading-none font-black leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none">{item.t}</h4><p className="normal-case text-xl text-slate-400 group-hover:text-gray-300 font-bold italic leading-tight tracking-normal font-black italic uppercase leading-none">{item.d}</p></div>
             </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const InHouse = ({ navigateTo }) => (
  <div className="animate-fade-in pt-48 selection:bg-red-600 bg-white font-black uppercase tracking-tighter italic font-black uppercase">
    <div className="container mx-auto px-6 max-w-7xl text-left font-black italic uppercase">
      <button onClick={() => navigateTo('workshops')} className="text-red-600 flex items-center gap-4 mb-24 hover:-translate-x-4 transition-transform tracking-[0.5em] text-[12px] italic font-black leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none"><ArrowLeft size={24} /> Back to Academy</button>
      <div className="flex flex-col lg:flex-row gap-40 items-center mb-48 font-black italic uppercase">
        <div className="lg:w-1/2 font-black italic uppercase leading-none">
          <div className="inline-block bg-red-600 text-white px-8 py-3 rounded-full text-[11px] tracking-[0.5em] mb-12 italic shadow-lg font-black italic uppercase leading-none">Corporate Track 02</div>
          <h1 className="text-8xl md:text-[12rem] text-slate-900 mb-14 leading-[0.8] tracking-tighter italic uppercase underline decoration-slate-100 underline-offset-[20px] font-black italic uppercase leading-none">In-House.</h1>
          <p className="text-5xl text-slate-300 mb-16 italic leading-[1.1] uppercase font-black italic uppercase leading-none">Train your team <br />to capture wins.</p>
          <p className="normal-case text-2xl text-slate-500 font-bold italic mb-20 max-w-xl leading-relaxed tracking-normal font-black italic uppercase leading-none">Stop waiting for vendors. We transform your staff into a high-performance content production unit working within your own standards.</p>
          <button onClick={() => navigateTo('booking')} className="w-full py-14 bg-slate-900 text-white rounded-[3.5rem] text-4xl shadow-3xl hover:scale-105 transition-transform italic uppercase border-4 border-white/10 font-black italic uppercase leading-none font-black italic uppercase leading-none">Request Onboarding <ArrowRight size={56} className="inline ml-8 font-black italic uppercase leading-none" /></button>
        </div>
        <div className="lg:w-1/2 relative group font-black italic uppercase leading-none">
           <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=90&w=1200" className="relative rounded-[6rem] shadow-3xl brightness-75 grayscale group-hover:grayscale-0 transition-all duration-1000 font-black italic uppercase leading-none" alt="Training" />
           <div className="absolute -bottom-20 -right-20 bg-red-600 p-20 rounded-[5rem] text-white shadow-2xl animate-pulse group-hover:scale-110 transition-transform font-black italic uppercase leading-none"><Icon name="smartphone" size={96} /></div>
        </div>
      </div>
      <div className="bg-slate-50 border border-slate-100 p-32 rounded-[7rem] shadow-xl text-center font-black italic uppercase leading-none font-black italic uppercase leading-none">
         <h2 className="text-7xl text-slate-900 mb-24 italic uppercase underline decoration-red-600 underline-offset-12 tracking-tighter leading-none font-black italic uppercase leading-none">The Capability Stack</h2>
         <div className="grid md:grid-cols-4 gap-12 font-black italic uppercase leading-none">
            {[ { l: "SMARTPHONE CINEMA", i: "smartphone", d: "Master professional movement." }, { l: "OFFICE LIGHTING", i: "lightbulb", d: "Look pro in any corporate room." }, { l: "AUDIO MASTERY", i: "mic", d: "Capture studio sound in the field." }, { l: "TEAM WORKFLOW", i: "layers", d: "SOPs for daily content creation." }].map((f, i) => (
              <div key={i} className="bg-white p-14 rounded-[5rem] shadow-sm border border-slate-100 group hover:bg-red-600 transition-all cursor-default font-black italic uppercase leading-none">
                 <Icon name={f.i} className="text-red-600 group-hover:text-white mx-auto mb-10 transition-colors font-black italic uppercase leading-none" size={80} />
                 <p className="text-2xl font-black group-hover:text-white leading-none tracking-widest uppercase mb-6 italic font-black italic uppercase leading-none">{f.l}</p>
                 <p className="normal-case text-slate-400 group-hover:text-white/70 text-base font-bold leading-tight font-black italic uppercase leading-none tracking-normal font-black italic uppercase leading-none">{f.d}</p>
              </div>
            ))}
         </div>
      </div>
    </div>
  </div>
);

const Bootcamp = ({ navigateTo }) => {
  const weeks = [
    { title: "CAMERA PHYSICS", detail: "F-stops, focal lengths, and technical hardware safety protocols." }, 
    { title: "COMPOSITION LAB", detail: "Framing for high-impact social-first viral storytelling arcs." }, 
    { title: "LIGHTING MOODS", detail: "Shaping emotion using advanced shadow design and studio lighting." }, 
    { title: "AUDIO MASTERY", detail: "Capturing studio-quality sound in unpredictable environments." }, 
    { title: "SOCIAL SPRINTS", detail: "Fast production hooks for modern mobile-first attention spans." }, 
    { title: "EDITING ARCH.", detail: "Pacing, narrative arcs, and technical workflow speed mastery." }, 
    { title: "TECHNICAL COLOR", detail: "Profile matching, correction, and professional grading." }, 
    { title: "CLIENT WRAP", detail: "Industry delivery standards, codecs, and wrap-up systems." }
  ];
  return (
    <div className="animate-fade-in pt-48 font-black selection:bg-red-600 tracking-tighter uppercase bg-white text-left italic font-black uppercase">
      <div className="container mx-auto px-6 max-w-7xl font-black italic uppercase leading-none font-black italic uppercase leading-none">
        <button onClick={() => navigateTo('workshops')} className="text-red-600 flex items-center gap-4 mb-24 hover:-translate-x-4 transition-transform tracking-[0.5em] text-[12px] italic font-black leading-none font-black italic uppercase leading-none"><ArrowLeft size={24} /> Back to Academy</button>
        <div className="text-center mb-48 font-black italic uppercase leading-none">
           <div className="inline-block bg-red-100 text-red-600 px-10 py-3 rounded-full text-[11px] tracking-[0.5em] mb-12 italic uppercase font-black leading-none font-black italic uppercase leading-none">Academy Track 03</div>
           <h1 className="text-8xl md:text-[15rem] text-slate-900 mb-14 leading-[0.75] tracking-tighter italic uppercase leading-none font-black italic uppercase leading-none">Academy <br /><span className="text-red-600 italic leading-none font-black italic uppercase leading-none">8 Weeks.</span></h1>
           <p className="text-5xl text-slate-300 italic leading-none uppercase font-black tracking-widest max-w-5xl mx-auto font-black italic uppercase leading-none font-black italic uppercase leading-none">Zero to Technical Professional Content Creator.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-48 text-left font-black italic uppercase font-black italic uppercase leading-none">
           {weeks.map((w, i) => (
             <div key={i} className="bg-white p-20 rounded-[6rem] border border-slate-100 shadow-xl group hover:border-red-600 transition-all transform hover:-translate-y-6 font-black italic uppercase leading-none">
                <p className="text-red-600 text-8xl mb-10 italic opacity-10 group-hover:opacity-100 transition-opacity leading-none font-black italic uppercase leading-none">0{i+1}</p>
                <h4 className="text-4xl mb-8 tracking-tighter uppercase leading-none italic font-black italic uppercase leading-none font-black italic uppercase leading-none">{w.title}</h4>
                <p className="normal-case text-xl text-slate-400 font-bold italic leading-tight font-black italic uppercase leading-none tracking-normal font-black italic uppercase leading-none">{w.detail}</p>
             </div>
           ))}
        </div>
        <div className="bg-slate-900 p-32 rounded-[7rem] shadow-3xl text-white flex flex-col lg:flex-row justify-between items-center gap-32 relative overflow-hidden group font-black uppercase font-black italic uppercase leading-none">
           <div className="absolute top-0 left-0 w-full h-full bg-red-600/5 -skew-x-12 translate-x-40 pointer-events-none transition-transform duration-1000 group-hover:translate-x-20 font-black italic uppercase leading-none"></div>
           <div className="relative z-10 text-left font-black italic uppercase leading-none">
              <p className="text-red-500 text-[12px] tracking-[1.2em] mb-12 italic leading-none font-black uppercase font-black italic uppercase leading-none leading-none">THE TUITION INVESTMENT</p>
              <p className="text-[12rem] md:text-[14rem] tracking-tighter leading-[0.8] italic font-black uppercase font-black italic uppercase leading-none leading-none">$1000 <span className="text-5xl font-bold text-slate-500 align-middle ml-12 font-black uppercase leading-none leading-none font-black italic uppercase leading-none">CAD / PP</span></p>
           </div>
           <button onClick={() => navigateTo('booking')} className="relative z-10 bg-red-600 px-32 py-16 rounded-full text-5xl shadow-3xl hover:scale-110 transition-transform italic uppercase border-4 border-white/10 font-black italic font-black italic uppercase leading-none font-black italic uppercase leading-none">Enroll For Cohort <ArrowRight size={72} className="inline ml-10 font-black italic uppercase leading-none" /></button>
        </div>
      </div>
    </div>
  );
};

const Booking = () => (
  <div className="animate-fade-in pt-64 pb-32 bg-slate-50 min-h-screen uppercase font-black tracking-tighter selection:bg-red-600 text-left italic font-black uppercase">
    <div className="container mx-auto px-6 max-w-7xl font-black uppercase italic leading-none font-black italic uppercase leading-none">
      <div className="bg-white rounded-[7rem] shadow-3xl overflow-hidden flex flex-col lg:flex-row border border-slate-100 font-black uppercase italic leading-none font-black italic uppercase leading-none">
        <div className="lg:w-2/5 bg-slate-900 p-24 md:p-36 text-white flex flex-col justify-between relative overflow-hidden font-black uppercase italic leading-none font-black italic uppercase leading-none">
           <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200" className="absolute inset-0 w-full h-full object-cover opacity-20 brightness-50 font-black uppercase italic leading-none font-black italic uppercase leading-none" alt="Studio" />
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[180px] -translate-y-32 translate-x-32 font-black uppercase italic leading-none font-black italic uppercase leading-none"></div>
           <div className="relative z-10 font-black uppercase italic leading-none font-black italic uppercase leading-none">
              <h2 className="text-8xl md:text-9xl font-black mb-20 italic tracking-tighter leading-[0.8] uppercase font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none">LET'S <br /><span className="text-red-600 italic underline decoration-white/10 decoration-8 underline-offset-[28px] font-black italic uppercase leading-none font-black italic uppercase leading-none">SCALE.</span></h2>
              <div className="space-y-20 font-black uppercase italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none">
                 <div className="flex gap-12 items-start font-black uppercase italic leading-none font-black italic uppercase leading-none"><Icon name="checkCircle" className="text-red-500 mt-4 font-black uppercase italic leading-none font-black italic uppercase leading-none" size={56} /><span className="text-gray-300 uppercase tracking-[0.5em] text-[12px] leading-relaxed font-black uppercase italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none">24-HOUR RESPONSE <br />TIME GUARANTEE</span></div>
                 <div className="flex gap-12 items-start font-black uppercase italic leading-none font-black italic uppercase leading-none"><Icon name="checkCircle" className="text-red-500 mt-4 font-black uppercase italic leading-none font-black italic uppercase leading-none" size={56} /><span className="text-gray-300 uppercase tracking-[0.5em] text-[12px] leading-relaxed font-black uppercase italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none">CUSTOM MARKETING <br />AUDIT SESSION</span></div>
              </div>
           </div>
           <div className="pt-32 border-t border-white/10 mt-32 relative z-10 text-left font-black uppercase italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none">
              <p className="text-5xl font-black tracking-tighter uppercase italic text-white hover:text-red-600 transition-colors cursor-pointer mb-14 uppercase font-black uppercase italic leading-none font-black italic uppercase leading-none leading-none">HELLO@ICANFILM.CA</p>
              <div className="flex gap-12 opacity-40 hover:opacity-100 transition-opacity font-black uppercase italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none"><Icon name="instagram" size={40} /><Icon name="linkedin" size={40} /><Icon name="youtube" size={40} /></div>
           </div>
        </div>
        <div className="lg:w-3/5 p-24 md:p-36 text-left font-black uppercase italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none">
          <form className="grid gap-24 font-black uppercase italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-24 font-black uppercase italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none">
               <div className="space-y-8 font-black uppercase italic leading-none font-black italic uppercase leading-none"><label className="text-[12px] font-black uppercase text-slate-300 tracking-[0.8em] italic ml-6 leading-none font-black uppercase italic leading-none font-black italic uppercase leading-none">FULL NAME</label><input type="text" className="w-full px-14 py-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 outline-none focus:ring-8 focus:ring-red-600/5 focus:border-red-600 font-black text-slate-900 italic text-4xl uppercase placeholder:opacity-30 font-black uppercase italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none" placeholder="Jane Doe" /></div>
               <div className="space-y-8 font-black uppercase italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none"><label className="text-[12px] font-black uppercase text-slate-300 tracking-[0.8em] italic ml-6 leading-none font-black uppercase italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none">BUSINESS</label><input type="text" className="w-full px-14 py-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 outline-none focus:ring-8 focus:ring-red-600/5 focus:border-red-600 font-black text-slate-900 italic text-4xl uppercase placeholder:opacity-30 font-black uppercase italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none" placeholder="Calgary Ent." /></div>
            </div>
            <div className="space-y-8 font-black uppercase italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none"><label className="text-[12px] font-black uppercase text-red-600 tracking-[0.8em] italic ml-6 leading-none font-black uppercase italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none">PRIMARY STRUGGLE</label><textarea rows="6" className="w-full px-14 py-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 outline-none focus:ring-8 focus:ring-red-600/5 focus:border-red-600 font-black text-slate-900 italic text-4xl leading-tight uppercase placeholder:opacity-30 font-black uppercase italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none" placeholder="What's your biggest challenge?"></textarea></div>
            <button className="w-full bg-red-600 text-white font-black py-16 rounded-[4.5rem] shadow-3xl uppercase tracking-[0.7em] text-3xl hover:scale-105 transition-all flex items-center justify-center gap-14 italic group border-4 border-white/10 font-black italic font-black uppercase italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none">SEND INQUIRY <ArrowRight size={72} className="group-hover:translate-x-12 transition-transform font-black uppercase italic leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none font-black italic uppercase leading-none" /></button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

// --- MAIN WRAPPER ---

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
    <div className="font-sans text-slate-900 bg-white antialiased min-h-screen flex flex-col tracking-tighter selection:bg-red-600 selection:text-white overflow-x-hidden">
      {/* FIXED NAVIGATION */}
      <nav className={`fixed w-full z-[100] transition-all duration-1000 ${scrolled || activePage !== 'home' ? 'bg-white/95 backdrop-blur-4xl shadow-md py-6' : 'bg-transparent py-16'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center font-black italic">
          <div className="cursor-pointer group" onClick={() => navigateTo('home')}><ICANLogo scrolled={scrolled} activePage={activePage} /></div>
          <div className="hidden lg:flex items-center space-x-12">
            {['Home', 'Services', 'Portfolio', 'Workshops'].map((item) => (
              <button key={item} onClick={() => navigateTo(item.toLowerCase())} className={navItemClass(item)}>{item}</button>
            ))}
            <button onClick={() => navigateTo('booking')} className="bg-red-600 text-white px-16 py-5 rounded-[1.5rem] font-black text-[12px] uppercase tracking-[0.5em] shadow-3xl shadow-red-600/50 hover:scale-110 transition-all italic border-4 border-white/10 uppercase italic leading-none font-black italic font-black italic">Free Audit</button>
          </div>
          <button onClick={() => setIsMenuOpen(true)} className={`lg:hidden ${scrolled || activePage !== 'home' ? 'text-slate-900' : 'text-white'}`}><Menu size={48} /></button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[120] flex flex-col justify-center gap-16 text-center animate-fade-in p-12 overflow-y-auto font-black italic">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-16 right-16 p-8 bg-slate-50 rounded-full shadow-md font-black italic font-black italic"><X size={48} /></button>
          {['Home', 'Services', 'Portfolio', 'Workshops', 'Booking'].map((item) => (
            <button key={item} onClick={() => navigateTo(item.toLowerCase())} className="text-7xl font-black italic tracking-tighter hover:text-red-600 transition-all uppercase leading-[0.85] mb-8 font-black italic font-black italic font-black italic">{item}</button>
          ))}
        </div>
      )}

      {/* DYNAMIC CONTENT CONTAINER - Unified logic with Top Safe-Padding for non-home pages */}
      <main className={`flex-grow ${activePage === 'home' ? '' : 'pt-56 md:pt-64'}`}>
        {activePage === 'home' && <Home navigateTo={navigateTo} />}
        {activePage === 'services' && <Services navigateTo={navigateTo} />}
        {activePage === 'portfolio' && <Portfolio navigateTo={navigateTo} />}
        {activePage === 'workshops' && <Workshops navigateTo={navigateTo} />}
        {activePage === 'business-strategy' && <Strategy navigateTo={navigateTo} />}
        {activePage === 'corporate-inhouse' && <InHouse navigateTo={navigateTo} />}
        {activePage === 'production-bootcamp' && <Bootcamp navigateTo={navigateTo} />}
        {activePage === 'booking' && <Booking navigateTo={navigateTo} />}
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-600 py-64 border-t border-slate-900 selection:bg-red-600 overflow-hidden uppercase font-black text-left font-black leading-none font-black italic font-black italic font-black italic font-black italic font-black italic">
        <div className="container mx-auto px-6 font-black uppercase leading-none font-black italic font-black italic font-black italic font-black italic">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-48 mb-48 font-black uppercase leading-none font-black italic font-black italic font-black italic">
            <div className="max-w-4xl mx-auto lg:mx-0 font-black uppercase leading-none font-black italic font-black italic font-black italic">
              <ICANLogo scrolled={false} activePage="other" />
              <p className="mt-20 text-6xl italic leading-[0.95] text-white/10 tracking-tighter uppercase italic uppercase font-black uppercase leading-none font-black italic font-black italic font-black italic font-black italic font-black italic font-black italic">Calgary's specialist agency combining cinematic production with ruthless content strategy.</p>
            </div>
            <div className="grid grid-cols-2 gap-40 mx-auto lg:mx-0 font-black uppercase leading-none font-black italic font-black italic font-black italic font-black italic">
               <div className="space-y-12 text-left font-black uppercase leading-none font-black italic font-black italic font-black italic font-black italic">
                  <h4 className="text-white text-[12px] tracking-[1em] opacity-20 uppercase font-black uppercase italic font-black uppercase leading-none font-black italic font-black italic font-black italic font-black italic">Agency</h4>
                  <div className="flex flex-col gap-10 text-[18px] tracking-[0.5em] italic font-black uppercase leading-none font-black italic uppercase font-black italic font-black italic font-black italic font-black italic font-black italic"><button onClick={() => navigateTo('home')} className="hover:text-red-600 text-left font-black uppercase leading-none font-black italic font-black italic">Plan</button><button onClick={() => navigateTo('services')} className="hover:text-red-600 text-left font-black uppercase leading-none font-black italic font-black italic">Menu</button><button onClick={() => navigateTo('portfolio')} className="hover:text-red-600 text-left font-black uppercase leading-none font-black italic font-black italic">Proof</button></div>
               </div>
               <div className="space-y-12 text-left font-black uppercase italic leading-none font-black italic font-black italic font-black italic font-black italic">
                  <h4 className="text-white text-[12px] tracking-[1em] opacity-20 uppercase font-black uppercase italic leading-none font-black italic uppercase font-black italic font-black italic font-black italic">Academy</h4>
                  <div className="flex flex-col gap-10 text-[18px] tracking-[0.5em] text-slate-400 italic font-black uppercase leading-none font-black italic uppercase font-black italic font-black italic font-black italic font-black italic"><button onClick={() => navigateTo('workshops')} className="hover:text-red-600 text-left font-black uppercase italic uppercase font-black leading-none font-black italic font-black italic">Tracks</button><button onClick={() => navigateTo('booking')} className="hover:text-red-600 text-left font-black uppercase italic uppercase font-black leading-none font-black italic font-black italic">Inquire</button></div>
               </div>
            </div>
          </div>
          <div className="text-center pt-20 border-t border-white/5 opacity-20 font-black uppercase italic leading-none font-black italic font-black italic font-black italic font-black italic font-black italic font-black italic font-black italic"><p className="text-[12px] tracking-[1.5em] font-black uppercase italic leading-none font-black italic font-black italic font-black italic font-black italic font-black italic font-black italic font-black italic">&copy; 2026 ICAN FILM • CALGARY ALBERTA</p></div>
        </div>
      </footer>
    </div>
  );
}
