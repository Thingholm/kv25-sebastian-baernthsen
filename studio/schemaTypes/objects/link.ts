import { defineField, defineType } from "sanity";

export default defineType({
    name: "link",
    type: "object",
    title: "Link",
    fields: [
        defineField({
            name: "linkType",
            type: "string",
            title: "Link Type",
            options: {
                list: [
                    { title: "Internal", value: "internal" },
                    { title: "External", value: "external" },
                ],
                layout: "radio",
            },
            initialValue: "internal",
        }),
        defineField({
            name: "internalLink",
            type: "reference",
            title: "Internal Link",
            to: [
                { type: "page" },
            ],
            hidden: ({ parent }) => parent?.linkType !== "internal",
        }),
        defineField({
            name: "externalUrl",
            type: "url",
            title: "External Url",
            hidden: ({ parent }) => parent?.linkType !== "external",
        }),
    ],
})