import React, { useEffect, useState, useRef } from 'react';
import { AlertCircle, FileSpreadsheet, Target, FileText, Loader2 } from 'lucide-react';

const AuditSection: React.FC = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showIssues, setShowIssues] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const analysisSteps = [
    "Cargando documento...",
    "Extrayendo datos del cuadro de carga...",
    "Verificando calibres de conductores...",
    "Validando factores de potencia...",
    "Analizando caída de tensión...",
    "Revisando protecciones...",
    "Generando informe final..."
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            setIsAnalyzing(true);
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
    if (!isAnalyzing) return;

    // Simular progreso de análisis
    const progressInterval = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 140); // 7 segundos total (100 / 2 * 140ms)

    // Cambiar pasos de análisis
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= analysisSteps.length - 1) {
          clearInterval(stepInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 1000); // Cambiar cada segundo

    // Finalizar análisis después de 7 segundos
    const analyzeTimer = setTimeout(() => {
      setIsAnalyzing(false);
      setShowIssues(true);
    }, 7000);

    return () => {
      clearTimeout(analyzeTimer);
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [isAnalyzing]);

  return (
    <section id="auditoria" ref={sectionRef} className="py-20 md:py-32 bg-powble-gray-950 relative overflow-hidden">
      {/* Efectos de fondo sutiles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-powble-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-powble-accent/3 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Contenido de texto */}
          <div className="animate-reveal">
            <div className="inline-flex items-center gap-2 mb-4 bg-powble-accent/10 backdrop-blur-sm border border-powble-accent/20 rounded-full px-4 py-2 animate-pulse">
              <div className="w-2 h-2 bg-powble-accent rounded-full animate-ping"></div>
              <span className="text-sm font-semibold text-powble-accent uppercase tracking-wider">
                Core Feature • Ver Demo en Vivo
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Elimina Errores Críticos con Auditoría Automatizada
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Carga tus documentos (como cuadros de carga en <span className="text-white font-mono font-semibold">.xlsx</span>) y obtén una auditoría normativa completa en minutos.
            </p>

            {/* Beneficios */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="bg-powble-accent/10 border border-powble-accent/20 text-powble-accent p-3 rounded-lg shrink-0 group-hover:bg-powble-accent/20 transition-all duration-300">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Priorización de Riesgos Críticos</h3>
                  <p className="text-gray-300 text-sm">
                    Identifica y clasifica los errores por severidad para que atiendas primero lo que realmente importa.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="bg-powble-accent/10 border border-powble-accent/20 text-powble-accent p-3 rounded-lg shrink-0 group-hover:bg-powble-accent/20 transition-all duration-300">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Referencias Exactas a Normas</h3>
                  <p className="text-gray-300 text-sm">
                    Cada observación incluye la cita específica de RETIE, NTC 2050 o NEC aplicable.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="bg-powble-accent/10 border border-powble-accent/20 text-powble-accent p-3 rounded-lg shrink-0 group-hover:bg-powble-accent/20 transition-all duration-300">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Sugerencias Accionables</h3>
                  <p className="text-gray-300 text-sm">
                    No solo te dice qué está mal, sino cómo corregirlo de forma práctica.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual del tablero */}
          <div className="animate-reveal animate-reveal-delay-1">
            <div className="bg-powble-gray-900 rounded-xl border border-powble-gray-800 shadow-2xl overflow-hidden">
              {/* Header del tablero */}
              <div className="bg-powble-gray-800 border-b border-powble-gray-700 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Tablero de Issues</h3>
                  <FileSpreadsheet className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              
              {/* Contenido */}
              <div className="p-6 min-h-[300px]">
                {isAnalyzing ? (
                  /* Estado de Análisis */
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="relative mb-6">
                      <Loader2 className="w-16 h-16 text-powble-accent animate-spin" />
                      <div className="absolute inset-0 w-16 h-16 border-4 border-powble-accent/20 rounded-full animate-ping"></div>
                    </div>
                    <h4 className="text-white text-xl font-bold mb-3 animate-pulse">Analizando Proyecto...</h4>
                    <p className="text-gray-300 text-sm text-center max-w-md mb-4">
                      Revisando cuadro de carga contra normativas <span className="text-powble-accent font-semibold">RETIE</span>, <span className="text-powble-accent font-semibold">NTC 2050</span> y <span className="text-powble-accent font-semibold">NEC</span>
                    </p>
                    
                    {/* Progress bar */}
                    <div className="w-full max-w-xs bg-powble-gray-800 rounded-full h-3 mb-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-powble-accent to-powble-accent/50 rounded-full transition-all duration-300" 
                        style={{ width: `${analysisProgress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-powble-accent font-semibold mb-4">{analysisProgress}%</span>
                    
                    <div className="flex gap-2 mb-4">
                      <div className="w-2 h-2 bg-powble-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-powble-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-powble-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    
                    {/* Status messages */}
                    <div className="text-xs text-gray-400 text-center space-y-2 min-h-[60px]">
                      {analysisSteps.map((step, index) => (
                        <p 
                          key={index}
                          className={`transition-all duration-300 ${
                            index === currentStep 
                              ? 'text-powble-accent font-semibold opacity-100' 
                              : index < currentStep 
                                ? 'text-green-400 opacity-70' 
                                : 'opacity-30'
                          }`}
                        >
                          {index < currentStep ? '✓' : index === currentStep ? '⏳' : '○'} {step}
                        </p>
                      ))}
                    </div>
                  </div>
                ) : (
                  /* Issues */
                  <div className="space-y-4 animate-fade-in">
                    {/* Issue Crítico */}
                    <div className="bg-powble-gray-800/50 border border-red-500/30 rounded-lg p-4 hover:border-red-500/50 transition-all duration-300 animate-slide-in-left">
                      <div className="flex items-start gap-3">
                        <span className="bg-red-500/20 text-red-400 text-xs font-bold px-2 py-1 rounded">CRÍTICO</span>
                        <div className="flex-1">
                          <p className="text-white text-sm font-semibold mb-1">
                            Calibre de conductor insuficiente
                          </p>
                          <p className="text-gray-300 text-xs">
                            NTC 2050 Art. 310.15 - Capacidad de corriente excedida
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Issue Alto */}
                    <div className="bg-powble-gray-800/50 border border-orange-500/30 rounded-lg p-4 hover:border-orange-500/50 transition-all duration-300 animate-slide-in-left" style={{ animationDelay: '100ms' }}>
                      <div className="flex items-start gap-3">
                        <span className="bg-orange-500/20 text-orange-400 text-xs font-bold px-2 py-1 rounded">ALTO</span>
                        <div className="flex-1">
                          <p className="text-white text-sm font-semibold mb-1">
                            Factor de potencia no considerado
                          </p>
                          <p className="text-gray-300 text-xs">
                            RETIE Art. 20.1 - Debe estar entre 0.85 y 1.0
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Issue Medio */}
                    <div className="bg-powble-gray-800/50 border border-yellow-500/30 rounded-lg p-4 hover:border-yellow-500/50 transition-all duration-300 animate-slide-in-left" style={{ animationDelay: '200ms' }}>
                      <div className="flex items-start gap-3">
                        <span className="bg-yellow-500/20 text-yellow-400 text-xs font-bold px-2 py-1 rounded">MEDIO</span>
                        <div className="flex-1">
                          <p className="text-white text-sm font-semibold mb-1">
                            Falta documentar caída de tensión
                          </p>
                          <p className="text-gray-300 text-xs">
                            NEC 210.19(A) - Máximo 3% permitido
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AuditSection;

