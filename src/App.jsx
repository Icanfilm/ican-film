import React, { useState, useEffect } from 'react';
import { 
  X, Menu, ArrowRight, Clapperboard, Clock, Timer, Rocket, 
  Layers, Camera, TrendingUp, TrendingDown, MousePointer2, 
  Quote, CheckCircle, Smartphone, Lightbulb, Mic, MonitorPlay, 
  Zap, Briefcase, PieChart, Target, Share2, Instagram, Linkedin, Youtube 
} from 'lucide-react';

// --- SHARED UI COMPONENTS ---

const ICANLogo = ({ scrolled, activePage }) => {
  const isDark = scrolled || activePage !== 'home';
  return (
    <div className="flex items-center gap-2 group">
      <div className="relative">
        <div className={`w-12 h-12 border-4 ${isDark ? 'border-red-600' : 'border-white'} flex items-center justify-center font-black italic text-2xl transition-all group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600`}>
          I
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 animate-pulse"></div>
      </div>
      <div className="flex flex-col leading-none">
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

// --- PAGES ---

const Home = ({ navigateTo }) => (
  <div className="animate-fade-in">
    <section className="relative h-screen min-h-[900px] flex items-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10"></div>
      <div className="absolute inset-0 z-0 overflow-hidden">
         <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=90&w=2400&auto=format&fit=crop" 
          alt="Cinematic Camera" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom brightness-[0.4]"
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
          <p className="text-2xl md:text-4xl text-gray-200 mb-14 max-w-4xl font-medium uppercase italic">
            Stop letting your events die when the lights go out. We turn live experiences into <span className="text-white font-black underline decoration-red-600 underline-offset-8">30 days of high-ROI content.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-8">
            <button onClick={() => navigateTo('booking')} className="bg-red-600 hover:bg-red-700 text-white px-14 py-8 rounded-[2.5rem] font-black text-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-5 uppercase tracking-widest italic group">
              Start Free Audit <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button onClick={() => navigateTo('services')} className="bg-white/10 hover:bg-white text-white hover:text-slate-900 backdrop-blur-xl border border-white/20 px-14 py-8 rounded-[2.5rem] font-black text-2xl transition-all flex items-center justify-center gap-5 uppercase tracking-widest">
              See Packages
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const Services = ({ navigateTo }) => (
  <div className="animate-fade-in pt-48 pb-24 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-8xl font-black italic uppercase mb-20">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100 group hover:bg-red-600 transition-all duration-500">
          <Camera size={64} className="text-red-600 group-hover:text-white mb-8" />
          <h3 className="text-4xl font-black uppercase mb-6 group-hover:text-white">Event Capture</h3>
          <p className="text-xl text-slate-500 group-hover:text-red-100 italic">High-end production for live summits, galas, and corporate events.</p>
        </div>
        <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100 group hover:bg-slate-900 transition-all duration-500">
          <Layers size={64} className="text-red-600 mb-8" />
          <h3 className="text-4xl font-black uppercase mb-6 text-slate-900 group-hover:text-white">The Content Engine</h3>
          <p className="text-xl text-slate-500 group-hover:text-slate-400 italic">Repurposing one event into 30+ assets for social dominance.</p>
        </div>
      </div>
    </div>
  </div>
);

const Portfolio = () => (
  <div className="animate-fade-in pt-48 pb-24 bg-slate-900 text-white min-h-screen">
    <div className="container mx-auto px-6">
      <h2 className="text-8xl font-black italic uppercase mb-20">Selected Proof</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="aspect-video bg-slate-800 rounded-[2rem] overflow-hidden group relative">
            <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-2xl font-black italic uppercase">View Case Study</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Workshops = ({ navigateTo }) => (
  <div className="animate-fade-in pt-40 pb-24 uppercase font-black tracking-tighter bg-white">
    <div className="container mx-auto px-6 text-center lg:text-left">
      <div className="text-center max-w-5xl mx-auto mb-40">
        <div className="inline-block bg-red-100 text-red-600 px-8 py-2 rounded-full text-[11px] mb-10 tracking-[0.5em] italic">ICAN Film Academy</div>
        <h1 className="text-8xl md:text-[12rem] text-slate-900 mb-10 leading-[0.8] italic underline decoration-slate-100 underline-offset-[20px]">PRACTICAL TRAINING.</h1>
        <p className="text-xl text-slate-600 italic max-w-3xl mx-auto normal-case tracking-normal">Outcome-based training programs designed for businesses and creators.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-12 mb-40">
        {[
          { id: 'business-strategy', title: 'Business Strategy', icon: 'pieChart', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800' },
          { id: 'corporate-inhouse', title: 'In-House Training', icon: 'building2', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800' },
          { id: 'production-bootcamp', title: 'Media Bootcamp', icon: 'film', img: 'https://images.unsplash.com/photo-1535016120720-40c646bebbdc?q=80&w=800' }
        ].map((track) => (
          <div key={track.id} className="relative group rounded-[5rem] overflow-hidden h-[750px] flex flex-col justify-end p-12 shadow-2xl transition-all hover:-translate-y-4">
            <img src={track.img} className="absolute inset-0 w-full h-full object-cover brightness-[0.4] group-hover:scale-110 transition-transform duration-1000" alt={track.title} />
            <div className="relative z-10">
              <IconHelper name={track.icon === 'building2' ? 'briefcase' : track.icon} className="text-red-600 mb-8" size={64} />
              <h3 className="text-5xl text-white italic mb-10">{track.title}</h3>
              <button onClick={() => navigateTo(track.id)} className="w-full py-8 bg-red-600 text-white rounded-[2rem] text-[11px] tracking-widest hover:bg-white hover:text-slate-900 transition-all">ENTER TRACK</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Strategy = ({ navigateTo }) => (
  <div className="animate-fade-in pt-40 pb-24 font-black tracking-tighter uppercase">
    <div className="container mx-auto px-6 max-w-7xl">
      <button onClick={() => navigateTo('workshops')} className="text-red-600 flex items-center gap-3 mb-16 tracking-[0.4em] text-[10px] italic"><ArrowLeft size={20} /> Back to Academy</button>
      <h1 className="text-9xl mb-12 italic underline decoration-red-600 underline-offset-8">Strategy.</h1>
      <p className="text-4xl text-slate-300 italic mb-20">Plan 30 days in 60 minutes.</p>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100">
          <PieChart className="text-red-600 mb-8" size={64} />
          <h3 className="text-4xl mb-6 italic">Content Buckets</h3>
          <p className="normal-case tracking-normal text-xl text-slate-500 font-bold italic">Organize wins into repeatable high-performance tracks.</p>
        </div>
        <div className="bg-slate-50 p-16 rounded-[4rem] border border-slate-100">
          <Clock className="text-red-600 mb-8" size={64} />
          <h3 className="text-4xl mb-6 italic">The 60-Min Map</h3>
          <p className="normal-case tracking-normal text-xl text-slate-500 font-bold italic">Step-by-step logic to plan one month in one sitting.</p>
        </div>
      </div>
    </div>
  </div>
);

const InHouse = ({ navigateTo }) => (
  <div className="animate-fade-in pt-40 pb-24 font-black tracking-tighter uppercase">
    <div className="container mx-auto px-6 max-w-7xl">
      <button onClick={() => navigateTo('workshops')} className="text-red-600 flex items-center gap-3 mb-16 tracking-[0.4em] text-[10px] italic"><ArrowLeft size={20} /> Back to Academy</button>
      <h1 className="text-9xl mb-12 italic underline decoration-slate-900 underline-offset-8">In-House.</h1>
      <p className="text-4xl text-slate-300 italic mb-20">Train your team to capture wins.</p>
      <div className="grid md:grid-cols-4 gap-8">
        {['Smartphone Cinema', 'Office Lighting', 'Audio Mastery', 'Team Workflow'].map(f => (
          <div key={f} className="bg-slate-900 p-12 rounded-[3rem] text-center group hover:bg-red-600 transition-all">
            <Zap className="text-red-600 group-hover:text-white mx-auto mb-6" size={48} />
            <p className="text-white text-xs tracking-widest leading-none">{f}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Bootcamp = ({ navigateTo }) => (
  <div className="animate-fade-in pt-40 pb-24 font-black tracking-tighter uppercase">
    <div className="container mx-auto px-6 max-w-7xl">
      <button onClick={() => navigateTo('workshops')} className="text-red-600 flex items-center gap-4 mb-16 tracking-[0.5em] text-[10px] italic leading-none"><ArrowLeft size={24} /> Back to Academy</button>
      <h1 className="text-8xl md:text-[15rem] mb-12 leading-[0.75] italic">Academy <span className="text-red-600">8 Weeks.</span></h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1,2,3,4,5,6,7,8].map(week => (
          <div key={week} className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100">
            <span className="text-red-600 text-6xl opacity-20 italic">0{week}</span>
            <h4 className="text-3xl mt-4 italic">Module {week}</h4>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Booking = () => (
  <div className="animate-fade-in pt-48 pb-24 bg-slate-50 min-h-screen font-black tracking-tighter uppercase">
    <div className="container mx-auto px-6 max-w-7xl">
      <div className="bg-white rounded-[6rem] shadow-3xl overflow-hidden flex flex-col lg:flex-row">
        <div className="lg:w-2/5 bg-slate-900 p-20 text-white flex flex-col justify-between relative overflow-hidden">
          <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-20 brightness-50" alt="Studio" />
          <div className="relative z-10">
            <h2 className="text-8xl italic leading-[0.8] mb-16 uppercase">LET'S <br /><span className="text-red-600">SCALE.</span></h2>
            <div className="space-y-12">
              <div className="flex gap-8"><CheckCircle className="text-red-600" size={40} /><span className="tracking-[0.4em] text-[11px] leading-relaxed">24-HOUR RESPONSE GUARANTEE</span></div>
              <div className="flex gap-8"><CheckCircle className="text-red-600" size={40} /><span className="tracking-[0.4em] text-[11px] leading-relaxed">CUSTOM MARKETING AUDIT</span></div>
            </div>
          </div>
          <div className="relative z-10 pt-20 border-t border-white/10">
            <p className="text-4xl italic text-white hover:text-red-600 cursor-pointer">HELLO@ICANFILM.CA</p>
          </div>
        </div>
        <div className="lg:w-3/5 p-20 md:p-32">
          <form className="grid gap-16" onSubmit={e => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-12">
              <input type="text" className="w-full px-12 py-10 rounded-[3rem] bg-slate-50 border-none outline-none focus:ring-4 focus:ring-red-600/10 font-black italic text-2xl uppercase" placeholder="Full Name" />
              <input type="text" className="w-full px-12 py-10 rounded-[3rem] bg-slate-50 border-none outline-none focus:ring-4 focus:ring-red-600/10 font-black italic text-2xl uppercase" placeholder="Business" />
            </div>
            <textarea rows="4" className="w-full px-12 py-10 rounded-[3rem] bg-slate-50 border-none outline-none focus:ring-4 focus:ring-red-600/10 font-black italic text-2xl uppercase" placeholder="Primary Struggle"></textarea>
            <button className="w-full bg-red-600 text-white py-12 rounded-[4rem] text-2xl italic tracking-[0.5em] hover:scale-105 transition-all">SEND INQUIRY</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

// --- MAIN APP ENTRY ---

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
    const isAcademyTrack = ['business-strategy', 'corporate-inhouse', 'production-bootcamp', 'workshops'].includes(activePage);
    const isActive = (item.toLowerCase() === activePage) || (item === 'Workshops' && isAcademyTrack);
    const textTheme = scrolled || activePage !== 'home' ? 'text-slate-900' : 'text-white';
    return `font-black text-[12px] uppercase tracking-[0.5em] transition-all hover:text-red-600 ${textTheme} ${isActive ? 'text-red-600 scale-110 italic underline decoration-red-600 decoration-4 underline-offset-8' : ''}`;
  };

  return (
    <div className="font-sans text-slate-900 bg-white antialiased min-h-screen flex flex-col tracking-tighter selection:bg-red-600 selection:text-white">
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        @keyframes slow-zoom { from { transform: scale(1); } to { transform: scale(1.05); } }
        .animate-slow-zoom { animation: slow-zoom 15s ease-in-out infinite alternate; }
        .shadow-3xl { box-shadow: 0 40px 100px -20px rgba(0,0,0,0.15); }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-[100] transition-all duration-700 ${scrolled || activePage !== 'home' ? 'bg-white/95 backdrop-blur-md py-6 shadow-sm' : 'bg-transparent py-12'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="cursor-pointer" onClick={() => navigateTo('home')}><ICANLogo scrolled={scrolled} activePage={activePage} /></div>
          <div className="hidden lg:flex items-center space-x-12">
            {['Home', 'Services', 'Portfolio', 'Workshops'].map((item) => (
              <button key={item} onClick={() => navigateTo(item.toLowerCase())} className={navItemClass(item)}>{item}</button>
            ))}
            <button onClick={() => navigateTo('booking')} className="bg-red-600 text-white px-12 py-4 rounded-[1.5rem] font-black text-[12px] uppercase tracking-[0.5em] hover:scale-105 transition-all italic">Free Audit</button>
          </div>
          <button onClick={() => setIsMenuOpen(true)} className={`lg:hidden ${scrolled || activePage !== 'home' ? 'text-slate-900' : 'text-white'}`}><Menu size={40} /></button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[120] flex flex-col justify-center gap-10 text-center animate-fade-in p-10 overflow-y-auto">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-12 right-12 p-4 bg-slate-50 rounded-full"><X size={32} /></button>
          {['Home', 'Services', 'Portfolio', 'Workshops', 'Booking'].map(item => (
            <button key={item} onClick={() => navigateTo(item.toLowerCase())} className="text-6xl font-black italic tracking-tighter uppercase hover:text-red-600">{item}</button>
          ))}
        </div>
      )}

      {/* Content Switcher */}
      <main className="flex-grow">
        {activePage === 'home' && <Home navigateTo={navigateTo} />}
        {activePage === 'services' && <Services navigateTo={navigateTo} />}
        {activePage === 'portfolio' && <Portfolio navigateTo={navigateTo} />}
        {activePage === 'workshops' && <Workshops navigateTo={navigateTo} />}
        {activePage === 'business-strategy' && <Strategy navigateTo={navigateTo} />}
        {activePage === 'corporate-inhouse' && <InHouse navigateTo={navigateTo} />}
        {activePage === 'production-bootcamp' && <Bootcamp navigateTo={navigateTo} />}
        {activePage === 'booking' && <Booking navigateTo={navigateTo} />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-500 py-48 border-t border-slate-900 selection:bg-red-600 uppercase font-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-24">
            <div className="text-center lg:text-left">
              <ICANLogo scrolled={false} activePage="other" />
              <p className="mt-12 text-2xl italic leading-[1] text-white/5 tracking-tighter max-w-xl">CALGARY'S SPECIALIST AGENCY COMBINING CINEMATIC PRODUCTION WITH RUTHLESS CONTENT STRATEGY.</p>
            </div>
            <div className="flex gap-24 text-[12px] tracking-[0.4em]">
               <div className="flex flex-col gap-6"><button onClick={() => navigateTo('services')}>Menu</button><button onClick={() => navigateTo('portfolio')}>Proof</button></div>
               <div className="flex flex-col gap-6"><button onClick={() => navigateTo('workshops')}>Tracks</button><button onClick={() => navigateTo('booking')}>Inquire</button></div>
            </div>
          </div>
          <div className="text-center pt-24 mt-24 border-t border-white/5 opacity-20 text-[10px] tracking-[1.5em] italic">© 2026 ICAN FILM • CALGARY ALBERTA</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
