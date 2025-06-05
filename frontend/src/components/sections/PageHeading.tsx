import { urlFor } from "@/sanity/lib/urlFor"
import { PageHeading as PageHeadingType } from "@/sanity/types/sanity.types"
import Image from "next/image"

type Props = {
    section: PageHeadingType
}

export default async function PageHeading({ section }: Props) {
    return (
        <section>
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-orange-500 py-8">{section.heading}</h2>
        </section>
    )
}