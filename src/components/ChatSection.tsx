import React, { useEffect, useState, useRef } from 'react';
import { MessageSquare, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatSection: React.FC = () => {
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showThinking, setShowThinking] = useState(false);
  const [thinkingStep, setThinkingStep] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [showBullet1, setShowBullet1] = useState(false);
  const [showBullet2, setShowBullet2] = useState(false);
  const [showReference, setShowReference] = useState(false);
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [showFinalResponse, setShowFinalResponse] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const fullText = "Según la NTC 2050, Tabla 310.15(B)(16), para un circuito de 20A debes usar:";
  
  const thinkingSteps = [
    "Analizando pregunta...",
    "Buscando en base de datos RETIE...",
    "Consultando NTC 2050...",
    "Verificando NEC...",
    "Preparando respuesta..."
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            // Mostrar "pensando" por 5 segundos antes de empezar a escribir
            setShowThinking(true);
            
            // Cambiar pasos de pensamiento cada segundo
            const thinkingInterval = setInterval(() => {
              setThinkingStep((prev) => {
                if (prev >= thinkingSteps.length - 1) {
                  clearInterval(thinkingInterval);
                  return prev;
                }
                return prev + 1;
              });
            }, 1000);
            
            setTimeout(() => {
              setShowThinking(false);
              setIsTyping(true);
              clearInterval(thinkingInterval);
            }, 5000);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (isTyping && typingText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypingText(fullText.slice(0, typingText.length + 1));
      }, 70); // Velocidad de escritura más lenta (70ms por letra)

      return () => clearTimeout(timeout);
    } else if (typingText.length === fullText.length && isTyping) {
      // Mostrar detalles después de terminar de escribir, uno por uno
      setTimeout(() => {
        setShowBullet1(true);
      }, 800);
      setTimeout(() => {
        setShowBullet2(true);
      }, 1600);
      setTimeout(() => {
        setShowReference(true);
      }, 2400);
      setTimeout(() => {
        setShowDetails(true);
      }, 3000);
      setTimeout(() => {
        setShowFollowUp(true);
        // Auto-scroll hacia abajo
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: 'smooth'
          });
        }
      }, 4000);
      setTimeout(() => {
        setShowFinalResponse(true);
        // Auto-scroll hacia abajo
        setTimeout(() => {
          if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
              top: chatContainerRef.current.scrollHeight,
              behavior: 'smooth'
            });
          }
        }, 100);
      }, 5500);
    }
  }, [typingText, isTyping, fullText]);

  return (
    <section id="chat" ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-br from-powble-accent/10 via-powble-gray-900 to-powble-gray-950 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-powble-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-powble-accent/8 rounded-full blur-3xl"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-1/2 right-1/4 w-1 h-32 bg-gradient-to-t from-powble-accent/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Visual del chat */}
          <div className="animate-reveal order-2 lg:order-1">
            <div className="bg-powble-gray-950 rounded-xl border border-powble-gray-800 shadow-2xl overflow-hidden">
              {/* Header del chat */}
              <div className="bg-powble-gray-800 border-b border-powble-gray-700 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="bg-powble-accent/10 border border-powble-accent/20 text-powble-accent p-2 rounded-lg">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Chat Normativo IA</h3>
                    <p className="text-xs text-powble-gray-400">Pregunta lo que necesites</p>
                  </div>
                </div>
              </div>
              
              {/* Mensajes del chat */}
              <div ref={chatContainerRef} className="p-6 space-y-4 min-h-[500px] max-h-[500px] overflow-y-auto scroll-smooth">
                {/* Mensaje 1 del usuario */}
                <div className="flex justify-end">
                  <div className="bg-powble-accent/10 border border-powble-accent/20 rounded-lg px-4 py-3 max-w-[80%]">
                    <p className="text-white text-sm">
                      Hola, necesito ayuda con un diseño eléctrico
                    </p>
                  </div>
                </div>

                {/* Respuesta 1 de la IA */}
                <div className="flex justify-start">
                  <div className="bg-powble-gray-800 border border-powble-gray-700 rounded-lg px-4 py-3 max-w-[85%]">
                    <p className="text-white text-sm">
                      ¡Hola! 👋 Estoy aquí para ayudarte con tus consultas sobre normativas eléctricas. ¿En qué puedo asistirte hoy?
                    </p>
                  </div>
                </div>

                {/* Mensaje 2 del usuario */}
                <div className="flex justify-end">
                  <div className="bg-powble-accent/10 border border-powble-accent/20 rounded-lg px-4 py-3 max-w-[80%]">
                    <p className="text-white text-sm">
                      Estoy diseñando una instalación residencial. ¿Cuál es el calibre mínimo para un circuito de 20A según NTC 2050?
                    </p>
                  </div>
                </div>

                {/* Respuesta 2 de la IA - La animada */}
                <div className="flex justify-start">
                  <div className="bg-powble-gray-800 border border-powble-gray-700 rounded-lg px-4 py-3 max-w-[85%]">
                    {showThinking && !isTyping && (
                      <div className="flex flex-col items-start gap-3 text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-powble-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-powble-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-powble-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          </div>
                          <span className="animate-pulse text-powble-accent font-semibold">
                            {thinkingSteps[thinkingStep]}
                          </span>
                        </div>
                        {/* Mostrar pasos anteriores completados */}
                        <div className="text-xs space-y-1 ml-6">
                          {thinkingSteps.slice(0, thinkingStep).map((step, index) => (
                            <p key={index} className="text-green-400 opacity-70">
                              ✓ {step}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                    {(isTyping || typingText.length > 0) && (
                      <>
                        <p className="text-white text-sm mb-3 leading-relaxed">
                          {typingText}
                          {isTyping && typingText.length < fullText.length && (
                            <span className="inline-block w-1 h-4 bg-powble-accent ml-1 animate-pulse"></span>
                          )}
                        </p>
                        {typingText.length === fullText.length && (
                          <>
                            <ul className="text-powble-gray-300 text-sm space-y-2 mb-3">
                              {showBullet1 && (
                                <li className="flex items-start gap-2 animate-slide-up">
                                  <span className="text-powble-accent mt-1">•</span>
                                  <span><span className="font-semibold">Calibre #12 AWG</span> (cobre) para instalaciones residenciales a 60°C</span>
                                </li>
                              )}
                              {showBullet2 && (
                                <li className="flex items-start gap-2 animate-slide-up">
                                  <span className="text-powble-accent mt-1">•</span>
                                  <span>Capacidad de corriente: <span className="font-semibold">25A</span></span>
                                </li>
                              )}
                            </ul>
                            {showReference && (
                              <div className="bg-powble-gray-900/50 border border-powble-gray-700 rounded px-3 py-2 text-xs text-powble-gray-400 animate-slide-up">
                                <span className="text-powble-accent font-semibold">Referencia:</span> NTC 2050, Artículo 310.15(B)(16)
                              </div>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>

                {/* Mensaje 3 del usuario - Follow up */}
                {showFollowUp && (
                  <div className="flex justify-end animate-slide-up">
                    <div className="bg-powble-accent/10 border border-powble-accent/20 rounded-lg px-4 py-3 max-w-[80%]">
                      <p className="text-white text-sm">
                        Perfecto, gracias. ¿Y qué protección necesito para este circuito?
                      </p>
                    </div>
                  </div>
                )}

                {/* Respuesta 3 de la IA - Final */}
                {showFinalResponse && (
                  <div className="flex justify-start animate-slide-up">
                    <div className="bg-powble-gray-800 border border-powble-gray-700 rounded-lg px-4 py-3 max-w-[85%]">
                      <p className="text-white text-sm mb-3 leading-relaxed">
                        Para un circuito de 20A necesitas:
                      </p>
                      <ul className="text-powble-gray-300 text-sm space-y-2 mb-3">
                        <li className="flex items-start gap-2">
                          <span className="text-powble-accent mt-1">•</span>
                          <span><span className="font-semibold">Interruptor termomagnético de 20A</span></span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-powble-accent mt-1">•</span>
                          <span><span className="font-semibold">GFCI (Interruptor diferencial)</span> si está en áreas húmedas</span>
                        </li>
                      </ul>
                      <div className="bg-powble-gray-900/50 border border-powble-gray-700 rounded px-3 py-2 text-xs text-powble-gray-400">
                        <span className="text-powble-accent font-semibold">Referencia:</span> NTC 2050, Artículos 210.20 y 210.8
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Input del chat */}
              <div className="border-t border-powble-gray-800 px-6 py-4">
                <div className="flex items-center gap-2 bg-powble-gray-800 rounded-lg px-4 py-3 border border-powble-gray-700">
                  <input 
                    type="text" 
                    placeholder="Escribe tu pregunta normativa..."
                    className="flex-1 bg-transparent text-powble-gray-300 text-sm placeholder-powble-gray-500 focus:outline-none"
                    disabled
                  />
                  <ArrowRight className="w-5 h-5 text-powble-gray-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Contenido de texto */}
          <div className="animate-reveal animate-reveal-delay-1 order-1 lg:order-2">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-powble-accent uppercase tracking-wider">
                Herramienta Gratuita
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Chat Normativo IA: Tu Asesor 24/7
            </h2>
            
            <p className="text-lg text-powble-gray-300 mb-8 leading-relaxed">
              Accede gratis a nuestro chat especializado en normativa eléctrica. Pregunta lo que necesites y obtén respuestas precisas al instante.
            </p>

            {/* Beneficios */}
            <div className="space-y-6 mb-8">
              <div className="flex gap-4 items-start group">
                <div className="bg-powble-accent/10 border border-powble-accent/20 text-powble-accent p-3 rounded-lg shrink-0 group-hover:bg-powble-accent/20 transition-all duration-300">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Respuestas Precisas con Citas Verificables</h3>
                  <p className="text-powble-gray-300 text-sm">
                    Cada respuesta incluye la referencia exacta de la norma consultada.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="bg-powble-accent/10 border border-powble-accent/20 text-powble-accent p-3 rounded-lg shrink-0 group-hover:bg-powble-accent/20 transition-all duration-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Historial Inteligente</h3>
                  <p className="text-powble-gray-300 text-sm">
                    Guarda tus consultas y accede a ellas cuando las necesites.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="bg-powble-accent/10 border border-powble-accent/20 text-powble-accent p-3 rounded-lg shrink-0 group-hover:bg-powble-accent/20 transition-all duration-300">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Acceso Gratuito y Sin Compromiso</h3>
                  <p className="text-powble-gray-300 text-sm">
                    Empieza a usar el chat ahora mismo, sin tarjeta de crédito.
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-powble-accent hover:bg-powble-accent/90 text-white text-lg px-8 py-6 group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-powble-accent/20">
              Empieza a Preguntar Ahora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChatSection;

