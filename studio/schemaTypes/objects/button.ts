import { defineField, defineType } from 'sanity';

export default defineType({
    name: "button",
    title: "Button",
    type: "object",
    fields: [
        defineField({
            name: "variant",
            type: "string",
            options: {
                list: [
                    { title: "Default", value: "default" },
                    { title: "Secondary", value: "secondary" },
                    { title: "Outline", value: "outline" },
                    { title: "Text", value: "text" },
                ],
                layout: "radio",
            },
            initialValue: "default",
        }),
        defineField({
            name: "text",
            title: "Button text",
            type: "string",
        }),
        defineField({
            name: "link",
            title: "Link",
            type: "link",
        })
    ]
})