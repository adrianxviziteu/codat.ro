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
    <main className="relative min-h-screen overflow-hidden bg-white">
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
