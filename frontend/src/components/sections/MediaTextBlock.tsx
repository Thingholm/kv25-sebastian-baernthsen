import { MediaTextBlock as MediaTextBlockType } from "@/sanity/types/sanity.types"
import Section from "../Section";
import { PortableText } from "next-sanity";
import Button from "../Button";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/urlFor";
import SectionHeading from "../SectionHeading";

type Props = {
    section: MediaTextBlockType;
}

export default function MediaTextBlock({ section }: Props) {
    const imageUrl = section.image?.asset?._ref && urlFor(section.image.asset._ref).url();
    const imageAlt = section.image?.alt ?? "";
    const imageWidth = imageUrl ? (parseInt(imageUrl.split("-")[1]?.split(".")[0].split("x")[0]) ?? 2000) : 2000;
    const imageHeight = imageUrl ? (parseInt(imageUrl.split("-")[1]?.split(".")[0].split("x")[1]) ?? 1000) : 1000;

    const imagePositionSectionVariants = {
        left: "md:flex-row-reverse",
        right: "md:flex-row",
        start: "flex-col-reverse",
        end: "",
    }

    const imagePositionImageVariants = {
        left: "mt-8 md:mt-0 md:mr-12 md:w-2/5",
        right: "mt-8 md:mt-0 md:ml-12 md:w-2/5",
        start: "mb-8",
        end: "mt-8",
    }

    const imagePositionTextVariants = {
        left: "md:w-3/5",
        right: "md:w-3/5",
        start: "",
        end: "",
    }

    return (
        <Section className={`${imagePositionSectionVariants[section.imagePosition ?? "left"]} flex flex-col items-center`}>
            {section.content &&
            <div className={`${section.image?.asset?._ref ? imagePositionTextVariants[section.imagePosition ?? "left"] : ""}`}>
                {section.heading && 
                    <SectionHeading>{section.heading}</SectionHeading>
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
            {imageUrl &&
                <Image
                src={imageUrl}
                alt={imageAlt}
                height={imageHeight}
                width={imageWidth}
                className={`${imagePositionImageVariants[section.imagePosition ?? "left"]} object-cover rounded-2xl w-full`}
                />
            }
        </Section>
    )
}