import { defineField, defineType } from "sanity";
import { defaultFieldGroups } from "../config/fieldGroups";

export default defineType({
    name: 'page',
    title: 'Pages',
    type: 'document',
    groups: defaultFieldGroups,
    fields: [
        defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
        group: 'content',
        }),
        defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'name',
            maxLength: 96,
        },
        group: 'content',
        }),
    ]
})