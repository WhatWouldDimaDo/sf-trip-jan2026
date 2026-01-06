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
  Info,
  LayoutGrid,
  List,
  Cpu,
  Binary,
  Globe
} from "lucide-react";
import { sfEvents, siteMeta, type SFEvent } from "./data";

export default function SFItinerary() {
  const [filter, setFilter] = useState("All");
  const [view, setView] = useState<"grid" | "schedule" | "poster">("grid");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isFestivalMode, setIsFestivalMode] = useState(false);
  const [showMethodology, setShowMethodology] = useState(false);
  const { scrollY } = useScroll();
  
  const headerY = useTransform(scrollY, [0, 300], [0, -50]);
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const days = ["All", "Fri Jan 23", "Sat Jan 24", "Sun Jan 25"];
  
  const filteredEvents = filter === "All" 
    ? sfEvents 
    : sfEvents.filter(event => event.date === filter);

  return (
    <div className={`min-h-screen transition-colors duration-700 ${isFestivalMode ? 'bg-[#0f0502]' : 'bg-black'} text-white relative selection:bg-orange-500/30 font-sans overflow-x-hidden`}>
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <motion.div 
        animate={{ 
          filter: isFestivalMode ? 'sepia(0.3) saturate(1.2)' : 'grayscale(0.5) contrast(1.1)',
          scale: isFestivalMode ? 1.02 : 1
        }}
        className="fixed inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url('https://snipstock.com/wp-content/uploads/2024/12/ghostshot1_Realistic_cyberpunk_drone_shot_image_of_the_sanfrans_b5c64383-8fb8-41f0-a0d5-58f05e9813a2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className={`fixed inset-0 z-0 bg-gradient-to-b ${isFestivalMode ? 'from-orange-950/40 via-black to-black' : 'from-zinc-900/40 via-black to-black'}`} />

      <main className="relative z-10 container mx-auto px-4 py-8 md:py-16 max-w-6xl">

        <div className="flex flex-wrap items-center justify-between gap-6 mb-12">
          <div className="flex gap-2">
            <button 
              onClick={() => setShowMethodology(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors"
            >
              <Cpu className="w-3.5 h-3.5 text-cyan-500" />
              The Methodology
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsFestivalMode(!isFestivalMode)}
              className={`
                flex items-center gap-3 px-6 py-2 rounded-full border transition-all duration-500 group
                ${isFestivalMode 
                  ? 'bg-orange-600 border-orange-400 text-white font-black shadow-[0_0_30px_rgba(234,88,12,0.3)]' 
                  : 'bg-white/5 border-white/10 text-zinc-400 hover:border-white/30'}
              `}
            >
              <span className="text-[10px] uppercase tracking-widest">
                {isFestivalMode ? 'Festival Mode: ON' : 'Festival Mode'}
              </span>
              <Flame className={`w-4 h-4 ${isFestivalMode ? 'text-orange-200 animate-pulse' : ''}`} />
            </button>
          </div>
        </div>

        {view === "poster" || isFestivalMode ? (
          <FestivalPoster events={sfEvents} />
        ) : (
          <motion.header 
            style={{ y: headerY, opacity: headerOpacity }}
            className="mb-20 text-center space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-[10px] font-black uppercase tracking-[0.3em]"
            >
              <Globe className="w-3.5 h-3.5" />
              San Francisco • Winter 2026
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20"
            >
              CITY<br/>RHYTHMS
            </motion.h1>
          </motion.header>
        )}

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 border-y border-white/5 py-8">
          <nav className="flex gap-1 p-1 bg-white/5 rounded-full border border-white/10">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setFilter(day)}
                className={`
                  px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all relative
                  ${filter === day ? 'text-black' : 'text-zinc-500 hover:text-white'}
                `}
              >
                {filter === day && (
                  <motion.div
                    layoutId="active-tab"
                    className={`absolute inset-0 rounded-full ${isFestivalMode ? 'bg-orange-500' : 'bg-white'}`}
                  />
                )}
                <span className="relative z-10">{day === "All" ? "All" : day.split(' ').slice(-2).join(' ')}</span>
              </button>
            ))}
          </nav>

          <div className="flex gap-2 p-1 bg-white/5 rounded-full border border-white/10">
            <button 
              onClick={() => setView("grid")}
              className={`p-2.5 rounded-full transition-colors ${view === "grid" ? (isFestivalMode ? 'bg-orange-500 text-black' : 'bg-white text-black') : 'text-zinc-500'}`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setView("schedule")}
              className={`p-2.5 rounded-full transition-colors ${view === "schedule" ? (isFestivalMode ? 'bg-orange-500 text-black' : 'bg-white text-black') : 'text-zinc-500'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {view === "grid" ? (
            <motion.div 
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
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
            </motion.div>
          ) : (
            <ScheduleView events={filteredEvents} isFestivalMode={isFestivalMode} />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showMethodology && (
            <MethodologyModal onClose={() => setShowMethodology(false)} />
          )}
        </AnimatePresence>

      </main>

      <footer className="relative z-10 py-24 px-4 border-t border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="space-y-4 text-center md:text-left">
            <div className="text-white font-black uppercase tracking-[0.5em] text-sm">
              CREATED BY FOURTH OWL DIGITAL
            </div>
            <div className="text-zinc-500 text-[10px] uppercase tracking-widest">
              Created for the San Francisco 2026 Expedition
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-zinc-600 text-[9px] uppercase tracking-[0.3em] mb-2 font-bold">Sponsored By</div>
              <div className="text-white font-black text-xl italic tracking-tighter">{siteMeta.sponsoredBy}</div>
            </div>
            <div className="text-center">
              <div className="text-zinc-600 text-[9px] uppercase tracking-[0.3em] mb-2 font-bold">Fueled By</div>
              <div className="text-white font-black text-xl italic tracking-tighter">{siteMeta.fueledBy}</div>
            </div>
          </div>

          <div className="text-zinc-700 text-[9px] uppercase tracking-[0.2em] max-w-xs text-center md:text-right">
            © 2026 SF Trip Itinerary • Watson & Feldman Productions. All rights reserved. 
            {isFestivalMode && " No refunds on vibe-based tickets."}
          </div>
        </div>
      </footer>
    </div>
  );
}

function FestivalPoster({ events }: { events: SFEvent[] }) {
  const fri = events.filter(e => e.date === "Fri Jan 23");
  const sat = events.filter(e => e.date === "Sat Jan 24");
  const sun = events.filter(e => e.date === "Sun Jan 25");

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mb-24 relative p-12 md:p-20 border-[12px] border-orange-600 bg-orange-500 text-black overflow-hidden shadow-[0_0_100px_rgba(234,88,12,0.2)]"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      <div className="relative z-10 text-center space-y-12">
        <div className="space-y-2">
          <div className="text-[12px] font-black uppercase tracking-[0.6em] mb-2">Feldman & Watson Present</div>
          <h1 className="text-[15vw] leading-[0.8] font-black tracking-tighter uppercase italic border-y-4 border-black py-4">
            SF TRIP 2026
          </h1>
          <div className="text-xl font-bold uppercase tracking-widest mt-4">Jan 23rd — Jan 26th • San Francisco, CA</div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-black uppercase border-b-2 border-black inline-block pb-1">Friday</h3>
            <div className="space-y-2">
              {fri.map(e => (
                <div key={e.id} className={`text-lg font-bold leading-tight ${e.isSpecialGuest ? 'text-white bg-black px-2' : ''}`}>
                  {e.artist.toUpperCase()}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-black uppercase border-b-2 border-black inline-block pb-1">Saturday</h3>
            <div className="space-y-2">
              {sat.map(e => (
                <div key={e.id} className={`text-lg font-bold leading-tight ${e.id === 'deep-dish' ? 'text-4xl' : ''}`}>
                  {e.artist.toUpperCase()}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-black uppercase border-b-2 border-black inline-block pb-1">Sunday</h3>
            <div className="space-y-2">
              {sun.map(e => (
                <div key={e.id} className="text-lg font-bold leading-tight">
                  {e.artist.toUpperCase()}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 flex justify-center gap-12 text-[10px] font-black uppercase tracking-widest">
          <span>NO REFUNDS</span>
          <span>•</span>
          <span>STRICT VIBE CHECK</span>
          <span>•</span>
          <span>DUMPLINGS FUELED</span>
        </div>
      </div>
    </motion.div>
  );
}

function ScheduleView({ events, isFestivalMode }: { events: SFEvent[], isFestivalMode: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="overflow-x-auto"
    >
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-white/10 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
            <th className="py-6 px-4">Date / Time</th>
            <th className="py-6 px-4">Artist</th>
            <th className="py-6 px-4">Venue</th>
            <th className="py-6 px-4">Category</th>
            <th className="py-6 px-4 text-right">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {events.map((event) => (
            <tr key={event.id} className="group hover:bg-white/[0.02] transition-colors">
              <td className="py-6 px-4 font-bold text-sm text-zinc-400">{event.date}</td>
              <td className={`py-6 px-4 font-black text-xl italic tracking-tight ${isFestivalMode ? 'text-orange-400' : 'text-white'}`}>
                {event.artist}
              </td>
              <td className="py-6 px-4">
                <div className="text-sm font-bold text-white mb-1">{event.venue}</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest">{event.address}</div>
              </td>
              <td className="py-6 px-4">
                <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/10 bg-white/5 text-zinc-400`}>
                  {event.category}
                </span>
              </td>
              <td className="py-6 px-4 text-right">
                <a 
                  href={event.tickets}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${isFestivalMode ? 'bg-orange-600 text-white' : 'bg-white text-black'}`}
                >
                  Tickets <ExternalLink className="w-3 h-3" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

function MethodologyModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-[#0a0a0a] border border-cyan-500/30 w-full max-w-4xl p-8 md:p-12 rounded-3xl relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/grid.png')] pointer-events-none" />
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-12">
            <div>
              <div className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.5em] mb-2 flex items-center gap-2">
                <Binary className="w-4 h-4" />
                System Schematic v4.0.2
              </div>
              <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase">The Methodology</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Zap className="w-6 h-6 text-zinc-500" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <div className="text-cyan-500 text-[10px] font-black uppercase tracking-widest">Active Orchestrator Metrics</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-zinc-500 text-[9px] uppercase tracking-widest mb-1">Compute Agents</div>
                    <div className="text-2xl font-black text-white">1 Agent</div>
                  </div>
                  <div>
                    <div className="text-zinc-500 text-[9px] uppercase tracking-widest mb-1">Background Tasks</div>
                    <div className="text-2xl font-black text-white">0 Active</div>
                  </div>
                  <div>
                    <div className="text-zinc-500 text-[9px] uppercase tracking-widest mb-1">Thought Latency</div>
                    <div className="text-2xl font-black text-white">15% Thinking</div>
                  </div>
                  <div>
                    <div className="text-zinc-500 text-[9px] uppercase tracking-widest mb-1">System Load</div>
                    <div className="text-2xl font-black text-white italic">Nominal</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold text-xs">01</div>
                  <div className="text-sm font-bold text-white uppercase tracking-widest">Parallel Orchestration</div>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed ml-12 font-mono">
                  Deployed multi-threaded agents for concurrent vault analysis and real-time web verification.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold text-xs">02</div>
                  <div className="text-sm font-bold text-white uppercase tracking-widest">Data Triangulation</div>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed ml-12 font-mono">
                  Cross-referenced 19hz.info, SF Sketchfest sched, and direct venue API scans for high-fidelity schedule mapping.
                </p>
              </div>
            </div>

            <div className="relative aspect-square border-2 border-dashed border-cyan-500/20 rounded-full flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-cyan-500/10 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-12 border-2 border-cyan-500/5 rounded-full border-t-cyan-500/40"
              />
              <div className="text-center space-y-2">
                <Cpu className="w-12 h-12 text-cyan-500 mx-auto animate-pulse" />
                <div className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em]">Optimized</div>
              </div>
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-4 text-cyan-500 text-[8px] font-mono">NODE_ALPHA_04</div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-black px-4 text-cyan-500 text-[8px] font-mono">RECURSION_LVL_9</div>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
            <div className="text-[8px] font-mono text-zinc-600">SYSLOG: 0x44F_SCHED_SUCCESS</div>
            <button 
              onClick={onClose}
              className="px-8 py-3 bg-cyan-500 text-black text-[10px] font-black uppercase tracking-widest hover:bg-cyan-400 transition-colors"
            >
              Confirm Blueprint
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
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
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`
        glass rounded-[2rem] overflow-hidden flex flex-col group transition-all duration-500 ring-1
        ${isFestivalMode 
          ? 'hover:border-orange-500/50 ring-orange-500/10 shadow-xl shadow-orange-950/20' 
          : 'hover:border-white/30 ring-white/5 shadow-2xl shadow-black/50'}
      `}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image 
          src={event.image} 
          alt={event.artist}
          fill
          unoptimized
          className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 ${isFestivalMode ? 'opacity-90' : 'opacity-80'}`} />
        
        <div className="absolute top-6 left-6 flex flex-wrap gap-2">
          <span className={`
            glass px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-2 ring-1
            ${isFestivalMode ? 'border-orange-500/30 text-orange-400' : 'border-white/20 text-white'}
          `}>
            {getCategoryIcon(event.category)}
            {isFestivalMode ? 'VIP Exclusive' : event.category}
          </span>
          {event.isSpecialGuest && (
            <span className="bg-white text-black px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">
              Special Guest
            </span>
          )}
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <motion.div layout>
            <h2 className={`text-3xl md:text-5xl font-black tracking-tighter mb-2 transition-colors duration-500 uppercase italic leading-none
              ${isFestivalMode ? 'group-hover:text-orange-400 text-white' : 'group-hover:text-cyan-400 text-white'}
            `}>
              {isFestivalMode ? (event.festivalTitle || event.artist) : event.artist}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-zinc-300 text-[9px] font-bold uppercase tracking-[0.2em]">
              <span className="flex items-center gap-1.5">
                <Calendar className={`w-3.5 h-3.5 ${isFestivalMode ? 'text-orange-500' : 'text-cyan-500'}`} />
                {event.date}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className={`w-3.5 h-3.5 ${isFestivalMode ? 'text-orange-500' : 'text-cyan-500'}`} />
                {event.venue}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow relative overflow-hidden">
        <div className="flex flex-wrap gap-2 mb-6">
          <span className={`
            px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] bg-gradient-to-r shadow-xl border
            ${getVibeColor(event.vibe)}
          `}>
            {event.vibe}
          </span>
          {event.price && (
             <span className="px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] bg-white/5 border border-white/10 text-zinc-300">
               {event.price}
             </span>
          )}
        </div>
        
        <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
          {event.bio}
        </p>

        {isFestivalMode && event.festivalPerk && (
          <div className="mb-8 p-4 rounded-2xl bg-orange-500/5 border border-orange-500/10 flex items-start gap-3">
            <Info className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
            <div>
              <div className="text-[9px] font-black uppercase tracking-widest text-orange-500 mb-0.5">VIP Perk</div>
              <div className="text-xs text-orange-200/50 italic">{event.festivalPerk}</div>
            </div>
          </div>
        )}

        {event.address && (
          <div className="mb-6 flex items-center gap-2 text-zinc-600 text-[10px] font-mono">
            <MapPin className="w-3 h-3" />
            {event.address}
          </div>
        )}

        <div className="mt-auto flex gap-3">
          {event.youtubeId && (
            <button 
              onClick={onToggle}
              className={`
                p-4 rounded-2xl transition-all border
                ${isExpanded 
                  ? 'bg-white text-black border-white' 
                  : 'bg-white/5 text-white border-white/10 hover:bg-white/10'}
              `}
            >
              <Youtube className="w-4 h-4" />
            </button>
          )}
          <a 
            href={event.tickets}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex-grow flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all active:scale-95 border
              ${isFestivalMode 
                ? 'bg-orange-600 text-white border-orange-400 hover:bg-orange-500 shadow-[0_0_20px_rgba(234,88,12,0.3)]' 
                : 'bg-white text-black border-white hover:bg-zinc-200'}
            `}
          >
            Claim Spot <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <AnimatePresence>
          {isExpanded && event.youtubeId && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: 24 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              className="overflow-hidden"
            >
              <div className={`aspect-video rounded-2xl overflow-hidden border shadow-2xl ${isFestivalMode ? 'border-orange-500/30' : 'border-white/20'}`}>
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
