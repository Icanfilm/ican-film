import React from 'react';
import { 
  Clapperboard, 
  MousePointer2, 
  Quote, 
  Camera, 
  Layers, 
  Rocket, 
  Lightbulb, 
  Zap, 
  CheckCircle, 
  PieChart, 
  Clock, 
  TrendingUp, 
  TrendingDown, 
  Timer, 
  Award, 
  Building2, 
  Target, 
  Mic, 
  MonitorPlay, 
  Briefcase, 
  Share2, 
  Smartphone,
  ShieldCheck, 
  BarChart3, 
  Users, 
  PlayCircle,
  Film
} from 'lucide-react';

/**
 * ICAN FILM - SHARED UI COMPONENTS
 * Provides standardized Icons, Logos, and Video Players for the modular platform.
 */

// --- Unified Icon Helper ---
export const Icon = ({ name, size = 24, className = "" }) => {
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
    award: Award,
    building2: Building2,
    target: Target,
    mic: Mic,
    monitorPlay: MonitorPlay,
    briefcase: Briefcase,
    share2: Share2,
    smartphone: Smartphone,
    shieldCheck: ShieldCheck,
    barChart3: BarChart3,
    users: Users,
    play: PlayCircle,
    film: Film
  };
  
  const LucideIcon = icons[name];
  if (!LucideIcon) return null;
  
  return <LucideIcon size={size} className={className} />;
};

// --- Custom High-Scale Brand Logo ---
export const ICANLogo = ({ scrolled, activePage }) => {
  const isDark = scrolled || activePage !== 'home';
  return (
    <div className="flex items-center gap-3 group transition-all duration-500 leading-none">
      <div className={`w-12 h-12 border-4 ${isDark ? 'border-red-600' : 'border-white'} flex items-center justify-center font-black italic text-2xl transition-all group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 shadow-sm`}>
        I
      </div>
      <div className="flex flex-col leading-none text-left italic">
        <span className={`text-3xl font-black tracking-tighter ${isDark ? 'text-slate-900' : 'text-white'}`}>ICAN</span>
        <span className={`text-[10px] font-black tracking-[0.4em] uppercase ${isDark ? 'text-red-600' : 'text-red-500'}`}>Film Agency</span>
      </div>
    </div>
  );
};

// --- Multi-Platform Video Component ---
export const VideoLoop = ({ type, id, title }) => {
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
    <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] shadow-2xl bg-slate-900 border border-white/5 group leading-none">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-90 contrast-110"
        poster={`https://image.mux.com/${id}/thumbnail.jpg?width=1200&time=2`}
      >
        <source src={`https://stream.mux.com/${id}/medium.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent group-hover:opacity-0 transition-opacity"></div>
    </div>
  );
};

export default ICANLogo;
