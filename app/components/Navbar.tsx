'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#017AFF] to-blue-500"
              >
                CODAT.RO
              </motion.span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex space-x-8"
            >
              <Link 
                href="#features" 
                className="text-gray-600 hover:text-[#017AFF] transition-colors text-sm font-medium relative group"
              >
                Verificare IMEI
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#017AFF] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="#how-it-works" 
                className="text-gray-600 hover:text-[#017AFF] transition-colors text-sm font-medium relative group"
              >
                Cum funcționează
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#017AFF] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="#pricing" 
                className="text-gray-600 hover:text-[#017AFF] transition-colors text-sm font-medium relative group"
              >
                Prețuri
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#017AFF] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="#about" 
                className="text-gray-600 hover:text-[#017AFF] transition-colors text-sm font-medium relative group"
              >
                Despre noi
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#017AFF] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link 
                href="#contact" 
                className="bg-gradient-to-r from-[#017AFF] to-blue-500 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-300 text-sm font-medium"
              >
                Contact
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden flex items-center"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#017AFF] focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg rounded-b-xl border-t border-gray-100"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              <Link 
                href="#features" 
                className="block px-3 py-3 text-gray-600 hover:text-[#017AFF] hover:bg-gray-50 rounded-lg transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Verificare IMEI
              </Link>
              <Link 
                href="#how-it-works" 
                className="block px-3 py-3 text-gray-600 hover:text-[#017AFF] hover:bg-gray-50 rounded-lg transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Cum funcționează
              </Link>
              <Link 
                href="#pricing" 
                className="block px-3 py-3 text-gray-600 hover:text-[#017AFF] hover:bg-gray-50 rounded-lg transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Prețuri
              </Link>
              <Link 
                href="#about" 
                className="block px-3 py-3 text-gray-600 hover:text-[#017AFF] hover:bg-gray-50 rounded-lg transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Despre noi
              </Link>
              <div className="pt-2">
                <Link 
                  href="#contact" 
                  className="block px-3 py-3 text-white bg-gradient-to-r from-[#017AFF] to-blue-500 rounded-lg transition-all duration-300 text-sm font-medium hover:shadow-md hover:shadow-blue-500/20 active:scale-[0.98]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 