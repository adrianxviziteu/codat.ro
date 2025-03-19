'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FlipWords } from './ui/flip-words';

export default function Hero() {
  const [imei, setImei] = useState('');
  const [imeiError, setImeiError] = useState('');
  const [verificationType, setVerificationType] = useState('pro');
  const [showVerificationPopup, setShowVerificationPopup] = useState(false);

  const handleImeiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove any non-digit characters
    const cleanedValue = e.target.value.replace(/\D/g, '');
    setImei(cleanedValue);

    // Clear error when user starts typing
    if (imeiError) setImeiError('');
  };

  const validateImei = () => {
    if (imei.length !== 15) {
      setImeiError('IMEI-ul trebuie să conțină exact 15 cifre');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateImei()) {
      setShowVerificationPopup(true);
    }
  };

  const redirectToPayment = (type: string) => {
    if (imei.trim() === '') {
      setImeiError('Te rugăm să introduci un IMEI valid.');
      return;
    }
    
    if (imei.trim().length !== 15) {
      setImeiError('IMEI-ul trebuie să conțină exact 15 cifre.');
      return;
    }
    
    setImeiError('');
    const serviceId = type === 'simple' ? '205' : '281';
    const redirectUrl = `create_stripe_session.php?imei=${imei}&serviceId=${serviceId}`;
    window.location.href = redirectUrl;
  };

  const testimonials = [
    {
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Alex M.",
      time: "2 ore în urmă"
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Maria D.",
      time: "5 ore în urmă"
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Radu S.",
      time: "1 zi în urmă"
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/29.jpg",
      name: "Elena P.",
      time: "2 zile în urmă"
    }
  ];

  return (
    <section className="relative pt-8 sm:pt-12 pb-16">
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-8 sm:pt-12">
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-4 inline-flex items-center justify-center"
            >
              <span className="px-3 py-1 text-xs font-medium text-blue-600 border border-blue-200 rounded-full bg-blue-50/50 backdrop-blur-sm">
                BETA
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight overflow-visible px-4 sm:px-0"
            >
              <div className="inline-flex flex-wrap justify-center items-center gap-1 sm:gap-3">
                <span className="text-gray-900 whitespace-nowrap">
                  Verifică iPhone-ul
                </span>
                <FlipWords 
                  words={["rapid", "sigur", "eficient"]} 
                  className="text-[#017AFF] inline-block min-w-[70px] sm:min-w-[120px] md:min-w-[150px] lg:min-w-[180px]" 
                  duration={2000}
                />
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 text-sm sm:text-lg text-gray-600 max-w-xl mx-auto px-4 sm:px-0"
            >
              Află instant dacă iPhone-ul este deblocat, în garanție sau are probleme de activare.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 max-w-xl mx-auto px-4 sm:px-0"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="relative flex-1 min-w-0">
                    <div className="relative">
                      <label htmlFor="imei" className="sr-only">IMEI Number</label>
                      <input
                        type="text"
                        id="imei"
                        value={imei}
                        onChange={handleImeiChange}
                        placeholder="Introdu numărul IMEI"
                        className={`block w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg rounded-xl border-2 ${
                          imeiError 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-200 focus:ring-[#017AFF]'
                        } text-gray-900 placeholder-gray-400 focus:border-transparent transition-all duration-300 hover:border-[#017AFF] bg-white/80 backdrop-blur-sm`}
                        maxLength={15}
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.95 }}
                          type="submit"
                          className="px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium text-white bg-gradient-to-r from-[#017AFF] to-blue-500 rounded-lg shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#017AFF] transition-all duration-300"
                        >
                          Verifică
                        </motion.button>
                      </div>
                    </div>
                    {imeiError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-6 left-0 text-sm text-red-500 flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {imeiError}
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Recent Users Section */}
                <div className="mt-2">
                  <div className="flex items-center justify-center gap-1">
                    <div className="flex -space-x-3">
                      {testimonials.map((user, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + index * 0.2, duration: 1.2 }}
                          className="relative group"
                        >
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-7 h-7 rounded-full border-2 border-white shadow-sm"
                          />
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-0.5 px-2 py-0.5 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            {user.name}
                            <br />
                            <span className="text-gray-400 text-xs">{user.time}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="text-sm text-gray-600 ml-1">
                      <div className="flex items-center">
                        <span className="font-semibold">2,543</span>&nbsp;verificări în ultima săptămână
                      </div>
                    </div>
                  </div>

                  {/* IMEI Guide */}
                  <div className="mt-1 text-center">
                    <button
                      type="button"
                      className="group inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors bg-gray-50 hover:bg-blue-50 px-3 py-1.5 rounded-full"
                      onClick={() => document.getElementById('imei-guide')?.classList.toggle('hidden')}
                    >
                      <svg 
                        className="w-4 h-4 mr-1.5 group-hover:text-blue-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Unde găsesc IMEI-ul?
                    </button>

                    <div id="imei-guide" className="hidden mt-1 bg-white/80 backdrop-blur-sm rounded-xl p-1 shadow-lg border border-gray-200/50">
                      <div className="flex items-center justify-between">
                        {/* Pas 1 */}
                        <div className="flex flex-col items-center p-1 bg-blue-50/50 rounded-lg">
                          <div className="flex-shrink-0 w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-[10px] font-bold text-blue-600">1</span>
                          </div>
                          <p className="text-[10px] font-medium text-gray-900 text-center">Setări și General</p>
                        </div>

                        {/* Săgeată 1 */}
                        <div className="flex items-center px-0.5">
                          <svg className="w-2.5 h-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>

                        {/* Pas 2 */}
                        <div className="flex flex-col items-center p-1 bg-blue-50/50 rounded-lg">
                          <div className="flex-shrink-0 w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-[10px] font-bold text-blue-600">2</span>
                          </div>
                          <p className="text-[10px] font-medium text-gray-900 text-center">Apasă pe Informații</p>
                        </div>

                        {/* Săgeată 2 */}
                        <div className="flex items-center px-0.5">
                          <svg className="w-2.5 h-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>

                        {/* Pas 3 */}
                        <div className="flex flex-col items-center p-1 bg-blue-50/50 rounded-lg">
                          <div className="flex-shrink-0 w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-[10px] font-bold text-blue-600">3</span>
                          </div>
                          <p className="text-[10px] font-medium text-gray-900 text-center">Derulează până la IMEI</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </motion.div>
          </motion.div>

          {/* Phone Image with Floating Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 relative max-w-[280px] sm:max-w-sm mx-auto pb-8 sm:pb-0"
          >
            <div className="relative">
              <Image
                src="/header-phone-1.png"
                alt="Phone IMEI Verification"
                width={340}
                height={680}
                className="mx-auto drop-shadow-2xl"
                priority
              />
              
              {/* Status Activare - moved to top-right corner */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  x: [0, -4, 0]
                }}
                transition={{
                  x: {
                    duration: 3.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  delay: 1.8
                }}
                className="hidden sm:flex absolute -right-32 top-12 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-900">Status Activare</p>
                    <p className="text-xs text-amber-600">Clean</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Service Cards - Hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: [0, -5, 0]
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  delay: 1
                }}
                className="hidden sm:flex absolute -left-32 top-1/4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-900">MDM Status</p>
                    <p className="text-xs text-green-600">Inactiv</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: [0, 5, 0]
                }}
                transition={{
                  y: {
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  delay: 1.2
                }}
                className="hidden sm:flex absolute -right-36 top-1/3 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#017AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-900">Garanție</p>
                    <p className="text-xs text-[#017AFF]">Activă</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: [0, -4, 0]
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  delay: 1.4
                }}
                className="hidden sm:flex absolute -left-28 bottom-1/3 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-900">Codare Rețea</p>
                    <p className="text-xs text-purple-600">Deblocat</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  y: [0, 6, 0]
                }}
                transition={{
                  y: {
                    duration: 3.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  delay: 1.6
                }}
                className="hidden sm:flex absolute -right-32 bottom-1/3 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-gray-900">iCloud Status</p>
                    <p className="text-xs text-red-600">Verificat</p>
                  </div>
                </div>
              </motion.div>

              {/* Mobile-only service indicators */}
              <div className="hidden sm:hidden absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-2 p-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-md border border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-medium text-gray-900">Status</p>
                        <p className="text-[10px] text-amber-600">Clean</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-md border border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-medium text-gray-900">MDM</p>
                        <p className="text-[10px] text-green-600">Inactiv</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-200 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -bottom-8 -right-4 w-20 h-20 bg-blue-300 rounded-full blur-2xl opacity-60"></div>
            </div>
          </motion.div>
        </div>

        {/* Verification Type Selection Popup */}
        <AnimatePresence>
          {showVerificationPopup && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                onClick={() => setShowVerificationPopup(false)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6"
              >
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20 w-full max-w-4xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto">
                  <div className="relative p-4 sm:p-8">
                    {/* Close button */}
                    <button
                      onClick={() => setShowVerificationPopup(false)}
                      className="absolute right-3 sm:right-6 top-3 sm:top-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    {/* Header */}
                    <div className="text-left mb-4 sm:mb-8 pr-8">
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2">
                          Alege verificarea potrivita pentru tine
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500">
                          IMEI verificat: <span className="font-mono font-medium text-gray-900 bg-gray-100 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md text-xs">{imei}</span>
                        </p>
                      </motion.div>
                    </div>
                    
                    {/* Plan Comparison Cards */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0
                      }}
                      transition={{ delay: 0.1 }}
                      className="mt-2 rounded-2xl p-0.5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                        {/* Basic Plan - Primul în ordine */}
                        <motion.button
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          onClick={() => setVerificationType('simple')}
                          className={`group relative flex flex-col h-full p-3 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 ${
                            verificationType === 'simple'
                              ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-[#017AFF] shadow-xl shadow-blue-100 scale-[1.02] transform'
                              : 'bg-white hover:scale-[1.02] border-2 border-gray-100 hover:border-[#017AFF] hover:shadow-xl'
                          }`}
                        >
                          <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3">
                            <div className="bg-green-100 text-green-700 text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full">
                              Economic
                            </div>
                          </div>
                          
                          {verificationType === 'simple' && (
                            <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2">
                              <div className="bg-[#017AFF] text-white text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full">
                                Selectat
                              </div>
                            </div>
                          )}

                          <div className="flex items-center justify-between mb-3 sm:mb-4">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                                verificationType === 'simple' ? 'border-[#017AFF] bg-white' : 'border-gray-300 group-hover:border-[#017AFF]'
                              }`}>
                                {verificationType === 'simple' && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#017AFF]"
                                  />
                                )}
                              </div>
                              <span className="text-sm sm:text-base font-bold text-gray-900">Basic</span>
                            </div>
                            <div className="text-right">
                              <span className="text-xl sm:text-2xl font-bold text-[#017AFF]">3 LEI</span>
                            </div>
                          </div>

                          <div className="space-y-2 sm:space-y-3">
                            <div className="flex items-start space-x-2 sm:space-x-3 p-2.5 sm:p-3 rounded-lg bg-white/80 shadow-sm">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                              </div>
                              <div className="flex-1 text-left">
                                <p className="text-sm sm:text-base font-medium text-gray-900">Status activare</p>
                              </div>
                            </div>

                            <div className="flex items-start space-x-2 sm:space-x-3 p-2.5 sm:p-3 rounded-lg bg-white/80 shadow-sm">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                                <svg className="w-5 h-5 text-[#017AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                              </div>
                              <div className="flex-1 text-left">
                                <p className="text-sm sm:text-base font-medium text-gray-900">Verificare garanție</p>
                              </div>
                            </div>

                            <div className="flex items-start space-x-2 sm:space-x-3 p-2.5 sm:p-3 rounded-lg bg-gray-50 shadow-sm opacity-50">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                              </div>
                              <div className="flex-1 text-left">
                                <p className="text-sm sm:text-base font-medium text-gray-400">Verificare iCloud</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start space-x-2 sm:space-x-3 p-2.5 sm:p-3 rounded-lg bg-gray-50 shadow-sm opacity-50">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div className="flex-1 text-left">
                                <p className="text-sm sm:text-base font-medium text-gray-400">Verificare rețea</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start space-x-2 sm:space-x-3 p-2.5 sm:p-3 rounded-lg bg-gray-50 shadow-sm opacity-50">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div className="flex-1 text-left">
                                <p className="text-sm sm:text-base font-medium text-gray-400">Info model</p>
                              </div>
                            </div>
                          </div>
                        </motion.button>

                        {/* Pro Plan - Al doilea în ordine (dreapta) */}
                        <motion.button
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ 
                            opacity: 1, 
                            x: 0,
                            boxShadow: verificationType === 'pro' ? ["0px 5px 15px rgba(1, 122, 255, 0.2)", "0px 15px 40px rgba(1, 122, 255, 0.4)", "0px 5px 15px rgba(1, 122, 255, 0.2)"] : "none"
                          }}
                          transition={{ 
                            opacity: { duration: 0.5, delay: 0.3 },
                            x: { duration: 0.5, delay: 0.3 },
                            boxShadow: { 
                              repeat: Infinity, 
                              duration: 2, 
                              delay: 0.2,
                              ease: "easeInOut" 
                            } 
                          }}
                          onClick={() => setVerificationType('pro')}
                          className={`group relative flex flex-col h-full p-3 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 ${
                            verificationType === 'pro'
                              ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-[#017AFF] shadow-xl shadow-blue-500/20 scale-[1.03] transform ring-4 ring-blue-100'
                              : 'bg-white hover:scale-[1.02] border-2 border-gray-100 hover:border-[#017AFF] hover:shadow-xl'
                          }`}
                        >
                          <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3">
                            <div className="bg-blue-100 text-[#017AFF] text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full shadow-sm">
                              Recomandat
                            </div>
                          </div>
                          
                          <div className="absolute -bottom-2 -right-2 sm:-bottom-2 sm:-right-2">
                            <motion.div 
                              initial={{ scale: 1 }}
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ 
                                repeat: Infinity, 
                                duration: 2,
                                ease: "easeInOut"
                              }}
                              className="bg-green-100 text-green-700 text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full">
                              Cea mai bună valoare
                            </motion.div>
                          </div>
                          
                          {verificationType === 'pro' && (
                            <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2">
                              <div className="bg-[#017AFF] text-white text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full">
                                Selectat
                              </div>
                            </div>
                          )}

                          <div className="flex items-center justify-between mb-3 sm:mb-4">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                                verificationType === 'pro' ? 'border-[#017AFF] bg-white' : 'border-gray-300 group-hover:border-[#017AFF]'
                              }`}>
                                {verificationType === 'pro' && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#017AFF]"
                                  />
                                )}
                              </div>
                              <span className="text-sm sm:text-base font-bold text-gray-900">PRO</span>
                            </div>
                            <div className="text-right">
                              <span className="text-xl sm:text-2xl font-bold text-[#017AFF]">5 LEI</span>
                              <div className="text-xs text-green-600 font-medium">doar +2 LEI</div>
                            </div>
                          </div>

                          <div className="space-y-2 sm:space-y-3">
                            <div className="flex items-start space-x-2 sm:space-x-3 p-2.5 sm:p-3 rounded-lg bg-white/80 shadow-sm">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                              </div>
                              <div className="flex-1 text-left">
                                <p className="text-sm sm:text-base font-medium text-gray-900">Status activare</p>
                              </div>
                            </div>

                            <div className="flex items-start space-x-2 sm:space-x-3 p-2.5 sm:p-3 rounded-lg bg-white/80 shadow-sm">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                                <svg className="w-5 h-5 text-[#017AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                              </div>
                              <div className="flex-1 text-left">
                                <p className="text-sm sm:text-base font-medium text-gray-900">Verificare garanție</p>
                              </div>
                            </div>

                            <div className="flex items-start space-x-2 sm:space-x-3 p-2.5 sm:p-3 rounded-lg bg-white/80 shadow-sm">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                                <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                              </div>
                              <div className="flex-1 text-left">
                                <p className="text-sm sm:text-base font-medium text-gray-900">Verificare iCloud & MDM</p>
                              </div>
                            </div>

                            <div className="flex items-start space-x-2 sm:space-x-3 p-2.5 sm:p-3 rounded-lg bg-white/80 shadow-sm">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                                <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                </svg>
                              </div>
                              <div className="flex-1 text-left">
                                <p className="text-sm sm:text-base font-medium text-gray-900">Codare rețea</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start space-x-2 sm:space-x-3 p-2.5 sm:p-3 rounded-lg bg-white/80 shadow-sm">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mt-0.5">
                                <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              </div>
                              <div className="flex-1 text-left">
                                <p className="text-sm sm:text-base font-medium text-gray-900">Info model detaliat</p>
                              </div>
                            </div>
                            
                            <div className="flex items-start space-x-2 sm:space-x-3 p-2.5 sm:p-3 rounded-lg bg-white/80 shadow-sm">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center mt-0.5">
                                <svg className="w-5 h-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                              </div>
                              <div className="flex-1 text-left">
                                <p className="text-sm sm:text-base font-medium text-gray-900">Verificare blacklist</p>
                              </div>
                            </div>
                          </div>
                        </motion.button>
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-6 sm:mt-10 flex flex-col gap-4 sm:gap-6"
                    >
                      <div className="flex items-center justify-center mt-6 sm:mt-8">
                        <motion.button
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          onClick={() => redirectToPayment(verificationType)}
                          disabled={showVerificationPopup}
                          className={`relative w-full sm:w-auto flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium text-white ${verificationType === 'pro' ? 'bg-gradient-to-r from-blue-500 to-blue-700' : 'bg-[#017AFF]'} hover:bg-blue-600 rounded-xl sm:rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                          <motion.span
                            animate={{ 
                              scale: verificationType === 'pro' ? [1, 1.03, 1] : 1
                            }}
                            transition={{ 
                              repeat: verificationType === 'pro' ? Infinity : 0,
                              duration: 1.5,
                              ease: "easeInOut" 
                            }}
                            className="flex items-center"
                          >
                            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Plătește și verifică acum
                            {verificationType === 'pro' && 
                              <span className="ml-1 text-sm font-normal bg-white/20 px-2 py-0.5 rounded-full">Verificare PRO</span>
                            }
                            {verificationType === 'simple' && 
                              <span className="ml-1 text-sm font-normal bg-white/20 px-2 py-0.5 rounded-full">Verificare Basic</span>
                            }
                          </motion.span>
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}