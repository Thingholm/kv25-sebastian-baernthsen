import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const SETTINGS_QUERY = defineQuery(`
    *[_type == "settings"]{ 
        _id, 
        title,
        subtitle,
        menu[] {
            _key,
            text,
            menuItemUrl {
                linkType,
                internalLink -> {
                    _id,
                    slug {
                        current
                    }
                }
            }
        }
    }[0]
`);

export default async function Header() {
    const { data: settings } = await sanityFetch({
        query: SETTINGS_QUERY,
        params: {}
    })

    return (
        <header className="bg-venstre-blue-700 text-white flex justify-between items-center px-4 md:px-20 lg:px-32 py-1 w-full fixed z-50 shadow-md">
            <Link 
                href="/"
                className="flex items-center"
            >
                <Image
                    src="/Venstre_Logo_Kun_V_Orange.svg"
                    alt="Logo"
                    width={35}
                    height={46}
                    className="inline"
                />
                <div className="ml-2">
                    <h1 className="text-lg font-bold">{settings.title}</h1>
                    <h2 className="relative -top-1 text-sm font-light">{settings.subtitle}</h2>
                </div>
            </Link>

           <MobileNav menu={settings.menu}/>
           <DesktopNav menu={settings.menu}/>
        </header>
    )
}