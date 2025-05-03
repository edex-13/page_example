
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        isScrolled ? 'bg-powble-white shadow-md py-3' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Logo />
        
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="text-powble-black hover:text-gray-600 transition-colors">
            Features
          </a>
          <a href="#metrics" className="text-powble-black hover:text-gray-600 transition-colors">
            Metrics
          </a>
          <a href="#testimonials" className="text-powble-black hover:text-gray-600 transition-colors">
            Testimonials
          </a>
        </div>
        
        <Button className="bg-powble-black text-powble-white hover:bg-powble-darkGray">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
