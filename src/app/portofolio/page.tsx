import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const filters = ["All", "Data Management", "Data Reporting", "Administrative"];

const projects = [
  {
    title: "Pengolahan Data Kegiatan",
    tag: "Data Management",
    year: "2025",
    desc: "Mengelola dan menyusun data kegiatan menjadi laporan yang rapi, terstruktur, dan mudah dipahami.",
    tools: ["Excel", "Google Sheets"],
    pink: false,
    image: "/images/foto0.jpeg",
  },
  {
    title: "Laporan & Dashboard Data",
    tag: "Data Reporting",
    year: "2025",
    desc: "Menyusun data menjadi laporan dan dashboard sederhana untuk mempermudah analisis dan monitoring.",
    tools: ["Excel", "Google Sheets"],
    pink: false,
    image: "/images/foto00.jpeg",
  },
  {
    title: "Administrasi Data Perjalanan",
    tag: "Administrative",
    year: "2025",
    desc: "Mengelola data perjalanan dan menyusunnya menjadi laporan yang sistematis dan mudah diakses.",
    tools: ["Excel", "Microsoft Word"],
    pink: false,
    image: "/images/foto2.jpeg",
  },
  {
    title: "Pengolahan Data Personal",
    tag: "Data Management",
    year: "2025",
    desc: "Mengelola data personal atau sederhana menjadi informasi yang terstruktur dan mudah digunakan.",
    tools: ["Excel", "Google Sheets"],
    pink: false,
    image: "/images/foto3.jpeg",
  },
  {
    title: "Sistem Pengarsipan Data",
    tag: "Document Management",
    year: "2025",
    desc: "Menyusun dan mengelola arsip digital agar data tersimpan rapi dan mudah ditemukan kembali.",
    tools: ["Google Drive", "Microsoft Word"],
    pink: false,
    image: "/images/foto4.jpeg",
  },
  {
    title: "Data Laporan Kegiatan",
    tag: "Data Reporting",
    year: "2025",
    desc: "Membuat laporan kegiatan berdasarkan data yang telah diolah secara sistematis dan informatif.",
    tools: ["Excel", "PowerPoint"],
    pink: false,
    image: "/images/foto5.jpeg",
  },
];

export default function page() {
  return (
    <div style={{ background: "#ffffff", color: "#1a1a1a" }} className="min-h-screen font-sans">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-36 pb-16 px-6 relative overflow-hidden" style={{ background: "#ffffff" }}>
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,112,191,0.12) 0%, transparent 70%)" }}
        />
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold mb-4" style={{ color: "#FF70BF", letterSpacing: "1px" }}>
            — MY DATA PROJECTS
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h1
              className="text-5xl md:text-7xl font-black"
              style={{ letterSpacing: "-3px", color: "#1a1a1a", lineHeight: 1.05 }}
            >
              Portofolio<span style={{ color: "#FF70BF" }}> ✦</span>
            </h1>
            <p className="text-base max-w-xs leading-relaxed" style={{ color: "#888" }}>
              Kumpulan proyek pengolahan data dan pelaporan yang mencerminkan kemampuan saya dalam mengelola dan menyajikan informasi secara terstruktur.
            </p>
          </div>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section className="pb-6 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-3 flex-wrap">
            {filters.map((f, i) => (
              <button
                key={f}
                className="px-5 py-2 rounded-full text-sm font-bold transition-all"
                style={{
                  background: i === 0 ? "#FF70BF" : "transparent",
                  color: i === 0 ? "#fff" : "#888",
                  border: i === 0 ? "none" : "1.5px solid rgba(255,112,191,0.25)",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS GRID ── */}
     <section className="py-10 pb-24 px-6" style={{ background: "#ffffff" }}>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map((project) => (
      <div
        key={project.title}
        className="relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer"
        style={{
          border: "1.5px solid rgba(255,112,191,0.15)",
          boxShadow: "0 8px 30px rgba(255,112,191,0.08)",
          minHeight: "420px",
        }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url(${project.image})`,
          }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: project.pink
              ? "rgba(255,112,191,0.82)"
              : "rgba(0,0,0,0.58)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-6 flex flex-col h-full">
          
          {/* Top */}
          <div className="flex items-start justify-between mb-6">
            <div
              className="px-3 py-1 rounded-full text-xs font-bold"
              style={{
                background: "rgba(255,255,255,0.18)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.25)",
                backdropFilter: "blur(4px)",
              }}
            >
              {project.tag}
            </div>

            <div
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
              }}
            >
              {project.year}
            </div>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Bottom Content */}
          <div>
            <h3
              className="font-black text-2xl mb-3"
              style={{ color: "#fff" }}
            >
              {project.title}
            </h3>

            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              {project.desc}
            </p>

            {/* Tools */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.16)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.2)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Button */}
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center"
              style={{
                background: "#fff",
                color: "#FF70BF",
              }}
            >
              →
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* ── CTA ── */}
      <section className="py-20 px-6" style={{ background: "#ffffff" }}>
        <div
          className="max-w-4xl mx-auto rounded-3xl p-12 text-center"
          style={{ background: "#FF70BF" }}
        >
          <h2 className="text-3xl font-black text-white mb-4" style={{ letterSpacing: "-1px" }}>
            Butuh bantuan pengolahan data? ✦
          </h2>
          <p className="text-white/80 mb-8">Saya siap membantu mengelola data dan menyusunnya menjadi laporan yang mudah dipahami.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black hover:scale-105 transition-all"
            style={{ background: "#fff", color: "#FF70BF" }}
          >
            Hubungi Saya →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}