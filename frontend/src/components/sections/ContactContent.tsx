"use client";

import { Contact, Settings } from "@/sanity/types/sanity.types";
import Section from "../Section";
import SectionHeading from "../SectionHeading";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import Link from "next/link";
import { formatPhoneNumber } from "@/lib/formatPhoneNumber";
import SocialMediaLink from "../SocialMediaLink";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
    section: Contact,
    socialMediaLinks: any | Settings
}

const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    }
}

export default function ContactContent({ section, socialMediaLinks }: Props) {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    return (
        <Section className="text-center">
            <motion.div
                ref={containerRef}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <SectionHeading>{section.heading}</SectionHeading>
                <motion.div 
                    className="flex flex-col sm:flex-row justify-center items-center"
                    variants={variants}
                >
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
                </motion.div>
                {section.socialMedia && socialMediaLinks &&
                    <motion.div 
                        className="flex flex-wrap justify-center pt-8"
                        variants={variants}
                    >
                        {Object.keys(socialMediaLinks.socialMediaLinks).map(media => (
                            <SocialMediaLink
                                media={media}
                                url={socialMediaLinks.socialMediaLinks[media]}
                                key={media}
                                iconClassName="h-6 w-6"
                                className="px-2 py-2"
                            />
                        ))}
                    </motion.div>
                }
            </motion.div>
        </Section>
    )
}