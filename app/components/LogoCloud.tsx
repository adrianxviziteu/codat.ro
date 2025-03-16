import React from 'react';

export default function LogoCloud() {
  return (
    <div className="bg-transparent py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Folosit și recomandat de cele mai inovative companii
        </h2>
        <div className="mx-auto mt-6 grid max-w-lg grid-cols-4 items-center gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6 sm:gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img 
            className="col-span-2 max-h-10 w-full object-contain lg:col-span-1" 
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg" 
            alt="iStyle" 
            width="158" 
            height="48"
          />
          <img 
            className="col-span-2 max-h-10 w-full object-contain lg:col-span-1" 
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg" 
            alt="QuickMobile" 
            width="158" 
            height="48"
          />
          <img 
            className="col-span-2 max-h-10 w-full object-contain lg:col-span-1" 
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg" 
            alt="iCentre" 
            width="158" 
            height="48"
          />
          <img 
            className="col-span-2 max-h-10 w-full object-contain sm:col-start-2 lg:col-span-1" 
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg" 
            alt="eMAG" 
            width="158" 
            height="48"
          />
          <img 
            className="col-span-2 col-start-2 max-h-10 w-full object-contain sm:col-start-auto lg:col-span-1" 
            src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg" 
            alt="Flip" 
            width="158" 
            height="48"
          />
        </div>
      </div>
    </div>
  );
} 