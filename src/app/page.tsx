"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { 
  Calendar, 
  Music, 
  Ticket, 
  Youtube, 
  MapPin, 
  ExternalLink,
  Sparkles,
  Club,
  Zap,
  Coffee,
  Flame,
  Crown,
  Info
} from "lucide-react";
import { sfEvents, type SFEvent } from "./data";

export default function SFItinerary() {
  const [filter, setFilter] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isFestivalMode, setIsFestivalMode] = useState(false);
  const { scrollY } = useScroll();
  
  const headerY = useTransform(scrollY, [0, 300], [0, -50]);
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const days = ["All", "Fri Jan 23", "Sat Jan 24", "Sun Jan 25"];
  
  const filteredEvents = filter === "All" 
    ? sfEvents 
    : sfEvents.filter(event => event.date === filter);

  return (
    <div className={`min-h-screen transition-colors duration-700 ${isFestivalMode ? 'bg-orange-950/20' : 'bg-black'} text-white relative selection:bg-cyan-500/30 font-sans overflow-x-hidden`}>
      <motion.div 
        animate={{ 
          filter: isFestivalMode ? 'sepia(0.5) hue-rotate(-30deg) saturate(1.5)' : 'grayscale(0.5) contrast(1.2)',
          scale: isFestivalMode ? 1.05 : 1
        }}
        className="fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url('https://snipstock.com/wp-content/uploads/2024/12/ghostshot1_Realistic_cyberpunk_drone_shot_image_of_the_sanfrans_b5c64383-8fb8-41f0-a0d5-58f05e9813a2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className={`fixed inset-0 z-0 bg-gradient-to-b ${isFestivalMode ? 'from-orange-500/10 via-black/60 to-black' : 'from-black/20 via-black/40 to-black'}`} />

      <main className="relative z-10 container mx-auto px-4 py-12 md:py-20 max-w-5xl">

        <div className="flex justify-end mb-8">
          <button 
            onClick={() => setIsFestivalMode(!isFestivalMode)}
            className={`
              flex items-center gap-3 px-6 py-2.5 rounded-full border transition-all duration-500 group
              ${isFestivalMode 
                ? 'bg-orange-500 border-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.4)] text-black font-black' 
                : 'bg-white/5 border-white/10 text-zinc-400 hover:border-white/30'}
            `}
          >
            <span className="text-[10px] uppercase tracking-widest">
              {isFestivalMode ? 'Festival Mode Active' : 'Enable Festival Mode'}
            </span>
            <div className={`p-1 rounded-full transition-colors ${isFestivalMode ? 'bg-black text-orange-500' : 'bg-white/10 group-hover:bg-white/20'}`}>
              <Flame className={`w-4 h-4 ${isFestivalMode ? 'fill-current' : ''}`} />
            </div>
          </button>
        </div>

        <motion.header 
          style={{ y: headerY, opacity: headerOpacity }}
          className="mb-16 text-center space-y-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`inline-block px-4 py-1.5 rounded-full border transition-all duration-500 ${
              isFestivalMode 
                ? 'border-orange-500/50 bg-orange-500/20 text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.2)]' 
                : 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400'
            } text-[10px] font-black uppercase tracking-[0.25em] mb-4`}
          >
            {isFestivalMode ? 'Feldman & Watson Presents' : 'San Francisco • Jan 2026'}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-6xl md:text-9xl font-black tracking-tighter uppercase italic leading-none transition-all duration-700 ${
              isFestivalMode 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]' 
                : 'text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40'
            }`}
          >
            {isFestivalMode ? 'Parody Tour' : 'City Rhythms'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-xl mx-auto text-lg font-light leading-relaxed"
          >
            {isFestivalMode 
              ? "The exclusive Jan 2026 trip experience featuring Feldman's Fyre and Watson-ella. No refunds, only vibes."
              : "A curated selection of the most electric events happening across the city. Choose your vibe and dive in."}
          </motion.p>
        </motion.header>

        <div className="flex justify-center mb-16 sticky top-8 z-50">
          <nav className={`
            glass p-1.5 rounded-full flex gap-1 shadow-2xl ring-1 transition-all duration-500
            ${isFestivalMode ? 'ring-orange-500/30 shadow-orange-900/20' : 'ring-white/10 shadow-black/80'}
          `}>
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setFilter(day)}
                className={`
                  px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 relative group
                  ${filter === day ? 'text-black' : 'text-zinc-400 hover:text-white'}
                `}
              >
                {filter === day && (
                  <motion.div
                    layoutId="active-tab"
                    className={`absolute inset-0 rounded-full ${isFestivalMode ? 'bg-orange-500' : 'bg-white'}`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">
                  {day === "All" ? "All" : (isFestivalMode ? day.split(' ').slice(-1) : day.split(' ').slice(-2).join(' '))}
                </span>
              </button>
            ))}
          </nav>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, index) => (
              <EventCard 
                key={event.id} 
                event={event} 
                index={index}
                isExpanded={expandedId === event.id}
                onToggle={() => setExpandedId(expandedId === event.id ? null : event.id)}
                isFestivalMode={isFestivalMode}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
      
      <footer className="relative z-10 py-20 text-center space-y-4">
        <div className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em]">
          © 2026 SF Trip Itinerary • Watson & Feldman Productions
        </div>
        {isFestivalMode && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-900/40 text-[9px] italic"
          >
            * Feldman's Fyre is a legally distinct entity from any other failed festivals.
          </motion.div>
        )}
      </footer>
    </div>
  );
}

function EventCard({ 
  event, 
  index,
  isExpanded, 
  onToggle,
  isFestivalMode 
}: { 
  event: SFEvent, 
  index: number,
  isExpanded: boolean, 
  onToggle: () => void,
  isFestivalMode: boolean
}) {
  const getCategoryIcon = (cat: string) => {
    if (isFestivalMode) return <Crown className="w-4 h-4" />;
    switch (cat.toLowerCase()) {
      case 'concert': return <Music className="w-4 h-4" />;
      case 'club': return <Club className="w-4 h-4" />;
      case 'comedy': return <Sparkles className="w-4 h-4" />;
      case 'dance': return <Zap className="w-4 h-4" />;
      default: return <Coffee className="w-4 h-4" />;
    }
  };

  const getVibeColor = (vibe: string) => {
    if (isFestivalMode) return 'from-orange-600 to-red-800 border-orange-400/50';
    const vibes: Record<string, string> = {
      'Melodic Bass': 'from-blue-500 to-cyan-500',
      'Techno Legend': 'from-zinc-700 to-zinc-950',
      'Tech House': 'from-orange-500 to-red-600',
      'Melodic Techno': 'from-indigo-500 to-purple-600',
      'Tribute/Comedy': 'from-pink-500 to-rose-600',
      'Progressive House': 'from-emerald-500 to-teal-600',
      'Dubstep': 'from-yellow-400 to-orange-600',
      'Synth-pop': 'from-fuchsia-500 to-purple-700',
      'Pop Punk': 'from-red-600 to-black border-red-900',
      'Conscious Dance': 'from-green-400 to-emerald-700',
      'Indie/Emo': 'from-sky-400 to-blue-700',
    };
    return vibes[vibe] || 'from-zinc-500 to-zinc-800';
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`
        glass rounded-[2.5rem] overflow-hidden flex flex-col group transition-all duration-500 ring-1
        ${isFestivalMode 
          ? 'hover:border-orange-500/50 ring-orange-500/10 shadow-xl shadow-orange-950/20' 
          : 'hover:border-white/30 ring-white/5 shadow-2xl shadow-black/50'}
      `}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image 
          src={event.image} 
          alt={event.artist}
          fill
          unoptimized
          className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-500 ${isFestivalMode ? 'opacity-90' : 'opacity-80'}`} />
        
        <div className="absolute top-6 left-6 flex gap-2">
          <span className={`
            glass px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-2 ring-1
            ${isFestivalMode ? 'border-orange-500/30 text-orange-400' : 'border-white/20 text-white'}
          `}>
            {getCategoryIcon(event.category)}
            {isFestivalMode ? 'VIP Exclusive' : event.category}
          </span>
        </div>

        <div className="absolute bottom-8 left-8 right-8">
          <motion.div layout>
            <h2 className={`text-3xl md:text-4xl font-black tracking-tighter mb-3 transition-colors duration-500 uppercase italic leading-none
              ${isFestivalMode ? 'group-hover:text-orange-400 text-white' : 'group-hover:text-cyan-400 text-white'}
            `}>
              {isFestivalMode ? (event.festivalTitle || event.artist) : event.artist}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-zinc-300 text-[10px] font-bold uppercase tracking-[0.2em]">
              <span className="flex items-center gap-2">
                <Calendar className={`w-3.5 h-3.5 ${isFestivalMode ? 'text-orange-500' : 'text-cyan-500'}`} />
                {event.date}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span className="flex items-center gap-2">
                <MapPin className={`w-3.5 h-3.5 ${isFestivalMode ? 'text-orange-500' : 'text-cyan-500'}`} />
                {event.venue}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="p-8 md:p-10 flex flex-col flex-grow relative overflow-hidden">
        {isFestivalMode && (
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Flame className="w-32 h-32 rotate-12" />
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-8">
          <span className={`
            px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] bg-gradient-to-r shadow-xl border
            ${getVibeColor(event.vibe)}
          `}>
            {event.vibe}
          </span>
          {isFestivalMode && event.festivalPerk && (
            <motion.span 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] bg-white text-black flex items-center gap-2"
            >
              <Crown className="w-3 h-3" />
              VIP Perk Unlocked
            </motion.span>
          )}
        </div>
        
        <div className="relative">
          <p className="text-zinc-400 text-sm font-light leading-relaxed mb-8 flex-grow">
            {event.bio}
          </p>

          {isFestivalMode && event.festivalPerk && (
            <motion.div 
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="mb-8 p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-start gap-3"
            >
              <Info className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-orange-500 mb-1">VIP Access Perk</div>
                <div className="text-xs text-orange-200/70 italic font-medium">"{event.festivalPerk}"</div>
              </div>
            </motion.div>
          )}
        </div>

        <div className="mt-auto flex flex-col sm:flex-row gap-4">
          {event.youtubeId ? (
            <button 
              onClick={onToggle}
              className={`
                flex-grow flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all
                ${isExpanded 
                  ? 'bg-white text-black ring-4 ring-white/20' 
                  : (isFestivalMode 
                      ? 'bg-white/5 text-white hover:bg-orange-500/10 hover:border-orange-500/30 border border-white/10'
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/10')}
              `}
            >
              <Youtube className={`w-4 h-4 ${isExpanded ? 'fill-black' : (isFestivalMode ? 'text-orange-500' : 'text-white')}`} />
              {isExpanded ? 'Collapse' : 'Preview'}
            </button>
          ) : (
             <div className="flex-grow flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] bg-white/5 text-zinc-600 border border-white/5 cursor-not-allowed">
              <Youtube className="w-4 h-4 opacity-20" />
              No Access
            </div>
          )}
          <a 
            href={event.tickets}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex-grow flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-all active:scale-95 border
              ${isFestivalMode 
                ? 'bg-orange-600 text-white border-orange-400 hover:bg-orange-500 shadow-[0_0_25px_rgba(234,88,12,0.4)]' 
                : 'bg-cyan-600 text-white border-cyan-400 hover:bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.3)]'}
            `}
          >
            <Ticket className="w-4 h-4" />
            Claim Spot
            <ExternalLink className="w-3.5 h-3.5 opacity-50" />
          </a>
        </div>

        <AnimatePresence>
          {isExpanded && event.youtubeId && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: 32 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              className="overflow-hidden"
            >
              <div className={`aspect-video rounded-[2rem] overflow-hidden border shadow-2xl ${isFestivalMode ? 'border-orange-500/30' : 'border-white/20'}`}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${event.youtubeId}?autoplay=1&rel=0`}
                  title={`${event.artist} preview`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
