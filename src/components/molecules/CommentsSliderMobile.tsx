'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';

type Comment = {
    fullName: string;
    message: string;
    id?: number;
    avatar?: string;
};

const CommentsSliderMobile = ({ comments }: { comments: Comment[] }) => {
    return (
        <Swiper
            effect={'cards'}
            grabCursor
            loop
            modules={[EffectCards, Autoplay]}
            className="w-[260px] h-[400px]"
            style={{ height: '430px' }}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
        >
            {comments.map((comment, idx) => (
                <SwiperSlide
                    key={idx}
                    className="
            rounded-3xl
            bg-gradient-to-tr from-red-50 via-red-100 to-red-50
             border-l-8 border-primary
            p-6
            flex flex-col justify-center items-center
            text-center
          "
                >
                    {comment.avatar ? (
                        <img
                            src={comment.avatar}
                            alt={`${comment.fullName} avatar`}
                            className="w-20 h-20 rounded-full mx-auto border-4 border-primary shadow-md mb-5 object-cover"
                        />
                    ) : (
                        <div
                            className="
                w-20 h-20 rounded-full border-4 border-primary shadow-md mb-5
                bg-primary flex items-center justify-center
                text-3xl font-bold text-gray-300 select-none
                mx-auto
              "
                        >
                            {comment.fullName.charAt(0)}
                        </div>
                    )}

                    <blockquote
                        className="
              relative
              bg-foreground rounded-2xl p-5 text-gray-200 italic text-base font-medium
              shadow-md
              before:absolute before:-top-3 before:left-1/2 before:-translate-x-1/2
              before:w-5 before:h-5 before:bg-primary before:rotate-45
              before:rounded-sm before:shadow-sm
            "
                    >
                        "{comment.message}"
                    </blockquote>

                    <h3 className="mt-5 text-gray-600 font-extrabold text-lg tracking-wide">
                        {comment.fullName}
                    </h3>


                    <div className="flex items-center justify-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                size={20}
                                className={i < 5 ? 'text-primary' : 'text-gray-300'}
                                fill={i < 5 ? 'currentColor' : 'none'}
                                strokeWidth={2}
                            />
                        ))}
                    </div>

                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CommentsSliderMobile;
