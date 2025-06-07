import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

const components = {
    block: {
        normal: ({ children }: any) => (
            <p className="mb-4">{children}</p>
        ),
    },
};

interface CustomPortableTextProps {
    value: PortableTextBlock[];
}

export default function CustomPortableText({ value }: CustomPortableTextProps) {
    return <PortableText value={value} components={components} />;
}