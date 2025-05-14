import { Hero } from "@/sanity/types/sanity.types"
import dynamic from "next/dynamic";
import { ComponentType } from "react"

type PageSection = Hero

type SectionComponent<T extends PageSection = PageSection> = ComponentType<{
    section: T
}>;

const sectionComponentsMap: Record<string, SectionComponent> = {
    hero: dynamic(() => import("../sections/Hero"), { ssr: true }),
};

type Props = {
    sections: PageSection[]
}

export default function PageBuilder({ sections }: Props) {
    if (!sections || sections.length === 0) {
        return null;
    }

    return (
        <>
            {sections.map((section, index) => {
                const SectionComponent = sectionComponentsMap[section._type];

                if (SectionComponent) {
                    return (
                        <SectionComponent section={section} key={index}/>
                    )
                }
            })}
        </>
    )
}