import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-powble-gray-950 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-powble-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-powble-accent/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título principal */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-reveal text-white">
            Elimina Errores Costosos Antes de que Sea Tarde
          </h2>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 animate-reveal animate-reveal-delay-1 max-w-2xl mx-auto">
            Únete a los ingenieros que ya están usando Powble para validar sus diseños
          </p>

          {/* Botón */}
          <div className="mb-12 animate-reveal animate-reveal-delay-2">
            <Button 
              size="lg"
              className="bg-powble-accent hover:bg-powble-accent/90 text-white text-lg px-10 py-7 group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-powble-accent/20"
            >
              Regístrate y Pruébalo Gratis
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Logos de Normas */}
          <div className="animate-reveal animate-reveal-delay-3">
            <div className="flex items-center justify-center gap-2 mb-6">
              <ShieldCheck className="w-5 h-5 text-powble-accent" />
              <span className="text-sm text-gray-300 font-medium">Normativas auditadas:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {/* Logo RETIE */}
              <div className="bg-powble-gray-800 border border-powble-gray-700 rounded-lg px-6 py-4 hover:border-powble-accent hover:shadow-lg hover:shadow-powble-accent/10 transition-all duration-300">
                <span className="text-2xl font-bold text-white">RETIE</span>
              </div>
              
              {/* Logo NTC 2050 */}
              <div className="bg-powble-gray-800 border border-powble-gray-700 rounded-lg px-6 py-4 hover:border-powble-accent hover:shadow-lg hover:shadow-powble-accent/10 transition-all duration-300">
                <span className="text-2xl font-bold text-white">NTC 2050</span>
              </div>
              
              {/* Logo NEC */}
              <div className="bg-powble-gray-800 border border-powble-gray-700 rounded-lg px-6 py-4 hover:border-powble-accent hover:shadow-lg hover:shadow-powble-accent/10 transition-all duration-300">
                <span className="text-2xl font-bold text-white">NEC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

