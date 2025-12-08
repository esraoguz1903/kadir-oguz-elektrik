import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="relative h-12 w-12 md:h-14 md:w-14">
                <Image 
                  src="/logo.png" 
                  alt="OĞUZ ELEKTRİK" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl text-white">
                OĞUZ ELEKTRİK
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Profesyonel, güvenilir ve hızlı elektrik çözümleri. 
              Her zaman yanınızdayız.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Hızlı Bağlantılar</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-yellow-500 transition-colors">Anasayfa</Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-yellow-500 transition-colors">Hizmetler</Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-yellow-500 transition-colors">İletişim</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Hizmetlerimiz</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/hizmetler/electrical-repair" className="text-gray-400 hover:text-yellow-500 transition-colors">Elektrik Tamiri</Link>
              </li>
              <li>
                <Link href="/hizmetler/installation" className="text-gray-400 hover:text-yellow-500 transition-colors">Montaj & Kurulum</Link>
              </li>
              <li>
                <Link href="/hizmetler/lighting-solutions" className="text-gray-400 hover:text-yellow-500 transition-colors">Aydınlatma</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Örnek Mahallesi, Elektrik Caddesi No: 123,
                  <br />İstanbul, Türkiye
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a href="tel:+905350347752" className="text-gray-400 hover:text-white transition-colors">+90 535 034 77 52</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a href="mailto:info@elektrikci.com" className="text-gray-400 hover:text-white transition-colors">info@elektrikci.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
