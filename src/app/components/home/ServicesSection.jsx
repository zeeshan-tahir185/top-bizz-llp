"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaRobot, FaMicrochip, FaShip, FaTools } from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      title: "Robotics & Automation Solutions",
      description:
        "We supply cutting-edge robotics and drones, alongside custom R&D solutions, to enhance industrial automation and surveillance with advanced technology.",
      icon: <FaRobot className="!text-4xl !text-[#2A338E]" />,
    },
    {
      title: "Electronics Engineering Services",
      description:
        "Our expertise in RF circuits, DSP, FPGA design, and embedded systems delivers innovative solutions for military, medical, and commercial applications.",
      icon: <FaMicrochip className="!text-4xl !text-[#2A338E]" />,
    },
    {
      title: "Naval Engineering & Platform Integration",
      description:
        "Our engineering division provides design support, integration, and modernization services for naval vessels and marine platforms.",
      icon: <FaShip className="!text-4xl !text-[#2A338E]" />,
    },
    {
      title: "Legacy Systems Modernisation & Reverse Engineering",
      description:
        "We restore, upgrade, and re-engineer obsolete naval and marine subsystems through advanced reverse-engineering tools.",
      icon: <FaTools className="!text-4xl !text-[#2A338E]" />,
    },
  ];

  return (
    <section className="!py-20 !bg-gradient-to-b from-white via-[#f8f9ff] to-[#eef0ff] relative overflow-hidden">
      {/* Floating gradient particles for cinematic background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 rounded-full !bg-gradient-to-r from-[#2A338E] to-[#B52B32] opacity-40 blur-[3px]"
            animate={{
              y: [0, -60, 0],
              x: [0, 30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 7 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.25,
              ease: "easeInOut",
            }}
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="!text-3xl md:!text-4xl !font-extrabold !text-[#2A338E] text-center !mb-14"
        >
          Our Services
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 35px rgba(42,51,142,0.25), 0 0 50px rgba(181,43,50,0.15)",
              }}
              className="!bg-white/80 !backdrop-blur-sm !rounded-2xl !shadow-lg !p-6 flex flex-col items-center text-center 
              !transition-all !duration-300 border border-transparent hover:!border-[#2A338E]/20 hover:!bg-white"
            >
              <div className="!mb-4">{service.icon}</div>
              <h3 className="!text-xl !font-semibold !text-[#2A338E] !mb-3">
                {service.title}
              </h3>
              <p className="!text-gray-700 !text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-14">
          <Link href="/services">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(42,51,142,0.5)",
              }}
              className="!bg-gradient-to-r !from-[#2A338E] !to-[#B52B32] !text-white !font-semibold px-10 py-3 !rounded-full 
              !transition-all !duration-300 !shadow-md hover:!shadow-lg"
            >
              View All Services
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
