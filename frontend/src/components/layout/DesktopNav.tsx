import { Settings } from "@/sanity/types/sanity.types";
import Link from "next/link";

type Props = {
    settings: Settings;
}

export default function DesktopNav({ settings }: Props) {

    return (
        <div className="md:flex items-center hidden space-x-8">
            {settings.menu?.map((menuItem, index) => (
                <div className="group relative">
                    <Link
                        key={index}
                        href={(menuItem.menuItemUrl?.linkType == "external" ? menuItem.menuItemUrl.externalUrl : menuItem.menuItemUrl?.internalLink?._ref) ?? "#"}
                        className="hover:text-orange-500 duration-200"
                    >
                        {menuItem.text}
                    </Link>
                    <div className={`${menuItem.text === "Om mig" ? "w-2 left-[calc(50%-4px)]" : "left-1/2 w-0"} absolute block h-0.5 bg-orange-500 rounded-full group-hover:left-0 group-hover:w-full duration-200`}></div>
                </div>
            ))}
        </div>
    )
}