type Props = {
    children: React.ReactNode;
    className?: string;
}

export default function Section({ children, className }: Props) {
    return (
        <section className={`${className} relative px-4 py-4 md:px-20 md:py-8 lg:px-32`}>
            {children}
        </section>
    )
}