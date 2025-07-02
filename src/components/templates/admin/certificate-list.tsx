"use client"

import React, { useState } from "react"
import CertificateModal from "./certificate-modal"

interface Certificate {
    id: number
    description: string
    imageName: string
}

const CertificateList = ({ data }: any) => {
    const [certificates, setCertificates] = useState<Certificate[]>(data)
    const [selectedCert, setSelectedCert] = useState<Certificate | undefined>(undefined)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleAddClick = () => {
        setSelectedCert(undefined)
        setIsModalOpen(true)
    }

    const handleEdit = (cert: Certificate) => {
        setSelectedCert(cert)
        setIsModalOpen(true)
    }

    const handleDelete = (id: number) => {
        setCertificates((prev) => prev.filter((c) => c.id !== id))
    }

    const handleSave = (cert: Certificate) => {
        setCertificates((prev) => {
            const exists = prev.some((c) => c.id === cert.id)
            if (exists) {
                return prev.map((c) => (c.id === cert.id ? cert : c))
            }
            return [...prev, cert]
        })
    }

    return (
        <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
                {certificates.map((cert) => (
                    <div
                        key={cert.id}
                        className="border p-4 rounded-md flex flex-col justify-between items-center"
                    >
                        <img src={cert.imageName} alt="" className="h-40 w-full object-cover" />
                        <p className="font-medium text-md text-gray-400 my-2.5">{cert.description}</p>
                        <div className="w-full flex justify-between gap-2"> 
                            <button
                                onClick={() => handleEdit(cert)}
                                className="text-blue-500 hover:underline"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(cert.id)}
                                className="text-red-500 hover:underline"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <CertificateModal
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleSave}
                    defaultValue={selectedCert}
                />
            )}
        </div>
    )
}

export default CertificateList
