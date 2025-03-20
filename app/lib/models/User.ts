import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, 'Numele este obligatoriu'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email-ul este obligatoriu'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Adresa de email nu este validă',
      ],
    },
    password: {
      type: String,
      required: [true, 'Parola este obligatorie'],
      minlength: [6, 'Parola trebuie să aibă minim 6 caractere'],
    },
  },
  {
    timestamps: true,
  }
);

// Hash parola înainte de salvare
UserSchema.pre('save', async function (next) {
  // Verifică dacă parola a fost modificată
  if (!this.isModified('password')) {
    console.log("Parola nu a fost modificată, nu este necesară criptarea");
    return next();
  }

  try {
    console.log("Criptare parolă pre-save - lungime parola inițială:", this.password.length);
    // Verificăm dacă parola este deja un hash bcrypt (începe cu $2b$)
    if (this.password.startsWith('$2b$')) {
      console.log("Parola pare să fie deja un hash bcrypt, nu o vom cripta din nou");
      return next();
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    console.log("Parolă criptată cu succes - lungime hash:", hashedPassword.length);
    this.password = hashedPassword;
    next();
  } catch (error: any) {
    console.error("Eroare la criptarea parolei:", error);
    next(error);
  }
});

// Metoda pentru a compara parola la autentificare
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  try {
    console.log("Comparare parolă folosind metoda din model");
    console.log("Parola candidat: [ascunsă], Parola hash:", this.password.substring(0, 10) + "...");
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    console.error("Eroare la compararea parolei:", error);
    throw new Error(error as any);
  }
};

// Verifică dacă modelul există deja pentru a evita recompilarea
const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export default User; 