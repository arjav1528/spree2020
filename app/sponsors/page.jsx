'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'

const STATS = [
  { value: '29', label: 'Total Partners' },
  { value: '1', label: 'Shared Vision' },
  { value: '100%', label: 'Commitment' },
  { value: '2026', label: 'Edition Soon' }
]

const SPONSORS = [
  { name: 'Lakme Sunexpert', slab: 'Co-Title Sponsor', src: '/Spree Website Logo/1.png', link: 'https://www.lakmeindia.com/collections/sun-protection-catalog' },
  { name: 'Surya Roshni', slab: 'Associate Partner', src: '/Spree Website Logo/2.png', link: 'https://www.surya.co.in/' },
  { name: 'Gatsby', slab: 'Official Hair Styling Partner', src: '/Spree Website Logo/3.png', link: 'https://gatsbyindia.com/' },
  { name: 'FanUp', slab: 'Scoring Partner', src: '/Spree Website Logo/4.png', link: 'https://playfanup.in/' },
  { name: 'Nutrivate', slab: 'Healthy Munching Partner', src: '/Spree Website Logo/5.png', link: 'https://nutrivate.in/' },
  { name: 'ICICI Bank', slab: 'Festival Banking Partner', src: '/Spree Website Logo/6.png', link: 'https://www.icici.bank.in/' },
  { name: 'Swiggy', slab: 'Festival Partner', src: '/Spree Website Logo/7.png', link: 'https://www.swiggy.com/' },
  { name: 'Avvatar', slab: "Official Protein Partner of Spree '26 Marathon", src: '/Spree Website Logo/8.png', link: 'https://www.avvatarindia.com/' },
  { name: 'Ignite', slab: "Official Hydration Partner of Spree '26 Marathon", src: '/Spree Website Logo/9.png', link: 'https://in.ignite.co/' },
  { name: 'Storia', slab: "Beverage Partner of Spree '26 Marathon", src: '/Spree Website Logo/10.png', link: 'https://shop.storiafoods.com/' },
  { name: 'EaseMyTrip', slab: 'Official Travel Partner', src: '/Spree Website Logo/11.png', link: 'https://www.easemytrip.com/' },
  { name: 'The Hosteller', slab: 'Stay Partner', src: '/Spree Website Logo/12.png', link: 'https://www.thehosteller.com/' },
  { name: 'EazyDiner', slab: 'Dining Partner', src: '/Spree Website Logo/13.png', link: 'https://www.eazydiner.com/' },
  { name: 'GoDesi', slab: 'Chatpata Candy Partner', src: '/Spree Website Logo/14.png', link: 'https://godesi.in/' },
  { name: 'Maviox', slab: 'Sports Skincare Partner', src: '/Spree Website Logo/15.png', link: 'https://maviox.com/' },
  { name: 'Aviva Beauty', slab: "Gifting Partner of Spree '26", src: '/Spree Website Logo/16.png', link: 'https://avivabeauty.in/' },
  { name: 'MYOP', slab: 'Festival Partner', src: '/Spree Website Logo/17.png', link: 'https://myop.in/' },
  { name: 'Ritebite Max Protein', slab: 'Protein Partner', src: '/Spree Website Logo/18.png', link: 'https://maxprotein.in/' },
  { name: 'Hell Energy Drink', slab: 'Festival Partner', src: '/Spree Website Logo/19.png', link: 'https://www.hellenergy.com/in/' },
  { name: 'Nuke', slab: 'Festival Partner', src: '/Spree Website Logo/20.png', link: 'https://www.nukefit.in/' },
  { name: 'Nature Day', slab: 'Beverage Partner', src: '/Spree Website Logo/21.png', link: 'https://team24.in/' },
  { name: 'Piknik', slab: 'Festival Munching Pops Partner', src: '/Spree Website Logo/22.png', link: 'https://www.pikniksnacks.com/index.htm' },
  { name: 'FitKhana', slab: 'Official Munching Partner', src: '/Spree Website Logo/23.png', link: '' },
  { name: 'Pulse Band', slab: "Gifting Partner of Spree '26 Marathon", src: '/Spree Website Logo/24.png', link: 'https://pulseband.in/' },
  { name: 'Indigo 91.9', slab: 'Official Radio Partner', src: '/Spree Website Logo/25.png', link: 'https://indigomusic.com/' },
  { name: 'OnTV', slab: 'Transit Media Partner', src: '/Spree Website Logo/26.png', link: 'https://ontv.co.in/' },
  { name: 'startupnews.fyi', slab: 'Media Partner', src: '/Spree Website Logo/27.png', link: 'https://startupnews.fyi/' },
  { name: 'DU Beat', slab: 'Associate Media Partner', src: '/Spree Website Logo/28.png', link: 'https://dubeat.com/' },
  { name: 'Sanctify', slab: 'Media Partner', src: '/Spree Website Logo/29.png', link: 'https://www.sanctify.in/' }
]

export default function SponsorsPage () {
  const [isMounted] = useState(true)

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
          0% { opacity: 0; transform: translateY(30px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        /* Grid Dimming Effect */
        .sponsor-grid:hover .sponsor-card:not(:hover) {
          opacity: 0.3;
          transform: scale(0.95);
          filter: grayscale(100%) brightness(0.5);
        }
        .sponsor-card {
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `
        }}
      />

      {/* --- FIXED CINEMATIC BACKGROUND --- */}
      <div className='fixed inset-0 z-0 pointer-events-none'>
        {/* Dramatic Stadium Lights Image */}
        <img
          src='https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2560&auto=format&fit=crop'
          alt='Atmospheric Stadium Event'
          className='w-full h-full object-cover opacity-80'
          style={{ animation: 'slowPan 40s infinite alternate ease-in-out' }}
        />
        {/* Dark Orange AI-Style Overlays */}
        <div className='absolute inset-0 bg-gradient-to-b from-[#050200] via-transparent to-[#050200] opacity-90' />
        <div className='absolute inset-0 bg-gradient-to-r from-[#050200] via-[#FF6B00]/5 to-[#050200] mix-blend-multiply' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050200_80%)] opacity-90' />

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
            Powered By Excellence
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
              PARTNERS
            </span>
          </h1>

          <p className='max-w-2xl text-white/60 text-lg md:text-xl font-medium leading-relaxed'>
            Backed by industry leaders who believe in the power of sport to
            transform lives, forge legends, and build champions.
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

      {/* --- SPONSORS GRID SECTION --- */}
      <section className='relative z-10 max-w-[1400px] mx-auto px-6 pb-32'>
        {/* Section Header */}
        <div
          className='flex items-center gap-4 mb-16 justify-center'
          style={{
            opacity: isMounted ? 1 : 0,
            transition: 'opacity 1s ease-in 0.5s'
          }}
        >
          <div className='flex-1 max-w-xs h-[1px] bg-gradient-to-r from-transparent via-[#FF6B00]/50 to-[#FF6B00]/50' />
          <div className='text-xs md:text-sm tracking-[5px] font-mono font-bold text-[#FFD700] uppercase text-center drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]'>
            Our Sponsors & Media Partners
          </div>
          <div className='flex-1 max-w-xs h-[1px] bg-gradient-to-l from-transparent via-[#FF6B00]/50 to-[#FF6B00]/50' />
        </div>

        {/* The Grid Container */}
        <div className='sponsor-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6'>
          {SPONSORS.map((s, i) => (
            <a
              key={i}
              href={s.link || undefined}
              target={s.link ? '_blank' : undefined}
              rel={s.link ? 'noopener noreferrer' : undefined}
              className='sponsor-card group relative bg-white/5 backdrop-blur-md rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center aspect-square cursor-pointer overflow-hidden border border-white/10 hover:border-[#FF6B00] hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,107,0,0.2)] hover:z-10'
              style={{
                animation: isMounted
                  ? `floatIn 0.6s ease-out forwards ${i * 0.05}s`
                  : 'none',
                opacity: isMounted ? 0 : 1
              }}
              aria-label={s.link ? `Visit ${s.name}` : `${s.name} website unavailable`}
            >
              {/* Inner White Plate for Logos (ensures black/colored logos are visible against dark theme) */}
              <div className='relative w-full h-full bg-white/95 rounded-xl flex items-center justify-center p-3 md:p-4 shadow-inner transition-transform duration-500 group-hover:scale-[1.05]'>
                <img
                  src={s.src}
                  alt={s.name}
                  className='max-w-full max-h-full object-contain'
                  loading='lazy'
                />
              </div>

              {/* Secret Name Tooltip that slides up on hover */}
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent backdrop-blur-sm text-[#FFD700] text-[10px] md:text-xs tracking-[2px] font-mono font-bold uppercase pt-6 pb-3 text-center translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                <div className='px-2'>{s.name}</div>
                <div className='px-2 mt-1 text-[9px] md:text-[10px] tracking-[1px] text-white/80'>
                  {s.slab}
                </div>
              </div>
            </a>
          ))}
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
            SPREE &apos;26
          </span>
        </div>
        <div className='font-mono text-[10px] text-white/30 tracking-[3px] uppercase'>
          © 2026 BITS Pilani K.K. Birla Goa Campus. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
