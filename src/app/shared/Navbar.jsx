"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// Header reproduces the new site's navbar exactly (white bar with bottom
// border, centered container, brand on the left, plain nav links on the right
// and a gradient "Request Proposal" button) using Top Biz branding and the
// existing site's tabs + routes.
//
// Written with Tailwind rather than Bootstrap markup because Bootstrap's
// `.container` / navbar-collapse clashes with Tailwind's `.container` utility
// in this project, which was hiding the tabs entirely.
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white border-b border-[#dee2e6] custom_navbar">
      <div className="max-w-[1320px] mx-auto px-3 flex items-center justify-between min-h-[74px]">
        {/* Brand */}
        <Link href="/" className="flex items-center py-2">
          <img
            src="/images/logo.png"
            alt="Top Biz LLP"
            className="!h-[42px] !w-auto !object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="!text-[rgba(0,0,0,0.55)] hover:!text-[#0db1ff] !transition-colors px-3 py-2"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ms-3 ml-3 !rounded-[0.375rem] !bg-gradient-to-r !from-[#0a1f4b] !to-[#0db1ff] !text-white px-3 py-[0.375rem] !transition-all !duration-200 hover:!brightness-110"
          >
            Request Proposal
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden !text-[rgba(0,0,0,0.55)] border border-[#dee2e6] rounded px-2 py-1"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-[#dee2e6] px-4 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block !text-[rgba(0,0,0,0.55)] hover:!text-[#0db1ff] py-2"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="inline-block mt-2 !rounded-[0.375rem] !bg-gradient-to-r !from-[#0a1f4b] !to-[#0db1ff] !text-white px-3 py-[0.375rem]"
          >
            Request Proposal
          </Link>
        </div>
      )}
    </header>
  );
}
