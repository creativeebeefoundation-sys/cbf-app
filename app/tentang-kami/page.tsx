import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang Kami — Creative Bee Foundation",
  description:
    "Kenalan dengan Sahabat Lebah! Pelajari filosofi gotong royong lebah, pilar misi ceria kami, tim penggerak, serta transparansi akuntabilitas donasi.",
};

export default function TentangKami() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-[#fcf2eb]/60 via-[#fff8f5] to-[#fff8f5]">
        {/* Atmospheric Bubbles */}
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              {/* Playful Badge Cluster */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#8d4b00] text-xs font-bold tracking-wide">
                  <span>🐝</span> Sahabat Kebaikan
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#89f5e7]/40 text-[#005049] text-xs font-bold tracking-wide">
                  <span>🌻</span> Komunitas Ceria & Guyub
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eae1da] text-[#554336] text-xs font-bold">
                  <span>✨</span> 100% Terbuka & Ramah
                </span>
              </div>

              <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1f1b17] font-bold tracking-tight leading-[1.15]">
                Kenalan dengan{" "}
                <span className="text-[#8d4b00] underline decoration-amber-300 decoration-wavy decoration-2">
                  Sahabat Lebah!
                </span>{" "}
              </h1>

              <p className="text-base sm:text-lg text-[#554336] max-w-2xl leading-relaxed">
                Menebar Manisnya Kebaikan, Satu Senyuman Sekaligus. Kami percaya kepedulian sosial tak harus terasa kaku dan berat—ia bisa bersemi ceria seperti tawa anak-anak di taman bunga yang mekar.
              </p>

              {/* Stat Pills */}
              <div className="pt-2 flex flex-wrap gap-4 w-full">
                <div className="bg-white border border-[#dbc2b0]/50 rounded-full py-2 px-5 flex items-center gap-3 shadow-sm">
                  <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-[#8d4b00] font-bold text-xs">
                    14K
                  </span>
                  <span className="text-xs sm:text-sm text-[#554336] font-medium">
                    Toples Madu Kebaikan Terbagi
                  </span>
                </div>
                <div className="bg-white border border-[#dbc2b0]/50 rounded-full py-2 px-5 flex items-center gap-3 shadow-sm">
                  <span className="w-8 h-8 rounded-full bg-[#89f5e7]/50 flex items-center justify-center text-[#006a61] font-bold text-xs">
                    850+
                  </span>
                  <span className="text-xs sm:text-sm text-[#554336] font-medium">
                    Relawan Tersenyum
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md bg-white rounded-3xl p-4 shadow-xl border border-[#dbc2b0]/30 card-hover-pop">
                <div className="overflow-hidden rounded-2xl aspect-square relative bg-amber-50">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop"
                    alt="Komunitas relawan Creative Bee Foundation"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-full flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-2 pl-2">
                      <span className="text-xl">🍯</span>
                      <span className="text-xs font-bold text-[#1f1b17]">
                        Energi Positif Berkelanjutan
                      </span>
                    </div>
                    <span className="px-3 py-1 bg-[#006a61] text-white rounded-full text-xs font-semibold">
                      Semerbak
                    </span>
                  </div>
                </div>

                {/* Floating Micro Accent */}
                <div className="absolute -top-3 -right-3 bg-amber-100 text-[#8d4b00] px-4 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 border border-amber-300">
                  <span>✨</span> 100% Cinta Hati
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KENAPA SIMBOL LEBAH? ================= */}
      <section className="py-16 bg-white border-y border-[#dbc2b0]/20" id="visi-misi">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#89f5e7]/40 text-[#006a61] text-xs font-bold uppercase tracking-wider mb-2">
              Filosofi Hangat
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-[#1f1b17] font-bold">
              Kenapa Simbol Lebah? 🐝🍯
            </h2>
            <p className="text-sm sm:text-base text-[#554336] mt-2">
              Lebah adalah teladan alam terbaik tentang harmoni, ketulusan kerja sama, dan manisnya kontribusi tanpa merusak lingkungan sekitar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group bg-[#fcf2eb]/50 hover:bg-[#f6ece6] transition-all duration-300 rounded-3xl p-8 border border-[#dbc2b0]/30 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                  🐝
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-amber-200/60 text-[#8d4b00] text-xs font-bold mb-3">
                  Satu Sarang, Sejuta Karsa
                </div>
                <h3 className="font-headline text-xl text-[#1f1b17] font-bold mb-2">
                  Gotong Royong Guyub
                </h3>
                <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                  Bergerak bersama tanpa pamrih. Dari yang kecil hingga yang besar, setiap lebah saling menjaga, memastikan tak ada satu pun saudara yang kelaparan atau tertinggal di belakang.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#dbc2b0]/30 flex items-center text-[#8d4b00] text-xs font-bold">
                <span>Kolaborasi Berdaya</span>
                <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-[#fcf2eb]/50 hover:bg-[#f6ece6] transition-all duration-300 rounded-3xl p-8 border border-[#dbc2b0]/30 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-[#89f5e7]/50 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                  🍯
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#89f5e7]/60 text-[#006a61] text-xs font-bold mb-3">
                  Kemurnian & Nutrisi
                </div>
                <h3 className="font-headline text-xl text-[#1f1b17] font-bold mb-2">
                  Memberi Manfaat Manis
                </h3>
                <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                  Membantu sesama dengan ketulusan dan energi positif. Bantuan kami bukan sekadar angka, melainkan sari pati kasih sayang yang menguatkan asa serta menghadirkan rasa tentram.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#dbc2b0]/30 flex items-center text-[#006a61] text-xs font-bold">
                <span>Hasil Nyata Manis</span>
                <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-[#fcf2eb]/50 hover:bg-[#f6ece6] transition-all duration-300 rounded-3xl p-8 border border-[#dbc2b0]/30 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                  🌸
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-rose-200/60 text-[#994100] text-xs font-bold mb-3">
                  Kebaikan Berkelanjutan
                </div>
                <h3 className="font-headline text-xl text-[#1f1b17] font-bold mb-2">
                  Menjaga Harmoni
                </h3>
                <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                  Menebar kebaikan tanpa merusak kuncup bunga. Setiap langkah program kami merangkul martabat masyarakat lokal, memuliakan alam, dan menyuburkan kemandirian jangka panjang.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#dbc2b0]/30 flex items-center text-[#994100] text-xs font-bold">
                <span>Ekosistem Lestari</span>
                <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4 MISI CERIA KAMI ================= */}
      <section className="py-16 bg-[#fff8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#8d4b00] text-xs font-bold uppercase tracking-wider">
                Langkah Terarah
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-[#1f1b17] font-bold mt-2">
                4 Misi Ceria Kami 🌱
              </h2>
              <p className="text-sm sm:text-base text-[#554336] mt-1">
                Gerakan nyata yang kami rawat setiap hari bersama para sahabat relawan.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="w-3 h-3 rounded-full bg-[#006a61]" />
              <span className="w-3 h-3 rounded-full bg-rose-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Misi 1 */}
            <div className="bg-[#fcf2eb]/60 rounded-3xl p-6 border border-[#dbc2b0]/30 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl shadow-sm">
                    🥛
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white text-[#554336] text-xs font-semibold">
                    Tumbuh Kuat
                  </span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#1f1b17] mb-2">
                  Gizi Anak Ceria
                </h3>
                <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                  Distribusi asupan gizi sehat, susu madu bernutrisi, dan sarapan ceria untuk ribuan balita di pelosok desa.
                </p>
              </div>
              <div className="mt-6 pt-3 bg-white rounded-full px-4 py-2 flex items-center justify-between text-[#8d4b00] text-xs font-bold">
                <span>Target: 20.000 Paket</span>
                <span className="material-symbols-outlined text-sm">restaurant</span>
              </div>
            </div>

            {/* Misi 2 */}
            <div className="bg-[#fcf2eb]/60 rounded-3xl p-6 border border-[#dbc2b0]/30 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="w-12 h-12 rounded-2xl bg-[#89f5e7]/40 flex items-center justify-center text-2xl shadow-sm">
                    🎨
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white text-[#006a61] text-xs font-semibold">
                    Raih Cita
                  </span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#1f1b17] mb-2">
                  Beasiswa Cilik
                </h3>
                <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                  Bantuan alat mewarnai, tas sekolah gembira, serta pendampingan belajar kreatif tanpa pungutan biaya.
                </p>
              </div>
              <div className="mt-6 pt-3 bg-white rounded-full px-4 py-2 flex items-center justify-between text-[#006a61] text-xs font-bold">
                <span>500+ Siswa Aktif</span>
                <span className="material-symbols-outlined text-sm">school</span>
              </div>
            </div>

            {/* Misi 3 */}
            <div className="bg-[#fcf2eb]/60 rounded-3xl p-6 border border-[#dbc2b0]/30 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl shadow-sm">
                    🧵
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white text-[#8d4b00] text-xs font-semibold">
                    Ibu Berdaya
                  </span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#1f1b17] mb-2">
                  Kemandirian Ibu
                </h3>
                <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                  Pelatihan kerajinan, mikrousaha olahan madu, dan kelas literasi finansial ceria untuk ibu rumah tangga tangguh.
                </p>
              </div>
              <div className="mt-6 pt-3 bg-white rounded-full px-4 py-2 flex items-center justify-between text-[#8d4b00] text-xs font-bold">
                <span>32 Kelompok Usaha</span>
                <span className="material-symbols-outlined text-sm">storefront</span>
              </div>
            </div>

            {/* Misi 4 */}
            <div className="bg-[#fcf2eb]/60 rounded-3xl p-6 border border-[#dbc2b0]/30 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center text-2xl shadow-sm">
                    🚀
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-white text-[#994100] text-xs font-semibold">
                    Sigap & Hangat
                  </span>
                </div>
                <h3 className="font-headline text-lg font-bold text-[#1f1b17] mb-2">
                  Aksi Cepat Tanggap
                </h3>
                <p className="text-xs sm:text-sm text-[#554336] leading-relaxed">
                  Respon darurat bencana alam dengan dapur hangat keliling, tenda ramah anak, dan pertolongan pertama terpadu.
                </p>
              </div>
              <div className="mt-6 pt-3 bg-white rounded-full px-4 py-2 flex items-center justify-between text-[#994100] text-xs font-bold">
                <span>Siaga 24/7 Wilayah</span>
                <span className="material-symbols-outlined text-sm">emergency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIM SAHABAT LEBAH ================= */}
      <section className="py-16 bg-white" id="tim">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 text-[#8d4b00] text-xs font-bold uppercase tracking-wider mb-2">
              Wajah di Balik Senyuman
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl text-[#1f1b17] font-bold">
              Tim Sahabat Lebah 💛
            </h2>
            <p className="text-sm sm:text-base text-[#554336] mt-2">
              Mereka yang menyalakan semangat setiap hari dengan hati tulus dan tangan terbuka.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Relawan 1 */}
            <div className="bg-[#fcf2eb]/50 rounded-3xl p-6 flex flex-col items-center text-center shadow-sm border border-[#dbc2b0]/30 group hover:shadow-md transition-all">
              <div className="relative w-28 h-28 mb-4">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-sm bg-amber-100">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                    alt="Nadhira Rahma - Koordinator Senyuman"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-sm shadow-sm border-2 border-white">
                  😊
                </span>
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-[#8d4b00] text-xs font-bold mb-1">
                Koordinator Senyuman
              </span>
              <h3 className="font-headline text-base font-bold text-[#1f1b17]">
                Nadhira Rahma
              </h3>
              <p className="text-xs text-[#554336] mt-2 leading-relaxed">
                "Melihat tawa anak-anak adalah alasan terbaik untuk bangun pagi dan melangkah."
              </p>
            </div>

            {/* Relawan 2 */}
            <div className="bg-[#fcf2eb]/50 rounded-3xl p-6 flex flex-col items-center text-center shadow-sm border border-[#dbc2b0]/30 group hover:shadow-md transition-all">
              <div className="relative w-28 h-28 mb-4">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-sm bg-teal-100">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
                    alt="Pak Budi Santoso - Koki Dapur Berkah"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#89f5e7]/60 flex items-center justify-center text-sm shadow-sm border-2 border-white">
                  🍲
                </span>
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#89f5e7]/50 text-[#005049] text-xs font-bold mb-1">
                Koki Dapur Berkah
              </span>
              <h3 className="font-headline text-base font-bold text-[#1f1b17]">
                Pak Budi Santoso
              </h3>
              <p className="text-xs text-[#554336] mt-2 leading-relaxed">
                "Makanan bergizi yang dimasak penuh kasih adalah pelukan paling hangat untuk jiwa."
              </p>
            </div>

            {/* Relawan 3 */}
            <div className="bg-[#fcf2eb]/50 rounded-3xl p-6 flex flex-col items-center text-center shadow-sm border border-[#dbc2b0]/30 group hover:shadow-md transition-all">
              <div className="relative w-28 h-28 mb-4">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-sm bg-rose-100">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop"
                    alt="dr. Alisia Tan - Dokter Sahabat Balita"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-sm shadow-sm border-2 border-white">
                  🩺
                </span>
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-rose-100 text-[#994100] text-xs font-bold mb-1">
                Dokter Sahabat Balita
              </span>
              <h3 className="font-headline text-base font-bold text-[#1f1b17]">
                dr. Alisia Tan
              </h3>
              <p className="text-xs text-[#554336] mt-2 leading-relaxed">
                "Memeriksa adik-adik kecil selalu jadi obat lelah paling mujarab di setiap akhir pekan."
              </p>
            </div>

            {/* Relawan 4 */}
            <div className="bg-[#fcf2eb]/50 rounded-3xl p-6 flex flex-col items-center text-center shadow-sm border border-[#dbc2b0]/30 group hover:shadow-md transition-all">
              <div className="relative w-28 h-28 mb-4">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-sm bg-amber-100">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
                    alt="Reza Dirgantara - Penutur Cerita Ceria"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#86f2e4] flex items-center justify-center text-sm shadow-sm border-2 border-white">
                  📸
                </span>
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#89f5e7]/40 text-[#006a61] text-xs font-bold mb-1">
                Penutur Cerita Ceria
              </span>
              <h3 className="font-headline text-base font-bold text-[#1f1b17]">
                Reza Dirgantara
              </h3>
              <p className="text-xs text-[#554336] mt-2 leading-relaxed">
                "Merekam kisah perjuangan warga dan menjembatani harapan dengan para donatur baik."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRINSIP KETERBUKAAN CERIA & FINANCIALS ================= */}
      <section className="py-16 bg-[#fcf2eb]/50" id="transparansi">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#dbc2b0]/30 shadow-sm">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-20 h-20 rounded-3xl bg-[#89f5e7]/50 flex-shrink-0 flex items-center justify-center text-[#006a61]">
                <span className="material-symbols-outlined text-4xl">verified_user</span>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-[#89f5e7]/50 text-[#006a61] text-xs font-bold">
                    Transparansi 100% Bersih
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-[#8d4b00] text-xs font-bold">
                    Audit Terbuka Berkala
                  </span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-[#1f1b17]">
                  Setiap Tetes Madu Kebaikan Tercatat Jelas
                </h3>
                <p className="text-xs sm:text-sm text-[#554336] mt-2 leading-relaxed">
                  Kami percaya kepercayaan adalah amanah paling berharga. Setiap rupiah donasi dan dukungan diaudit independen secara berkala, dilaporkan dalam infografik ceria yang mudah dibaca oleh siapa pun.
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-col gap-2.5 w-full lg:w-auto">
                <div className="bg-[#fcf2eb] rounded-2xl px-4 py-3 flex items-center gap-3 border border-[#dbc2b0]/30">
                  <span className="material-symbols-outlined text-[#006a61]">task_alt</span>
                  <div className="text-left">
                    <p className="text-xs font-bold text-[#1f1b17]">WTP 3 Tahun Beruntun</p>
                    <p className="text-[11px] text-[#554336]">Kantor Akuntan Publik Resmi</p>
                  </div>
                </div>
                <div className="bg-[#fcf2eb] rounded-2xl px-4 py-3 flex items-center gap-3 border border-[#dbc2b0]/30">
                  <span className="material-symbols-outlined text-[#8d4b00]">lock_open</span>
                  <div className="text-left">
                    <p className="text-xs font-bold text-[#1f1b17]">Laporan Real-Time</p>
                    <p className="text-[11px] text-[#554336]">Diperbarui setiap hari Jumat</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Distribution Bar */}
            <div className="mt-8 pt-8 border-t border-[#f0e6e0]">
              <h4 className="text-xs font-bold text-[#1f1b17] uppercase tracking-wider mb-3">
                Alokasi Penyaluran Dana Donasi:
              </h4>
              <div className="w-full h-4 rounded-full overflow-hidden flex bg-stone-100 mb-3">
                <div className="bg-amber-500 h-full w-[85%]" title="85% Penyaluran Program Langsung" />
                <div className="bg-[#006a61] h-full w-[10%]" title="10% Operasional Lapangan & Logistik" />
                <div className="bg-rose-400 h-full w-[5%]" title="5% Dana Cadangan Tanggap Darurat" />
              </div>
              <div className="flex flex-wrap items-center justify-between text-xs text-[#554336] gap-2">
                <span className="flex items-center gap-1.5 font-semibold text-amber-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> 85% Penyaluran Program Langsung
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-teal-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#006a61]" /> 10% Operasional & Logistik
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-rose-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" /> 5% Cadangan Bencana
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA BANNER CERIA ================= */}
      <section className="py-16 bg-gradient-to-r from-amber-100/60 via-[#fcf2eb] to-[#89f5e7]/30 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-[#8d4b00] text-xs font-bold shadow-sm mb-4">
            <span>🌻</span> Selalu Ada Ruang untuk Kebaikan
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-[#1f1b17] font-bold tracking-tight">
            Pintu Kami Selalu Terbuka untuk Teman Baru! 🤗💛
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#554336] max-w-2xl mx-auto mt-4 mb-8 leading-relaxed">
            Mau ikut terjun ke lapangan, menyumbang keahlian desain, atau sekadar berbagi cerita hangat? Mari bergandengan tangan bersama Sahabat Lebah!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/program#relawan"
              className="px-8 py-3.5 rounded-full bg-[#8d4b00] hover:bg-[#b15f00] text-white text-sm font-bold shadow-md transition-all hover:scale-105 active:scale-95"
            >
              Daftar Jadi Relawan
            </Link>
            <Link
              href="/donasi"
              className="px-8 py-3.5 rounded-full bg-white border border-[#dbc2b0]/50 hover:bg-[#fcf2eb] text-[#8d4b00] text-sm font-bold shadow-sm transition-all hover:scale-105"
            >
              Donasi Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
