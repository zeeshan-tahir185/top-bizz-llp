"use client";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

export default function MissionSection() {
  return (
    <section className="!relative !py-20 !bg-gradient-to-br !from-gray-900 !to-gray-800 !overflow-hidden">
      {/* Decorative circles */}
      <div className="!absolute !top-10 !left-10 !w-32 !h-32 !bg-blue-600/20 !rounded-full !blur-3xl"></div>
      <div className="!absolute !bottom-10 !right-10 !w-40 !h-40 !bg-cyan-500/20 !rounded-full !blur-3xl"></div>

      <div className="!relative !max-w-[1440px] !w-full !mx-auto !px-6 !flex !flex-col md:!flex-row !items-center !gap-12">
        {/* Image Section */}
        <motion.div
          className="!md:w-1/2 !w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/img3.avif"
            alt="Mission - Innovation"
            className="!rounded-3xl !shadow-2xl !w-full !h-[300px] md:!h-[400px] !object-cover !border-[3px] !border-white/20"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="!md:w-1/2 !w-full !text-white"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="!text-3xl md:!text-4xl !font-extrabold !mb-6 !flex !items-center !gap-3">
            <FaRocket className="!text-blue-400 !text-4xl" />
            Our Mission
          </h2>

          <p className="!text-base md:!text-lg !leading-relaxed !text-gray-200 !mb-4">
            Our mission is to stand among Pakistan’s leading suppliers,
            importers, exporters, and government contractors — providing
            reliable, efficient, and high-quality solutions across industries.
          </p>

          <p className="!text-base md:!text-lg !leading-relaxed !text-gray-300 !mb-4">
            We aim to build lasting partnerships with clients through innovation,
            transparency, and service excellence, ensuring every project we
            undertake adds value and progress to our clients’ goals.
          </p>

          <p className="!text-base md:!text-lg !leading-relaxed !text-gray-300">
            By continuously adopting advanced technology and ethical business
            practices, Top Biz LLP strives to be a symbol of trust and
            innovation in every field we serve.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
