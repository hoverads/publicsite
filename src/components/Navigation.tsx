"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [initialAnim, setInitialAnim] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Logo flies to the navbar after 2 seconds
    const t = setTimeout(() => {
      setInitialAnim(false);
    }, 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen ? "bg-black/90 backdrop-blur-md border-b border-white-10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24 relative">
            
            {/* The single unified Logo */}
            <div className={`flex-shrink-0 flex items-center transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              initialAnim 
                ? 'fixed top-[15vh] md:top-[18vh] left-1/2 -translate-x-1/2 z-[100]' 
                : 'relative top-0 left-0 translate-x-0'
            }`}>
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <img 
                  src="/logo.png" 
                  alt="Hover Ads Logo" 
                  className={`object-contain transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    initialAnim ? 'h-24 md:h-32 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]' : 'h-8 md:h-12'
                  }`} 
                />
              </Link>
            </div>

            {/* Desktop Links */}
            <div className={`hidden md:flex items-center space-x-8 transition-opacity duration-1000 delay-500 ${initialAnim ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <Link href="/#services" className="text-white-70 hover:text-white transition-colors text-sm font-medium">Services</Link>
              <Link href="/#why-us" className="text-white-70 hover:text-white transition-colors text-sm font-medium">Why Us</Link>
              <Link href="/#gallery" className="text-white-70 hover:text-white transition-colors text-sm font-medium">Gallery</Link>
              <Link href="/careers" className="text-white-70 hover:text-white transition-colors text-sm font-medium">Careers</Link>
              <Link href="/#franchise" className="text-white-70 hover:text-white transition-colors text-sm font-medium">Franchise</Link>
              <a href="/#contact" className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-transform hover:scale-105 active:scale-95">
                ON AIR
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className={`flex md:hidden items-center transition-opacity duration-1000 delay-500 ${initialAnim ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
                {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-24 left-0 w-full bg-black/95 backdrop-blur-md border-b border-white-10 p-4 flex flex-col space-y-4 shadow-xl">
            <Link onClick={() => setMobileMenuOpen(false)} href="/#services" className="text-white-70 hover:text-white transition-colors font-medium p-2">Services</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/#why-us" className="text-white-70 hover:text-white transition-colors font-medium p-2">Why Us</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/#gallery" className="text-white-70 hover:text-white transition-colors font-medium p-2">Gallery</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/careers" className="text-white-70 hover:text-white transition-colors font-medium p-2">Careers</Link>
            <Link onClick={() => setMobileMenuOpen(false)} href="/#franchise" className="text-white-70 hover:text-white transition-colors font-medium p-2">Franchise</Link>
            <a onClick={() => setMobileMenuOpen(false)} href="/#contact" className="mt-4 px-6 py-4 bg-white text-black text-center font-bold rounded-xl hover:bg-neutral-200 w-full block">
              ON AIR
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
