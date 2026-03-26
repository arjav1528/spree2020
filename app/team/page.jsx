'use client'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'

const STATS = [
  { value: '20+', label: 'Organisers' },
  { value: '20+', label: 'Coaches' },
  { value: '200+', label: 'Volunteers' },
  { value: '10+', label: 'Years' }
]

// Adjusted colors to be slightly more vibrant (neon) for dark mode compatibility
const DEPT_COLORS = {
  Core: '#FF6B00',
  Operations: '#00E5FF',
  Creative: '#B366FF',
  DevSoc: '#00FFCC',
  DOSM: '#FFB800',
  DOFAM: '#FF4D6D'
}

const TEAM = [
  {
    name: 'Arjun Mehta',
    role: 'Festival Director',
    dept: 'Core',
    photo: 'https://i.pravatar.cc/150?u=Arjun',
    mobile: '+91 98765 43210'
  },
  {
    name: 'Priya Sharma',
    role: 'Events Head',
    dept: 'Core',
    photo: 'https://i.pravatar.cc/150?u=Priya',
    mobile: '+91 98765 43211'
  },
  {
    name: 'Karan Patel',
    role: 'Logistics Lead',
    dept: 'Operations',
    photo: 'https://i.pravatar.cc/150?u=Karan',
    mobile: '+91 98765 43212'
  },
  {
    name: 'Sneha Iyer',
    role: 'Design Lead',
    dept: 'Creative',
    photo: 'https://i.pravatar.cc/150?u=Sneha',
    mobile: '+91 98765 43213'
  },
  {
    name: 'Rohan Gupta',
    role: 'Tech Lead',
    dept: 'DevSoc',
    photo: 'https://i.pravatar.cc/150?u=Rohan',
    mobile: '+91 98765 43214'
  },
  {
    name: 'Ananya Singh',
    role: 'Marketing Head',
    dept: 'DOSM',
    photo: 'https://i.pravatar.cc/150?u=Ananya',
    mobile: '+91 98765 43215'
  },
  {
    name: 'Dev Nair',
    role: 'Sponsorship Head',
    dept: 'DOSM',
    photo: 'https://i.pravatar.cc/150?u=Dev',
    mobile: '+91 98765 43216'
  },
  {
    name: 'Lakshmi Rao',
    role: 'Sports Coordinator',
    dept: 'Core',
    photo: 'https://i.pravatar.cc/150?u=Lakshmi',
    mobile: '+91 98765 43217'
  },
  {
    name: 'Aditya Kumar',
    role: 'Finance Head',
    dept: 'DOFAM',
    photo: 'https://i.pravatar.cc/150?u=Aditya',
    mobile: '+91 98765 43218'
  },
  {
    name: 'Nisha Verma',
    role: 'Volunteer Lead',
    dept: 'Operations',
    photo: 'https://i.pravatar.cc/150?u=Nisha',
    mobile: '+91 98765 43219'
  },
  {
    name: 'Rahul Das',
    role: 'Media Head',
    dept: 'DOSM',
    photo: 'https://i.pravatar.cc/150?u=Rahul',
    mobile: '+91 98765 43220'
  },
  {
    name: 'Kavya Menon',
    role: 'Content Lead',
    dept: 'Creative',
    photo: 'https://i.pravatar.cc/150?u=Kavya',
    mobile: '+91 98765 43221'
  }
]

const DEPTS = [...new Set(TEAM.map(m => m.dept))]

export default function TeamPage () {
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
        @keyframes floatIn {
          0% { opacity: 0; transform: translateY(40px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .team-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `
        }}
      />

      {/* --- FIXED CINEMATIC BACKGROUND --- */}
      <div className='fixed inset-0 z-0 pointer-events-none'>
        {/* Intense Team Huddle Image */}
        <img
          src='https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=2560&auto=format&fit=crop'
          alt='Team Huddle Background'
          className='w-full h-full object-cover opacity-60'
          style={{ animation: 'slowPan 35s infinite alternate ease-in-out' }}
        />
        {/* Dark Orange AI-Style Overlays */}
        <div className='absolute inset-0 bg-gradient-to-b from-[#050200] via-transparent to-[#050200] opacity-90' />
        <div className='absolute inset-0 bg-gradient-to-r from-[#050200] via-[#FF6B00]/5 to-[#050200] mix-blend-multiply' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050200_80%)] opacity-50' />

        {/* Cyber-Grid Texture */}
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_10%,transparent_100%)]'></div>
      </div>

      {/* --- HERO SECTION --- */}
      <section className='relative z-10 w-full min-h-[70vh] flex flex-col items-center justify-center px-6 pt-32 pb-10 text-center'>
        <div
          className='flex flex-col items-center'
          style={{
            animation: isMounted ? `slideUpFade 1s ease-out forwards` : 'none',
            opacity: isMounted ? 0 : 1
          }}
        >
          <div className='inline-block px-4 py-1.5 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 backdrop-blur-md text-[#FF6B00] font-mono text-xs md:text-sm tracking-[4px] font-bold uppercase mb-8 shadow-[0_0_20px_rgba(255,107,0,0.2)]'>
            The People Behind The Arena
          </div>

          <h1 className='text-6xl md:text-8xl lg:text-[120px] text-white leading-[0.85] tracking-wide drop-shadow-[0_0_30px_rgba(255,107,0,0.3)] mb-8 flex flex-col items-center'>
            <span
              className='relative leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/30'
              style={{ fontSize: 'clamp(80px, 15vw, 150px)' }}
            >
              OUR
            </span>
            <span
              className='relative  leading-none tracking-tight -mt-2 md:-mt-4'
              style={{
                fontSize: 'clamp(80px, 15vw, 150px)',
                color: 'transparent',
                WebkitTextStroke: '2px rgba(255,255,255,0.65)'
              }}
            >
              TEAM
            </span>
          </h1>

          <p className='max-w-2xl text-white/60 text-lg md:text-xl font-medium leading-relaxed'>
            Meet the passionate organizers, coaches, and volunteers who make
            Spree happen every single year.
          </p>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section className='relative z-20 max-w-6xl mx-auto px-6 mb-24'>
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
              className='flex flex-col items-center justify-center text-center group'
            >
              <div className='text-5xl md:text-6xl text-white tracking-widest drop-shadow-[0_0_15px_rgba(255,107,0,0.4)] mb-2 group-hover:scale-105 transition-transform'>
                {stat.value}
              </div>
              <div className='font-mono text-[10px] md:text-xs text-[#FF6B00] tracking-[3px] uppercase font-bold'>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- TEAM GRID SECTION --- */}
      <section className='relative z-10 max-w-[1400px] mx-auto px-6 pb-32'>
        {/* Section Header */}
        <div
          className='flex items-center gap-4 mb-8 justify-center'
          style={{
            opacity: isMounted ? 1 : 0,
            transition: 'opacity 1s ease-in 0.5s'
          }}
        >
          <div className='flex-1 max-w-xs h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00]/50 to-[#FF6B00]/50' />
          <div className='text-xs md:text-sm tracking-[5px] font-mono font-bold text-[#FFD700] uppercase text-center drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]'>
            MEET THE SQUAD
          </div>
          <div className='flex-1 max-w-xs h-[1px] bg-gradient-to-l from-transparent via-[#FF6B00]/50 to-[#FF6B00]/50' />
        </div>

        {/* Dept Legend (Dark Theme Version) */}
        <div
          className='flex flex-wrap justify-center gap-3 mb-16'
          style={{
            opacity: isMounted ? 1 : 0,
            transition: 'opacity 1s ease-in 0.7s'
          }}
        >
          {DEPTS.map(d => (
            <div
              key={d}
              className='flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-full px-4 py-2 border border-white/10'
            >
              <div
                className='w-2.5 h-2.5 rounded-full shadow-[0_0_8px_currentColor]'
                style={{ background: DEPT_COLORS[d], color: DEPT_COLORS[d] }}
              />
              <span className='text-xs font-mono text-white/70 tracking-[2px] uppercase font-bold'>
                {d}
              </span>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {TEAM.map((person, i) => {
            const dc = DEPT_COLORS[person.dept] || '#FF6B00'
            return (
              <div
                key={i}
                className='team-card group relative bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 text-center flex flex-col items-center cursor-pointer overflow-hidden border border-white/10 z-10'
                style={{
                  animation: isMounted
                    ? `floatIn 0.6s ease-out forwards ${i * 0.05}s`
                    : 'none',
                  opacity: isMounted ? 0 : 1
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.boxShadow = `0 20px 50px ${dc}33`
                  e.currentTarget.style.borderColor = `${dc}80`
                  e.currentTarget.style.backgroundColor = `rgba(255,255,255,0.08)`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.3)`
                  e.currentTarget.style.borderColor = `rgba(255,255,255,0.1)`
                  e.currentTarget.style.backgroundColor = `rgba(255,255,255,0.05)`
                }}
              >
                {/* Subtle Glow inside the card based on Dept Color */}
                <div
                  className='absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none'
                  style={{
                    background: `radial-gradient(circle at top, ${dc}, transparent 70%)`
                  }}
                />

                {/* Avatar with Neon Gradient Ring */}
                <div
                  className='relative w-32 h-32 mb-6 rounded-full p-[3px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3'
                  style={{
                    background: `linear-gradient(135deg, ${dc}, transparent, ${dc}88)`,
                    boxShadow: `0 0 20px ${dc}44`
                  }}
                >
                  <img
                    src={person.photo}
                    alt={`${person.name} profile`}
                    className='w-full h-full object-cover rounded-full border-[3px] border-[#050200] bg-[#1a0a00]'
                    loading='lazy'
                  />
                </div>

                {/* Dept Tag */}
                <div
                  className='relative z-10 inline-block rounded-full px-3 py-1 text-[10px] tracking-[3px] font-mono font-bold uppercase mb-4 transition-colors duration-300'
                  style={{
                    background: `${dc}15`,
                    border: `1px solid ${dc}40`,
                    color: dc,
                    textShadow: `0 0 10px ${dc}88`
                  }}
                >
                  {person.dept}
                </div>

                {/* Details */}
                <div className='relative z-10 font-bold text-xl md:text-2xl text-white leading-tight mb-2 tracking-wide group-hover:text-white transition-colors'>
                  {person.name}
                </div>
                <div
                  className='relative z-10 text-[11px] md:text-xs font-mono tracking-[2px] font-bold opacity-80 mb-6 uppercase'
                  style={{ color: dc }}
                >
                  {person.role}
                </div>

                {/* Mobile Number Button */}
                <a
                  href={`tel:${person.mobile.replace(/\s/g, '')}`}
                  className='mt-auto relative z-10 inline-flex items-center gap-2 text-[13px] font-mono font-semibold tracking-wider text-white/50 hover:text-white transition-all bg-black/40 hover:bg-black/80 border border-white/5 hover:border-white/20 px-4 py-2 rounded-xl'
                  onClick={e => e.stopPropagation()}
                >
                  <svg
                    className='w-4 h-4 text-[#FF6B00]'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                  {person.mobile}
                </a>
              </div>
            )
          })}
        </div>
      </section>

      {/* --- CUSTOM FOOTER --- */}
      <footer className='relative z-10 w-full bg-[#030100] py-12 border-t border-white/5 text-center px-6'>
        <div className='flex justify-center items-center gap-2 mb-6 opacity-50 hover:opacity-100 transition-opacity cursor-pointer group'>
          <div className='w-6 h-6 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FFD700] flex items-center justify-center transition-transform group-hover:rotate-180 duration-500'>
            <span className='text-black text-sm leading-none mt-0.5 font-bold'>
              S
            </span>
          </div>
          <span className='text-xl tracking-widest text-white mt-1 font-medium'>
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
