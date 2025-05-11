import { defineField, defineType } from "sanity";

export default defineType({
    name: "settings",
    title: "Settings",
    type: "document",
    fields: [
        defineField({
            name: "title",
            description: "Title of website",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "menu",
            type: "array",
            of: [{ type: "menuItem" }],
            description: "Menu displayed in header"
        })
    ],
    preview: {
        prepare() {
            return {
                title: 'Settings',
            };
        },
    },
})