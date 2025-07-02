"use client"

import React, { useEffect, useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogClose,
} from "@/components/atoms/dialog"
import { Label } from "@/components/atoms/label"
import { Input } from "@/components/atoms/input"

interface Props {
    open: boolean
    onClose: () => void
    onSave: (cert: any) => void
    defaultValue?: any
}

const CertificateModal = ({ open, onClose, onSave, defaultValue }: Props) => {
    const [description, setDescription] = useState("")
    const [imageName, setImageName] = useState("")

    useEffect(() => {
        if (defaultValue) {
            setDescription(defaultValue.description)
            setImageName(defaultValue.imageName)
        } else {
            setDescription("")
            setImageName("")
        }
    }, [defaultValue, open])

    const handleSubmit = () => {
        const data = {
            id: defaultValue?.id || Date.now(),
            description,
            imageName,
        }
        onSave(data)
        onClose()
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-white">
                        {defaultValue ? "Edit Certificate" : "Add Certificate"}
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <div>
                        <Label htmlFor="phone" className="mb-2.5 ml-1 text-gray-300">
                            Image URL
                        </Label>
                        <Input
                            type="tel"
                            name="phone"
                            id="phone"
                            className="w-full px-5 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-primary transition"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div>

                        <Label htmlFor="message" className="mb-2.5 ml-1 text-gray-300">
                            Description
                        </Label>
                        <textarea
                            name="message"
                            id="message"
                            rows={4}
                            className="w-full px-5 py-3 border bg-gray-900 border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-primary transition"
                            value={formData.message}
                            onChange={handleChange}
                        />


                    </div>
                </div>

                <DialogFooter className="mt-6">
                    <DialogClose asChild>
                        <button className="px-4 py-2 text-gray-500 hover:text-gray-800">Cancel</button>
                    </DialogClose>
                    <button
                        onClick={handleSubmit}
                        className="bg-primary text-white px-4 py-2 rounded-md"
                    >
                        {defaultValue ? "Update" : "Create"}
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default CertificateModal
