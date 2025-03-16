"use client";
import { TypewriterEffectSmooth } from "./typewriter-effect";

export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Verifică",
    },
    {
      text: "iPhone-ul",
    },
    {
      text: "cu",
    },
    {
      text: "CODAT.RO",
      className: "text-blue-500 font-bold",
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-gray-300 text-xs sm:text-base">
        Serviciul numărul 1 de verificare IMEI în România
      </p>
      <TypewriterEffectSmooth words={words} className="text-white" />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-4">
        <button className="w-40 h-10 rounded-xl bg-blue-500 border border-blue-600 text-white text-sm hover:bg-blue-600 transition-colors">
          Verifică acum
        </button>
        <button className="w-40 h-10 rounded-xl bg-transparent text-white border border-gray-600 text-sm hover:bg-gray-800 transition-colors">
          Află mai multe
        </button>
      </div>
    </div>
  );
} 