import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function useAuth() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [status, setStatus] = useState<'loading' | 'authenticated' | 'unauthenticated'>('loading');
  const router = useRouter();

  const isLoading = loading || status === 'loading';
  const isAuthenticated = status === 'authenticated';

  // Verifică dacă există un utilizator autentificat la încărcarea paginii
  useEffect(() => {
    const checkAuth = async () => {
      try {
        setStatus('loading');
        const response = await fetch('/api/auth/me');
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
          setStatus('authenticated');
        } else {
          setStatus('unauthenticated');
        }
      } catch (error) {
        console.error('Eroare la verificarea autentificării:', error);
        setStatus('unauthenticated');
      }
    };

    checkAuth();
  }, []);

  // Autentificare utilizator
  const login = async (email: string, password: string, redirect = true) => {
    try {
      setError(null);
      setLoading(true);
      
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Autentificare eșuată');
        toast.error(data.message || 'Autentificare eșuată');
        return false;
      }
      
      setUser(data.user);
      setStatus('authenticated');
      toast.success('Autentificare reușită!');
      
      if (redirect) {
        router.push('/client-account');
      }
      
      return true;
    } catch (err: any) {
      setError(err.message || 'A apărut o eroare la autentificare');
      toast.error(err.message || 'A apărut o eroare la autentificare');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Înregistrare utilizator nou
  const register = async (name: string, email: string, password: string) => {
    try {
      console.log("Începere proces înregistrare...");
      setError(null);
      setLoading(true);
      
      // Setăm un timeout pentru cerere
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);
      
      console.log("Trimitere cerere de înregistrare...");
      
      try {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
          signal: controller.signal,
        });
        
        clearTimeout(timeoutId);
        console.log("Răspuns primit:", response.status);
        
        let data;
        try {
          data = await response.json();
          console.log("Date răspuns:", data);
        } catch (err) {
          console.error("Eroare la parsarea răspunsului JSON:", err);
          throw new Error("Eroare la citirea răspunsului de la server");
        }

        if (!response.ok) {
          console.error("Eroare la înregistrare:", data.message);
          setError(data.message || 'A apărut o eroare la înregistrare');
          toast.error(data.message || 'A apărut o eroare la înregistrare');
          return false;
        }

        console.log("Înregistrare reușită!");
        toast.success('Cont creat cu succes!');
        
        // Redirecționare către pagina de cont client în loc de login
        router.push('/client-account');
        return true;
      } catch (fetchError: any) {
        clearTimeout(timeoutId);
        if (fetchError.name === 'AbortError') {
          console.error("Cererea a fost întreruptă din cauza timeout-ului");
          throw new Error("Cererea a durat prea mult. Verificați conexiunea la internet și încercați din nou.");
        }
        throw fetchError;
      }
    } catch (err: any) {
      console.error("Excepție la înregistrare:", err);
      setError(err.message || 'A apărut o eroare la înregistrare');
      toast.error(err.message || 'A apărut o eroare la înregistrare');
      return false;
    } finally {
      console.log("Procesul de înregistrare s-a încheiat.");
      setLoading(false);
    }
  };

  // Deconectare utilizator
  const logout = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Delogare eșuată');
      }

      setUser(null);
      setStatus('unauthenticated');
      toast.success('Ai fost deconectat cu succes!');
      router.push('/');
      return true;
    } catch (err: any) {
      setError(err.message || 'A apărut o eroare la deconectare');
      toast.error(err.message || 'A apărut o eroare la deconectare');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Resetare parolă
  const resetPassword = async (email: string) => {
    try {
      setError(null);
      setLoading(true);

      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'A apărut o eroare la resetarea parolei');
        toast.error(data.message || 'A apărut o eroare la resetarea parolei');
        return false;
      }

      toast.success('Email-ul pentru resetarea parolei a fost trimis!');
      return true;
    } catch (err: any) {
      setError(err.message || 'A apărut o eroare la resetarea parolei');
      toast.error(err.message || 'A apărut o eroare la resetarea parolei');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    register,
    logout,
    resetPassword,
  };
} 