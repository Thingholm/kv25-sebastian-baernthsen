import { defineField, defineType } from "sanity";

export default defineType({
    name: "mediaAppearanceItem",
    type: "object",
    title: "Media Appearance",
    fields: [
        defineField({
            name: "heading",
            type: "string",
            validation: rule => rule.required(),
        }),
        defineField({
            name: "url",
            type: "url",
            validation: rule => rule.required(),
        }),
        defineField({
            name: "date",
            type: "date",
            validation: rule => rule.required(),
        }),
        defineField({
            name: "media",
            type: "string",
            validation: rule => rule.required(),
        }),
        defineField({
            name: "image",
            type: "image",
            options: { hotspot: true },
            fields: [
                defineField({
                    name: "alt",
                    type: "string",
                    title: "Alternate text",
                    validation: rule => rule.required(),
                }),
            ],
            validation: rule => rule.required(),
        }),
    ]
})