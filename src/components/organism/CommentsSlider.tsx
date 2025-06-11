import React from 'react';
import CommentsSliderDesktop from '../molecules/CommentsSliderDesktop';
import CommentsSliderMobile from '../molecules/CommentsSliderMobile';


const comments = [
  {
    name: 'Alex Johnson',
    text: 'Great experience working together! The electrical solutions provided were innovative and reliable.',
    // role: 'Electrical Engineer',
    // avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    date: '2024-05-20',
    rating: 5,
    location: 'Manchester',
  },
  {
    name: 'Maria Lee',
    text: 'Professional and detail-oriented. Highly recommend for any electrical engineering project.',
    // role: 'Project Manager',
    // avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    date: '2024-04-15',
    rating: 4,
    location: 'Manchester',
  },
  {
    name: 'Alex Johnson1',
    text: 'Great experience working together! The electrical solutions provided were innovative and reliable.',
    // role: 'Electrical Engineer',
    // avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    date: '2024-01-05',
    rating: 4,
    location: 'Manchester',
  },
  {
    name: 'Samir Patel',
    text: 'Delivered on time and exceeded expectations. The automation system works flawlessly.',
    // role: 'Automation Specialist',
    // avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    date: '2024-03-10',
    rating: 5,
    location: 'Manchester',
  },

  {
    name: 'Alex Johnson2',
    text: 'Great experience working together! The electrical solutions provided were innovative and reliable.',
    // role: 'Electrical Engineer',
    // avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    date: '2023-12-25',
    rating: 5,
    location: 'Manchester',
  },
];


const CommentsSlider = () => {


  return (
    <section className="py-8 container mx-auto my-12 bg-foreground rounded-md shadow-md relative overflow-hidden">

      <>
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#9c1923] rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#c22530] rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </>

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
