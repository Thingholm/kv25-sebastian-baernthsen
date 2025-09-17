"use client";

import { LibsynEmbedSection as LibsynEmbedSectionType } from "@/sanity/types/sanity.types"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Section from "../Section";
import SectionHeading from "../SectionHeading";
import CustomPortableText from "../CustomPortableText";
import LibsynEmbed from "../LibsynEmbed";

type Props = {
    section: LibsynEmbedSectionType;
}

type SanityPortableText = {
    _type: 'block';
    children: {
        _type: 'span';
        text: string;
        marks?: string[];
        _key: string;
    }[];
    style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote';
    _key: string;
}[];

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

export default function LibsynEmbedSection({ section }: Props) {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    return (
        <Section>
            <motion.div
                ref={containerRef}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`flex flex-col items-center text-center`}
                variants={variants}
            >
                {section.heading && 
                    <SectionHeading className="mb-4">{section.heading}</SectionHeading>
                }
                {section.content && 
                    <div className="sm:w-4/5 mb-4">
                        <CustomPortableText value={section.content as SanityPortableText}/>
                    </div>
                }
                {section.embedLink &&
                    <LibsynEmbed src={section.embedLink}/>
                }
            </motion.div>
        </Section>
    )
}