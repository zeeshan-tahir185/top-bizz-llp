"use client";
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 ">
      <div className="max-w-[1440px] w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-blue-400 mb-2 inline-block">
              <img src="/images/logo.png" alt="" className='w-[120px]' />
            </Link>
            <p className="text-gray-400 text-base mb-6">
              Your trusted partner for General Order Supplies, Import-Export solutions, and Government in Rawalpindi, Pakistan.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-blue-400 transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <FaPhone className="text-blue-400" />
                <span>051-5451101</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
                <span>info@topbizllp.pk</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Rawalpindi, Punjab, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 py-6 text-center">
          <p className="text-gray-400 text-sm !m-0 !p-0">
            &copy; {new Date().getFullYear()} TOP BIZ LLP. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}