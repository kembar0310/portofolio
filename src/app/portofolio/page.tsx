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
  },
  {
    title: "Laporan & Dashboard Data",
    tag: "Data Reporting",
    year: "2025",
    desc: "Menyusun data menjadi laporan dan dashboard sederhana untuk mempermudah analisis dan monitoring.",
    tools: ["Excel", "Google Sheets"],
    pink: true,
  },
  {
    title: "Administrasi Data Perjalanan",
    tag: "Administrative",
    year: "2025",
    desc: "Mengelola data perjalanan dan menyusunnya menjadi laporan yang sistematis dan mudah diakses.",
    tools: ["Excel", "Microsoft Word"],
    pink: false,
  },
  {
    title: "Pengolahan Data Personal",
    tag: "Data Management",
    year: "2025",
    desc: "Mengelola data personal atau sederhana menjadi informasi yang terstruktur dan mudah digunakan.",
    tools: ["Excel", "Google Sheets"],
    pink: false,
  },
  {
    title: "Sistem Pengarsipan Data",
    tag: "Document Management",
    year: "2025",
    desc: "Menyusun dan mengelola arsip digital agar data tersimpan rapi dan mudah ditemukan kembali.",
    tools: ["Google Drive", "Microsoft Word"],
    pink: true,
  },
  {
    title: "Data Laporan Kegiatan",
    tag: "Data Reporting",
    year: "2025",
    desc: "Membuat laporan kegiatan berdasarkan data yang telah diolah secara sistematis dan informatif",
    tools: ["Excel", "PowerPoint"],
    pink: false,
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
              className="rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              style={{
                background: project.pink ? "#FF70BF" : "#fff",
                border: project.pink ? "none" : "1.5px solid rgba(255,112,191,0.2)",
                boxShadow: project.pink
                  ? "0 8px 40px rgba(255,112,191,0.3)"
                  : "0 4px 20px rgba(255,112,191,0.06)",
              }}
            >
              {/* Thumbnail */}
              <div
                className="h-44 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: project.pink
                    ? "rgba(255,255,255,0.15)"
                    : "linear-gradient(135deg, #ffe8f5, rgba(255,112,191,0.2))",
                }}
              >
                <span
                  className="text-7xl opacity-20 group-hover:scale-110 transition-transform duration-500 select-none"
                  style={{ color: project.pink ? "#fff" : "#FF70BF" }}
                >
                  ✦
                </span>
                {/* Tag */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold"
                  style={{
                    background: project.pink ? "#fff" : "#FF70BF",
                    color: project.pink ? "#FF70BF" : "#fff",
                  }}
                >
                  {project.tag}
                </div>
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: project.pink ? "rgba(255,255,255,0.2)" : "rgba(255,112,191,0.1)",
                    color: project.pink ? "#fff" : "#FF70BF",
                  }}
                >
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="font-black text-lg mb-2"
                  style={{ color: project.pink ? "#fff" : "#1a1a1a" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: project.pink ? "rgba(255,255,255,0.8)" : "#999" }}
                >
                  {project.desc}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: project.pink ? "rgba(255,255,255,0.2)" : "rgba(255,112,191,0.08)",
                          color: project.pink ? "#fff" : "#FF70BF",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ml-2"
                    style={{
                      background: project.pink ? "#fff" : "#FF70BF",
                      color: project.pink ? "#FF70BF" : "#fff",
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