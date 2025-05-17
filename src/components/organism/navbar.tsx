'use client';

import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "../atoms/button";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/70">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-primary">
                    MyBrand
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden space-x-6 md:flex">
                    <Link href="/" className="text-sm font-medium hover:text-primary">
                        Home
                    </Link>
                    <Link href="/about" className="text-sm font-medium hover:text-primary">
                        About
                    </Link>
                    <Link href="/services" className="text-sm font-medium hover:text-primary">
                        Services
                    </Link>
                    <Link href="/projects" className="text-sm font-medium hover:text-primary">
                        Projects
                    </Link>

                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="sm">
                        <span>
                            Booking
                        </span>
                        <ArrowRight  size={16}/>
                    </Button>
                </div>

                {/* Mobile Menu Icon */}
                <button className="md:hidden">
                    <Menu className="h-5 w-5" />
                </button>
            </div>
        </header>
    );
}
