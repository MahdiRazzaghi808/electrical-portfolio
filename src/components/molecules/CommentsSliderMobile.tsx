'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';

type Comment = {
    name: string;
    text: string;
    role?: string;
    avatar?: string;
    date?: string;
    rating?: number;
    location?: string;
};

const CommentsSliderMobile = ({ comments }: { comments: Comment[] }) => {
    return (
        <Swiper
            effect={'cards'}
            grabCursor
            loop
            modules={[EffectCards, Autoplay]}
            className="w-[300px] h-[400px] p-20"
            style={{ height: '400px' }}
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
            bg-gradient-to-tr from-yellow-50 via-yellow-100 to-yellow-50
             border-l-8 border-yellow-400
            p-6
            flex flex-col justify-center items-center
            text-center
          "
                >
                    {comment.avatar ? (
                        <img
                            src={comment.avatar}
                            alt={`${comment.name} avatar`}
                            className="w-20 h-20 rounded-full border-4 border-yellow-400 shadow-md mb-5 object-cover"
                        />
                    ) : (
                        <div
                            className="
                w-20 h-20 rounded-full border-4 border-yellow-400 shadow-md mb-5
                bg-yellow-300 flex items-center justify-center
                text-3xl font-bold text-yellow-900 select-none
              "
                        >
                            {comment.name.charAt(0)}
                        </div>
                    )}

                    <blockquote
                        className="
              relative
              bg-white rounded-2xl p-5 text-gray-700 italic text-base font-medium
              shadow-md
              before:absolute before:-top-3 before:left-1/2 before:-translate-x-1/2
              before:w-5 before:h-5 before:bg-yellow-400 before:rotate-45
              before:rounded-sm before:shadow-sm
            "
                    >
                        "{comment.text}"
                    </blockquote>

                    <h3 className="mt-5 text-yellow-700 font-extrabold text-lg tracking-wide">
                        {comment.name}
                    </h3>
                    {comment.role && (
                        <p className="text-yellow-500 text-xs italic mt-1">{comment.role}</p>
                    )}

                    {comment.rating !== undefined && comment.rating !== null && (
                        <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    size={20}
                                    className={i < comment.rating! ? 'text-yellow-400' : 'text-gray-300'}
                                    fill={i < comment.rating! ? 'currentColor' : 'none'}
                                    strokeWidth={2}
                                />
                            ))}
                        </div>
                    )}

                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CommentsSliderMobile;
