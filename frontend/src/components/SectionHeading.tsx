type Props = {
    children: React.ReactNode;
    className?: string;
}

export default function SectionHeading({ children, className }: Props) {
    return (
        <h2 
            className={`${className} text-4xl font-bold text-orange-500 mb-8`}
        >
            {children}
        </h2>
    )
}