"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Instagram, Linkedin } from "lucide-react";
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
          <div className="relative h-12 w-12 md:h-14 md:w-14">
            <Image 
              src="/logo.png" 
              alt="OĞUZ ELEKTRİK" 
              fill 
              className="object-contain"
            />
          </div>
          <span className={cn("font-bold text-xl", isScrolled ? "text-gray-900" : "text-gray-900")}>
            OĞUZ ELEKTRİK
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm font-medium hover:text-yellow-600 transition-colors">
            Hizmetler
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-yellow-600 transition-colors">
            Yorumlar
          </Link>
        </nav>

        {/* Call Button & Socials */}
        <div className="flex items-center gap-4">
          <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full px-6">
            <Link href="tel:+905350347752" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Hemen Ara</span>
            </Link>
          </Button>

          <div className="flex items-center gap-3 pl-4 border-l border-gray-200 h-8">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-yellow-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/kadir-oguz-248075144/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-yellow-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
