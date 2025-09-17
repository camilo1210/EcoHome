import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Leaf, Zap, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit">
              🌱 Tecnología Sostenible para tu Hogar
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl">
                Transforma tu hogar en un 
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> espacio inteligente</span> 
                y sostenible
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Descubre soluciones tecnológicas que optimizan tu entorno, 
                ahorran energía y mejoran tu calidad de vida. Perfectas para 
                hogares, empresas y proyectos de Smart Cities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Explorar Catálogo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Solicitar Cotización
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center space-y-2">
                <Leaf className="h-8 w-8 mx-auto text-green-600" />
                <p className="text-sm">Sostenible</p>
              </div>
              <div className="text-center space-y-2">
                <Zap className="h-8 w-8 mx-auto text-blue-600" />
                <p className="text-sm">Eficiente</p>
              </div>
              <div className="text-center space-y-2">
                <Shield className="h-8 w-8 mx-auto text-purple-600" />
                <p className="text-sm">Seguro</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1704475187766-058b6f7b7929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjB0ZWNobm9sb2d5JTIwc3VzdGFpbmFibGV8ZW58MXx8fHwxNzU2OTM5NTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Smart home technology - casa inteligente sostenible"
                className="w-full h-96 object-cover"
              />
              
              {/* Floating cards */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-lg p-3 shadow-lg">
                <div className="text-xs text-muted-foreground">Ahorro energético</div>
                <div className="text-green-600">-45%</div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg p-3 shadow-lg">
                <div className="text-xs text-muted-foreground">Conectado</div>
                <div className="flex items-center text-blue-600 text-sm">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  Smart Home
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}