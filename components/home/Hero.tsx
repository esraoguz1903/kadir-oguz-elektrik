"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/90 to-gray-50/30 z-10" />
        {/* Placeholder for background image */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center" />
      </div>

      <div className="container mx-auto px-4 z-20 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold mb-4">
              ⚡ 7/24 Acil Servis
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Profesyonel <span className="text-yellow-500">Elektrik</span> <br />
              Çözümleri
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Eviniz ve iş yeriniz için güvenilir elektrik tamiri, montaj ve bakım hizmetleri. 
              Sertifikalı uzman kadromuzla hizmetinizdeyiz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg px-8 py-6">
                Teklif Al
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/80 backdrop-blur-sm">
                Hizmetlerimiz
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

