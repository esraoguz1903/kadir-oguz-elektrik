import { Zap, Wrench, Lightbulb } from "lucide-react";

export const services = [
  {
    id: "repair",
    title: "Elektrik Tamiri",
    description: "Kablolama, priz ve anahtarlar için hızlı ve güvenilir tamir hizmetleri.",
    icon: Wrench,
    slug: "elektrik-tamiri",
  },
  {
    id: "installation",
    title: "Montaj ve Kurulum",
    description: "Elektrikli ev aletleri, fanlar ve yeni hatların profesyonel montajı.",
    icon: Zap,
    slug: "montaj-kurulum",
  },
  {
    id: "lighting",
    title: "Aydınlatma Çözümleri",
    description: "İç ve dış mekan aydınlatma tasarımı ve profesyonel kurulumu.",
    icon: Lightbulb,
    slug: "aydinlatma-cozumleri",
  },
];
