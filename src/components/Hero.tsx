import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="pt-60 pb-16 sm:pb-0 md:pt-60 md:pb-0 bg-foreground relative overflow-hidden max-sm:pb-0">
      {/* Fireflies */}
      <ul className="fireflies absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-reveal text-background">
            Power systems and facility designs with <span className="underline decoration-4 decoration-powble-white">AI</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-powble-darkGray animate-reveal animate-reveal-delay-1">
            Your toolbox to speed up your design process
          </p>
          <div className="animate-reveal animate-reveal-delay-2">
            <Button className="bg-background text-foreground hover:bg-powble-darkGray hover:text-foreground text-lg px-8 py-6">
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
