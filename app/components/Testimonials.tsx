"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 relative">
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
          <div className="mb-2">
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
    quote: "Datorită Codat.ro am evitat să cumpăr un iPhone furat. Verificarea a durat doar 5 secunde și mi-a arătat imediat că telefonul era raportat ca pierdut.",
    name: "Maria Popescu",
    title: "Student",
  },
  {
    quote: "Interfața este super intuitivă, iar rezultatele verificării sunt instantanee. Am verificat 30 de telefoane într-o singură zi pentru magazinul nostru.",
    name: "Ion Ionescu",
    title: "Manager magazin mobile",
  },
  {
    quote: "Suportul tehnic răspunde în mai puțin de 5 minute. Am avut o întrebare despre un rezultat și am primit clarificări imediat.",
    name: "Ana Dumitrescu",
    title: "Administrator OLX",
  },
  {
    quote: "Ca reprezentant al poliției, folosim Codat.ro zilnic. Acuratețea verificărilor ne-a ajutat să recuperăm peste 200 de telefoane furate anul trecut.",
    name: "George Marinescu",
    title: "Ofițer de poliție",
  },
  {
    quote: "Am verificat un iPhone înainte de a-l cumpăra de pe un site de anunțuri și am descoperit că avea iCloud blocat. M-ați salvat de o țeapă de 3000 lei!",
    name: "Elena Stanciu",
    title: "Client mulțumit",
  },
];

const testimonials2 = [
  {
    quote: "Verificăm toate telefoanele second-hand cu Codat.ro înainte de a le achiziționa. Zero telefoane problematice de când folosim serviciul vostru!",
    name: "Cristian Radu",
    title: "Proprietar magazin second-hand",
  },
  {
    quote: "Rapiditatea serviciului e impresionantă. În mai puțin de 10 secunde primesc informații complete despre orice IMEI, inclusiv dacă telefonul e curat.",
    name: "Laura Munteanu",
    title: "Vânzător online",
  },
  {
    quote: "Am evitat o țeapă de 5000 lei când voiam să cumpăr un iPhone 14 Pro. Codat.ro a arătat că telefonul era blocat în baza de date globală.",
    name: "Alexandru Popa",
    title: "Programator",
  },
  {
    quote: "Ca service autorizat, verificăm zilnic zeci de telefoane cu Codat.ro. Interfața rapidă și API-ul vostru ne-au simplificat enorm procesele.",
    name: "Sofia Dumitru",
    title: "Manager service GSM",
  },
  {
    quote: "Prețul abonamentului e nimic pe lângă valoarea telefonului pe care l-aș fi cumpărat dacă nu verificam IMEI-ul. Cel mai bun serviciu de verificare din România!",
    name: "Mihai Constantinescu",
    title: "Antreprenor",
  },
]; 