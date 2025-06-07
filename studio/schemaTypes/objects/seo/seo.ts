import { defineField, defineType } from "sanity";

export default defineType({
    name: "seoMetaFields",
    title: "SEO & Metadata",
    type: "object",
    fields: [
        defineField({
            name: "metaTitle",
            title: "Meta Title",
            type: "string",
        }),
        defineField({
            name: "metaDescription",
            title: "Meta Description",
            type: "text",
        }),
        defineField({
            name: "metaImage",
            title: "Meta Image",
            type: "image",
        }),
        defineField({
            name: "metaKeywords",
            title: "Meta Keywords",
            type: "array",
            of: [{ type: "string" }],
        }),
        defineField({
            name: "openGraph",
            title: "Open Graph",
            type: "openGraph",
        }),
    ],
})