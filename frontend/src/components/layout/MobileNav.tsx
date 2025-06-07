"use client";

import { MenuItem } from "@/sanity/types/sanity.types";
import Link from "next/link";
import { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

type Props = {
    menu: MenuItem[];
}

export default function MobileNav({ menu }: Props) {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="flex items-center lg:hidden">
            <button 
                className="relative"
                onClick={() => setShowNav(s => !s)}
            >
                <IoMenuOutline size={42}/>
            </button>

            <div className={`${showNav ? "left-0" : "left-full"} absolute top-0`}>
                <div 
                    className={`${showNav ? "opacity-50" : "opacity-0"} duration-150 bg-black absolute top-0 left-0 w-screen h-screen`}
                    onClick={() => setShowNav(false)}
                ></div>
            </div>

            <div className={`${showNav ? "right-0" : "-right-full"} absolute duration-150 bg-venstre-blue-700 h-screen top-0 py-2 min-w-3/5`}>
                <button 
                    className="absolute top-4 right-4"
                    onClick={() => setShowNav(s => !s)}
                >
                    <IoCloseOutline size={42}/>
                </button>
                <nav className="mt-16 flex flex-col">
                    {menu?.map((menuItem, index) => (
                        <Link
                            key={index}
                            href={`/${menuItem.menuItemUrl?.internalLink?.slug?.current}`}
                            className={`${index == 0 ? "border-t-[1px]" : ""} border-b-[1px] border-venstre-blue-600 pl-4 pr-20 py-2`}
                            onClick={() => setShowNav(false)}
                        >
                            {menuItem.text}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    )
}