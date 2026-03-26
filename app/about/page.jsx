'use client'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar' // Using the global Navbar we just built!

const STATS = [
  { value: '1,200+', label: 'Athletes' },
  { value: '15+', label: 'Disciplines' },
  { value: '20+', label: 'Institutions' },
  { value: '5', label: 'Days of Glory' }
]

const TIMELINE = [
  {
    day: 'DAY -1',
    date: 'APR 1',
    title: 'League Matches Begin',
    desc: 'The competition ignites as teams battle to set the tone.'
  },
  {
    day: 'DAY 0',
    date: 'APR 2',
    title: 'Opening Ceremony',
    desc: 'A grand torch lighting marks the official beginning.'
  },
  {
    day: 'DAY 1',
    date: 'APR 3',
    title: 'Quarter-Finals',
    desc: 'Only the strongest advance as the stakes rise.'
  },
  {
    day: 'DAY 2',
    date: 'APR 4',
    title: 'Semi-Finals',
    desc: 'Clashes of titans for a place in the final.'
  },
  {
    day: 'DAY 3',
    date: 'APR 5',
    title: 'Grand Finals',
    desc: 'Champions are crowned in the ultimate showdown.'
  }
]

export default function AboutPage () {
  const [isMounted, setIsMounted] = useState(false)

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
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .shimmer-overlay {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
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
          This stays fixed while the content scrolls over it, creating a deep 3D parallax effect.
      */}
      <div className='fixed inset-0 z-0 pointer-events-none'>
        {/* Deep Arena Image */}
        <img
          src='https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2560&auto=format&fit=crop'
          alt='Arena Background'
          className='w-full h-full object-cover opacity-50'
          style={{ animation: 'slowPan 30s infinite alternate ease-in-out' }}
        />
        {/* Dark Orange AI-Style Overlays */}
        <div className='absolute inset-0 bg-gradient-to-b from-[#050200] via-transparent to-[#050200] opacity-90' />
        <div className='absolute inset-0 bg-gradient-to-r from-[#050200] via-[#FF6B00]/5 to-[#050200] mix-blend-multiply' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050200_80%)] opacity-90' />

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
          <div className='inline-block px-4 py-1.5 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 backdrop-blur-md text-[#FF6B00] font-mono text-xs md:text-sm tracking-[4px] font-bold uppercase mb-8 shadow-[0_0_20px_rgba(255,107,0,0.2)]'>
            About The Festival
          </div>

          <h1 className=' text-6xl md:text-8xl lg:text-[120px] text-white leading-[0.85] tracking-wide drop-shadow-[0_0_30px_rgba(255,107,0,0.3)] mb-8 flex flex-col items-center'>
            <span
              className='leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/30'
              style={{ fontSize: 'clamp(80px, 15vw, 150px)' }}
            >
              UNLEASH
            </span>
            <span className="relative  leading-none tracking-tight -mt-2 md:-mt-4"
              style={{
                fontSize: "clamp(80px, 15vw, 150px)",
                color: "transparent",
                WebkitTextStroke: "2px rgba(255,255,255,0.65)",
              }}>
              THE UNTAMED
            </span>
          </h1>

          <p className='max-w-2xl text-white/60 text-lg md:text-xl font-medium leading-relaxed'>
            The largest inter-college multi-sport festival in the region. Three
            days of fierce competition, electric atmosphere, and moments that
            define careers.
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
              <div className=' text-5xl md:text-6xl text-white tracking-widest drop-shadow-[0_0_15px_rgba(255,107,0,0.4)] mb-2'>
                {stat.value}
              </div>
              <div className='font-mono text-[10px] md:text-xs text-[#FF6B00] tracking-[3px] uppercase font-bold'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- THE STORY SECTION --- */}
      <section className='relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          {/* Text Content */}
          <div className='flex flex-col'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='w-12 h-[1px] bg-[#FF6B00]' />
              <div className='text-[11px] font-mono font-bold text-[#FFD700] tracking-[5px] uppercase'>
                The Legacy
              </div>
            </div>
            <h2 className='text-5xl md:text-7xl text-white leading-none tracking-wide mb-8'>
              WHERE CHAMPIONS <br /> ARE MADE
            </h2>
            <div className='space-y-6 text-white/60 text-lg md:text-xl font-medium leading-relaxed'>
              <p>
                SPREE began with a simple belief: that athletic excellence
                deserves a stage as grand as the talent itself. From a handful
                of sports in its first edition, we've grown into a defining
                moment on every college athlete's calendar.
              </p>
              <p>
                Every year, institutions bring their finest athletes to compete
                across 15 disciplines. The rivalry is fierce. The friendships
                forged here last a lifetime. Welcome to the arena.
              </p>
            </div>
          </div>

          {/* Video Container */}
          <div className='w-full aspect-video rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(255,107,0,0.2)] bg-black border border-white/10 relative group'>
            <iframe
              className='absolute top-0 left-0 w-full h-full z-10'
              src='https://www.youtube.com/embed/I1qs4mMreFk?autoplay=1&mute=1&loop=1&playlist=I1qs4mMreFk&controls=0&showinfo=0&modestbranding=1'
              title='SPREE Aftermovie'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
            {/* Edge Glow */}
            <div className='absolute inset-0 rounded-3xl shadow-[inset_0_0_50px_rgba(255,107,0,0.3)] pointer-events-none z-20' />
          </div>
        </div>

        {/* Full-Width Theme Banner */}
        <div className='group mt-20 md:mt-32 w-full bg-gradient-to-br from-[#FF6B00] to-[#FFD700] rounded-[32px] p-10 md:p-14 text-[#1a0a00] shadow-[0_20px_60px_rgba(255,107,0,0.3)] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 relative overflow-hidden cursor-default transition-transform duration-500 hover:scale-[1.02]'>
          {/* Shimmer Effect */}
          <div className='shimmer-overlay z-0 pointer-events-none' />
          {/* Background Texture Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />

          <div className='flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 flex-1 relative z-10'>
            <div
              className='text-6xl md:text-7xl drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12'
              style={{ animation: 'float 6s ease-in-out infinite' }}
            >
              🔥
            </div>
            <div>
              <div className='font-mono text-[10px] md:text-xs tracking-[4px] font-extrabold mb-2 opacity-80 uppercase'>
                THIS YEAR'S THEME
              </div>
              <h3 className=' text-5xl md:text-6xl leading-none tracking-wide text-black drop-shadow-sm'>
                UNLEASH THE UNTAMED
              </h3>
            </div>
          </div>

          <div className='flex-1 md:max-w-md relative z-10'>
            <p className='text-base md:text-lg font-bold leading-relaxed opacity-80 m-0 border-l-4 border-black/20 pl-6 md:pl-8'>
              Like a fire that cannot be contained, the untamed athlete breaks
              barriers, defies limits, and leaves everything on the field.
            </p>
          </div>
        </div>
      </section>

      {/* --- TIMELINE SCHEDULE SECTION --- */}
      <section className='relative z-10 w-full bg-black/60 backdrop-blur-2xl py-24 border-t border-white/5'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <div className='text-[11px] md:text-xs font-mono font-bold text-[#FF6B00] tracking-[5px] uppercase mb-4 drop-shadow-[0_0_8px_rgba(255,107,0,0.5)]'>
              The Schedule
            </div>
            <h2 className=' text-5xl md:text-7xl text-white leading-none tracking-wide drop-shadow-lg'>
              FIVE DAYS OF GLORY
            </h2>
          </div>

          <div className='flex flex-wrap justify-center gap-6'>
            {TIMELINE.map((item, i) => {
              // Highlight Opening Ceremony & Grand Finals
              const isHighlight =
                item.title === 'Opening Ceremony' ||
                item.title === 'Grand Finals'

              return (
                <div
                  key={i}
                  className={`group relative overflow-hidden w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1rem)] rounded-3xl p-8 lg:p-10 transition-all duration-500 ease-out hover:-translate-y-3 ${
                    isHighlight
                      ? 'bg-gradient-to-br from-[#FF6B00] to-[#FFD700] shadow-[0_20px_60px_rgba(255,107,0,0.3)] border-none'
                      : 'bg-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/10 hover:border-[#FF6B00]/50 hover:bg-white/10'
                  }`}
                >
                  {isHighlight && (
                    <div className='shimmer-overlay z-0 pointer-events-none' />
                  )}

                  <div className='relative z-10 flex justify-between items-start mb-8'>
                    <div
                      className={`text-6xl md:text-7xl leading-none transition-transform duration-500 group-hover:scale-110 group-hover:origin-top-left ${
                        isHighlight
                          ? 'text-black/20'
                          : 'text-[#FF6B00]/20 group-hover:text-[#FF6B00]/60'
                      }`}
                    >
                      {`0${i + 1}`}
                    </div>
                    <div className='text-right'>
                      <div
                        className={`font-mono text-[10px] md:text-xs font-bold tracking-widest uppercase ${
                          isHighlight ? 'text-black/80' : 'text-[#FFD700]'
                        }`}
                      >
                        {item.day}
                      </div>
                      <div
                        className={`font-mono text-[10px] mt-1 font-bold tracking-widest uppercase ${
                          isHighlight ? 'text-black/50' : 'text-white/40'
                        }`}
                      >
                        {item.date}
                      </div>
                    </div>
                  </div>

                  <h3
                    className={`relative z-10 text-3xl md:text-4xl tracking-wide mb-4 transition-colors duration-300 ${
                      isHighlight ? 'text-[#1a0a00]' : 'text-white'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`relative z-10 text-base font-medium leading-relaxed ${
                      isHighlight ? 'text-[#1a0a00]/80' : 'text-white/50'
                    }`}
                  >
                    {item.desc}
                  </p>

                  {!isHighlight && (
                    <div className='absolute bottom-0 left-0 h-1 w-0 bg-[#FF6B00] transition-all duration-500 group-hover:w-full' />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* --- CUSTOM FOOTER --- */}
      <footer className='relative z-10 w-full bg-[#030100] py-12 border-t border-white/5 text-center px-6'>
        <div className='flex justify-center items-center gap-2 mb-6 opacity-50 hover:opacity-100 transition-opacity cursor-pointer'>
          <div className='w-6 h-6 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FFD700] flex items-center justify-center'>
            <span className=' text-black text-sm leading-none mt-0.5'>S</span>
          </div>
          <span className=' text-xl tracking-widest text-white mt-1'>
            SPREE '26
          </span>
        </div>
        <div className='font-mono text-[10px] text-white/30 tracking-[3px] uppercase'>
          © 2026 BITS Pilani K.K. Birla Goa Campus. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
