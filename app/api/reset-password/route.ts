import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/lib/db';
import User from '@/app/lib/models/User';

// În mod normal, aici ar trebui să avem un serviciu de trimitere email
// Pentru acest demo, vom simula trimiterea unui email
async function sendPasswordResetEmail(email: string, resetToken: string) {
  // Aici am integra cu un serviciu de email (SendGrid, Nodemailer, etc)
  console.log(`Ar trebui să se trimită un email la ${email} cu token-ul de resetare ${resetToken}`);
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: 'Email-ul este obligatoriu' },
        { status: 400 }
      );
    }

    // Conectăm la baza de date
    await connectToDatabase();

    // Verificăm dacă există utilizatorul
    const user = await User.findOne({ email });

    // Nu dezvăluim dacă utilizatorul există sau nu pentru securitate
    if (!user) {
      // Pentru securitate, simulăm o procesare reușită și pentru utilizatori inexistenți
      return NextResponse.json(
        { message: 'Dacă există un cont cu acest email, vei primi instrucțiuni pentru resetarea parolei' },
        { status: 200 }
      );
    }

    // În implementarea reală, am genera un token, l-am salva în baza de date
    // și l-am trimite prin email la adresa utilizatorului
    const resetToken = Math.random().toString(36).substring(2, 15);
    
    // Simulăm trimiterea email-ului
    await sendPasswordResetEmail(email, resetToken);

    return NextResponse.json(
      { message: 'Dacă există un cont cu acest email, vei primi instrucțiuni pentru resetarea parolei' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Eroare la resetarea parolei:', error);
    return NextResponse.json(
      { message: 'A apărut o eroare la procesarea cererii' },
      { status: 500 }
    );
  }
} 