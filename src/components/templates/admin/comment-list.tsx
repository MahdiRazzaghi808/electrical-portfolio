// components/CommentList.tsx
"use client"

import { Button } from "@/components/atoms/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/atoms/dialog"
import { Trash2 } from "lucide-react"
import React, { useState } from "react"

interface Comment {
    id: number
    fullName: string
    message: string
}

interface CommentListProps {
    fakeComments: Comment[];
    onDelete?: (id: number) => void

}

const CommentList = ({ fakeComments, onDelete }: CommentListProps) => {
    const [selectedId, setSelectedId] = useState<number | null>(null)



    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 mx-auto">
            {fakeComments.map((comment) => (
                <div
                    key={comment.id}
                    className="flex items-center gap-1 bg-foreground dark:bg-neutral-900 shadow-sm border p-4 rounded"
                >
                    <div className="w-full">
                        <p className="font-semibold text-primary">{comment.fullName}</p>
                        <p className="text-gray-500">{comment.message}</p>
                    </div>


                    <Dialog>
                        <DialogTrigger asChild>

                            <Trash2 size={18} onClick={() => setSelectedId(comment.id)}
                                className="text-red-500 hover:text-red-600 mt-2 cursor-pointer" />
                        </DialogTrigger>
                        <DialogContent className="text-white">
                            <DialogHeader>
                                <DialogTitle>Confirm Deletion</DialogTitle>
                            </DialogHeader>
                            <p className="text-sm">
                                Are you sure you want to delete this Comment? This action cannot be undone.
                            </p>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <DialogClose asChild>
                                    <Button
                                        variant="destructive"
                                        onClick={() => {
                                            if (selectedId !== null && onDelete) {
                                                onDelete(selectedId)
                                                setSelectedId(null)
                                            }
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            ))}


        </div>
    )
}

export default CommentList
