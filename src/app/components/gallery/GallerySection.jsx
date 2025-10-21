"use client"
import { useState } from 'react';
import { Image, Modal } from 'antd';
import 'antd/dist/reset.css';

const images = [
  '/images/data/img1.jpg', '/images/data/img2.jpg', '/images/data/img3.jpg',
  '/images/data/img4.jpg', '/images/data/img5.jpg', '/images/data/img6.jpg',
  '/images/data/img7.jpg', '/images/data/img8.jpg', '/images/data/img9.jpg',
  '/images/data/img10.jpg', '/images/data/img11.jpg', '/images/data/img12.jpg',
  '/images/data/img13.jpg', '/images/data/img14.jpg', '/images/data/img15.jpg',
  '/images/data/img16.jpg', '/images/data/img17.jpg', '/images/data/img18.jpg',
  '/images/data/img19.jpg', '/images/data/img20.jpg', '/images/data/img21.jpg',
  '/images/data/img22.jpg', '/images/data/img23.jpg', '/images/data/img24.jpg',
  '/images/data/img25.jpg', '/images/data/img26.jpg', '/images/data/img27.jpg',
  '/images/data/img28.jpg', '/images/data/img29.jpg', '/images/data/img30.jpg',
  '/images/data/img31.jpg',
];

const Gallery = () => {
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
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Gallery</h1> */}
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

export default Gallery;