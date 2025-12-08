import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import React from "react";

// Static Params Generation (SSG için)
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  // Params'ı await ile çözümlüyoruz
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px] w-full bg-gray-900 flex items-center justify-center">
        <div className="absolute inset-0 opacity-50">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container relative z-10 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Hizmet Detayları</h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed whitespace-pre-line">
                {service.detailedDescription}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Neler Yapıyoruz?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8">
                <Link href="/#contact">Hemen Teklif Al</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/#services" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Diğer Hizmetler
                </Link>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-gray-900 text-white p-8 rounded-2xl sticky top-24">
              <h3 className="text-xl font-bold mb-4">Desteğe mi İhtiyacınız Var?</h3>
              <p className="text-gray-400 mb-6">
                Hemen arayın, en kısa sürede adresinize gelelim.
              </p>
              <Button asChild className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-6 text-lg mb-4">
                <a href="tel:+905350347752" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  +90 535 034 77 52
                </a>
              </Button>
              <p className="text-center text-sm text-gray-500">
                Mersin ve çevresi için geçerlidir.
              </p>
            </div>

            {/* Other Services List */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Diğer Hizmetlerimiz</h3>
              <nav className="flex flex-col gap-2">
                {services.filter(s => s.slug !== slug).map((s) => (
                  <Link 
                    key={s.slug} 
                    href={`/hizmetler/${s.slug}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 text-gray-600 hover:text-yellow-600 transition-colors group"
                  >
                    <span>{s.title}</span>
                    <span className="text-gray-300 group-hover:text-yellow-500">→</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>

        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
