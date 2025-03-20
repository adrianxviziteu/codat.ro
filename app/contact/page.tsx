import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - CODAT.RO',
  description: 'Contactează-ne pentru orice întrebare legată de verificarea IMEI pentru iPhone.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <Navbar />
      <div className="pt-24 sm:pt-32 pb-16 relative z-10">
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
} 