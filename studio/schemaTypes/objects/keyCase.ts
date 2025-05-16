import { defineField, defineType } from "sanity";

export default defineType({
    name: "keyCase",
    type: "object",
    title: "Key Case",
    fields: [
        defineField({
            name: "heading",
            type: "string",
        }),
        defineField({
            name: "icon",
            type: "image",
            fields: [
                defineField({
                    name: "alt",
                    type: "string",
                    title: "Alternate text"
                })
            ]
        })
    ]
})