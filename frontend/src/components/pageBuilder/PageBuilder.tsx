import { Contact, ExpandedKeyCase, Form, Hero, KeyCases, MediaAppearancesSection, MediaTextBlock, PageHeading, LibsynEmbedSection } from "@/sanity/types/sanity.types";
import dynamic from "next/dynamic";
import { ComponentType } from "react"

type PageSection = Hero | MediaTextBlock | KeyCases | Contact | Form | MediaAppearancesSection | PageHeading | ExpandedKeyCase | LibsynEmbedSection;

type SectionComponent<T extends PageSection = PageSection> = ComponentType<{
    section: T
}>;

const sectionComponentsMap: Record<string, SectionComponent> = {
    hero: dynamic(() => import("../sections/Hero"), { ssr: true }) as SectionComponent,
    mediaTextBlock: dynamic(() => import("../sections/MediaTextBlock"), { ssr: true }) as SectionComponent,
    keyCases: dynamic(() => import("../sections/KeyCases"), { ssr: true }) as SectionComponent,
    contact: dynamic(() => import("../sections/Contact"), { ssr: true }) as SectionComponent,
    form: dynamic(() => import("../sections/form/Form"), { ssr: true }) as SectionComponent,
    mediaAppearancesSection: dynamic(() => import("../sections/MediaAppearances")) as SectionComponent,
    pageHeading: dynamic(() => import("../sections/PageHeading"), { ssr: true }) as SectionComponent,
    expandedKeyCase: dynamic(() => import("../sections/ExpandedKeyCase"), { ssr: true }) as SectionComponent,
    libsynEmbedSection: dynamic(() => import("../sections/LibsynEmbedSection"), { ssr: true }) as SectionComponent,
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