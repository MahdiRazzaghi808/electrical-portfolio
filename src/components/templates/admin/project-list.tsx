"use client"

import React, { useState, useEffect } from "react"

interface Project {
  id: number
  title: string
  shortDesc: string
  description: string
  imageName: string
}

const initialData: Project[] = [
  {
    id: 1,
    title: "Project 1",
    shortDesc: "Short description of project 1",
    description: "Detailed description of project 1",
    imageName: "https://placehold.co/600x400?text=Project+1",
  },
  {
    id: 2,
    title: "Project 2",
    shortDesc: "Short description of project 2",
    description: "Detailed description of project 2",
    imageName: "https://placehold.co/600x400?text=Project+2",
  },
  {
    id: 3,
    title: "Project 3",
    shortDesc: "Short description of project 3",
    description: "Detailed description of project 3",
    imageName: "https://placehold.co/600x400?text=Project+3",
  },
]

const ProjectCRUD = () => {
  const [projects, setProjects] = useState<Project[]>(initialData)
  const [page, setPage] = useState(1)
  const pageSize = 4
  const totalPages = Math.ceil(projects.length / pageSize)

  // فرم states
  const [formState, setFormState] = useState<Omit<Project, "id">>({
    title: "",
    shortDesc: "",
    description: "",
    imageName: "",
  })
  const [editingId, setEditingId] = useState<number | null>(null)

  // محتوای صفحه جاری
  const currentItems = projects.slice((page - 1) * pageSize, page * pageSize)

  // تغییر در فرم
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // افزودن یا ویرایش پروژه
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formState.title.trim() || !formState.shortDesc.trim()) {
      alert("Title and short description are required.")
      return
    }

    if (editingId !== null) {
      // ویرایش پروژه
      setProjects((prev) =>
        prev.map((proj) =>
          proj.id === editingId ? { id: editingId, ...formState } : proj
        )
      )
      setEditingId(null)
    } else {
      // افزودن پروژه جدید
      const newProject: Project = {
        id: projects.length ? Math.max(...projects.map((p) => p.id)) + 1 : 1,
        ...formState,
      }
      setProjects((prev) => [newProject, ...prev])
    }

    // ریست فرم
    setFormState({
      title: "",
      shortDesc: "",
      description: "",
      imageName: "",
    })
  }

  // حذف پروژه
  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects((prev) => prev.filter((p) => p.id !== id))
      // اگر صفحه خالی شد صفحه رو کم کن
      if ((projects.length - 1) / pageSize < page - 1) {
        setPage((p) => Math.max(1, p - 1))
      }
    }
  }

  // شروع ویرایش پروژه
  const startEditing = (project: Project) => {
    setEditingId(project.id)
    setFormState({
      title: project.title,
      shortDesc: project.shortDesc,
      description: project.description,
      imageName: project.imageName,
    })
  }

  // لغو ویرایش
  const cancelEditing = () => {
    setEditingId(null)
    setFormState({
      title: "",
      shortDesc: "",
      description: "",
      imageName: "",
    })
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="mb-8 space-y-4 bg-gray-100 p-4 rounded">
        <h2 className="text-xl font-semibold">
          {editingId ? "Edit Project" : "Add New Project"}
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formState.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="shortDesc"
          placeholder="Short Description"
          value={formState.shortDesc}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Detailed Description"
          value={formState.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows={4}
        />
        <input
          type="text"
          name="imageName"
          placeholder="Image URL"
          value={formState.imageName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {editingId ? "Update" : "Add"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={cancelEditing}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* لیست پروژه‌ها */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {currentItems.map((proj) => (
          <div
            key={proj.id}
            className="border rounded shadow p-4 bg-white dark:bg-neutral-900"
          >
            {proj.imageName && (
              <img
                src={proj.imageName}
                alt={proj.title}
                className="w-full h-40 object-cover rounded mb-3"
              />
            )}
            <h3 className="text-xl font-semibold mb-1">{proj.title}</h3>
            <p className="text-gray-600 mb-2">{proj.shortDesc}</p>
            <p className="text-sm mb-4">{proj.description}</p>

            <div className="flex gap-2">
              <button
                onClick={() => startEditing(proj)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(proj.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* صفحه‌بندی */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default ProjectCRUD
