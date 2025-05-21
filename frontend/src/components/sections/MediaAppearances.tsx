
import { MediaAppearancesSection } from "@/sanity/types/sanity.types"
import Section from "../Section"
import SectionHeading from "../SectionHeading"
import { getMediaAppearances } from "@/lib/queries/getMediaAppearances"
import MediaAppearancesCarousel from "../MediaAppearancesCarousel"


type Props = {
    section: MediaAppearancesSection
}

export default async function MediaAppearances({ section }: Props) {
    const MediaAppearances = await getMediaAppearances();
    
    return (
        <Section>
            <SectionHeading className="text-center">{section.heading}</SectionHeading>
            <MediaAppearancesCarousel appearances={MediaAppearances.appearances} />
        </Section>
    )
}

