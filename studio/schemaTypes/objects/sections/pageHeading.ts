import { defineField, defineType } from "sanity";
import { InsertAboveIcon } from '@sanity/icons'

export default defineType({
    name: "pageHeading",
    type: "object",
    icon: InsertAboveIcon,
    title: "Page Heading",
    fields: [
        defineField({
            name: "heading",
            type: "string",
        }),
        defineField({
            name: "image",
            type: "image",
            options: { hotspot: true },
            validation: rule => rule.required(),
            fields: [
                defineField({
                name: "alt",
                type: "string",
                title: "Alternative text",
                validation: rule => rule.required(),
                }),
            ],
        }),
    ]
})