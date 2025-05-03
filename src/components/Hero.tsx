
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-powble-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-reveal text-powble-white">
            Powering the <span className="underline decoration-4 decoration-powble-white">Design</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-powble-darkGray animate-reveal animate-reveal-delay-1">
            Powble is your toolbox to speed up your power system and facilities design
          </p>
          
          <div className="animate-reveal animate-reveal-delay-2">
            <Button className="bg-powble-white text-powble-black hover:bg-powble-darkGray hover:text-powble-white text-lg px-8 py-6">
              Get Started
            </Button>
          </div>
        </div>
      </div>
      
      <div className="w-full h-20 bg-gradient-to-b from-transparent to-powble-darkGray mt-16"></div>
    </section>
  );
};

export default Hero;
