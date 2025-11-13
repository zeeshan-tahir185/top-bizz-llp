"use client";
import { motion } from "framer-motion";
import { FaLightbulb, FaShieldAlt, FaUsers, FaChartLine, FaHeart, FaAward } from 'react-icons/fa';

export default function ValuesSection() {
  const values = [
    {
      title: 'Innovation',
      description: 'We drive progress through cutting-edge technology and creative solutions.',
      icon: <FaLightbulb className="!text-3xl !text-blue-600" />,
    },
    {
      title: 'Quality',
      description: 'We deliver high-standard products and services with precision.',
      icon: <FaAward className="!text-3xl !text-blue-600" />,
    },
    {
      title: 'Integrity',
      description: 'We uphold trust and transparency in all our partnerships.',
      icon: <FaShieldAlt className="!text-3xl !text-blue-600" />,
    },
    {
      title: 'Team Work',
      description: 'We collaborate with partners and clients for shared success.',
      icon: <FaUsers className="!text-3xl !text-blue-600" />,
    },
    {
      title: 'Continuous Growth',
      description: 'We strive for constant improvement and industry leadership.',
      icon: <FaChartLine className="!text-3xl !text-blue-600" />,
    },
    {
      title: 'Customer Focus',
      description: 'We tailor solutions to meet our clients’ unique needs.',
      icon: <FaHeart className="!text-3xl !text-blue-600" />,
    },
  ];

  return (
    <section className="!relative !py-20 !bg-gradient-to-br !from-gray-50 !to-white !overflow-hidden">
      {/* Animated background blobs */}
      <div className="!absolute !top-16 !right-16 !w-44 !h-44 !bg-blue-200/40 !rounded-full !blur-3xl !animate-pulse"></div>
      <div className="!absolute !bottom-16 !left-16 !w-60 !h-60 !bg-cyan-200/40 !rounded-full !blur-3xl !animate-pulse"></div>

      <div className="!relative !max-w-[1440px] !w-full !mx-auto !px-6 !flex !flex-col md:!flex-row !items-center !gap-12">
        {/* Image */}
        <motion.div
          className="!md:w-1/2 !w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Our Values"
            className="!rounded-3xl !shadow-2xl !w-full !h-[300px] md:!h-[400px] !object-cover !border-[3px] !border-gray-200/50"
          />
        </motion.div>

        {/* Values Content */}
        <motion.div
          className="!md:w-1/2 !w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="!bg-white/70 !backdrop-blur-lg !p-8 !rounded-3xl  !border !border-gray-200/60">
            <h2 className="!text-3xl md:!text-4xl !font-extrabold !text-gray-800 !mb-8">
              Our Values
            </h2>
            <div className="!grid !grid-cols-1 sm:!grid-cols-2 !gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="!flex !items-start !gap-3 !p-4 !rounded-xl !hover:!shadow-xl !transition-all !duration-300 !cursor-pointer !bg-white/50"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="!mt-2">{value.icon}</div>
                  <div>
                    <h3 className="!text-lg !font-semibold !text-blue-600">{value.title}</h3>
                    <p className="!text-sm !text-gray-700 !leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
