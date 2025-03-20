import { NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "@/app/lib/models/User";

// Conectare directă la MongoDB
const MONGODB_URI = process.env.MONGODB_URI || "";

async function connectToDB() {
  try {
    console.log("Conectare la MongoDB simplificată...");
    
    if (mongoose.connection.readyState === 1) {
      console.log("MongoDB deja conectat!");
      return mongoose.connection;
    }
    
    await mongoose.connect(MONGODB_URI);
    console.log("Conectat cu succes la MongoDB!");
    return mongoose.connection;
  } catch (error) {
    console.error("Eroare la conectare MongoDB:", error);
    throw error;
  }
}

export async function POST(req: Request) {
  try {
    console.log("Endpoint /api/auth/register apelat");
    const { name, email, password } = await req.json();
    console.log("Date primite:", { name, email, password: "***" });

    // Validări
    if (!name) {
      return NextResponse.json({ message: "Numele este obligatoriu" }, { status: 400 });
    }

    if (!email) {
      return NextResponse.json({ message: "Email-ul este obligatoriu" }, { status: 400 });
    }

    if (!password) {
      return NextResponse.json({ message: "Parola este obligatorie" }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json({ message: "Parola trebuie să aibă minim 6 caractere" }, { status: 400 });
    }

    try {
      // Încercăm să ne conectăm
      await connectToDB();
      
      // Verificare dacă utilizatorul există deja
      console.log("Cautare utilizator cu email:", email);
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        console.log("Utilizator existent găsit");
        return NextResponse.json({ message: "Adresa de email este deja utilizată" }, { status: 409 });
      }
      console.log("Utilizator nou");

      // Crearea utilizatorului - modelul va cripta parola automat prin hook-ul pre-save
      console.log("Creare utilizator nou...");
      const user = await User.create({
        name,
        email,
        password,
      });
      console.log("Utilizator creat cu succes:", user._id.toString());

      // Returnare răspuns fără parolă
      const userWithoutPassword = {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
      };

      console.log("Înregistrare finalizată cu succes");
      return NextResponse.json({ 
        message: "Utilizator înregistrat cu succes",
        user: userWithoutPassword 
      }, { status: 201 });
    } catch (dbError) {
      console.error("Eroare la operațiile cu baza de date:", dbError);
      return NextResponse.json({ 
        message: "Eroare la conectarea la baza de date. Verificați configurațiile MongoDB." 
      }, { status: 500 });
    }
  } catch (error) {
    console.error("Eroare la înregistrare:", error);
    return NextResponse.json({ 
      message: "Eroare internă a serverului. Încercați din nou mai târziu." 
    }, { status: 500 });
  }
} 