import { formatPhoneNumber } from "@/lib/formatPhoneNumber"
import { sanityFetch } from "@/sanity/lib/live"
import { MenuItem } from "@/sanity/types/sanity.types"
import { defineQuery } from "next-sanity"
import Link from "next/link"
import SocialMediaLink from "../SocialMediaLink"

const SETTINGS_QUERY = defineQuery(`*[_type == "settings"]{ _id, title, menu, socialMediaLinks, phone, email }[0]`)

export default async function Footer() {
    const { data: settings } = await sanityFetch({
        query: SETTINGS_QUERY,
        params: {}
    })

    return (
        <footer className="bg-venstre-blue-700 text-white px-4 py-6">
            <div className="flex flex-col md:flex-row md:space-x-16">
                <div>
                    <Link href="/" className="text-orange-500 text-3xl font-semibold">{settings.title}</Link>
                    <div className="mt-4 flex flex-col">
                        {settings.menu.map((menuItem: MenuItem, index: number) => (
                            <Link
                                href={(menuItem.menuItemUrl?.linkType == "external" ? menuItem.menuItemUrl.externalUrl : menuItem.menuItemUrl?.internalLink?._ref) ?? "#"}
                                key={index}
                                className="hover:text-orange-500 duration-150"
                            >
                                {menuItem.text}
                            </Link>
                        ))}
                    </div>
                </div>
                
                <div>
                    <div className="mt-4 md:mt-0">
                        <p className="font-semibold mb-2">Kontakt mig på:</p>
                        <p>
                            <span className="font-medium">Tlf.: </span>
                            <Link href={`tel:${settings.phone}`} className="hover:text-orange-500 duration-150">+45 {formatPhoneNumber(settings.phone)}</Link>
                        </p>
                        <p>
                            <span className="font-medium">Email: </span>
                            <Link href={`mailto:${settings.email}`} className="hover:text-orange-500 duration-150">{settings.email}</Link>
                        </p>
                    </div>
                    <div className="mt-4 mb-8">
                        <p className="font-semibold mb-2">Følg mig på:</p>
                        <div className="flex space-x-4">
                            {Object.keys(settings.socialMediaLinks).map(media => (
                                <SocialMediaLink 
                                    media={media} 
                                    url={settings.socialMediaLinks[media]}
                                    key={media}
                                    iconClassName="h-7 w-7"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-4 border-t-[1px]">
                <p>Hjemmesiden er designet og udviklet af Rasmus Thingholm. Kontakt på <Link href={`mailto:rasmusthingholm@gmail.com`} className="underline">rasmusthingholm@gmail.com</Link></p>
            </div>
        </footer>
    )
}