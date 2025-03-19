"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <section className="py-16 relative">
      {/* No separate background div - we'll use the main site background */}
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-10">
        <span className="inline-block px-3 py-1 pb-2 mb-3 text-xs font-medium text-blue-600 border border-blue-200 rounded-full bg-blue-50/50 backdrop-blur-sm">
                CE SPUN OAMENII
              </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Testimoniale</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descoperiți ce spun clienții noștri despre experiența lor cu Codat.ro
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* First row moving right */}
          <div className="mb-6">
            <InfiniteMovingCards
              items={testimonials1}
              direction="right"
              speed="slow"
            />
          </div>

          {/* Second row moving left */}
          <div>
            <InfiniteMovingCards
              items={testimonials2}
              direction="left"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials1 = [
  {
    quote: "Codat.ro mi-a salvat de atâtea ori când am vrut să verific autenticitatea unui număr de telefon. Serviciu excelent și rapid.",
    name: "Maria Popescu",
    title: "Client fidel",
  },
  {
    quote: "Interfața este intuitivă și verificarea numerelor de telefon este instantanee. Recomand tuturor care vor să evite fraudele telefonice.",
    name: "Ion Ionescu",
    title: "Antreprenor",
  },
  {
    quote: "Suportul tehnic este excepțional. Echipa răspunde rapid și oferă soluții eficiente pentru orice problemă cu verificarea numerelor.",
    name: "Ana Dumitrescu",
    title: "Manager Servicii Clienți",
  },
  {
    quote: "De când folosesc Codat.ro pentru verificarea numerelor de telefon, am redus incidentele de fraudă cu peste 60%.",
    name: "George Marinescu",
    title: "Director Securitate",
  },
  {
    quote: "O platformă modernă care face verificarea numerelor de telefon simplă și eficientă. Exact ce aveam nevoie pentru afacerea mea.",
    name: "Elena Stanciu",
    title: "Consultant Business",
  },
];

const testimonials2 = [
  {
    quote: "Verificarea automată a numerelor de telefon a fost o schimbare majoră pentru compania noastră. Mulțumim Codat.ro!",
    name: "Cristian Radu",
    title: "Director Operațional",
  },
  {
    quote: "Securitatea datelor și precizia verificărilor sunt impecabile. Codat.ro ne-a ajutat să identificăm numeroase încercări de fraudă.",
    name: "Laura Munteanu",
    title: "Manager de Securitate",
  },
  {
    quote: "Rapoartele generate după verificarea numerelor sunt clare și complete. Ne ajută să luăm decizii mai bune pentru protecția clienților.",
    name: "Alexandru Popa",
    title: "Analist Date",
  },
  {
    quote: "Integrarea cu sistemele noastre a fost simplă, iar acum toate numerele de telefon sunt verificate automat. O experiență excelentă!",
    name: "Sofia Dumitru",
    title: "Manager IT",
  },
  {
    quote: "Prețul este competitiv pentru funcționalitățile de verificare oferite. O investiție excelentă pentru siguranța companiei.",
    name: "Mihai Constantinescu",
    title: "Director de Dezvoltare",
  },
]; 