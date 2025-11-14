import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-60 pb-32 md:pt-60 md:pb-40 bg-powble-gray-950 relative overflow-hidden">
      {/* Fireflies */}
      <ul className="fireflies absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>

      {/* Gradientes decorativos sutiles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-powble-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-powble-accent/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge de confianza */}
          <div className="inline-flex items-center gap-2 bg-powble-gray-800/80 backdrop-blur-sm border border-powble-gray-700 rounded-full px-5 py-2 mb-8 animate-scale-in">
            <Sparkles className="w-4 h-4 text-powble-accent" />
            <span className="text-sm text-powble-gray-300 font-medium">Respaldado por las normas que sí importan</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-reveal text-white leading-tight">
            Auditoría Eléctrica con{' '}
            <span className="relative inline-block">
              <span className="text-powble-accent font-extrabold">IA</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-powble-accent"></span>
            </span>
            {' '}sin errores críticos
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-300 animate-reveal animate-reveal-delay-1 max-w-3xl mx-auto leading-relaxed">
            Valida cálculos y cuadros de carga contra <span className="text-white font-semibold">RETIE</span>, <span className="text-white font-semibold">NTC 2050</span> y <span className="text-white font-semibold">NEC</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-reveal animate-reveal-delay-2 mb-12">
            <Button className="bg-powble-accent hover:bg-powble-accent/90 text-white text-lg px-8 py-6 group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-powble-accent/20">
              Prueba el Chat Normativo GRATIS
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Descripción de Powble */}
          <div className="max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="bg-powble-gray-800/30 backdrop-blur-sm border border-powble-gray-700 rounded-xl p-6 md:p-8">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center">
                Powble automatiza tareas críticas para <span className="text-white font-semibold">ingenieros eléctricos</span>: 
                auditorías normativas, validación de diseños y consultas técnicas. 
                Enfócate en lo que importa: <span className="text-powble-accent font-semibold">proyectos de calidad sin errores</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
