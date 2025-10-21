"use client";
import { Card } from 'antd';
import { FaBuilding } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1440px] w-full mx-auto px-4">
        <h2 className="text-3xl md:text-4xl !font-bold text-gray-800 text-center mb-12 flex items-center justify-center gap-3">
          <FaBuilding className="text-blue-600 text-3xl" /> About Top Biz LLP
        </h2>
        <Card className="shadow-lg border-0 rounded-lg">
          <div className="text-gray-600 text-base md:text-lg leading-relaxed">
            <p className="mb-4">
              Welcome to Top Biz LLP, your trusted partner for comprehensive General Order Supplies, Import-Export solutions and Government. We are a registered Limited Liability Partnership concern company based in Rawalpindi, Punjab, serving a broad spectrum of industries with reliability and precision.
            </p>
            <p className="mb-4">
              We take pride in being an established General Order Supplier, Stockiest, Agent, and Supplier. We collaborate closely with respected government, providing a wide range of essential supplies—from everyday office necessities to sophisticated machinery, specialized spares, optical transmission equipment, telecommunication equipment, electronics, ICT equipment, robotics, and advanced technology.
            </p>
            <p className="mb-4">
              Top Biz is also involved in Electronics, Electrical, Mechanical, and R&D projects with the help of our JV Partner companies.
            </p>
            <p>
              Top Biz is committed to delivering cost-effective and high-quality solutions. With a focus on both routine and specialized requirements, we are dedicated to ensuring our clients receive dependable, tailored solutions that meet their unique demands.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}