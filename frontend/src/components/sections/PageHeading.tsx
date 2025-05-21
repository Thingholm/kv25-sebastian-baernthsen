import { urlFor } from "@/sanity/lib/urlFor"
import { PageHeading as PageHeadingType } from "@/sanity/types/sanity.types"
import Image from "next/image"

type Props = {
    section: PageHeadingType
}

export default async function PageHeading({ section }: Props) {
    return (
        <section>
            <div className="relative w-full h-52 md:h-64">
                {section.image?.asset?._ref &&
                    <Image
                        src={urlFor(section.image?.asset?._ref).url()}
                        alt={section.image.alt ?? ""}      
                        fill     
                        className="object-cover"     
                    />
                }
            </div>
            <h2 className="text-4xl font-bold text-center text-orange-500 py-4">{section.heading}</h2>
        </section>
    )
}