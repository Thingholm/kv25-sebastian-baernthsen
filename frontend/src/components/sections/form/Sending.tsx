"use client";

import { motion } from "motion/react";

const dotVariants = {
    jump: {
        y: -30,
        transition: {
            duration: 0.8,
            repeat: Infinity,
            repeatType: "mirror" as const,
            ease: "easeInOut",
        },
    },
}

const fadeAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 2, ease: "easeInOut", }
};

export default function Sending() {
    return (
        <motion.div 
            className="min-h-72 flex justify-center items-center"
            variants={fadeAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
        >            
            <motion.div
                animate="jump"
                transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
                className="flex justify-center items-center space-x-2"
            >
                <motion.div className="w-4 h-4 rounded-full bg-orange-500 will-change-transform" variants={dotVariants} />
                <motion.div className="w-4 h-4 rounded-full bg-orange-500 will-change-transform" variants={dotVariants} />
                <motion.div className="w-4 h-4 rounded-full bg-orange-500 will-change-transform" variants={dotVariants} />
            </motion.div>
        </motion.div>
    )
}