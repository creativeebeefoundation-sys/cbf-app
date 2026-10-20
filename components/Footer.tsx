"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#fcf2eb] border-t border-[#f0e6e0] mt-20 text-[#554336]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top Section: Brand Story & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#eae1da]">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white p-1 shadow-sm border border-amber-200/50 flex items-center justify-center overflow-hidden">
                <img
                  src="/image/logo_lebah_kreatif.png"
                  alt="Logo Yayasan Lebah Kreatif"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-lg sm:text-xl font-bold text-[#8d4b00]">
                  Yayasan Lebah Kreatif
                </span>
                <span className="text-[11px] font-semibold text-[#006a61]">
                  Creative Bee Foundation
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#554336] leading-relaxed max-w-md">
              Yayasan sosial berakar pada kehangatan komunitas, membagikan manisnya harapan lewat transparansi, edukasi kreatif anak, dan pelestarian alam tanpa pamrih.
            </p>
            <div className="flex items-center gap-3 pt-2 text-[#8d4b00]">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-amber-100/80">
                <span className="material-symbols-outlined text-sm">verified</span>
                Terdaftar Resmi Kemenkumham RI
              </span>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-3 bg-white/70 p-6 rounded-3xl border border-[#eae1da]">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-500 text-xl">
                mark_email_unread
              </span>
              <span className="font-headline font-bold text-base sm:text-lg text-[#1f1b17]">
                Kabar Manis Mingguan
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#554336]">
              Dapatkan rangkuman senyuman penerima manfaat, laporan penyaluran donasi transparan, dan cerita inspiratif langsung ke emailmu.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-xs sm:text-sm font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-600 text-lg">
                  check_circle
                </span>
                Terima kasih! Kamu telah terdaftar menerima Kabar Manis Mingguan.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 mt-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan alamat email kamu..."
                  required
                  className="flex-1 px-4 py-2.5 rounded-full bg-white border border-[#dbc2b0]/60 text-sm placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#8d4b00] hover:bg-[#b15f00] text-white text-xs sm:text-sm font-bold transition-colors shadow-sm"
                >
                  Langganan
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Section: Links Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-b border-[#eae1da] text-xs sm:text-sm">
          {/* Kolom 1 */}
          <div>
            <h4 className="font-headline font-bold text-[#1f1b17] mb-3 text-sm sm:text-base">
              Tentang Kami
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/tentang-kami" className="hover:text-[#8d4b00] transition-colors">
                  Profil Yayasan
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami#visi-misi" className="hover:text-[#8d4b00] transition-colors">
                  Visi & Misi Ceria
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami#tim" className="hover:text-[#8d4b00] transition-colors">
                  Pengurus & Relawan Lebah
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami#transparansi" className="hover:text-[#8d4b00] transition-colors">
                  Laporan Akuntabilitas
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 2 */}
          <div>
            <h4 className="font-headline font-bold text-[#1f1b17] mb-3 text-sm sm:text-base">
              Program Sosial
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/program" className="hover:text-[#8d4b00] transition-colors">
                  Semua Program
                </Link>
              </li>
              <li>
                <Link href="/program?kategori=edukasi" className="hover:text-[#8d4b00] transition-colors">
                  Beasiswa Lebah Cilik
                </Link>
              </li>
              <li>
                <Link href="/program?kategori=lingkungan" className="hover:text-[#8d4b00] transition-colors">
                  Konservasi Bunga Nektar
                </Link>
              </li>
              <li>
                <Link href="/program#usulkan" className="hover:text-[#8d4b00] transition-colors">
                  Usulkan Inisiatif Warga
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3 */}
          <div>
            <h4 className="font-headline font-bold text-[#1f1b17] mb-3 text-sm sm:text-base">
              Aksi Kebaikan
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/donasi" className="hover:text-[#8d4b00] transition-colors">
                  Donasi Online Seketika
                </Link>
              </li>
              <li>
                <Link href="/cerita-dampak" className="hover:text-[#8d4b00] transition-colors">
                  Kisah Senyuman Nyata
                </Link>
              </li>
              <li>
                <Link href="/program#relawan" className="hover:text-[#8d4b00] transition-colors">
                  Daftar Jadi Relawan
                </Link>
              </li>
              <li>
                <Link href="/donasi#qris" className="hover:text-[#8d4b00] transition-colors">
                  Panduan Donasi QRIS & VA
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Kontak */}
          <div>
            <h4 className="font-headline font-bold text-[#1f1b17] mb-3 text-sm sm:text-base">
              Kantor Sarang Lebah
            </h4>
            <ul className="space-y-2 text-[#554336]">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-base text-amber-600 mt-0.5">
                  location_on
                </span>
                <span>Jl. Ceria Harmoni No. 88, Tebet, Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-amber-600">
                  call
                </span>
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-amber-600">
                  mail
                </span>
                <span>halo@creativebee.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#554336]">
          <p>© 2026 Creative Bee Foundation. Spreading joyful, community-first vitality worldwide.</p>
          <div className="flex items-center gap-1.5 text-amber-700 font-medium">
            <span>Made with</span>
            <span className="material-symbols-outlined text-rose-500 text-sm fill">
              favorite
            </span>
            <span>for human smiles and blooming nature</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
