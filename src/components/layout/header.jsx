"use client";

import Link from "next/link";
import { useState } from "react";

export default function HeaderComponent() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full px-4 sm:px-8 py-4">
      <div className="w-full flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-white/20 border border-white/30 backdrop-blur-md flex items-center justify-center shadow-lg shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="6" stroke="white" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
            </svg>
          </div>
          <span className="text-white font-bold text-base sm:text-lg tracking-wide drop-shadow-md">
            Freefalkers
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-8">
            <li>
              <Link href="/" className="text-white font-semibold text-sm px-4 py-1.5 rounded-full border border-white/40 bg-white/10 backdrop-blur-md shadow hover:bg-white/20 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white/80 font-medium text-sm hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/follow-unfollow" className="text-white/80 font-medium text-sm hover:text-white transition">
                Freefalkers
              </Link>
            </li>
            <li>
              <Link href="/pending-requests" className="text-white/80 font-medium text-sm hover:text-white transition">
                Requests
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white font-semibold text-sm px-4 py-1.5 rounded-full bg-white/25 border border-white/40 backdrop-blur-md shadow hover:bg-white/35 transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-lg shadow-xl px-6 py-4">
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)} className="block text-white font-semibold text-sm py-1">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)} className="block text-white/80 font-medium text-sm py-1 hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/follow-unfollow" onClick={() => setMenuOpen(false)} className="block text-white/80 font-medium text-sm py-1 hover:text-white transition">
                Freefalkers
              </Link>
            </li>
            <li>
              <Link href="/pending-requests" onClick={() => setMenuOpen(false)} className="block text-white/80 font-medium text-sm py-1 hover:text-white transition">
                Requests
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="block text-white font-semibold text-sm py-1 hover:text-white/70 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}