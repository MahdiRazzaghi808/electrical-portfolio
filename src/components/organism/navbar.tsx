"use client";
import { Menu } from "lucide-react";
import { Button } from "@/components/atoms/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/atoms/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/atoms/sheet";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface MenuItem {
    title: string;
    url: string;
}

interface NavbarProps {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    menu?: MenuItem[];
}

const Navbar = ({
    menu = [
        { title: "Home", url: "/" },
        { title: "Projects", url: "/projects" },
        { title: "Services", url: "/services" },
        { title: "About Us", url: "/about-us" },
        { title: "Booking", url: "/booking" },
    ],
}: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="py-4 bg-white sticky top-0 z-[999] shadow-lg" dir="ltr">
            <div className="container">
                {/* Desktop Menu */}
                <nav className="hidden w-full lg:flex">
                    <div className="w-full flex items-center justify-between gap-6">

                        {/* Navigation Menu */}
                        <NavigationMenu>
                            <NavigationMenuList>
                                {menu.map((item) => (
                                    <NavigationMenuItem key={item.title}>
                                        <NavigationMenuLink
                                            href={item.url}
                                            className="group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-zinc-900  hover:text-primary"
                                        >
                                            {item.title}
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>

                        <p className="text-xl font-bold text-primary">My Brand</p>
                        <Image src="/images/flag.png" alt="flag" width={120} height={60} className="fixed top-0 left-0" />

                    </div>
                </nav>

                {/* Mobile Menu */}
                <div className="block lg:hidden ">
                    <div className="flex items-center justify-between">

                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" onClick={() => setIsOpen(prev => !prev)}>
                                    <Menu className="size-8 text-zinc-900" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="overflow-y-auto flex flex-col z-[999]" dir="ltr" side="left">
                                <SheetHeader>
                                    <SheetTitle>
                                        <Link href={"/"} className="text-primary">
                                            My Brands
                                        </Link>
                                    </SheetTitle>
                                </SheetHeader>

                                <div className="mt-6 flex flex-col space-y-2">
                                    {menu.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.url}
                                            onClick={() => setIsOpen(prev => !prev)}
                                            className="px-4 py-3 text-sm font-medium rounded-md text-zinc-800 hover:bg-muted hover:text-primary"
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>

                                <Image src="/images/flag.png" alt="flag" width={120} height={60} className="fixed bottom-0 left-0" />
                            </SheetContent>
                        </Sheet>



                        <p className="text-xl font-bold text-primary">My Brand</p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;