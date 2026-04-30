"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Portfolio", href: "/portofolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(255,112,191,0.2)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-black text-xl tracking-tight"
          style={{ letterSpacing: "-1px" }}
        >
          <span style={{ color: "#FF70BF" }}>rizka</span>
          <span style={{ color: "#1a1a1a" }}>.</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200 relative group"
                  style={{ color: isActive ? "#FF70BF" : "#555" }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-[2px] transition-all duration-300"
                    style={{
                      width: isActive ? "100%" : "0",
                      background: "#FF70BF",
                    }}
                  />
                  <span
                    className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300"
                    style={{ background: "#FF70BF" }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105"
          style={{
            background: "#FF70BF",
            color: "#fff",
            boxShadow: "0 4px 20px rgba(255,112,191,0.35)",
          }}
        >
          Hire Me ✦
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: "#FF70BF",
                transform:
                  i === 0 && menuOpen ? "rotate(45deg) translateY(8px)" :
                  i === 2 && menuOpen ? "rotate(-45deg) translateY(-8px)" : "",
                opacity: i === 1 && menuOpen ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "400px" : "0",
          background: "rgba(255,255,255,0.98)",
          borderTop: menuOpen ? "1px solid rgba(255,112,191,0.15)" : "none",
        }}
      >
        <ul className="flex flex-col px-6 py-5 gap-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-semibold block"
                style={{ color: pathname === link.href ? "#FF70BF" : "#1a1a1a" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold"
              style={{ background: "#FF70BF", color: "#fff" }}
            >
              Hire Me ✦
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}