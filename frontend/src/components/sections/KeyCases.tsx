"use client";

import { KeyCases as KeyCasesType } from "@/sanity/types/sanity.types";
import Section from "../Section";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/urlFor";
import Button from "../Button";
import SectionHeading from "../SectionHeading";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
    section: KeyCasesType;
}


const itemVariants = {
    hidden: { 
        opacity: 0, 
        x: -30 
    },
    visible: (index: number) => ({ 
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            delay: index * 0.2,
        }
    })
};

export default function KeyCases({ section }: Props) {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });

    return (
        <Section className="bg-venstre-blue-700 text-white text-center pb-12 pt-8">
            <SectionHeading>{section.heading}</SectionHeading>
            <motion.div 
                ref={containerRef}
                className="flex-wrap justify-around mb-8 sm:flex"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {section.cases?.map((caseItem, index) => (
                    <motion.div 
                        variants={itemVariants}
                        custom={index}
                        className="flex flex-col items-center sm:px-2" 
                        key={caseItem._key}
                    >
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
                    </motion.div>
                ))}
            </motion.div>
            {section.button &&
                <Button buttonProps={section.button}/>
            }
        </Section>
    )
}