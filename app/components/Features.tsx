'use client';
import { cn } from "../lib/utils";
import {
  IconShieldCheck,
  IconCloudCheck,
  IconDeviceMobile,
  IconLock,
  IconCertificate,
  IconAlertCircle,
  IconDeviceMobileCheck,
  IconShieldLock,
} from "@tabler/icons-react";

export default function Features() {
  const features = [
    {
      title: "Status Activare",
      description:
        "Verifică dacă iPhone-ul este activat și poate fi folosit fără probleme. Evită dispozitivele blocate sau furate.",
      icon: <IconShieldCheck className="w-8 h-8" />,
      included: "both" as const,
    },
    {
      title: "Verificare iCloud",
      description:
        "Află dacă dispozitivul este blocat în iCloud sau are Find My iPhone activ. Esențial pentru achiziții sigure.",
      icon: <IconCloudCheck className="w-8 h-8" />,
      included: "pro" as const,
    },
    {
      title: "Garanție Apple",
      description:
        "Verifică dacă telefonul este încă în garanție și până când. Include detalii despre acoperirea AppleCare+.",
      icon: <IconCertificate className="w-8 h-8" />,
      included: "both" as const,
    },
    {
      title: "Blocare Operator",
      description:
        "Află dacă iPhone-ul este blocat în rețeaua unui operator sau poate fi folosit cu orice SIM.",
      icon: <IconLock className="w-8 h-8" />,
      included: "pro" as const,
    },
    {
      title: "Status MDM",
      description:
        "Verifică dacă dispozitivul este înregistrat într-un sistem de management la distanță (MDM).",
      icon: <IconDeviceMobile className="w-8 h-8" />,
      included: "pro" as const,
    },
    {
      title: "Blacklist Status",
      description:
        "Verifică dacă IMEI-ul este raportat ca furat sau blocat în baza de date globală.",
      icon: <IconAlertCircle className="w-8 h-8" />,
      included: "pro" as const,
    },
    {
      title: "Model și Specificații",
      description:
        "Identifică modelul exact, capacitatea și specificațiile tehnice ale dispozitivului.",
      icon: <IconDeviceMobileCheck className="w-8 h-8" />,
      included: "both" as const,
    },
    {
      title: "Verificare Completă",
      description:
        "Raport detaliat cu toate informațiile despre dispozitiv într-un singur loc.",
      icon: <IconShieldLock className="w-8 h-8" />,
      included: "pro" as const,
    },
  ] as const;

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tot ce trebuie să știi despre iPhone
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Verifică toate aspectele importante ale unui iPhone înainte de a-l cumpăra.
            Alege planul potrivit nevoilor tale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  included,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  included: "both" | "pro";
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r border-gray-100 py-10 relative group/feature",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-[#017AFF]">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-200 group-hover/feature:bg-[#017AFF] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-900">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-600 max-w-xs relative z-10 px-10 mb-4">
        {description}
      </p>
      <div className="px-10 mt-auto">
        <span className={cn(
          "text-xs font-medium px-2.5 py-1 rounded-full",
          included === "both" 
            ? "bg-green-100 text-green-700"
            : "bg-blue-100 text-[#017AFF]"
        )}>
          {included === "both" ? "Basic & PRO" : "Doar PRO"}
        </span>
      </div>
    </div>
  );
}; 