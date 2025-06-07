"use client"

import { motion } from "framer-motion";
import { IoCloseCircleOutline } from "react-icons/io5";

const fadeAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 2, ease: "easeInOut", }
};

export default function Error() {
    return (
        <motion.div 
            className="min-h-72 flex justify-center flex-col items-center"
            variants={fadeAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <IoCloseCircleOutline size={64} className="text-red-600 mb-4"/>

            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-orange-500">Noget gik galt</h2>
                <p>Prøv venligst igen senere eller kontakt mig på anden vis.</p>
            </div>
        </motion.div>
    );
}