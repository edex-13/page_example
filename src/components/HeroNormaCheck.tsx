import React from 'react';
import { Button } from '@/components/ui/button';
import { BadgeCheck } from 'lucide-react'

const HeroNormaCheck: React.FC = () => {
  return (
    <section className="pt-60 pb-16 md:pt-60 md:pb-0 bg-foreground relative overflow-hidden sm:pb-0">
      <div className="container mx-auto px-1 md:px-2 relative z-10">
        <div className="max-w-4xl ml-10 text-start">
          <h1 className="text-5xl md:text-2xl font-bold mb-6 animate-reveal text-background underline">
            NormaCheck 
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-reveal text-background">
            Fastest Project Analysis and Error detection
          </h2>
          <p className="text-xl md:text-m mb-8 text-powble-darkGray animate-reveal animate-reveal-delay-1">
            Users assess complex electrical projects (computation memories, blueprints, tables, ...) <span>in seconds with our AI system.</span>
          </p>
          <ul className="text-xl md:text-m mb-8 text-powble-darkGray animate-reveal animate-reveal-delay-1">
            <li className="flex flex-row gap-4 mb-3 text-2xl"> Goals </li>
            <li className="flex text-lg"><BadgeCheck className='mr-2 text-green-500' /> Complete assessement of project</li>
            <li className="flex text-lg"><BadgeCheck className='mr-2 text-green-500' /> Standard association with each project component</li>
            <li className='flex text-lg'><BadgeCheck className='mr-2 text-green-500' /> Ticket generation for each non compliance and suggestion</li>
            <li className="flex text-lg"><BadgeCheck className='mr-2 text-green-500' /> Automatic response generation based on tickets</li>
          </ul>
          <div className="animate-reveal animate-reveal-delay-2">
            <Button className="bg-background text-foreground hover:bg-powble-darkGray hover:text-foreground text-lg px-8 py-6">
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full h-20 bg-gradient-to-b from-transparent to-powble-darkGray mt-16 sm:mb-0"></div>
    </section>
  );
};

export default HeroNormaCheck;
