"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaTools,
  FaMicrochip,
  FaWrench,
  FaCogs,
  FaSearch,
  FaRobot,
  FaSatelliteDish,
  FaHospital,
  FaShip,
} from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      title: "Robotics & Automation Solutions",
      description:
        "Supplying advanced robotics and drones, plus custom R&D solutions for industrial automation and surveillance.",
      icon: <FaRobot className="!text-4xl !text-[#2A338E]" />,
      link: "#",
    },
    {
      title: "Electronics Engineering Services",
      description:
        "Designing RF circuits, DSP, FPGA, and embedded systems for military, medical, and commercial applications.",
      icon: <FaCogs className="!text-4xl !text-[#2A338E]" />,
      link: "#",
    },
    {
      title: "Naval Engineering & Platform Integration",
      description:
        "Design support, integration, and modernization for naval vessels and marine platforms, ensuring operational and safety standards.",
      icon: <FaShip className="!text-4xl !text-[#2A338E]" />,
      link: "#",
    },
    {
      title: "Legacy Systems Modernisation & Reverse Engineering",
      description:
        "Restoring and upgrading obsolete naval and marine subsystems with advanced reverse-engineering tools.",
      icon: <FaSearch className="!text-4xl !text-[#2A338E]" />,
      link: "#",
    },
    {
      title: "General Order Supplier",
      description:
        "Sourcing high-quality equipment from office essentials to advanced machinery, optical cables, and robotics spares.",
      icon: <FaTools className="!text-4xl !text-[#2A338E]" />,
      link: "#",
    },
    {
      title: "Electronics Repair Services",
      description:
        "Restoring industrial and medical electronics like control equipment and telecom devices for minimal downtime.",
      icon: <FaMicrochip className="!text-4xl !text-[#2A338E]" />,
      link: "#",
    },
    {
      title: "STEM Education Platform",
      description:
        "Offering scalable LMS deployment with role-based access, interactive content tools, and secure data management.",
      icon: <FaWrench className="!text-4xl !text-[#2A338E]" />,
      link: "/lms",
    },
    {
      title: "PCB Design & Assembly",
      description:
        "Delivering high-speed, multi-layer PCBs for sensitive applications with comprehensive DFM/DFT reviews.",
      icon: <FaCogs className="!text-4xl !text-[#2A338E]" />,
      link: "#",
    },
    {
      title: "Specialized Products",
      description:
        "Offering innovative tech like LiDAR surveillance stations, smart weather stations, and rugged vehicles.",
      icon: <FaSatelliteDish className="!text-4xl !text-[#2A338E]" />,
      link: "#",
    },
    {
      title: "Hospital Supply Solutions",
      description:
        "Providing dental materials, medical equipment, and general hospital supplies with reliability.",
      icon: <FaHospital className="!text-4xl !text-[#2A338E]" />,
      link: "#",
    },
  ];

  return (
    <section className="!py-20 !bg-black/5 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 rounded-full !bg-gradient-to-r from-[#2A338E] to-[#B52B32] opacity-70 blur-[2px]"
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.1,
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
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="!text-3xl md:!text-4xl !font-extrabold !text-[#2A338E] text-center !mb-12"
        >
          Our Comprehensive Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="!bg-white !rounded-xl !shadow-xl !p-6 flex flex-col items-center text-center !transition-all !duration-300 hover:!scale-105 hover:!shadow-[0_0_25px_rgba(42,51,142,0.3)] relative overflow-hidden"
            >
              <Link href={service.link} className="!no-underline">
                <div className="absolute right-0 top-0 h-16 w-16 !bg-[#2A338E]/10 rounded-bl-full"></div>
                <div className="!mb-4">{service.icon}</div>
                <h3 className="!text-xl !font-semibold !text-[#2A338E] !mb-3">
                  {service.title}
                </h3>
                <p className="!text-gray-700 !text-base">{service.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(42,51,142,0.6)",
              }}
              className="!bg-gradient-to-r !from-[#2A338E] !to-[#B52B32] !text-white !font-semibold px-8 py-3 !rounded-full !transition-all !duration-300"
            >
              Get in Touch
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
