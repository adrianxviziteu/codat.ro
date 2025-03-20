"use client";

import { Toaster } from "sonner";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
} 