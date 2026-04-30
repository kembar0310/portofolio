import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1a1a1a" }} className="py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link
          href="/"
          className="font-black text-xl"
          style={{ color: "#FF70BF", letterSpacing: "-1px" }}
        >
          rizka<span style={{ color: "#555" }}>.</span>
        </Link>

        <p className="text-sm" style={{ color: "#555" }}>
          © 2026{" "}
          <span style={{ color: "#FF70BF" }}>Rizka Upa' Mallisa'</span>
          {" "}— Designed with ♥
        </p>

        <div className="flex gap-6">
          {["LinkedIn", "GitHub", "Dribbble", "Instagram"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-sm font-medium transition-colors hover:text-white"
              style={{ color: "#555" }}
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}