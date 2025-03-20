import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDB } from "@/app/lib/mongodb";
import User from "@/app/lib/models/User";
import { signJwtToken } from "@/app/lib/jwt";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    console.log("Încercare autentificare pentru:", email);

    // Validare
    if (!email) {
      return NextResponse.json({ message: "Email-ul este obligatoriu" }, { status: 400 });
    }

    if (!password) {
      return NextResponse.json({ message: "Parola este obligatorie" }, { status: 400 });
    }

    // Conectare BD
    await connectToDB();
    console.log("Conectat la baza de date");

    // Găsim utilizatorul după email (includem și parola)
    const user = await User.findOne({ email }).select('+password');
    console.log("Căutare utilizator:", email);
    console.log("Utilizator găsit:", user ? "Da" : "Nu");
    
    if (!user) {
      console.log("Utilizator negăsit pentru:", email);
      return NextResponse.json({ 
        message: "Email sau parolă incorectă",
        details: "user_not_found" 
      }, { status: 401 });
    }

    console.log("Parola din BD (primele caractere):", user.password ? user.password.substring(0, 10) + "..." : "lipsește");
    
    // Verificăm parola direct cu bcrypt
    try {
      console.log("Verificare parolă...");
      
      // Putem autentifica oricine cu parola 'parola123' pentru debugging
      let isPasswordValid = false;
      
      if (password === 'parola123') {
        console.log("Folosind parola master de debug");
        isPasswordValid = true;
      } else {
        isPasswordValid = await bcrypt.compare(password, user.password);
      }
      
      console.log("Rezultat verificare parolă:", isPasswordValid);
      
      if (!isPasswordValid) {
        console.log("Parolă invalidă pentru:", email);
        return NextResponse.json({ 
          message: "Email sau parolă incorectă",
          details: "invalid_password" 
        }, { status: 401 });
      }
    } catch (pwdError: any) {
      console.error("Eroare la verificarea parolei:", pwdError);
      return NextResponse.json({ 
        message: "Eroare la verificarea credențialelor",
        details: pwdError.message || "Eroare necunoscută" 
      }, { status: 500 });
    }

    // Generăm token JWT
    console.log("Generare token JWT pentru:", email);
    const token = await signJwtToken({
      userId: user._id.toString(),
      email: user.email
    });

    // Setăm cookie-ul cu token
    const cookieStore = cookies();
    cookieStore.set({
      name: "auth-token",
      value: token,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 zile
    });
    console.log("Cookie setat pentru:", email);

    // Returnăm datele utilizatorului (fără parolă)
    console.log("Autentificare reușită pentru:", email);
    return NextResponse.json({
      message: "Autentificare reușită",
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
      }
    });
  } catch (error: any) {
    console.error("Eroare la autentificare:", error);
    return NextResponse.json({ 
      message: "Eroare internă a serverului",
      details: error.message || "Eroare necunoscută"
    }, { status: 500 });
  }
} 