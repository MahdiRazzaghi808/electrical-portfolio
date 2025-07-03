"use client";

import { useGetBooking } from '@/api/services/core/Booking/GetPagedListBooking/get/use-get-booking';
import { PaginationTable } from '@/components/atoms/pagenation-table';
import BookingList from '@/components/templates/admin/booking-list';
import React, { useState } from 'react';

function Booking() {
    const [currentPage, setCurrentPage] = useState(1); 

    const { data, isLoading, error } = useGetBooking({
        params: {
            PageNumber: currentPage, 
            pageSize: 10,
            searchKey: '',
        }
    });

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber); 
    };

    return (
        <div className='text-white'>
            <h1 className="text-2xl font-bold text-primary mb-4">Booking List</h1>
            
            <BookingList bookings={data?.data?.data || []} />

            <PaginationTable
                page={data?.data?.pageNumber || 1}
                pageSize={data?.data?.pageSize || 10}
                totalCount={data?.data?.totalItems || 0}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default Booking;
