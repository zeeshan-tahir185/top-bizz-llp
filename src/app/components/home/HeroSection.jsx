"use client";
import Link from 'next/link';
import { Button } from 'antd';

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-75px)] flex flex-col justify-center 2xl:min-h-auto 2xl:py-[100px]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/data/img2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-65"></div>
      </div>
      <div className="relative max-w-[1440px] w-full mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl !font-extrabold text-white mb-6 tracking-tight">
          Innovate with TOP BIZ LLP
        </h1>
        <p className="text-base md:text-lg text-white max-w-3xl mx-auto mb-10 leading-relaxed opacity-90">
          At Top Biz LLP, our vision is simple: to drive progress and innovation through the delivery of advanced technology solutions. From our partnerships with government to sourcing cutting-edge machinery and robotics, we’re dedicated to supporting Pakistan's growth in technology.
          <br /><br />
          We believe in fostering strong relationships with our clients and partners, founded on trust, quality, and precision. As we continue to evolve, our commitment remains steadfast – delivering value, enhancing capabilities, and empowering our clients to succeed in an increasingly tech-driven world.
          <br /><br />
          Thank you for being part of our journey toward a brighter, more innovative future.
        </p>
        <Link href="/services">
          <Button
            type="primary"
            size="large"
            className="bg-white text-blue-600 hover:!bg-gray-100 hover:!text-blue-700 font-semibold px-8 py-3 text-lg rounded-full transition-all duration-300"
          >
            Explore Our Services
          </Button>
        </Link>
      </div>
    </section>
  );
}