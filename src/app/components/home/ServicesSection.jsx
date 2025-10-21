"use client";
import Link from 'next/link';
import { Card, Button } from 'antd';
import { FaTools, FaRobot, FaMicrochip } from 'react-icons/fa';

export default function ServicesSection() {
  const services = [
    {
      title: 'General Order Supplier',
      description:
        'We source and deliver high-quality equipment, from office essentials to advanced machinery, optical cables, and robotics spares, ensuring reliability and precision.',
      icon: <FaTools className="text-4xl text-blue-600" />,
    },
    {
      title: 'Robotics & Automation Solutions',
      description:
        'We supply cutting-edge robotics and drones, alongside custom R&D solutions, to enhance industrial automation and surveillance with advanced technology.',
      icon: <FaRobot className="text-4xl text-blue-600" />,
    },
    {
      title: 'Electronics Engineering Services',
      description:
        'Our expertise in RF circuits, DSP, FPGA design, and embedded systems delivers innovative solutions for military, medical, and commercial applications.',
      icon: <FaMicrochip className="text-4xl text-blue-600" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-[1440px] w-full mx-auto px-4">
        <h2 className="text-3xl md:text-4xl !font-bold text-gray-800 text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              hoverable
              className="shadow-md border-0 rounded-lg overflow-hidden"
              bodyStyle={{ padding: '24px' }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base mb-4">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/services">
            <Button
              type="primary"
              size="large"
              className="bg-blue-600 hover:!bg-blue-700"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}