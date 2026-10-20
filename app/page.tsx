import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      {/* ==================== HERO SECTION ==================== */}
      {/* ==================== HERO SECTION (FULL-WIDTH HERO IMAGE DENGAN OVERLAY SESUAI REFERENSI) ==================== */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden bg-stone-900" id="mission">
        {/* Background Full-Bleed Image: Wajah Anak Tersenyum Penuh Harapan */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=85&w=1920&auto=format&fit=crop"
            alt="Senyuman ceria anak penerima manfaat Creative Bee Foundation"
            className="w-full h-full object-cover object-[70%_center] sm:object-[60%_center] md:object-center grayscale-[60%] brightness-[0.70] contrast-[1.15] scale-105 transition-transform duration-1000"
          />
          {/* Multi-layered Cinema Gradient Overlays for High-Contrast Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/30 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/50" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <div className="max-w-2xl lg:max-w-3xl space-y-6 text-left">
            {/* Tagline / Subtitle */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wide">
              <span>🐝</span>
              <span>Beri Mereka Kesempatan Terbaik #LebahPeduli</span>
            </div>

            {/* Main Headline (Sesuai Referensi Gambar) */}
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-extrabold tracking-tight leading-[1.12] drop-shadow-md">
              Beri Anak-Anak Hadiah Terindah: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-teal-300">
                Pendidikan & Senyuman
              </span>{" "}
              Masa Depan.
            </h1>

            {/* Subtitle / Description */}
            <p className="text-stone-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-normal drop-shadow">
              Langkah kecil yang kamu titipkan hari ini membuka gerbang sekolah, menyediakan nutrisi sehat, dan menghadirkan tawa tulus bagi ribuan adik asuh di pelosok nusantara.
            </p>

            {/* Action Buttons & Donor Avatar Stack (Sesuai Referensi Gambar) */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-3">
              {/* Primary Amber Button */}
              <Link
                href="/donasi"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-headline text-sm sm:text-base font-bold amber-btn-shadow transition-all duration-200 hover:scale-105 active:scale-95 shadow-xl"
              >
                <span className="material-symbols-outlined text-lg">volunteer_activism</span>
                <span>Donasi Sekarang</span>
              </Link>

              {/* Secondary Volunteer Button */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-headline text-sm sm:text-base font-semibold transition-all hover:scale-105"
              >
                <span>Lihat Misi Berjalan</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>

              {/* Avatar Stack Group (Persis di gambar referensi sebelah tombol) */}
              <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 shadow-md">
                <div className="flex -space-x-2.5 overflow-hidden">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-amber-400 object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop"
                    alt="Donatur Sahabat Lebah"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-teal-400 object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
                    alt="Donatur Sahabat Lebah"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-amber-300 object-cover"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=120&auto=format&fit=crop"
                    alt="Donatur Sahabat Lebah"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-rose-400 object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop"
                    alt="Donatur Sahabat Lebah"
                  />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-white leading-tight">
                    1.420+ Donatur
                  </span>
                  <span className="block text-[10px] text-amber-300 font-medium">
                    Telah bergabung minggu ini
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right side floating indicator (Seperti dot oranye pada gambar referensi) */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-20">
          <button
            aria-label="Next banner"
            className="w-10 h-10 rounded-full bg-amber-500 hover:bg-amber-400 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
          >
            <span className="material-symbols-outlined text-lg">chevron_right</span>
          </button>
          <div className="flex flex-col gap-1.5 items-center">
            <span className="w-2.5 h-6 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
          </div>
        </div>
      </section>

      {/* ==================== STATISTIK UTAMA (DI ANTARA HERO & 4 PILAR - SESUAI REFERENSI) ==================== */}
      <section className="bg-white border-b border-[#f0e6e0] py-10 md:py-14 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Stat 1 */}
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1f1b17] tracking-tight">
                50k<span className="text-amber-500">+</span>
              </span>
              <div className="text-left border-l-2 border-amber-400/60 pl-3">
                <span className="block text-xs sm:text-sm font-bold text-[#1f1b17] leading-tight">
                  Senyuman Terukir
                </span>
                <span className="block text-[11px] text-[#887364] mt-0.5">
                  Anak & Dhuafa Terbantu
                </span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1f1b17] tracking-tight">
                120<span className="text-[#006a61]">+</span>
              </span>
              <div className="text-left border-l-2 border-teal-400/60 pl-3">
                <span className="block text-xs sm:text-sm font-bold text-[#1f1b17] leading-tight">
                  Misi Terlaksana
                </span>
                <span className="block text-[11px] text-[#887364] mt-0.5">
                  Di Seluruh Pelosok
                </span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1f1b17] tracking-tight">
                1.4k<span className="text-amber-600">+</span>
              </span>
              <div className="text-left border-l-2 border-amber-400/60 pl-3">
                <span className="block text-xs sm:text-sm font-bold text-[#1f1b17] leading-tight">
                  Relawan Bahagia
                </span>
                <span className="block text-[11px] text-[#887364] mt-0.5">
                  Turun Aksi Langsung
                </span>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1f1b17] tracking-tight">
                100<span className="text-rose-500">%</span>
              </span>
              <div className="text-left border-l-2 border-rose-400/60 pl-3">
                <span className="block text-xs sm:text-sm font-bold text-[#1f1b17] leading-tight">
                  Transparan Ceria
                </span>
                <span className="block text-[11px] text-[#887364] mt-0.5">
                  Audit Terbuka & WTP
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4 PILAR UTAMA KEBAIKAN ==================== */}
      <section className="py-16 md:py-24 bg-[#fcf2eb]/60" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="px-4 py-1.5 rounded-full bg-amber-100 text-[#8d4b00] text-xs font-bold uppercase tracking-wider inline-block mb-3 shadow-sm border border-amber-300/40">
              🐝 Program Prioritas
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#1f1b17] font-extrabold tracking-tight">
              4 Pilar Kebaikan Creative Bee
            </h2>
            <p className="text-sm sm:text-base text-[#554336] mt-3 leading-relaxed">
              Penyaluran tepat sasaran, terukur, dan dipenuhi senyum kegembiraan di setiap tetes bantuan gotong royong.
            </p>
          </div>

          {/* 4 Cards with Full Background Images & Refined Typography (Sesuai Referensi Gambar) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pilar 1: Kesehatan & Gizi */}
            <Link
              href="/program"
              className="group relative min-h-[440px] sm:min-h-[480px] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-end p-6 border border-white/15 hover:-translate-y-1.5"
            >
              {/* Full Background Image */}
              <img
                src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800&auto=format&fit=crop"
                alt="Kesehatan dan Gizi Ceria"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Cinematic Dark Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />

              {/* Card Content Overlay */}
              <div className="relative z-10 space-y-3 text-left">
                {/* White Circular Icon Badge (Persis seperti di gambar referensi) */}
                <div className="w-13 h-13 w-12 h-12 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <span className="material-symbols-outlined text-2xl">restaurant</span>
                </div>

                {/* Title */}
                <h3 className="font-headline text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight drop-shadow-sm">
                  Kesehatan & Gizi Ceria
                </h3>

                {/* Description */}
                <p className="text-stone-200 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal drop-shadow">
                  Paket makanan padat nutrisi harian, telur ayam, dan susu madu untuk 2.500 balita rentan pangan.
                </p>

                {/* Bottom Row */}
                <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs text-white">
                  <span className="font-semibold text-emerald-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    88% Tersalurkan
                  </span>
                  <span className="inline-flex items-center gap-1 text-white/90 group-hover:text-amber-300 font-bold group-hover:translate-x-1 transition-all">
                    <span>Detail</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>

            {/* Pilar 2: Pendidikan & Beasiswa */}
            <Link
              href="/program"
              className="group relative min-h-[440px] sm:min-h-[480px] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-end p-6 border border-white/15 hover:-translate-y-1.5"
            >
              {/* Full Background Image */}
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
                alt="Pendidikan dan Beasiswa"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Cinematic Dark Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />

              {/* Card Content Overlay */}
              <div className="relative z-10 space-y-3 text-left">
                {/* White Circular Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-white text-cyan-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <span className="material-symbols-outlined text-2xl">school</span>
                </div>

                {/* Title */}
                <h3 className="font-headline text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight drop-shadow-sm">
                  Pendidikan & Beasiswa
                </h3>

                {/* Description */}
                <p className="text-stone-200 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal drop-shadow">
                  Bimbingan belajar ceria, perlengkapan sekolah lengkap, tas anti-air, dan beasiswa SPP adik yatim.
                </p>

                {/* Bottom Row */}
                <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs text-white">
                  <span className="font-semibold text-cyan-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    450 Anak Asuh
                  </span>
                  <span className="inline-flex items-center gap-1 text-white/90 group-hover:text-amber-300 font-bold group-hover:translate-x-1 transition-all">
                    <span>Detail</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>

            {/* Pilar 3: Pemberdayaan Dhuafa */}
            <Link
              href="/program"
              className="group relative min-h-[440px] sm:min-h-[480px] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-end p-6 border border-white/15 hover:-translate-y-1.5"
            >
              {/* Full Background Image */}
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop"
                alt="Pemberdayaan Dhuafa"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Cinematic Dark Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />

              {/* Card Content Overlay */}
              <div className="relative z-10 space-y-3 text-left">
                {/* White Circular Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-white text-amber-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <span className="material-symbols-outlined text-2xl">storefront</span>
                </div>

                {/* Title */}
                <h3 className="font-headline text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight drop-shadow-sm">
                  Pemberdayaan Dhuafa
                </h3>

                {/* Description */}
                <p className="text-stone-200 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal drop-shadow">
                  Modal budidaya lebah madu, pelatihan UMKM ibu rumah tangga, kemasan modern, dan pemasaran digital.
                </p>

                {/* Bottom Row */}
                <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs text-white">
                  <span className="font-semibold text-amber-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    120 Keluarga Mandiri
                  </span>
                  <span className="inline-flex items-center gap-1 text-white/90 group-hover:text-amber-300 font-bold group-hover:translate-x-1 transition-all">
                    <span>Detail</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>

            {/* Pilar 4: Tanggap Kemanusiaan */}
            <Link
              href="/program"
              className="group relative min-h-[440px] sm:min-h-[480px] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-end p-6 border border-white/15 hover:-translate-y-1.5"
            >
              {/* Full Background Image */}
              <img
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop"
                alt="Tanggap Kemanusiaan"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Cinematic Dark Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />

              {/* Card Content Overlay */}
              <div className="relative z-10 space-y-3 text-left">
                {/* White Circular Icon Badge */}
                <div className="w-12 h-12 rounded-full bg-white text-rose-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                  <span className="material-symbols-outlined text-2xl">healing</span>
                </div>

                {/* Title */}
                <h3 className="font-headline text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight drop-shadow-sm">
                  Tanggap Kemanusiaan
                </h3>

                {/* Description */}
                <p className="text-stone-200 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal drop-shadow">
                  Respon kilat armada dapur umum, trauma healing anak korban bencana, dan tenda darurat siap 24/7.
                </p>

                {/* Bottom Row */}
                <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs text-white">
                  <span className="font-semibold text-rose-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
                    Siaga 24 Jam
                  </span>
                  <span className="inline-flex items-center gap-1 text-white/90 group-hover:text-amber-300 font-bold group-hover:translate-x-1 transition-all">
                    <span>Detail</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>



      {/* ==================== 3 LANGKAH CEPAT BERBAGI ==================== */}
      <section className="py-16 bg-[#fcf2eb]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="px-4 py-1.5 rounded-full bg-teal-100 text-[#006a61] text-xs font-bold uppercase tracking-wider inline-block mb-3">
              Sederhana & Praktis
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-[#1f1b17] font-bold">
              3 Langkah Ceria Berbagi Kebaikan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-3xl p-6 text-center border border-[#f0e6e0] shadow-sm flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-amber-500 text-white font-headline text-2xl font-extrabold flex items-center justify-center mb-4 shadow-md">
                1
              </div>
              <h3 className="font-headline text-lg font-bold text-[#1f1b17] mb-2">
                Pilih Misi Favorit
              </h3>
              <p className="text-xs sm:text-sm text-[#554336] max-w-xs leading-relaxed">
                Tentukan program yang paling menyentuh hatimu: nutrisi balita, beasiswa adik yatim, atau modal usaha dhuafa.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl p-6 text-center border border-[#f0e6e0] shadow-sm flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#006a61] text-white font-headline text-2xl font-extrabold flex items-center justify-center mb-4 shadow-md">
                2
              </div>
              <h3 className="font-headline text-lg font-bold text-[#1f1b17] mb-2">
                Donasi Sukarela
              </h3>
              <p className="text-xs sm:text-sm text-[#554336] max-w-xs leading-relaxed">
                Mulai dari Rp 10.000 via QRIS (GoPay, OVO, ShopeePay), Virtual Account, atau transfer bank instan tanpa potongan.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-3xl p-6 text-center border border-[#f0e6e0] shadow-sm flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-rose-500 text-white font-headline text-2xl font-extrabold flex items-center justify-center mb-4 shadow-md">
                3
              </div>
              <h3 className="font-headline text-lg font-bold text-[#1f1b17] mb-2">
                Pantau Senyuman Mereka
              </h3>
              <p className="text-xs sm:text-sm text-[#554336] max-w-xs leading-relaxed">
                Terima foto dan video dokumentasi penyaluran langsung ke WhatsApp Anda secara berkala dan transparan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MOMEN BAHAGIA DI LAPANGAN ==================== */}
      <section className="py-16" id="impact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="px-4 py-1.5 rounded-full bg-rose-100 text-[#994100] text-xs font-bold uppercase tracking-wider inline-block mb-3">
                Dokumentasi Ceria
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-[#1f1b17] font-bold">
                Momen Bahagia di Lapangan
              </h2>
              <p className="text-sm sm:text-base text-[#554336] mt-1">
                Setiap dukungan Anda berbuah senyuman tulus yang menghangatkan jiwa.
              </p>
            </div>
            <Link
              href="/cerita-dampak"
              className="inline-flex items-center gap-2 text-[#006a61] text-sm font-bold hover:underline"
            >
              <span>Lihat Semua Cerita Senyuman</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>

          {/* Bento Visual Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Story 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#f0e6e0] card-hover-pop">
              <div className="relative h-56 w-full bg-amber-50">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
                  alt="Senyum siswa sekolah menerima tas dan buku"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[#8d4b00] text-xs font-bold shadow-sm">
                  📍 Garut, Jawa Barat
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-headline text-base sm:text-lg font-bold text-[#1f1b17] mb-2">
                  Senyum 150 Siswa Madrasah
                </h3>
                <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                  Paket buku ensiklopedia & seragam baru membuat mereka kembali bersemangat ke sekolah setiap pagi.
                </p>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#f0e6e0] card-hover-pop">
              <div className="relative h-56 w-full bg-amber-50">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop"
                  alt="Ibu perajin madu lokal tersenyum bahagia"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[#006a61] text-xs font-bold shadow-sm">
                  📍 Gunungkidul, DIY
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-headline text-base sm:text-lg font-bold text-[#1f1b17] mb-2">
                  Ibu Sartini & Usaha Madunya
                </h3>
                <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                  Bantuan alat panen modern kini melipatgandakan penghasilan keluarga hingga mandiri secara finansial.
                </p>
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#f0e6e0] card-hover-pop">
              <div className="relative h-56 w-full bg-amber-50">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop"
                  alt="Pemeriksaan gizi dan posyandu keliling"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[#994100] text-xs font-bold shadow-sm">
                  📍 Lombok Timur, NTB
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-headline text-base sm:text-lg font-bold text-[#1f1b17] mb-2">
                  Posyandu Keliling Sahabat Lebah
                </h3>
                <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                  Pemeriksaan gizi gratis dan vitamin lengkap untuk 300 balita pesisir pantai secara berkala.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CALL TO ACTION: GABUNG RELAWAN ==================== */}
      <section className="py-12" id="volunteer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-800 via-[#006a61] to-teal-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
            <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <span className="px-4 py-1.5 rounded-full bg-[#89f5e7]/30 text-[#89f5e7] text-xs font-bold uppercase tracking-wider inline-block mb-3">
                🐝 Mari Bergabung
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                Ingin Turun Langsung Jadi Sahabat Lebah?
              </h2>
              <p className="text-sm sm:text-base text-teal-100 mb-8 leading-relaxed">
                Bukan hanya donasi dana, tenaga dan senyumanmu adalah energi terhebat untuk mereka. Jadilah bagian dari 1.200+ relawan aktif di berbagai kota di Indonesia.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/program#relawan"
                  className="px-7 py-3.5 rounded-full bg-white text-[#006a61] text-sm font-bold hover:bg-[#89f5e7] transition-all hover:scale-105 active:scale-95 shadow-md"
                >
                  Daftar Relawan Sekarang
                </Link>
                <Link
                  href="/tentang-kami"
                  className="px-6 py-3.5 rounded-full border border-white/40 text-white text-sm font-bold hover:bg-white/10 transition-all"
                >
                  Pelajari Komunitas Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
