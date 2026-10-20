"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface PrayerItem {
  id: string;
  name: string;
  amount: number;
  mission: string;
  time: string;
  message: string;
  avatarBg: string;
}

const initialPrayers: PrayerItem[] = [
  {
    id: "p1",
    name: "Hamba Allah",
    amount: 100000,
    mission: "Nutrisi Balita",
    time: "3 menit lalu",
    message: "Semoga adik-adik selalu sehat, ceria, dan lahap makannya. Amin!",
    avatarBg: "bg-amber-100 text-[#8d4b00]",
  },
  {
    id: "p2",
    name: "Dimas & Keluarga",
    amount: 50000,
    mission: "Beasiswa Pintar",
    time: "12 menit lalu",
    message: "Untuk adik-adik penerima beasiswa, kejar cita-cita setinggi langit ya ✨",
    avatarBg: "bg-cyan-100 text-[#0369a1]",
  },
  {
    id: "p3",
    name: "Siti Rahmawati",
    amount: 250000,
    mission: "Modal Mandiri",
    time: "28 menit lalu",
    message: "Semoga berkah untuk modal usaha ibu-ibu tangguh pejuang keluarga 🍯",
    avatarBg: "bg-rose-100 text-[#be123c]",
  },
  {
    id: "p4",
    name: "Sahabat Lebah Surabaya",
    amount: 500000,
    mission: "Bantuan Darurat",
    time: "1 jam lalu",
    message: "Titipan doa untuk saudara kita yang sedang diuji bencana. Lekas pulih Indonesia ❤️",
    avatarBg: "bg-[#89f5e7]/50 text-[#006a61]",
  },
];

function DonasiContent() {
  const searchParams = useSearchParams();

  const [selectedMission, setSelectedMission] = useState<string>("nutrisi");
  const [selectedAmount, setSelectedAmount] = useState<number>(50000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [selectedPayment, setSelectedPayment] = useState<string>("qris");
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [donorName, setDonorName] = useState<string>("");
  const [donorContact, setDonorContact] = useState<string>("");
  const [donorWish, setDonorWish] = useState<string>("");

  const [prayers, setPrayers] = useState<PrayerItem[]>(initialPrayers);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [receiptNumber, setReceiptNumber] = useState<string>("#BEE-88291");

  useEffect(() => {
    const urlAmt = searchParams.get("amount");
    if (urlAmt && !isNaN(Number(urlAmt))) {
      setSelectedAmount(Number(urlAmt));
    }
    const urlName = searchParams.get("name");
    if (urlName) {
      setDonorName(urlName);
    }
    const urlPhone = searchParams.get("phone");
    if (urlPhone) {
      setDonorContact(urlPhone);
    }
    const urlProject = searchParams.get("project");
    if (urlProject) {
      if (urlProject.includes("gizi")) setSelectedMission("nutrisi");
      else if (urlProject.includes("beasiswa")) setSelectedMission("beasiswa");
      else if (urlProject.includes("mandiri")) setSelectedMission("modal");
      else if (urlProject.includes("darurat")) setSelectedMission("darurat");
    }
  }, [searchParams]);

  const getImpactDescription = (amount: number) => {
    if (amount <= 20000) return "1 Botol Madu Suplemen & Vitamin Sehat untuk Balita";
    if (amount <= 50000) return "1 Paket Bekal Sehat & Senyuman Balita Pesisir!";
    if (amount <= 100000) return "Paket Buku, Seragam, & Alat Tulis Adik Asuh 1 Bulan";
    if (amount <= 250000) return "Bantuan Sembako Lengkap 1 Keluarga Dhuafa + Bibit Tanaman";
    return `Bantuan Modal & Nutrisi Berkelanjutan Bernilai Rp ${amount.toLocaleString("id-ID")}`;
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    const val = Number(e.target.value);
    if (!isNaN(val) && val > 0) {
      setSelectedAmount(val);
    }
  };

  const handleSubmitDonation = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = customAmount ? Number(customAmount) : selectedAmount;
    const finalName = isAnonymous
      ? "Hamba Allah"
      : donorName.trim() || "Sahabat Kebaikan";

    const newReceipt = `#BEE-${Math.floor(10000 + Math.random() * 90000)}`;
    setReceiptNumber(newReceipt);

    if (donorWish.trim()) {
      const newPrayer: PrayerItem = {
        id: `p-${Date.now()}`,
        name: finalName,
        amount: finalAmount,
        mission:
          selectedMission === "nutrisi"
            ? "Nutrisi Balita"
            : selectedMission === "beasiswa"
            ? "Beasiswa Pintar"
            : selectedMission === "modal"
            ? "Modal Mandiri"
            : "Bantuan Darurat",
        time: "Baru saja",
        message: donorWish.trim(),
        avatarBg: "bg-amber-100 text-[#8d4b00]",
      };
      setPrayers([newPrayer, ...prayers]);
    }

    setShowSuccessModal(true);
  };

  return (
    <div className="w-full overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-8 pb-12 md:pt-14 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-[#8d4b00] text-xs font-bold mb-4 shadow-sm">
            <span className="material-symbols-outlined text-base fill">eco</span>
            <span>Program Berbagi Senyum 100% Transparan & Terverifikasi</span>
            <span>✨</span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1f1b17] tracking-tight mb-4">
            Tebarkan Manisnya{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-[#8d4b00] to-[#006a61]">
              Kebaikan Hari Ini
            </span>{" "}
            🐝💛
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#554336] max-w-2xl leading-relaxed">
            Penyaluran donasi kilat, ceria, dan penuh kegembiraan. Bersama Creative Bee Foundation, setiap butir madu kebaikanmu langsung sampai ke tangan mereka yang membutuhkan.
          </p>

          {/* Live Ticker Pill */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs bg-white border border-[#dbc2b0]/40 px-5 py-2.5 rounded-full shadow-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
            <span className="text-[#006a61] font-bold">1.482 Donatur Ceria</span> bergabung minggu ini
            <span className="text-stone-300">•</span>
            <span className="text-[#554336]">Rp 482.500.000 tersalurkan langsung</span>
          </div>
        </div>

        {/* ================= 3-STEP DONATION BOX ================= */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-amber-200/60 relative">
          {/* Floating Mascot Badge */}
          <div className="absolute -top-4 right-6 sm:right-12 bg-gradient-to-br from-amber-400 to-[#8d4b00] text-white px-4 py-1.5 rounded-full shadow-md text-xs font-bold flex items-center gap-1.5 transform rotate-1">
            <span>🐝</span>
            <span>Mudah & Cepat &lt; 1 Menit</span>
          </div>

          <form onSubmit={handleSubmitDonation}>
            {/* STEP 1: PILIH MISI */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-100 text-[#8d4b00] font-bold text-xs">
                  1
                </span>
                <h2 className="font-headline text-lg sm:text-xl text-[#1f1b17] font-bold">
                  Pilih Misi Favoritmu
                </h2>
                <span className="text-xs text-[#887364] hidden sm:inline">
                  (Tujuan penyaluran)
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: "nutrisi", icon: "🍎", title: "Nutrisi Balita", sub: "Cegah stunting" },
                  { id: "beasiswa", icon: "📚", title: "Beasiswa Pintar", sub: "SPP & alat tulis" },
                  { id: "modal", icon: "💼", title: "Modal Mandiri", sub: "UMKM dhuafa" },
                  { id: "darurat", icon: "🚑", title: "Bantuan Darurat", sub: "Tanggap bencana" },
                ].map((m) => {
                  const isChecked = selectedMission === m.id;
                  return (
                    <button
                      type="button"
                      key={m.id}
                      onClick={() => setSelectedMission(m.id)}
                      className={`p-3.5 rounded-2xl border-2 text-center flex flex-col items-center justify-center transition-all ${
                        isChecked
                          ? "border-[#8d4b00] bg-amber-50/70 shadow-sm"
                          : "border-[#f0e6e0] bg-[#fff8f5] hover:border-amber-200"
                      }`}
                    >
                      <span className="text-2xl mb-1">{m.icon}</span>
                      <span className="text-xs font-bold text-[#1f1b17]">{m.title}</span>
                      <span className="text-[10px] text-[#887364] mt-0.5">{m.sub}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: NOMINAL DONASI & IMPACT CARD */}
            <div className="mb-8 bg-[#fcf2eb]/60 rounded-3xl p-5 sm:p-6 border border-amber-200/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#89f5e7]/60 text-[#006a61] font-bold text-xs">
                    2
                  </span>
                  <h2 className="font-headline text-lg sm:text-xl text-[#1f1b17] font-bold">
                    Pilih Nominal Donasi
                  </h2>
                </div>
                <span className="text-xs font-semibold text-[#006a61] flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">redeem</span> Kelipatan Kebaikan
                </span>
              </div>

              {/* Preset Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                {[
                  { amt: 20000, label: "Rp 20.000" },
                  { amt: 50000, label: "Rp 50.000 ⭐" },
                  { amt: 100000, label: "Rp 100.000" },
                  { amt: 250000, label: "Rp 250.000" },
                ].map((item) => {
                  const isSelected = selectedAmount === item.amt && !customAmount;
                  return (
                    <button
                      key={item.amt}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(item.amt);
                        setCustomAmount("");
                      }}
                      className={`py-3 px-4 rounded-full text-xs sm:text-sm font-bold border-2 transition-all ${
                        isSelected
                          ? "border-[#8d4b00] bg-amber-100 text-[#8d4b00] shadow-sm scale-105"
                          : "border-[#dbc2b0]/50 bg-white text-[#1f1b17] hover:border-[#8d4b00]"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              {/* Custom Input */}
              <div className="relative mb-4">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 font-bold text-xs sm:text-sm text-[#887364]">
                  Rp
                </span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  placeholder="Atau ketik nominal kebaikan lainnya (contoh: 75000)..."
                  className="w-full pl-12 pr-4 py-3 bg-white border-2 border-[#dbc2b0]/40 rounded-full text-xs sm:text-sm text-[#1f1b17] focus:outline-none focus:border-[#8d4b00]"
                />
              </div>

              {/* Lively Impact Preview Card */}
              <div className="bg-gradient-to-r from-amber-100 via-amber-50 to-[#89f5e7]/30 border border-amber-300/50 rounded-2xl p-4 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-2xl">
                  🍯
                </div>
                <div className="flex-1">
                  <div className="text-[11px] uppercase tracking-wider text-[#8d4b00] font-bold">
                    Dampak Langsung Donasimu
                  </div>
                  <div className="font-headline text-xs sm:text-sm font-bold text-[#1f1b17]">
                    Donasi Rp {selectedAmount.toLocaleString("id-ID")} = {getImpactDescription(selectedAmount)}
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 3: METODE PEMBAYARAN KILAT & DATA SINGKAT */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-rose-100 text-[#994100] font-bold text-xs">
                  3
                </span>
                <h2 className="font-headline text-lg sm:text-xl text-[#1f1b17] font-bold">
                  Bayar Mudah & Kilat
                </h2>
                <span className="text-[11px] text-emerald-700 font-bold bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  Bebas Biaya Admin
                </span>
              </div>

              {/* Payment Methods */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-5">
                {[
                  { id: "qris", name: "⚡ QRIS", desc: "Instant Scan All Bank" },
                  { id: "gopay", name: "GoPay", desc: "1-Klik Bayar" },
                  { id: "ovo", name: "OVO", desc: "Push Notifikasi" },
                  { id: "shopeepay", name: "ShopeePay", desc: "Saldo & Koin" },
                  { id: "va", name: "Virtual Account", desc: "BCA / Mandiri / BRI" },
                ].map((pm) => {
                  const isChecked = selectedPayment === pm.id;
                  return (
                    <button
                      type="button"
                      key={pm.id}
                      onClick={() => setSelectedPayment(pm.id)}
                      className={`p-3 rounded-2xl border-2 text-center flex flex-col items-center justify-center h-16 transition-all ${
                        isChecked
                          ? "border-[#8d4b00] bg-amber-50 shadow-sm"
                          : "border-[#f0e6e0] bg-white hover:border-amber-200"
                      }`}
                    >
                      <span className="font-bold text-xs text-[#1f1b17]">{pm.name}</span>
                      <span className="text-[10px] text-[#887364]">{pm.desc}</span>
                    </button>
                  );
                })}
              </div>

              {/* Donor Data */}
              <div className="bg-[#fff8f5] p-5 rounded-2xl border border-[#dbc2b0]/40 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#1f1b17]">
                    Data Donatur (Super Singkat):
                  </span>
                  <label className="flex items-center gap-1.5 cursor-pointer text-xs text-[#554336]">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="rounded text-[#8d4b00] w-3.5 h-3.5"
                    />
                    <span>Sembunyikan nama (Hamba Allah)</span>
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required={!isAnonymous}
                    disabled={isAnonymous}
                    value={isAnonymous ? "Hamba Allah" : donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="Nama Lengkap / Panggilan Ceria"
                    className="w-full px-4 py-2.5 bg-white border border-[#dbc2b0]/50 rounded-full text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:bg-stone-100"
                  />
                  <input
                    type="tel"
                    required
                    value={donorContact}
                    onChange={(e) => setDonorContact(e.target.value)}
                    placeholder="Nomor WhatsApp (bukti donasi & laporan)"
                    className="w-full px-4 py-2.5 bg-white border border-[#dbc2b0]/50 rounded-full text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <input
                  type="text"
                  value={donorWish}
                  onChange={(e) => setDonorWish(e.target.value)}
                  placeholder="Tuliskan sebaris doa / harapan manismu (opsional)..."
                  className="w-full px-4 py-2.5 bg-white border border-[#dbc2b0]/50 rounded-full text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="text-center pt-2">
              <button
                type="submit"
                className="w-full sm:w-3/4 mx-auto py-4 px-8 rounded-full bg-gradient-to-r from-amber-500 via-[#8d4b00] to-amber-600 text-white font-headline text-base sm:text-lg font-bold shadow-lg amber-btn-shadow hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Kirim Kebaikan Sekarang (Rp {selectedAmount.toLocaleString("id-ID")})</span>
                <span className="text-xl group-hover:translate-x-1 transition-transform">💛</span>
              </button>

              <p className="text-xs text-[#887364] mt-3 flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#006a61]">
                  verified_user
                </span>
                <span>100% Aman & Terenkripsi • Laporan Penyaluran dikirim via WhatsApp</span>
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* ================= SUCCESS MODAL ================= */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-md w-full rounded-3xl p-6 sm:p-8 text-center shadow-2xl border-2 border-amber-300 animate-fadeIn">
            <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4 text-4xl">
              🐝🎉
            </div>
            <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#1f1b17] mb-2">
              Terima Kasih, Insan Kebaikan!
            </h3>
            <p className="text-xs sm:text-sm text-[#554336] mb-6">
              Donasi Anda sebesar <strong>Rp {selectedAmount.toLocaleString("id-ID")}</strong> telah terverifikasi dengan manis. Berkah melimpah untuk Anda dan keluarga tercinta!
            </p>

            <div className="bg-[#fcf2eb] p-4 rounded-2xl mb-6 text-xs text-left space-y-1.5">
              <div className="flex justify-between">
                <span className="text-[#887364]">Kode Referensi:</span>
                <span className="font-bold text-[#8d4b00]">{receiptNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#887364]">Metode:</span>
                <span className="font-semibold uppercase">{selectedPayment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#887364]">Status:</span>
                <span className="font-bold text-emerald-600 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  Berhasil Diterima
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-3 rounded-full bg-[#8d4b00] text-white text-xs sm:text-sm font-bold shadow-sm hover:bg-[#b15f00] transition-colors"
            >
              Tutup & Lihat Dinding Doa ✨
            </button>
          </div>
        </div>
      )}

      {/* ================= DINDING DOA TERKINI ================= */}
      <section className="py-12 md:py-16 bg-[#fcf2eb]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#8d4b00] px-4 py-1.5 rounded-full bg-amber-100">
              Dinding Doa Kebaikan
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#1f1b17] mt-2">
              Untaian Harapan Sahabat Lebah
            </h2>
            <p className="text-xs sm:text-sm text-[#554336] mt-1">
              Doa tulus yang menyertai setiap tetes donasi madu kebaikan kita bersama.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {prayers.map((prayer) => (
              <div
                key={prayer.id}
                className="bg-white rounded-3xl p-5 shadow-sm border border-[#f0e6e0] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs ${prayer.avatarBg}`}
                    >
                      🐝
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1f1b17]">
                        {prayer.name}
                      </h4>
                      <p className="text-[10px] text-[#887364]">{prayer.time}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#554336] italic leading-relaxed">
                    "{prayer.message}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#f0e6e0] flex items-center justify-between text-[11px]">
                  <span className="font-bold text-[#8d4b00]">
                    Rp {prayer.amount.toLocaleString("id-ID")}
                  </span>
                  <span className="text-[#006a61] font-semibold">{prayer.mission}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function DonasiPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center py-20">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto text-2xl animate-spin">
              🐝
            </div>
            <p className="text-sm font-semibold text-[#8d4b00]">
              Memuat Halaman Donasi Ceria...
            </p>
          </div>
        </div>
      }
    >
      <DonasiContent />
    </Suspense>
  );
}
