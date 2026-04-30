"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: "✉",
    label: "Email",
    value: "rizka@email.com",
    desc: "Balas dalam 1x24 jam",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/rizkaupa",
    desc: "Connect with me",
  },
  {
    icon: "🎨",
    label: "Dribbble",
    value: "dribbble.com/rizkaupa",
    desc: "Lihat karya desain saya",
  },
  {
    icon: "⌨",
    label: "GitHub",
    value: "github.com/rizkaupa",
    desc: "Cek kode saya",
  },
];

const services = ["UI/UX Design", "Frontend Development", "Design System", "Landing Page", "Konsultasi", "Lainnya"];

export default function page() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    "service_clvfr7g",
    "template_ijrt9ax",
    {
      name: form.name,
      email: form.email,
      service: form.service,
      budget: form.budget,
      message: form.message,
    },
    "CBf5O0fbNdWUqCvU1"
  )
  .then(() => {
    setSent(true);
  })
  .catch((error) => {
    console.error("FAILED...", error);
    alert("Gagal mengirim pesan");
  });
};

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
            — GET IN TOUCH
          </p>
          <h1
            className="text-5xl md:text-7xl font-black mb-6"
            style={{ letterSpacing: "-3px", color: "#1a1a1a", lineHeight: 1.05 }}
          >
            Mari Bekerja<br />
            <span style={{ color: "#FF70BF" }}>Sama ✦</span>
          </h1>
          <p className="text-xl max-w-lg leading-relaxed" style={{ color: "#888" }}>
            Punya ide proyek menarik? Butuh bantuan desain atau development?
            Saya siap mendengarkan dan membantu!
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-10 pb-24 px-6" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Left: Info */}
          <div>
            <h2 className="text-2xl font-black mb-8" style={{ color: "#1a1a1a" }}>
              Informasi Kontak
            </h2>

            <div className="space-y-4 mb-12">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-5 p-5 rounded-2xl transition-all hover:-translate-y-0.5"
                  style={{
                    border: "1.5px solid rgba(255,112,191,0.15)",
                    background: "#fff",
                    boxShadow: "0 2px 12px rgba(255,112,191,0.05)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: "rgba(255,112,191,0.1)" }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold mb-0.5" style={{ color: "#bbb" }}>
                      {info.label}
                    </p>
                    <p className="text-sm font-bold mb-0.5" style={{ color: "#1a1a1a" }}>
                      {info.value}
                    </p>
                    <p className="text-xs" style={{ color: "#aaa" }}>
                      {info.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability */}
            <div
              className="rounded-3xl p-6"
              style={{ background: "#FF70BF" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-white/50 inline-block" />
                <span className="text-sm font-black text-white">Status Sekarang</span>
              </div>
              <p className="text-2xl font-black text-white mb-2">Tersedia ✦</p>
              <p className="text-sm text-white/80 leading-relaxed">
                Saya sedang terbuka untuk proyek freelance, internship, maupun
                kolaborasi jangka panjang. Response time: &lt; 24 jam.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <h2 className="text-2xl font-black mb-8" style={{ color: "#1a1a1a" }}>
              Kirim Pesan
            </h2>

            {sent ? (
              <div
                className="rounded-3xl p-12 text-center"
                style={{ border: "1.5px solid rgba(255,112,191,0.2)", background: "#fff8fc" }}
              >
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-black mb-3" style={{ color: "#FF70BF" }}>
                  Pesan Terkirim!
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
                  Terima kasih sudah menghubungi saya. Saya akan membalas dalam 1x24 jam ya!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Email */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold mb-2" style={{ color: "#888" }}>
                      Nama *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Nama kamu"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-2xl px-4 py-3 text-sm outline-none transition-all"
                      style={{
                        background: "#fff8fc",
                        border: "1.5px solid rgba(255,112,191,0.2)",
                        color: "#1a1a1a",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-2" style={{ color: "#888" }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email kamu"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-2xl px-4 py-3 text-sm outline-none transition-all"
                      style={{
                        background: "#fff8fc",
                        border: "1.5px solid rgba(255,112,191,0.2)",
                        color: "#1a1a1a",
                      }}
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-xs font-bold mb-2" style={{ color: "#888" }}>
                    Jenis Layanan
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm({ ...form, service: s })}
                        className="px-4 py-2 rounded-full text-xs font-bold transition-all"
                        style={{
                          background: form.service === s ? "#FF70BF" : "transparent",
                          color: form.service === s ? "#fff" : "#888",
                          border: form.service === s
                            ? "1.5px solid #FF70BF"
                            : "1.5px solid rgba(255,112,191,0.25)",
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-xs font-bold mb-2" style={{ color: "#888" }}>
                    Estimasi Budget
                  </label>
                  <select
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className="w-full rounded-2xl px-4 py-3 text-sm outline-none"
                    style={{
                      background: "#fff8fc",
                      border: "1.5px solid rgba(255,112,191,0.2)",
                      color: form.budget ? "#1a1a1a" : "#aaa",
                    }}
                  >
                    <option value="">Pilih range budget</option>
                    <option>Rp 500rb – Rp 1jt</option>
                    <option>Rp 1jt – Rp 3jt</option>
                    <option>Rp 3jt – Rp 5jt</option>
                    <option>Rp 5jt+</option>
                    <option>Diskusi lebih lanjut</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold mb-2" style={{ color: "#888" }}>
                    Ceritakan Proyekmu *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Halo Rizka, saya ingin mendiskusikan proyek..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-2xl px-4 py-3 text-sm outline-none resize-none"
                    style={{
                      background: "#fff8fc",
                      border: "1.5px solid rgba(255,112,191,0.2)",
                      color: "#1a1a1a",
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl font-black text-base transition-all hover:scale-[1.02]"
                  style={{
                    background: "#FF70BF",
                    color: "#fff",
                    boxShadow: "0 6px 24px rgba(255,112,191,0.4)",
                  }}
                >
                  Kirim Pesan ✦
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}