import { Contact as ContactType } from "@/sanity/types/sanity.types"
import Section from "../Section"
import { getSocialMediaLinks } from "@/lib/queries/getSocialMediaLinks"
import SectionHeading from "../SectionHeading"
import { IoCallOutline, IoMailOutline } from "react-icons/io5"
import Link from "next/link"
import { formatPhoneNumber } from "@/lib/formatPhoneNumber"
import SocialMediaLink from "../SocialMediaLink"

type Props = {
    section: ContactType
}

export default async function Contact({ section }: Props) {
    const socialMediaLinks = await getSocialMediaLinks();

    return (
        <Section className="text-center">
            <SectionHeading>{section.heading}</SectionHeading>
            <div className="flex flex-col sm:flex-row justify-center items-center">
                <div className="flex flex-col items-center mb-8 sm:mb-0 sm:mr-20 w-52">
                    <IoCallOutline 
                        size={55}
                        className="text-orange-500"
                    />
                    <p className="font-semibold text-2xl pt-4 pb-2">Telefon</p>
                    <Link 
                        href={`tel:${section.phone}`}
                        className="text-xl hover:text-orange-500 duration-150 underline decoration-dotted underline-offset-4"
                    >
                        +45 {formatPhoneNumber(section.phone)}
                    </Link>
                </div>
                <div className="flex flex-col items-center w-52">
                    <IoMailOutline                    
                        size={55}
                        className="text-orange-500"
                    />
                    <p className="font-semibold text-2xl pt-4 pb-2">Mail</p>
                    <Link 
                        href={`mailto:${section.email}`}
                        className="text-xl hover:text-orange-500 duration-150 underline decoration-dotted underline-offset-4"
                    >
                        {section.email}
                    </Link>
                </div> 
            </div>
            {section.socialMedia && socialMediaLinks &&
                <div className="flex flex-wrap justify-center pt-8">
                    {Object.keys(socialMediaLinks.socialMediaLinks).map(media => (
                        <SocialMediaLink
                            media={media}
                            url={socialMediaLinks.socialMediaLinks[media]}
                            key={media}
                            iconClassName="h-6 w-6"
                            className="px-2 py-2"
                        />
                    ))}
                </div>
            }
        </Section>
    )
}