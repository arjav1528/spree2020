"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    // h-screen and overflow-hidden prevent scrolling on this splash page
    <main className="relative w-full h-screen overflow-hidden bg-[#050200] flex items-center justify-center">

      {/* --- CINEMATIC AI-STYLE BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Placeholder for an epic stadium/arena background - Kept to maintain aesthetic */}
        <img 
          src="/bg1.png" 
          alt="Arena Background" 
          className="w-full h-full object-cover opacity-80"
          style={{ 
            animation: 'slowZoom 25s infinite alternate ease-in-out' 
          }}
        />
        
        {/* Gradients to tint the image with SPREE Orange */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0400] via-transparent to-[#0a0400]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#FF6B00]/10 mix-blend-color" />
        
        {/* Vignette to darken the edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050200_100%)] opacity-90" />
      </div>

      {/* --- CENTERED LOGO --- */}
      <div 
        className="relative z-10 transition-all duration-1000 transform"
        style={{
          opacity: isMounted ? 1 : 0,
          transform: isMounted ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)'
        }}
      >
        <img 
          src="/logo.png" 
          alt="SPREE Logo" 
          // Responsive sizing: wide on mobile, wider on desktop.
          // Drop-shadow gives it a vibrant, glowing edge.
          className="w-[350px] md:w-[600px] h-auto object-contain drop-shadow-[0_0_50px_rgba(255,107,0,0.6)]" 
        />
      </div>

      {/* Embedded CSS for the slow background zoom animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slowZoom {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.15); }
        }
      `}} />
    </main>
  );
}