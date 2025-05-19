import { defineField, defineType } from "sanity";
import { EarthGlobeIcon } from '@sanity/icons';

export default defineType({
    name: "socialMediaLinks",
    type: "object",
    icon: EarthGlobeIcon,
    title: "Social Media Links",
    fields: [
        defineField({
            name: "x",
            type: "url",
            title: "X (Twitter) URL",
            validation: Rule => Rule.uri({
                scheme: ['http', 'https']
            }),
        }),
        defineField({
            name: "facebook",
            type: "url",
            title: "Facebook URL",
            validation: Rule => Rule.uri({
                scheme: ['http', 'https']
            }),
        }),
        defineField({
            name: "instagram",
            type: "url",
            title: "Instagram URL",
            validation: Rule => Rule.uri({
                scheme: ['http', 'https']
            }),
        }),
        defineField({
            name: "tiktok",
            type: "url",
            title: "TikTok URL",
            validation: Rule => Rule.uri({
                scheme: ['http', 'https']
            }),
        }),
        defineField({
            name: "youtube",
            type: "url",
            title: "YouTube URL",
            validation: Rule => Rule.uri({
                scheme: ['http', 'https']
            }),
        }),
        defineField({
            name: "linkedin",
            type: "url",
            title: "LinkedIn URL",
            validation: Rule => Rule.uri({
                scheme: ['http', 'https']
            }),
        }),
    ],
});