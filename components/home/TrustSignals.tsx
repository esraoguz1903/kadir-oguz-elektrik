import { ShieldCheck, Clock, Award, ThumbsUp } from "lucide-react";

const signals = [
  {
    icon: ShieldCheck,
    title: "Lisanslı & Sigortalı",
    description: "Güvenilir ve sertifikalı hizmet.",
  },
  {
    icon: Clock,
    title: "7/24 Acil Servis",
    description: "Günün her saati yanınızdayız.",
  },
  {
    icon: Award,
    title: "5+ Yıl Deneyim",
    description: "Tecrübeli uzman kadro.",
  },
  {
    icon: ThumbsUp,
    title: "%100 Müşteri Memnuniyeti",
    description: "Kaliteli işçilik garantisi.",
  },
];

export function TrustSignals() {
  return (
    <section className="py-10 bg-yellow-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {signals.map((signal, index) => (
            <div key={index} className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start gap-4">
              <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                <signal.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">{signal.title}</h3>
                <p className="text-yellow-100 text-sm">{signal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

