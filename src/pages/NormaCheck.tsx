import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroNormaCheck from '@/components/HeroNormaCheck';
import FeaturesNormaCheck from '@/components/FeaturesNormaCheck.tsx';
import Metrics from '@/components/Metrics';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const NormaCheck: React.FC = () => {
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
        <HeroNormaCheck/>
        <FeaturesNormaCheck />
      </main>
      <Footer />
    </div>
  );
};

export default NormaCheck;
