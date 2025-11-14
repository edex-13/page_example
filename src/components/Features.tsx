
import React, { useState } from 'react';
import { ClockArrowDown, Package, Ticket, BookCheck } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-powble-gray-900 p-6 rounded-lg shadow-lg border border-powble-gray-800 transition-all duration-300 hover:shadow-xl hover:border-powble-accent/30 hover:-translate-y-1 animate-reveal group relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Efecto sutil de fondo */}
      <div className="absolute inset-0 bg-powble-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-start mb-6 gap-4">
          <div className={`bg-powble-accent/10 border border-powble-accent/20 text-powble-accent p-3 rounded-lg w-14 h-14 flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110 bg-powble-accent/20 border-powble-accent/40' : ''}`}>
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-powble-white group-hover:text-powble-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-powble-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Línea decorativa sutil */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-powble-accent w-0 group-hover:w-full transition-all duration-500"></div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-powble-gray-950 relative overflow-hidden">
      {/* Efectos de fondo sutiles */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-powble-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-powble-accent/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-powble-white/60 uppercase tracking-wider animate-reveal">
              Herramientas Potentes
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-powble-white animate-reveal animate-reveal-delay-1">
            Acceso a Herramientas IA Innovadoras
          </h2>
          <p className="text-powble-white/70 max-w-2xl mx-auto animate-reveal animate-reveal-delay-2">
            Descubre cómo nuestras herramientas de IA pueden transformar tu proceso de diseño eléctrico
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<ClockArrowDown size={24} />}
            title="Reduce Tiempo de Diseño"
            description="Nuestras herramientas IA te ayudan a reducir el tiempo de diseño con generación y optimización rápida basada en tus requisitos."
            delay={0}
          />
          <FeatureCard
            icon={<Ticket size={24} />}
            title="Respuesta de Tickets"
            description="Automatiza y optimiza tu lista de problemas con soluciones potenciadas por IA que reducen el tiempo de respuesta."
            delay={100}
          />
          <FeatureCard
            icon={<Package size={24} />}
            title="Selección de Componentes"
            description="Obtén recomendaciones de IA para seleccionar los componentes correctos para tus proyectos de sistemas eléctricos."
            delay={200}
          />
          <FeatureCard
            icon={<BookCheck size={24} />}
            title="Generación Automática de Documentos"
            description="Nuestras herramientas IA te ayudan a generar documentos para tus proyectos basados en tus requisitos, reduciendo tiempo y esfuerzo."
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
