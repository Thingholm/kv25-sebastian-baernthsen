import {defineType, defineField} from 'sanity'
import { ClipboardIcon } from '@sanity/icons'


export default defineType({
    name: "form",
    title: "Form",
    type: "object",
    icon: ClipboardIcon,
    fields: [
        defineField({
            name: "heading",
            title: "Heading",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "submitButtonText",
            title: "Submit Button Text",
            type: "string",
            initialValue: "Send",
            validation: rule => rule.required(),
        }),
        defineField({
            name: "receivingEmail",
            title: "Receiving Email",
            type: "string",
            validation: rule => rule.required().email(),
        }),
    ],
})
