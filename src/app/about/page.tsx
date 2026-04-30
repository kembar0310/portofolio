"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const skills = [
  { name: "Data Management", level: 85 },
  { name: "Microsoft Excel", level: 90 },
  { name: "Data Reporting", level: 80 },
  { name: "Administrative Skills", level: 85 },
  { name: "Data Entry & Validation", level: 85 },
  { name: "Document Management", level: 90 },
];

const experiences = [
  {
    year: "2024",
    title: "Data Reporting & Administration",
    place: "Kegiatan",
    desc: "Mengelola dan menyusun data menjadi laporan terstruktur, serta menyajikan informasi agar mudah dipahami dan digunakan.",
  },
  {
    year: "2023",
    title: "Data Management",
    place: "Proyek Mandiri / Tugas Kuliah",
    desc: "Melakukan pengolahan, input, dan validasi data menggunakan Microsoft Excel untuk menghasilkan data yang rapi dan akurat.",
  },
  {
    year: "2022",
    title: "Pengolahan Data & Dokumentasi Kegiatan",
    place: "Kegiatan Kampus",
    desc: "Menyusun dan mengelola data kegiatan serta membuat laporan sederhana untuk mendukung administrasi.",
  },
];

export default function page() {
  return (
    <div style={{ background: "#ffffff", color: "#1a1a1a"  }} className="min-h-screen font-sans" >
      <Navbar />

      {/* ── HERO ABOUT ── */}
      <section
        className="pt-36 pb-20 px-6 relative overflow-hidden"
        style={{ background: "#ffffff" }}
      >
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,112,191,0.12) 0%, transparent 70%)" }}
        />
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-bold mb-4" style={{ color: "#FF70BF", letterSpacing: "1px" }}>
            — ABOUT ME
          </p>
          <h1
            className="text-5xl md:text-7xl font-black mb-6"
            style={{ letterSpacing: "-3px", color: "#1a1a1a", lineHeight: 1.05 }}
          >
            Halo, saya <br />
            <span style={{ color: "#FF70BF" }}>Rizka Upa'</span>
            <br />
            <span style={{ color: "#FF70BF" }}>Mallisa' ✦</span>
          </h1>
          <p className="text-xl leading-relaxed max-w-2xl" style={{ color: "#777" }}>
            Mahasiswi semester 8 dengan minat pada pengolahan data dan pelaporan. Saya percaya data yang dikelola dengan baik dapat menjadi informasi yang bernilai dan mudah dipahami
          </p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-20 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Info Cards */}
          <div
            className="rounded-3xl p-8 sticky top-28"
            style={{
              background: "#fff",
              border: "1.5px solid rgba(255,112,191,0.25)",
              boxShadow: "0 8px 40px rgba(255,112,191,0.1)",
            }}
          >
            {/* Avatar */}
            <div className="flex items-center gap-5 mb-8 pb-8" style={{ borderBottom: "1px solid rgba(255,112,191,0.15)" }}>
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center font-black text-2xl flex-shrink-0"
                style={{ background: "linear-gradient(135deg, rgba(255,112,191,0.15), rgba(255,112,191,0.35))", border: "2px solid #FF70BF", color: "#FF70BF" }}
              >
                RUM
              </div>
              <div>
                <h3 className="font-black text-lg" style={{ color: "#1a1a1a" }}>Rizka Upa Mallisa</h3>
                <p className="text-sm" style={{ color: "#aaa" }}>Frontend Dev & UI/UX Designer</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
                  <span className="text-xs font-semibold" style={{ color: "#FF70BF" }}>Open to Work</span>
                </div>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { label: "Semester", value: "8 (Aktif)" },
                { label: "Kota", value: "Samarinda" },
                { label: "Fokus", value: "Data Management & Reporting" },
                { label: "Tools", value: "Microsoft Excel, Google Sheets" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl p-4"
                  style={{ background: "#fff8fc", border: "1px solid rgba(255,112,191,0.12)" }}
                >
                  <p className="text-xs mb-1" style={{ color: "#bbb" }}>{item.label}</p>
                  <p className="text-sm font-bold" style={{ color: "#1a1a1a" }}>{item.value}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="space-y-4">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-xs mb-1.5" style={{ color: "#999" }}>
                    <span className="font-semibold">{s.name}</span>
                    <span>{s.level}%</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: "#ffe8f5" }}>
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${s.level}%`, background: "#FF70BF" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Story Text */}
          <div>
            <div className="space-y-6 mb-12">
              <p className="text-base leading-relaxed" style={{ color: "#555" }}>
                Perkenalkan, saya <strong style={{ color: "#1a1a1a" }}>Rizka Upa Mallisa</strong> —
                seorang mahasiswi semester 8 yang memiliki minat pada pengolahan data dan administrasi informasi.
                Saya terbiasa mengelola data secara terstruktur, menyusun laporan yang rapi, serta memastikan informasi dapat dipahami dengan jelas dan akurat.
                Bagi saya, data bukan sekadar angka, tetapi sumber informasi yang memiliki nilai ketika dikelola dengan baik.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#555" }}>
                Saya memiliki ketertarikan besar di bidang{" "}
                <strong style={{ color: "#FF70BF" }}>Data Management</strong> dan{" "}
                <strong style={{ color: "#FF70BF" }}>Data Reporting</strong> — dua hal yang saling berkaitan
                dalam menghasilkan informasi yang bernilai. Bagi saya, data yang baik bukan hanya tersimpan,
                tetapi juga harus diolah dan disajikan dengan rapi agar mudah dipahami dan digunakan.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#555" }}>
                Saat ini saya terus mengembangkan kemampuan dalam pengolahan data menggunakan <strong style={{ color: "#1a1a1a" }}>
                Microsoft Excel</strong>, <strong style={{ color: "#1a1a1a" }}>Google Sheets,</strong>, dan
                serta terbuka untuk peluang kerja, magang, dan kolaborasi di bidang administrasi dan pengelolaan data.
              </p>
            </div>

            {/* Tech Stack Tags */}
            <div className="mb-12">
              <h3 className="font-black text-lg mb-4" style={{ color: "#1a1a1a" }}>Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {["Microsoft Excel", "Google Sheets", "Microsoft Word", "Microsoft PowerPoint", "Data Entry", "Data Reporting", "Document Management"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-sm font-semibold"
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

            {/* Experience Timeline */}
            <div>
              <h3 className="font-black text-lg mb-6" style={{ color: "#1a1a1a" }}>Pengalaman</h3>
              <div className="relative">
                <div
                  className="absolute left-[11px] top-2 bottom-2 w-0.5"
                  style={{ background: "rgba(255,112,191,0.2)" }}
                />
                <div className="space-y-8">
                  {experiences.map((exp) => (
                    <div key={exp.title} className="flex gap-6 relative">
                      <div
                        className="w-6 h-6 rounded-full flex-shrink-0 mt-1 flex items-center justify-center z-10"
                        style={{ background: "#FF70BF", border: "3px solid #fff", boxShadow: "0 0 0 2px rgba(255,112,191,0.3)" }}
                      />
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span
                            className="text-xs font-bold px-2 py-0.5 rounded-full"
                            style={{ background: "rgba(255,112,191,0.1)", color: "#FF70BF" }}
                          >
                            {exp.year}
                          </span>
                          <span className="text-xs font-semibold" style={{ color: "#bbb" }}>
                            {exp.place}
                          </span>
                        </div>
                        <h4 className="font-black text-base mb-1" style={{ color: "#1a1a1a" }}>{exp.title}</h4>
                        <p className="text-sm leading-relaxed" style={{ color: "#888" }}>{exp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6" style={{ background: "#ffffff" }}>
        <div
          className="max-w-4xl mx-auto rounded-3xl p-12 text-center"
          style={{ background: "#FF70BF" }}
        >
          <h2 className="text-3xl font-black text-white mb-4" style={{ letterSpacing: "-1px" }}>
            Ubah data Anda jadi informasi yang bernilai ✦
          </h2>
          <p className="text-white/80 mb-8">Mari bekerja sama untuk menghasilkan laporan yang rapi, akurat, dan mudah dipahami.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-black text-base hover:scale-105 transition-all"
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