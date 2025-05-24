"use client";

import dynamic from 'next/dynamic';

const BookingSection = dynamic(() => import('@/components/BookingSection'), { ssr: false });

export default function Page() {
  return (
    <div>
      <BookingSection />
    </div>
  );
}
