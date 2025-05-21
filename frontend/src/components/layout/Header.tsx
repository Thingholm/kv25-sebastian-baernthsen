import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { getPages } from "@/lib/queries/getPages";

const SETTINGS_QUERY = defineQuery(`*[_type == "settings"]{ _id, title }[0]`)

export default async function Header() {
    const pages = await getPages();

    const { data: settings } = await sanityFetch({
        query: SETTINGS_QUERY,
        params: {}
    })

    return (
        <header className="bg-venstre-blue-700 text-white flex justify-between items-center px-4 md:px-20 lg:px-32 py-2 w-full fixed z-50 shadow-md">
            <Link 
                href="/"
            >
                <Image
                    src="/Venstre_Logo_Kun_V_Orange.svg"
                    alt="Logo"
                    width={42}
                    height={50}
                    className="inline"
                />
                <h1 className="inline ml-2 text-lg font-bold">{settings.title}</h1>
            </Link>

           <MobileNav pages={pages}/>
           <DesktopNav pages={pages}/>
        </header>
    )
}