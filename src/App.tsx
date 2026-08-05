import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuemSomos } from './components/QuemSomos';
import { BrandDiagnosticWidget } from './components/BrandDiagnosticWidget';
import { Services } from './components/Services';
import { ProcessTimeline } from './components/ProcessTimeline';
import { DifferentialsGrid } from './components/DifferentialsGrid';
import { Testimonials } from './components/Testimonials';
import { FAQAccordion } from './components/FAQAccordion';
import { FinalCTA } from './components/FinalCTA';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const scrollToDiagnostic = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    const target = document.querySelector('#contato');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-[#070707] text-white selection:bg-amber-400 selection:text-black min-h-screen">
      {/* Preloader */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Ambient Particle Canvas */}
      <ParticleBackground />

      {/* Main Header / Navbar */}
      <Navbar onOpenDiagnostic={() => scrollToDiagnostic()} />

      {/* Main Content Layout */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero onOpenDiagnostic={() => scrollToDiagnostic()} />

        {/* Quem Somos (Grupo NS) */}
        <QuemSomos />

        {/* Interactive Brand Maturity Calculator */}
        <BrandDiagnosticWidget onCompleteDiagnostic={() => scrollToDiagnostic()} />

        {/* Services Grid */}
        <Services onSelectService={(sName) => scrollToDiagnostic(sName)} />

        {/* Process Timeline */}
        <ProcessTimeline />

        {/* Differentials Grid */}
        <DifferentialsGrid />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQAccordion />

        {/* Final CTA & Diagnostic Form */}
        <FinalCTA preselectedService={preselectedService} />
      </main>

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
}
