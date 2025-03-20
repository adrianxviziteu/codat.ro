'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Features2() {
  return (
    <section id="features" className="py-8 overflow-hidden relative">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      
      {/* Background gradient overlay - schimbat la alb */}
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* First Feature - Verificare IMEI (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 overflow-hidden rounded-3xl backdrop-blur-xl border border-white/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Text Content */}
            <div className="p-6 lg:p-8 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-blue-400 font-medium mb-1 block">VERIFICARE COMPLETĂ</span>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
                  Verifică orice iPhone
                  <br />
                  în câteva secunde
                </h2>
                <p className="text-gray-300 text-base">
                  Cu CODAT.ro, verificarea IMEI-ului unui iPhone nu a fost niciodată mai simplă. 
                  Obții instantaneu informații despre starea telefonului, blocaje iCloud, pierdut/furat și multe altele.
                </p>
              </motion.div>
            </div>

            {/* Image */}
            <div className="p-3 lg:p-4">
              <div className="relative overflow-hidden">
                <Image
                  src="/imei-check.jpg"
                  alt="Verificare IMEI iPhone"
                  width={500}
                  height={300}
                  className="relative z-10 rounded-xl"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* First Row - Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
          {/* Clean/Block Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 p-4 relative overflow-hidden group transition-all duration-500 rounded-3xl backdrop-blur-xl border border-white/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
            <span className="text-emerald-400 font-medium mb-1 block relative z-10">STATUS TELEFON</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 relative z-10">
              Clean sau
              <br />
              Blocked
            </h3>
            <p className="text-gray-300 text-sm mb-4 relative z-10">
              Află instant dacă telefonul are status Clean sau dacă prezintă blocaje în bazele de date globale.
            </p>
            <div className="relative z-10 flex justify-center">
              <Image
                src="/clean-blocked.png"
                alt="Status Clean/Blocked"
                width={280}
                height={280}
                className="relative z-20 transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* iCloud Lock */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 p-4 relative overflow-hidden group transition-all duration-500 rounded-3xl backdrop-blur-xl border border-white/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
            <span className="text-blue-400 font-medium mb-1 block relative z-10">SECURITATE iCLOUD</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 relative z-10">
              Verificare
              <br />
              iCloud Lock
            </h3>
            <p className="text-gray-300 text-sm mb-4 relative z-10">
              Verifică dacă iPhone-ul are iCloud blocat sau dacă Activation Lock este activat înainte de a cumpăra.
            </p>
            <div className="relative z-10 flex justify-center">
              <Image
                src="/icloud-lock.png"
                alt="iCloud Lock Verificare"
                width={280}
                height={280}
                className="relative z-20 transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 