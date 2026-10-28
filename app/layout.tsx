import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const outfit = Outfit({
//   variable: "--font-outfit",
//   subsets: ["latin"],
//   weight: ["500", "600", "700", "800"],
//   display: "swap",
// });

// const plusJakartaSans = Plus_Jakarta_Sans({
//   variable: "--font-plus-jakarta",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Creative Bee Foundation — Berbagi Kebaikan, Menyalurkan Senyuman Manis",
  description: "Yayasan sosial berakar pada kehangatan komunitas, membagikan manisnya harapan lewat transparansi, edukasi, dan aksi kemanusiaan ceria.",
  keywords: ["donasi", "yayasan", "creative bee foundation", "relawan", "amal", "konservasi", "edukasi"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className="scroll-smooth h-full antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#fff8f5] text-[#1f1b17] font-sans selection:bg-amber-100 selection:text-amber-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
