'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
// import 'swiper/css/effect-coverflow';



const CommentsSliderDesktop = ({ comments }: { comments: { name: string; text: string }[] }) => {
    return (
        <>
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                slidesPerView={2}
                loop={true}
                spaceBetween={30}
                className="w-full"
            >
                {comments.map((comment, idx) => (
                    <SwiperSlide key={idx} className='rounded-xl overflow-hidden bg-[#f3f3f3]'>
                        <div className=" shadow-xl rounded-xl  p-8 min-h-[220px] flex flex-col justify-center items-center mx-auto">
                            <p className="text-gray-600 italic mb-4 text-center rounded-2xl">"{comment.text}"</p>
                            <span className="font-semibold text-primary">{comment.name}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default CommentsSliderDesktop;
