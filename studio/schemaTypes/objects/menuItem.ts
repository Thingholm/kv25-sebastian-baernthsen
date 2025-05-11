import { defineField, defineType } from "sanity";

export default defineType({
    name: "menuItem",
    title: "Menu Item",
    type: "object",
    fields: [
        defineField({
            name: "text",
            title: "Menu Item Text",
            type: "string"
        }),
        defineField({
            name: "menuItemUrl",
            title: "Menu Item Link",
            type: "link"
        }),
        defineField({
            name: "children",
            type: "array",
            title: "Child Menu Items",
            description: "For dropdown menus",
            of: [{ type: "menuItem" }]
        }),
    ],
})