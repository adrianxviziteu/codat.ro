'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const [imei, setImei] = useState('');
  const [imeiError, setImeiError] = useState('');
  const [verificationType, setVerificationType] = useState('simple');
  const [showImeiHelp, setShowImeiHelp] = useState(false);
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
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Background patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#017AFF]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-[#017AFF]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#017AFF] to-blue-500">
                Verifică iPhone-ul
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                înainte să-l cumperi
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-4 text-lg text-gray-600 max-w-xl mx-auto"
            >
              Află instant dacă iPhone-ul este deblocat, în garanție sau are probleme de activare.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 max-w-xl mx-auto"
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
                        className={`block w-full px-6 py-4 text-lg rounded-xl border-2 ${
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
                          className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#017AFF] to-blue-500 rounded-lg shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#017AFF] transition-all duration-300"
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
                <div className="mt-8">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="flex -space-x-2">
                      {testimonials.map((user, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="relative group"
                        >
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                          />
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {user.name}
                            <br />
                            <span className="text-gray-400 text-xs">{user.time}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-semibold">2,543</span> verificări în ultima săptămână
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-500">
                    <button 
                      onClick={() => setShowImeiHelp(!showImeiHelp)}
                      className="text-[#017AFF] hover:text-blue-600 focus:outline-none flex items-center justify-center mx-auto"
                    >
                      <span>Cum găsesc IMEI-ul?</span>
                      <svg 
                        className={`w-4 h-4 ml-1 transform transition-transform ${showImeiHelp ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {showImeiHelp && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 p-4 bg-white rounded-xl shadow-lg text-left"
                      >
                        <p className="font-medium text-gray-900 mb-2">Găsește IMEI-ul în 3 moduri simple:</p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-[#017AFF] mr-2">1.</span>
                            <span>Tastează <span className="font-mono bg-gray-100 px-1 rounded">*#06#</span> pe telefonul tău</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#017AFF] mr-2">2.</span>
                            <span>Verifică în <strong>Setări</strong> → <strong>Despre telefon</strong> → <strong>IMEI</strong></span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#017AFF] mr-2">3.</span>
                            <span>Caută pe cutia telefonului sau sub baterie (dacă este detașabilă)</span>
                          </li>
                        </ul>
                      </motion.div>
                    )}
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>

          {/* Phone Image with Floating Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 relative max-w-sm mx-auto"
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
                className="absolute -right-32 top-12 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-100"
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

              {/* Floating Service Cards */}
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
                className="absolute -left-32 top-1/4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-100"
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
                className="absolute -right-36 top-1/3 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-100"
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
                className="absolute -left-28 bottom-1/3 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-100"
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
                className="absolute -right-32 bottom-1/3 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-100"
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

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-200 rounded-full blur-2xl opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-300 rounded-full blur-2xl opacity-60"></div>
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
                className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl z-50 p-6"
              >
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                  <div className="relative p-8">
                    {/* Close button */}
                    <button
                      onClick={() => setShowVerificationPopup(false)}
                      className="absolute right-6 top-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    {/* Header */}
                    <div className="text-left mb-8">
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Alege planul potrivit pentru tine
                        </h3>
                        <p className="text-sm text-gray-500">
                          IMEI verificat: <span className="font-mono font-medium text-gray-900 bg-gray-100 px-2 py-1 rounded-md">{imei}</span>
                        </p>
                      </motion.div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        onClick={() => {
                          setVerificationType('simple');
                          setShowVerificationPopup(false);
                        }}
                        className={`group relative flex flex-col h-full p-6 rounded-2xl transition-all duration-300 ${
                          verificationType === 'simple'
                            ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-[#017AFF] shadow-xl shadow-blue-100'
                            : 'bg-white hover:scale-[1.02] border-2 border-gray-100 hover:border-[#017AFF] hover:shadow-xl'
                        }`}
                      >
                        <div className="absolute -top-3 -right-3">
                          <div className="bg-green-100 text-green-700 text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                            Popular
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                              verificationType === 'simple' ? 'border-[#017AFF] bg-white' : 'border-gray-300 group-hover:border-[#017AFF]'
                            }`}>
                              {verificationType === 'simple' && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-2.5 h-2.5 rounded-full bg-[#017AFF]"
                                />
                              )}
                            </div>
                            <span className="text-base font-bold text-gray-900">Basic</span>
                          </div>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-[#017AFF]">3 LEI</span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start space-x-3 p-2.5 rounded-lg bg-white/80 shadow-sm">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <div className="flex-1 text-left">
                              <p className="text-sm font-medium text-gray-900">Status activare</p>
                              <p className="text-xs text-gray-500">Verifică dacă telefonul este activat</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3 p-2.5 rounded-lg bg-white/80 shadow-sm">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                              <svg className="w-5 h-5 text-[#017AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <div className="flex-1 text-left">
                              <p className="text-sm font-medium text-gray-900">Verificare garanție</p>
                              <p className="text-xs text-gray-500">Află dacă telefonul este în garanție</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3 p-2.5 rounded-lg bg-gray-50 shadow-sm opacity-50">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mt-0.5">
                              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </div>
                            <div className="flex-1 text-left">
                              <p className="text-sm font-medium text-gray-400">Verificare iCloud</p>
                              <p className="text-xs text-gray-400">Indisponibil în pachetul Basic</p>
                            </div>
                          </div>
                        </div>
                      </motion.button>

                      <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        onClick={() => {
                          setVerificationType('pro');
                          setShowVerificationPopup(false);
                        }}
                        className={`group relative flex flex-col h-full p-6 rounded-2xl transition-all duration-300 ${
                          verificationType === 'pro'
                            ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-[#017AFF] shadow-xl shadow-blue-100'
                            : 'bg-white hover:scale-[1.02] border-2 border-gray-100 hover:border-[#017AFF] hover:shadow-xl'
                        }`}
                      >
                        <div className="absolute -top-3 -right-3">
                          <div className="bg-blue-100 text-[#017AFF] text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                            Recomandat
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                              verificationType === 'pro' ? 'border-[#017AFF] bg-white' : 'border-gray-300 group-hover:border-[#017AFF]'
                            }`}>
                              {verificationType === 'pro' && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-2.5 h-2.5 rounded-full bg-[#017AFF]"
                                />
                              )}
                            </div>
                            <span className="text-base font-bold text-gray-900">PRO</span>
                          </div>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-[#017AFF]">5 LEI</span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start space-x-3 p-2.5 rounded-lg bg-white/80 shadow-sm">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <div className="flex-1 text-left">
                              <p className="text-sm font-medium text-gray-900">Status activare</p>
                              <p className="text-xs text-gray-500">Verifică dacă telefonul este activat</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3 p-2.5 rounded-lg bg-white/80 shadow-sm">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                              <svg className="w-5 h-5 text-[#017AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <div className="flex-1 text-left">
                              <p className="text-sm font-medium text-gray-900">Verificare garanție</p>
                              <p className="text-xs text-gray-500">Află dacă telefonul este în garanție</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3 p-2.5 rounded-lg bg-white/80 shadow-sm">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                              <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </div>
                            <div className="flex-1 text-left">
                              <p className="text-sm font-medium text-gray-900">Verificare iCloud & MDM</p>
                              <p className="text-xs text-gray-500">Verificare completă a statusului</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3 p-2.5 rounded-lg bg-white/80 shadow-sm">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                              <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                              </svg>
                            </div>
                            <div className="flex-1 text-left">
                              <p className="text-sm font-medium text-gray-900">Codare rețea</p>
                              <p className="text-xs text-gray-500">Verifică statusul de blocare în rețea</p>
                            </div>
                          </div>
                        </div>
                      </motion.button>
                    </div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-8 flex justify-end space-x-4"
                    >
                      <button
                        onClick={() => setShowVerificationPopup(false)}
                        className="px-6 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors"
                      >
                        Anulează
                      </button>
                      <button
                        onClick={() => setShowVerificationPopup(false)}
                        className="px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#017AFF] to-blue-500 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-200"
                      >
                        Verifică acum
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}