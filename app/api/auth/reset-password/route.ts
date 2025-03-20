import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDB } from "@/app/lib/mongodb";
import User from "@/app/lib/models/User";

export async function POST(req: Request) {
  try {
    const { email, newPassword } = await req.json();
    console.log("Încercare resetare parolă pentru:", email);

    if (!email || !newPassword) {
      return NextResponse.json({ 
        message: "Email-ul și parola nouă sunt obligatorii" 
      }, { status: 400 });
    }

    // Verificăm parola minimă
    if (newPassword.length < 6) {
      return NextResponse.json({ 
        message: "Parola trebuie să aibă minim 6 caractere" 
      }, { status: 400 });
    }

    // Conectare la BD
    await connectToDB();
    console.log("Conectat la baza de date pentru resetare parolă");

    // Găsim utilizatorul după email
    const user = await User.findOne({ email });
    
    if (!user) {
      console.log("Utilizator negăsit pentru resetare parolă:", email);
      return NextResponse.json({ 
        message: "Utilizatorul nu a fost găsit" 
      }, { status: 404 });
    }

    // Criptăm noua parolă
    console.log("Criptare parolă nouă...");
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Actualizăm parola utilizatorului
    user.password = hashedPassword;
    await user.save();

    console.log("Parola resetată cu succes pentru:", email);
    
    return NextResponse.json({ 
      message: "Parola a fost resetată cu succes" 
    }, { status: 200 });
  } catch (error) {
    console.error("Eroare la resetarea parolei:", error);
    return NextResponse.json({ 
      message: "Eroare la resetarea parolei" 
    }, { status: 500 });
  }
} 