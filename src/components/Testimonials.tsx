
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { CarouselContent } from './ui/carousel';
import { Quote, Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  delay?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, company, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="border border-powble-gray-700 shadow-lg hover:shadow-2xl hover:shadow-powble-accent/10 transition-all duration-500 animate-reveal bg-powble-gray-800 hover:border-powble-accent/50 hover:-translate-y-1 group relative overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Efecto de gradiente de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-powble-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Icono de comillas decorativo */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <Quote className="w-16 h-16 text-powble-accent" />
      </div>

      <CardContent className="p-8 relative z-10">
        {/* Estrellas de rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 fill-powble-accent text-powble-accent transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>

        <p className="text-white mb-8 text-lg leading-relaxed relative">
          <span className="text-3xl text-gray-400 absolute -left-2 -top-4">"</span>
          {quote}
          <span className="text-3xl text-gray-400">"</span>
        </p>
        
        <div className="flex items-center gap-4">
          {/* Avatar con inicial */}
          <div className="w-12 h-12 rounded-full bg-powble-accent flex items-center justify-center font-bold text-white text-lg group-hover:scale-110 transition-transform duration-300">
            {author.charAt(0)}
          </div>
          <div>
            <div className="font-bold text-white group-hover:text-powble-accent transition-colors duration-300">
              {author}
            </div>
            <div className="text-sm text-gray-300 font-medium">
              {company}
            </div>
          </div>
        </div>
      </CardContent>

      {/* Borde inferior decorativo */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-powble-accent via-powble-accent/50 to-powble-accent w-0 group-hover:w-full transition-all duration-700"></div>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-16 md:py-24 bg-powble-gray-950 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute top-0 right-1/3 w-72 h-72 bg-powble-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-powble-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-powble-accent uppercase tracking-wider animate-reveal">
              Testimonios
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-white animate-reveal animate-reveal-delay-1">
            Impresiones de la Comunidad
          </h2>
          <p className="text-gray-300 text-lg text-center max-w-2xl mx-auto mb-4 animate-reveal animate-reveal-delay-2">
            Descubre lo que nuestros clientes dicen sobre cómo Powble ha transformado su proceso de diseño de sistemas eléctricos.
          </p>
          
          {/* Indicador de confianza */}
          <div className="inline-flex items-center gap-2 bg-powble-accent/10 backdrop-blur-sm border border-powble-accent/20 rounded-full px-6 py-2 mt-4 animate-reveal animate-reveal-delay-3">
            <Star className="w-4 h-4 fill-powble-accent text-powble-accent" />
            <span className="text-white font-medium text-sm">
              Calificación promedio: 4.9/5.0
            </span>
          </div>
        </div>

        <div className="w-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              <CarouselItem className="pl-1 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Testimonial
                    quote="Los comités de revisión pueden ser difíciles, pero las herramientas de IA de Powble nos han facilitado revisar y aprobar diseños."
                    author="Andrés Peñaranda"
                    company="SoftSolar"
                    delay={0}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Testimonial
                    quote="Las solicitudes urgentes de cotización son cosa del pasado. Las herramientas de IA de Powble nos han facilitado generar cotizaciones y responder a solicitudes urgentes."
                    author="Camilo Estrada"
                    company="Green Energy"
                    delay={100}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Testimonial
                    quote="La herramienta de selección de componentes nos ha salvado de errores costosos. Es como tener un ingeniero experto siempre disponible para consultar."
                    author="Juan Pérez"
                    company="PowerGrid Solutions"
                    delay={200}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-1 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Testimonial
                    quote="Las herramientas de generación de informes nos permiten dedicar tiempo a evaluar mediciones con clientes y tareas de campo."
                    author="Andrea Carrillo"
                    company="PowerGrid Solutions"
                    delay={200}
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hover:bg-powble-accent hover:text-white transition-all duration-300" />
            <CarouselNext className="hover:bg-powble-accent hover:text-white transition-all duration-300" />
          </Carousel>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
