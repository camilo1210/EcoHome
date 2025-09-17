import { Toaster } from "./components/ui/sonner";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { ProductsSection } from "./components/products-section";
import { ContactForm } from "./components/contact-form";
import { SupportSection } from "./components/support-section";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <ContactForm />
        <SupportSection />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}