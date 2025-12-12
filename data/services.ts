import { Zap, Wrench, Lightbulb, Briefcase } from "lucide-react";

export const services = [
  {
    id: "repair",
    title: "Elektrik Tamiri",
    description: "Kablolama, priz ve anahtarlar için hızlı ve güvenilir tamir hizmetleri.",
    icon: Wrench,
    slug: "elektrik-tamiri",
    image: "/priz.jpeg",
    detailedDescription: `Ev ve iş yerlerinizde meydana gelen her türlü elektrik arızasında yanınızdayız. Eskiyen prizlerin değişimi, çalışmayan anahtarların onarımı, sigorta atması sorunları ve hasarlı kabloların yenilenmesi gibi işlemleri profesyonelce gerçekleştiriyoruz.

Güvenliğiniz bizim önceliğimizdir. Arızalı elektrik tesisatı yangın riski oluşturabilir. Bu yüzden en küçük sorunda bile uzman desteği almanız önemlidir. Kullandığımız malzemeler TSE standartlarına uygun, uzun ömürlü ve garantilidir.`,
    features: [
      "Priz ve Anahtar Değişimi",
      "Sigorta Panosu Arızaları",
      "Kablo Kopuğu Tespiti ve Tamiri",
      "Kaçak Akım Rölesi Kontrolü"
    ]
  },
  {
    id: "installation",
    title: "Montaj ve Kurulum",
    description: "Yeni hatların profesyonel montajı.",
    icon: Zap,
    slug: "montaj-kurulum",
    image: "/avize.jpeg",
    detailedDescription: `Yeni aldığınız avizelerin montajı veya odalarınızın yerleşim planına göre yeni priz/hat çekilmesi işlemlerini titizlikle yapıyoruz.

Özellikle avize montajı, tavan yapısına uygun dübel seçimi ve elektrik bağlantılarının doğru yapılması açısından uzmanlık gerektirir. Yanlış montaj hem estetik sorunlara hem de düşme riskine yol açabilir. Biz, mekanınıza en uygun ve en sağlam montajı garanti ediyoruz.`,
    features: [
      "Avize ve Aydınlatma Montajı",
      "Klima Elektrik Hattı Çekimi",
      "Korniş Montajı",
      "Yeni Priz Hattı Ekleme",
      "Elektrikli Şofben Montajı"
    ]
  },
  {
    id: "lighting",
    title: "Aydınlatma Çözümleri",
    description: "İç ve dış mekan aydınlatma tasarımı ve profesyonel kurulumu.",
    icon: Lightbulb,
    slug: "aydinlatma-cozumleri",
    image: "/isikli_led.jpeg",
    detailedDescription: `Mekanlarınızın havasını değiştirecek modern aydınlatma çözümleri sunuyoruz. Gizli LED aydınlatmalar, spot ışıklar, bahçe aydınlatmaları ve ofis ışıklandırma sistemleri konusunda uzmanız.

Doğru aydınlatma sadece estetik değil, enerji tasarrufu açısından da önemlidir. Mekanınıza en uygun ışık rengini ve armatürleri seçmenize yardımcı oluyor, elektrik faturanızı düşürecek LED dönüşüm projeleri uyguluyoruz.`,
    features: [
      "LED Şerit ve Spot Aydınlatma",
      "Asma Tavan Aydınlatması",
      "Bahçe ve Dış Mekan Aydınlatma",
      "Mağaza ve Vitrin Aydınlatması"
    ]
  },
  {
    id: "projects",
    title: "Projelerimiz",
    description: "Tamamladığımız başarılı projelerden örnekler ve referanslarımız.",
    icon: Briefcase,
    slug: "projelerimiz",
    image: "/projelerimiz_arkaplan_1.jpeg", // Geçici olarak genel arka planı kullanıyorum
    detailedDescription: `Müşterilerimiz için gerçekleştirdiğimiz elektrik tamiri, montaj ve aydınlatma projelerinden kareler. Her bir projede güvenlik, kalite ve müşteri memnuniyetini ön planda tutuyoruz.

Yaptığımız işlerin kalitesini ve öncesi-sonrası dönüşümlerini inceleyerek bize güvenebilirsiniz. Siz hayal edin, biz gerçekleştirelim.`,
    features: [
      "Anahtar Teslim Elektrik Tesisatı",
      "Ofis ve Mağaza Aydınlatma Projeleri",
      "Ev Yenileme ve Tadilat İşleri",
      "Güvenlik Sistemleri Montajı"
    ]
  },
];
