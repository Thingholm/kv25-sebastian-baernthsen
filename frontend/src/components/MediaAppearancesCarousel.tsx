'use client'
import MediaAppearanceItem from "./MediaAppearanceItem"
import { useRef, useState, useEffect } from "react"
import { IoChevronBack, IoChevronForward } from "react-icons/io5"
import { MediaAppearanceItem as MediaAppearanceItemType } from "@/sanity/types/sanity.types"
import { motion } from "framer-motion"

const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    },
}

export default function MediaAppearancesCarousel({ appearances }: { appearances: MediaAppearanceItemType[] }) {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const checkScrollButtons = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
            setCanScrollLeft(scrollLeft > 0)
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
        }
    }

    useEffect(() => {
        checkScrollButtons()
        const scrollContainer = scrollRef.current
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', checkScrollButtons)
            return () => scrollContainer.removeEventListener('scroll', checkScrollButtons)
        }
    }, [])

    const scrollLeft = () => {
        if (scrollRef.current) {
            const cardWidth = 320 + 24
            scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' })
        }
    }

    const scrollRight = () => {
        if (scrollRef.current) {
            const cardWidth = 320 + 24
            scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' })
        }
    }

    if (!appearances || appearances.length === 0) {
        return null
    }

    return (
        <motion.div 
            className="relative"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`hidden sm:block absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-lg transition-all duration-200 hover:cursor-pointer ${
                    canScrollLeft 
                        ? 'bg-white hover:bg-gray-50 text-gray-800 hover:shadow-xl' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                aria-label="Scroll left"
            >
                <IoChevronBack size={24} />
            </button>

            <div 
                ref={scrollRef}
                className="flex py-2 pb-10 px-2 space-x-6 overflow-x-auto no-scrollbar scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {appearances.map((item: MediaAppearanceItemType, index: number) => (
                    <MediaAppearanceItem item={item} key={index} />
                ))}
            </div>

            <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`hidden sm:block absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-lg transition-all duration-200 hover:cursor-pointer ${
                    canScrollRight 
                        ? 'bg-white hover:bg-gray-50 text-gray-800 hover:shadow-xl' 
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                aria-label="Scroll right"
            >
                <IoChevronForward size={24} />
            </button>
        </motion.div>
    )
}