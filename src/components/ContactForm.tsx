import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-powble-gray-950 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-powble-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-powble-accent/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-powble-accent uppercase tracking-wider animate-reveal">
                Contáctanos
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-reveal text-white">
              ¿Tienes Preguntas? Escríbenos
            </h2>
            <p className="text-lg text-gray-300 animate-reveal animate-reveal-delay-1 max-w-2xl mx-auto">
              Nuestro equipo está aquí para ayudarte con cualquier consulta sobre Powble
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información de Contacto */}
            <div className="space-y-8 animate-reveal">
              <div className="bg-powble-gray-800 border border-powble-gray-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="bg-powble-accent/10 border border-powble-accent/20 p-3 rounded-lg group-hover:bg-powble-accent/20 transition-all duration-300">
                      <Mail className="w-5 h-5 text-powble-accent" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <a href="mailto:info@Powble.com" className="text-gray-300 hover:text-powble-accent transition-colors duration-300">
                        info@Powble.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-powble-accent/10 border border-powble-accent/20 p-3 rounded-lg group-hover:bg-powble-accent/20 transition-all duration-300">
                      <Phone className="w-5 h-5 text-powble-accent" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Teléfono</h4>
                      <a href="tel:+57123456789" className="text-gray-300 hover:text-powble-accent transition-colors duration-300">
                        +57 (1) 234-5678
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-powble-accent/10 border border-powble-accent/20 p-3 rounded-lg group-hover:bg-powble-accent/20 transition-all duration-300">
                      <MapPin className="w-5 h-5 text-powble-accent" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Ubicación</h4>
                      <p className="text-gray-300">
                        Bogotá, Colombia
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Formulario */}
            <div className="animate-reveal animate-reveal-delay-1">
              <div className="bg-powble-gray-800 border border-powble-gray-700 rounded-xl p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 animate-scale-in">
                    <div className="bg-green-500/10 border border-green-500/20 rounded-full p-4 mb-4">
                      <CheckCircle className="w-12 h-12 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                    <p className="text-gray-300 text-center">
                      Gracias por contactarnos. Te responderemos pronto.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-white font-semibold mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-powble-gray-900 border border-powble-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-powble-accent transition-colors duration-300"
                        placeholder="Juan Pérez"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-white font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-powble-gray-900 border border-powble-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-powble-accent transition-colors duration-300"
                        placeholder="juan@empresa.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-white font-semibold mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-powble-gray-900 border border-powble-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-powble-accent transition-colors duration-300"
                        placeholder="Tu Empresa S.A."
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white font-semibold mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-powble-gray-900 border border-powble-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-powble-accent transition-colors duration-300 resize-none"
                        placeholder="Cuéntanos en qué podemos ayudarte..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-powble-accent hover:bg-powble-accent/90 text-white text-lg px-8 py-6 group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-powble-accent/20"
                    >
                      Enviar Mensaje
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

