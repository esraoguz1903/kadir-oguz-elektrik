# Elektrikçi Portfolio Sitesi Geliştirme Planı

Bu plan, yerel bir elektrikçi için hızlı, SEO dostu ve modern bir web sitesi oluşturmayı hedefler.

## 1. Proje Kurulumu ve Başlangıç

- **Hedef**: Next.js projesini başlatmak ve temel kütüphaneleri kurmak.
- **Adımlar**:
    - [x] Next.js uygulamasını oluştur (`create-next-app`).
    - [x] Shadcn/UI kütüphanesini başlat (`npx shadcn-ui@latest init`).
    - [x] Gerekli paketleri yükle: `framer-motion`, `lucide-react`.
    - [x] Proje klasör yapısını düzenle (`components`, `lib`, `data`).

## 2. Veri Yapısı (Geleceğe Hazırlık)

- **Hedef**: Hizmet verilerini ayrıştırarak e-ticaret geçişini kolaylaştırmak.
- **Adımlar**:
    - [x] `data/services.ts` oluştur.
    - [x] İçerik: Hizmet adı, açıklama, ikon, slug.

## 3. Temel Bileşenlerin Oluşturulması

- [x] **Navbar (`components/layout/Navbar.tsx`)**: Sticky, Logo, Linkler, "Hemen Ara" butonu.
- [x] **Hero Bölümü (`components/home/Hero.tsx`)**: Başlık, Alt metin, CTA, Arka plan.
- [x] **WhatsApp Butonu (`components/ui/WhatsAppButton.tsx`)**: Sağ alt köşede sabit buton.

## 4. Sayfa Düzeni ve SEO

- [x] **`app/layout.tsx`**: Font ayarları, Metadata API (Başlık/Açıklama).
- [x] **`app/page.tsx`**: Bileşenlerin birleştirilmesi.

## 5. Diğer Bölümler (Tamamlandı)

- [x] **Trust Signals (`components/home/TrustSignals.tsx`)**: Güven sinyalleri (Sigortalı, 7/24 vb.).
- [x] **Services Grid (`components/home/ServicesGrid.tsx`)**: Hizmet kartları listesi.
- [x] **Project Showcase (`components/home/ProjectShowcase.tsx`)**: Önce/Sonra karşılaştırma.
- [x] **Testimonials (`components/home/Testimonials.tsx`)**: Müşteri yorumları.
- [x] **Contact Form (`components/home/ContactForm.tsx`)**: İletişim formu.
- [x] **Footer (`components/layout/Footer.tsx`)**: Alt bilgi alanı.

## 6. Performans ve Optimizasyon

- [x] **Görsel Optimizasyonu**: `next/image` kullanımı ve Unsplash yapılandırması.
- [x] **SEO**: Semantik HTML yapısı.

### Durum Özeti

Tüm planlanan özellikler ve bölümler kodlanmıştır. Proje geliştirme aşaması tamamlanmıştır.

