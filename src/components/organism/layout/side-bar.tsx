import Link from 'next/link'
import React from 'react'
import { CalendarCheck, Award, MessageCircle, FolderOpen, LogOut } from "lucide-react";

function SideBar() {
    const sidebarItem = [
        { id: 1, name: "Booking", icon: <CalendarCheck size={20} />, href: "booking" },
        { id: 2, name: "Certificate", icon: <Award size={20} />, href: "certificate" },
        { id: 3, name: "Testimonial", icon: <MessageCircle size={20} />, href: "testimonial" },
        { id: 4, name: "Projects", icon: <FolderOpen size={20} />, href: "projects" },
    ];

    return (
        <div className='w-[290px] h-screen fixed left-0 top-0 flex flex-col justify-between  border-r border-white p-4 py-6 '>
            <div className='w-full'>
                <h3 className='font-bold text-xl mb-4'>Admin Panel</h3>

                <ul className='text-lg w-fill flex flex-col gap-1 mt-15'>
                    {
                        sidebarItem.map(item =>

                            <li className='w-full'>
                                <Link
                                    key={item.id}
                                    href={item.href}
                                    className="group w-full flex gap-2 items-center hover:bg-primary-200 rounded-md px-2 py-3 hover:text-primary transition-all duration-200 hover:border-b-3 hover:border-primary"
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </Link>

                            </li>

                        )
                    }

                </ul>
            </div>



            <p className='text-[#FF3E3E] text-lg flex items-center gap-2 cursor-pointer'>
                <LogOut size={20} />
                <span>Logout</span>
            </p>
        </div>
    )
}

export default SideBar