"use client";

import { MenuItem } from "@/sanity/types/sanity.types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    menu: MenuItem[];
}

export default function DesktopNav({ menu }: Props) {
    const pathname = usePathname();
    const currentSlug = pathname === "/" ? "" : pathname.slice(1);

    return (
        <div className="lg:flex items-center hidden space-x-8">
            {menu?.map((menuItem, index) => (
                <div 
                    className="group relative"                         
                    key={index}
                >
                    <Link
                        href={`/${menuItem.menuItemUrl?.internalLink?.slug?.current}`}
                        className="hover:text-orange-500 duration-200"
                    >
                        {menuItem.text}
                    </Link>
                    <div className={`${menuItem.menuItemUrl?.internalLink?.slug?.current === currentSlug ? "w-2 left-[calc(50%-4px)]" : "left-1/2 w-0"} absolute block h-0.5 bg-orange-500 rounded-full group-hover:left-0 group-hover:w-full duration-200`}></div>
                </div>
            ))}
        </div>
    )
}