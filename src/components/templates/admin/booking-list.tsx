"use client"

import { useDeleteDeleteBooking } from "@/api/services/core/Booking/DeleteBooking/delete/use-delete-delete-booking"
import { Button } from "@/components/atoms/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/atoms/dialog"
import { useQueryClient } from "@tanstack/react-query"
import { PhoneCall, Trash2 } from "lucide-react"
import { useState } from "react"

type Booking = {
    id: number
    fullName: string
    postCode: string
    serviceType: number
    phoneNumber: string
    message: string
}

const BookingList = ({
    bookings,
}: {
    bookings: Booking[]
}) => {
    const [selectedId, setSelectedId] = useState<number | null>(null)

    const queryClient = useQueryClient();
    const mutation = useDeleteDeleteBooking({
        onSuccess: () => {
            // queryClient.invalidateQueries(getBookingQueryKey({ PageNumber: 1, pageSize: 10, searchKey: '' }))
        },
        onError: () => {
        },
    });
    const onDelete = async (id: number) => {
        mutation.mutate({ id })
    }
    return (
        <div className="my-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bookings.map((item) => (
                    <div
                        key={item.id}
                        className="rounded-2xl border p-4 shadow-sm hover:shadow-md transition-all bg-foreground"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-100">
                                    {item.fullName}
                                </h3>
                                <p className="text-sm text-gray-400 flex items-center gap-1">
                                    <PhoneCall size={16} />
                                    <a href={`tel:${item.phoneNumber}`}>{item.phoneNumber}</a>
                                </p>
                            </div>
                            <div className="text-sm text-right flex flex-col gap-1 items-end">
                                <p className="text-gray-400">Post Code: {item.postCode}</p>
                                <p className="text-gray-400">
                                    Service Type:{" "}
                                    <span className="font-bold text-primary">
                                        {item.serviceType === 1 ? "Installation" : "Support"}
                                    </span>
                                </p>

                                {/* Delete button + Dialog */}
                                <Dialog>
                                    <DialogTrigger asChild>

                                        <Trash2 size={18} onClick={() => setSelectedId(item.id)}
                                            className="text-red-500 hover:text-red-600 mt-2 cursor-pointer" />
                                    </DialogTrigger>
                                    <DialogContent className="text-white">
                                        <DialogHeader>
                                            <DialogTitle>Confirm Deletion</DialogTitle>
                                        </DialogHeader>
                                        <p className="text-sm">
                                            Are you sure you want to delete this booking? This action cannot be undone.
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
                        </div>
                        <div className="mt-2 text-gray-200 border-t border-gray-600 pt-2 text-sm">
                            {item.message}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BookingList
