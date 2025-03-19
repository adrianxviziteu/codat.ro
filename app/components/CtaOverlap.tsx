"use client";

import React from 'react';

export default function CtaOverlap() {
  return (
    <div className="relative z-20 max-w-6xl mx-auto px-4 -mb-40">
      <div className="bg-gray-900 rounded-xl p-8 sm:p-12 overflow-hidden relative text-center shadow-2xl">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <p className="text-gray-300 mb-4">
            Serviciul numărul 1 de verificare IMEI în România
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Verifică-ti iPhone-ul cu <span className="text-blue-400">CODAT.RO</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md">
              Verifică acum
            </a>
            <a href="#" className="border border-gray-600 hover:border-gray-400 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              Află mai multe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 