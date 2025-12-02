import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      
      {/* Placeholder for other sections */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
            <p className="text-gray-600">Yakında eklenecek...</p>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}
