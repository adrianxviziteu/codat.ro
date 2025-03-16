'use client';
import React from 'react';
import {
  IconShieldCheck,
  IconCloudCheck,
  IconDeviceMobile,
  IconLock,
  IconCertificate,
  IconAlertCircle,
  IconDeviceMobileCheck,
  IconShieldLock,
  IconCheck,
} from "@tabler/icons-react";

export default function Features() {
  const features = [
    {
      title: "Status Activare",
      description:
        "Verifică dacă iPhone-ul este activat și poate fi folosit fără probleme.",
      icon: <IconShieldCheck className="w-6 h-6" />,
      included: "both" as const,
    },
    {
      title: "Verificare iCloud",
      description:
        "Află dacă dispozitivul este blocat în iCloud sau are Find My iPhone activ.",
      icon: <IconCloudCheck className="w-6 h-6" />,
      included: "pro" as const,
    },
    {
      title: "Garanție Apple",
      description:
        "Verifică dacă telefonul este încă în garanție și până când.",
      icon: <IconCertificate className="w-6 h-6" />,
      included: "both" as const,
    },
    {
      title: "Blocare Operator",
      description:
        "Află dacă iPhone-ul este blocat în rețeaua unui operator.",
      icon: <IconLock className="w-6 h-6" />,
      included: "pro" as const,
    },
    {
      title: "Status MDM",
      description:
        "Verifică dacă dispozitivul este înregistrat într-un sistem MDM.",
      icon: <IconDeviceMobile className="w-6 h-6" />,
      included: "pro" as const,
    },
    {
      title: "Blacklist Status",
      description:
        "Verifică dacă IMEI-ul este raportat ca furat sau blocat.",
      icon: <IconAlertCircle className="w-6 h-6" />,
      included: "pro" as const,
    },
    {
      title: "Model și Specificații",
      description:
        "Identifică modelul exact și specificațiile tehnice ale dispozitivului.",
      icon: <IconDeviceMobileCheck className="w-6 h-6" />,
      included: "both" as const,
    },
    {
      title: "Verificare Completă",
      description:
        "Raport detaliat cu toate informațiile despre dispozitiv.",
      icon: <IconShieldLock className="w-6 h-6" />,
      included: "pro" as const,
    },
  ] as const;

  return (
    <div className="relative py-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tot ce trebuie să știi despre iPhone
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Verifică toate aspectele importante ale unui iPhone înainte de a-l cumpăra.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Basic Plan */}
          <div className="flex-1 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-blue-50 p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900">Basic</h3>
              <div className="mt-2 flex items-end">
                <span className="text-3xl font-bold text-[#017AFF]">3 LEI</span>
                <span className="ml-1 text-sm text-gray-500">per verificare</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {features
                  .filter(feature => feature.included === "both")
                  .map(feature => (
                    <li key={feature.title} className="flex">
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 mr-3">
                        <IconCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{feature.title}</p>
                        <p className="text-sm text-gray-500">{feature.description}</p>
                      </div>
                    </li>
                  ))
                }
                {features
                  .filter(feature => feature.included === "pro")
                  .map(feature => (
                    <li key={feature.title} className="flex opacity-50">
                      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-400 mr-3">
                        <span className="block w-4 h-0.5 bg-gray-400"></span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-400">{feature.title}</p>
                      </div>
                    </li>
                  ))
                }
              </ul>
              <div className="mt-8">
                <a 
                  href="#" 
                  className="block w-full text-center px-6 py-3 text-sm font-medium text-[#017AFF] bg-white border border-[#017AFF] rounded-lg hover:bg-blue-50 transition-colors duration-300"
                >
                  Alege Basic
                </a>
              </div>
            </div>
          </div>
          
          {/* Pro Plan */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl overflow-hidden border border-[#017AFF]/20 hover:shadow-2xl transition-shadow duration-300 relative">
            <div className="absolute top-0 right-0 bg-[#017AFF] text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
              Recomandat
            </div>
            <div className="bg-[#017AFF]/10 p-6 border-b border-[#017AFF]/10">
              <h3 className="text-xl font-bold text-gray-900">PRO</h3>
              <div className="mt-2 flex items-end">
                <span className="text-3xl font-bold text-[#017AFF]">5 LEI</span>
                <span className="ml-1 text-sm text-gray-500">per verificare</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {features.map(feature => (
                  <li key={feature.title} className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 mr-3">
                      <IconCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{feature.title}</p>
                      <p className="text-sm text-gray-500">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a 
                  href="#" 
                  className="block w-full text-center px-6 py-3 text-sm font-medium text-white bg-[#017AFF] rounded-lg hover:bg-[#0165d4] shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Alege PRO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 