import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { connectToDB } from "@/app/lib/mongodb";
import User from "@/app/lib/models/User";
import { verifyJwtToken } from "@/app/lib/jwt";

export async function GET() {
  try {
    // Luăm token-ul JWT din cookie
    const cookieStore = cookies();
    const token = cookieStore.get("auth-token")?.value;

    if (!token) {
      return NextResponse.json({ message: "Neautentificat" }, { status: 401 });
    }

    // Verificăm token-ul
    const payload = await verifyJwtToken(token);
    
    if (!payload || !payload.userId) {
      return NextResponse.json({ message: "Token invalid" }, { status: 401 });
    }

    // Conectare la BD și aducem informațiile utilizatorului
    await connectToDB();
    
    const user = await User.findById(payload.userId).select("-password");
    
    if (!user) {
      return NextResponse.json({ message: "Utilizator negăsit" }, { status: 404 });
    }

    // Returnăm datele utilizatorului (fără parolă)
    return NextResponse.json({
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
      }
    });

  } catch (error) {
    console.error("Eroare la verificarea autentificării:", error);
    return NextResponse.json({ message: "Eroare la autentificare" }, { status: 500 });
  }
} 