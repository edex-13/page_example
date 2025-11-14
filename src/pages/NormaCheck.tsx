import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroPowble from '@/components/HeroPowble';
import FeaturesPowble from '@/components/FeaturesPowble.tsx';
import Metrics from '@/components/Metrics';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Powble: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-reveal');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-powble-black">
      <Navbar />
      <main>
        <HeroPowble/>
        <FeaturesPowble />
      </main>
      <Footer />
    </div>
  );
};

export default Powble;
