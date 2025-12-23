import React, { useState, useEffect } from 'react';
import { 
  X, Menu, ArrowRight, ArrowLeft, Clapperboard, Clock, Timer, Rocket, 
  Layers, Camera, TrendingUp, TrendingDown, MousePointer2, 
  Quote, CheckCircle, Smartphone, Lightbulb, Mic, MonitorPlay, 
  Zap, Briefcase, PieChart, Target, Share2, Instagram, Linkedin, Youtube 
} from 'lucide-react';

/**
 * ICAN FILM AGENCY - ULTRA-DETAILED PRODUCTION VERSION
 * FIXED: Navigation overlap, Page spacing, and Text alignment.
 * RESTORED: All curriculum modules, strategy tracks, and case study details.
 */

// --- SHARED UI COMPONENTS ---

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

const IconHelper = ({ name, size = 24, className = "" }) => {
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
    timer: Timer,
    checkCircle: CheckCircle,
    pieChart: PieChart,
    target: Target,
    share2: Share2,
    smartphone: Smartphone,
    lightbulb: Lightbulb,
    mic: Mic,
    monitorPlay: MonitorPlay,
    zap: Zap,
    briefcase: Briefcase,
    instagram: Instagram,
    linkedin: Linkedin,
    youtube: Youtube
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
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
      </div>
    );
  }
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] shadow-2xl bg-slate-900 border border-white/5 group">
      <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover brightness-90 contrast-110">
        <source src={`https://stream.mux.com/${id}/medium.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent group-hover:opacity-0 transition-opacity"></div>
    </div>
  );
};

// --- PAGES ---

const Home = ({ navigateTo }) => (
  <div className="animate-fade-in">
    {/* 1. HERO - Fixed Padding to avoid Nav overlap */}
    <section className="relative h-screen min-h-[900px] flex items-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10"></div>
      <div className="absolute inset-0 z-0">
         <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=90&w=2400&auto=format&fit=crop" alt="Production" className="w-full h-full object-cover scale-105 animate-slow-zoom brightness-[0.4]" />
      </div>
      <div className="container mx-auto px-6 relative z-20 text-left pt-20"> {/* pt-20 ensures no overlap */}
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-3 bg-red-600/10 text-red-500 px-6 py-3 rounded-full text-[10px] font-black mb-10 border border-red-600/20 backdrop-blur-md uppercase tracking-[0.4em]">
            <Clapperboard size={16} className="animate-pulse" /> Calgary's Strategic Event-to-Content Agency
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.8] mb-10 tracking-tighter uppercase">WE CAPTURE.<br />YOU <span className="text-red-600 italic">DOMINATE.</span></h1>
          <p className="text-2xl md:text-4xl text-gray-200 mb-14 max-w-4xl font-medium uppercase italic leading-tight">Stop letting your events die when the lights go out. We turn live experiences into <span className="text-white font-black underline decoration-red-600 underline-offset-8">30 days of high-ROI content.</span></p>
          <div className="flex flex-col sm:flex-row gap-8">
            <button onClick={() => navigateTo('booking')} className="bg-red-600 hover:bg-red-700 text-white px-14 py-8 rounded-[2.5rem] font-black text-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-5 uppercase tracking-widest italic group border-4 border-white/10 shadow-3xl">Start Free Audit <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" /></button>
            <button onClick={() => navigateTo('services')} className="bg-white/10 hover:bg-white text-white hover:text-slate-900 backdrop-blur-xl border border-white/20 px-14 py-8 rounded-[2.5rem] font-black text-2xl transition-all flex items-center justify-center gap-5 uppercase tracking-widest shadow-2xl">See Packages</button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/30 hidden md:block"><IconHelper name="mousePointer2" size={36} /></div>
    </section>

    {/* 2. THE GAP */}
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-32">
          <h2 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-none">The <span className="text-red-600 italic underline decoration-slate-100 underline-offset-[16px]">Content Gap.</span></h2>
          <p className="text-2xl text-slate-400 font-bold italic max-w-2xl mx-auto uppercase">Calgary businesses are doing great things. No one is seeing them.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100 flex flex-col justify-center group hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <h3 className="text-4xl font-black text-slate-300 mb-12 flex items-center gap-4 uppercase italic tracking-tighter"><TrendingDown size={32} /> The Reality</h3>
            <div className="space-y-16 relative z-10">
               <div className="flex items-start gap-8 text-left">
                  <div className="bg-white p-6 rounded-3xl shadow-sm text-slate-300 border border-slate-100"><Clock size={40} /></div>
                  <div><p className="text-4xl font-black text-slate-900 leading-none mb-3 tracking-tighter uppercase italic">50% OF OWNERS</p><p className="text-xl text-slate-500 font-medium italic normal-case">Devote less than 1 hour a day to marketing. Consistency is the first thing to die.</p></div>
               </div>
               <div className="flex items-start gap-8 text-left">
                  <div className="bg-white p-6 rounded-3xl shadow-sm text-slate-300 border border-slate-100"><Timer size={40} /></div>
                  <div><p className="text-4xl font-black text-slate-900 leading-none mb-3 tracking-tighter uppercase italic">44% STALLING</p><p className="text-xl text-slate-500 font-medium italic normal-case">Procrastinate on social media because they lack a capture-to-post engine.</p></div>
               </div>
            </div>
          </div>
          <div className="bg-slate-900 p-16 rounded-[4rem] border-4 border-red-600 flex flex-col justify-center relative overflow-hidden shadow-3xl transform hover:scale-[1.03] transition-all duration-700 group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-[120px] transition-all duration-1000 group-hover:bg-red-600/20 group-hover:scale-125"></div>
            <h3 className="text-4xl font-black text-red-500 mb-12 flex items-center gap-4 relative z-10 uppercase italic tracking-tighter leading-none"><TrendingUp size={32} /> The ICAN Edge</h3>
            <div className="space-y-16 relative z-10">
               <div className="flex items-start gap-8 text-left">
                  <div className="bg-red-600 p-6 rounded-3xl shadow-2xl text-white transform group-hover:rotate-12 transition-transform duration-500"><Rocket size={40} /></div>
                  <div><p className="text-4xl font-black text-white leading-none mb-3 tracking-tighter uppercase italic">89% ROI</p><p className="text-xl text-red-400 font-medium italic normal-case">Video drives massive traffic & sales faster than any other digital medium.</p></div>
               </div>
               <div className="flex items-start gap-8 text-left">
                  <div className="bg-red-600 p-6 rounded-3xl shadow-2xl text-white transform group-hover:-rotate-12 transition-transform duration-500"><Layers size={40} /></div>
                  <div><p className="text-4xl font-black text-white leading-none mb-3 tracking-tighter uppercase italic">300% REACH</p><p className="text-xl text-red-400 font-medium italic normal-case">Repurposing one capture day into 15+ assets increases your visibility 3x.</p></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* 3. CONTENT ENGINE */}
    <section className="py-40 bg-slate-950 text-white overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-32">
           <h2 className="text-6xl md:text-[10rem] font-black mb-10 tracking-tighter leading-none italic uppercase">THE CONTENT <br /><span className="text-red-600 underline decoration-red-600/30">ENGINE.</span></h2>
           <p className="text-3xl text-gray-400 italic font-bold max-w-2xl mx-auto">"We turn one-off events into 30 days of high-ROI momentum."</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12">
           {[
             { title: "CAPTURE", icon: "camera", desc: "One focused production day per month. We capture your team and wins in cinematic 4K.", img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000" },
             { title: "FACTORY", icon: "layers", desc: "Our editors slice raw footage into Reels, Stills, and Stories optimized for LinkedIn, IG, and TikTok.", img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000" },
             { title: "DOMINATE", icon: "rocket", desc: "A full month of marketing assets delivered and scheduled. You stay visible while you sleep.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000" }
           ].map((step, i) => (
             <div key={i} className="group relative h-[700px] rounded-[4rem] overflow-hidden border border-white/5 hover:border-red-600/60 transition-all duration-1000 transform hover:-translate-y-6 shadow-3xl">
                <img src={step.img} className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:scale-110 transition-transform duration-1000 group-hover:brightness-[0.2]" alt={step.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                <div className="absolute bottom-20 left-12 right-12 z-20 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 text-left">
                   <div className="bg-red-600 w-24 h-24 rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl transform group-hover:rotate-12 transition-transform duration-700 border-4 border-white/10"><IconHelper name={step.icon} size={48} className="text-white" /></div>
                   <h3 className="text-6xl font-black mb-6 italic tracking-tighter uppercase leading-none">{step.title}</h3>
                   <p className="text-xl text-gray-400 font-medium italic group-hover:text-white transition-colors duration-500 opacity-90 leading-relaxed">{step.desc}</p>
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
  <div className="animate-fade-in pt-40 pb-24 selection:bg-red-600 uppercase font-black tracking-tighter bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-5xl mx-auto mb-40">
        <div className="inline-block bg-red-100 text-red-600 font-black px-8 py-2.5 rounded-full text-[11px] uppercase tracking-[0.6em] mb-10 italic shadow-sm">Our Ecosystem</div>
        <h1 className="text-8xl md:text-[13rem] text-slate-900 mb-10 tracking-tighter leading-[0.8] italic uppercase leading-none">SCALE <br /><span className="text-red-600 underline decoration-slate-100 underline-offset-[24px]">NOW.</span></h1>
        <p className="text-3xl text-slate-400 italic opacity-60 font-bold mb-10 leading-tight uppercase">Stop hiring freelancers for single videos. Hire a content system.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto mb-40 text-left items-stretch">
        {/* Tier 1 */}
        <div className="relative group bg-white p-12 rounded-[4rem] shadow-xl border border-slate-100 flex flex-col hover:border-red-600 transition-all transform hover:-translate-y-4 overflow-hidden h-[800px]">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover brightness-[0.9] opacity-10 group-hover:scale-110 transition-transform duration-1000 group-hover:opacity-20" alt="Strategy" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="bg-red-50 text-red-600 w-24 h-24 rounded-3xl flex items-center justify-center mb-12 shadow-lg group-hover:bg-red-600 group-hover:text-white transition-all"><IconHelper name="lightbulb" size={48} /></div>
            <h3 className="text-4xl mb-4 italic leading-none uppercase">THE AUDIT</h3>
            <p className="text-red-600 text-[10px] tracking-[0.5em] mb-12 italic uppercase leading-none">FREE DISCOVERY</p>
            <p className="text-2xl text-slate-500 mb-14 flex-grow font-bold italic normal-case leading-relaxed">A 45-min deep dive where we review your social presence and give you 3-5 tailored content ideas on the spot. Prove the value first.</p>
            <button onClick={() => navigateTo('booking')} className="w-full py-8 border-4 border-slate-900 text-slate-900 rounded-[2.5rem] hover:bg-slate-900 hover:text-white transition-all text-sm italic uppercase tracking-widest font-black italic">Get Free Audit</button>
          </div>
        </div>

        {/* Tier 2 - Flagship */}
        <div className="relative group bg-slate-900 p-12 rounded-[5rem] shadow-3xl text-white flex flex-col transform lg:scale-110 border-8 border-red-600 overflow-hidden z-20 h-[850px] hover:scale-[1.15] transition-transform duration-700">
          <div className="absolute top-0 right-0 -mt-2 mr-12 bg-red-600 text-[10px] font-black tracking-[0.4em] px-10 py-4 rounded-full uppercase shadow-2xl z-30 italic">FLAGSHIP</div>
          <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200" className="absolute inset-0 w-full h-full object-cover brightness-[0.2] group-hover:scale-110 transition-transform duration-1000" alt="Retainer" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
          <div className="relative z-10 flex flex-col h-full pt-10 text-left">
            <div className="bg-red-600 text-white w-28 h-28 rounded-[2.5rem] flex items-center justify-center mb-12 shadow-xl shadow-red-600/40 group-hover:rotate-12 transition-transform"><IconHelper name="zap" size={64} /></div>
            <h3 className="text-6xl mb-4 italic leading-none tracking-tighter uppercase leading-none">RETAINER</h3>
            <p className="text-red-400 text-[10px] tracking-[0.6em] mb-12 italic uppercase leading-none">STARTING $1,500 / MO</p>
            <ul className="space-y-8 mb-20 text-xs italic tracking-[0.2em] leading-none uppercase">
              <li className="flex items-center gap-6"><IconHelper name="checkCircle" className="text-red-500" size={32} /> 1 Full-Day Capture</li>
              <li className="flex items-center gap-6"><IconHelper name="checkCircle" className="text-red-500" size={32} /> 4 Edited Video Reels</li>
              <li className="flex items-center gap-6"><IconHelper name="checkCircle" className="text-red-500" size={32} /> 15+ Polished Stills</li>
              <li className="flex items-center gap-6"><IconHelper name="checkCircle" className="text-red-500" size={32} /> Strategy & Calendar</li>
            </ul>
            <button onClick={() => navigateTo('booking')} className="w-full py-10 bg-red-600 text-white rounded-[3rem] hover:bg-red-700 transition-all shadow-3xl text-lg italic uppercase tracking-[0.3em] font-black group">CLAIM YOUR SPOT <ArrowRight className="inline ml-4 group-hover:translate-x-3 transition-transform" size={32} /></button>
          </div>
        </div>

        {/* Tier 3 */}
        <div className="relative group bg-white p-12 rounded-[4rem] shadow-xl border border-slate-100 flex flex-col hover:border-slate-900 transition-all transform hover:-translate-y-4 overflow-hidden h-[800px]">
          <img src="https://images.unsplash.com/photo-1540575861501-7ad0582373f2?q=80&w=1000" className="absolute inset-0 w-full h-full object-cover brightness-[0.9] opacity-10 group-hover:scale-110 transition-transform duration-1000 group-hover:opacity-20" alt="Event" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="bg-slate-100 text-slate-900 w-20 h-20 rounded-3xl flex items-center justify-center mb-10 shadow-lg group-hover:bg-slate-900 group-hover:text-white transition-all"><IconHelper name="camera" size={40} /></div>
            <h3 className="text-4xl mb-4 italic leading-none uppercase">EVENTS</h3>
            <p className="text-red-600 text-[10px] tracking-[0.5em] mb-12 italic uppercase leading-none">SELECTIVE SCALE</p>
            <p className="text-xl text-slate-500 mb-14 flex-grow font-bold italic normal-case leading-relaxed">Cinematic coverage for galas and industry conferences. Use one day to generate content that lasts 3 months.</p>
            <button onClick={() => navigateTo('booking')} className="w-full py-8 border-4 border-slate-900 text-slate-900 rounded-[2.5rem] hover:bg-slate-900 hover:text-white transition-all text-sm italic uppercase tracking-widest font-black italic">Inquire Project</button>
          </div>
        </div>
      </div>

      {/* Logic Visual Table Section */}
      <div className="bg-slate-50 rounded-[5rem] p-24 text-center border border-slate-100 max-w-7xl mx-auto">
         <h2 className="text-6xl font-black mb-12 tracking-tighter italic uppercase leading-none">The <span className="text-red-600">Efficiency</span> Principle.</h2>
         <p className="text-2xl text-slate-500 font-bold max-w-3xl mx-auto italic mb-20 leading-relaxed">"Outsourcing content creation frees up owners' time for high-level scaling." We deliver 300% more reach for a fraction of the cost of an internal media team.</p>
         <div className="grid md:grid-cols-4 gap-12 text-left">
            {[ { label: "1 DAY ON-SITE", v: "INPUT" }, { label: "4-8 REELS", v: "VIDEO" }, { label: "15+ PHOTOS", v: "STILLS" }, { label: "30 DAYS REACH", v: "RESULT" }].map((s, i) => (
              <div key={i} className="bg-white p-12 rounded-[3.5rem] shadow-sm group hover:bg-slate-900 hover:text-white transition-all duration-500">
                 <p className="text-red-600 text-[10px] font-black tracking-widest mb-4 uppercase leading-none">{s.v}</p>
                 <p className="text-2xl font-black tracking-tighter uppercase leading-none italic">{s.label}</p>
              </div>
            ))}
         </div>
      </div>
    </div>
  </div>
);

const Portfolio = ({ navigateTo }) => {
  const items = [
    { client: "Gems Cup Calgary", type: "Cinematic Multiplier", problem: "Premier horse competition. Coverage would usually disappear 24h later.", solution: "Full cinematic deployment with drone operations and high-end 4K ground units.", result: "3-month drip campaign. Ticket sales increased 25% within 30 days.", vId: 'Z-4poApHgkE', vType: 'youtube' },
    { client: "Estavio Real Estate", type: "Knowledge Engine", problem: "Weekly training sessions locked in a room with only 20 agents.", solution: "Turned 1h professional talks into 10+ high-engagement authority Reels.", result: "Built the #1 educational real estate brand in Calgary by reach.", vId: 'gJzbHrC01LBX00QmdojNxoA00L2ncGo02auPd46DKqqEmKM', vType: 'mux' },
    { client: "MOA Program", type: "Storytelling", problem: "Vocational programs look sterile. Needed to show hands-on student lifestyle.", solution: "High-pacing marketing production focused on hand-held professional energy.", result: "Significant boost in digital inquiries for quarterly enrollment.", vId: 'tHQPOaEigvny7OAkC5yAfxGd7cykNJEdMF2vUXLolXc', vType: 'mux' }
  ];
  return (
    <div className="animate-fade-in pt-40 pb-24 selection:bg-red-600 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto mb-48 text-left md:text-center">
          <div className="inline-block bg-red-100 text-red-600 px-8 py-3 rounded-full text-[11px] uppercase tracking-[0.6em] mb-12 italic shadow-sm leading-none">The Evidence</div>
          <h1 className="text-8xl md:text-[14rem] text-slate-900 mb-10 tracking-tighter leading-[0.8] italic uppercase">OUR <span className="text-red-600 underline decoration-slate-100 underline-offset-[24px]">PROOF.</span></h1>
          <p className="text-3xl text-slate-400 italic opacity-60 font-black uppercase mb-10 leading-tight tracking-tight">We don't hand over raw files. We deliver market momentum.</p>
        </div>
        <div className="space-y-[300px] mb-40 text-left">
          {items.map((item, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-32`}>
              <div className="lg:w-[65%] w-full h-[750px] relative group transform hover:scale-[1.02] transition-transform duration-1000">
                 <VideoLoop type={item.vType} id={item.vId} title={item.client} />
                 <div className="absolute -top-8 -right-8 bg-white p-8 rounded-full shadow-2xl border border-slate-100 transform rotate-12 group-hover:rotate-0 transition-transform duration-700 hidden lg:block"><Rocket className="text-red-600" size={40} /></div>
              </div>
              <div className="lg:w-[35%]">
                <div className="inline-flex items-center gap-4 bg-slate-900 text-white font-black text-[11px] uppercase tracking-[0.5em] px-8 py-3 rounded-full mb-12 italic">{item.type}</div>
                <h3 className="text-6xl md:text-7xl font-black mb-12 italic tracking-tighter leading-[0.85] uppercase text-slate-900">{item.client}</h3>
                <div className="space-y-12 mb-16">
                  <div className="border-l-8 border-slate-100 pl-10"><h4 className="text-slate-300 text-[11px] uppercase tracking-[0.5em] mb-4 italic font-black">THE STRUGGLE</h4><p className="text-xl text-slate-500 font-bold italic leading-relaxed">{item.problem}</p></div>
                  <div className="border-l-8 border-red-600 pl-10"><h4 className="text-red-600 text-[11px] uppercase tracking-[0.5em] mb-4 italic font-black uppercase">THE ICAN RESULT</h4><p className="text-4xl text-slate-900 font-black italic tracking-tighter uppercase underline decoration-red-100 underline-offset-8 leading-tight">{item.result}</p></div>
                </div>
                <button onClick={() => navigateTo('booking')} className="flex items-center gap-6 text-red-600 font-black text-xl hover:translate-x-4 transition-transform italic uppercase tracking-widest group">Start Your Story <ArrowRight className="group-hover:scale-125 transition-transform" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Workshops = ({ navigateTo }) => (
  <div className="animate-fade-in pt-40 pb-24 selection:bg-red-600 bg-white">
    <div className="container mx-auto px-6 text-center lg:text-left">
      <div className="text-center max-w-5xl mx-auto mb-40">
        <div className="inline-block bg-red-100 text-red-600 px-8 py-2.5 rounded-full text-[11px] uppercase tracking-[0.6em] mb-10 italic shadow-sm">ICAN Film Academy</div>
        <h1 className="text-8xl md:text-[12rem] text-slate-900 mb-10 tracking-tighter leading-[0.8] italic uppercase leading-none">PRACTICAL <br /><span className="text-red-600 underline decoration-slate-100 underline-offset-[20px]">TRAINING.</span></h1>
        <p className="text-3xl text-slate-400 italic opacity-60 font-bold mb-10 leading-tight uppercase">Media and content training for Calgary businesses and technical creators.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-12 mb-40 text-left items-stretch">
        {[
          { id: 'business-strategy', title: 'CONTENT STRATEGY', icon: 'pieChart', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000', desc: 'Plan 30 days of content in 60 minutes. Built for owners who struggle with consistency.' },
          { id: 'corporate-inhouse', title: 'IN-HOUSE TRAINING', icon: 'building2', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000', desc: 'Train your staff to capture professional daily wins internally without vendor delays.' },
          { id: 'production-bootcamp', title: 'PRODUCTION BOOTCAMP', icon: 'film', img: 'https://images.unsplash.com/photo-1535016120720-40c646bebbdc?q=80&w=1000', desc: '8-week technical mastery. From zero to confident professional media production.' }
        ].map((track) => (
          <div key={track.id} className="relative group rounded-[5rem] overflow-hidden shadow-3xl h-[850px] flex flex-col justify-end p-12 transition-all hover:-translate-y-4 hover:shadow-red-600/10">
             <img src={track.img} className="absolute inset-0 w-full h-full object-cover brightness-[0.35] contrast-125 group-hover:scale-110 transition-transform duration-1000 group-hover:brightness-[0.25]" alt={track.title} />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent"></div>
             <div className="relative z-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                <div className="bg-red-600 w-24 h-24 rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl transform group-hover:rotate-12 transition-transform duration-700 border-4 border-white/10"><IconHelper name={track.icon === 'building2' ? 'briefcase' : track.icon} size={56} className="text-white" /></div>
                <h3 className="text-5xl font-black mb-6 italic leading-[0.85] uppercase tracking-tighter text-white">{track.title}</h3>
                <p className="text-xl text-gray-300 mb-12 italic leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700">{track.desc}</p>
                <button onClick={() => navigateTo(track.id)} className="w-full py-8 bg-red-600 text-white rounded-[2rem] uppercase tracking-widest text-[11px] font-black hover:bg-white hover:text-slate-900 transition-all shadow-2xl italic">ENTER TRACK</button>
             </div>
             <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-1000 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Strategy = ({ navigateTo }) => (
  <div className="animate-fade-in pt-40 pb-24 selection:bg-red-600 bg-white">
    <div className="container mx-auto px-6 max-w-7xl text-left">
      <button onClick={() => navigateTo('workshops')} className="text-red-600 flex items-center gap-3 mb-16 hover:-translate-x-3 transition-transform tracking-[0.4em] text-[10px] italic leading-none uppercase"><ArrowLeft size={20} /> Back to Academy</button>
      <div className="flex flex-col lg:flex-row gap-32 items-center mb-40">
        <div className="lg:w-1/2">
          <div className="inline-block bg-slate-900 text-white px-6 py-2 rounded-full text-[10px] tracking-[0.5em] mb-10 italic uppercase">Training Track 01</div>
          <h1 className="text-7xl md:text-[11rem] text-slate-900 mb-12 leading-[0.8] tracking-tighter italic uppercase underline decoration-red-600 decoration-8 underline-offset-[16px]">Strategy.</h1>
          <p className="text-4xl text-slate-300 mb-16 italic leading-[1.1] uppercase font-black">Plan 30 days <br />in 60 minutes.</p>
          <p className="normal-case text-2xl text-slate-500 font-bold italic mb-16 max-w-xl">Most businesses do not fail because of content quality. They fail because they lack a system. This training fixes the direction.</p>
          <button onClick={() => navigateTo('booking')} className="w-full py-12 bg-red-600 text-white rounded-[3rem] text-3xl shadow-3xl hover:scale-[1.03] transition-transform italic uppercase tracking-widest border-4 border-white/10 font-black italic">Book Strategy Session <ArrowRight className="inline ml-6" size={48} /></button>
        </div>
        <div className="lg:w-1/2 grid gap-10">
          {[ { t: "CONTENT BUCKETS", d: "Master the 'Content Buckets' method to organize business wins into repeatable high-performance tracks.", i: "pieChart" }, { t: "THE 60-MIN MAP", d: "Our step-by-step logic framework to plan 30 days of high-performance marketing in one sitting.", i: "clock" }, { t: "GOAL ALIGNMENT", d: "Synchronizing your social output with actual business sales cycles and quarterly targets.", i: "target" }, { t: "OMNI-CHANNEL SYNC", d: "How to plan content for LinkedIn, Instagram, and TikTok simultaneously without doubling workload.", i: "share2" }].map((item, i) => (
             <div key={i} className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 flex items-center gap-10 group hover:bg-slate-900 hover:text-white transition-all transform hover:-translate-y-2">
                <div className="bg-red-600 text-white p-7 rounded-3xl group-hover:rotate-12 transition-transform shadow-xl"><IconHelper name={item.i} size={48} /></div>
                <div className="text-left"><h4 className="text-3xl mb-3 italic uppercase leading-none font-black">{item.t}</h4><p className="normal-case text-lg text-slate-400 group-hover:text-gray-300 font-bold italic leading-tight">{item.d}</p></div>
             </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const InHouse = ({ navigateTo }) => (
  <div className="animate-fade-in pt-40 pb-24 selection:bg-red-600 bg-white">
    <div className="container mx-auto px-6 max-w-7xl text-left">
      <button onClick={() => navigateTo('workshops')} className="text-red-600 flex items-center gap-4 mb-20 hover:-translate-x-3 transition-transform tracking-[0.5em] text-[10px] italic leading-none uppercase"><ArrowLeft size={24} /> Back to Academy</button>
      <div className="flex flex-col lg:flex-row gap-32 items-center mb-40">
        <div className="lg:w-1/2">
          <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-[10px] tracking-[0.5em] mb-10 italic shadow-lg uppercase">Corporate Track</div>
          <h1 className="text-8xl md:text-[11rem] text-slate-900 mb-12 leading-[0.8] tracking-tighter italic uppercase underline decoration-slate-100 underline-offset-[20px]">In-House.</h1>
          <p className="text-4xl text-slate-300 mb-16 italic leading-[1.1] uppercase font-black">Train your team <br />to capture wins.</p>
          <p className="normal-case text-2xl text-slate-500 font-bold italic mb-16 max-w-xl leading-relaxed">Stop waiting for external vendors for every single post. We transform your staff into a high-performance content production unit working within your own standards.</p>
          <button onClick={() => navigateTo('booking')} className="w-full py-12 bg-slate-900 text-white rounded-[3rem] text-3xl shadow-3xl hover:scale-[1.03] transition-transform italic uppercase tracking-widest border-4 border-white/10 font-black italic">Request Onboarding <ArrowRight className="inline ml-6" size={48} /></button>
        </div>
        <div className="lg:w-1/2 relative group">
           <div className="absolute -inset-10 bg-red-600 rounded-[6rem] rotate-6 opacity-10"></div>
           <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=90&w=1200" className="relative rounded-[5rem] shadow-3xl brightness-75 grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Training" />
           <div className="absolute -bottom-16 -right-16 bg-red-600 p-16 rounded-[4rem] text-white shadow-2xl animate-pulse group-hover:scale-110 transition-transform"><Smartphone size={80} /></div>
        </div>
      </div>
      <div className="bg-slate-50 border border-slate-100 p-24 rounded-[6rem] shadow-xl text-center">
         <h2 className="text-6xl text-slate-900 mb-20 italic uppercase underline decoration-red-600 underline-offset-12 tracking-tighter leading-none">The Capability Stack</h2>
         <div className="grid md:grid-cols-4 gap-12">
            {[ { l: "SMARTPHONE CINEMA", i: "smartphone", d: "Master professional movement and framing using daily mobile tools." }, { l: "OFFICE LIGHTING", i: "lightbulb", d: "Look professional in any corporate workspace or meeting room." }, { l: "AUDIO MASTERY", i: "mic", d: "Capture clean studio sound in busy, real-world field environments." }, { l: "TEAM WORKFLOW", i: "layers", d: "Simplified SOPs for high-frequency daily content creation and posting." }].map((f, i) => (
              <div key={i} className="bg-white p-12 rounded-[4.5rem] shadow-sm border border-slate-100 group hover:bg-red-600 transition-all cursor-default">
                 <IconHelper name={f.i} className="text-red-600 group-hover:text-white mx-auto mb-8 transition-colors duration-500" size={64} />
                 <p className="text-lg font-black group-hover:text-white leading-none tracking-widest uppercase mb-4 italic">{f.l}</p>
                 <p className="normal-case text-slate-400 group-hover:text-white/70 text-sm italic font-bold leading-tight">{f.d}</p>
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
    { title: "AUDIO MASTERY", detail: "Capturing studio-quality sound in unpredictable field environments." }, 
    { title: "SOCIAL SPRINTS", detail: "Fast production hooks for modern mobile-first attention spans." }, 
    { title: "EDITING ARCH.", detail: "Pacing, narrative arcs, and technical workflow speed mastery." }, 
    { title: "TECHNICAL COLOR", detail: "Profile matching, correction, and professional grading mastery." }, 
    { title: "CLIENT WRAP", detail: "Industry delivery standards, codecs, and professional wrap-up systems." }
  ];
  return (
    <div className="animate-fade-in pt-40 pb-24 font-black selection:bg-red-600 tracking-tighter uppercase bg-white text-left">
      <div className="container mx-auto px-6 max-w-7xl">
        <button onClick={() => navigateTo('workshops')} className="text-red-600 flex items-center gap-4 mb-20 hover:-translate-x-3 transition-transform tracking-[0.5em] text-[10px] italic leading-none"><ArrowLeft size={24} /> Back to Academy</button>
        <div className="text-center mb-40">
           <div className="inline-block bg-red-100 text-red-600 px-6 py-2 rounded-full text-[10px] tracking-[0.5em] mb-10 italic uppercase">Academy Track 03</div>
           <h1 className="text-8xl md:text-[15rem] text-slate-900 mb-12 leading-[0.75] tracking-tighter italic uppercase leading-none">Academy <br /><span className="text-red-600 italic">8 Weeks.</span></h1>
           <p className="text-4xl text-slate-300 italic leading-none uppercase font-black tracking-widest max-w-4xl mx-auto">Zero to Technical Professional Content Creator.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-40 text-left">
           {weeks.map((w, i) => (
             <div key={i} className="bg-white p-16 rounded-[5rem] border border-slate-100 shadow-xl group hover:border-red-600 transition-all transform hover:-translate-y-4">
                <p className="text-red-600 text-8xl mb-8 italic opacity-10 group-hover:opacity-100 transition-opacity leading-none font-black">0{i+1}</p>
                <h4 className="text-3xl mb-6 tracking-tighter uppercase leading-none italic font-black">{w.title}</h4>
                <p className="normal-case text-lg text-slate-400 font-bold italic leading-tight">{w.detail}</p>
             </div>
           ))}
        </div>
        <div className="bg-slate-900 p-24 rounded-[6rem] shadow-3xl text-white flex flex-col lg:flex-row justify-between items-center gap-24 relative overflow-hidden group">
           <div className="absolute top-0 left-0 w-full h-full bg-red-600/5 -skew-x-12 translate-x-40 pointer-events-none transition-transform duration-1000 group-hover:translate-x-20"></div>
           <div className="relative z-10 text-left">
              <p className="text-red-500 text-[11px] tracking-[1em] mb-8 italic leading-none font-black uppercase">THE TUITION INVESTMENT</p>
              <p className="text-[12rem] tracking-tighter leading-[0.8] italic font-black uppercase leading-none">$1000 <span className="text-4xl font-bold text-slate-500 align-middle ml-10">CAD / PP</span></p>
           </div>
           <button onClick={() => navigateTo('booking')} className="relative z-10 bg-red-600 px-24 py-12 rounded-full text-4xl shadow-3xl hover:scale-110 transition-transform italic uppercase border-4 border-white/10 font-black italic">Enroll For Cohort <ArrowRight className="inline ml-8" size={64} /></button>
        </div>
      </div>
    </div>
  );
};

const Booking = () => (
  <div className="animate-fade-in pt-48 pb-24 bg-slate-50 min-h-screen uppercase font-black tracking-tighter selection:bg-red-600 text-left">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="bg-white rounded-[6rem] shadow-3xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
        <div className="lg:w-2/5 bg-slate-900 p-20 md:p-32 text-white flex flex-col justify-between relative overflow-hidden">
           <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200" className="absolute inset-0 w-full h-full object-cover opacity-20 brightness-50" alt="Studio" />
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] -translate-y-20 translate-x-20"></div>
           <div className="relative z-10">
              <h2 className="text-8xl font-black mb-16 italic tracking-tighter leading-[0.8] uppercase">LET'S <br /><span className="text-red-600 italic underline decoration-white/10 decoration-8 underline-offset-[24px]">SCALE.</span></h2>
              <div className="space-y-16">
                 <div className="flex gap-10 items-start"><IconHelper name="checkCircle" className="text-red-500 mt-3" size={48} /><span className="text-gray-300 uppercase tracking-[0.4em] text-[11px] leading-relaxed font-black">24-HOUR RESPONSE <br />TIME GUARANTEE</span></div>
                 <div className="flex gap-10 items-start"><IconHelper name="checkCircle" className="text-red-500 mt-3" size={48} /><span className="text-gray-300 uppercase tracking-[0.4em] text-[11px] leading-relaxed font-black">CUSTOM MARKETING <br />AUDIT SESSION</span></div>
              </div>
           </div>
           <div className="pt-24 border-t border-white/10 mt-24 relative z-10 text-left">
              <p className="text-[11px] font-black text-slate-500 uppercase tracking-[1em] mb-12 italic leading-none">Inquiry Hub</p>
              <p className="text-4xl font-black tracking-tighter uppercase italic text-white hover:text-red-600 transition-colors cursor-pointer mb-12 uppercase">HELLO@ICANFILM.CA</p>
              <div className="flex gap-10 opacity-40 hover:opacity-100 transition-opacity"><IconHelper name="instagram" size={28} className="cursor-pointer" /><IconHelper name="linkedin" size={28} className="cursor-pointer" /><IconHelper name="youtube" size={28} className="cursor-pointer" /></div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-[0.5em] mt-10 leading-none italic uppercase">Calgary, AB • Macleod Trail</p>
           </div>
        </div>
        <div className="lg:w-3/5 p-20 md:p-32 text-left">
          <form className="grid gap-20" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-20">
               <div className="space-y-6"><label className="text-[11px] font-black uppercase text-slate-300 tracking-[0.8em] italic ml-4 leading-none">FULL NAME</label><input type="text" className="w-full px-12 py-10 rounded-[3rem] bg-slate-50 border border-slate-100 outline-none focus:ring-8 focus:ring-red-600/5 focus:border-red-600 font-black text-slate-900 italic text-3xl uppercase placeholder:opacity-30" placeholder="Jane Doe" /></div>
               <div className="space-y-6"><label className="text-[11px] font-black uppercase text-slate-300 tracking-[0.8em] italic ml-4 leading-none">BUSINESS</label><input type="text" className="w-full px-12 py-10 rounded-[3rem] bg-slate-50 border border-slate-100 outline-none focus:ring-8 focus:ring-red-600/5 focus:border-red-600 font-black text-slate-900 italic text-3xl uppercase placeholder:opacity-30" placeholder="Calgary Ent." /></div>
            </div>
            <div className="space-y-6"><label className="text-[11px] font-black uppercase text-red-600 tracking-[0.8em] italic ml-4 leading-none">PRIMARY STRUGGLE</label><textarea rows="6" className="w-full px-12 py-10 rounded-[3rem] bg-slate-50 border border-slate-100 outline-none focus:ring-8 focus:ring-red-600/5 focus:border-red-600 font-black text-slate-900 italic text-3xl leading-tight uppercase placeholder:opacity-30" placeholder="What's your biggest challenge?"></textarea></div>
            <button className="w-full bg-red-600 text-white font-black py-12 rounded-[4rem] shadow-3xl uppercase tracking-[0.6em] text-2xl hover:scale-[1.03] transition-all flex items-center justify-center gap-10 italic group border-4 border-white/10 font-black italic">SEND INQUIRY <ArrowRight size={56} className="group-hover:translate-x-8 transition-transform" /></button>
          </form>
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
    const isAcademy = ['business-strategy', 'corporate-inhouse', 'production-bootcamp', 'workshops'].includes(activePage);
    const isActive = (item.toLowerCase() === activePage) || (item === 'Workshops' && isAcademy);
    const textTheme = scrolled || activePage !== 'home' ? 'text-slate-900' : 'text-white';
    return `font-black text-[12px] uppercase tracking-[0.5em] transition-all hover:text-red-600 ${textTheme} ${isActive ? 'text-red-600 scale-125 italic underline decoration-red-600 decoration-4 underline-offset-8' : ''}`;
  };

  return (
    <div className="font-sans text-slate-900 bg-white antialiased min-h-screen flex flex-col tracking-tighter selection:bg-red-600 selection:text-white overflow-x-hidden">
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes slow-zoom { from { transform: scale(1); } to { transform: scale(1.1); } }
        .animate-slow-zoom { animation: slow-zoom 20s ease-in-out infinite alternate; }
        .shadow-3xl { box-shadow: 0 50px 100px -20px rgba(0,0,0,0.25), 0 30px 60px -30px rgba(0,0,0,0.3); }
      `}</style>

      {/* FIXED NAVIGATION */}
      <nav className={`fixed w-full z-[100] transition-all duration-1000 ${scrolled || activePage !== 'home' ? 'bg-white/95 backdrop-blur-4xl shadow-md py-6' : 'bg-transparent py-16'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="cursor-pointer group" onClick={() => navigateTo('home')}><ICANLogo scrolled={scrolled} activePage={activePage} /></div>
          <div className="hidden lg:flex items-center space-x-12">
            {['Home', 'Services', 'Portfolio', 'Workshops'].map((item) => (
              <button key={item} onClick={() => navigateTo(item.toLowerCase())} className={navItemClass(item)}>{item}</button>
            ))}
            <button onClick={() => navigateTo('booking')} className="bg-red-600 text-white px-16 py-5 rounded-[1.5rem] font-black text-[12px] uppercase tracking-[0.5em] shadow-3xl shadow-red-600/50 hover:scale-110 transition-all italic border-4 border-white/10 uppercase italic">Free Audit</button>
          </div>
          <button onClick={() => setIsMenuOpen(true)} className={`lg:hidden ${scrolled || activePage !== 'home' ? 'text-slate-900' : 'text-white'}`}><Menu size={48} /></button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[120] flex flex-col justify-center gap-16 text-center animate-fade-in p-12 overflow-y-auto">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-16 right-16 p-8 bg-slate-50 rounded-full shadow-md"><X size={48} /></button>
          {['Home', 'Services', 'Portfolio', 'Workshops', 'Booking'].map((item) => (
            <button key={item} onClick={() => navigateTo(item.toLowerCase())} className="text-7xl font-black italic tracking-tighter hover:text-red-600 transition-all uppercase leading-[0.85] mb-8 font-black italic">{item}</button>
          ))}
        </div>
      )}

      {/* DYNAMIC CONTENT CONTAINER - Unified logic with Top Safe-Padding */}
      <main className={`flex-grow ${activePage === 'home' ? '' : 'pt-32 md:pt-48'}`}>
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
      <footer className="bg-slate-950 text-slate-600 py-64 border-t border-slate-900 selection:bg-red-600 overflow-hidden uppercase font-black text-left">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-48 mb-48">
            <div className="max-w-4xl mx-auto lg:mx-0">
              <ICANLogo scrolled={false} activePage="other" />
              <p className="mt-20 text-6xl italic leading-[0.95] text-white/10 tracking-tighter uppercase italic uppercase leading-none">Calgary's specialist agency combining cinematic production with ruthless content strategy.</p>
            </div>
            <div className="grid grid-cols-2 gap-40 mx-auto lg:mx-0">
               <div className="space-y-12 text-left">
                  <h4 className="text-white text-[12px] tracking-[1em] opacity-20 uppercase font-black uppercase italic leading-none">Agency</h4>
                  <div className="flex flex-col gap-10 text-[18px] tracking-[0.5em] italic font-black uppercase"><button onClick={() => navigateTo('home')} className="hover:text-red-600 text-left">Plan</button><button onClick={() => navigateTo('services')} className="hover:text-red-600 text-left">Menu</button><button onClick={() => navigateTo('portfolio')} className="hover:text-red-600 text-left">Proof</button></div>
               </div>
               <div className="space-y-12 text-left">
                  <h4 className="text-white text-[12px] tracking-[1em] opacity-20 uppercase font-black uppercase italic leading-none">Academy</h4>
                  <div className="flex flex-col gap-10 text-[18px] tracking-[0.5em] text-slate-400 italic font-black uppercase"><button onClick={() => navigateTo('workshops')} className="hover:text-red-600 text-left">Tracks</button><button onClick={() => navigateTo('booking')} className="hover:text-red-600 text-left">Inquire</button></div>
               </div>
            </div>
          </div>
          <div className="text-center pt-20 border-t border-white/5 opacity-20"><p className="text-[12px] tracking-[1.5em] font-black uppercase italic leading-none">&copy; 2026 ICAN FILM • CALGARY ALBERTA</p></div>
        </div>
      </footer>
    </div>
  );
}
