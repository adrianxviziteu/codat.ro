'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Ajustare pentru a ține cont de înălțimea navbar-ului
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/50 backdrop-blur-sm shadow-sm py-2' 
        : 'bg-white py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - În stânga */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#017AFF] to-blue-500"
              >
                CODAT.RO
              </motion.span>
            </Link>
          </div>

          {/* Navigation Links - Centrate */}
          <div className="hidden md:flex items-center justify-center space-x-8 flex-grow mx-10">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-sm font-medium text-gray-600 hover:text-[#017AFF] transition-colors"
            >
              Caracteristici
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-sm font-medium text-gray-600 hover:text-[#017AFF] transition-colors"
            >
              Testimoniale
            </button>
            <button 
              onClick={() => scrollToSection('sticky-scroll')} 
              className="text-sm font-medium text-gray-600 hover:text-[#017AFF] transition-colors"
            >
              Cum verificăm
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-sm font-medium text-gray-600 hover:text-[#017AFF] transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Login Button - În dreapta */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/login" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-[#017AFF] transition-colors">
              Conectare
            </Link>
            <Link href="/register" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#017AFF] hover:bg-blue-600 transition-colors">
              Înregistrare
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#017AFF]"
            >
              <span className="sr-only">Deschide meniul</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-sm"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#017AFF] hover:bg-gray-50 transition-colors"
              >
                Caracteristici
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#017AFF] hover:bg-gray-50 transition-colors"
              >
                Testimoniale
              </button>
              <button
                onClick={() => scrollToSection('sticky-scroll')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#017AFF] hover:bg-gray-50 transition-colors"
              >
                Cum verificăm
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#017AFF] hover:bg-gray-50 transition-colors"
              >
                Contact
              </button>
              <Link href="/login"
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#017AFF] hover:bg-gray-50 transition-colors mt-3"
              >
                Conectare
              </Link>
              <Link href="/register"
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-[#017AFF] hover:bg-blue-600 transition-colors mt-2"
              >
                Înregistrare
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 