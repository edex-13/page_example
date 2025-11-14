
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PowbleIntro from '@/components/PowbleIntro';
import AuditSection from '@/components/AuditSection';
import ChatSection from '@/components/ChatSection';
import CTA from '@/components/CTA';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Smooth scroll para anclas
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Smooth scroll para anclas
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-powble-gray-950 overflow-x-hidden">
      <Navbar />
      <main className="relative">
        {/* Efectos de fondo globales */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-powble-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-powble-accent/4 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-powble-accent/3 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          {/* Hero - Fondo Oscuro con descripción de Powble */}
          <Hero />
          
          {/* PowbleIntro - Título de productos */}
          <PowbleIntro />
          
          {/* AuditSection - Fondo Oscuro */}
          <AuditSection />
          
          {/* ChatSection - Con gradiente de acento */}
          <ChatSection />
          
          {/* CTA - Fondo Oscuro */}
          <CTA />

          {/* Testimonials - Fondo Oscuro */}
          <Testimonials />

          {/* ContactForm - Fondo Oscuro */}
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
