import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import type { PortableTextComponents } from '@portabletext/react';

const components: PortableTextComponents = {
    block: {
        normal: ({ children }) => <p className="mb-4">{children}</p>,
    },
};

interface CustomPortableTextProps {
    value: PortableTextBlock[];
}

export default function CustomPortableText({ value }: CustomPortableTextProps) {
    return <PortableText value={value} components={components} />;
}