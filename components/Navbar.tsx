"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Studio", href: "#studio" },
  { label: "News", href: "#news" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-stone-200/70"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12 md:py-6">
        <a
          href="#top"
          className={`text-lg font-medium tracking-tight transition-colors duration-300 ${
            scrolled ? "text-ink" : "text-white"
          }`}
        >
          Regan<span className="font-light"> Construction</span>
        </a>

        <ul
          className={`hidden items-center gap-10 text-sm md:flex transition-colors duration-300 ${
            scrolled ? "text-stone-600" : "text-white/80"
          }`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative py-1 transition-colors duration-300 hover:text-current"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-current transition-all duration-500 ease-smooth group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`hidden text-sm tracking-wide md:inline-block transition-colors duration-300 ${
            scrolled
              ? "text-ink hover:opacity-60"
              : "text-white hover:opacity-70"
          }`}
        >
          Contact ↗
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden transition-colors duration-300 ${
            scrolled ? "text-ink" : "text-white"
          }`}
        >
          <span
            className={`block h-px w-6 bg-current transition-all duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-all duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-500 ease-smooth md:hidden ${
          open ? "max-h-[80vh] border-t border-stone-200" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-stone-100 py-4 text-2xl font-light tracking-tight text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block py-4 text-2xl font-light tracking-tight text-ink"
            >
              Contact ↗
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
