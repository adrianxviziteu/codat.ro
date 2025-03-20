'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../hooks/useAuth';
import { Label } from '@/app/components/ui/label';
import { Input } from '@/app/components/ui/input';
import { cn } from '@/app/lib/utils';

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const { resetPassword, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      setSuccess(true);
    } catch (error) {
      // Eroarea este deja gestionată în hook-ul useAuth
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-white px-8 py-10 shadow-xl dark:bg-black"
        >
          <div className="text-center">
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              Resetare parolă
            </h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {success 
                ? "Verifică-ți email-ul pentru instrucțiuni de resetare a parolei"
                : "Introdu adresa de email pentru a-ți reseta parola"}
            </p>
          </div>

          {success ? (
            <div className="mt-8">
              <div className="rounded-md bg-green-50 p-4 dark:bg-green-900/20">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800 dark:text-green-200">
                      Email-ul pentru resetarea parolei a fost trimis
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Link 
                  href="/login"
                  className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-blue-700 dark:to-indigo-700 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] text-center flex items-center justify-center"
                >
                  Înapoi la conectare
                  <BottomGradient />
                </Link>
              </div>
            </div>
          ) : (
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <LabelInputContainer>
                <Label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-200">
                  Adresă email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-10 rounded-md px-3 py-2 text-sm"
                  placeholder="nume@email.com"
                />
              </LabelInputContainer>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-blue-700 dark:to-indigo-700 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                >
                  {isLoading ? "Se procesează..." : "Trimite link de resetare"} &rarr;
                  <BottomGradient />
                </button>
              </div>
            </form>
          )}

          <div className="mt-6 flex items-center justify-center">
            <div className="text-sm">
              <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                Înapoi la conectare
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {children}
    </div>
  );
};