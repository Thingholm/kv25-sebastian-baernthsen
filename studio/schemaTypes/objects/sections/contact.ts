import { defineField, defineType } from "sanity";
import { EnvelopeIcon } from '@sanity/icons'

export default defineType({
    name: "contact",
    type: "object",
    icon: EnvelopeIcon,
    title: "Contact",
    fields: [
        defineField({
            name: "heading",
            type: "string",
            validation: rule => rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "phone",
            type: "string",
            validation: rule =>
                rule
                    .required()
                    .regex(/^\d{8}$/, {
                        name: "phone number",
                        invert: false
                    })
        }),
        defineField({
            name: "email",
            type: "string",
            validation: rule => rule.required().email(),
        }),
        defineField({
            name: "socialMedia",
            type: "boolean",
            initialValue: false,
        })
    ]
})