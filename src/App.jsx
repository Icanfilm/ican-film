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
  Rocket,
  MousePointer2,
  TrendingDown,
  Timer
} from 'lucide-react';

// --- Icon Helper Component ---
const Icon = ({ name, size = 24, className = "" }) => {
  const icons = {
    mousePointer2: MousePointer2,
    quote: Quote,
    clapperboard: Clapperboard,
    camera: Camera,
    layers: Layers,
    rocket: Rocket,
    lightbulb: Lightbulb,
    zap: Zap,
    checkCircle: CheckCircle,
    pieChart: PieChart,
    clock: Clock,
    trendingUp: TrendingUp,
    trendingDown: TrendingDown,
    timer: Timer,
    video: Video,
    film: Film,
    award: Award,
    building2: Building2,
    graduationCap: GraduationCap,
    target: Target
  };
  const LucideIcon = icons[name];
  return LucideIcon ? <LucideIcon size={size} className={className} /> : null;
};

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

// --- Page Content Components ---

const HomePage = ({ navigateTo }) => (
  <div className="animate-fade-in">
    {/* Hero Section */}
    <section className="relative h-[95vh] min-h-[850px] flex items-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/60 to-slate-900 z-10"></div>
      <div className="absolute inset-0 z-0 overflow-hidden">
         <img 
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000" 
          alt="Production Background" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-2 rounded-full text-xs font-black mb-8 border border-white/20 backdrop-blur-md uppercase tracking-[0.2em]">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
            The 2026 Event-to-Content System
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.8] mb-8 tracking-tighter uppercase">
            WE CAPTURE.<br />
            YOU <span className="text-red-600 italic">DOMINATE.</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-200 mb-12 max-w-3xl font-medium leading-relaxed">
            Stop letting your events die when the lights go out. We turn your live experiences into <span className="text-white font-bold underline decoration-red-600 underline-offset-8">30 days of high-ROI social content.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button onClick={() => navigateTo('booking')} className="bg-red-600 hover:bg-red-700 text-white px-12 py-7 rounded-2xl font-black text-xl transition-all transform hover:scale-105 flex items-center justify-center gap-4 shadow-2xl shadow-red-600/40 uppercase tracking-widest">
              Get Your Free Audit <ArrowRight size={28} />
            </button>
            <button onClick={() => navigateTo('services')} className="bg-white text-slate-900 px-12 py-7 rounded-2xl font-black text-xl transition-all flex items-center justify-center gap-4 uppercase tracking-widest shadow-xl">
              See Packages
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
        <Icon name="mousePointer2" size={32} />
      </div>
    </section>

    {/* The Pain Point vs Solution (The "Gap") */}
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-none">The <span className="text-red-600 italic underline">Content Trap</span></h2>
          <p className="text-xl text-slate-500 font-medium italic">Why Calgary business owners are losing reach.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 flex flex-col justify-center">
            <h3 className="text-3xl font-black text-slate-400 mb-8 flex items-center gap-3"><Icon name="trendingDown" className="text-slate-400" /> The Reality</h3>
            <div className="space-y-12">
               <div className="flex items-start gap-6">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-slate-400"><Clock /></div>
                  <div>
                    <p className="text-3xl font-black text-slate-900 leading-none mb-2 tracking-tight">50% of Owners</p>
                    <p className="text-lg text-slate-500 font-medium leading-tight italic">Spend less than 1 hour a day on marketing.</p>
                  </div>
               </div>
               <div className="flex items-start gap-6">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-slate-400"><Timer /></div>
                  <div>
                    <p className="text-3xl font-black text-slate-900 leading-none mb-2 tracking-tight">44% Procrastinate</p>
                    <p className="text-lg text-slate-500 font-medium leading-tight italic">On social posting tasks due to overwhelm.</p>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="bg-slate-900 p-12 rounded-[3.5rem] border-4 border-red-600 flex flex-col justify-center relative overflow-hidden shadow-3xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px]"></div>
            <h3 className="text-3xl font-black text-red-500 mb-8 flex items-center gap-3 relative z-10 uppercase italic tracking-tighter"><Icon name="trendingUp" /> The ICAN Solution</h3>
            <div className="space-y-12 relative z-10">
               <div className="flex items-start gap-6">
                  <div className="bg-red-600 p-4 rounded-2xl shadow-lg text-white"><Rocket /></div>
                  <div>
                    <p className="text-3xl font-black text-white leading-none mb-2 tracking-tight">89% Video ROI</p>
                    <p className="text-lg text-red-400 font-medium leading-tight italic">Video drives website traffic & sales faster than images.</p>
                  </div>
               </div>
               <div className="flex items-start gap-6">
                  <div className="bg-red-600 p-4 rounded-2xl shadow-lg text-white"><Layers /></div>
                  <div>
                    <p className="text-3xl font-black text-white leading-none mb-2 tracking-tight">300% Reach Boost</p>
                    <p className="text-lg text-red-400 font-medium leading-tight italic">Repurposing 1 event increases visibility across all platforms.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* The Visual "Multiplier" Explanation */}
    <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-none italic">THE CONTENT <br /><span className="text-red-600">MULTIPLIER.</span></h2>
            <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-xl">
               <div className="flex items-center gap-10 mb-10">
                  <div className="text-center">
                    <div className="bg-red-600 w-24 h-24 rounded-full flex items-center justify-center font-black text-3xl mx-auto mb-4 shadow-xl">1</div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-red-500 italic">Day of Capture</p>
                  </div>
                  <div className="h-0.5 flex-grow bg-white/10 relative">
                     <ArrowRight className="absolute -right-4 -top-3 text-red-600" />
                  </div>
                  <div className="text-center">
                    <div className="bg-white text-slate-900 w-24 h-24 rounded-full flex items-center justify-center font-black text-3xl mx-auto mb-4 shadow-xl">15+</div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 italic">Social Assets</p>
                  </div>
               </div>
               <p className="text-lg text-gray-300 leading-relaxed italic font-medium italic">"We take your 'wealth of valuable content' that usually disappears after an event and systematically turn it into weeks of buzz."</p>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
             <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <h4 className="text-red-500 font-black text-4xl mb-2">4</h4>
                <p className="text-xs font-bold uppercase tracking-widest text-white/40">Weekly Reels</p>
             </div>
             <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <h4 className="text-red-500 font-black text-4xl mb-2">15</h4>
                <p className="text-xs font-bold uppercase tracking-widest text-white/40">Brand Photos</p>
             </div>
             <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <h4 className="text-red-500 font-black text-4xl mb-2">10</h4>
                <p className="text-xs font-bold uppercase tracking-widest text-white/40">Daily Stories</p>
             </div>
             <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <h4 className="text-red-500 font-black text-4xl mb-2">30</h4>
                <p className="text-xs font-bold uppercase tracking-widest text-white/40">Days Visibility</p>
             </div>
          </div>
        </div>
      </div>
    </section>

    {/* Strategy Pillar - Brand Voice Restored */}
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-5xl font-black mb-12 italic tracking-tighter uppercase leading-none">We Know <span className="text-red-600 underline underline-offset-8">Calgary.</span></h2>
        <p className="text-2xl text-slate-500 font-medium leading-relaxed italic mb-16">As Calgarians, we know Stampede week is a huge content opportunity—and we know how to keep your brand visible even in the quiet indoor months. We aren't just faceless editors; we are your local content partners.</p>
        <div className="grid md:grid-cols-2 gap-12 text-left">
           <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:-translate-y-2 transition-transform">
              <Icon name="quote" className="text-red-600 mb-6 opacity-20" size={48} />
              <p className="text-xl italic font-medium text-slate-700 leading-relaxed mb-10">"ICAN Film positions itself as the solution to overwhelm. They took the burden off our shoulders."</p>
              <div className="flex gap-4 items-center border-t border-slate-200 pt-8">
                 <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden border-4 border-white shadow-md">
                    <img src="https://i.pravatar.cc/150?u=calgarybiz1" alt="Testimonial" />
                 </div>
                 <div>
                    <p className="font-black text-slate-900 uppercase text-xs tracking-widest italic">Nathan G.</p>
                    <p className="text-[10px] font-black uppercase text-red-600 tracking-tighter">CEO, Calgary Tech Hub</p>
                 </div>
              </div>
           </div>
           <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:-translate-y-2 transition-transform">
              <Icon name="quote" className="text-red-600 mb-6 opacity-20" size={48} />
              <p className="text-xl italic font-medium text-slate-700 leading-relaxed mb-10">"Turned our annual gala into 3 months of digital recruitment. The ROI was immediate."</p>
              <div className="flex gap-4 items-center border-t border-slate-200 pt-8">
                 <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden border-4 border-white shadow-md">
                    <img src="https://i.pravatar.cc/150?u=calgarybiz2" alt="Testimonial" />
                 </div>
                 <div>
                    <p className="font-black text-slate-900 uppercase text-xs tracking-widest italic">Sarah L.</p>
                    <p className="text-[10px] font-black uppercase text-red-600 tracking-tighter">Director, Gems Cup</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  </div>
);

const ServicesPage = ({ navigateTo }) => (
  <div className="animate-fade-in pt-40 pb-24">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-4xl mx-auto mb-24">
        <h1 className="text-7xl md:text-9xl font-black text-slate-900 mb-8 tracking-tighter leading-none uppercase italic">Curated <span className="text-red-600">Solutions.</span></h1>
        <p className="text-2xl text-slate-500 leading-relaxed font-medium italic">Structured as a funnel: start with proof, end with dominance.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {/* Tier 1 */}
        <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col hover:border-red-500 transition-all group relative">
          <div className="bg-red-50 text-red-600 w-16 h-16 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-red-600 group-hover:text-white transition-all shadow-lg"><Icon name="lightbulb" size={40} /></div>
          <h3 className="text-4xl font-black mb-4 tracking-tighter italic uppercase">The Audit</h3>
          <p className="text-red-600 font-black mb-10 uppercase tracking-[0.3em] text-[10px] italic">Free Value-Add</p>
          <p className="text-gray-500 mb-12 flex-grow leading-relaxed font-medium text-lg italic">"Discovery Session." We review your social channels and give you 3-5 tailored content ideas on the spot.</p>
          <button onClick={() => navigateTo('booking')} className="w-full py-6 border-4 border-slate-900 text-slate-900 font-black rounded-3xl hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest text-sm italic">Get Free Audit</button>
        </div>

        {/* Tier 2 - Standard */}
        <div className="bg-slate-900 p-12 rounded-[3.5rem] shadow-3xl text-white flex flex-col relative transform lg:scale-110 border-8 border-red-600 overflow-hidden z-20">
          <div className="absolute top-0 right-0 -mt-2 mr-10 bg-red-600 text-[10px] font-black tracking-[0.4em] px-8 py-3 rounded-full uppercase shadow-2xl z-20">The Engine</div>
          <div className="bg-red-600 text-white w-20 h-20 rounded-3xl flex items-center justify-center mb-10 shadow-xl shadow-red-600/30 z-10"><Icon name="zap" size={48} /></div>
          <h3 className="text-4xl font-black mb-4 tracking-tighter italic uppercase z-10">Standard Retainer</h3>
          <p className="text-red-400 font-black mb-10 uppercase tracking-[0.3em] text-[10px] italic z-10">$1,500 / Month</p>
          <ul className="space-y-6 mb-12 z-10">
            <li className="flex items-center gap-4 text-lg font-black italic uppercase"><Icon name="checkCircle" className="text-red-500" size={24} /> 1 Full-Day Capture</li>
            <li className="flex items-center gap-4 text-lg font-black italic uppercase"><Icon name="checkCircle" className="text-red-500" size={24} /> 4 Edited Video Reels</li>
            <li className="flex items-center gap-4 text-lg font-black italic uppercase"><Icon name="checkCircle" className="text-red-500" size={24} /> 15+ Polished Stills</li>
            <li className="flex items-center gap-4 text-lg font-black italic uppercase"><Icon name="checkCircle" className="text-red-500" size={24} /> Caption & Strategy Map</li>
          </ul>
          <button onClick={() => navigateTo('booking')} className="w-full py-6 bg-red-600 text-white font-black rounded-3xl hover:bg-red-700 transition-all shadow-2xl shadow-red-600/40 uppercase tracking-widest text-sm italic z-10">Claim Spot</button>
        </div>

        {/* Tier 3 */}
        <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col hover:border-slate-900 transition-all group">
          <div className="bg-slate-100 text-slate-900 w-16 h-16 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-slate-900 group-hover:text-white transition-all shadow-lg shadow-slate-100"><Icon name="camera" size={40} /></div>
          <h3 className="text-4xl font-black mb-4 tracking-tighter italic uppercase">Dominance</h3>
          <p className="text-red-600 font-black mb-10 uppercase tracking-[0.3em] text-[10px] italic">Custom Scale</p>
          <p className="text-gray-500 mb-12 flex-grow leading-relaxed font-medium text-lg italic">"Outsourced Content Dept." Multiple visits per month. Multi-platform posting and full management included.</p>
          <button onClick={() => navigateTo('booking')} className="w-full py-6 border-4 border-slate-900 text-slate-900 font-black rounded-3xl hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest text-sm italic">Inquire Custom</button>
        </div>
      </div>
    </div>
  </div>
);

const PortfolioPage = ({ navigateTo }) => {
  const portfolioItems = [
    {
      client: "Gems Cup Calgary",
      type: "Cinematic Event Multiplier",
      title: "One Event, 25+ Marketing Assets",
      problem: "A premier horse competition with national business leaders. Coverage needed to match the high-prestige environment.",
      solution: "Full cinematic deployment with drone operations and high-end 4K ground units. Captured the scale of speeches and competition intensity.",
      result: "Produced a 3-month strategic drip campaign. Early-bird ticket sales for next season increased by 25% within a month of recap release.",
      videoType: 'youtube',
      videoId: 'Z-4poApHgkE',
      side: "left"
    },
    {
      client: "Estavio Real Estate Group",
      type: "Weekly Knowledge Retainer",
      title: "Building Authority via Training",
      problem: "Weekly training events involving top industry experts were happening but only the 20 people in the room were seeing them.",
      solution: "Consistent capture of speaker sessions. We turn 'boring' training into high-pacing, authority-building Reels for LinkedIn/IG.",
      result: "Built Estavio into a top-of-mind educational real estate brand in Calgary. Consistent agent recruitment driven by content visibility.",
      videoType: 'mux',
      videoId: 'gJzbHrC01LBX00QmdojNxoA00L2ncGo02auPd46DKqqEmKM',
      side: "right"
    },
    {
      client: "MOA Training Program",
      type: "Educational Storytelling",
      title: "Recruiting the Next Generation",
      problem: "Vocational programs often look sterile or technical. They needed to show the 'Professional Future' students could achieve.",
      solution: "High-speed marketing video focused on the students, the hands-on tools, and the professional office environment.",
      result: "Significant boost in digital inquiries. Now the primary marketing asset for student enrollment campaigns across Alberta.",
      videoType: 'mux',
      videoId: 'tHQPOaEigvny7OAkC5yAfxGd7cykNJEdMF2vUXLolXc',
      side: "left"
    }
  ];

  return (
    <div className="animate-fade-in pt-40 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-none uppercase italic">Our <span className="text-red-600 underline">Proof.</span></h1>
          <p className="text-2xl text-gray-500 font-medium italic">We don't hand over a raw file. We deliver marketing momentum.</p>
        </div>
        <div className="space-y-56 mb-24">
          {portfolioItems.map((item, i) => (
            <div key={i} className={`flex flex-col ${item.side === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-24`}>
              <div className="lg:w-[60%] w-full h-[650px] relative group">
                 <div className="absolute -inset-10 bg-red-600/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <VideoLoop type={item.videoType} id={item.videoId} title={item.client} />
              </div>
              <div className="lg:w-[40%]">
                <div className="inline-flex items-center gap-3 bg-red-600 text-white font-black text-[10px] uppercase tracking-[0.4em] px-6 py-2 rounded-full mb-10 italic shadow-xl shadow-red-600/20">{item.type}</div>
                <h3 className="text-5xl md:text-6xl font-black mb-10 italic tracking-tighter leading-none uppercase text-slate-900">{item.client}</h3>
                <div className="space-y-10 mb-12">
                  <div className="border-l-4 border-slate-200 pl-6">
                    <h4 className="font-black text-slate-300 text-[10px] uppercase tracking-widest mb-3 italic">The Project</h4>
                    <p className="text-lg text-slate-600 font-medium leading-relaxed italic">{item.problem}</p>
                  </div>
                  <div className="border-l-4 border-red-600 pl-6">
                    <h4 className="font-black text-red-500 text-[10px] uppercase tracking-widest mb-3 italic">The Result</h4>
                    <p className="text-2xl text-slate-900 font-black leading-tight italic tracking-tighter uppercase">{item.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AcademyDetailPage = ({ navigateTo }) => {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      title: "Essentials of Camera and Sound",
      level: "Technical Foundation",
      overview: "Built for beginners. Learn the technical physics of filmmaking: exposure, focus, color, and pro sound capture.",
      weeks: ["Camera Handled & Safe Setup", "Exposure Triangle Mastery", "Manual Focus & Lens Theory", "Color Space & LOG Profiles", "Codecs & Bitrates for Social", "Practical Operation (Gimbals)", "Location Sound Recording", "Final Practical Capture Lab"]
    },
    {
      title: "Directing & Cinematography",
      level: "Narrative Mastery",
      overview: "Go beyond recording. Learn to block scenes, direct talent, and create visual subtext through lighting design.",
      weeks: ["Director's Vision & Scripting", "Shot Design & Storyboarding", "Directing Talent & Performance", "Lighting for Emotional Mood", "Cinematic Motion & Continuity", "The Scene Rehearsal Process", "Master Production Shoot Day", "The Post-Production Critique"]
    },
    {
      title: "Real Estate Media Production",
      level: "Industry Vertical Track",
      overview: "Master the highest-demand media vertical in Calgary. HDR photography and cinematic property walkthroughs.",
      weeks: ["Industry Standard Overview", "HDR Interior Photography", "Composition for Luxury Spaces", "Smooth Gimbal Walkthroughs", "Safe Drone Operations", "Workflow Speed Management", "Editing Property Assets", "Final Client Delivery standards"]
    }
  ];

  return (
    <div className="animate-fade-in pt-40 pb-24 bg-slate-50 min-h-screen uppercase">
      <div className="container mx-auto px-6 max-w-7xl">
        <button onClick={() => navigateTo('workshops')} className="text-red-600 font-black flex items-center gap-2 mb-12 hover:-translate-x-1 transition-transform tracking-widest text-xs italic">
          <ArrowLeft size={16} /> Back to Workshops
        </button>
        <div className="mb-20">
           <h1 className="text-6xl md:text-9xl font-black text-slate-900 mb-8 tracking-tighter leading-none italic uppercase">Academy <br /><span className="text-red-600 underline">Track.</span></h1>
           <p className="text-2xl text-slate-500 font-black tracking-tight max-w-3xl italic leading-none opacity-50">Modular 8-week workshops for individuals ready to master the craft of professional filmmaking.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3 space-y-6">
             {modules.map((mod, i) => (
               <button 
                key={i} 
                onClick={() => setActiveModule(i)} 
                className={`w-full text-left p-12 rounded-[3rem] flex items-center gap-8 transition-all ${activeModule === i ? 'bg-red-600 text-white shadow-3xl translate-x-10' : 'bg-white text-slate-300 border border-slate-100 hover:border-red-300 shadow-sm'}`}
               >
                 <div className="font-black text-5xl opacity-20 italic">0{i+1}</div>
                 <div className="font-black text-sm uppercase tracking-widest leading-none">{mod.title}</div>
               </button>
             ))}
          </div>

          <div className="lg:w-2/3 bg-white rounded-[5rem] shadow-3xl p-16 md:p-24 relative overflow-hidden border border-slate-100">
             <div className="absolute top-0 right-0 p-16 opacity-[0.03] rotate-12"><Clapperboard size={400} /></div>
             <div className="relative z-10">
                <div className="inline-block bg-red-600 text-white text-[10px] font-black tracking-[0.5em] px-8 py-3 rounded-full mb-12 uppercase italic shadow-2xl">{modules[activeModule].level}</div>
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 italic tracking-tighter leading-none uppercase">{modules[activeModule].title}</h2>
                <p className="text-2xl text-slate-500 mb-20 pb-20 border-b border-gray-100 font-bold leading-relaxed italic tracking-tight">{modules[activeModule].overview}</p>
                
                <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-slate-300 mb-12 italic">The 8-Week Curriculum Breakdown</h4>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                   {modules[activeModule].weeks.map((week, idx) => (
                     <div key={idx} className="flex gap-4 items-center bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 group hover:border-red-600 hover:bg-white transition-all shadow-sm">
                        <span className="font-black text-red-600 italic text-3xl">W{idx+1}</span>
                        <span className="text-slate-800 font-black uppercase tracking-tight text-[11px] leading-tight">{week}</span>
                     </div>
                   ))}
                </div>

                <div className="mt-24 flex flex-col md:flex-row items-center justify-between p-16 bg-slate-900 rounded-[4rem] text-white shadow-3xl relative overflow-hidden group">
                   <div className="absolute inset-0 bg-red-600/5 group-hover:bg-red-600/10 transition-colors pointer-events-none"></div>
                   <div className="mb-10 md:mb-0 relative z-10">
                      <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.5em] mb-4 italic">INVESTMENT</p>
                      <p className="text-8xl font-black tracking-tighter leading-none italic">$1000 <span className="text-sm font-bold text-slate-500 align-middle ml-2">CAD</span></p>
                   </div>
                   <button onClick={() => navigateTo('booking')} className="relative z-10 bg-red-600 px-16 py-7 rounded-full font-black uppercase tracking-widest text-xs shadow-2xl shadow-red-600/30 hover:scale-110 transition-transform italic">Enroll Now</button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkshopsPage = ({ navigateTo }) => (
  <div className="animate-fade-in pt-40 pb-24 uppercase font-black">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-4xl mx-auto mb-24">
        <h1 className="text-6xl md:text-9xl text-slate-900 mb-8 tracking-tighter leading-[0.85] italic">Knowledge <br /><span className="text-red-600 underline">Tracks.</span></h1>
        <p className="text-2xl text-slate-400 leading-none italic opacity-50">Empowering Calgary business owners to build internal content muscle.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 mb-32">
        <div className="bg-slate-900 text-white p-16 rounded-[4rem] shadow-3xl flex flex-col hover:-translate-y-2 transition-all group">
          <Building2 className="text-red-500 mb-12" size={80} />
          <h3 className="text-4xl mb-6 italic leading-none">Corporate & Staff</h3>
          <p className="text-slate-400 mb-12 leading-relaxed text-sm italic font-medium tracking-normal">Train your in-house marketing department to capture professional daily content without bottlenecks.</p>
          <button onClick={() => navigateTo('corporate-training')} className="mt-auto py-6 bg-white text-slate-900 rounded-3xl uppercase tracking-widest text-[10px] hover:bg-red-600 hover:text-white transition-colors italic">Detailed Track Info</button>
        </div>

        <div className="bg-white p-16 rounded-[4rem] shadow-xl border border-slate-100 flex flex-col hover:border-red-600 transition-all group">
          <Target className="text-red-600 mb-12" size={80} />
          <h3 className="text-4xl text-slate-900 mb-6 italic leading-none">Strategy Track</h3>
          <p className="text-slate-500 mb-12 leading-relaxed text-sm italic font-medium tracking-normal">Master the 'Content Buckets' method and the 1-hour planning framework used to plan 30 days in 60 mins.</p>
          <button onClick={() => navigateTo('business-brands')} className="mt-auto py-6 border-4 border-slate-900 text-slate-900 rounded-3xl uppercase tracking-widest text-[10px] hover:bg-slate-900 hover:text-white transition-colors italic">Strategy Details</button>
        </div>

        <div className="bg-white p-16 rounded-[4rem] shadow-xl border border-slate-100 flex flex-col hover:border-red-600 transition-all group">
          <Film className="text-red-600 mb-12" size={80} />
          <h3 className="text-4xl text-slate-900 mb-6 italic leading-none">Academy Track</h3>
          <p className="text-slate-500 mb-12 leading-relaxed text-sm italic font-medium tracking-normal">Technical modular workshops for individuals. 8 weeks to go from absolute beginner to technical pro.</p>
          <button onClick={() => navigateTo('academy-detail')} className="mt-auto py-6 border-4 border-slate-900 text-slate-900 rounded-3xl uppercase tracking-widest text-[10px] hover:bg-slate-900 hover:text-white transition-colors italic">View Modules</button>
        </div>
      </div>
    </div>
  </div>
);

const CorporateTrainingPage = ({ navigateTo }) => (
  <div className="animate-fade-in pt-32 pb-24 bg-white uppercase font-black tracking-tighter">
    <div className="container mx-auto px-6 max-w-6xl text-center lg:text-left">
       <button onClick={() => navigateTo('workshops')} className="text-red-600 font-black flex items-center gap-2 mb-12 mx-auto lg:mx-0 tracking-[0.2em] text-[10px] italic">
        <ArrowLeft size={16} /> Back
      </button>
      <h1 className="text-7xl md:text-9xl mb-8 italic leading-none">Staff <br /><span className="text-red-600">Sync.</span></h1>
      <p className="text-3xl text-slate-400 mb-16 italic opacity-50 leading-none">Transform your staff into a production unit.</p>
      <div className="bg-slate-900 text-white p-20 rounded-[5rem] shadow-3xl text-center">
         <h2 className="text-4xl mb-12 italic uppercase">What Your Team Master's</h2>
         <div className="grid md:grid-cols-3 gap-10">
            {["Workflow SOPs", "Brand Alignment", "Smartphone Cinema"].map((t, i) => (
              <div key={i} className="p-10 border border-white/10 rounded-[3rem] shadow-2xl">
                 <p className="text-red-500 text-6xl mb-4 italic">0{i+1}</p>
                 <p className="text-xl uppercase tracking-widest">{t}</p>
              </div>
            ))}
         </div>
      </div>
    </div>
  </div>
);

const BusinessBrandPage = ({ navigateTo }) => (
  <div className="animate-fade-in pt-32 pb-24 bg-white uppercase font-black tracking-tighter">
    <div className="container mx-auto px-6 max-w-6xl text-center lg:text-left">
       <button onClick={() => navigateTo('workshops')} className="text-red-600 font-black flex items-center gap-2 mb-12 mx-auto lg:mx-0 tracking-[0.2em] text-[10px] italic">
        <ArrowLeft size={16} /> Back
      </button>
      <h1 className="text-7xl md:text-9xl mb-8 italic leading-none">Business <br /><span className="text-red-600">Strategy.</span></h1>
      <p className="text-3xl text-slate-400 mb-16 italic opacity-50 leading-none">Plan 30 days in 60 minutes.</p>
      <div className="bg-slate-50 border border-slate-100 p-20 rounded-[5rem] shadow-xl text-center">
         <h2 className="text-4xl text-slate-900 mb-12 italic uppercase underline decoration-red-600 underline-offset-8">The Framework</h2>
         <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-12 rounded-[3.5rem] shadow-sm">
               <PieChart className="text-red-600 w-16 h-16 mx-auto mb-6" />
               <p className="text-2xl mb-4 italic">Content Buckets</p>
               <p className="text-xs text-slate-400 font-bold tracking-widest">Never run out of ideas.</p>
            </div>
            <div className="bg-white p-12 rounded-[3.5rem] shadow-sm">
               <Clock className="text-red-600 w-16 h-16 mx-auto mb-6" />
               <p className="text-2xl mb-4 italic">The 1-Hour Map</p>
               <p className="text-xs text-slate-400 font-bold tracking-widest">Automation Mastery.</p>
            </div>
         </div>
      </div>
    </div>
  </div>
);

const BookingPage = () => (
  <div className="animate-fade-in pt-48 pb-24 bg-slate-50 min-h-screen uppercase">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="bg-white rounded-[5rem] shadow-3xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
        <div className="lg:w-2/5 bg-slate-900 p-16 text-white flex flex-col justify-between relative overflow-hidden">
           <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] -translate-y-20 translate-x-20"></div>
           <div className="relative z-10">
              <h2 className="text-7xl font-black mb-12 italic tracking-tighter leading-[0.8] uppercase">Let's <br /><span className="text-red-600">Solve It.</span></h2>
              <div className="space-y-10">
                 <div className="flex gap-5 items-start">
                    <CheckCircle className="text-red-500 shrink-0 mt-1" size={24} /> 
                    <span className="text-gray-300 font-black uppercase tracking-[0.2em] text-[10px] leading-relaxed">24-hour response <br />time guarantee</span>
                 </div>
                 <div className="flex gap-5 items-start">
                    <CheckCircle className="text-red-500 shrink-0 mt-1" size={24} /> 
                    <span className="text-gray-300 font-black uppercase tracking-[0.2em] text-[10px] leading-relaxed">Detailed custom <br />marketing audit</span>
                 </div>
              </div>
           </div>
           <div className="pt-16 border-t border-white/10 mt-16 relative z-10">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.6em] mb-4 italic leading-none">Inquiry Hub</p>
              <p className="text-2xl font-black tracking-tight uppercase italic text-white hover:text-red-600 transition-colors">hello@icanfilm.ca</p>
           </div>
        </div>
        <div className="lg:w-3/5 p-16 md:p-20">
          <form className="grid gap-12" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase text-slate-300 tracking-[0.5em] italic ml-1">Your Name</label>
                  <input type="text" className="w-full px-8 py-6 rounded-[2rem] bg-slate-50 border border-slate-100 outline-none focus:ring-8 focus:ring-red-600/5 focus:border-red-600 transition-all font-black text-slate-900 placeholder:opacity-30" placeholder="John Doe" />
               </div>
               <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase text-slate-300 tracking-[0.5em] italic ml-1">Company</label>
                  <input type="text" className="w-full px-8 py-6 rounded-[2rem] bg-slate-50 border border-slate-100 outline-none focus:ring-8 focus:ring-red-600/5 focus:border-red-600 transition-all font-black text-slate-900 placeholder:opacity-30" placeholder="Calgary Ent." />
               </div>
            </div>
            <div className="space-y-4">
               <label className="text-[10px] font-black uppercase text-slate-300 tracking-[0.5em] italic ml-1">The Pain Point</label>
               <textarea rows="5" className="w-full px-8 py-6 rounded-[2rem] bg-slate-50 border border-slate-100 outline-none focus:ring-8 focus:ring-red-600/5 focus:border-red-600 transition-all font-black text-slate-900 placeholder:opacity-30" placeholder="What's your biggest struggle?"></textarea>
            </div>
            <button className="w-full bg-red-600 text-white font-black py-8 rounded-[3rem] shadow-2xl shadow-red-600/40 uppercase tracking-[0.4em] text-sm hover:scale-[1.05] transition-all flex items-center justify-center gap-6 italic group">
              Send My Inquiry <ArrowRight size={28} className="group-hover:translate-x-3 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Application Entry ---

const App = () => {
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

  const navigateTo = (page) => {
    window.location.hash = `#/${page}`;
    setIsMenuOpen(false);
  };

  const navItemClass = (item) => {
    const isAcademyTrack = ['academy-detail', 'corporate-training', 'business-brands'].includes(activePage);
    const isActive = (item.toLowerCase() === activePage) || (item === 'Workshops' && isAcademyTrack);
    const textTheme = scrolled || activePage !== 'home' ? 'text-slate-900' : 'text-white';
    
    return `font-black text-[11px] uppercase tracking-[0.4em] transition-all hover:text-red-600 ${textTheme} ${isActive ? 'text-red-600 scale-110 italic underline decoration-red-600 underline-offset-4' : ''}`;
  };

  return (
    <div className="font-sans text-slate-900 bg-white antialiased overflow-x-hidden min-h-screen flex flex-col selection:bg-red-600 selection:text-white">
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes slow-zoom { from { transform: scale(1); } to { transform: scale(1.2); } }
        .animate-slow-zoom { animation: slow-zoom 25s ease-in-out infinite alternate; }
        .shadow-3xl { box-shadow: 0 70px 140px -20px rgba(0,0,0,0.4), 0 40px 80px -30px rgba(0,0,0,0.5); }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-[100] transition-all duration-1000 ${scrolled || activePage !== 'home' ? 'bg-white/95 backdrop-blur-3xl shadow-sm py-4' : 'bg-transparent py-12'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="cursor-pointer" onClick={() => navigateTo('home')}>
            <ICANLogo scrolled={scrolled} activePage={activePage} />
          </div>

          <div className="hidden lg:flex items-center space-x-16">
            {['Home', 'Services', 'Portfolio', 'Workshops'].map((item) => (
              <button key={item} onClick={() => navigateTo(item.toLowerCase())} className={navItemClass(item)}>{item}</button>
            ))}
            <button onClick={() => navigateTo('booking')} className="bg-red-600 text-white px-12 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.5em] shadow-2xl shadow-red-600/40 hover:scale-110 transition-all italic">Free Audit</button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={scrolled || activePage !== 'home' ? 'text-slate-900' : 'text-white'}>
              {isMenuOpen ? <X size={40} /> : <Menu size={40} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-[120] flex flex-col justify-center gap-12 text-center animate-fade-in p-12">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-10 right-10 p-6 bg-slate-50 rounded-full shadow-md"><X size={32} /></button>
            {['Home', 'Services', 'Portfolio', 'Workshops', 'Booking'].map((item) => (
              <button key={item} onClick={() => navigateTo(item.toLowerCase())} className="text-7xl font-black italic tracking-tighter hover:text-red-600 transition-colors uppercase leading-[0.8] mb-4">{item}</button>
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

      {/* High-Scale Footer */}
      <footer className="bg-slate-950 text-slate-600 py-32 border-t border-slate-900 selection:bg-red-600">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-24 mb-24">
            <div className="max-w-md">
              <ICANLogo scrolled={false} activePage="other" />
              <p className="mt-12 text-2xl font-black italic leading-[1.1] text-white/40 uppercase tracking-tighter">The only Calgary-based agency combining high-end cinematic production with ruthless social media strategy.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-24">
               <div className="space-y-10">
                  <h4 className="text-white font-black text-xs uppercase tracking-[0.5em] italic leading-none opacity-30">Ecosystem</h4>
                  <div className="flex flex-col gap-6 text-[13px] font-black uppercase tracking-[0.3em]">
                     <button onClick={() => navigateTo('home')} className="w-fit hover:text-red-600 transition-colors">Strategic Plan</button>
                     <button onClick={() => navigateTo('services')} className="w-fit hover:text-red-600 transition-colors">Retainer Menu</button>
                     <button onClick={() => navigateTo('portfolio')} className="w-fit hover:text-red-600 transition-colors">Our Proof</button>
                  </div>
               </div>
               <div className="space-y-10">
                  <h4 className="text-white font-black text-xs uppercase tracking-[0.5em] italic leading-none opacity-30">Academy</h4>
                  <div className="flex flex-col gap-6 text-[13px] font-black uppercase tracking-[0.3em] text-slate-400">
                     <button onClick={() => navigateTo('academy-detail')} className="w-fit hover:text-red-600 transition-colors">Technical Tracks</button>
                     <button onClick={() => navigateTo('corporate-training')} className="w-fit hover:text-red-600 transition-colors">B2B Coaching</button>
                  </div>
               </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-24 border-t border-slate-900 gap-12">
             <p className="text-[11px] font-black uppercase tracking-[0.8em] text-slate-800 leading-none">&copy; 2026 ICAN FILM STRATEGIC BLUEPRINT • CALGARY, ALBERTA</p>
             <div className="flex gap-16">
                <Instagram size={28} className="hover:text-red-600 cursor-pointer transition-all hover:scale-125" />
                <Linkedin size={28} className="hover:text-red-600 cursor-pointer transition-all hover:scale-125" />
                <Youtube size={28} className="hover:text-red-600 cursor-pointer transition-all hover:scale-125" />
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
