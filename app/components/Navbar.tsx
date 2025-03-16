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
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold text-[#017AFF]"
              >
                IMEICheck
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
              <Link href="#features" className="text-gray-600 hover:text-[#017AFF] transition-colors">Features</Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-[#017AFF] transition-colors">How it Works</Link>
              <Link href="#pricing" className="text-gray-600 hover:text-[#017AFF] transition-colors">Pricing</Link>
              <Link href="#contact" className="text-gray-600 hover:text-[#017AFF] transition-colors">Contact</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link 
                href="/login" 
                className="bg-[#017AFF] text-white px-4 py-2 rounded-md hover:bg-[#017AFF]/90 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Login
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#017AFF] focus:outline-none transition-colors"
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
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="#features" className="block px-3 py-2 text-gray-600 hover:text-[#017AFF] transition-colors">Features</Link>
              <Link href="#how-it-works" className="block px-3 py-2 text-gray-600 hover:text-[#017AFF] transition-colors">How it Works</Link>
              <Link href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-[#017AFF] transition-colors">Pricing</Link>
              <Link href="#contact" className="block px-3 py-2 text-gray-600 hover:text-[#017AFF] transition-colors">Contact</Link>
              <Link href="/login" className="block px-3 py-2 text-[#017AFF] hover:text-[#017AFF]/90 transition-colors">Login</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 