import { Award, ThumbsUp } from "lucide-react";

const signals = [
  {
    icon: Award,
    title: "2+ Yıl Deneyim",
    description: "Tecrübeli teknik ve mühendislik bakış açısı.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {signals.map((signal, index) => (
            <div key={index} className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start gap-4 justify-center md:justify-center">
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
