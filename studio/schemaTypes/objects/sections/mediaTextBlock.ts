import { defineField, defineType } from "sanity";
import { PanelLeftIcon } from '@sanity/icons';

export default defineType({
    name: "mediaTextBlock",
    type: "object",
    title: "Media and Text Block",
    icon: PanelLeftIcon,
    fields: [
        defineField({
            name: "heading",
            type: "string",
        }),
        defineField({
            name: "content",
            type: "blockContent",
        }),
        defineField({
            name: 'buttons',
            type: 'array',
            of: [{ type: 'button' }],
        }),
        defineField({
            name: "imagePosition",
            type: "string",
            initialValue: "left",
            title: "Image position",
            options: { list: ["left", "right", "start", "end"]},
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
                }),
            ],
        }),
    ],
});