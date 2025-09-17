import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, ShoppingCart, Eye, Zap, Leaf, Shield, Wifi } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const products = [
  {
    id: 1,
    name: "Termostato Inteligente EcoTemp Pro",
    description: "Control de temperatura inteligente con aprendizaje automático",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 124,
    category: "Climatización",
    features: ["WiFi", "Aprendizaje IA", "Ahorro 30%"],
    image: "https://images.unsplash.com/photo-1650682009477-52fd77302b78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHRoZXJtb3N0YXQlMjBob21lJTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3NTY5MDkzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    sustainable: true,
    inStock: true
  },
  {
    id: 2,
    name: "Kit Iluminación LED Smart Home",
    description: "Sistema completo de iluminación inteligente para toda la casa",
    price: 189,
    rating: 4.9,
    reviews: 89,
    category: "Iluminación",
    features: ["16M colores", "Control por voz", "Dimmer"],
    image: "https://images.unsplash.com/photo-1565596259320-f1a4ade7043a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMRUQlMjBzbWFydCUyMGxpZ2h0aW5nJTIwaG9tZXxlbnwxfHx8fDE3NTY5Mzk1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    sustainable: true,
    inStock: true
  },
  {
    id: 3,
    name: "Panel Solar Residencial 400W",
    description: "Panel solar de alta eficiencia para uso residencial",
    price: 449,
    rating: 4.7,
    reviews: 156,
    category: "Energía Solar",
    features: ["400W potencia", "25 años garantía", "Instalación incluida"],
    image: "https://images.unsplash.com/photo-1589276215887-9f690f8e1b89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMGdyZWVuJTIwZW5lcmd5fGVufDF8fHx8MTc1NjkxNzU3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    sustainable: true,
    inStock: true
  },
  {
    id: 4,
    name: "Sistema Seguridad Smart Pro",
    description: "Kit completo de seguridad inteligente con cámaras y sensores",
    price: 599,
    originalPrice: 799,
    rating: 4.6,
    reviews: 203,
    category: "Seguridad",
    features: ["HD 1080p", "Visión nocturna", "App móvil"],
    image: "https://images.unsplash.com/photo-1664981068907-96a48dcd10aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwc2VjdXJpdHklMjBzbWFydCUyMGRvb3JiZWxsfGVufDF8fHx8MTc1NjkzOTUwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    sustainable: false,
    inStock: true
  }
];

export function ProductsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="w-fit mx-auto">
            🏠 Productos Destacados
          </Badge>
          <h2 className="text-3xl md:text-4xl">
            Soluciones inteligentes para cada necesidad
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora nuestra selección de productos sostenibles diseñados para 
            optimizar tu hogar, oficina o proyecto de Smart City.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button variant="default" size="sm">Todos</Button>
          <Button variant="outline" size="sm">Climatización</Button>
          <Button variant="outline" size="sm">Iluminación</Button>
          <Button variant="outline" size="sm">Energía Solar</Button>
          <Button variant="outline" size="sm">Seguridad</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.sustainable && (
                      <Badge className="bg-green-600 hover:bg-green-700">
                        <Leaf className="w-3 h-3 mr-1" />
                        Eco
                      </Badge>
                    )}
                    {product.originalPrice && (
                      <Badge variant="destructive">
                        Oferta
                      </Badge>
                    )}
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="secondary" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Stock indicator */}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white bg-red-600 px-3 py-1 rounded-full text-sm">
                        Agotado
                      </span>
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-4 space-y-3">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">{product.category}</div>
                  <h3 className="line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>
                
                {/* Features */}
                <div className="flex flex-wrap gap-1">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {product.features.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{product.features.length - 2}
                    </Badge>
                  )}
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                
                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-xl">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <Button 
                  className="w-full" 
                  disabled={!product.inStock}
                  variant={product.inStock ? "default" : "outline"}
                >
                  {product.inStock ? (
                    <>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Agregar al carrito
                    </>
                  ) : (
                    "Notificar disponibilidad"
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver todo el catálogo
          </Button>
        </div>
      </div>
    </section>
  );
}