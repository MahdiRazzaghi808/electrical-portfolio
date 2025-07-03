"use client";
import { useGetBooking } from '@/api/services/core/Booking/GetPagedListBooking/get/use-get-booking';
import BookingList from '@/components/templates/admin/booking-list';
import React from 'react'


function Booking() {
    const { data, isLoading, error } = useGetBooking({
        params: {
            PageNumber: 1,
            pageSize: 10,
            searchKey: '',
        }
    });

    return (
        <div className='text-white'>
            <h1 className="text-2xl font-bold text-primary">Booking List</h1>
            <BookingList bookings={data?.data?.data || []} />
        </div>
    )
}

export default Booking