"use client";
import { Carousel } from 'antd';

export default function PartnersSection() {
  const placeholderLogos = [
    '/images/partners/img1.png',
    '/images/partners/img1.png',
    '/images/partners/img1.png',
    '/images/partners/img1.png',
    '/images/partners/img1.png',
    '/images/partners/img1.png',
    '/images/partners/img1.png',
    '/images/partners/img1.png',
    '/images/partners/img1.png',
    '/images/partners/img1.png',
    '/images/partners/img1.png',
    '/images/partners/img1.png',
    '/images/partners/img1.png',
    '/images/partners/img1.png',
    '/images/partners/img1.png',
    '/images/partners/img1.png',
    '/images/partners/img1.png',
    '/images/partners/img1.png',
    '/images/partners/img1.png',
    '/images/partners/img1.png',
    '/images/partners/img1.png',
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1440px] w-full mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Our Trusted Partners
        </h2>
        <Carousel
          autoplay
          infinite
          slidesToShow={6}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 1024,
              settings: { slidesToShow: 4 },
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 3 },
            },
            {
              breakpoint: 480,
              settings: { slidesToShow: 1 },
            },
          ]}
          className="partner-carousel"
        >
          {placeholderLogos.map((logo, index) => (
            <div key={index} className="px-4">
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-16 md:h-20 object-contain mx-auto"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <style jsx>{`
        .partner-carousel :global(.slick-slide) {
          display: flex !important;
          justify-content: center;
          align-items: center;
        }
        .partner-carousel :global(.slick-track) {
          display: flex !important;
          align-items: center;
        }
      `}</style>
    </section>
  );
}
