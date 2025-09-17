import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube,
  Leaf,
  Shield,
  Award,
  Download
} from "lucide-react";

const productCategories = [
  { name: "Termostatos Inteligentes", href: "#" },
  { name: "Iluminación LED Smart", href: "#" },
  { name: "Paneles Solares", href: "#" },
  { name: "Sistemas de Seguridad", href: "#" },
  { name: "Sensores y Detectores", href: "#" },
  { name: "Automatización", href: "#" }
];

const solutions = [
  { name: "Para el Hogar", href: "#" },
  { name: "Integradores", href: "#" },
  { name: "Empresas", href: "#" },
  { name: "Smart Cities", href: "#" },
  { name: "Proyectos Gubernamentales", href: "#" }
];

const support = [
  { name: "Centro de Ayuda", href: "#" },
  { name: "Preguntas Frecuentes", href: "#" },
  { name: "Soporte Técnico", href: "#" },
  { name: "Garantías", href: "#" },
  { name: "Instalación", href: "#" },
  { name: "Mantenimiento", href: "#" }
];

const documentation = [
  { name: "Guías de Instalación", href: "#" },
  { name: "Manuales Técnicos", href: "#" },
  { name: "Certificaciones", href: "#" },
  { name: "Especificaciones", href: "#" },
  { name: "APIs y Desarrolladores", href: "#" }
];

const legal = [
  { name: "Políticas de Privacidad", href: "#" },
  { name: "Términos y Condiciones", href: "#" },
  { name: "Políticas de Devolución", href: "#" },
  { name: "Política de Cookies", href: "#" }
];

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl">Mantente conectado con EcoHome</h3>
              <p className="text-muted-foreground">
                Recibe las últimas noticias sobre tecnología sostenible, 
                ofertas exclusivas y guías de productos inteligentes.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-2">
                <Input 
                  placeholder="Escribe tu correo electrónico"
                  className="flex-1"
                />
                <Button>
                  Suscribirme
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Al suscribirte, aceptas recibir emails de EcoHome. 
                Puedes cancelar en cualquier momento.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                EcoHome
              </h2>
              <p className="text-muted-foreground text-sm">
                Transformamos espacios en entornos inteligentes y sostenibles. 
                Soluciones tecnológicas para hogares, empresas y Smart Cities 
                que optimizan el consumo energético y mejoran la calidad de vida.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>contacto@ecohome.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>+57 1 234 5678</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Bogotá, Colombia</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-2">
              <p className="text-sm">Certificaciones:</p>
              <div className="flex gap-3">
                <div className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                  <Leaf className="h-3 w-3" />
                  ISO 14001
                </div>
                <div className="flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  <Shield className="h-3 w-3" />
                  IEC 62443
                </div>
                <div className="flex items-center gap-1 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                  <Award className="h-3 w-3" />
                  ENERGY STAR
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4>Productos</h4>
            <ul className="space-y-2">
              {productCategories.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4>Soluciones</h4>
            <ul className="space-y-2">
              {solutions.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4>Soporte</h4>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Documentation */}
          <div className="space-y-4">
            <h4>Documentación</h4>
            <ul className="space-y-2">
              {documentation.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button variant="outline" size="sm" className="w-full">
              <Download className="w-3 h-3 mr-1" />
              Descargar Catálogo
            </Button>
          </div>
        </div>

        {/* Bottom Footer */}
        <Separator />
        
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <span>© 2024 EcoHome. Todos los derechos reservados.</span>
            <div className="flex gap-4">
              {legal.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className="hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Social Media */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Síguenos:</span>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}