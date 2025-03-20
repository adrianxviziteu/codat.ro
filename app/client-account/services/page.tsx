"use client";

import { useState } from "react";
import Link from "next/link";

export default function ClientServices() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Deblocare IMEI",
      description: "Deblocăm orice telefon blocat pe rețea prin IMEI.",
      price: "50 RON",
      timeframe: "12-24 ore",
      status: "Disponibil",
      image: "/services/imei-unlock.jpg"
    },
    {
      id: 2,
      name: "Deblocare iCloud",
      description: "Eliminăm blocarea iCloud pentru dispozitive Apple.",
      price: "100 RON",
      timeframe: "1-3 zile",
      status: "Disponibil",
      image: "/services/icloud-unlock.jpg"
    },
    {
      id: 3,
      name: "Deblocare Google",
      description: "Deblocăm contul Google de pe orice dispozitiv Android.",
      price: "75 RON",
      timeframe: "24-48 ore",
      status: "Disponibil",
      image: "/services/google-unlock.jpg"
    },
    {
      id: 4,
      name: "Reparație Software",
      description: "Rezolvăm probleme software pentru telefoane și tablete.",
      price: "80 RON",
      timeframe: "1-2 zile",
      status: "Disponibil",
      image: "/services/software-repair.jpg"
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6 md:p-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Servicii disponibile
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Alege dintre serviciile noastre de deblocare și reparație pentru dispozitivele tale.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-40 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback pentru imagini lipsă
                          (e.target as HTMLImageElement).src = "https://via.placeholder.com/300x150?text=Serviciu";
                        }}
                      />
                    ) : (
                      <div className="text-gray-400 dark:text-gray-500">Imagine indisponibilă</div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {service.name}
                      </h3>
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100">
                        {service.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <p className="text-gray-700 dark:text-gray-200 font-medium">
                          {service.price}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Timp estimat: {service.timeframe}
                        </p>
                      </div>
                      <Link
                        href={`/services/${service.id}`}
                        className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
                      >
                        Comandă
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Cum funcționează?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Alege serviciul</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Selectează serviciul de care ai nevoie din lista de mai sus.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Furnizează detaliile</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Completează formularul cu detaliile necesare pentru deblocare.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Primește rezultatul</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Vei fi notificat când serviciul este finalizat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 