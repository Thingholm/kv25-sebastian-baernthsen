import { defineField, defineType } from "sanity";
import { defaultFieldGroups } from "../config/fieldGroups";
import { DocumentIcon } from '@sanity/icons';
import pageSections from "../fields/pageSections";


export default defineType({
    name: 'page',
    title: 'Pages',
    type: 'document',
    icon: DocumentIcon,
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
        pageSections,
    ]
})