import { defineField, defineType } from "sanity";
import { MicrophoneIcon } from '@sanity/icons'

export default defineType({
    name: "mediaAppearances",
    type: "document",
    title: "Media Appearances",
    icon: MicrophoneIcon,
    fields: [
        defineField({
            name: "appearances",
            type: "array",
            of: [{ type: "mediaAppearanceItem" }]
        }),
    ]
})