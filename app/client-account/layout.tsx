"use client";

import Link from "next/link";
import { useAuth } from "@/app/hooks/useAuth";
import { usePathname } from "next/navigation";

export default function ClientAccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout, isAuthenticated } = useAuth();
  const pathname = usePathname();

  const menuItems = [
    { name: "Panou principal", href: "/client-account" },
    { name: "Servicii", href: "/client-account/services" },
    { name: "Comenzile mele", href: "/client-account/orders" },
    { name: "Setări cont", href: "/client-account/settings" },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header cu navigare */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
                CODAT.RO
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated && (
                <>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">
                    {user?.name}
                  </span>
                  <button
                    onClick={() => logout()}
                    className="text-sm px-3 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Deconectare
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Navbar secundar pentru navigarea în cont */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 h-12 overflow-x-auto">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? "text-blue-700 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Conținutul paginii */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="mt-auto bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} CODAT.RO - Toate drepturile rezervate
          </div>
        </div>
      </footer>
    </div>
  );
} 