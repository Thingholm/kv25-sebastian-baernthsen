"use client"

import { motion } from "framer-motion";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const fadeAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 2, ease: "easeInOut", }
};

export default function Sent() {
    return (
        <motion.div 
            className="min-h-72 flex justify-center flex-col items-center"
            variants={fadeAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <IoCheckmarkCircleOutline size={64} className="text-green-500 mb-4"/>

            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-orange-500">Beskeden blev sendt</h2>
                <p>Tak for henvendelsen. Jeg vender tilbage hurtigst muligt.</p>
            </div>
        </motion.div>
    );
}