import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, ShoppingCart, Menu, User } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              EcoHome
            </h1>
          </div>

          {/* Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Catálogo</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <div className="space-y-2">
                      <h3>Para el Hogar</h3>
                      <div className="space-y-1 text-sm">
                        <p className="text-muted-foreground">Termostatos Inteligentes</p>
                        <p className="text-muted-foreground">Iluminación LED Smart</p>
                        <p className="text-muted-foreground">Seguridad del Hogar</p>
                        <p className="text-muted-foreground">Energía Solar</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3>Para Profesionales</h3>
                      <div className="space-y-1 text-sm">
                        <p className="text-muted-foreground">Soluciones Integradas</p>
                        <p className="text-muted-foreground">Certificaciones</p>
                        <p className="text-muted-foreground">Documentación Técnica</p>
                        <p className="text-muted-foreground">Soporte Especializado</p>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Smart Cities</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    <div className="space-y-2">
                      <h3>Soluciones Escalables</h3>
                      <p className="text-sm text-muted-foreground">
                        Sistemas inteligentes para proyectos urbanos y gubernamentales
                      </p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost">Cotizaciones</Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost">Soporte</Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search & Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Buscar productos sostenibles..."
                  className="w-64 pl-9"
                />
              </div>
            </div>
            
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-green-600 text-xs text-white flex items-center justify-center">
                2
              </span>
            </Button>
            
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}