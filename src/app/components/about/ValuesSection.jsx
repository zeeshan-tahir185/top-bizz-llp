"use client";
import { Card } from 'antd';
import { FaLightbulb, FaShieldAlt, FaUsers, FaChartLine, FaHeart, FaAward } from 'react-icons/fa';

export default function ValuesSection() {
  const values = [
    {
      title: 'Innovation',
      description: 'We drive progress through cutting-edge technology and creative solutions.',
      icon: <FaLightbulb className="text-3xl text-blue-600" />,
    },
    {
      title: 'Quality',
      description: 'We deliver high-standard products and services with precision.',
      icon: <FaAward className="text-3xl text-blue-600" />,
    },
    {
      title: 'Integrity',
      description: 'We uphold trust and transparency in all our partnerships.',
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
    },
    {
      title: 'Team Work',
      description: 'We collaborate with partners and clients for shared success.',
      icon: <FaUsers className="text-3xl text-blue-600" />,
    },
    {
      title: 'Continuous Growth',
      description: 'We strive for constant improvement and industry leadership.',
      icon: <FaChartLine className="text-3xl text-blue-600" />,
    },
    {
      title: 'Customer Focus',
      description: 'We tailor solutions to meet our clients’ unique needs.',
      icon: <FaHeart className="text-3xl text-blue-600" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-100 relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      ></div>
      <div className="relative max-w-[1440px] mx-auto w-full px-4">
        <Card className="border-0 shadow-lg rounded-lg bg-white/95 backdrop-blur-sm">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="md:w-1/2">
              <h2 className="mb-4 text-3xl !font-bold text-gray-800 md:text-4xl">Our Values</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start gap-3 ">
                    <div className='mt-2'>{value.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{value.title}</h3>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Values"
                className="h-[200px] w-full rounded-lg object-cover shadow-md md:h-[300px]"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}