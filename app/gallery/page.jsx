'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import Navbar from '@/components/Navbar'

const STATS = [
  { value: '1,000+', label: 'Photos' },
  { value: '100+', label: 'Videos' },
  { value: '10+', label: 'Years' },
  { value: 'MANY', label: 'Champions' }
]

const CAROUSEL_ITEMS = [
  { id: 1, src: '/gallery/ANKIT_TIWARI.webp' },
  { id: 2, src: '/gallery/ANKIT_TIWARI2.webp' },
  { id: 3, src: '/gallery/NIGHTS.webp' },
  { id: 4, src: '/gallery/NIGHTS2.webp' },
  { id: 5, src: '/gallery/NIGHTS3.webp' },
  { id: 6, src: '/gallery/AAHRMb.webp' },
  { id: 7, src: '/gallery/NIGHTS4.webp' },
  { id: 8, src: '/gallery/NIGHTS5.webp' }
]

const GRID_ITEMS = [
  {
    id: 1,
    src: '/gallery/FOOTBALL.webp',
    sport: 'Football',
    caption: 'The Tackle'
  },
  {
    id: 2,
    src: '/gallery/CRICKET.webp',
    sport: 'Cricket',
    caption: 'Clean Bowled'
  },
  {
    id: 3,
    src: '/gallery/KABADDI.webp',
    sport: 'Kabaddi',
    caption: 'The Raid'
  },
  {
    id: 4,
    src: '/gallery/TABLE_TENNIS.webp',
    sport: 'Table Tennis',
    caption: 'The Serve'
  },
  {
    id: 5,
    src: '/gallery/VOLLEYBALL.webp',
    sport: 'Volleyball',
    caption: 'Spike It'
  },
  {
    id: 6,
    src: '/gallery/BASKETBALL_DUNK.webp',
    sport: 'Basketball',
    caption: 'Slam Dunk'
  },
  {
    id: 7,
    src: '/gallery/BADMINTON.webp',
    sport: 'Badminton',
    caption: 'Drop Shot'
  }
]

function CylinderCarousel ({ items }) {
  const containerRef = useRef(null)
  const angleRef = useRef(0)
  const velRef = useRef(0.2)
  const dragRef = useRef({ active: false })
  const rafRef = useRef(null)
  const [angle, setAngle] = useState(0)
  const [selected, setSelected] = useState(null)

  const N = items.length
  const theta = 360 / N
  const radius = Math.round(300 / 2 / Math.tan(Math.PI / N))

  useEffect(() => {
    let last = performance.now()
    const tick = now => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      if (!dragRef.current.active) {
        velRef.current += (0.3 - velRef.current) * 0.005
        velRef.current *= 0.985
        angleRef.current += velRef.current + 0.18
      } else {
        angleRef.current =
          dragRef.current.startAngle +
          (dragRef.current.currentX - dragRef.current.startX) * 0.35
        velRef.current =
          (dragRef.current.currentX -
            (dragRef.current.lastX || dragRef.current.currentX)) *
          0.5
        dragRef.current.lastX = dragRef.current.currentX
      }
      setAngle(angleRef.current)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const onPD = useCallback(e => {
    dragRef.current = {
      active: true,
      startX: e.clientX,
      currentX: e.clientX,
      lastX: e.clientX,
      startAngle: angleRef.current
    }
    containerRef.current?.setPointerCapture(e.pointerId)
  }, [])
  const onPM = useCallback(e => {
    if (dragRef.current.active) dragRef.current.currentX = e.clientX
  }, [])
  const onPU = useCallback(() => {
    dragRef.current.active = false
  }, [])

  return (
    <>
      <div
        ref={containerRef}
        className='relative h-[480px] flex items-center justify-center cursor-grab select-none overflow-visible [perspective:1200px] pb-80'
        onPointerDown={onPD}
        onPointerMove={onPM}
        onPointerUp={onPU}
        onPointerCancel={onPU}
      >
        {/* Core Orange Glow Under Carousel */}
        <div
          className='absolute bottom-2 left-1/2 -translate-x-1/2 w-[400px] h-10 blur-3xl pointer-events-none'
          style={{
            background:
              'radial-gradient(ellipse, rgba(255,107,0,0.4), transparent 70%)'
          }}
        />

        <div
          className='[transform-style:preserve-3d] transition-none'
          style={{ transform: `rotateY(${angle}deg)` }}
        >
          {items.map((item, i) => (
            <div
              key={item.id}
              onClick={() => setSelected(item)}
              className='absolute w-[220px] -ml-[110px] cursor-pointer group'
              style={{
                transform: `rotateY(${theta * i}deg) translateZ(${radius}px)`
              }}
            >
              <div className='rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] bg-white/5 backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:border-[#FF6B00]/50 group-hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] pointer-events-none'>
                <img
                  src={item.src}
                  alt='Carousel Item'
                  className='w-full h-[300px] object-cover block opacity-90 group-hover:opacity-100 transition-opacity'
                  loading='lazy'
                />
                <div className='bg-black/60 backdrop-blur-md px-4 py-3 border-t border-white/10 group-hover:border-[#FF6B00]/30 transition-colors'>
                  <div className='text-[#FFD700] text-[9px] tracking-[3px] font-mono font-bold uppercase'>
                    Archive
                  </div>
                  <div className='text-white/90 text-[13px] font-bold mt-1 truncate tracking-wide'>
                    Record {item.id}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className='text-center text-[#FF6B00]/60 text-[10px] tracking-[5px] font-mono mt-4 uppercase animate-pulse font-bold'>
        DRAG TO SPIN · CLICK TO VIEW
      </p>

      {/* Carousel Lightbox */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className='fixed inset-0 z-[9999] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 md:p-6'
        >
          <div
            onClick={e => e.stopPropagation()}
            className='w-full max-w-[600px] rounded-2xl overflow-hidden bg-[#050200] border border-white/10 shadow-[0_0_80px_rgba(255,107,0,0.2)] relative'
          >
            <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF6B00] to-[#FFD700]' />
            <img
              src={selected.src.replace('600/800', '800/500')}
              alt='Selected'
              className='w-full max-h-[65vh] object-cover block opacity-95'
            />
            <div className='p-4 md:p-6 flex items-center justify-between gap-4 bg-gradient-to-t from-black/80 to-transparent'>
              <div>
                <div className='text-[#FFD700] text-[10px] font-mono tracking-[3px] font-bold uppercase drop-shadow-md'>
                  Memory Fragment
                </div>
                <div className='font-bold text-xl text-white mt-1 tracking-wide'>
                  Record {selected.id}
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className='flex-shrink-0 w-10 h-10 rounded-full border border-white/20 bg-white/5 cursor-pointer text-lg text-white/70 hover:bg-[#FF6B00]/20 hover:text-[#FF6B00] hover:border-[#FF6B00] transition-all'
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default function GalleryPage () {
  const [lb, setLb] = useState(null)
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

      {/* --- FIXED CINEMATIC BACKGROUND --- */}
      <div className='fixed inset-0 z-0 pointer-events-none'>
        <img
          src='https://images.unsplash.com/photo-1589487391730-58f20eb2c308?q=80&w=2560&auto=format&fit=crop'
          alt='Arena Background'
          className='w-full h-full object-cover opacity-70'
          style={{ animation: 'slowPan 30s infinite alternate ease-in-out' }}
        />
        <div className='absolute inset-0 bg-gradient-to-b from-[#050200] via-transparent to-[#050200] opacity-90' />
        <div className='absolute inset-0 bg-gradient-to-r from-[#050200] via-[#FF6B00]/5 to-[#050200] mix-blend-multiply' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050200_80%)] opacity-50' />

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
            Memories
          </div>

          <h1 className='text-6xl md:text-8xl lg:text-[120px] text-white leading-[0.85] tracking-wide drop-shadow-[0_0_30px_rgba(255,107,0,0.3)] mb-8 flex flex-col items-center'>
            <span
              className='relative leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/30'
              style={{ fontSize: 'clamp(80px, 15vw, 150px)' }}
            >
              THE
            </span>
            <span
              className='relative  leading-none tracking-tight -mt-2 md:-mt-4'
              style={{
                fontSize: 'clamp(80px, 15vw, 150px)',
                color: 'transparent',
                WebkitTextStroke: '2px rgba(255,255,255,0.65)'
              }}
            >
              GALLERY
            </span>
          </h1>

          <p className='max-w-2xl text-white/60 text-lg md:text-xl font-medium leading-relaxed'>
            Moments of glory, frozen in time. Five years of champions,
            victories, and unforgettable drama, rendered in the digital arena.
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

      {/* --- MAIN CONTENT WRAPPER --- */}
      <div className='relative z-10 max-w-[1400px] mx-auto px-6 pb-32'>
        {/* --- 3D CAROUSEL SECTION --- */}
        <section className='mb-40'>
          <div className='mb-12 text-center md:text-left flex flex-col items-center md:items-start'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-[1px] bg-[#FF6B00] hidden md:block' />
              <div className='text-[11px] font-mono font-bold text-[#FFD700] tracking-[5px] uppercase'>
                3D Carousel
              </div>
            </div>
            <h2 className='text-4xl md:text-5xl text-white leading-none tracking-wide drop-shadow-lg'>
              SPIN THROUGH THE HIGHLIGHTS
            </h2>
          </div>
          <CylinderCarousel items={CAROUSEL_ITEMS} />
        </section>

        {/* --- GRID SECTION --- */}
        <section>
          <div className='mb-12 text-center md:text-left flex flex-col items-center md:items-start'>
            <div className='flex items-center gap-4 mb-4'>
              <div className='w-12 h-[1px] bg-[#FF6B00] hidden md:block' />
              <div className='text-[11px] font-mono font-bold text-[#FFD700] tracking-[5px] uppercase'>
                More Shots
              </div>
            </div>
            <h2 className='text-4xl md:text-5xl text-white leading-none tracking-wide drop-shadow-lg'>
              HIGHLIGHTS MATRIX
            </h2>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
            {GRID_ITEMS.map((item, i) => {
              const isWide = i === 0 || i === 5
              return (
                <div
                  key={item.id}
                  onClick={() => setLb(item)}
                  className={`
                    group relative overflow-hidden rounded-3xl cursor-pointer 
                    bg-white/5 backdrop-blur-md border border-white/10 
                    shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out 
                    hover:-translate-y-3 hover:border-[#FF6B00]/50 hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(255,107,0,0.2)]
                    ${isWide ? 'sm:col-span-2' : 'col-span-1'}
                  `}
                  style={{
                    animation: isMounted
                      ? `slideUpFade 0.8s ease-out forwards ${i * 0.1}s`
                      : 'none',
                    opacity: isMounted ? 0 : 1
                  }}
                >
                  <div className='shimmer-overlay z-20 pointer-events-none' />

                  <div className='relative h-full w-full z-10'>
                    <img
                      src={item.src}
                      alt={item.caption}
                      loading='lazy'
                      className={`w-full object-cover block transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 ${
                        isWide ? 'h-[450px]' : 'h-[350px] md:h-[400px]'
                      }`}
                    />

                    <div className='absolute inset-0 bg-gradient-to-t from-[#050200] via-[#050200]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity' />

                    <div className='absolute bottom-0 inset-x-0 p-6 md:p-8'>
                      <div className='text-[#FFD700] text-[10px] font-mono tracking-[4px] font-bold uppercase mb-2 drop-shadow-md'>
                        {item.sport}
                      </div>
                      <div className='text-white text-2xl md:text-3xl font-medium tracking-wide drop-shadow-lg'>
                        {item.caption}
                      </div>
                    </div>

                    <div className='absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#FF6B00] to-[#FFD700] transition-all duration-500 group-hover:w-full z-30' />
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>

      {/* --- GRID LIGHTBOX --- */}
      {lb && (
        <div
          onClick={() => setLb(null)}
          className='fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-6'
        >
          <div
            onClick={e => e.stopPropagation()}
            className='w-full max-w-[900px] rounded-3xl overflow-hidden bg-[#050200] border border-white/10 shadow-[0_0_100px_rgba(255,107,0,0.15)] relative'
          >
            <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF6B00] to-[#FFD700] z-10' />
            <img
              src={lb.src}
              alt={lb.caption}
              className='w-full block max-h-[75vh] object-cover opacity-95 relative z-0'
            />
            <div className='p-6 md:p-8 flex items-center justify-between gap-4 bg-gradient-to-t from-black to-black/80 relative z-10'>
              <div>
                <div className='text-[#FFD700] text-[10px] font-mono tracking-[4px] font-bold uppercase drop-shadow-md'>
                  {lb.sport}
                </div>
                <div className='font-bold text-2xl md:text-3xl text-white mt-1 tracking-wide'>
                  {lb.caption}
                </div>
              </div>
              <button
                onClick={() => setLb(null)}
                className='flex-shrink-0 w-12 h-12 rounded-full border border-white/20 bg-white/5 cursor-pointer text-xl text-white/70 hover:bg-[#FF6B00]/20 hover:text-[#FF6B00] hover:border-[#FF6B00] transition-all'
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="fixed bottom-4 right-4 animate-pulse z-30">
        <div
          className="h-28 sm:h-32 md:h-36 lg:h-40"
          style={{ width: "calc(4 * 3rem)" }}
        >
          <img
            src="/dopy.png"
            alt="Scroll Indicator"
            className="h-full w-full object-contain"
            style={{ aspectRatio: "3 / 1" }}
          />
        </div>
      </div>

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
