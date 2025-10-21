"use client"
import { useState } from 'react';
import { Button, Image, Modal } from 'antd';
import 'antd/dist/reset.css';
import Link from 'next/link';

const images = [
  '/images/data/img1.jpg', '/images/data/img5.jpg', '/images/data/img7.jpg',
  '/images/data/img4.jpg', '/images/data/img10.jpg', '/images/data/img6.jpg',
  
];

const HomeGallery = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const showModal = (src) => {
    setCurrentImage(src);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="min-h-[80vh] bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl !font-bold text-center mb-10 text-gray-800">Our Gallery</h1>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 justify-start">
          {images.map((src, index) => (
            <div key={index} className="mb-4 break-inside-avoid">
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                preview={false}
                onClick={() => showModal(src)}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/gallery">
            <Button
              type="primary"
              size="large"
              className="bg-blue-600 hover:!bg-blue-700"
            >
              View All Gallery
            </Button>
          </Link>
        </div>
        <Modal
          open={isModalVisible}
          footer={null}
          onCancel={handleCancel}
          centered
          width="100vh"
          bodyStyle={{ padding: 20 }}
        >
          <img src={currentImage} alt="Preview" className="w-full h-auto rounded-md"  />
        </Modal>
      </div>
    </div>
  );
};

export default HomeGallery
