'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Features2() {
  return (
    <section id="features" className="py-8 overflow-hidden relative">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/80 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-blue-50/20"></div>
      
      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* First Feature - Upload (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 overflow-hidden rounded-3xl backdrop-blur-xl border border-white/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-amber-500/30 animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Text Content */}
            <div className="p-6 lg:p-8 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-emerald-400 font-medium mb-1 block">STAI FARA GRIJI</span>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
                  UPLOAD IMAGES
                  <br />
                  AND AUDIO
                </h2>
                <p className="text-gray-400 text-base">
                  You can write a plain text, add images, and record audio notes.
                  Use how you prefer
                </p>
              </motion.div>
            </div>

            {/* Image */}
            <div className="p-3 lg:p-4">
              <div className="relative overflow-hidden">
                <Image
                  src="/image2.avif"
                  alt="Upload Features Demo"
                  width={500}
                  height={300}
                  className="relative z-10"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* First Row - Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
          {/* Apple Watch Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 p-4 relative overflow-hidden group transition-all duration-500 rounded-3xl backdrop-blur-xl border border-white/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-blue-500/30 animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
            <span className="text-indigo-400 font-medium mb-1 block relative z-10">WATCH APP</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 relative z-10">
              Apple watch
              <br />
              integration
            </h3>
            <div className="relative z-10">
              <Image
                src="/features/apple-watch.png"
                alt="Apple Watch Integration"
                width={300}
                height={300}
                className="relative z-20 transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Results Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 p-4 relative overflow-hidden group transition-all duration-500 rounded-3xl backdrop-blur-xl border border-white/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
            <span className="text-emerald-400 font-medium mb-1 block relative z-10">TRACK YOUR PROGRESS</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 relative z-10">
              Instant and
              <br />
              precise results
            </h3>
            <div className="relative z-10">
              <Image
                src="/features/results-demo.png"
                alt="Results Demo"
                width={300}
                height={300}
                className="relative z-20 transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Middle Feature - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 overflow-hidden group transition-all duration-500 rounded-3xl backdrop-blur-xl border border-white/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500/30 to-pink-500/30 animate-[pulse_8s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Text Content */}
            <div className="p-6 lg:p-8 text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-rose-400 font-medium mb-1 block">ADVANCED FEATURES</span>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
                  Powerful Tools
                  <br />
                  At Your Fingertips
                </h2>
                <p className="text-gray-400 text-base">
                  Access advanced features and detailed analytics to make informed decisions.
                  Everything you need in one place.
                </p>
              </motion.div>
            </div>

            {/* Image */}
            <div className="p-3 lg:p-4">
              <div className="relative overflow-hidden">
                <Image
                  src="/features/upload-demo.png"
                  alt="Advanced Features Demo"
                  width={500}
                  height={300}
                  className="relative z-10 transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 