'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const NAV_LINKS = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'EVENTS', path: '/events' },
    { name: 'SPORTS', path: '/sports' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'SPONSORS', path: '/sponsors' },
    { name: 'OUR TEAM', path: '/team' }
  ]

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <nav className='fixed top-0 left-0 right-0 z-50 px-6 py-5 md:px-12 md:py-6 flex items-center justify-between'>
        {/* Frosted Glass Background (Sits behind the nav items) */}
        <div className='absolute inset-0 bg-black/40 backdrop-blur-md border-b border-white/10' />

        {/* Nav Logo (Left) */}
        <Link 
          href='/' 
          className='relative z-10 flex items-center gap-2 group'
          onClick={() => setIsMenuOpen(false)} // Close menu if clicking logo
        >
          <div className='w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FFD700] flex items-center justify-center shadow-[0_0_15px_rgba(255,107,0,0.5)] group-hover:shadow-[0_0_25px_rgba(255,107,0,0.8)] transition-all duration-300'>
            <span className="font-['Bebas_Neue',_sans-serif] text-black text-xl leading-none mt-1">
              S
            </span>
          </div>
          <span className="font-['Bebas_Neue',_sans-serif] text-2xl tracking-widest text-white mt-1 group-hover:text-[#FF6B00] transition-colors">
            SPREE '26
          </span>
        </Link>

        {/* Desktop Nav Links (Center) - Hidden on mobile */}
        <div className='relative z-10 hidden lg:flex items-center gap-8'>
          {NAV_LINKS.map(link => {
            const isActive = pathname === link.path
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative font-mono text-xs font-bold tracking-[3px] uppercase transition-colors duration-300 py-2 ${
                  isActive ? 'text-[#FF6B00]' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
                {/* Active Indicator Dot */}
                {isActive && (
                  <div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FF6B00] shadow-[0_0_8px_#FF6B00]' />
                )}
              </Link>
            )
          })}
        </div>

        {/* Right Side: CTA Button & Hamburger */}
        <div className='relative z-10 flex items-center gap-4'>
          {/* Register Button (Visible on both, slightly smaller padding on mobile) */}
          <Link href='https://register.bits-spree.in'>
            <button className='bg-white/10 hover:bg-[#FF6B00] text-white border border-white/20 hover:border-[#FF6B00] px-4 py-2 md:px-6 md:py-2.5 rounded-full font-mono text-[10px] md:text-xs font-bold tracking-[2px] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,107,0,0.4)]'>
              Register
            </button>
          </Link>

          {/* Hamburger Menu Button (Hidden on Desktop) */}
          <button 
            className='lg:hidden flex items-center justify-center w-10 h-10 text-white focus:outline-none'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg 
              className="w-6 h-6 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                // 'X' Close Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger Icon
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div 
        className={`fixed inset-0 z-40 bg-[#050200]/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="flex flex-col items-center gap-8 w-full px-6"
          style={{
            transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
            transition: 'transform 0.5s ease-out'
          }}
        >
          {NAV_LINKS.map((link, index) => {
            const isActive = pathname === link.path
            return (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-mono tracking-[4px] font-bold uppercase transition-all duration-300 w-full text-center py-2 border-b border-white/5 ${
                  isActive 
                    ? 'text-[#FF6B00] scale-110 drop-shadow-[0_0_10px_rgba(255,107,0,0.5)]' 
                    : 'text-white/70 hover:text-white hover:scale-105'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}