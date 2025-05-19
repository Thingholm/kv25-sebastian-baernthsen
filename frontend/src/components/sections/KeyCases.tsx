import { KeyCases as KeyCasesType } from "@/sanity/types/sanity.types";
import Section from "../Section";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/urlFor";
import Button from "../Button";
import SectionHeading from "../SectionHeading";

type Props = {
    section: KeyCasesType;
}

export default function KeyCases({ section }: Props) {
    return (
        <Section className="bg-venstre-blue-700 text-white text-center pb-12 pt-8">
            <SectionHeading>{section.heading}</SectionHeading>
            <div className=" flex-wrap justify-around mb-8 sm:flex">
                {section.cases?.map(caseItem => (
                    <div className="flex flex-col items-center sm:px-2" key={caseItem._key}>
                        {caseItem.icon?.asset?._ref &&
                            <Image
                                src={urlFor(caseItem.icon?.asset?._ref).url()}
                                alt={caseItem.icon.alt ?? ""}
                                height={70}
                                width={70}
                                style={{ filter: "invert(1)" }}
                                className="mb-2"
                            />
                        }
                        {caseItem.heading &&
                            <h4 className="text-xl font-medium mb-6">{caseItem.heading}</h4>
                        }
                    </div>
                ))}
            </div>
            {section.button &&
                <Button buttonProps={section.button}/>
            }
        </Section>
    )
}