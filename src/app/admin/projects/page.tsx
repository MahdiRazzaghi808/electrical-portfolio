import ProjectCRUD from '@/components/templates/admin/project-list'
import React from 'react'

function Projects() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-primary mb-8">Projects</h1>
            <ProjectCRUD />
        </div>
    )
}

export default Projects