
import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';

interface MetricCardProps {
  value: string;
  label: string;
  suffix?: string;
  duration?: number;
  delay?: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ value, label, suffix = "", duration = 2000, delay = 0 }) => {
  const [count, setCount] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const targetValue = parseInt(value.replace(/,/g, ''));
  const cardRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;

    const timeoutId = setTimeout(() => {
      let startTimestamp: number;

      const animate = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
        
        const currentCount = Math.min(
          Math.floor((progress / duration) * targetValue),
          targetValue
        );

        setCount(currentCount);

        if (progress < duration) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [targetValue, isVisible, duration, delay]);

  const formattedCount = count.toLocaleString();

  return (
    <div 
      ref={cardRef}
      className="bg-powble-white text-powble-black p-8 rounded-2xl text-center transform transition-all duration-500 hover:scale-110 hover:shadow-2xl group relative overflow-hidden cursor-pointer animate-scale-in"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Efecto de brillo */}
      <div className={`absolute inset-0 bg-gradient-to-br from-powble-darkGray/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Icono decorativo */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <TrendingUp className={`w-6 h-6 text-powble-black/50 ${isHovered ? 'animate-pulse' : ''}`} />
      </div>

      <div className="relative z-10">
        <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-br from-powble-black to-powble-lightGray bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
          {formattedCount}{suffix}
        </div>
        <div className="text-powble-lightGray font-semibold uppercase tracking-wider text-sm group-hover:text-powble-black transition-colors duration-300">
          {label}
        </div>
      </div>

      {/* Borde animado */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-powble-black/20 transition-all duration-500"></div>
    </div>
  );
};

const Metrics: React.FC = () => {
  return (
    <section id="metrics" className="py-16 md:py-24 bg-powble-black relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-powble-white/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-powble-white/5 rounded-full blur-3xl -translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-powble-white/60 uppercase tracking-wider animate-reveal">
              Resultados Comprobados
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-powble-white animate-reveal animate-reveal-delay-1">
            Nuestro Impacto en Números
          </h2>
          <p className="text-powble-white/70 max-w-2xl mx-auto animate-reveal animate-reveal-delay-2">
            Cifras reales que demuestran cómo estamos transformando el diseño de sistemas eléctricos
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <MetricCard value="98" label="Proyectos Evaluados" suffix="+" duration={1500} delay={0} />
          <MetricCard value="270" label="Tickets Corregidos/Día" suffix="" duration={1800} delay={100} />
          <MetricCard value="170" label="Documentos Generados" suffix="+" duration={2000} delay={200} />
          <MetricCard value="550" label="Productos Seleccionados" suffix="+" duration={2200} delay={300} />
        </div>

        {/* Indicador de crecimiento */}
        <div className="mt-12 text-center animate-reveal animate-reveal-delay-3">
          <div className="inline-flex items-center gap-2 bg-powble-white/10 backdrop-blur-sm border border-powble-white/20 rounded-full px-6 py-3">
            <TrendingUp className="w-5 h-5 text-powble-white animate-pulse" />
            <span className="text-powble-white font-medium">
              Crecimiento del 245% en el último año
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
