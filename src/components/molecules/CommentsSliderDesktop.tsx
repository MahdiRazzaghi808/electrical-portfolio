'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
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

const CommentsSliderDesktop = ({ comments }: { comments: Comment[] }) => {
    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            slidesPerView={2}
            loop={true}
            spaceBetween={30}
            className="w-full"
        >
            {comments.map((comment, idx) => (
                <SwiperSlide
                    key={idx}
                    className="rounded-xl overflow-hidden bg-background  p-6"
                >
                    <div className="flex flex-col justify-between h-full">
                        <p className="text-gray-300 italic mb-6 text-center min-h-[60px]">"{comment.text}"</p>

                        <div className="flex items-center justify-center gap-4">
                            {comment.avatar ?
                                <img
                                    src={comment.avatar}
                                    alt={`${comment.name} avatar`}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                                />
                                :
                                <div
                                    className="
               w-14 h-14 rounded-full object-cover border-2 border-primary
                bg-primary flex items-center justify-center
                text-3xl font-bold text-gray-200 select-none
              "
                                >
                                    {comment.name.charAt(0)}
                                </div>

                            }
                            <div className="text-center">
                                <h3 className="font-semibold text-primary">{comment.name}</h3>
                                {comment.role && (
                                    <p className="text-sm text-gray-500">{comment.role}</p>
                                )}
                                {comment.location && (
                                    <p className="text-xs text-gray-400">{comment.location}</p>
                                )}
                            </div>
                        </div>

                        <div className="mt-4 flex justify-center items-center gap-4 text-primary">
                            {comment.rating !== undefined && comment.rating !== null && (
                                <div className="flex items-center">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            size={20}
                                            className={i < comment.rating! ? 'text-primary' : 'text-gray-300'}
                                            fill={i < comment.rating! ? 'currentColor' : 'none'}
                                            strokeWidth={2}
                                        />
                                    ))}
                                </div>
                            )}

                            {comment.date && (
                                <span className="text-gray-400 text-xs">{new Date(comment.date).toLocaleDateString()}</span>
                            )}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CommentsSliderDesktop;
