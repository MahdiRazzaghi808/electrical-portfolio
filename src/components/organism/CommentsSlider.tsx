"use client";
import { useGetTestimonial } from '@/api/services/core/Testimonial/GetPagedListTestimonial/get/use-get-testimonial';
import CommentsSliderDesktop from '../molecules/CommentsSliderDesktop';
import CommentsSliderMobile from '../molecules/CommentsSliderMobile';




const CommentsSlider = () => {

  const { data, isLoading, error } = useGetTestimonial({
    params: {
      PageNumber: 1,
      pageSize: 10,
      searchKey: '',
    }
  });


  return (
    <section className="py-8 container mx-auto my-12 bg-foreground rounded-md shadow-md relative overflow-hidden">

      <>
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#9c1923] rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-[#c22530] rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </>

      <div className="w-full container overflow-hidden">
        <h2 className="text-2xl font-bold text-center mb-8 text-zinc-900">Testimonials</h2>
        <div className='md:hidden'>
          <CommentsSliderMobile comments={data?.data?.data || []} />
        </div>
        <div className='hidden md:block'>
          <CommentsSliderDesktop comments={data?.data?.data || []} />
        </div>
      </div>
    </section>
  );
};

export default CommentsSlider;
