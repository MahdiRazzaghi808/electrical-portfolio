'use client';

import SideBar from "@/components/organism/layout/side-bar";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [sideBarOpen, setSideBarOpen] = useState(false);

    const showSideBar = pathname !== '/admin';

    return (
        <div className="text-white">
            {/* Sidebar - Mobile */}
            {!sideBarOpen && showSideBar && (
                <Menu className="lg:hidden cursor-pointer" onClick={() => setSideBarOpen(true)} />
            )}
            {!!sideBarOpen && showSideBar && (
                <X id="close" className="w-6 h-6 cursor-pointer z-[999]" onClick={() => setSideBarOpen(false)} />
            )}

            {sideBarOpen && showSideBar && (
                <div
                    className="fixed inset-0 z-50 bg-black/30 lg:hidden"
                    onClick={() => setSideBarOpen(false)}
                >
                    <div
                        className="bg-black w-[290px] h-full pt-6 transition-transform duration-300 translate-x-0 mr-auto relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="mt-12">
                            <SideBar />
                        </div>
                    </div>
                </div>
            )}

            <main className="min-h-screen">
                <div className="my-6 px-6  xl:px-0">
                    {/* Sidebar - Desktop */}
                    {showSideBar && (
                        <aside className="hidden lg:block">
                            <SideBar />
                        </aside>
                    )}

                    {/* Content */}
                    <section className={`w-full ${showSideBar ? "lg:pl-[320px]" : ""} px-6 z-20`}>
                        {children}
                    </section>
                </div>
            </main>
        </div>
    );
}
