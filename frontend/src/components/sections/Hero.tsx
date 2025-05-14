import { Hero as HeroType } from "@/sanity/types/sanity.types"
import Section from "../Section"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/urlFor"
import { PortableText } from "next-sanity"
import Button from "../Button"

type Props = {
    section: HeroType
}

export default function Hero({ section }: Props) {
    console.log(section.buttons[0])

    return (
        <Section className="h-[calc(100vh-74px)]">
            {section.image?.asset?._ref 
                && <div className="relative rounded-2xl h-full overflow-hidden">
                    <Image
                        src={urlFor(section.image?.asset?._ref).url()}
                        alt={section.image.alt ?? ""}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-50 h-1/2 top-1/2"></div>
                </div>
            }
            <div className="absolute text-white top-[55%] sm:w-3/4 z-10 px-4 sm:px-12">
                <h1 className="text-orange-500 text-6xl font-bold tracking-wide text-wrap text-shadow-lg mb-2">{section.heading}</h1>
                {section.text && <PortableText value={section.text}/>}
                <div className="mt-6">
                    {section.buttons?.[0] && <Button buttonProps={section.buttons[0]} className="mr-3"/>}
                    {section.buttons?.[1] && <Button buttonProps={section.buttons[1]}/>}
                </div>
            </div>
        </Section>
    )
}