import { defineField, defineType } from "sanity";
import { CogIcon } from '@sanity/icons';
import socialMediaLinks from "../objects/socialMediaLinks";

export default defineType({
    name: "settings",
    title: "Settings",
    type: "document",
    icon: CogIcon,
    fields: [
        defineField({
            name: "title",
            description: "Title of website",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "menu",
            type: "array",
            of: [{ type: "menuItem" }],
            description: "Menu displayed in header"
        }),
        defineField(socialMediaLinks),
    ],
    preview: {
        prepare() {
            return {
                title: 'Settings',
            };
        },
    },
})