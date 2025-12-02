"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/905551234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        Hızlı Destek
      </span>
    </Link>
  );
}

