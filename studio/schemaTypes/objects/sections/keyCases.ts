import { defineField, defineType } from "sanity";
import {CaseIcon} from '@sanity/icons'

export default defineType({
    name: "keyCases",
    type: "object",
    title: "Key Cases",
    icon: CaseIcon,
    fields: [
        defineField({
            name: "heading",
            type: "string",
        }),
        defineField({
            name: "cases",
            type: "array",
            of: [{ type: "keyCase" }]
        }),
        defineField({
            name: "button",
            type: "button",
        }),
    ]
})