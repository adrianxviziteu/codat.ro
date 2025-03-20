'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../hooks/useAuth';
import SignupFormDemo from '../components/ui/signup-form-demo';

export default function RegisterPage() {
  const { register, isLoading, error } = useAuth();

  const handleSubmit = async (name: string, email: string, password: string) => {
    await register(name, email, password);
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <div className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-base flex items-center"
              >
                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error}</span>
              </motion.div>
            )}
            
            <SignupFormDemo />
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}