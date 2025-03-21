"use client";

import React from 'react';

export default function CtaOverlap() {
  return (
    <div className="bg-white">
      <div id="contact" className="relative z-20 max-w-6xl mx-auto px-4 -mb-40">
        <div className="bg-white rounded-xl p-8 sm:p-12 overflow-hidden relative text-center shadow-xl animate-glow">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          
          <div className="relative z-10">
            <p className="text-gray-600 mb-4">
              Serviciul numărul 1 de verificare IMEI în România
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
              Verifică-ti iPhone-ul cu <span className="text-blue-600">CODAT.RO</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md">
                Verifică acum
              </a>
              <a href="#" className="border border-gray-400 hover:border-gray-600 text-gray-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                Află mai multe
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}