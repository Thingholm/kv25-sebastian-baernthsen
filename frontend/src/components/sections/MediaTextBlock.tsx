"use client";

import { MediaTextBlock as MediaTextBlockType } from "@/sanity/types/sanity.types"
import Section from "../Section";
import Button from "../Button";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/urlFor";
import SectionHeading from "../SectionHeading";
import CustomPortableText from "../CustomPortableText";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
    section: MediaTextBlockType;
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

const textVariants = {
    hidden: (align: MediaTextBlockType['imagePosition']) => ({ 
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
    hidden: (align: MediaTextBlockType['imagePosition']) => ({ 
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

export default function MediaTextBlock({ section }: Props) {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    const imageUrl = section.image?.asset?._ref && urlFor(section.image.asset._ref).url();
    const imageAlt = section.image?.alt ?? "";
    const imageWidth = imageUrl ? (parseInt(imageUrl.split("-")[1]?.split(".")[0].split("x")[0]) ?? 2000) : 2000;
    const imageHeight = imageUrl ? (parseInt(imageUrl.split("-")[1]?.split(".")[0].split("x")[1]) ?? 1000) : 1000;

    const imagePositionSectionVariants = {
        left: "md:flex-row-reverse",
        right: "md:flex-row",
        start: "flex-col-reverse",
        end: "",
    }

    const imagePositionImageVariants = {
        left: "mt-8 md:mt-0 md:mr-12 md:w-2/5",
        right: "mt-8 md:mt-0 md:ml-12 md:w-2/5",
        start: "mb-8",
        end: "mt-8",
    }

    const imagePositionTextVariants = {
        left: "md:w-3/5",
        right: "md:w-3/5",
        start: "",
        end: "",
    }

    return (
        <Section>
            <motion.div
                ref={containerRef}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`${imagePositionSectionVariants[section.imagePosition ?? "left"]} flex flex-col items-center`}
            >
                {section.content &&
                <motion.div 
                    className={`${section.image?.asset?._ref ? imagePositionTextVariants[section.imagePosition ?? "left"] : ""}`}
                    variants={textVariants}
                    custom={section.imagePosition}
                >
                    {section.heading && 
                        <SectionHeading className="mb-6">{section.heading}</SectionHeading>
                    }
                    {section.content && 
                        <CustomPortableText value={section.content as SanityPortableText}/>
                    }
                    {section.buttons && 
                        <div className="mt-8">
                            {section.buttons?.[0] && <Button buttonProps={section.buttons[0]} className="mr-3"/>}
                            {section.buttons?.[1] && <Button buttonProps={section.buttons[1]}/>}
                        </div>
                    }
                </motion.div>
                }
                {imageUrl &&
                    <motion.div
                        variants={imageVariants}
                        custom={section.imagePosition}
                        className={`${imagePositionImageVariants[section.imagePosition ?? "left"]} w-full`}
                    >
                        <Image
                            src={imageUrl}
                            alt={imageAlt}
                            height={imageHeight}
                            width={imageWidth}
                            className={`object-cover rounded-2xl`}
                        />
                    </ motion.div>
                }
            </motion.div>
        </Section>
    )
}