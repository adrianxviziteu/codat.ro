import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CtaOverlap from './components/CtaOverlap';
import Features2 from './components/Features2';
import WorldMapDemo from './components/ui/world-map-demo';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background patterns */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#017AFF]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-[#017AFF]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features2 />
        <WorldMapDemo />
        <Testimonials />
        
        {/* CTA secțiune care se suprapune peste footer */}
        <div className="pt-20 bg-transparent">
          <CtaOverlap />
        </div>
        
        {/* Footer cu padding suplimentar pentru overlap */}
        <div className="pt-28">
          <Footer />
        </div>
      </div>
    </main>
  );
}
