"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-yellow-500/5 -skew-x-12 transform origin-top-right" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">İletişime Geçin</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Ücretsiz Keşif ve <br /> Teklif Alın
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Elektrik arızası mı var? Yeni bir projeniz mi var? 
              Formu doldurun, en kısa sürede size dönüş yapalım.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Bizi Arayın</p>
                  <p className="text-xl font-bold text-white">+90 535 034 77 52</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">E-posta Gönderin</p>
                  <p className="text-lg font-medium text-white">info@mersinoguzelektrik.com.tr</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl text-gray-900">
            <form
              className="space-y-6"
              action="https://formspree.io/f/mvgevaez"
              method="POST"
              acceptCharset="UTF-8"
            >
              <input type="hidden" name="_subject" value="İletişim Formu - OĞUZ ELEKTRİK" />
              <input type="hidden" name="_format" value="plain" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ad Soyad</Label>
                  <Input id="name" name="Ad Soyad" placeholder="Adınız" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    name="Telefon"
                    placeholder="05xx xxx xx xx"
                    inputMode="tel"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="service">Hizmet Türü</Label>
                <select
                  id="service"
                  name="Hizmet"
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Seçiniz...</option>
                  <option value="Tamir & Bakım">Tamir & Bakım</option>
                  <option value="Montaj">Montaj</option>
                  <option value="Proje & Taahhüt">Proje & Taahhüt</option>
                  <option value="Diğer">Diğer</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mesajınız</Label>
                <Textarea
                  id="message"
                  name="Mesaj"
                  placeholder="Sorununuzu kısaca açıklayın..."
                  className="min-h-[100px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white text-lg py-6">
                Gönder
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

