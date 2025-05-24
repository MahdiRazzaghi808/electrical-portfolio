import React from 'react';
import CommentsSliderDesktop from '../molecules/CommentsSliderDesktop';
import CommentsSliderMobile from '../molecules/CommentsSliderMobile';


const comments = [
  {
    name: 'Alex Johnson',
    text: 'Great experience working together! The electrical solutions provided were innovative and reliable.',
  },
  {
    name: 'Maria Lee',
    text: 'Professional and detail-oriented. Highly recommend for any electrical engineering project.',
  },
  {
    name: 'Samir Patel',
    text: 'Delivered on time and exceeded expectations. The automation system works flawlessly.',
  },
  {
    name: 'Alex Johnson1',
    text: 'Great experience working together! The electrical solutions provided were innovative and reliable.',
  },
  {
    name: 'Alex Johnson2',
    text: 'Great experience working together! The electrical solutions provided were innovative and reliable.',
  },
];

const CommentsSlider = () => {


  return (
    <section className="py-8 container mx-auto my-12 bg-white rounded-md shadow-md relative overflow-hidden">
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#ffbd39] rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="w-full container overflow-hidden">
        <h2 className="text-2xl font-bold text-center mb-8 text-zinc-900">Testimonials</h2>
        <div className='md:hidden'>
          <CommentsSliderMobile comments={comments} />
        </div>
        <div className='hidden md:block'>
          <CommentsSliderDesktop comments={comments} />
        </div>
      </div>
    </section>
  );
};

export default CommentsSlider;
