import { defineField, defineType } from "sanity";
import { PanelLeftIcon } from '@sanity/icons';

export default defineType({
    name: "libsynEmbedSection",
    type: "object",
    title: "Libsyn Embed Section",
    icon: PanelLeftIcon,
    fields: [
        defineField({
            name: "heading",
            type: "string",
        }),
        defineField({
            name: "content",
            type: "blockContent",
        }),
        defineField({
            name: "embedLink",
            type: "string"
        })
    ],
});