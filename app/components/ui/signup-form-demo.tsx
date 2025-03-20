"use client";
import React, { useState, useEffect } from "react";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { cn } from "@/app/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandFacebook,
  IconEye,
  IconEyeOff,
} from "@tabler/icons-react";
import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";

export default function SignupFormDemo() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [localLoading, setLocalLoading] = useState(false);
  const { register, isLoading } = useAuth();

  useEffect(() => {
    // Timeout de siguranță pentru a evita blocarea butonului în cazul în care serverul nu răspunde
    let timeout: NodeJS.Timeout;
    
    if (localLoading) {
      timeout = setTimeout(() => {
        setLocalLoading(false);
        console.log("Timeout declanșat! Resetare stare buton.");
      }, 10000); // 10 secunde timeout
    }
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [localLoading]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
    
    setLocalLoading(true);
    const fullName = `${firstname} ${lastname}`.trim();
    try {
      await register(fullName, email, password);
    } catch (error) {
      console.error("Eroare la înregistrare:", error);
    } finally {
      // Am adăugat un delay mic pentru a permite procesarea răspunsului
      setTimeout(() => {
        setLocalLoading(false);
      }, 500);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const buttonIsLoading = isLoading || localLoading;

  return (
    <div className="shadow-input mx-auto w-full rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Bine ai venit pe CODAT.RO
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Înregistrează-te pentru a accesa toate serviciile noastre premium
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">Prenume</Label>
            <Input 
              id="firstname" 
              placeholder="Alex" 
              type="text" 
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Nume</Label>
            <Input 
              id="lastname" 
              placeholder="Popescu" 
              type="text" 
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Adresă Email</Label>
          <Input 
            id="email" 
            placeholder="nume@email.com" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Parolă</Label>
          <div className="relative">
            <Input 
              id="password" 
              placeholder="••••••••" 
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button 
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              {showPassword ? (
                <IconEyeOff className="h-5 w-5" />
              ) : (
                <IconEye className="h-5 w-5" />
              )}
            </button>
          </div>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="confirmPassword">Confirmă parola</Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              placeholder="••••••••"
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button 
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              {showConfirmPassword ? (
                <IconEyeOff className="h-5 w-5" />
              ) : (
                <IconEye className="h-5 w-5" />
              )}
            </button>
          </div>
          {password !== confirmPassword && confirmPassword && (
            <p className="text-xs text-red-500 mt-1">Parolele nu coincid</p>
          )}
        </LabelInputContainer>

        <div className="flex items-center mb-6">
          <input
            id="terms"
            type="checkbox"
            required
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="h-4 w-4 text-[#2663EB] border-gray-300 rounded focus:ring-[#2663EB]"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
            Accept <Link href="/terms" className="text-[#2663EB] hover:text-blue-700 font-medium">termenii și condițiile</Link>
          </label>
        </div>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-[#2663EB] font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
          disabled={buttonIsLoading || password !== confirmPassword || !termsAccepted}
        >
          {buttonIsLoading ? "Procesare..." : "Înregistrează-te"} &rarr;
          <BottomGradient />
        </button>

        <div className="mt-4 text-center text-sm">
          <span className="text-neutral-600 dark:text-neutral-400">Ai deja un cont? </span>
          <Link href="/login" className="text-[#2663EB] font-medium hover:underline">
            Conectează-te
          </Link>
        </div>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex flex-row space-x-4 justify-center">
          <button
            className="group/btn shadow-input relative flex h-12 w-12 items-center justify-center rounded-md bg-gray-50 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="button"
          >
            <IconBrandGithub className="h-5 w-5 text-neutral-800 dark:text-neutral-300" />
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-12 w-12 items-center justify-center rounded-md bg-gray-50 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="button"
          >
            <IconBrandGoogle className="h-5 w-5 text-neutral-800 dark:text-neutral-300" />
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-12 w-12 items-center justify-center rounded-md bg-gray-50 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="button"
          >
            <IconBrandFacebook className="h-5 w-5 text-neutral-800 dark:text-neutral-300" />
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-[#2663EB] to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-[#2663EB] to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
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
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
}; 