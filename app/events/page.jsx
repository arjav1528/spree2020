'use client'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'

// --- DATA ---
const STATS = [
  { value: '30+', label: 'Events' },
  { value: '15+', label: 'Sports' },
  { value: '5', label: 'Days' },
  { value: 'SAC', label: 'Main Venue' }
]

const EVENTS = {
  individual: [
    {
      name: 'Athletics 100M',
      venue: '100m track, cricket/football intersection',
      dates: 'Apr 2 (4–7pm), Apr 5 (4–5pm)',
      cat: 'athletics'
    },
    {
      name: 'Athletics 200M',
      venue: 'Cricket ground',
      dates: 'TBD — between cricket breaks',
      cat: 'athletics'
    },
    {
      name: 'Athletics 400M',
      venue: 'Cricket ground',
      dates: 'TBD — between cricket breaks',
      cat: 'athletics'
    },
    {
      name: 'Athletics 800M',
      venue: 'Cricket ground',
      dates: 'TBD — between cricket breaks',
      cat: 'athletics'
    },
    {
      name: 'Athletics 1.5k',
      venue: 'Central lawns road',
      dates: 'Apr 2 (4–6pm), Apr 3 (4–6pm), Apr 4 (3–5pm)',
      cat: 'athletics'
    },
    {
      name: 'Athletics 3k',
      venue: 'Central lawns road',
      dates: 'Apr 2 (4–6pm), Apr 3 (4–6pm), Apr 4 (3–5pm)',
      cat: 'athletics'
    },
    {
      name: 'Athletics 5k',
      venue: 'Central lawns road',
      dates: 'Apr 2 (4–6pm), Apr 3 (4–6pm), Apr 4 (3–5pm)',
      cat: 'athletics'
    },
    {
      name: 'Athletics Shot Put',
      venue: 'TBD',
      dates: 'Apr 3 (4–6pm)',
      cat: 'athletics'
    },
    {
      name: 'Squash Individual (M/W)',
      venue: 'Squash court, SAC',
      dates: 'Apr 2–4 (9am–6pm), Apr 5 (9am–11am)',
      cat: 'racket'
    },
    {
      name: 'Table Tennis Singles (M/W)',
      venue: 'Table tennis court, 2nd floor SAC',
      dates: 'Apr 2–4 (9am–12am), Apr 5 (9am–8pm)',
      cat: 'racket'
    },
    {
      name: 'Chess Blitz',
      venue: 'A side classroom, TBD',
      dates: 'Apr 3–4 (9am–7pm), Apr 5 (9am–3pm)',
      cat: 'indoor'
    },
    {
      name: 'Taekwondo (M/W)',
      venue: 'In front of SAC staircase',
      dates: 'Apr 2 or Apr 4 (9am–6pm)',
      cat: 'combat'
    },
    {
      name: 'Powerlifting (M/W)',
      venue: 'In front of SAC staircase',
      dates: 'Apr 3 (9am–6pm)',
      cat: 'combat'
    }
  ],
  team: [
    {
      name: 'Cricket (Mens)',
      venue: 'Cricket ground',
      dates: 'Apr 1 (5pm–3am), Apr 2–4 (9am–3am), Apr 5 (9am–6pm)',
      cat: 'cricket'
    },
    {
      name: 'Football (M & W)',
      venue: 'Football ground',
      dates: 'Apr 1 (5pm–3am), Apr 2–4 (9am–3am), Apr 5 (9am–6pm)',
      cat: 'football'
    },
    {
      name: 'Basketball (M & W)',
      venue: 'Basketball court, behind football field',
      dates: 'Apr 1 (5pm–12am), Apr 2–4 (9am–12am), Apr 5 (9am–6pm)',
      cat: 'basketball'
    },
    {
      name: 'Volleyball (M & W)',
      venue: 'Volleyball court, in front of football field',
      dates: 'Apr 1 (5pm–12am), Apr 2–4 (9am–12am), Apr 5 (9am–6pm)',
      cat: 'volleyball'
    },
    {
      name: 'Chess',
      venue: 'A side classroom, TBD',
      dates: 'Apr 3–4 (9am–7pm), Apr 5 (9am–3pm)',
      cat: 'indoor'
    },
    {
      name: 'Carrom',
      venue: 'Ground floor SAC',
      dates: 'Apr 3–4 (9am–7pm), Apr 5 (9am–3pm)',
      cat: 'indoor'
    },
    {
      name: 'Snooker (Mens)',
      venue: 'Carrom room, SAC',
      dates: 'Apr 3–4 (9am–7pm), Apr 5 (9am–3pm)',
      cat: 'indoor'
    },
    {
      name: 'Athletics 4×100m Relay',
      venue: 'Cricket ground',
      dates: 'TBD — between cricket breaks',
      cat: 'athletics'
    },
    {
      name: 'Athletics 4×400m Relay',
      venue: 'Cricket ground',
      dates: 'TBD — between cricket breaks',
      cat: 'athletics'
    },
    {
      name: 'Badminton (M & W)',
      venue: 'Badminton court, SAC',
      dates: 'Apr 2–4 (9am–12am), Apr 5 (9am–8pm)',
      cat: 'racket'
    },
    {
      name: 'Table Tennis (M & W)',
      venue: 'Table tennis court, 2nd floor SAC',
      dates: 'Apr 2–4 (9am–12am), Apr 5 (9am–8pm)',
      cat: 'racket'
    },
    {
      name: 'Tennis (M & W)',
      venue: 'Tennis court, adjacent to basketball court',
      dates: 'Apr 2–4 (9am–12am), Apr 5 (9am–8pm)',
      cat: 'racket'
    },
    {
      name: 'Kabaddi (M & W)',
      venue: 'Kabaddi court, near football ground',
      dates: 'Apr 2–3 (9am–6pm), Apr 4 (9am–5pm), Apr 5 (9am–11am)',
      cat: 'contact'
    },
    {
      name: 'Squash (M & W)',
      venue: 'Squash court, SAC',
      dates: 'Apr 2–4 (9am–6pm), Apr 5 (9am–11am)',
      cat: 'racket'
    }
  ],
  mixed: [
    {
      name: 'Badminton Mixed Doubles',
      venue: 'Badminton court, SAC',
      dates: 'Apr 2–4 (9am–12am), Apr 5 (9am–8pm)',
      cat: 'racket'
    },
    {
      name: 'Table Tennis Mixed Doubles',
      venue: 'Table tennis court, 2nd floor SAC',
      dates: 'Apr 2–4 (9am–12am), Apr 5 (9am–8pm)',
      cat: 'racket'
    },
    {
      name: 'Athletics 4×100m Mixed Relay',
      venue: 'Cricket ground',
      dates: 'TBD — between cricket breaks',
      cat: 'athletics'
    }
  ]
}

const CAT_COLOR = {
  athletics: '#FF6B00',
  racket: '#AA88FF',
  indoor: '#FFD700',
  combat: '#FF4466',
  cricket: '#00CC88',
  football: '#00C9FF',
  basketball: '#FF8800',
  volleyball: '#00E5CC',
  contact: '#FF6644'
}

const CAT_ICON = {
  athletics: '🏃',
  racket: '🏸',
  indoor: '♟️',
  combat: '🥊',
  cricket: '🏏',
  football: '⚽',
  basketball: '🏀',
  volleyball: '🏐',
  contact: '🤼'
}

const VENUES = [
  { name: 'Cricket Ground', sport: 'Cricket + Athletics', icon: '🏏' },
  { name: 'Football Ground', sport: 'Football', icon: '⚽' },
  { name: 'Basketball Court', sport: 'Basketball', icon: '🏀' },
  { name: 'Volleyball Court', sport: 'Volleyball', icon: '🏐' },
  { name: 'SAC (Badminton)', sport: 'Badminton', icon: '🏸' },
  { name: 'SAC (Table Tennis)', sport: 'Table Tennis', icon: '🏓' },
  { name: 'SAC (Squash)', sport: 'Squash', icon: '🎾' },
  { name: 'SAC (Carrom/Snooker)', sport: 'Carrom + Snooker', icon: '🎱' },
  { name: 'Near Football', sport: 'Kabaddi', icon: '🤼' },
  { name: 'SAC Staircase', sport: 'Taekwondo + Powerlifting', icon: '🥊' },
  { name: 'Tennis Court', sport: 'Tennis', icon: '🎾' },
  { name: 'Central Lawns Road', sport: 'Long Distance Running', icon: '🏃' }
]

export default function EventsPage () {
  const [isMounted, setIsMounted] = useState(false)
  const [tab, setTab] = useState('team')

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <main className='relative w-full min-h-screen bg-[#050200] overflow-x-hidden selection:bg-[#FF6B00] selection:text-white'>
      <Navbar />

      {/* --- EMBEDDED CSS FOR ANIMATIONS --- */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slowPan {
          0% { transform: scale(1.05) translateY(0); }
          100% { transform: scale(1.15) translateY(-2%); }
        }
        .animate-fade-in {
          animation: slideUpFade 0.4s ease-out forwards;
        }
        /* Shimmer Effect for Cards */
        .shimmer-overlay {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent);
          transform: skewX(-20deg);
          transition: 0.7s;
        }
        .group:hover .shimmer-overlay {
          left: 150%;
          transition: 0.7s ease-in-out;
        }
      `
        }}
      />

      {/* --- FIXED CINEMATIC BACKGROUND --- 
          This is hardcoded just like your About page, but uses a running track/events theme image.
      */}
      <div className='fixed inset-0 z-0 pointer-events-none'>
        {/* Deep Background Image: Stadium Floodlights */}
        <img
          src='https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=2560&auto=format&fit=crop'
          alt='Stadium Floodlights'
          className='w-full h-full object-cover opacity-40'
          style={{ animation: 'slowPan 30s infinite alternate ease-in-out' }}
        />

        {/* Dark Orange AI-Style Overlays */}
        <div className='absolute inset-0 bg-gradient-to-b from-[#050200] via-transparent to-[#050200] opacity-50' />
        <div className='absolute inset-0 bg-gradient-to-r from-[#050200] via-[#FF6B00]/10 to-[#050200] mix-blend-overlay opacity-80' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050200_100%)] opacity-50' />

        {/* Cyber-Grid Texture */}
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)]'></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className='relative z-10 w-full min-h-[90vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center'>
        <div
          className='flex flex-col items-center'
          style={{
            animation: isMounted ? `slideUpFade 1s ease-out forwards` : 'none',
            opacity: isMounted ? 0 : 1
          }}
        >
          <div className='inline-block px-4 py-1.5 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 backdrop-blur-md text-[#FF6B00] text-xs md:text-sm tracking-[4px] font-bold uppercase mb-8 shadow-[0_0_20px_rgba(255,107,0,0.2)]'>
            Schedule
          </div>

          <h1 className='text-6xl md:text-8xl lg:text-[120px] font-bold text-white leading-[0.85] tracking-wide drop-shadow-[0_0_30px_rgba(255,107,0,0.3)] mb-8 flex flex-col items-center'>
            <span
              className='relative leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/30'
              style={{ fontSize: 'clamp(80px, 15vw, 150px)' }}
            >
              EVENTS &
            </span>
            <span
              className='relative  leading-none tracking-tight -mt-2 md:-mt-4'
              style={{
                fontSize: 'clamp(80px, 15vw, 150px)',
                color: 'transparent',
                WebkitTextStroke: '2px rgba(255,255,255,0.65)'
              }}
            >
              SCHEDULE
            </span>
          </h1>

          <p className='max-w-2xl text-white/60 text-lg md:text-xl font-medium leading-relaxed'>
            29 events across 12 sports · April 1–5, 2026 · BITS Goa
          </p>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section className='relative z-20 max-w-6xl mx-auto px-6 -mt-10 mb-24'>
        <div
          className='w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/10'
          style={{
            animation: isMounted
              ? `slideUpFade 0.8s ease-out forwards 0.3s`
              : 'none',
            opacity: isMounted ? 0 : 1
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className='flex flex-col items-center justify-center text-center'
            >
              <div className='text-5xl md:text-6xl font-bold text-white tracking-widest drop-shadow-[0_0_15px_rgba(255,107,0,0.4)] mb-2'>
                {stat.value}
              </div>
              <div className='text-[10px] md:text-xs text-[#FF6B00] tracking-[3px] uppercase font-bold'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- EVENTS LIST SECTION --- */}
      <section className='relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-20'>
        {/* Section Headers */}
        <div className='flex flex-col mb-12'>
          <div className='flex items-center gap-4 mb-4'>
            <div className='w-12 h-[1px] bg-[#FF6B00]' />
            <div className='text-[11px] font-bold text-[#FFD700] tracking-[5px] uppercase drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]'>
              Full Schedule
            </div>
          </div>
          <h2 className='text-5xl md:text-7xl font-bold text-white leading-none tracking-wide drop-shadow-lg'>
            ALL SPREE 2026 EVENTS
          </h2>
        </div>

        {/* --- TABS --- */}
        <div className='flex flex-wrap gap-3 md:gap-4 mb-10'>
          {[
            { key: 'team', label: 'Team Events', count: EVENTS.team.length },
            {
              key: 'individual',
              label: 'Individual Events',
              count: EVENTS.individual.length
            },
            { key: 'mixed', label: 'Mixed Events', count: EVENTS.mixed.length }
          ].map(({ key, label, count }) => {
            const isActive = tab === key
            return (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`
                  px-6 md:px-8 py-3.5 rounded-full cursor-pointer border font-bold text-xs md:text-sm tracking-[2px] transition-all duration-300 flex items-center uppercase
                  ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FF6B00] to-[#FFD700] text-[#1a0a00] border-transparent shadow-[0_0_20px_rgba(255,107,0,0.4)] scale-105'
                      : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
                  }
                `}
              >
                {label}
                <span
                  className={`ml-3 rounded-full px-2 py-0.5 text-[10px] md:text-[11px] font-black ${
                    isActive
                      ? 'bg-black/20 text-black'
                      : 'bg-white/10 text-white'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* --- EVENT CARDS --- */}
        <div className='flex flex-col gap-4' key={tab}>
          {EVENTS[tab].map((ev, i) => {
            const cc = CAT_COLOR[ev.cat] || '#FF6B00'
            return (
              <div
                key={i}
                className='group relative overflow-hidden flex flex-col sm:flex-row sm:items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:px-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 animate-fade-in'
                style={{ animationDelay: `${i * 0.05}s`, opacity: 0 }}
              >
                {/* Shimmer Effect */}
                <div className='shimmer-overlay z-0 pointer-events-none' />

                {/* Neon Category Left Bar */}
                <div
                  className='absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 group-hover:w-2'
                  style={{ backgroundColor: cc, boxShadow: `0 0 15px ${cc}` }}
                />

                {/* Icon & Details Wrapper */}
                <div className='flex items-center gap-5 flex-1 z-10'>
                  <div className='text-3xl md:text-4xl w-10 text-center drop-shadow-md'>
                    {CAT_ICON[ev.cat]}
                  </div>
                  <div className='flex-1'>
                    <div className='text-2xl md:text-3xl font-bold tracking-wide text-white mb-1 group-hover:text-[#FF6B00] transition-colors'>
                      {ev.name}
                    </div>
                    <div className='text-white/60 text-[11px] sm:text-xs font-medium flex items-center gap-2 mb-1'>
                      <span className='text-[#FFD700]'>📍</span> {ev.venue}
                    </div>
                    <div className='text-white/50 text-[10px] sm:text-[11px] font-medium flex items-center gap-2'>
                      <span className='text-[#FFD700]'>🗓</span> {ev.dates}
                    </div>
                  </div>
                </div>

                {/* Glowing Category Tag */}
                <div
                  className='self-start sm:self-center border rounded-full px-4 py-2 text-[10px] sm:text-xs tracking-[2px] font-bold uppercase whitespace-nowrap ml-14 sm:ml-0 z-10 transition-colors duration-300 group-hover:bg-[#FF6B00] group-hover:text-[#1a0a00] group-hover:border-transparent'
                  style={{
                    background: `${cc}15`,
                    borderColor: `${cc}50`,
                    color: cc,
                    boxShadow: `0 0 15px ${cc}20`
                  }}
                >
                  {ev.cat}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* --- VENUES SECTION --- */}
      <section className='relative z-10 w-full bg-black/40 backdrop-blur-2xl py-24 border-t border-white/5'>
        <div className='max-w-7xl mx-auto px-6'>
          {/* Section Headers */}
          <div className='flex flex-col mb-12 text-center md:text-left'>
            <div className='flex items-center justify-center md:justify-start gap-4 mb-4'>
              <div className='w-12 h-[1px] bg-[#FF6B00]' />
              <div className='text-[11px] font-bold text-[#FFD700] tracking-[5px] uppercase drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]'>
                Locations
              </div>
            </div>
            <h2 className='text-5xl md:text-7xl font-bold text-white leading-none tracking-wide drop-shadow-lg'>
              WHERE IT ALL HAPPENS
            </h2>
          </div>

          {/* Venue Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5'>
            {VENUES.map((v, i) => (
              <div
                key={i}
                className='group relative overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 flex items-center gap-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B00]/50 hover:bg-white/10 hover:shadow-[0_10px_40px_rgba(255,107,0,0.15)]'
              >
                {/* Shimmer Effect */}
                <div className='shimmer-overlay z-0 pointer-events-none' />

                <div className='relative z-10 text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300'>
                  {v.icon}
                </div>
                <div className='relative z-10'>
                  <div className='text-2xl font-bold tracking-wide text-white group-hover:text-[#FFD700] transition-colors'>
                    {v.name}
                  </div>
                  <div className='text-white/50 text-xs tracking-wider uppercase mt-1'>
                    {v.sport}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CUSTOM FOOTER --- */}
      <footer className='relative z-10 w-full bg-[#030100] py-12 border-t border-white/5 text-center px-6'>
        <div className='flex justify-center items-center gap-2 mb-6 opacity-50 hover:opacity-100 transition-opacity cursor-pointer'>
          <div className='w-6 h-6 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FFD700] flex items-center justify-center'>
            <span className='text-black font-bold text-sm leading-none mt-0.5'>
              S
            </span>
          </div>
          <span className='text-xl font-bold tracking-widest text-white mt-1'>
            SPREE '26
          </span>
        </div>
        <div className='text-[10px] text-white/30 tracking-[3px] uppercase'>
          © 2026 BITS Pilani K.K. Birla Goa Campus. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
