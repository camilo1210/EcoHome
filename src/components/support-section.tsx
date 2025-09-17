import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { HelpCircle, Download, Shield, Clock, Phone, MessageCircle } from "lucide-react";

const faqs = [
  {
    id: "1",
    question: "¿Qué garantía tienen los productos EcoHome?",
    answer: "Todos nuestros productos incluyen garantía del fabricante que varía entre 2-25 años dependiendo del producto. Los paneles solares incluyen 25 años de garantía, termostatos 5 años, e iluminación LED hasta 10 años. Además, ofrecemos soporte técnico gratuito durante el primer año."
  },
  {
    id: "2",
    question: "¿Los productos son compatibles con otros sistemas smart home?",
    answer: "Sí, nuestros productos están diseñados para ser compatibles con las principales plataformas como Google Home, Amazon Alexa, Apple HomeKit y Samsung SmartThings. Cada ficha de producto especifica las compatibilidades exactas."
  },
  {
    id: "3",
    question: "¿Incluyen instalación los productos?",
    answer: "La instalación varía por producto. Los paneles solares incluyen instalación gratuita, mientras que productos como termostatos y sistemas de iluminación incluyen guías detalladas para auto-instalación. También ofrecemos servicio de instalación profesional opcional."
  },
  {
    id: "4",
    question: "¿Cuánto tiempo toma la entrega?",
    answer: "Las entregas en Bogotá toman 1-2 días hábiles. Para otras ciudades principales 2-3 días hábiles. Productos especializados o bajo pedido pueden tomar 5-10 días. Te notificaremos el tiempo exacto al confirmar tu pedido."
  },
  {
    id: "5",
    question: "¿Ofrecen financiación para proyectos grandes?",
    answer: "Sí, para pedidos superiores a $2,000,000 COP ofrecemos planes de financiación de 6, 12 y 24 meses. Para proyectos empresariales y Smart Cities tenemos condiciones especiales de pago y leasing."
  },
  {
    id: "6",
    question: "¿Cómo solicito soporte técnico?",
    answer: "Puedes contactarnos por WhatsApp (+57 300 123 4567), email (soporte@ecohome.com), o través del chat en vivo en nuestra web. Nuestro horario de atención es lunes a viernes 8AM-6PM, sábados 9AM-2PM."
  }
];

const supportChannels = [
  {
    title: "Chat en Vivo",
    description: "Respuesta inmediata de 8AM a 6PM",
    icon: MessageCircle,
    action: "Iniciar chat",
    available: true
  },
  {
    title: "WhatsApp",
    description: "+57 300 123 4567",
    icon: Phone,
    action: "Contactar",
    available: true
  },
  {
    title: "Soporte Técnico",
    description: "soporte@ecohome.com",
    icon: HelpCircle,
    action: "Enviar email",
    available: true
  },
  {
    title: "Documentación",
    description: "Guías y manuales",
    icon: Download,
    action: "Descargar",
    available: true
  }
];

export function SupportSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="w-fit mx-auto">
            🤝 Soporte y Ayuda
          </Badge>
          <h2 className="text-3xl md:text-4xl">
            Estamos aquí para ayudarte
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentra respuestas rápidas a tus preguntas o contacta nuestro 
            equipo de soporte especializado.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Support Channels */}
          <div className="space-y-6">
            <h3>Canales de Atención</h3>
            
            {supportChannels.map((channel, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600">
                      <channel.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm">{channel.title}</h4>
                        {channel.available && (
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-xs text-green-600">Disponible</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {channel.description}
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        {channel.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Guarantees Info */}
            <Card className="bg-gradient-to-br from-blue-50 to-green-50">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Shield className="h-5 w-5 text-blue-600" />
                  Nuestras Garantías
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Respuesta en menos de 2 horas</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <span>Garantía extendida disponible</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Download className="h-4 w-4 text-muted-foreground" />
                  <span>Manuales y guías gratis</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <h3 className="mb-6">Preguntas Frecuentes</h3>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id}
                  className="border rounded-lg px-4"
                >
                  <AccordionTrigger className="hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Additional Help */}
            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <h4 className="mb-2">¿No encontraste lo que buscabas?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Nuestro equipo especializado está listo para resolver tus dudas específicas 
                sobre productos, compatibilidad técnica o instalación.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="default">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contactar Soporte
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar Guías
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}