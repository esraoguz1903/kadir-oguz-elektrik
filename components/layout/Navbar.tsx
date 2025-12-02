"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          <span className={cn("font-bold text-xl", isScrolled ? "text-gray-900" : "text-gray-900")}>
            Elektrikçi
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm font-medium hover:text-yellow-600 transition-colors">
            Hizmetler
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-yellow-600 transition-colors">
            Projeler
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-yellow-600 transition-colors">
            Yorumlar
          </Link>
        </nav>

        {/* Call Button */}
        <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full px-6">
          <Link href="tel:+905350347752" className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Hemen Ara</span>
          </Link>
        </Button>
      </div>
    </header>
  );
}

