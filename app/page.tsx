import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { TrustSignals } from "@/components/home/TrustSignals";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactForm } from "@/components/home/ContactForm";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <TrustSignals />
      <ServicesGrid />
      <Testimonials />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
