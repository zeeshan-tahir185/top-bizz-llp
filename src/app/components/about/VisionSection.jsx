"use client";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";

export default function VisionSection() {
  return (
    <section className="!relative !py-20 !bg-gradient-to-br !from-white !to-gray-100 !overflow-hidden">
      {/* Decorative background gradient blobs */}
      <div className="!absolute !top-20 !right-20 !w-44 !h-44 !bg-blue-200/40 !rounded-full !blur-3xl"></div>
      <div className="!absolute !bottom-20 !left-20 !w-60 !h-60 !bg-cyan-200/40 !rounded-full !blur-3xl"></div>

      <div className="!relative !max-w-[1440px] !w-full !mx-auto !px-6 !flex !flex-col md:!flex-row-reverse !items-center !gap-12">
        {/* Image Section */}
        <motion.div
          className="!md:w-1/2 !w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/img4.avif"
            alt="Vision - Future Growth"
            className="!rounded-3xl !shadow-2xl !w-full !h-[300px] md:!h-[400px] !object-cover !border-[3px] !border-gray-200/50"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="!md:w-1/2 !w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="!bg-white/70 !backdrop-blur-lg !p-8 !rounded-3xl">
            <h2 className="!text-3xl md:!text-4xl !font-extrabold !text-gray-800 !mb-6 !flex !items-center !gap-3">
              <FaEye className="!text-blue-600 !text-4xl" />
              Our Vision
            </h2>
            <p className="!text-base md:!text-lg !leading-relaxed !text-gray-700 !mb-4">
              Our vision is to accelerate the supply of high-value machinery and
              foster local manufacturing in Pakistan — upholding the highest
              international standards of excellence and innovation.
            </p>
            <p className="!text-base md:!text-lg !leading-relaxed !text-gray-700 !mb-4">
              We aspire to empower industries through advanced technology,
              research, and strategic collaboration, making Pakistan a
              self-reliant hub for quality engineering and industrial solutions.
            </p>
            <p className="!text-base md:!text-lg !leading-relaxed !text-gray-700">
              Through innovation, integrity, and continuous improvement, Top Biz
              LLP envisions contributing to national growth, sustainability, and
              global competitiveness.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
