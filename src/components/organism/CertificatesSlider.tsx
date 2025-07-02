"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {  Autoplay } from 'swiper/modules';

import "swiper/css";


interface Certificate {
    id: string;
    title: string;
    issuedBy: string;
    date: string;
    imageUrl: string; // عکس یا لوگوی مدرک
    description?: string;
}

const certificates: Certificate[] = [
    {
        id: "1",
        title: "Power System Analysis",
        issuedBy: "IEEE",
        date: "2023-01-15",
        imageUrl: "https://plus.unsplash.com/premium_photo-1683141457896-367f0ad2ddcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Comprehensive knowledge of power systems and analysis techniques.",
    },
    {
        id: "2",
        title: "PLC Programming",
        issuedBy: "Siemens",
        date: "2022-08-10",
        imageUrl: "https://images.unsplash.com/photo-1581090581500-58b180d1f0fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Certified in programming and troubleshooting PLC systems.",
    },
    {
        id: "3",
        title: "Renewable Energy Technologies",
        issuedBy: "Coursera",
        date: "2021-12-05",
        imageUrl: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Completed course on solar and wind energy systems.",
    },
    {
        id: "4",
        title: "PLC Programming",
        issuedBy: "Siemens",
        date: "2022-08-10",
        imageUrl: "https://images.unsplash.com/photo-1635335874521-7987db781153?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Certified in programming and troubleshooting PLC systems.",
    },
];

export default function CertificatesSlider() {
    return (
        <div className="container mx-auto p-6 bg-foreground rounded-md shadow-md">
            <h2 className="text-2xl text-gray-100 font-bold mb-6 text-center">My Certificates</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                modules={[Autoplay]}
                autoHeight={false} 
                loop
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {certificates.map(({ id, title, issuedBy, date, imageUrl, description }) => (
                    <SwiperSlide key={id} className="p-4 bg-background rounded-lg shadow-sm !h-[350px]">
                        <img
                            src={imageUrl}
                            alt={`${title} certificate`}
                            className="w-full h-60 object-cover mb-4 rounded-md"
                        />
                        {/* <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
                        <p className="text-sm text-gray-200">{issuedBy}</p>
                        <p className="text-xs text-gray-100 mb-2">{new Date(date).toLocaleDateString()}</p> */}
                        <p className="text-gray-400 text-sm line-clamp-3">{description}</p>
                        </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
