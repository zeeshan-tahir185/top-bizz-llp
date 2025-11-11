"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-white/90 backdrop-blur-md border-b border-transparent h-[90px] custom_navbar">
      {/* Animated gradient border bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#2A338E] via-[#B52B32] to-[#2A338E] animate-[pulse_4s_infinite]" />

      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4 md:px-8 py-3 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-[120px] md:w-[140px] object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.slice(0, -1).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-800! font-medium relative group"
            >
              {link.name}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-[#2A338E] to-[#B52B32] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Gradient Button */}
          <Link
            href="/contact"
            className="relative overflow-hidden rounded-full bg-gradient-to-r from-[#2A338E] to-[#B52B32] text-white font-medium px-5 py-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(42,51,142,0.6)]"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white/99 backdrop-blur-md border-t border-gray-200 !text-gray-800 px-6 py-4 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block font-medium pb-2 hover:text-[#B52B32] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
