import { MediaTextBlock as MediaTextBlockType } from "@/sanity/types/sanity.types"
import Section from "../Section";
import { PortableText } from "next-sanity";
import Button from "../Button";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/urlFor";

type Props = {
    section: MediaTextBlockType;
}

export default function MediaTextBlock({ section }: Props) {
    const imagePositionSectionVariants = {
        left: "md:flex-row-reverse",
        right: "md:flex-row",
        start: "",
        end: "",
    }

    const imagePositionImageVariants = {
        left: "mt-8 md:mt-0 md:mr-12 md:w-1/3",
        right: "mt-8 md:mt-0 md:ml-12 md:w-1/3",
        start: "",
        end: "mt-8",
    }

    return (
        <Section className={`${imagePositionSectionVariants[section.imagePosition ?? "left"]} flex flex-col items-center`}>
            {section.content &&
            <div className="md:w-2/3">
                {section.heading && 
                    <h2 className="text-3xl font-bold text-orange-500 mb-4">{section.heading}</h2>
                }
                {section.content && 
                    <PortableText value={section.content}/>
                }
                {section.buttons && 
                    <div className="mt-6">
                        {section.buttons?.[0] && <Button buttonProps={section.buttons[0]} className="mr-3"/>}
                        {section.buttons?.[1] && <Button buttonProps={section.buttons[1]}/>}
                    </div>
                }
            </div>
            }
            {section.image?.asset?._ref &&
                <Image
                src={urlFor(section.image?.asset?._ref).url()}
                alt={section.image.alt ?? ""}
                height={400}
                width={300}
                className={`${imagePositionImageVariants[section.imagePosition ?? "left"]} object-cover rounded-2xl w-full`}
                />
            }
        </Section>
    )
}