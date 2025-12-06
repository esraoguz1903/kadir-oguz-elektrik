import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ahmet Y.",
    role: "Ev Sahibi",
    content: "Pazar günü acil bir elektrik arızası için aradım, 30 dakika içinde geldiler ve sorunu çözdüler. Çok profesyonel bir hizmet.",
    rating: 5,
  },
  {
    id: 2,
    name: "Selin K.",
    role: "İşletme Sahibi",
    content: "Ofisimizin tüm aydınlatma sistemini LED'e dönüştürdüler. Hem işçilik çok temizdi hem de faturamızda ciddi düşüş oldu.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mehmet T.",
    role: "Site Yöneticisi",
    content: "Sitemizin bahçe aydınlatması ve güvenlik kamerası kurulumunu yaptılar. Zamanında teslim ve güler yüzlü hizmet.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">Referanslar</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Müşterilerimiz Ne Diyor?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-gray-50 border-none shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700 font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}




