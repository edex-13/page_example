import React from 'react';

const PowbleIntro: React.FC = () => {
  return (
    <section id="productos" className="py-12 md:py-16 bg-powble-gray-950 relative overflow-hidden">
      {/* Efectos de fondo sutiles */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-powble-accent/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Título de Productos */}
        <div className="text-center animate-reveal">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-powble-accent uppercase tracking-wider">
              Nuestras Soluciones
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Productos que Transforman tu Trabajo
          </h2>
          <div className="w-24 h-1 bg-powble-accent mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default PowbleIntro;

