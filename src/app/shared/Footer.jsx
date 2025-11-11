"use client";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden pt-16 custom_link">
      {/* Floating gradient particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-3 h-3 rounded-full !bg-gradient-to-r from-[#2A338E] to-[#B52B32] opacity-20 blur-lg"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 7 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1440px] mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:!text-left">
          {/* Logo & About */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-[140px] !hover:scale-105 !transition-transform !duration-300"
              />
            </Link>
            <p className="!text-gray-300 !text-base mb-6">
              Your trusted partner for general order supplies, import-export solutions, software development, and more.
            </p>
            <div className="flex gap-4 justify-center md:justify-start ">
              {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  className="!text-gray-300 !hover:!text-[#B52B32] !text-xl !transition-all !duration-300"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="!text-xl !font-bold mb-4 !text-white">Quick Links</h3>
            <ul className="space-y-2 !p-0">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact Us", href: "/contact" },
              ].map((link, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="!text-[#2A338E] !hover:!text-[#B52B32] !cursor-pointer !transition-all !duration-300"
                >
                  <Link className="!text-gray-300" href={link.href}>{link.name}</Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="!text-xl !font-bold mb-4 !text-white">Contact Info</h3>
            <ul className="space-y-4">
              <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3 !cursor-pointer">
                <FaPhone className="!text-gray-300" />
                <span className="!text-gray-300">+92 51 8777600</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3 !cursor-pointer">
                <FaEnvelope className="!text-gray-300" />
                <span className="!text-gray-300">info@topbizllp.pk</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3 !cursor-pointer text-left">
                <FaMapMarkerAlt className="!text-gray-300" />
                <span className="!text-gray-300">761, Lane 7-E, Gulistan Colony, Near Joyland, Rawalpindi</span>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="border-t border-gray-700 mt-10 py-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="!text-gray-400 !text-sm"
          >
            &copy; {new Date().getFullYear()} TOP BIZ LLP. All Rights Reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
