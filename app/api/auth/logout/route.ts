import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    console.log("Procesare cerere de deconectare");
    
    // Ștergem cookie-ul de autentificare
    const cookieStore = cookies();
    cookieStore.delete("auth-token");
    
    console.log("Cookie de autentificare șters");
    
    return NextResponse.json({ 
      message: "Deconectare reușită" 
    });
  } catch (error) {
    console.error("Eroare la deconectare:", error);
    return NextResponse.json({ 
      message: "Eroare la procesarea cererii de deconectare" 
    }, { status: 500 });
  }
} 