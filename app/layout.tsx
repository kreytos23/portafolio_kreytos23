import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Portafolio Kreytos23",
  description: "Base profesional de portafolio con Next.js y Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${merriweather.variable} bg-slate-50 font-sans text-slate-900 antialiased`}>
        <SiteHeader />
        <main className="mx-auto w-full max-w-content px-container py-section">{children}</main>
      </body>
    </html>
  );
}
