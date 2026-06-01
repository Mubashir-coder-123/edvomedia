// Header.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact Us", to: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6%] py-5 backdrop-blur-xl bg-[rgba(7,5,15,0.8)] border-b border-[rgba(139,60,247,0.15)]">

        {/* Logo — hamesha rehga */}
        <div
          className="font-extrabold text-2xl text-[#f0ede8] flex-shrink-0"
          style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-1px" }}
        >
          EDVO{" "}
          <span
            className="bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
          >
            MEDIA
          </span>
        </div>

        {/* Desktop Nav Links — md+ par dikhega */}
        <ul className="hidden md:flex gap-9 list-none text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className="relative text-[#8b84a0] no-underline transition-colors duration-200 hover:text-[#f0ede8] group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — md+ par dikhega */}
        <a
          href="https://calendly.com/syedmaazofficail/30min"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block bg-gradient-to-br from-[#8b3cf7] to-[#e040fb] text-white no-underline px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(139,60,247,0.55)]"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          📞 Book a Free Call
        </a>

        {/* Hamburger — sirf mobile par, fixed size */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden flex-shrink-0 w-10 h-10 flex flex-col justify-center items-center gap-[6px] rounded-lg border border-[rgba(139,60,247,0.3)] bg-[rgba(139,60,247,0.1)]"
          aria-label="Open menu"
        >
          <span className="block w-5 h-[2px] bg-[#c084fc] rounded-full" />
          <span className="block w-5 h-[2px] bg-[#c084fc] rounded-full" />
          <span className="block w-5 h-[2px] bg-[#c084fc] rounded-full" />
        </button>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[998] bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-[999] bg-[#0e0b1a] border-l border-[rgba(139,60,247,0.2)] flex flex-col px-8 py-8 transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Top */}
        <div className="flex items-center justify-between mb-10">
          <div
            className="font-extrabold text-xl text-[#f0ede8]"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-1px" }}
          >
            EDVO{" "}
            <span
              className="bg-gradient-to-r from-[#8b3cf7] to-[#e040fb] bg-clip-text text-transparent"
              style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              MEDIA
            </span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-[rgba(139,60,247,0.25)] bg-[rgba(139,60,247,0.08)] text-[#c084fc]"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="list-none flex flex-col gap-2 flex-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="block text-[#8b84a0] no-underline text-base font-medium py-3 px-4 rounded-xl transition-all duration-200 hover:text-[#f0ede8] hover:bg-[rgba(139,60,247,0.1)]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sidebar CTA */}
        <a
          href="https://calendly.com/syedmaazofficail/30min"
          target="_blank"
          rel="noreferrer"
          onClick={() => setMenuOpen(false)}
          className="mt-6 bg-gradient-to-br from-[#8b3cf7] to-[#e040fb] text-white no-underline px-6 py-3.5 rounded-full text-sm font-bold text-center transition-all duration-200 hover:shadow-[0_8px_32px_rgba(139,60,247,0.55)]"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          📞 Book a Free Call
        </a>
      </div>
    </>
  );
}