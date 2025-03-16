'use client';
import React from 'react';

export default function Pricing() {
  return (
    <div className="relative isolate px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold text-[#017AFF]">Prețuri</h2>
        <p className="mt-2 text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl lg:text-6xl">Alege planul potrivit pentru tine</p>
      </div>
      <p className="mx-auto mt-4 max-w-2xl text-center text-base text-pretty text-gray-600 sm:mt-6 sm:text-lg lg:text-xl">Alege un plan accesibil care îți oferă toate informațiile necesare pentru a verifica iPhone-ul înainte de a-l cumpăra.</p>
      <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-y-4 sm:mt-16 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        <div className="rounded-3xl bg-white/60 p-6 ring-1 ring-gray-900/10 sm:mx-8 sm:p-8 lg:mx-0 lg:rounded-tr-none lg:rounded-bl-3xl backdrop-blur-sm">
          <h3 id="tier-basic" className="text-base font-semibold text-[#017AFF]">Basic</h3>
          <p className="mt-3 flex items-baseline gap-x-2 sm:mt-4">
            <span className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">3 LEI</span>
            <span className="text-sm text-gray-500 sm:text-base">/verificare</span>
          </p>
          <p className="mt-4 text-sm text-gray-600 sm:mt-6 sm:text-base">Planul perfect pentru verificarea rapidă a unui iPhone înainte de achiziție.</p>
          <ul role="list" className="mt-6 space-y-2.5 text-sm text-gray-600 sm:mt-8 sm:space-y-3">
            <li className="flex gap-x-3">
              <svg className="h-6 w-5 flex-none text-[#017AFF]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Status Activare
            </li>
            <li className="flex gap-x-3">
              <svg className="h-6 w-5 flex-none text-[#017AFF]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Garanție Apple
            </li>
            <li className="flex gap-x-3">
              <svg className="h-6 w-5 flex-none text-[#017AFF]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Model și Specificații
            </li>
            <li className="flex gap-x-3">
              <svg className="h-6 w-5 flex-none text-[#017AFF]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Raport PDF
            </li>
          </ul>
          <a href="#" aria-describedby="tier-basic" className="mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold text-[#017AFF] ring-1 ring-[#017AFF]/20 ring-inset hover:ring-[#017AFF]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#017AFF] sm:mt-8 sm:px-3.5 sm:py-2.5">Verifică acum</a>
        </div>
        <div className="relative rounded-3xl bg-gray-900 p-6 ring-1 shadow-2xl ring-gray-900/10 sm:p-8 backdrop-blur-sm">
          <h3 id="tier-pro" className="text-base font-semibold text-[#017AFF]/80">PRO</h3>
          <p className="mt-3 flex items-baseline gap-x-2 sm:mt-4">
            <span className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">5 LEI</span>
            <span className="text-sm text-gray-400 sm:text-base">/verificare</span>
          </p>
          <p className="mt-4 text-sm text-gray-300 sm:mt-6 sm:text-base">Verificare completă pentru a te asigura că iPhone-ul este perfect.</p>
          <ul role="list" className="mt-6 space-y-2.5 text-sm text-gray-300 sm:mt-8 sm:space-y-3">
            <li className="flex gap-x-3">
              <svg className="h-6 w-5 flex-none text-[#017AFF]/80" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Status Activare
            </li>
            <li className="flex gap-x-3">
              <svg className="h-6 w-5 flex-none text-[#017AFF]/80" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Verificare iCloud
            </li>
            <li className="flex gap-x-3">
              <svg className="h-6 w-5 flex-none text-[#017AFF]/80" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Garanție Apple
            </li>
            <li className="flex gap-x-3">
              <svg className="h-6 w-5 flex-none text-[#017AFF]/80" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Blocare Operator
            </li>
            <li className="flex gap-x-3">
              <svg className="h-6 w-5 flex-none text-[#017AFF]/80" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Status MDM
            </li>
            <li className="flex gap-x-3">
              <svg className="h-6 w-5 flex-none text-[#017AFF]/80" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Blacklist Status
            </li>
            <li className="flex gap-x-3">
              <svg className="h-6 w-5 flex-none text-[#017AFF]/80" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Model și Specificații
            </li>
            <li className="flex gap-x-3">
              <svg className="h-6 w-5 flex-none text-[#017AFF]/80" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              Raport PDF detaliat
            </li>
          </ul>
          <a href="#" aria-describedby="tier-pro" className="mt-6 block rounded-md bg-[#017AFF] px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#0165d4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#017AFF] sm:mt-8 sm:px-3.5 sm:py-2.5">Verifică acum</a>
        </div>
      </div>
    </div>
  );
} 