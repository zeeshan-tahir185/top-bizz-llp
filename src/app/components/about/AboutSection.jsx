"use client";
import { motion } from "framer-motion";
import { Card } from "antd";
import { FaBuilding } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="!relative !py-24 !bg-gradient-to-br !from-[#1E3A8A] !via-[#2A338E] !to-[#B52B32] !overflow-hidden">
      {/* Animated gradient overlay */}
      <div className="!absolute !inset-0 !opacity-25 !pointer-events-none">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 30% 20%, #ffffff33, transparent 70%)",
              "radial-gradient(circle at 80% 70%, #ffffff22, transparent 70%)",
              "radial-gradient(circle at 50% 50%, #ffffff44, transparent 70%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="!w-full !h-full"
        />
      </div>

      <div className="!max-w-[1280px] !mx-auto !px-6 !relative !z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="!text-3xl md:!text-5xl leading-[60px] !font-bold !text-center !mb-12 !flex !items-center !justify-center !gap-3 !text-white"
        >
          <FaBuilding className="!text-white !text-4xl !drop-shadow-md" />
          <span className="!bg-clip-text !text-transparent !bg-gradient-to-r !from-white !to-gray-200">
            About Top Biz LLP
          </span>
        </motion.h2>

        {/* Card Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="!border-0 !rounded-3xl !shadow-2xl !p-12 !bg-white/90 !backdrop-blur-md hover:!shadow-3xl !transition-all !duration-700">
            <div className="!flex !flex-col !gap-6 !text-gray-700 !text-base !leading-relaxed">
              <p>
                Welcome to{" "}
                <span className="!font-semibold !text-[#2A338E]">
                  Top Biz LLP
                </span>
                , your trusted partner for General Order Supplies,
                Import-Export Solutions, and Government Contracting. Based in
                Rawalpindi, Punjab, we serve diverse industries with reliability,
                efficiency, and precision.
              </p>
              <p>
                We take pride in being a recognized General Order Supplier,
                Stockist, and Engineering Service Provider, collaborating with
                esteemed government and private organizations. Our portfolio
                includes a wide range of products and services — from office
                essentials to electrical, mechanical, ICT, telecommunication,
                and advanced electronic equipment.
              </p>
              <p>
                Through our JV Partner companies,{" "}
                <span className="!font-semibold !text-[#B52B32]">Top Biz</span>{" "}
                is also engaged in Electronics, Electrical, Mechanical, R&D, and
                Naval Engineering projects, supplying marine electrical systems,
                control equipment, and automation solutions.
              </p>
              <p>
                We are committed to delivering cost-effective, high-quality, and
                tailored solutions, ensuring every client receives dependable
                support for their operational and technical needs.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Floating gradient bubbles */}
      <div className="!absolute !inset-0 !z-0 !pointer-events-none !overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.span
            key={i}
            className="!absolute !w-4 !h-4 !rounded-full !bg-gradient-to-r !from-[#2A338E] !to-[#B52B32] !opacity-30 !blur-[3px]"
            animate={{
              y: [0, -70, 0],
              x: [0, 40, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
