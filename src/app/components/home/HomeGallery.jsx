"use client";
import { useState } from "react";
import { Button, Modal } from "antd";
import { motion } from "framer-motion";
import Link from "next/link";

const images = [
  "/images/data/img1.jpg",
  "/images/data/img5.jpg",
  "/images/data/img7.jpg",
  "/images/data/img4.jpg",
  "/images/data/img10.jpg",
  "/images/data/img6.jpg",
];

const HomeGallery = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const showModal = (src) => {
    setCurrentImage(src);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <section className="relative !py-20 bg-gradient-to-b from-[#f8f9ff] via-white to-[#eef0ff] overflow-hidden">
      {/* ✅ Background animation removed */}

      {/* Section Content */}
      <div className="max-w-[1440px] w-full mx-auto px-4 relative z-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="!text-3xl md:!text-4xl !font-extrabold text-center !text-[#2A338E] !mb-14"
        >
          Our Gallery
        </motion.h1>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
          viewport={{ once: true }}
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 25px rgba(42,51,142,0.3), 0 0 35px rgba(181,43,50,0.15)",
              }}
              className="break-inside-avoid overflow-hidden rounded-xl !shadow-lg hover:!shadow-[0_0_25px_rgba(42,51,142,0.3)] 
                !transition-all !duration-300 cursor-pointer"
              onClick={() => showModal(src)}
            >
              <motion.img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full object-cover rounded-xl hover:!scale-110 !transition-transform !duration-500"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="text-center mt-14">
          <Link href="/gallery">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(42,51,142,0.5)",
              }}
              className="!bg-gradient-to-r !from-[#2A338E] !to-[#B52B32] !text-white !font-semibold px-10 py-3 
              !rounded-full !transition-all !duration-300 !shadow-md hover:!shadow-lg"
            >
              View All Gallery
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Image Modal */}
      <Modal
        open={isModalVisible}
        footer={null}
        onCancel={handleCancel}
        centered
        width="80vw"
        bodyStyle={{
          padding: 0,
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <motion.img
          src={currentImage}
          alt="Preview"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full h-auto rounded-2xl shadow-2xl"
        />
      </Modal>
    </section>
  );
};

export default HomeGallery;
