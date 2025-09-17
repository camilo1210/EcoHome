import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    userType: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "El nombre completo es requerido.";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es requerido.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "El correo no es válido. Intenta con este formato: nombre@ejemplo.com";
    }
    
    if (!formData.userType) {
      newErrors.userType = "Selecciona el tipo de cliente.";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido.";
    }
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      toast.error("Faltan campos obligatorios por llenar. Revisa los marcados en rojo.");
      return;
    }
    
    setErrors({});
    setIsSubmitting(true);
    
    // Simular envío
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      toast.success("¡Mensaje enviado correctamente! 🎉 Te contactaremos pronto.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        userType: "",
        message: ""
      });
      
    } catch (error) {
      toast.error("Algo salió mal 😕. Vuelve a intentarlo o contacta soporte si el problema persiste.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 space-y-4">
        <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
        <h3 className="text-2xl">¡Gracias por contactarnos!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Tu mensaje ha sido enviado correctamente. Nuestro equipo se pondrá en contacto 
          contigo en las próximas 24 horas.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                💬 Contáctanos
              </Badge>
              <h2 className="text-3xl md:text-4xl">
                ¿Listo para transformar tu espacio?
              </h2>
              <p className="text-lg text-muted-foreground">
                Nuestro equipo de expertos está aquí para ayudarte a encontrar 
                la solución perfecta. Comparte tus necesidades y te 
                contactaremos pronto.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div>contacto@ecohome.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Teléfono</div>
                  <div>+57 1 234 5678</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Oficina</div>
                  <div>Bogotá, Colombia</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <h3 className="mb-2">💡 ¿Sabías que?</h3>
              <p className="text-sm text-muted-foreground">
                Nuestros clientes ahorran en promedio 30-40% en costos energéticos 
                después de implementar nuestras soluciones inteligentes.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Cuéntanos sobre tu proyecto</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Escribe tu nombre completo *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Juan Pérez"
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <div className="flex items-center gap-2 text-sm text-red-600">
                      <AlertCircle className="h-4 w-4" />
                      {errors.name}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Escribe tu correo electrónico corporativo o personal *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="juan@empresa.com"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <div className="flex items-center gap-2 text-sm text-red-600">
                      <AlertCircle className="h-4 w-4" />
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono (opcional)</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+57 300 123 4567"
                  />
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa u organización (opcional)</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Mi Empresa S.A.S"
                  />
                </div>

                {/* User Type */}
                <div className="space-y-2">
                  <Label>Tipo de cliente *</Label>
                  <Select 
                    value={formData.userType} 
                    onValueChange={(value) => handleInputChange("userType", value)}
                  >
                    <SelectTrigger className={errors.userType ? "border-red-500" : ""}>
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hogar">Hogar / Residencial</SelectItem>
                      <SelectItem value="integrador">Integrador / Contratista</SelectItem>
                      <SelectItem value="empresa">Empresa</SelectItem>
                      <SelectItem value="gobierno">Entidad Gubernamental</SelectItem>
                      <SelectItem value="smartcity">Proyecto Smart City</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.userType && (
                    <div className="flex items-center gap-2 text-sm text-red-600">
                      <AlertCircle className="h-4 w-4" />
                      {errors.userType}
                    </div>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Cuéntanos sobre tu proyecto *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Describe tu proyecto, necesidades específicas, tamaño del espacio, etc."
                    rows={4}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <div className="flex items-center gap-2 text-sm text-red-600">
                      <AlertCircle className="h-4 w-4" />
                      {errors.message}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Procesando... Esto tomará solo unos segundos
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar mensaje
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground">
                  * Campos obligatorios. Al enviar este formulario, aceptas nuestras políticas de privacidad.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}