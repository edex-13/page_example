
import React from 'react';
import Logo from './Logo';
import { View, Network, ArrowUp, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

interface FooterColumnProps {
  title: string;
  items: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  }[];
  delay?: number;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, items, delay = 0 }) => (
  <div className="animate-reveal" style={{ animationDelay: `${delay}ms` }}>
    <h3 className="font-bold text-lg mb-6 text-white border-b border-powble-gray-700 pb-2">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            className="text-powble-gray-400 hover:text-powble-accent transition-all duration-300 hover:translate-x-1 inline-flex items-center group"
          >
            {item.icon && <span className="mr-2 group-hover:scale-110 transition-transform duration-300">{item.icon}</span>}
            <span className="border-b border-transparent group-hover:border-powble-accent">{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-powble-gray-950 pt-16 pb-8 border-t border-powble-gray-800 relative overflow-hidden">
      {/* Efectos de fondo decorativos */}
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-powble-accent/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-powble-accent/2 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="animate-reveal">
            <div className="transform transition-all duration-300 hover:scale-105 inline-block mb-4">
              <Logo isScrolled={true} />
            </div>
            <p className="mt-4 text-powble-gray-400 max-w-xs leading-relaxed">
              Herramientas avanzadas con IA para diseño de sistemas eléctricos y gestión de instalaciones.
            </p>
            
            {/* Badge de empresa */}
            <div className="mt-6 inline-flex items-center gap-2 bg-powble-gray-800 backdrop-blur-sm border border-powble-gray-700 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-powble-gray-300 font-medium">Activo</span>
            </div>
          </div>

    

          <div className="animate-reveal animate-reveal-delay-3">
            <h3 className="font-bold text-lg mb-6 text-white border-b border-powble-gray-700 pb-2">Conecta</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="text-powble-gray-400 hover:text-powble-accent transition-all duration-300 hover:scale-125 hover:-translate-y-1 p-2 rounded-lg hover:bg-powble-gray-800"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-powble-gray-400 hover:text-powble-accent transition-all duration-300 hover:scale-125 hover:-translate-y-1 p-2 rounded-lg hover:bg-powble-gray-800"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-powble-gray-400 hover:text-powble-accent transition-all duration-300 hover:scale-125 hover:-translate-y-1 p-2 rounded-lg hover:bg-powble-gray-800"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-powble-gray-400 hover:text-powble-accent transition-all duration-300 hover:scale-125 hover:-translate-y-1 p-2 rounded-lg hover:bg-powble-gray-800"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>

  
          </div>
        </div>

        <div className="border-t border-powble-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-powble-gray-400 text-sm mb-1">
              © {currentYear} Powble.com. Todos los derechos reservados.
            </p>
            <p className="text-powble-gray-500 text-xs italic">
              Hecho para Ingenieros, por Ingenieros
            </p>
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="/privacy" className="text-powble-gray-400 hover:text-powble-white transition-colors duration-300">
              Política de Privacidad
            </a>
            <a href="/terms" className="text-powble-gray-400 hover:text-powble-white transition-colors duration-300">
              Términos de Servicio
            </a>
          </div>
        </div>

        {/* Botón de scroll hacia arriba */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-powble-accent text-white p-3 rounded-full shadow-lg hover:shadow-2xl hover:shadow-powble-accent/50 transition-all duration-300 hover:scale-110 z-40 group"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
