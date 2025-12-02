import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Profesyonel Elektrikçi - Tamir, Montaj ve Bakım",
  description: "7/24 Acil elektrikçi hizmeti. Ev ve iş yerleri için elektrik tamiri, montajı ve bakım hizmetleri. Hemen arayın!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={cn(inter.className, "antialiased bg-white text-gray-900")}>
        {children}
      </body>
    </html>
  );
}
