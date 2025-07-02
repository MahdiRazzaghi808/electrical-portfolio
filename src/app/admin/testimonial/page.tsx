import CommentList from '@/components/templates/admin/comment-list'
import React from 'react'

// fakeComments.ts
export interface Comment {
    id: number
    fullName: string
    message: string
  }
  
  export const fakeComments: Comment[] = Array.from({ length: 12 }).map((_, index) => ({
    id: index + 1,
    fullName: `User ${index + 1}`,
    message: `This is a sample message from user ${index + 1}.`,
  }))
  
function Testimonial() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-primary mb-8">
                Testimonial
            </h1>

            <CommentList fakeComments={fakeComments} />
        </div>
    )
}

export default Testimonial