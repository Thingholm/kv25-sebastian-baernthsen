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
            name: "subtitle",
            description: "Subtitle of website",
            title: "Subtitle",
            type: "string",
        }),
        defineField({
            name: "menu",
            type: "array",
            of: [{ type: "menuItem" }],
            description: "Menu displayed in header"
        }),
        defineField(socialMediaLinks),
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
    ],
    preview: {
        prepare() {
            return {
                title: 'Settings',
            };
        },
    },
})