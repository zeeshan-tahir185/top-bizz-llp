"use client";
import Link from "next/link";

// Footer uses the new site's design (dark footer, cyan/navy accent) with Top
// Biz branding and the existing site's links/routes. Built with Tailwind to
// avoid the Bootstrap `.container` clash present in this project.
export default function Footer() {
  const year = new Date().getFullYear();

  const explore = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#0b1120] text-gray-300 custom_link">
      {/* Top accent line (navy → cyan) */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#0a1f4b] via-[#0db1ff] to-[#0a1f4b]" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand & about */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-3">
              <img
                src="/images/logo.png"
                alt="Top Biz LLP logo"
                className="w-[150px] object-contain"
              />
            </Link>
            <p className="text-sm max-w-md mb-4">
              Your trusted partner for general order supplies, import-export
              solutions, software development, and more.
            </p>
            <p className="text-sm mb-1">
              <a className="hover:text-[#0db1ff] transition-colors" href="mailto:info@topbizllp.pk">
                info@topbizllp.pk
              </a>
            </p>
            <p className="text-sm">
              <a className="hover:text-[#0db1ff] transition-colors" href="tel:+92518777600">
                +92 51 8777600
              </a>
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm !p-0">
              {explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#0db1ff] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in touch</h3>
            <p className="text-sm mb-3">
              761, Lane 7-E, Gulistan Colony, Near Joyland, Rawalpindi
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-full bg-gradient-to-r from-[#0a1f4b] to-[#0db1ff] text-white text-sm font-medium px-5 py-2 transition-all duration-300 hover:scale-105"
            >
              Request a proposal
            </Link>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />
        <p className="text-center text-sm text-gray-400">
          © {year} Top Biz LLP. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
