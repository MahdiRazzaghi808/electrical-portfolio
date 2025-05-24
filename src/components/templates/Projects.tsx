
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Smart Grid System",
        description:
            "A modern smart grid model with real-time monitoring and adaptive load balancing, integrated using IoT and AI techniques.",
        image:
            "https://media.istockphoto.com/id/1193958625/nl/foto/elektronische-printplaat-close-up-met-groene-achtergrondverlichting.jpg?s=2048x2048&w=is&k=20&c=-V63weIXKvB7PhCiXRM7rop_UNQsLV8i6tbQ4M47-qM=",
    },
    {
        id: 2,
        title: "PLC Automation",
        description:
            "Designed and programmed PLC-based control systems for automated industrial processes using Siemens TIA Portal.",
        image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1500&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Solar Inverter Design",
        description:
            "Built an efficient DC to AC inverter using MPPT algorithms for solar energy conversion. Includes real-world testing.",
        image:
            "https://media.istockphoto.com/id/1089092060/nl/foto/oude-tech-apparatuur.jpg?s=2048x2048&w=is&k=20&c=10yQD3gEBbnxWfeqb8MLO6j87q8c17XEDFXSbg3bm18=",
    },

    {
        id: 4,
        title: "PLC Automation",
        description:
            "Designed and programmed PLC-based control systems for automated industrial processes using Siemens TIA Portal.",
        image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1500&auto=format&fit=crop",
    },
    {
        id: 5,
        title: "Smart Grid System",
        description:
            "A modern smart grid model with real-time monitoring and adaptive load balancing, integrated using IoT and AI techniques.",
        image:
            "https://media.istockphoto.com/id/1193958625/nl/foto/elektronische-printplaat-close-up-met-groene-achtergrondverlichting.jpg?s=2048x2048&w=is&k=20&c=-V63weIXKvB7PhCiXRM7rop_UNQsLV8i6tbQ4M47-qM=",
    },
];

export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <div className="container my-12 bg-white text-gray-800 px-6 py-12 rounded-lg shadow-lg relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#ffbd39] rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        whileHover={{ scale: 1.03 }}
                        className="cursor-pointer bg-gray-50 shadow-md rounded-lg overflow-hidden transition"
                        onClick={() => setSelectedProject(project)}
                    >
                        {/* <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-48"
            /> */}

                        <img
                            src={project.image}
                            alt={project.title}
                            className="object-cover w-full h-80 rounded-md"
                        />

                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{project.title}</h2>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="bg-white rounded-lg max-w-xl w-full p-8 relative z-60"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()} // Prevent click-through close
                        >
                            <button
                                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
                                onClick={() => setSelectedProject(null)}
                            >
                                <X />
                            </button>
                            {/* <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={800}
                height={500}
                className="rounded-md mb-4 object-cover w-full h-60"
              /> */}

                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="object-cover w-full h-80 rounded-md"
                            />



                            <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                            <p className="text-gray-700">{selectedProject.description}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
