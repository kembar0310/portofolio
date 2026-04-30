import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function page() {
  return (
    <div style={{ background: "#ffffff", color: "#1a1a1a" }} className="min-h-screen font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ paddingTop: "80px", background: "#ffffff" }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,112,191,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,112,191,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 w-full py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="order-2 md:order-1">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                style={{
                  background: "rgba(255,112,191,0.08)",
                  color: "#FF70BF",
                  border: "1px solid rgba(255,112,191,0.3)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                Available for work
              </div>

              <h1
                className="text-5xl md:text-6xl font-black leading-tight mb-2"
                style={{ letterSpacing: "-2.5px", color: "#1a1a1a" }}
              >
                Hi, I&apos;m
              </h1>
              <h1
                className="text-5xl md:text-6xl font-black leading-tight mb-6"
                style={{ letterSpacing: "-2.5px", color: "#FF70BF" }}
              >
                Rizka Upa'<br />Mallisa' ✦
              </h1>

              <p
                className="text-lg leading-relaxed mb-8 max-w-md"
                style={{ color: "#666" }}
              >
                Mahasiswi semester 8 Program Studi Teknologi Rekayasa Komputer yang memiliki minat pada{" "}
                <strong style={{ color: "#FF70BF" }}>Pengolahan Data, Administrasi,</strong>{" "}
                &amp;{" "}
                <strong style={{ color: "#FF70BF" }}>Pelaporan Informasi</strong>.
                Terbiasa bekerja dengan data secara terstruktur, teliti, dan rapi. Memiliki kemampuan dalam mengelola data, membuat laporan, serta mendukung operasional administrasi berbasis teknologi informasi.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/portofolio"
                  className="px-7 py-3 rounded-full font-bold text-white transition-all duration-200 hover:scale-105"
                  style={{
                    background: "#FF70BF",
                    boxShadow: "0 6px 24px rgba(255,112,191,0.4)",
                  }}
                >
                  Lihat Portfolio →
                </Link>
                <Link
                  href="/about"
                  className="px-7 py-3 rounded-full font-bold transition-all duration-200 hover:scale-105"
                  style={{
                    border: "2px solid #FF70BF",
                    color: "#FF70BF",
                  }}
                >
                  Tentang Saya
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-10 mt-12">
                {[
                  { num: "3+", label: "Projects" },
                  { num: "2+", label: "Years Exp." },
                  { num: "5★", label: "Rating" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-black" style={{ color: "#FF70BF" }}>
                      {s.num}
                    </p>
                    <p className="text-xs mt-1" style={{ color: "#aaa" }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Avatar */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-96 h-96 md:w-[420px] md:h-[420px]">
                <div
                  className="absolute inset-0 rounded-full border-2 border-dashed animate-spin"
                  style={{
                    borderColor: "rgba(255,112,191,0.4)",
                    animationDuration: "15s",
                  }}
                />
                <div
                  className="absolute inset-5 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,112,191,0.12), rgba(255,112,191,0.3))",
                    border: "2px solid #FF70BF",
                  }}
                >
                  <span
                    className="text-6xl font-black"
                    style={{ color: "#FF70BF" }}
                  >
                    <div
  className="absolute inset-5 rounded-full overflow-hidden"
  style={{
    border: "2px solid #FF70BF",
  }}
>
  <Image
    src="/foto-rizka.jpeg"
    alt="Foto saya"
    fill
    className="object-cover"
  />
</div>
                  </span>
                </div>
                <div
                  className="absolute -top-2 -right-2 px-3 py-1.5 rounded-full text-xs font-bold shadow-md"
                  style={{ background: "#FF70BF", color: "#fff" }}
                >
                  UI/UX ✦
                </div>
                <div
                  className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-full text-xs font-bold shadow-md"
                  style={{
                    background: "#fff",
                    color: "#FF70BF",
                    border: "1.5px solid #FF70BF",
                  }}
                >
                  Frontend Dev
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div
        className="overflow-hidden whitespace-nowrap py-3"
        style={{ background: "#FF70BF" }}
      >
        <span
          className="inline-block text-sm font-bold tracking-widest text-white"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          &nbsp;✦ UI/UX DESIGN &nbsp;✦ FRONTEND DEVELOPMENT &nbsp;✦ FIGMA
          &nbsp;✦ NEXT.JS &nbsp;✦ TAILWIND CSS &nbsp;✦ REACT &nbsp;✦ DESIGN
          SYSTEM &nbsp;✦ CREATIVE CODING &nbsp;✦ UI/UX DESIGN &nbsp;✦ FRONTEND
          DEVELOPMENT &nbsp;✦ FIGMA &nbsp;✦ NEXT.JS &nbsp;
        </span>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
      </div>

      {/* ── PREVIEW SECTIONS (teaser) ── */}

      {/* About Teaser */}
      <section className="py-24 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-bold mb-3" style={{ color: "#FF70BF", letterSpacing: "1px" }}>
              — ABOUT ME
            </p>
            <h2
              className="text-4xl md:text-5xl font-black mb-6"
              style={{ letterSpacing: "-1.5px", color: "#1a1a1a" }}
            >
              Saya suka mengolah data dan menyajikannya secara{" "}
              <span style={{ color: "#FF70BF" }}>rapi</span> &amp;{" "}
              <span style={{ color: "#FF70BF" }}>fungsional.</span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#777" }}>
              Mahasiswi semester 8 dengan minat di bidang pengolahan data dan administrasi.
              Saya percaya data bukan hanya angka, tetapi informasi
              yang harus disusun rapi agar mudah dipahami dan bermanfaat.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-bold text-sm"
              style={{ color: "#FF70BF" }}
            >
              Selengkapnya tentang saya →
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Figma", "Next.js", "Tailwind CSS", "React", "TypeScript", "Framer Motion"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  background: "rgba(255,112,191,0.08)",
                  color: "#FF70BF",
                  border: "1px solid rgba(255,112,191,0.25)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-24 px-6" style={{ background: "#FF70BF" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="text-sm font-bold mb-2" style={{ color: "rgba(255,255,255,0.7)", letterSpacing: "1px" }}>
                — WHAT I DO
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-white" style={{ letterSpacing: "-1.5px" }}>
                Services
              </h2>
            </div>
            <Link href="/service" className="mt-4 md:mt-0 text-sm font-bold text-white opacity-80 hover:opacity-100">
              Lihat semua services →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "✦", title: "Data Processing", desc: "Pengolahan, penginputan, dan pengelolaan data secara terstruktur, rapi, dan akurat." },
              { icon: "◈", title: "Reporting & Analytics", desc: "Penyusunan laporan data menjadi informasi yang jelas, sistematis, dan mudah dipahami.", featured: true },
              { icon: "❋", title: "IT Administrative Support", desc: "Dukungan administrasi berbasis teknologi informasi, termasuk dokumentasi dan pengelolaan arsip digital." },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: s.featured ? "rgba(255,255,255,0.2)" : "#fff",
                  border: s.featured ? "1.5px solid rgba(255,255,255,0.4)" : "none",
                }}
              >
                <div className="text-4xl mb-5" style={{ color: s.featured ? "#fff" : "#FF70BF" }}>{s.icon}</div>
                <h3 className="text-lg font-black mb-3" style={{ color: s.featured ? "#fff" : "#1a1a1a" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: s.featured ? "rgba(255,255,255,0.85)" : "#888" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-24 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="text-sm font-bold mb-2" style={{ color: "#FF70BF", letterSpacing: "1px" }}>
                — Data & Reporting Portfolio
              </p>
              <h2 className="text-4xl md:text-5xl font-black" style={{ letterSpacing: "-1.5px", color: "#1a1a1a" }}>
                Portfolio
              </h2>
            </div>
            <Link href="/portofolio" className="mt-4 md:mt-0 text-sm font-bold" style={{ color: "#FF70BF" }}>
              Lihat semua project →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Pengolahan Data Kegiatan", tag: "Data Reporting", year: "2025", pink: false },
              { title: "Laporan & Dashboard Data", tag: "Data Management", year: "2025", pink: true },
            ].map((item) => (
              <Link
                href="/portofolio"
                key={item.title}
                className="group rounded-3xl overflow-hidden block transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: item.pink ? "#FF70BF" : "#fff",
                  border: item.pink ? "none" : "1.5px solid rgba(255,112,191,0.2)",
                  boxShadow: "0 4px 20px rgba(255,112,191,0.1)",
                }}
              >
                <div
                  className="h-48 flex items-center justify-center relative"
                  style={{
                    background: item.pink
                      ? "rgba(255,255,255,0.15)"
                      : "linear-gradient(135deg, #ffe8f5, rgba(255,112,191,0.2))",
                  }}
                >
                  <span className="text-6xl opacity-30" style={{ color: item.pink ? "#fff" : "#FF70BF" }}>✦</span>
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: item.pink ? "#fff" : "#FF70BF",
                      color: item.pink ? "#FF70BF" : "#fff",
                    }}
                  >
                    {item.tag}
                  </div>
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-black text-lg" style={{ color: item.pink ? "#fff" : "#1a1a1a" }}>{item.title}</h3>
                    <p className="text-sm mt-1" style={{ color: item.pink ? "rgba(255,255,255,0.6)" : "#bbb" }}>{item.year}</p>
                  </div>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: item.pink ? "#fff" : "#FF70BF",
                      color: item.pink ? "#FF70BF" : "#fff",
                    }}
                  >
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6" style={{ background: "#ffffff" }}>
        <div
          className="max-w-4xl mx-auto rounded-3xl p-12 text-center"
          style={{ background: "#FF70BF" }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-1.5px" }}>
            Butuh bantuan pengolahan data?✦
          </h2>
          <p className="text-white/80 mb-8">
            Saya siap membantu menyusun data menjadi laporan yang terstruktur dan mudah dipahami.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-base transition-all hover:scale-105"
            style={{ background: "#1a1a1a", color: "#fff", boxShadow: "0 8px 30px rgba(0,0,0,0.2)" }}
          >
            Hubungi Saya →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}