import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import LogoCloud from './components/LogoCloud';
import TypewriterEffectSmoothDemo from './components/ui/typewriter-effect-demo-1';

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
        <LogoCloud />
        <Pricing />
        <div className="bg-gray-900 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <TypewriterEffectSmoothDemo />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
