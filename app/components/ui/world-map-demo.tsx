"use client";
import WorldMap from "./world-map";
import { motion } from "framer-motion";

export default function WorldMapDemo() {
  return (
    <div id="sticky-scroll" className="py-20 w-full relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
      
      {/* Background gradient overlay - schimbat la alb */}
      <div className="absolute inset-0 bg-white"></div>
      <div className="absolute inset-0 bg-white"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100">
          <span className="text-sm font-medium text-[#017AFF]">VERIFICAM GLOBAL</span>
        </div>
        
        <p className="font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
          Acces la{" "}
          <span className="text-[#017AFF]">
            {"toate".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
          {" "}bazele de date
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Verificăm instant orice iPhone, oriunde s-ar afla în lume
        </p>
      </div>
      <div className="relative max-w-6xl mx-auto">
        <WorldMap
          dots={[
            {
              start: {
                lat: 44.4268,
                lng: 26.1025,
              }, // București
              end: {
                lat: 37.7749,
                lng: -122.4194,
              }, // San Francisco
            },
            {
              start: { lat: 44.4268, lng: 26.1025 }, // București
              end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
            },
            {
              start: { lat: 44.4268, lng: 26.1025 }, // București
              end: { lat: 51.5074, lng: -0.1278 }, // London
            },
            {
              start: { lat: 44.4268, lng: 26.1025 }, // București
              end: { lat: -33.8688, lng: 151.2093 }, // Sydney
            },
            {
              start: { lat: 44.4268, lng: 26.1025 }, // București
              end: { lat: 1.3521, lng: 103.8198 }, // Singapore
            },
          ]}
          lineColor="#017AFF"
        />
      </div>
    </div>
  );
} 