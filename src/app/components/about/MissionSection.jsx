"use client";
import { Card } from 'antd';
import { FaRocket } from 'react-icons/fa';

export default function MissionSection() {
  return (
    <section className="py-16 bg-gray-100 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      ></div>
      <div className="relative max-w-[1440px] mx-auto w-full px-4">
        <Card className="border-0 shadow-lg rounded-lg bg-white/95 backdrop-blur-sm">
          <div className="flex flex-col gap-8 md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="mb-4 flex items-center gap-3 text-3xl !font-bold text-gray-800 md:text-4xl">
                 Our Mission
              </h2>
              <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                Our mission is to be among the top suppliers, importers, exporters, and government in Pakistan. We aim to build long-lasting relationships with our clients by providing dependable, efficient, cost-effective, and innovative solutions.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/images/img3.avif"
                alt="Technology Innovation"
                className="h-[200px] w-full rounded-lg object-cover shadow-md md:h-[300px]"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}