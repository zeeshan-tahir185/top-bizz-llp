"use client";
import { Typography } from 'antd';

const { Title } = Typography;

export default function GeneralHeroSection({ title }) {
    return (
        <section className="relative bg-blue-800 py-20 md:py-32 overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                    backgroundImage:
                        "url('/images/img2.avif')",
                }}
            ></div>
            <div className="relative max-w-[1440px] w-full mx-auto px-4 text-center">
                <Title level={1} className="!text-white text-4xl md:!text-5xl font-bold mb-0">
                    {title}
                </Title>
            </div>
        </section>
    );
}
