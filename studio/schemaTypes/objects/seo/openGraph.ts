import { defineField, defineType } from "sanity";

export default defineType({
    name: "openGraph",
    title: "Open Graph",
    type: "object",
    fields: [
        defineField({
            name: "url",
            title: "URL",
            type: "string",
        }),
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
        }),
        defineField({
            name: "siteName",
            title: "Site Name",
            type: "string",
        }),
    ],
})