type Props = {
    children: React.ReactNode;
    className?: string;
}

export default function Section({ children, className }: Props) {
    return (
        <section className={`${className} relative px-4 py-4`}>
            {children}
        </section>
    )
}