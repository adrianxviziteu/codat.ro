"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ClientAccount() {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const router = useRouter();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [password, setPassword] = useState("");
  const [deleteError, setDeleteError] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [services, setServices] = useState([
    { id: 1, name: "Deblocare IMEI", price: "50 RON", status: "Disponibil" },
    { id: 2, name: "Deblocare iCloud", price: "100 RON", status: "Disponibil" },
    { id: 3, name: "Deblocare Google", price: "75 RON", status: "Disponibil" },
  ]);

  // Redirecționare utilizator neautentificat către login
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isLoading, isAuthenticated, router]);

  // Funcția pentru ștergerea contului
  const handleDeleteAccount = async () => {
    if (!password) {
      setDeleteError("Te rugăm să introduci parola pentru confirmare");
      return;
    }

    try {
      setIsDeleting(true);
      setDeleteError("");

      const response = await fetch("/api/auth/delete-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Eroare la ștergerea contului");
      }

      // Dacă ștergerea a reușit, deconectăm utilizatorul și îl redirecționăm
      logout();
      router.push("/?deleted=true");
    } catch (error: any) {
      setDeleteError(error.message || "A apărut o eroare. Încearcă din nou.");
    } finally {
      setIsDeleting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6 md:p-8">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Bine ai venit în contul tău client
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {user ? `${user.name} (${user.email})` : "Utilizator"}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                    Informații personale
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Nume:</span>
                      <span className="ml-2 font-medium text-gray-800 dark:text-white">
                        {user?.name || "Nume utilizator"}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Email:</span>
                      <span className="ml-2 font-medium text-gray-800 dark:text-white">
                        {user?.email || "email@exemplu.com"}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Data înregistrării:</span>
                      <span className="ml-2 font-medium text-gray-800 dark:text-white">
                        {new Date().toLocaleDateString("ro-RO")}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                    Statistici cont
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Servicii utilizate:</span>
                      <span className="ml-2 font-medium text-gray-800 dark:text-white">0</span>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Comenzi active:</span>
                      <span className="ml-2 font-medium text-gray-800 dark:text-white">0</span>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Credit disponibil:</span>
                      <span className="ml-2 font-medium text-gray-800 dark:text-white">0 RON</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Servicii disponibile
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Serviciu
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Preț
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                      >
                        Acțiuni
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {services.map((service) => (
                      <tr key={service.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {service.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 dark:text-gray-300">
                            {service.price}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100">
                            {service.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link
                            href={`/services/${service.id}`}
                            className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            Comandă
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Istoricul comenzilor
              </h2>
              <div className="flex items-center justify-center p-10 text-gray-500 dark:text-gray-400 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
                <p>Nu ai nicio comandă anterioară.</p>
              </div>
            </div>
          </div>

          {/* Ștergere cont */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Setări cont
              </h2>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-red-600 dark:text-red-400">
                      Ștergere cont
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      Această acțiune va șterge permanent contul tău și toate datele asociate.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowDeleteModal(true)}
                    className="mt-4 md:mt-0 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
                  >
                    Șterge contul
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal pentru confirmarea ștergerii contului */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Confirmare ștergere cont
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Această acțiune este ireversibilă. Toate datele tale vor fi șterse definitiv.
                Te rugăm să introduci parola pentru a confirma.
              </p>
              
              {deleteError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {deleteError}
                </div>
              )}
              
              <div className="mb-4">
                <label 
                  htmlFor="password" 
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Parolă
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Introdu parola ta"
                />
              </div>
              
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => {
                    setShowDeleteModal(false);
                    setPassword("");
                    setDeleteError("");
                  }}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors"
                >
                  Anulează
                </button>
                <button
                  onClick={handleDeleteAccount}
                  disabled={isDeleting}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isDeleting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Se procesează...
                    </span>
                  ) : (
                    "Șterge definitiv"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 