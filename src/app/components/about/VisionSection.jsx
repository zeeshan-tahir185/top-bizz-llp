"use client";
import { Card } from 'antd';
import { FaEye } from 'react-icons/fa';

export default function VisionSection() {
  return (
    <section className="py-16 bg-gray-100 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-14973662105479-4275897d005e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      ></div>
      <div className="relative max-w-[1440px] mx-auto w-full px-4">
        <Card className="border-0 shadow-lg rounded-lg bg-white/95 backdrop-blur-sm">
          <div className="flex flex-col gap-8 md:flex-row items-center">
            <div className="md:w-1/2">
              <img
                src="/images/img4.avif"
                alt="Innovation Technology"
                className="h-[200px] w-full rounded-lg object-cover shadow-md md:h-[300px]"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="mb-4 flex items-center gap-3 text-3xl !font-bold text-gray-800 md:text-4xl">
                 Our Vision
              </h2>
              <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                To accelerate the supply of high-value machinery and pave the way for local manufacturing in Pakistan, upholding the highest international standards. We aim to drive innovation and self-reliance by building a strong foundation for advanced technology solutions, supporting industries, and contributing to national progress.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}