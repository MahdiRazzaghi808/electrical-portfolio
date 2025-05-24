import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards, Autoplay } from 'swiper/modules';


const CommentsSliderMobile = ({ comments }: { comments: { name: string; text: string }[] }) => {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor
                loop
                modules={[EffectCards, Autoplay]}
                className="w-[300px] h-[400px]"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}>
                {comments.map((comment, idx) => (
                    <SwiperSlide key={idx} className='rounded-xl bg-[#f3f3f3]'>
                        <div className="rounded-2xl  p-8 w-full h-full flex flex-col justify-center items-center mx-auto">
                            <p className="text-gray-600 italic mb-4 text-center rounded-2xl">"{comment.text}"</p>
                            <span className="font-semibold text-primary">{comment.name}</span>
                        </div>
                    </SwiperSlide>))}
            </Swiper>
        </>
    );
}


export default CommentsSliderMobile;