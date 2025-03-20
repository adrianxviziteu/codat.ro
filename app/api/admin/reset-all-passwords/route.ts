import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectToDB } from "@/app/lib/mongodb";
import User from "@/app/lib/models/User";

export async function POST(req: Request) {
  try {
    const { masterPassword } = await req.json();
    console.log("Încercare resetare parolă pentru toți utilizatorii");

    if (!masterPassword || masterPassword !== "admin123") {
      return NextResponse.json({ 
        message: "Parolă master invalidă" 
      }, { status: 401 });
    }

    // Conectare la BD
    await connectToDB();
    console.log("Conectat la baza de date pentru resetare parolă în masă");

    // Găsim toți utilizatorii
    const users = await User.find({});
    
    if (users.length === 0) {
      console.log("Nu s-au găsit utilizatori pentru resetare parolă");
      return NextResponse.json({ 
        message: "Nu s-au găsit utilizatori" 
      }, { status: 404 });
    }

    // Resetăm parolele tuturor utilizatorilor la parola lor de email
    const results = [];
    for (const user of users) {
      try {
        // Folosim adresa de email ca parolă pentru simplitate
        const newPassword = "parola123";
        
        // Criptăm noua parolă direct
        console.log(`Resetare parolă pentru ${user.email}...`);
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        
        // Actualizăm direct în baza de date
        await User.updateOne(
          { _id: user._id }, 
          { $set: { password: hashedPassword } }
        );
        
        results.push({
          email: user.email,
          success: true,
          message: "Parolă resetată cu succes"
        });
      } catch (err) {
        console.error(`Eroare la resetarea parolei pentru ${user.email}:`, err);
        results.push({
          email: user.email,
          success: false,
          message: "Eroare la resetarea parolei"
        });
      }
    }

    console.log(`Parole resetate pentru ${results.filter(r => r.success).length}/${results.length} utilizatori`);
    
    return NextResponse.json({ 
      message: `Parole resetate pentru ${results.filter(r => r.success).length}/${results.length} utilizatori`,
      results
    }, { status: 200 });
  } catch (error) {
    console.error("Eroare la resetarea parolelor:", error);
    return NextResponse.json({ 
      message: "Eroare la resetarea parolelor" 
    }, { status: 500 });
  }
} 