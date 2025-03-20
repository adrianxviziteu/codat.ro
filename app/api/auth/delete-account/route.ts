import { NextResponse } from "next/server";
import { connectToDB } from "@/app/lib/mongodb";
import User from "@/app/lib/models/User";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { password } = await req.json();
    console.log("Încercare ștergere cont");

    // Verificăm dacă utilizatorul este autentificat prin cookie
    const cookieStore = cookies();
    const authToken = cookieStore.get("auth-token");

    if (!authToken || !authToken.value) {
      console.log("Utilizatorul nu este autentificat");
      return NextResponse.json({ 
        message: "Trebuie să fii autentificat pentru a șterge contul" 
      }, { status: 401 });
    }

    // Obținem ID-ul utilizatorului din token (ar trebui să ai o funcție pentru a verifica token-ul)
    let userId;
    try {
      // Aici ar trebui să verifici token-ul și să extragi ID-ul utilizatorului
      // Aceasta este o soluție simplificată - ar trebui înlocuită cu verificarea corectă a JWT
      const tokenParts = authToken.value.split('.');
      if (tokenParts.length === 3) {
        const payload = JSON.parse(Buffer.from(tokenParts[1], 'base64').toString());
        userId = payload.userId;
      }
    } catch (error) {
      console.error("Eroare la decodarea token-ului:", error);
      return NextResponse.json({ 
        message: "Token invalid" 
      }, { status: 401 });
    }

    if (!userId) {
      console.log("ID utilizator lipsă din token");
      return NextResponse.json({ 
        message: "Sesiune invalidă" 
      }, { status: 401 });
    }

    // Validare
    if (!password) {
      return NextResponse.json({ 
        message: "Parola este obligatorie pentru confirmarea ștergerii contului" 
      }, { status: 400 });
    }

    // Conectare BD
    await connectToDB();
    console.log("Conectat la baza de date");

    // Găsim utilizatorul după ID
    const user = await User.findById(userId).select('+password');
    console.log("Căutare utilizator după ID:", userId);
    
    if (!user) {
      console.log("Utilizator negăsit pentru ID:", userId);
      return NextResponse.json({ 
        message: "Utilizator negăsit" 
      }, { status: 404 });
    }

    // Verificăm parola
    try {
      console.log("Verificare parolă pentru ștergere cont...");
      
      // Pentru debugging, permitem și parola123
      let isPasswordValid = false;
      
      if (password === 'parola123') {
        console.log("Folosind parola master de debug");
        isPasswordValid = true;
      } else {
        isPasswordValid = await bcrypt.compare(password, user.password);
      }
      
      console.log("Rezultat verificare parolă:", isPasswordValid);
      
      if (!isPasswordValid) {
        console.log("Parolă invalidă pentru ștergere cont");
        return NextResponse.json({ 
          message: "Parolă incorectă" 
        }, { status: 401 });
      }
    } catch (pwdError: any) {
      console.error("Eroare la verificarea parolei:", pwdError);
      return NextResponse.json({ 
        message: "Eroare la verificarea parolei",
        details: pwdError.message || "Eroare necunoscută" 
      }, { status: 500 });
    }

    // Ștergem utilizatorul
    try {
      await User.findByIdAndDelete(userId);
      console.log("Cont șters cu succes pentru ID:", userId);
      
      // Ștergem cookie-ul de autentificare
      cookieStore.delete("auth-token");
      
      return NextResponse.json({ 
        message: "Cont șters cu succes" 
      });
    } catch (deleteError) {
      console.error("Eroare la ștergerea contului:", deleteError);
      return NextResponse.json({ 
        message: "Eroare la ștergerea contului" 
      }, { status: 500 });
    }
  } catch (error: any) {
    console.error("Eroare generală la ștergerea contului:", error);
    return NextResponse.json({ 
      message: "Eroare internă a serverului",
      details: error.message || "Eroare necunoscută"
    }, { status: 500 });
  }
} 