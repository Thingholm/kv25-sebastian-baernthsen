import { defineArrayMember, defineField } from "sanity";
import hero from "../objects/sections/hero";
import mediaTextBlock from "../objects/sections/mediaTextBlock";
import keyCases from "../objects/sections/keyCases";

const pageSectionsObjects = [
    hero,
    mediaTextBlock,
    keyCases,
];

export default defineField({
    name: "pageSections",
    title: "Page Sections",
    type: "array",
    of: pageSectionsObjects.map(({ name }) => defineArrayMember({ type: name })),
    group: "content",
})