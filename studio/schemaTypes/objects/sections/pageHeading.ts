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
    ]
})