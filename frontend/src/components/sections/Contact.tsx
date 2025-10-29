import { Contact as ContactType } from "@/sanity/types/sanity.types"
import { getSocialMediaLinks } from "@/lib/queries/getSocialMediaLinks"
import ContactContent from "./ContactContent"

type Props = {
    section: ContactType
}

export const revalidate = 60;

export default async function Contact({ section }: Props) {
    const socialMediaLinks = await getSocialMediaLinks();

    return <ContactContent section={section} socialMediaLinks={socialMediaLinks}/>
}