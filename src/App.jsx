import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  Calendar, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  Play, 
  Instagram, 
  Linkedin, 
  Mail, 
  Menu, 
  X,
  ArrowRight,
  MapPin, 
  Video,
  Clapperboard,
  Clock,
  DollarSign,
  Star,
  ChevronRight,
  FileText,
  Smartphone,
  BarChart3,
  Quote,
  Lightbulb,
  Target,
  Zap,
  GraduationCap,
  Building2,
  Film,
  Award,
  BookOpen,
  PieChart,
  Layers,
  ArrowLeft,
  Youtube,
  Rocket
} from 'lucide-react';

// --- Custom Professional Logo Component ---
const ICANLogo = ({ scrolled, activePage }) => {
  const isLight = scrolled || activePage !== 'home';
  return (
    <div className="flex items-center gap-3 group">
      <div className="relative h-11 w-11 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/30 overflow-hidden">
        <Clapperboard className="text-white w-6 h-6 z-10 transition-transform group-hover:rotate-12" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-2xl font-black tracking-tighter ${isLight ? 'text-slate-900' : 'text-white'}`}>
          ICAN<span className="text-red-600">FILM</span>
        </span>
        <span className={`text-[9px] font-bold uppercase tracking-[0.3em] ${isLight ? 'text-slate-500' : 'text-white/60'}`}>
          Agency & Academy
        </span>
      </div>
    </div>
  );
};

// --- Video Player Component ---
const VideoLoop = ({ type, id, title }) => {
  if (type === 'youtube') {
    return (
      <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] shadow-2xl bg-black border border-white/10 group">
        <iframe
          className="absolute top-1/2 left-1/2 w-[115%] h-[115%] -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover brightness-90"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0&iv_load_policy=3`}
          title={title}
          allow="autoplay; encrypted-media"
        ></iframe>
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] shadow-2xl bg-slate-900 border border-white/10 group">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-90"
        poster={`https://image.mux.com/${id}/thumbnail.jpg?width=1200&time=2`}
      >
        <source src={`https://stream.mux.com/${id}/medium.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent group-hover:opacity-0 transition-opacity"></div>
    </div>
  );
};

// --- Components for Different Pages ---

const HomePage = ({ navigateTo }) => (
  <div className="animate-fade-in">
    {/* Hero Section */}
    <section className="relative h-screen min-h-[850px] flex items-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/70 to-slate-900 z-10"></div>
      <div className="absolute inset-0 z-0 overflow-hidden">
         <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Production Background" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-5 py-2 rounded-full text-xs font-black mb-8 border border-red-600/30 backdrop-blur-md uppercase tracking-widest">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Calgary's Event-to-Content Specialists
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] mb-8 tracking-tighter">
            PRODUCE <br /><span className="text-red-600 italic">RESULTS.</span><br />
            NOT JUST <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">FILM.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl font-medium leading-relaxed">
            Turn your one-day events into a month of high-conversion marketing. We build the engine that keeps your brand visible while you run your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button onClick={() => navigateTo('booking')} className="bg-red-600 hover:bg-red-700 text-white px-10 py-6 rounded-2xl font-black text-xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-2xl shadow-red-600/40 uppercase tracking-widest">
              Claim Free Audit <ArrowRight size={24} />
            </button>
            <button onClick={() => navigateTo('portfolio')} className="bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border border-white/20 px-10 py-6 rounded-2xl font-black text-xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest">
              <Play size={24} className="fill-current" /> Watch Our Work
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Reality Check Section */}
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-none tracking-tighter">
              Stop Posting <br /><span className="text-red-600 italic">Sporadically.</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
              In Calgary's competitive market, being forgotten is your biggest risk. Most business owners procrastinate on social media because it feels like a chore. We turn that chore into an automated growth system.
            </p>
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-2">
                 <p className="text-6xl font-black text-red-600 tracking-tighter leading-none">89%</p>
                 <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Marketers Report Strong Video ROI</p>
              </div>
              <div className="space-y-2">
                 <p className="text-6xl font-black text-slate-900 tracking-tighter leading-none">300%</p>
                 <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Reach Increase via Repurposing</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 rounded-[3.5rem] p-12 text-white shadow-3xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -translate-y-20 translate-x-20"></div>
             <h3 className="text-2xl font-black mb-10 italic text-red-500 tracking-tight">The ICAN Content Loop</h3>
             <div className="space-y-12 relative z-10">
                {[
                  { step: "01", title: "Capture Once", desc: "Monthly deep-dive session or high-stakes event coverage.", icon: <Camera size={28} className="text-red-500" /> },
                  { step: "02", title: "Multiply Often", desc: "Raw footage systematically becomes 15+ high-impact social assets.", icon: <Layers size={28} className="text-red-500" /> },
                  { step: "03", title: "Dominate Daily", desc: "Automated schedule keeps you top-of-mind without lifting a finger.", icon: <Rocket size={28} className="text-red-500" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="text-red-600 font-black text-2xl opacity-20 italic">0{i+1}</div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        {item.icon}
                        <h4 className="font-black text-xl uppercase tracking-tight">{item.title}</h4>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ServicesPage = ({ navigateTo }) => (
  <div className="animate-fade-in pt-32 pb-24">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-4xl mx-auto mb-24">
        <div className="inline-block bg-red-100 text-red-600 font-black px-4 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] mb-4 italic">Our Service Ecosystem</div>
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none">Scale Your <br /><span className="text-red-600 italic underline decoration-red-100 underline-offset-8">Visibility.</span></h1>
        <p className="text-xl text-gray-500 leading-relaxed font-medium max-w-2xl mx-auto">From low-risk entry points to full-scale content engines, we have a system for every growth stage of your Calgary business.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Tier 1 */}
        <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col hover:border-red-500 transition-all group relative">
          <div className="bg-red-50 text-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-red-600 group-hover:text-white transition-all shadow-lg"><Lightbulb size={32} /></div>
          <h3 className="text-3xl font-black mb-4 tracking-tight italic">The Free Audit</h3>
          <p className="text-red-600 font-black mb-6 uppercase tracking-widest text-[10px]">Foot-in-the-door Offer</p>
          <p className="text-gray-500 mb-12 flex-grow leading-relaxed font-medium">A high-value 45-min strategy session to identify 3-5 immediate content opportunities you're missing. No pressure, just proof of our expertise.</p>
          <button onClick={() => navigateTo('booking')} className="w-full py-5 border-2 border-slate-900 text-slate-900 font-black rounded-2xl hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest text-xs">Start For Free</button>
        </div>

        {/* Tier 2 - Flagship */}
        <div className="bg-slate-900 p-12 rounded-[3rem] shadow-3xl text-white flex flex-col relative transform scale-105 border-4 border-red-600 overflow-hidden">
          <div className="absolute top-0 right-0 -mt-5 mr-10 bg-red-600 text-[10px] font-black tracking-[0.2em] px-6 py-2 rounded-full uppercase shadow-xl z-20">Flagship Service</div>
          <div className="absolute inset-0 bg-red-600/5 -skew-x-12 translate-x-20 pointer-events-none"></div>
          <div className="bg-red-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-red-600/30 z-10"><Zap size={32} /></div>
          <h3 className="text-3xl font-black mb-4 tracking-tight italic z-10">Monthly Retainer</h3>
          <p className="text-red-400 font-black mb-6 uppercase tracking-widest text-[10px] italic z-10">Starting from $800 / Month</p>
          <p className="text-gray-400 mb-10 flex-grow leading-relaxed italic z-10 font-medium">Our core focus. We become your outsourced content department. Capture, Edit, Deliver, Repeat every single month.</p>
          <ul className="space-y-5 mb-12 z-10">
            <li className="flex items-center gap-3 text-sm font-bold"><CheckCircle className="text-red-500" size={20} /> Monthly On-Site Capture Day</li>
            <li className="flex items-center gap-3 text-sm font-bold"><CheckCircle className="text-red-500" size={20} /> 4-8 High-Impact Video Reels</li>
            <li className="flex items-center gap-3 text-sm font-bold"><CheckCircle className="text-red-500" size={20} /> 20+ Professional Brand Stills</li>
            <li className="flex items-center gap-3 text-sm font-bold"><CheckCircle className="text-red-500" size={20} /> Full Content Calendar Strategy</li>
          </ul>
          <button onClick={() => navigateTo('booking')} className="w-full py-5 bg-red-600 text-white font-black rounded-2xl hover:bg-red-700 transition-all shadow-2xl shadow-red-600/30 uppercase tracking-widest text-xs z-10">Claim Your Spot</button>
        </div>

        {/* Tier 3 */}
        <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col hover:border-slate-900 transition-all group">
          <div className="bg-slate-100 text-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-slate-900 group-hover:text-white transition-all shadow-lg"><Camera size={32} /></div>
          <h3 className="text-3xl font-black mb-4 tracking-tight italic">Event Coverage</h3>
          <p className="text-red-600 font-black mb-6 uppercase tracking-widest text-[10px]">Selective Projects Only</p>
          <p className="text-gray-500 mb-12 flex-grow leading-relaxed font-medium">High-profile gala, conference, or horse competition coverage. We treat every one-off job as a way to fuel your marketing for 3 months.</p>
          <button onClick={() => navigateTo('booking')} className="w-full py-5 border-2 border-slate-900 text-slate-900 font-black rounded-2xl hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest text-xs">Inquire for Event</button>
        </div>
      </div>
    </div>
  </div>
);

const PortfolioPage = ({ navigateTo }) => {
  const portfolioItems = [
    {
      client: "Gems Cup Calgary",
      type: "Cinematic Event Coverage",
      title: "High-Stakes National Horse Competition",
      problem: "A premier event featuring national business leaders. Needed coverage to match the prestige and high-stakes environment.",
      solution: "4K cinematic ground units + aerial drone operations capturing the intensity of the competition and the gravity of executive speeches.",
      result: "Produced a high-prestige highlight series used for sponsor recaps. Loop showcases our high-end drone and professional scale.",
      videoType: 'youtube',
      videoId: 'Z-4poApHgkE',
      side: "left"
    },
    {
      client: "Estavio Real Estate Group",
      type: "Weekly Education Retainer",
      title: "Authority Building for Realtors",
      problem: "Weekly training events involving law firms and industry experts needed to be repurposed into authority-building online content.",
      solution: "Consistent capture of speaker sessions and networking. We turn long-form knowledge into high-pacing educational Reels.",
      result: "Positioned Estavio as the top educational brand in the Calgary real estate market. Constant flow of recruitment content.",
      videoType: 'mux',
      videoId: 'gJzbHrC01LBX00QmdojNxoA00L2ncGo02auPd46DKqqEmKM',
      side: "right"
    },
    {
      client: "MOA Training Program",
      type: "Education Marketing",
      title: "Student Recruitment Storytelling",
      problem: "Vocational program needing to showcase the student life and career outcomes through high-energy professional production.",
      solution: "High-speed marketing video focusing on the hands-on tools and professional environment. Designed for high social engagement.",
      result: "Significant boost in digital inquiries. The primary marketing asset for their quarterly student enrollment campaigns.",
      videoType: 'mux',
      videoId: 'tHQPOaEigvny7OAkC5yAfxGd7cykNJEdMF2vUXLolXc',
      side: "left"
    }
  ];

  return (
    <div className="animate-fade-in pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-none">Our Proof.</h1>
          <p className="text-xl text-gray-600 font-medium">Real Calgary brands. Professional production. Measurable results.</p>
        </div>
        <div className="space-y-48 mb-24">
          {portfolioItems.map((item, i) => (
            <div key={i} className={`flex flex-col ${item.side === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-20`}>
              <div className="lg:w-[55%] w-full h-[550px]">
                 <VideoLoop type={item.videoType} id={item.videoId} title={item.client} />
              </div>
              <div className="lg:w-[45%]">
                <div className="inline-block bg-red-600 text-white font-black text-[10px] uppercase tracking-[0.3em] px-4 py-1.5 rounded-full mb-6 italic">{item.type}</div>
                <h3 className="text-4xl md:text-5xl font-black mb-8 italic tracking-tighter leading-none">{item.client}</h3>
                <div className="space-y-8 mb-10">
                  <div>
                    <h4 className="font-black text-gray-900 text-xs uppercase tracking-widest mb-2 opacity-30">The Challenge</h4>
                    <p className="text-gray-600 leading-relaxed font-medium text-sm">{item.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 text-xs uppercase tracking-widest mb-2 opacity-30">The ICAN Solution</h4>
                    <p className="text-gray-600 leading-relaxed font-medium text-sm">{item.solution}</p>
                  </div>
                </div>
                <div className="bg-slate-900 p-8 rounded-[2.5rem] border border-slate-800 flex items-start gap-4 shadow-3xl">
                  <div className="bg-red-600 p-2 rounded-lg text-white shadow-lg shadow-red-600/40"><Rocket size={24} /></div>
                  <p className="text-white font-bold text-lg leading-tight italic">{item.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center bg-slate-900 rounded-[4rem] p-16 text-white shadow-3xl relative overflow-hidden mt-32">
           <div className="absolute top-0 left-0 w-full h-full bg-red-600/5 -skew-x-12 translate-x-20"></div>
           <h2 className="text-4xl md:text-5xl font-black mb-8 italic relative z-10 tracking-tighter">Ready to be our next success?</h2>
           <button onClick={() => navigateTo('booking')} className="relative z-10 bg-red-600 px-12 py-5 rounded-full font-black text-xl hover:bg-red-700 transition-all shadow-xl shadow-red-600/40 uppercase tracking-widest">Start Your Project</button>
        </div>
      </div>
    </div>
  );
};

const WorkshopsPage = ({ navigateTo }) => (
  <div className="animate-fade-in pt-32 pb-24">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-4xl mx-auto mb-24">
        <div className="inline-block bg-red-100 text-red-600 font-black px-4 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] mb-4 italic">Internal Capability Building</div>
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.9]">Cinepreneur <br /><span className="text-red-600 italic underline decoration-red-100 underline-offset-8">Academy.</span></h1>
        <p className="text-xl text-gray-500 leading-relaxed font-medium max-w-2xl mx-auto">From complete beginners to corporate teams, our modular filmmaking workshops teach you to <strong>Shoot, Direct, and Earn.</strong></p>
      </div>

      <div className="grid lg:grid-cols-3 gap-10 mb-32">
        <div className="bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl flex flex-col hover:-translate-y-2 transition-all relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl -translate-y-10 translate-x-10"></div>
          <Building2 className="text-red-600 mb-8 relative z-10" size={64} />
          <h3 className="text-3xl font-black mb-4 italic tracking-tight relative z-10 leading-none">Corporate & Staff</h3>
          <p className="text-gray-400 mb-10 leading-relaxed relative z-10 font-medium italic">Train your in-house marketing department to capture professional daily content without bottlenecks.</p>
          <button onClick={() => navigateTo('corporate-training')} className="mt-auto py-5 bg-white text-slate-900 font-black rounded-2xl uppercase tracking-widest text-[10px] relative z-10 hover:bg-red-600 hover:text-white transition-colors">Detailed Track Info</button>
        </div>

        <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col hover:border-red-600 transition-all relative overflow-hidden group">
          <Target className="text-red-600 mb-8" size={64} />
          <h3 className="text-3xl font-black mb-4 italic tracking-tight leading-none">Business Strategy</h3>
          <p className="text-gray-500 mb-10 leading-relaxed font-medium italic">Master the 'Content Buckets' method and the 1-hour planning framework used to plan 30 days in 60 mins.</p>
          <button onClick={() => navigateTo('business-brands')} className="mt-auto py-5 border-2 border-slate-900 text-slate-900 font-black rounded-2xl uppercase tracking-widest text-[10px] hover:bg-slate-900 hover:text-white transition-colors">Strategy Track Info</button>
        </div>

        <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col hover:border-red-600 transition-all relative overflow-hidden group">
          <Film className="text-red-600 mb-8" size={64} />
          <h3 className="text-3xl font-black mb-4 italic tracking-tight leading-none">Academy Track</h3>
          <p className="text-gray-500 mb-10 leading-relaxed font-medium italic">Professional modular workshops for individuals. 8 weeks to go from absolute beginner to filmmaker.</p>
          <button onClick={() => navigateTo('academy-detail')} className="mt-auto py-5 border-2 border-slate-900 text-slate-900 font-black rounded-2xl uppercase tracking-widest text-[10px] hover:bg-slate-900 hover:text-white transition-colors">View Academy Modules</button>
        </div>
      </div>
      
      <div className="bg-slate-50 rounded-[4rem] p-16 flex flex-col md:flex-row items-center justify-between gap-12 border border-slate-100">
        <div>
          <h3 className="text-3xl font-black mb-2 italic tracking-tighter uppercase">Venue & Schedule</h3>
          <p className="text-slate-500 font-bold flex items-center gap-2 mb-8 tracking-widest text-xs uppercase"><MapPin size={16} className="text-red-600" /> 5920 Macleod Trail SW, Calgary, AB</p>
          <div className="flex gap-4">
             {["Fri Theory", "Sat Studio", "Sun Review"].map((day, i) => (
               <div key={i} className="bg-white px-5 py-3 rounded-xl border border-slate-100 shadow-sm text-[10px] font-black uppercase tracking-widest text-slate-400">
                 {day}
               </div>
             ))}
          </div>
        </div>
        <div className="text-center md:text-right">
           <p className="text-xl font-bold mb-4 italic">Limited enrollment per module.</p>
           <button onClick={() => navigateTo('booking')} className="bg-red-600 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs shadow-2xl shadow-red-600/30">Check Availability</button>
        </div>
      </div>
    </div>
  </div>
);

// --- Detailed Track Sub-Pages ---

const CorporateTrainingPage = ({ navigateTo }) => (
  <div className="animate-fade-in pt-32 pb-24">
    <div className="container mx-auto px-6 max-w-6xl">
      <button onClick={() => navigateTo('workshops')} className="text-red-600 font-black flex items-center gap-2 mb-12 hover:-translate-x-1 transition-transform uppercase tracking-[0.2em] text-[10px] italic">
        <ArrowLeft size={16} /> Back to Workshops
      </button>
      <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
        <div className="lg:w-1/2">
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.85] tracking-tighter italic">Corporate <br /><span className="text-red-600">Empowerment.</span></h1>
          <p className="text-2xl text-gray-600 leading-relaxed mb-10 font-medium italic">
            Authentic brand storytelling starts from within. We train your staff to capture and edit daily office wins without production bottlenecks.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
             <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <CheckCircle className="text-red-600 mb-4" size={32} />
                <h4 className="font-black text-[10px] uppercase tracking-widest text-slate-400 mb-2">Benefit 01</h4>
                <p className="font-black text-slate-800 italic uppercase text-xs leading-tight">Eliminate Production Bottlenecks by shooting daily.</p>
             </div>
             <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <BarChart3 className="text-red-600 mb-4" size={32} />
                <h4 className="font-black text-[10px] uppercase tracking-widest text-slate-400 mb-2">Benefit 02</h4>
                <p className="font-black text-slate-800 italic uppercase text-xs leading-tight">Slash content costs compared to external agencies.</p>
             </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
           <div className="absolute -inset-4 bg-red-600 rounded-[4rem] rotate-3 opacity-5"></div>
           <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80" className="relative rounded-[3.5rem] shadow-3xl" alt="Corporate Training" />
        </div>
      </div>
      
      <div className="bg-slate-900 rounded-[4rem] p-16 text-white shadow-3xl relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl -translate-y-20 translate-x-20"></div>
         <h3 className="text-4xl font-black mb-12 text-center italic tracking-tighter uppercase relative z-10">The Training Syllabus</h3>
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {[
              { title: "SOP Building", desc: "Custom checklists for every capture session." },
              { title: "Brand Voice Sync", desc: "Ensuring all content fits the brand tone." },
              { title: "Mobile Cinema", desc: "Lighting, audio, and cinematic smartphone movement." },
              { title: "Approval Flow", desc: "Managing content from staff to social admin." }
            ].map((item, i) => (
              <div key={i} className="space-y-4">
                 <div className="text-red-600 font-black text-4xl italic opacity-40">0{i+1}</div>
                 <h4 className="font-black text-lg uppercase tracking-tight">{item.title}</h4>
                 <p className="text-sm text-gray-400 leading-relaxed font-medium italic">{item.desc}</p>
              </div>
            ))}
         </div>
         <div className="mt-20 text-center relative z-10">
            <button onClick={() => navigateTo('booking')} className="bg-red-600 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs shadow-2xl shadow-red-600/30 hover:scale-105 transition-transform">Request Team Onboarding Session</button>
         </div>
      </div>
    </div>
  </div>
);

const BusinessBrandPage = ({ navigateTo }) => (
  <div className="animate-fade-in pt-32 pb-24">
    <div className="container mx-auto px-6 max-w-6xl">
      <button onClick={() => navigateTo('workshops')} className="text-red-600 font-black flex items-center gap-2 mb-12 hover:-translate-x-1 transition-transform uppercase tracking-[0.2em] text-[10px] italic">
        <ArrowLeft size={16} /> Back to Workshops
      </button>
      <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
        <div className="lg:w-1/2">
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.85] tracking-tighter italic">Strategy <br /><span className="text-red-600">for Brands.</span></h1>
          <p className="text-2xl text-gray-600 leading-relaxed mb-10 font-medium italic">
            Stop posting when you "remember." Master the 1-hour content planning framework used by top agencies to automate their pipeline.
          </p>
          <div className="space-y-10">
             <div className="flex gap-8 items-start group">
                <div className="bg-red-50 p-5 rounded-2xl text-red-600 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-all"><PieChart size={36} /></div>
                <div>
                   <h4 className="font-black text-2xl text-slate-900 italic tracking-tighter uppercase mb-1">The "Content Buckets" Method</h4>
                   <p className="text-gray-500 leading-relaxed font-medium italic">Categorize your business activities into 4 recurring tracks for infinite content ideas.</p>
                </div>
             </div>
             <div className="flex gap-8 items-start group">
                <div className="bg-red-50 p-5 rounded-2xl text-red-600 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-all"><Clock size={36} /></div>
                <div>
                   <h4 className="font-black text-2xl text-slate-900 italic tracking-tighter uppercase mb-1">The 1-Hour Monthly Plan</h4>
                   <p className="text-gray-500 leading-relaxed font-medium italic">A step-by-step logic framework to plan 30 days of marketing in one afternoon.</p>
                </div>
             </div>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
           <div className="absolute -inset-6 bg-slate-900 rounded-[4rem] rotate-2"></div>
           <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80" className="relative rounded-[3.5rem] shadow-3xl grayscale hover:grayscale-0 transition-all duration-1000" alt="Strategy Board" />
        </div>
      </div>
      
      <div className="text-center bg-slate-900 p-24 rounded-[4rem] shadow-3xl text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-red-600/5 -skew-x-12 translate-x-20 pointer-events-none"></div>
         <h3 className="text-4xl md:text-5xl font-black mb-8 italic tracking-tighter relative z-10 uppercase">Dominate Your Local Niche</h3>
         <p className="text-gray-400 mb-12 max-w-2xl mx-auto font-medium relative z-10 italic">We teach Calgary owners to switch from reactive to proactive marketing, building a brand that customers literally can't miss.</p>
         <button onClick={() => navigateTo('booking')} className="bg-red-600 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs relative z-10 shadow-2xl hover:scale-105 transition-transform">Apply for Next Strategy Bootcamp</button>
      </div>
    </div>
  </div>
);

const AcademyDetailPage = ({ navigateTo }) => {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      title: "Essentials of Camera and Sound",
      level: "Technical Foundations",
      overview: "Built for beginners. Learn the core technical physics of filmmaking: exposure, focus, color, and pro sound.",
      weeks: ["Camera Handled & Safe Setup", "The Exposure Triangle (ISO/Ap/Shut)", "Manual Focus & Lens Selection", "Color Space & LOG Profiles", "Codecs, Formats & Frame Rates", "Practical Operation (Gimbals/Tripods)", "Basics of Location Sound Recording", "Final Practical Capture Session"]
    },
    {
      title: "Directing & Cinematography",
      level: "Narrative & Performance",
      overview: "Go beyond recording. Learn to block scenes, direct talent, and create visual subtext through lighting.",
      weeks: ["Director's Vision & Script Prep", "Shot Design & Storyboarding", "Working With & Directing Talent", "Lighting for Emotional Mood", "Cinematic Motion & Continuity", "The Scene Rehearsal Process", "Master Production Shoot Day", "The Post-Production Critique"]
    },
    {
      title: "Real Estate Media",
      level: "Industry Vertical Track",
      overview: "Master the highest-demand media vertical in Calgary. HDR photography and cinematic walkthroughs.",
      weeks: ["Real Estate Industry Standards", "HDR Interior Photography", "Composition for Luxury Spaces", "Smooth Gimbal Walkthroughs", "Safe Drone Operations & Framing", "High-Volume Production Workflow", "Editing Property Assets Fast", "Final Delivery Standards Prep"]
    },
    {
      title: "Social Media Masterclass",
      level: "Viral Growth Strategy",
      overview: "Master the art of the 60-second hook. Learn to produce social-first content that demands attention.",
      weeks: ["Platform Algorithms & Trends", "High-Frequency Short-Form Ideation", "Vertical Frame Composition", "Production Speed Sprints", "Audio Mastering for Mobile", "The Brand Voice Architecture", "Syncing Visuals to Sonic Rhythm", "Final Campaign Launch Lab"]
    },
    {
      title: "Post-Production & Color",
      level: "The Finishers Track",
      overview: "Bring rhythm and soul to your images. Learn the full post-production workflow to industry standards.",
      weeks: ["Advanced Project Architecture", "The Theory of Editing & Pacing", "Dialogue Cleanup & Audio Foley", "Sound Design & Scoring Theory", "Color Correction (Balancing)", "Creative Grading (Mood Creation)", "Master Delivery & Export Codes", "The Final Showcase Screening"]
    }
  ];

  return (
    <div className="animate-fade-in pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        <button onClick={() => navigateTo('workshops')} className="text-red-600 font-black flex items-center gap-2 mb-12 hover:-translate-x-1 transition-transform uppercase tracking-[0.2em] text-[10px] italic">
          <ArrowLeft size={16} /> Back to Workshops
        </button>
        <div className="mb-20">
           <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter leading-none italic">ICAN Film <br /><span className="text-red-600">Academy.</span></h1>
           <p className="text-xl text-gray-500 font-medium max-w-3xl italic leading-relaxed">8-week modular workshops designed to take you from absolute zero to a professional technical filmmaker.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Module Selector */}
          <div className="lg:w-1/3 space-y-4">
             {modules.map((mod, i) => (
               <button 
                key={i} 
                onClick={() => setActiveModule(i)} 
                className={`w-full text-left p-10 rounded-[2.5rem] flex items-center gap-6 transition-all ${activeModule === i ? 'bg-red-600 text-white shadow-2xl translate-x-6' : 'bg-white text-slate-300 border border-slate-100 hover:border-red-300 hover:text-slate-500 shadow-sm'}`}
               >
                 <div className="font-black text-3xl opacity-20 italic">0{i+1}</div>
                 <div className="font-black text-xs uppercase tracking-widest leading-tight">{mod.title}</div>
               </button>
             ))}
          </div>

          {/* Module Detail */}
          <div className="lg:w-2/3 bg-white rounded-[4rem] shadow-3xl p-12 md:p-20 relative overflow-hidden border border-slate-100">
             <div className="absolute top-0 right-0 p-10"><Award className="text-red-600/5 w-80 h-80 rotate-12" /></div>
             <div className="relative z-10">
                <div className="inline-block bg-red-600 text-white text-[10px] font-black tracking-[0.4em] px-5 py-2 rounded-full mb-10 uppercase italic shadow-lg">{modules[activeModule].level}</div>
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 italic tracking-tighter leading-none">{modules[activeModule].title}</h2>
                <p className="text-2xl text-slate-500 mb-16 pb-16 border-b border-slate-100 font-medium leading-relaxed italic">{modules[activeModule].overview}</p>
                
                <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-slate-300 mb-10 italic">Detailed 8-Week Curriculum</h4>
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
                   {modules[activeModule].weeks.map((week, idx) => (
                     <div key={idx} className="flex gap-4 items-center bg-slate-50 p-6 rounded-3xl text-sm border border-slate-100 group hover:border-red-500 hover:bg-white transition-all cursor-default shadow-sm">
                        <span className="font-black text-red-600 italic text-lg leading-none">W{idx+1}</span>
                        <span className="text-slate-800 font-black uppercase tracking-tight text-xs">{week}</span>
                     </div>
                   ))}
                </div>

                <div className="mt-20 flex flex-col md:flex-row items-center justify-between p-12 bg-slate-900 rounded-[3rem] text-white shadow-3xl relative overflow-hidden group">
                   <div className="absolute inset-0 bg-red-600/5 group-hover:bg-red-600/10 transition-colors pointer-events-none"></div>
                   <div className="mb-8 md:mb-0 relative z-10">
                      <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4 italic">TUITION INVESTMENT</p>
                      <p className="text-7xl font-black tracking-tighter leading-none italic">$1000 <span className="text-xs font-bold text-slate-500 tracking-[0.2em] uppercase align-middle ml-2">CAD / PP</span></p>
                   </div>
                   <button onClick={() => navigateTo('booking')} className="relative z-10 bg-red-600 px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs shadow-2xl shadow-red-600/30 hover:scale-110 transition-transform">Enroll for Next Cohort</button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BookingPage = () => (
  <div className="animate-fade-in pt-48 pb-24 bg-slate-50 min-h-screen">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="bg-white rounded-[5rem] shadow-3xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
        <div className="lg:w-2/5 bg-slate-900 p-16 text-white flex flex-col justify-between relative overflow-hidden">
           <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] -translate-y-20 translate-x-20"></div>
           <div className="relative z-10">
              <h2 className="text-6xl font-black mb-12 italic tracking-tighter leading-none">Let's <br /><span className="text-red-600">Solve It.</span></h2>
              <div className="space-y-10">
                 <div className="flex gap-5 items-start">
                    <CheckCircle className="text-red-500 shrink-0 mt-1" size={24} /> 
                    <span className="text-gray-300 font-bold uppercase tracking-widest text-xs leading-relaxed">24-hour response <br />time guarantee</span>
                 </div>
                 <div className="flex gap-5 items-start">
                    <CheckCircle className="text-red-500 shrink-0 mt-1" size={24} /> 
                    <span className="text-gray-300 font-bold uppercase tracking-widest text-xs leading-relaxed">Detailed custom <br />marketing audit</span>
                 </div>
                 <div className="flex gap-5 items-start">
                    <CheckCircle className="text-red-500 shrink-0 mt-1" size={24} /> 
                    <span className="text-gray-300 font-bold uppercase tracking-widest text-xs leading-relaxed">Calgary-based <br />local industry experts</span>
                 </div>
              </div>
           </div>
           <div className="pt-16 border-t border-white/10 mt-16 relative z-10">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em] mb-4">Direct Connection</p>
              <p className="text-2xl font-black tracking-tight hover:text-red-500 transition-colors cursor-pointer">hello@icanfilm.ca</p>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-2">Macleod Trail SW • Calgary, AB</p>
           </div>
        </div>
        <div className="lg:w-3/5 p-16 md:p-20">
          <form className="grid gap-12" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase text-slate-300 tracking-[0.3em] italic ml-1">Full Name</label>
                  <input type="text" className="w-full px-6 py-5 rounded-3xl bg-slate-50 border border-slate-100 outline-none focus:ring-8 focus:ring-red-600/5 focus:border-red-600 transition-all font-bold text-slate-900 placeholder:opacity-30" placeholder="Jane Doe" />
               </div>
               <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase text-slate-300 tracking-[0.3em] italic ml-1">Business Name</label>
                  <input type="text" className="w-full px-6 py-5 rounded-3xl bg-slate-50 border border-slate-100 outline-none focus:ring-8 focus:ring-red-600/5 focus:border-red-600 transition-all font-bold text-slate-900 placeholder:opacity-30" placeholder="Calgary Enterprise" />
               </div>
            </div>
            <div className="space-y-4">
               <label className="text-[10px] font-black uppercase text-slate-300 tracking-[0.3em] italic ml-1">The Core Struggle</label>
               <textarea rows="5" className="w-full px-6 py-5 rounded-3xl bg-slate-50 border border-slate-100 outline-none focus:ring-8 focus:ring-red-600/5 focus:border-red-600 transition-all font-bold text-slate-900 placeholder:opacity-30" placeholder="What is your primary marketing challenge right now?"></textarea>
            </div>
            <button className="w-full bg-red-600 text-white font-black py-7 rounded-[2.5rem] shadow-2xl shadow-red-600/30 uppercase tracking-[0.3em] text-sm hover:scale-[1.03] transition-all flex items-center justify-center gap-4 italic group">Send My Inquiry <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" /></button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Application Entry ---

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    setActivePage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItemClass = (item) => {
    const isAcademyTrack = ['academy-detail', 'corporate-training', 'business-brands'].includes(activePage);
    const isActive = (item.toLowerCase() === activePage) || (item === 'Workshops' && isAcademyTrack);
    const textTheme = scrolled || activePage !== 'home' ? 'text-slate-900' : 'text-white';
    
    return `font-black text-[11px] uppercase tracking-[0.3em] transition-all hover:text-red-600 ${textTheme} ${isActive ? 'text-red-600 scale-110 italic' : ''}`;
  };

  return (
    <div className="font-sans text-slate-900 bg-white antialiased overflow-x-hidden min-h-screen flex flex-col selection:bg-red-600 selection:text-white">
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes slow-zoom { from { transform: scale(1); } to { transform: scale(1.15); } }
        .animate-slow-zoom { animation: slow-zoom 30s ease-in-out infinite alternate; }
        .italic { font-style: italic; }
        .shadow-3xl { box-shadow: 0 50px 100px -20px rgba(0,0,0,0.3), 0 30px 60px -30px rgba(0,0,0,0.4); }
      `}</style>

      {/* Persistent Navigation */}
      <nav className={`fixed w-full z-[100] transition-all duration-1000 ${scrolled || activePage !== 'home' ? 'bg-white/90 backdrop-blur-3xl shadow-sm py-4' : 'bg-transparent py-10'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="cursor-pointer" onClick={() => navigateTo('home')}>
            <ICANLogo scrolled={scrolled} activePage={activePage} />
          </div>

          <div className="hidden lg:flex items-center space-x-12">
            {['Home', 'Services', 'Portfolio', 'Workshops'].map((item) => (
              <button key={item} onClick={() => navigateTo(item.toLowerCase())} className={navItemClass(item)}>{item}</button>
            ))}
            <button onClick={() => navigateTo('booking')} className="bg-red-600 text-white px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-2xl shadow-red-600/30 hover:scale-105 transition-transform italic">Free Audit</button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={scrolled || activePage !== 'home' ? 'text-slate-900' : 'text-white'}>
              {isMenuOpen ? <X size={36} /> : <Menu size={36} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-[120] flex flex-col justify-center gap-10 text-center animate-fade-in p-12">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 p-5 bg-slate-50 rounded-full shadow-sm"><X size={32} /></button>
            {['Home', 'Services', 'Portfolio', 'Workshops', 'Booking'].map((item) => (
              <button key={item} onClick={() => navigateTo(item.toLowerCase())} className="text-6xl font-black italic tracking-tighter hover:text-red-600 transition-colors uppercase leading-none">{item}</button>
            ))}
          </div>
        )}
      </nav>

      {/* Primary Page Content Render */}
      <main className="flex-grow">
        {activePage === 'home' && <HomePage navigateTo={navigateTo} />}
        {activePage === 'services' && <ServicesPage navigateTo={navigateTo} />}
        {activePage === 'portfolio' && <PortfolioPage navigateTo={navigateTo} />}
        {activePage === 'workshops' && <WorkshopsPage navigateTo={navigateTo} />}
        {activePage === 'corporate-training' && <CorporateTrainingPage navigateTo={navigateTo} />}
        {activePage === 'business-brands' && <BusinessBrandPage navigateTo={navigateTo} />}
        {activePage === 'academy-detail' && <AcademyDetailPage navigateTo={navigateTo} />}
        {activePage === 'booking' && <BookingPage navigateTo={navigateTo} />}
      </main>

      {/* Premium Footer */}
      <footer className="bg-slate-950 text-slate-600 py-32 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-24">
            <div className="max-w-md">
              <ICANLogo scrolled={false} activePage="other" />
              <p className="mt-8 text-lg font-medium leading-relaxed italic">Calgary's only agency combining cinematic production with ruthless social media strategy to multiply event impact.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
               <div className="space-y-8">
                  <h4 className="text-white font-black text-xs uppercase tracking-[0.4em] italic">Core Ecosystem</h4>
                  <div className="flex flex-col gap-5 text-[11px] font-black uppercase tracking-widest">
                     <button onClick={() => navigateTo('home')} className="w-fit hover:text-red-600 transition-colors">Strategic Plan</button>
                     <button onClick={() => navigateTo('services')} className="w-fit hover:text-red-600 transition-colors">Retainer Menu</button>
                     <button onClick={() => navigateTo('portfolio')} className="w-fit hover:text-red-600 transition-colors">Our Proof</button>
                  </div>
               </div>
               <div className="space-y-8">
                  <h4 className="text-white font-black text-xs uppercase tracking-[0.4em] italic">Knowledge</h4>
                  <div className="flex flex-col gap-5 text-[11px] font-black uppercase tracking-widest text-slate-400">
                     <button onClick={() => navigateTo('academy-detail')} className="w-fit hover:text-red-600 transition-colors">Modular Academy</button>
                     <button onClick={() => navigateTo('corporate-training')} className="w-fit hover:text-red-600 transition-colors">Staff Training</button>
                     <button onClick={() => navigateTo('business-brands')} className="w-fit hover:text-red-600 transition-colors">Strategy Track</button>
                  </div>
               </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-slate-900 gap-10">
             <p className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-800">&copy; 2026 ICAN FILM STRATEGIC BLUEPRINT • CALGARY, ALBERTA</p>
             <div className="flex gap-12">
                <Instagram size={22} className="hover:text-red-600 cursor-pointer transition-colors" />
                <Linkedin size={22} className="hover:text-red-600 cursor-pointer transition-colors" />
                <Youtube size={22} className="hover:text-red-600 cursor-pointer transition-colors" />
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;