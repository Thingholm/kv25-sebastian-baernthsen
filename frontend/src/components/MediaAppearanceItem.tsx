import React from "react";
import { urlFor } from "@/sanity/lib/urlFor"
import type { MediaAppearanceItem } from "@/sanity/types/sanity.types"
import Image from "next/image"
import Link from "next/link"
import { getDateString } from "@/lib/getDateString";
import { IoTimeOutline } from "react-icons/io5";

type Props = {
    item: MediaAppearanceItem
}

export default function MediaAppearanceItem({ item }: Props) {
    return (
        <Link href={item.url ?? "/"}>-
            <div className="rounded-2xl overflow-hidden shadow-md w-80 hover:shadow-2xl duration-150 hover:scale-105">
                <div className="relative w-80 h-50">
                    {item.image?.asset?._ref &&
                        <Image
                            src={urlFor(item.image?.asset?._ref).url()}
                            alt={item.image?.alt ?? ""}
                            fill
                            className="object-cover"
                        />
                    }
                </div>
                <div className="px-4 py-2">
                    <p>{item.media}</p>
                    <p className="font-bold text-xl mb-2">{item.heading}</p>
                    <p className="flex items-center"><IoTimeOutline size={16} className="mr-1.5"/> {getDateString(item.date)}</p>

                </div>
            </div>
        </Link>
    )
}