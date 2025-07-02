"use client"

import React, { useState } from "react"
import CertificateList from "@/components/templates/admin/certificate-list"
import CertificateModal from "@/components/templates/admin/certificate-modal"

export const fakeCertificates = {
  success: true,
  errors: [],
  data: [
    {
      id: 1,
      imageName: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80",
      description: "Certified in Cloud Infrastructure by XYZ Org",
    },
    {
      id: 2,
      imageName: "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80",
      description: "ISO 27001 Information Security Certification",
    },
    {
      id: 3,
      imageName: "https://images.unsplash.com/photo-1635335874521-7987db781153?q=80",
      description: "AWS Solutions Architect Associate Certificate",
    },
  ],
  pageNumber: 1,
  pageSize: 10,
  totalPages: 1,
  totalItems: 3,
}

function Certificate() {
  const [certificates, setCertificates] = useState(fakeCertificates.data)
  const [openModal, setOpenModal] = useState(false)
  const [editCert, setEditCert] = useState<any | null>(null)

  const handleAdd = () => {
    setEditCert(null)
    setOpenModal(true)
  }

  const handleSave = (cert: any) => {
    if (cert.id) {
      // Update
      setCertificates((prev) =>
        prev.map((c) => (c.id === cert.id ? cert : c))
      )
    } else {
      // Create
      const newCert = { ...cert, id: Date.now() }
      setCertificates((prev) => [...prev, newCert])
    }
    setOpenModal(false)
  }

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this certificate?")) {
      setCertificates((prev) => prev.filter((c) => c.id !== id))
    }
  }

  const handleEdit = (cert: any) => {
    setEditCert(cert)
    setOpenModal(true)
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-primary">Certificates</h1>
        <button
          onClick={handleAdd}
          className="bg-primary text-white px-4 py-2 rounded-lg shadow"
        >
          Add Certificate
        </button>
      </div>

      <CertificateList
        data={certificates}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {openModal && (
        <CertificateModal
          onClose={() => setOpenModal(false)}
          onSave={handleSave}
          defaultValue={editCert}
          open
        />
      )}
    </div>
  )
}

export default Certificate
