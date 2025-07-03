"use client"
import { useGetTestimonial } from '@/api/services/core/Testimonial/GetPagedListTestimonial/get/use-get-testimonial'
import { PaginationTable } from '@/components/atoms/pagenation-table'
import CommentList from '@/components/templates/admin/comment-list'
import React, { useState } from 'react'

// fakeComments.ts
export interface Comment {
    id: number
    fullName: string
    message: string
}


function Testimonial() {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const { data, isLoading, error } = useGetTestimonial({
        params: {
            PageNumber: currentPage,
            pageSize: 10,
            searchKey: '',
        }
    });
    return (
        <div>
            <h1 className="text-2xl font-bold text-primary mb-8">
                Testimonial
            </h1>

            <CommentList fakeComments={data?.data.data || []} />
            <PaginationTable
                page={data?.data?.pageNumber || 1}
                pageSize={data?.data?.pageSize || 10}
                totalCount={data?.data?.totalItems || 0}
                onPageChange={handlePageChange}
            />
        </div>
    )
}

export default Testimonial