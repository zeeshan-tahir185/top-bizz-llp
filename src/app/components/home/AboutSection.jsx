"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="!py-20 bg-gradient-to-b from-[#f8f9ff] via-white to-[#eef0ff] custom_link">
      <div className="max-w-[1440px] w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="!order-last md:!order-first text-center md:!text-left flex flex-col gap-3"
          >
            <h2 className="!text-3xl md:!text-4xl !font-extrabold !text-[#2A338E] mb-6 !leading-tight">
              About Top Biz LLP
            </h2>
            <div className="flex flex-col gap-2">
              <p className="!text-base  !text-gray-700 mb-6 !leading-relaxed">
                Welcome to Top Biz LLP, your trusted partner for General Order
                Supplies, Import-Export Solutions, and Government Contracting.
                Based in Rawalpindi, Punjab, we serve diverse industries with
                reliability, efficiency, and precision.
              </p>
              <p className="!text-base !text-gray-700 mb-6 !leading-relaxed">
                We take pride in being a recognized General Order Supplier,
                Stockist, and Engineering Service Provider, collaborating with
                esteemed government and private organizations. Our portfolio
                includes a wide range of products and services — from office
                essentials to electrical, mechanical, ICT, telecommunication,
                and advanced electronic equipment.
              </p>
              <p className="!text-base !text-gray-700 mb-6 !leading-relaxed">
                Through our JV Partner companies, Top Biz is also engaged in
                Electronics, Electrical, Mechanical, R&D, and Naval Engineering
                projects, supplying marine electrical systems, control
                equipment, and automation solutions.
              </p>
              <p className="!text-base !text-gray-700 mb-6 !leading-relaxed">
                We are committed to delivering cost-effective, high-quality, and
                tailored solutions, ensuring every client receives dependable
                support for their operational and technical needs.
              </p>
            </div>
            <Link href="/about">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(42,51,142,0.6)",
                }}
                className="!bg-gradient-to-r mx-auto md:!mx-0 !from-[#2A338E] !to-[#B52B32] !text-white !font-semibold px-6 py-3 !rounded-full flex items-center gap-2 !transition-all !duration-300"
              >
                Learn More <FaArrowRight />
              </motion.button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="!order-first md:!order-last"
          >
            <img
              src="/images/img1.avif"
              alt="Technology Solutions"
              className="!w-full !h-[300px] md:!h-[400px] !object-cover !rounded-lg !shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
