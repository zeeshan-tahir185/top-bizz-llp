"use client";
import Link from 'next/link';
import { Button } from 'antd';
import { FaArrowRight } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1440px] w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl !font-bold text-gray-800 mb-6">
              About Top Biz LLP
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
              Welcome to Top Biz LLP, your trusted partner for comprehensive General Order Supplies, Import-Export solutions and Government. We are a registered Limited Liability Partnership concern. company based in Rawalpindi, Punjab, serving a broad spectrum of industries with reliability and precision.
            </p>
            <Link href="/about">
              <Button
                type="primary"
                size="large"
                className="bg-blue-600 hover:!bg-blue-700 flex items-center gap-2"
              >
                Learn More <FaArrowRight />
              </Button>
            </Link>
          </div>
          <div className="order-first md:order-last">
            <img
              src="/images/img1.avif"
              alt="Technology Solutions"
              className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}