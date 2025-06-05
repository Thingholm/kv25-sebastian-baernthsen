import { urlFor } from "@/sanity/lib/urlFor";
import { ExpandedKeyCase as ExpandedKeyCaseType } from "@/sanity/types/sanity.types";
import Section from "../Section";
import { PortableText } from "next-sanity";
import Image from "next/image";

type Props = {
    section: ExpandedKeyCaseType;
}
export default function ExpandedKeyCase({ section }: Props) {
    return (
        <Section className="mb-8">
            <div className={`${section.imagePosition == "right" ? "md:flex-row" : "md:flex-row-reverse"} flex flex-col items-center text-center gap-x-8`}>
                <div className="flex flex-col items-center mb-6 md:w-1/2">
                    {section.icon?.asset?._ref &&
                        <Image
                            src={urlFor(section.icon?.asset?._ref).url()}
                            alt={section.icon?.alt ?? ""}
                            width={70}
                            height={70}
                            className="mb-2"
                        />
                    }
                    <h3 className="text-2xl font-semibold">{section.heading}</h3>
                </div>
                {section.image?.asset?._ref &&
                    <div className="relative w-full md:w-1/2 h-52 md:h-64 rounded-2xl overflow-hidden mb-6">
                        <Image
                            src={urlFor(section.image?.asset?._ref).url()}
                            alt={section.image?.alt ?? ""}
                            fill
                            style={{ objectFit: "cover" }}
                            className="object-cover"
                        />
                    </div>
                }
            </div>
            {section.content &&
                <PortableText value={section.content} />
            }
        </Section>
    );
}