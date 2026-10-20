"use client";

import { useState } from "react";
import Link from "next/link";

interface StoryNote {
  id: string;
  category: string;
  categoryColor: string;
  title: string;
  quote: string;
  location: string;
  hearts: number;
  image: string;
}

const storiesList: StoryNote[] = [
  {
    id: "daffa-sekolah",
    category: "🎒 Pendidikan",
    categoryColor: "bg-cyan-100 text-[#0369a1] border-cyan-300",
    title: "Langkah Pertama Adik Daffa Menuju Sekolah Impian",
    quote: "Dulu hampir putus sekolah karena kendala biaya seragam dan buku. Sekarang Daffa menjadi juara kelas dengan senyum merekah setiap pagi.",
    location: "Kab. Timor Tengah, NTT",
    hearts: 342,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "ibu-siti-madu",
    category: "🍯 UMKM Mandiri",
    categoryColor: "bg-amber-100 text-[#8d4b00] border-amber-300",
    title: "Ibu Siti dan Madu Harapan Keluarga",
    quote: "Dari buruh tani harian menjadi produsen madu murni mandiri. Kini Ibu Siti mampu membiayai kuliah putrinya dengan senyum bangga.",
    location: "Lereng Gunung Slamet, Jateng",
    hearts: 589,
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "nenek-sumi-sehat",
    category: "🩺 Kesehatan Lansia",
    categoryColor: "bg-rose-100 text-[#be123c] border-rose-300",
    title: "Senyum Sehat Nenek Sumi di Posko Lansia",
    quote: "Pemeriksaan tensi rutin, suplemen hangat, dan senam ceria tiap pekan telah mengembalikan tawa ceria Nenek Sumi di usia 74 tahun.",
    location: "Desa Karanganyar, Solo",
    hearts: 412,
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "air-bersih-lembah",
    category: "💧 Fasilitas Desa",
    categoryColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    title: "Air Bersih Mengalir di Kampung Lembah",
    quote: "Tak ada lagi perjalanan 3 km memikul jeriken di terik mentari. Pipa air bersih kini langsung mengalir ke 210 rumah warga.",
    location: "Lembah Sumbing, Wonosobo",
    hearts: 720,
    image: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=600&auto=format&fit=crop",
  },
];

export default function CeritaDampakPage() {
  const [reactions, setReactions] = useState({
    love: 1820,
    smile: 2415,
    pray: 940,
    bee: 3112,
  });
  const [userCheer, setUserCheer] = useState("");
  const [messagesList, setMessagesList] = useState<string[]>([
    "Semangat terus adik-adik! Masa depan cerah menanti kalian ✨ - Donatur Surabaya",
    "Terharu melihat perjuangan Bu Siti. Semoga usahanya semakin berkah 🍯 - Rina, Jakarta",
    "Bangga bisa menjadi bagian kecil dari kebaikan ini ❤️ - Relawan Bandung",
  ]);

  const handleReact = (type: keyof typeof reactions) => {
    setReactions((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const handleSendCheer = (e: React.FormEvent) => {
    e.preventDefault();
    if (userCheer.trim()) {
      setMessagesList([userCheer.trim(), ...messagesList]);
      setUserCheer("");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ================= HERO HEADER CERIA ================= */}
      <section className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">
        <div className="absolute -top-12 left-1/4 w-72 h-72 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />

        {/* Badge Micro-Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-[#8d4b00] text-xs font-bold mb-4 shadow-sm border border-amber-300">
          <span className="material-symbols-outlined text-sm fill">volunteer_activism</span>
          <span>Kisah Nyata Penuh Cinta</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1f1b17] font-extrabold max-w-4xl mx-auto tracking-tight mb-4 leading-tight">
          Kisah Manis di Balik Setiap Senyuman
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-[#554336] max-w-2xl mx-auto leading-relaxed">
          Setiap donasi dan kepedulian yang kamu titipkan menyalakan lentera harapan baru. Simak jejak ceria bagaimana kebaikan sederhana kita telah mentransformasi hari-hari mereka secara nyata.
        </p>

        {/* Decorative tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          <span className="px-3.5 py-1 rounded-full bg-[#fcf2eb] text-[#8d4b00] text-xs font-semibold">
            #PendidikanAdikAsuh
          </span>
          <span className="px-3.5 py-1 rounded-full bg-[#fcf2eb] text-[#006a61] text-xs font-semibold">
            #PemberdayaanMandiri
          </span>
          <span className="px-3.5 py-1 rounded-full bg-[#fcf2eb] text-[#994100] text-xs font-semibold">
            #LansiaSejahtera
          </span>
          <span className="px-3.5 py-1 rounded-full bg-[#fcf2eb] text-teal-800 text-xs font-semibold">
            #MataAirCeria
          </span>
        </div>
      </section>

      {/* ================= ANGKA DAMPAK CERIA ================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-amber-200/60 flex flex-col items-center text-center hover:scale-[1.02] transition-transform">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-[#8d4b00] flex items-center justify-center mb-2 text-2xl">
              😊
            </div>
            <span className="font-headline text-2xl sm:text-3xl font-bold text-[#8d4b00]">
              50.000+
            </span>
            <span className="text-xs text-[#554336] mt-1 font-medium">Senyuman Mekar</span>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-sm border border-teal-200/60 flex flex-col items-center text-center hover:scale-[1.02] transition-transform">
            <div className="w-12 h-12 rounded-full bg-[#89f5e7]/40 text-[#006a61] flex items-center justify-center mb-2 text-2xl">
              🏡
            </div>
            <span className="font-headline text-2xl sm:text-3xl font-bold text-[#006a61]">
              120+
            </span>
            <span className="text-xs text-[#554336] mt-1 font-medium">Titik Desa Terjangkau</span>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-sm border border-cyan-200/60 flex flex-col items-center text-center hover:scale-[1.02] transition-transform">
            <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center mb-2 text-2xl">
              ✨
            </div>
            <span className="font-headline text-2xl sm:text-3xl font-bold text-cyan-800">
              98%
            </span>
            <span className="text-xs text-[#554336] mt-1 font-medium">Kebahagiaan Tersalurkan</span>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-sm border border-rose-200/60 flex flex-col items-center text-center hover:scale-[1.02] transition-transform">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-[#994100] flex items-center justify-center mb-2 text-2xl">
              🍯
            </div>
            <span className="font-headline text-2xl sm:text-3xl font-bold text-[#994100]">
              100%
            </span>
            <span className="text-xs text-[#554336] mt-1 font-medium">Transparan & Ceria</span>
          </div>
        </div>
      </section>

      {/* ================= CERITA UTAMA INSPIRATIF ================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-[#dbc2b0]/30 overflow-hidden relative">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Image Box */}
            <div className="lg:col-span-5 relative group">
              <div className="overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-square relative shadow-md bg-amber-50">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop"
                  alt="Ibu Halimah - Penerima Manfaat Kolektif Madu Ceria"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#8d4b00] text-xs font-bold shadow-sm">
                  <span className="material-symbols-outlined text-sm fill">star</span>
                  <span>Cerita Bulan Ini</span>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-2 bg-white border border-[#dbc2b0]/30 rounded-full py-1.5 px-4 shadow-md flex items-center gap-2">
                <span className="text-base">🐝</span>
                <span className="text-xs text-[#1f1b17] font-bold">1.4k Senyum Terkumpul</span>
              </div>
            </div>

            {/* Content Box */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#89f5e7]/50 text-[#005049] text-xs font-bold">
                  🌱 Kisah Inspiratif Desa Sukamaju
                </span>
                <span className="text-xs text-[#887364]">• 4 Menit Baca</span>
              </div>

              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#1f1b17] tracking-tight leading-snug">
                "Kini Dapur Kami Berasap Wangi, Anak-Anak Tidur Nyenyak Tanpa Rasa Cemas."
              </h2>

              <blockquote className="border-l-4 border-amber-500 pl-4 py-1 italic text-sm sm:text-base text-[#554336] bg-[#fcf2eb]/50 rounded-r-2xl">
                “Bantuan bibit lebah madu klanceng dan pelatihan dari para sahabat donatur Creative Bee Foundation membuat saya mandiri. Hasil panen pertama telah melunasi biaya sekolah si sulung.”
              </blockquote>

              <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                Melalui program <em>#BeeEmpowerment</em>, Ibu Halimah (43) bersama 34 ibu rumah tangga di desanya kini mengelola koperasi madu mandiri dengan omzet yang stabil dan jaminan kesehatan keluarga yang terpenuhi.
              </p>

              <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-[#f0e6e0]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-bold text-[#8d4b00] text-sm">
                    IH
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#1f1b17]">
                      Ibu Halimah & Kolektif Madu Ceria
                    </h4>
                    <p className="text-[11px] text-[#887364]">
                      Penerima Manfaat Program Modal Mandiri
                    </p>
                  </div>
                </div>

                <Link
                  href="/program"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#fcf2eb] hover:bg-[#8d4b00] text-[#8d4b00] hover:text-white text-xs font-bold transition-colors"
                >
                  <span>Dukung Program Serupa</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GRID KISAH PERUBAHAN ================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#89f5e7]/50 text-[#005049] text-xs font-bold mb-2">
              🌻 Galeri Kebaikan
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#1f1b17]">
              Catatan Perubahan Dari Pelosok Nusantara
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#554336] max-w-md">
            Empat potret tulus dari berbagai penjuru yang menggambarkan bahwa kepedulianmu adalah bibit kebahagiaan sejati.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {storiesList.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl p-5 shadow-sm border border-[#f0e6e0] flex flex-col justify-between hover:shadow-md transition-all card-hover-pop"
            >
              <div>
                <div className="overflow-hidden rounded-2xl aspect-[16/10] mb-4 relative bg-amber-50">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className={`absolute top-3 left-3 px-3 py-0.5 rounded-full text-[11px] font-bold shadow-sm ${story.categoryColor}`}
                  >
                    {story.category}
                  </span>
                </div>
                <h4 className="font-headline text-base font-bold text-[#1f1b17] mb-2 leading-snug">
                  {story.title}
                </h4>
                <p className="text-xs text-[#554336] leading-relaxed mb-4">
                  {story.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0e6e0] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#8d4b00]">{story.location}</span>
                <span className="inline-flex items-center gap-1 text-[#887364]">
                  <span className="material-symbols-outlined text-sm text-rose-500 fill">
                    favorite
                  </span>{" "}
                  {story.hearts} Hati
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= KOTAK PELUK VIRTUAL (INTERACTIVE REACTIONS) ================= */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="bg-[#fcf2eb] rounded-3xl p-6 sm:p-10 border border-[#dbc2b0]/40 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#8d4b00] text-xs font-bold mb-3 shadow-sm">
              💌 Kotak Peluk Virtual
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#1f1b17] mb-2">
              Kirim Pesan Semangat & Doa Hangat untuk Mereka
            </h3>
            <p className="text-xs sm:text-sm text-[#554336] mb-8">
              Klik reaksi emoji ceria di bawah untuk mengirimkan sinyal cinta instan ke papan posko komunitas Creative Bee Foundation!
            </p>

            {/* Reaction Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-8">
              <button
                type="button"
                onClick={() => handleReact("love")}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-rose-200 hover:scale-105 active:scale-95 transition-all group"
              >
                <span className="text-3xl mb-1 group-hover:scale-125 transition-transform">💖</span>
                <span className="font-headline text-lg font-bold text-[#1f1b17]">
                  {reactions.love.toLocaleString("id-ID")}
                </span>
                <span className="text-[11px] text-[#554336]">Penuh Cinta</span>
              </button>

              <button
                type="button"
                onClick={() => handleReact("smile")}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-amber-200 hover:scale-105 active:scale-95 transition-all group"
              >
                <span className="text-3xl mb-1 group-hover:scale-125 transition-transform">🌻</span>
                <span className="font-headline text-lg font-bold text-[#1f1b17]">
                  {reactions.smile.toLocaleString("id-ID")}
                </span>
                <span className="text-[11px] text-[#554336]">Senyum Bahagia</span>
              </button>

              <button
                type="button"
                onClick={() => handleReact("pray")}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-teal-200 hover:scale-105 active:scale-95 transition-all group"
              >
                <span className="text-3xl mb-1 group-hover:scale-125 transition-transform">🤲</span>
                <span className="font-headline text-lg font-bold text-[#1f1b17]">
                  {reactions.pray.toLocaleString("id-ID")}
                </span>
                <span className="text-[11px] text-[#554336]">Doa Tulus</span>
              </button>

              <button
                type="button"
                onClick={() => handleReact("bee")}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-amber-300 hover:scale-105 active:scale-95 transition-all group"
              >
                <span className="text-3xl mb-1 group-hover:scale-125 transition-transform">🐝</span>
                <span className="font-headline text-lg font-bold text-[#1f1b17]">
                  {reactions.bee.toLocaleString("id-ID")}
                </span>
                <span className="text-[11px] text-[#554336]">Semangat Bersama</span>
              </button>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendCheer} className="bg-white rounded-3xl p-3 sm:p-4 shadow-sm border border-[#dbc2b0]/30 flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={userCheer}
                onChange={(e) => setUserCheer(e.target.value)}
                placeholder="Tulis sepatah kata semangat untuk Adik Daffa atau Ibu Siti..."
                className="flex-1 px-4 py-2.5 rounded-full bg-[#fff8f5] text-xs sm:text-sm border border-[#dbc2b0]/40 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#8d4b00] hover:bg-[#b15f00] text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
              >
                Kirim Semangat
              </button>
            </form>

            {/* Live Message Feed */}
            <div className="mt-6 space-y-2 text-left">
              {messagesList.slice(0, 4).map((msg, i) => (
                <div
                  key={i}
                  className="bg-white/80 p-3 rounded-2xl border border-amber-200/50 text-xs text-[#554336] flex items-center gap-2"
                >
                  <span className="text-base">💌</span>
                  <span>{msg}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
