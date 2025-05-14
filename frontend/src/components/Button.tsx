import { Button as ButtonType } from "@/sanity/types/sanity.types";
import Link from "next/link";

interface Props {
    buttonProps: ButtonType;
    className?: string;
}

export default function Button({ buttonProps, className }: Props) {
    const variants = {
        default: `bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500`,
        secondary: `bg-venstre-blue-700 text-white hover:bg-venstre-blue-800 focus:ring-venstre-blue-700`,
        outline: `border border-venstre-blue-700 text-venstre-blue-700 hover:bg-venstre-blue-600 focus:ring-venstre-blue-700`,
        text: `text-venstre-blue-700 hover:text-venstre-blue-800 focus:ring-venstre-blue-700`,
    };

    return (
        <Link 
            href={buttonProps.link?.linkType === "internal" 
                ? `/${buttonProps.link.internalLink?._ref}`
                : buttonProps.link?.externalUrl ?? "/"
            }
            className={`${className} ${variants[buttonProps.variant ?? "default"]} px-4 py-2 rounded font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2`}
        >
            {buttonProps.text}
        </Link>
    );
};