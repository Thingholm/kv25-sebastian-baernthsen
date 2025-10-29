import { PageHeading as PageHeadingType } from "@/sanity/types/sanity.types"

type Props = {
    section: PageHeadingType
}

export const revalidate = 60;

export default async function PageHeading({ section }: Props) {
    return (
        <section>
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-orange-500 pt-8 pb-4">{section.heading}</h2>
        </section>
    )
}