"use client";

import { Form as FormType } from "@/sanity/types/sanity.types";
import Section from "../../Section";
import SectionHeading from "../../SectionHeading";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Sending from "./Sending";
import Error from "./Error";
import Sent from "./Succes";

type FormStatus = "None" | "Sending" | "Sent" | "Error";

type Props = {
    section: FormType
}

const defaultFormData = {
    name: "",
    phone: "",
    email: "",
    message: "",
}

const formVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 2,
            ease: "easeInOut"
        }
    }
}

export default function Form({ section }: Props) {
    const [formData, setFormData] = useState(defaultFormData)
    const [status, setStatus] = useState<FormStatus>("None");
    const formRef = useRef(null);
    const isInView = useInView(formRef, { once: true, amount: 0.2 });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("Sending");

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...formData,
                toEmail: section.receivingEmail
            })
        });

        if (res.ok) {
            setStatus("Sent");
            setFormData(defaultFormData);
        } else {
            setStatus("Error");
        }
    }

    return (
        <Section>
            {section.heading && 
                <SectionHeading className="text-center">{section.heading}</SectionHeading>
            }
            {status === "None" &&
                <motion.form 
                    ref={formRef}
                    onSubmit={handleSubmit} 
                    className="space-y-3"
                    variants={formVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    exit="exit"
                >
                    <div>
                        <label 
                            htmlFor="name"
                            className="opacity-60 mb-2 block"
                        >
                            Navn *
                        </label>
                        <input 
                            name="name" 
                            placeholder="Navn" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-venstre-blue-600 focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white"
                        />
                    </div>
                    <div className="space-y-3 sm:space-y-0 sm:flex">
                        <div className="sm:w-1/3">
                            <label 
                                htmlFor="phone"
                                className="opacity-60 mb-2 block"
                            >
                                Telefon (frivillig)
                            </label>
                            <input
                                name="phone"
                                placeholder="Telefon (frivillig)"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-venstre-blue-600 focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white"
                            />
                        </div>
                        <div className="sm:ml-8 sm:w-2/3">
                            <label 
                                htmlFor="email"
                                className="opacity-60 mb-2 block"
                            >
                                Email *
                            </label>
                            <input
                                name="email" 
                                placeholder="Email" 
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-venstre-blue-600 focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white"
                            />
                        </div> 
                    </div>              
                    <div>
                        <label 
                            htmlFor="message"
                            className="opacity-60 mb-2 block"
                        >
                            Besked *
                        </label>
                        <textarea
                            name="message"
                            placeholder="Besked"
                            value={formData.message}
                            onChange={handleChange}
                            required 
                            className="w-full px-4 py-3 h-32 border border-gray-300 rounded-lg focus:ring-2 focus:ring-venstre-blue-600 focus:border-transparent transition duration-200 bg-gray-50 focus:bg-white resize-none"
                        />
                    </div>
                    <button 
                        type="submit"
                        className="bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500 w-full px-4 py-2 rounded font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95"
                    >
                        {section.submitButtonText}
                    </button>
                </motion.form>
            }

            {status === "Sending" && 
                <Sending/>
            }

            {status === "Sent" && 
                <Sent/>
            }

            {status === "Error" && 
                <Error/>
            }
        </Section>
    )
}