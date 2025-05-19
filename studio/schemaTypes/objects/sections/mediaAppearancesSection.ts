import { defineField, defineType } from "sanity";
import { MicrophoneIcon } from '@sanity/icons'

export default defineType({
    name: "mediaAppearancesSection",
    type: "object",
    title: "Media Appearances",
    icon: MicrophoneIcon,
    fields: [
        defineField({
            name: "heading",
            type: "string",
        }),
    ]
})