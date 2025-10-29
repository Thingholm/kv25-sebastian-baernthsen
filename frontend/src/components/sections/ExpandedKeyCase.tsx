"use client";

import { urlFor } from "@/sanity/lib/urlFor";
import { ExpandedKeyCase as ExpandedKeyCaseType } from "@/sanity/types/sanity.types";
import Section from "../Section";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
    section: ExpandedKeyCaseType;
}

const headingVariants = {
    hidden: (align: ExpandedKeyCaseType['imagePosition']) => ({ 
        opacity: 0, 
        x: align == "right" ? "-50%" : "50%" 
    }),
    visible: { 
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    }
}

const imageVariants = {
    hidden: (align: ExpandedKeyCaseType['imagePosition']) => ({ 
        opacity: 0, 
        x: align == "right" ? "50%" : "-50%" 
    }),
    visible: { 
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    }
}

const textVariants = {
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

export const revalidate = 60;

export default function ExpandedKeyCase({ section }: Props) {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    return (
        <Section className="mb-8">
            <motion.div
                ref={containerRef}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >  
                <div className={`${section.imagePosition == "right" ? "md:flex-row" : "md:flex-row-reverse"} flex flex-col items-center text-center gap-x-8`}>
                    <motion.div
                        variants={headingVariants}
                        custom={section.imagePosition}
                        className="flex flex-col items-center mb-6 md:w-1/2"
                    >
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
                    </motion.div>
                    {section.image?.asset?._ref &&
                        <motion.div 
                            variants={imageVariants}
                            custom={section.imagePosition}
                            className="relative w-full md:w-1/2 h-52 md:h-64 rounded-2xl overflow-hidden mb-6"
                        >
                            <Image
                                src={urlFor(section.image?.asset?._ref).url()}
                                alt={section.image?.alt ?? ""}
                                fill
                                style={{ objectFit: "cover" }}
                                className="object-cover"
                            />
                        </motion.div>
                    }
                </div>
                {section.content &&
                    <motion.div
                        variants={textVariants}
                    >
                        <PortableText value={section.content} />
                    </motion.div>
                }
            </motion.div>
        </Section>
    );
}