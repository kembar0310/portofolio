import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: "✦",
    number: "01",
    title: "Data Management",
    desc: "Mengelola, menginput, dan menyusun data secara terstruktur untuk memastikan data rapi, akurat, dan mudah digunakan.",
    tools: ["Excel", "Google Sheets", "Data Entry"],
    pink: false,
  },
  {
    icon: "◈",
    number: "02",
    title: "Data Reporting",
    desc: "Menyusun laporan data menjadi informasi yang jelas, sistematis, dan mudah dipahami untuk kebutuhan evaluasi dan pengambilan keputusan.",
    tools: ["Excel", "Google Sheets", "Reporting"],
    pink: true,
  },
  {
    icon: "❋",
    number: "03",
    title: "Design System",
    desc: "Mengelola dokumen dan arsip digital secara rapi dan sistematis untuk memudahkan pencarian dan pengolahan data.",
    tools: ["Google Drive", "Microsoft Word", "Filing System"],
    pink: false,
  },
  {
    icon: "◆",
    number: "04",
    title: "Data Entry & Validation",
    desc: "Melakukan input data serta pengecekan (validasi) untuk memastikan keakuratan dan konsistensi data.",
    tools: ["Excel", "Google Sheets"],
    pink: false,
  },
  {
    icon: "✿",
    number: "05",
    title: "Administrative Support",
    desc: "Memberikan dukungan administrasi berbasis teknologi, termasuk pengolahan data, dokumentasi, dan penyusunan laporan.",
    tools: ["Word", "Excel", "PowerPoint"],
    pink: false,
  },
  {
    icon: "⬡",
    number: "06",
    title: "Data Visualization (Basic)",
    desc: "Menyajikan data dalam bentuk tabel atau visual sederhana agar lebih mudah dipahami dan dianalisis.",
    tools: ["Excel", "Google Sheets"],
    pink: false,
  },
];

const process = [
  { step: "01", title: "Pengumpulan Data", desc: "Mengumpulkan dan memahami kebutuhan data serta tujuan pengolahan yang diinginkan." },
  { step: "02", title: "Pengolahan Data", desc: "Melakukan input, penyusunan, dan pengelolaan data agar terstruktur dan rapi." },
  { step: "03", title: "Analisis & Penyusunan Laporan", desc: "Mengolah data menjadi informasi serta menyusun laporan yang jelas dan mudah dipahami." },
  { step: "04", title: "Penyajian & Finalisasi", desc: "Menyajikan hasil dalam bentuk laporan atau visual sederhana yang siap digunakan." },
];

export default function page() {
  return (
    <div style={{ background: "#ffffff", color: "#1a1a1a" }} className="min-h-screen font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden" style={{ background: "#ffffff" }}>
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,112,191,0.12) 0%, transparent 70%)" }}
        />
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold mb-4" style={{ color: "#FF70BF", letterSpacing: "1px" }}>
            — WHAT I DO
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1
              className="text-5xl md:text-7xl font-black"
              style={{ letterSpacing: "-3px", color: "#1a1a1a", lineHeight: 1.05 }}
            >
              Services<span style={{ color: "#FF70BF" }}> ✦</span>
            </h1>
            <p className="text-lg max-w-sm leading-relaxed" style={{ color: "#888" }}>
              Saya menyediakan layanan pengolahan data, administrasi, dan pelaporan untuk membantu menghasilkan informasi yang rapi, jelas, dan mudah digunakan.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-10 pb-24 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 group"
              style={{
                background: s.pink ? "#FF70BF" : "#fff",
                border: s.pink ? "none" : "1.5px solid rgba(255,112,191,0.2)",
                boxShadow: s.pink ? "0 8px 40px rgba(255,112,191,0.3)" : "0 4px 20px rgba(255,112,191,0.06)",
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-4xl" style={{ color: s.pink ? "#fff" : "#FF70BF" }}>{s.icon}</span>
                <span className="text-sm font-black" style={{ color: s.pink ? "rgba(255,255,255,0.4)" : "rgba(255,112,191,0.3)" }}>
                  {s.number}
                </span>
              </div>
              <h3 className="text-xl font-black mb-3" style={{ color: s.pink ? "#fff" : "#1a1a1a" }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: s.pink ? "rgba(255,255,255,0.85)" : "#888" }}>
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: s.pink ? "rgba(255,255,255,0.2)" : "rgba(255,112,191,0.08)",
                      color: s.pink ? "#fff" : "#FF70BF",
                      border: s.pink ? "1px solid rgba(255,255,255,0.3)" : "1px solid rgba(255,112,191,0.2)",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 px-6" style={{ background: "#FF70BF" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold mb-4 text-center" style={{ color: "rgba(255,255,255,0.7)", letterSpacing: "1px" }}>
            — HOW I WORK
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16" style={{ letterSpacing: "-1.5px" }}>
            Proses Kerja
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="relative">
                {i < process.length - 1 && (
                  <div
                    className="hidden md:block absolute top-8 left-full w-full h-0.5 z-0"
                    style={{ background: "rgba(255,255,255,0.2)" }}
                  />
                )}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-black mb-5 relative z-10"
                  style={{ background: "#fff", color: "#FF70BF" }}
                >
                  {p.step}
                </div>
                <h3 className="text-lg font-black text-white mb-2">{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ letterSpacing: "-1.5px", color: "#1a1a1a" }}>
            Butuh bantuan pengolahan data? ✦
          </h2>
          <p className="text-base mb-8" style={{ color: "#888" }}>
            Yuk saya bantu mengelola dan menyusun data menjadi informasi yang rapi dan mudah dipahami.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-base hover:scale-105 transition-all"
            style={{ background: "#FF70BF", color: "#fff", boxShadow: "0 6px 24px rgba(255,112,191,0.4)" }}
          >
            Konsultasi Sekarang →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}