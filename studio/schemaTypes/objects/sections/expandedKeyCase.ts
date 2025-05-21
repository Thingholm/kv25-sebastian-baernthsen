import { defineField, defineType } from "sanity";
import { PanelRightIcon } from '@sanity/icons'

export default defineType({
    name: "expandedKeyCase",
    type: "object",
    icon: PanelRightIcon,
    fields: [
        defineField({
            name: "heading",
            type: "string",
            validation: rule => rule.required(),
        }),
        defineField({
            name: "icon",
            type: "image",
            validation: rule => rule.required(),
            fields: [
                defineField({
                    name: "alt",
                    type: "string",
                    title: "Alternate text",
                    validation: rule => rule.required(),
                }),
            ],        
        }),
        defineField({
            name: "imagePosition",
            type: "string",
            initialValue: "left",
            title: "Image position",
            options: { list: ["left", "right"]},
            validation: rule => rule.required(),
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
                    title: "Alternate text",
                    validation: rule => rule.required(),
                }),
            ],
        }),
        defineField({
            name: "content",
            type: "blockContent",
            validation: rule => rule.required(),
        }),
    ]
})