import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/db';
import User from '@/app/lib/models/User';

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    // Verificăm dacă toate câmpurile sunt prezente
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'Toate câmpurile sunt obligatorii' },
        { status: 400 }
      );
    }

    // Conectăm la baza de date
    await connectToDatabase();

    // Verificăm dacă utilizatorul există deja
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'Un utilizator cu acest email există deja' },
        { status: 409 }
      );
    }

    // Creăm noul utilizator
    const newUser = new User({
      name,
      email,
      password, // parola va fi hash-uită automat în modelul User
    });

    // Salvăm utilizatorul în baza de date
    await newUser.save();

    // Returnăm utilizatorul creat (fără parolă)
    return NextResponse.json(
      { 
        message: 'Cont creat cu succes',
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        }
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Eroare la înregistrare:', error);
    return NextResponse.json(
      { message: error.message || 'A apărut o eroare la înregistrare' },
      { status: 500 }
    );
  }
} 