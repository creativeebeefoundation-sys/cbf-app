"use client";

import { useState } from "react";
import Link from "next/link";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categoryKey: string;
  location: string;
  image: string;
  description: string;
  collected: number;
  target: number;
  daysLeft: number;
  accentColor: "emerald" | "amber" | "cyan" | "rose" | "teal";
}

const allProjects: ProjectItem[] = [
  {
    id: "gizi-balita-pesisir",
    title: "Nutrisi Balita Pesisir",
    category: "🍎 Gizi & Nutrisi",
    categoryKey: "gizi",
    location: "Desa Lamalera, NTT",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop",
    description: "Distribusi paket pangan bergizi mikro, telur ayam kampung, dan susu segar untuk 200 balita bebas stunting di pesisir selatan.",
    collected: 36900000,
    target: 45000000,
    daysLeft: 12,
    accentColor: "emerald",
  },
  {
    id: "beasiswa-lebah-cilik",
    title: "Beasiswa Anak Pelosok Merapi",
    category: "📚 Beasiswa Pintar",
    categoryKey: "beasiswa",
    location: "Lereng Merbabu, Jawa Tengah",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
    description: "Bantuan perlengkapan sekolah lengkap, tas anti-air, sepatu baru, dan pendampingan bimbel ceria akhir pekan gratis.",
    collected: 52400000,
    target: 60000000,
    daysLeft: 18,
    accentColor: "cyan",
  },
  {
    id: "gerobak-madu-mandiri",
    title: "Modal Gerobak Madu & UMKM Ibu",
    category: "💼 Modal Mandiri",
    categoryKey: "mandiri",
    location: "Gunungkidul, DI Yogyakarta",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop",
    description: "Pemberian sarana panen madu higienis, pelatihan kemasan botol modern, dan pendampingan pemasaran digital bagi 25 keluarga dhuafa.",
    collected: 28500000,
    target: 35000000,
    daysLeft: 24,
    accentColor: "amber",
  },
  {
    id: "konservasi-sejuta-bunga",
    title: "Taman Sejuta Bunga Nektar Lebah",
    category: "🐝 Konservasi Lebah",
    categoryKey: "konservasi",
    location: "Hulu Sungai Ciliwung, Bogor",
    image: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=600&auto=format&fit=crop",
    description: "Menghijaukan lahan kritis dengan menanam 10.000 bibit tanaman bunga kaya nektar untuk memulihkan populasi lebah madu liar dan ketahanan pangan ekosistem.",
    collected: 41200000,
    target: 50000000,
    daysLeft: 30,
    accentColor: "teal",
  },
  {
    id: "dapur-tanggap-darurat",
    title: "Dapur Ceria Siaga Bencana",
    category: "🚑 Bantuan Tanggap",
    categoryKey: "tanggap",
    location: "Wilayah Rentan Bencana Nasional",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=600&auto=format&fit=crop",
    description: "Dana siaga untuk mengerahkan armada dapur keliling dengan makanan hangat siap santap dan tenda trauma healing dalam waktu 2x24 jam saat gempa/banjir.",
    collected: 78000000,
    target: 100000000,
    daysLeft: 45,
    accentColor: "rose",
  },
];

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  badgeBg: string;
  badgeColor: string;
}

const faqList: FaqItem[] = [
  {
    id: 1,
    question: "Siapa saja yang boleh mengusulkan proyek kebaikan?",
    answer:
      "Siapa pun! Mulai dari perorangan penggerak warga, ketua RT/RW, guru, hingga perkumpulan pemuda desa. Yang terpenting memiliki komitmen dan bersedia diverifikasi data penerima manfaatnya.",
    badgeBg: "bg-amber-100",
    badgeColor: "text-[#8d4b00]",
  },
  {
    id: 2,
    question: "Berapa lama proses verifikasi hingga kampanye tayang?",
    answer:
      "Proses verifikasi dokumen awal memakan waktu 2–3 hari kerja. Setelah valid, tim relawan lapangan setempat akan berkunjung dan proyek bisa segera ditayangkan di web dalam 5 hari kerja.",
    badgeBg: "bg-[#89f5e7]/50",
    badgeColor: "text-[#006a61]",
  },
  {
    id: 3,
    question: "Bagaimana penyaluran dana dilakukan?",
    answer:
      "Dana disalurkan secara bertahap berbasis milestone laporan kegiatan. Setiap rupiah wajib disertai bukti nota pembelanjaan dan dokumentasi foto/video serah terima.",
    badgeBg: "bg-rose-100",
    badgeColor: "text-[#994100]",
  },
];

export default function ProgramPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [proposalSubmitted, setProposalSubmitted] = useState<boolean>(false);
  const [proposalForm, setProposalForm] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    location: "",
    budget: "",
    description: "",
  });

  const filteredProjects =
    selectedFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.categoryKey === selectedFilter);

  const handleProposalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProposalSubmitted(true);
    setProposalForm({
      name: "",
      email: "",
      phone: "",
      title: "",
      location: "",
      budget: "",
      description: "",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ================= HERO HEADER PROGRAM ================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden">
        {/* Decorative Organic Backdrops */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[720px] h-[260px] bg-amber-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-20 right-10 w-48 h-48 bg-teal-200/30 rounded-full blur-2xl -z-10 pointer-events-none" />

        {/* Pill Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fcf2eb] border border-[#dbc2b0]/40 text-[#8d4b00] text-xs font-bold mb-4">
          <span className="material-symbols-outlined text-base text-amber-600 fill">
            volunteer_activism
          </span>
          <span>Aksi Nyata Berkelanjutan 2026</span>
        </div>

        {/* Headline */}
        <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-[#1f1b17] tracking-tight max-w-3xl mx-auto leading-tight">
          Proyek Manis Penuh Senyuman
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-[#554336] max-w-2xl mx-auto mt-3 leading-relaxed">
          Kumpulan program gotong royong hangat dari pulau ke pulau. Setiap tetes kebaikan yang kamu kirimkan bermuara langsung pada senyum anak-anak dan kemandirian keluarga pejuang.
        </p>
      </section>

      {/* ================= GRID KARTU PROYEK ================= */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Compact Menu Bar Filter - Aligned Top Left of Cards */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-1 p-1 bg-white border border-[#dbc2b0]/50 rounded-2xl shadow-sm overflow-x-auto max-w-full">
            {[
              { label: "Semua Proyek", key: "all" },
              { label: "🍎 Gizi & Nutrisi", key: "gizi" },
              { label: "📚 Beasiswa Pintar", key: "beasiswa" },
              { label: "💼 Modal Mandiri", key: "mandiri" },
              { label: "🐝 Konservasi Lebah", key: "konservasi" },
              { label: "🚑 Bantuan Tanggap", key: "tanggap" },
            ].map((tab) => {
              const isActive = selectedFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setSelectedFilter(tab.key)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${isActive
                      ? "bg-[#8d4b00] text-white shadow-sm font-bold"
                      : "text-[#554336] hover:text-[#8d4b00] hover:bg-amber-50/70"
                    }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="text-xs text-[#887364] font-medium hidden sm:block self-center">
            Menampilkan <span className="font-bold text-[#1f1b17]">{filteredProjects.length}</span> program
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const percent = Math.min(
              100,
              Math.round((project.collected / project.target) * 100)
            );
            return (
              <article
                key={project.id}
                className="bg-white rounded-3xl p-5 border border-[#f0e6e0] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group card-hover-pop"
              >
                <div>
                  {/* Image Frame */}
                  <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4 bg-amber-50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#8d4b00] text-xs px-3 py-1 rounded-full font-bold shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Location & Title */}
                  <div className="flex items-center gap-1 text-[#006a61] text-xs font-semibold mb-1">
                    <span className="material-symbols-outlined text-sm">
                      location_on
                    </span>
                    <span>{project.location}</span>
                  </div>

                  <h3 className="font-headline text-lg font-bold text-[#1f1b17] group-hover:text-[#8d4b00] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#554336] mt-2 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Donation Progress & Stats */}
                <div className="mt-5 pt-4 border-t border-[#f0e6e0]">
                  <div className="flex justify-between items-baseline mb-1">
                    <div>
                      <span className="text-xs text-[#887364]">Terkumpul: </span>
                      <span className="text-xs font-bold text-[#1f1b17]">
                        Rp {project.collected.toLocaleString("id-ID")}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#8d4b00]">
                      {percent}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2.5 bg-[#fcf2eb] rounded-full overflow-hidden p-0.5 border border-amber-200/50 mb-2">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-500 to-[#006a61] transition-all duration-500"
                      style={{ width: `${percent}%` }}
                    />
                  </div>

                  <div className="flex justify-between items-center text-[#887364] text-[11px] mb-4">
                    <span>Target: Rp {project.target.toLocaleString("id-ID")}</span>
                    <span>{project.daysLeft} hari lagi</span>
                  </div>

                  <Link
                    href={`/donasi?project=${project.id}`}
                    className="w-full py-2.5 rounded-full bg-[#fcf2eb] hover:bg-[#8d4b00] text-[#8d4b00] hover:text-white text-xs sm:text-sm font-bold transition-all text-center flex items-center justify-center gap-2 group-hover:bg-[#8d4b00] group-hover:text-white"
                  >
                    <span className="material-symbols-outlined text-sm">
                      favorite
                    </span>
                    <span>Donasi Proyek Ini</span>
                  </Link>
                </div>
              </article>
            );
          })}

          {/* Card Ide Kebaikan Baru */}
          <article className="bg-gradient-to-br from-amber-50/80 via-white to-teal-50/50 rounded-3xl p-6 border-2 border-dashed border-amber-300 flex flex-col justify-between items-center text-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-3xl mx-auto mb-4">
                💡
              </div>
              <span className="px-3 py-1 rounded-full bg-amber-200/60 text-[#8d4b00] text-xs font-bold">
                Ide Kebaikan Baru
              </span>
              <h3 className="font-headline text-lg font-bold text-[#1f1b17] mt-3">
                Punya Inisiatif di Sekitarmu?
              </h3>
              <p className="text-xs text-[#554336] mt-2 max-w-xs mx-auto leading-relaxed">
                Creative Bee Foundation siap memfasilitasi penggalangan dana terpercaya, verifikasi lapangan, dan pengerahan relawan sahabat lebah.
              </p>
            </div>
            <a
              href="#usulkan"
              className="mt-6 w-full py-2.5 rounded-full bg-[#8d4b00] text-white text-xs sm:text-sm font-bold shadow-sm hover:bg-[#b15f00] transition-colors"
            >
              Ajukan Inisiatif Lokal
            </a>
          </article>
        </div>
      </section>

      {/* ================= BANNER KEMITRAAN & KOLABORASI ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-[#fcf2eb] rounded-3xl p-6 sm:p-10 border border-amber-200 flex flex-col lg:flex-row items-center gap-8 relative overflow-hidden shadow-sm">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl pointer-events-none" />

          <div className="w-full lg:w-3/5 space-y-4 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#89f5e7]/50 text-[#005049] text-xs font-bold">
              <span className="material-symbols-outlined text-sm">handshake</span>
              <span>Program Kemitraan Komunitas & Sekolah</span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#1f1b17] tracking-tight">
              Kolaborasi Manis untuk Dampak Berganda 🍯🤝
            </h2>
            <p className="text-xs sm:text-sm text-[#554336] max-w-xl leading-relaxed">
              Kami mengundang sekolah, universitas, klub pemuda, dan kantor kreatif untuk bersama-sama mendesain aksi sosial tematik. Dari program penanaman bunga nektar hingga dapur gizi ceria, kami sediakan pendampingan teknis dan transparansi pelaporan.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#usulkan"
                className="px-6 py-2.5 rounded-full bg-[#8d4b00] hover:bg-[#b15f00] text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
              >
                Buka Kolaborasi Baru
              </a>
              <div className="flex items-center gap-1 text-[#006a61] text-xs font-bold">
                <span className="material-symbols-outlined text-base">verified</span>
                <span>120+ Mitra Komunitas Aktif</span>
              </div>
            </div>
          </div>

          {/* Testimonial Mini Bento */}
          <div className="w-full lg:w-2/5 grid grid-cols-2 gap-3 relative z-10">
            <div className="bg-white p-4 rounded-2xl shadow-sm flex flex-col justify-between">
              <span className="material-symbols-outlined text-2xl text-[#8d4b00]">
                diversity_1
              </span>
              <div className="mt-3">
                <div className="font-headline text-xl font-extrabold text-[#1f1b17]">
                  3.400+
                </div>
                <div className="text-[11px] text-[#887364]">Relawan Terjun</div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm flex flex-col justify-between">
              <span className="material-symbols-outlined text-2xl text-[#006a61]">
                volunteer_activism
              </span>
              <div className="mt-3">
                <div className="font-headline text-xl font-extrabold text-[#1f1b17]">
                  18 Kota
                </div>
                <div className="text-[11px] text-[#887364]">Jangkauan Wilayah</div>
              </div>
            </div>
            <div className="col-span-2 bg-white p-4 rounded-2xl shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#89f5e7]/50 flex items-center justify-center text-[#006a61] shrink-0">
                <span className="material-symbols-outlined text-xl">forum</span>
              </div>
              <div>
                <p className="text-xs font-bold text-[#1f1b17]">
                  "Prosesnya transparan & seru banget!"
                </p>
                <p className="text-[11px] text-[#887364]">
                  Komunitas Pemuda Bahari, Flores
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FORM USULKAN INISIATIF ================= */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16" id="usulkan">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#dbc2b0]/40 shadow-md">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#8d4b00] px-4 py-1.5 rounded-full bg-amber-100 uppercase tracking-wider inline-block mb-2">
              Formulir Inisiatif
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#1f1b17]">
              Usulkan Proyek Kebaikan di Lingkunganmu
            </h2>
            <p className="text-xs sm:text-sm text-[#554336] mt-2 max-w-xl mx-auto">
              Ceritakan inisiatif atau kebutuhan mendesak di daerahmu. Tim kurasi Sahabat Lebah akan segera menghubungi dan melakukan verifikasi lapangan.
            </p>
          </div>

          {proposalSubmitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-3xl text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-2xl">
                🐝
              </div>
              <h3 className="font-headline text-lg font-bold text-emerald-900">
                Usulan Proyek Berhasil Dikirimkan!
              </h3>
              <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto">
                Terima kasih telah menjadi lebah kebaikan! Tim kami akan meninjau proposal ini dalam 2x24 jam kerja dan menghubungi nomor WhatsApp Anda.
              </p>
              <button
                type="button"
                onClick={() => setProposalSubmitted(false)}
                className="mt-2 px-6 py-2 rounded-full bg-emerald-600 text-white text-xs font-bold"
              >
                Kirim Usulan Lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleProposalSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1f1b17] mb-1">
                    Nama Lengkap Inisiator
                  </label>
                  <input
                    type="text"
                    required
                    value={proposalForm.name}
                    onChange={(e) =>
                      setProposalForm({ ...proposalForm, name: e.target.value })
                    }
                    placeholder="Contoh: Sarah Anindita"
                    className="w-full px-4 py-2.5 rounded-2xl border border-[#dbc2b0]/60 bg-[#fff8f5] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1f1b17] mb-1">
                    No. WhatsApp Aktif
                  </label>
                  <input
                    type="tel"
                    required
                    value={proposalForm.phone}
                    onChange={(e) =>
                      setProposalForm({ ...proposalForm, phone: e.target.value })
                    }
                    placeholder="Contoh: 081234567890"
                    className="w-full px-4 py-2.5 rounded-2xl border border-[#dbc2b0]/60 bg-[#fff8f5] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1f1b17] mb-1">
                    Nama Inisiatif / Proyek
                  </label>
                  <input
                    type="text"
                    required
                    value={proposalForm.title}
                    onChange={(e) =>
                      setProposalForm({ ...proposalForm, title: e.target.value })
                    }
                    placeholder="Contoh: Renovasi Dapur Gizi Balita Dusun Ceria"
                    className="w-full px-4 py-2.5 rounded-2xl border border-[#dbc2b0]/60 bg-[#fff8f5] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1f1b17] mb-1">
                    Lokasi Pelaksanaan (Kota & Provinsi)
                  </label>
                  <input
                    type="text"
                    required
                    value={proposalForm.location}
                    onChange={(e) =>
                      setProposalForm({
                        ...proposalForm,
                        location: e.target.value,
                      })
                    }
                    placeholder="Contoh: Sukabumi, Jawa Barat"
                    className="w-full px-4 py-2.5 rounded-2xl border border-[#dbc2b0]/60 bg-[#fff8f5] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1f1b17] mb-1">
                  Estimasi Kebutuhan Dana (Rp)
                </label>
                <input
                  type="text"
                  required
                  value={proposalForm.budget}
                  onChange={(e) =>
                    setProposalForm({ ...proposalForm, budget: e.target.value })
                  }
                  placeholder="Contoh: Rp 25.000.000"
                  className="w-full px-4 py-2.5 rounded-2xl border border-[#dbc2b0]/60 bg-[#fff8f5] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1f1b17] mb-1">
                  Deskripsi Kebutuhan & Penerima Manfaat
                </label>
                <textarea
                  rows={4}
                  required
                  value={proposalForm.description}
                  onChange={(e) =>
                    setProposalForm({
                      ...proposalForm,
                      description: e.target.value,
                    })
                  }
                  placeholder="Jelaskan kondisi saat ini, siapa saja yang terbantu, dan rencana aksinya..."
                  className="w-full px-4 py-2.5 rounded-2xl border border-[#dbc2b0]/60 bg-[#fff8f5] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#8d4b00] hover:bg-[#b15f00] text-white text-sm font-bold shadow-md transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                Kirim Proposal Inisiatif Kebaikan
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-[#8d4b00] px-4 py-1.5 rounded-full bg-amber-100">
            Tanya Jawab Singkat
          </span>
          <h2 className="font-headline text-2xl font-bold text-[#1f1b17] mt-2">
            Cara Mudah Mengusulkan Proyek Kebaikan
          </h2>
        </div>

        <div className="w-full space-y-3">
          {faqList.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className={`w-full bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen
                    ? "border-amber-400 ring-2 ring-amber-400/20 shadow-md"
                    : "border-[#dbc2b0]/30 hover:border-amber-300 hover:shadow-sm"
                  }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 text-left group transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-full ${faq.badgeBg} ${faq.badgeColor} font-bold flex items-center justify-center shrink-0 text-xs shadow-sm`}
                    >
                      {faq.id}
                    </div>
                    <h4 className="font-headline text-sm sm:text-base font-bold text-[#1f1b17] group-hover:text-amber-700 transition-colors">
                      {faq.question}
                    </h4>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen
                        ? "bg-amber-100 text-[#8d4b00] rotate-180"
                        : "bg-stone-100 text-stone-500 group-hover:bg-amber-50 group-hover:text-amber-600"
                      }`}
                  >
                    <span className="material-symbols-outlined text-xl">
                      expand_more
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="w-full px-4 sm:px-5 pb-5 pt-0 border-t border-amber-100/70">
                    <p className="text-xs sm:text-sm text-[#554336] leading-relaxed pt-3 pl-11 sm:pl-12">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
