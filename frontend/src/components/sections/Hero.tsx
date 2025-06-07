"use client";

import { Hero as HeroType } from "@/sanity/types/sanity.types"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/urlFor"
import { PortableText } from "next-sanity"
import Button from "../Button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type Props = {
    section: HeroType
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
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

export default function Hero({ section }: Props) {
    const containerRef = useRef(null)
    const textRef = useRef(null)
    const containerInView = useInView(containerRef, { once: true, amount: 0.2 })
    const textInView = useInView(textRef, { once: true, amount: 0.2 })

    return (
        <section className="h-[calc(100vh-53px)]">
            {section.image?.asset?._ref && 
                <motion.div 
                    ref={containerRef}
                    className="relative h-full overflow-hidden"
                    variants={containerVariants}
                    initial="hidden"
                    animate={containerInView ? "visible" : "hidden"}
                >
                    <Image
                        src={urlFor(section.image?.asset?._ref).url()}
                        alt={section.image.alt ?? ""}
                        priority={true}
                        placeholder="blur"
                        blurDataURL={urlFor(section.image?.asset?._ref).url()}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent opacity-50 h-1/2 top-1/2"></div>
                </motion.div>
            }
            <motion.div 
                ref={textRef}
                className="absolute text-white top-[55%] md:w-3/4 z-10 px-4 md:px-18 lg:px-30"
                variants={textVariants}
                initial="hidden"
                animate={textInView ? "visible" : "hidden"}
            >
                <h1 className="text-orange-500 text-6xl font-bold tracking-wide text-wrap text-shadow-lg mb-2">{section.heading}</h1>
                {section.text && <PortableText value={section.text}/>}
                <div className="mt-6">
                    {section.buttons?.[0] && <Button buttonProps={section.buttons[0]} className="mr-3"/>}
                    {section.buttons?.[1] && <Button buttonProps={section.buttons[1]}/>}
                </div>
            </motion.div>
        </section>
    )
}