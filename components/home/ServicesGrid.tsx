import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Hizmetlerimiz</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Elektrik İhtiyaçlarınız İçin <br /> Profesyonel Çözümler
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Eviniz ve iş yeriniz için geniş kapsamlı elektrik hizmetleri sunuyoruz. 
            Tamir, montaj ve bakım işlerinizde uzman desteği alın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 border-gray-100 hover:border-yellow-200 bg-gray-50 hover:bg-white">
              <CardHeader>
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-yellow-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link 
                  href={`/hizmetler/${service.slug}`} 
                  className="inline-flex items-center text-sm font-medium text-yellow-600 hover:text-yellow-700 transition-colors"
                >
                  Detaylı Bilgi
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

