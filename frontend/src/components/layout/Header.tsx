import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

const SETTINGS_QUERY = defineQuery(`*[_type == "settings"]{ _id, title, menu }`)

export default async function Header() {
    const { data: settings } = await sanityFetch({
        query: SETTINGS_QUERY,
        params: {}
    })

    return (
        <header className="bg-venstre-blue-700 text-white flex justify-between items-center px-4 py-2 w-full fixed z-10">
            <Link 
                href="/"
            >
                <Image
                    src="/Venstre_Logo_Kun_V_Orange.svg"
                    alt="Logo"
                    width={50}
                    height={58}
                    className="inline"
                />
                <h1 className="inline ml-2 text-lg font-bold">{settings[0].title}</h1>
            </Link>

           <Nav settings={settings[0]}/>
        </header>
    )
}