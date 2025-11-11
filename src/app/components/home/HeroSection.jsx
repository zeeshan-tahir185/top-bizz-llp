"use client";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
  const ref = useRef(null);

  // Parallax background slow motion
  useAnimationFrame((t) => {
    const y = Math.sin(t / 2000) * 15; // gentle vertical motion
    if (ref.current) ref.current.style.transform = `translateY(${y}px)`;
  });

  return (
    <section className="relative min-h-[calc(100vh-75px)] flex flex-col justify-center overflow-hidden bg-black text-center">
      {/* Animated background image */}
      <motion.div
        ref={ref}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: "url('/images/data/img2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </motion.div>

      {/* Floating glowing particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#2A338E] to-[#B52B32] opacity-70 blur-[2px]"
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + i * 0.5,
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

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold !text-white mb-6 leading-tight tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
        >
          Innovate with{" "}
          <span className="relative">
            <span className="text-white !text-white relative z-10">
              TOP BIZ LLP
            </span>
            {/* Glowing underline effect */}
            <span className="absolute left-0 right-0 bottom-0 h-[3px] bg-gradient-to-r from-[#2A338E] to-[#B52B32] rounded-full blur-[2px] animate-pulse" />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-base md:text-lg !text-white max-w-3xl mx-auto mb-10 leading-relaxed opacity-95"
        >
          At Top Biz LLP, our vision is simple: to drive progress and innovation
          through advanced technology solutions. From partnerships with
          government to sourcing cutting-edge machinery and robotics, we’re
          dedicated to supporting Pakistan’s growth in technology.
          <br />
          <br />
          We foster strong relationships founded on trust, quality, and
          precision — delivering value, enhancing capabilities, and empowering
          our clients to succeed in a tech-driven world.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link href="/services">
            <button className="relative overflow-hidden bg-gradient-to-r from-[#2A338E] to-[#B52B32] !text-white font-semibold px-8 py-3 text-lg rounded-full! shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(42,51,142,0.6)]">
              Explore Our Services
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
