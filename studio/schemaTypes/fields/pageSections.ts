import { defineArrayMember, defineField } from "sanity";
import hero from "../objects/sections/hero";
import mediaTextBlock from "../objects/sections/mediaTextBlock";
import keyCases from "../objects/sections/keyCases";
import contact from "../objects/sections/contact";
import form from "../objects/sections/form";

const pageSectionsObjects = [
    hero,
    mediaTextBlock,
    keyCases,
    contact,
    form,
];

export default defineField({
    name: "pageSections",
    title: "Page Sections",
    type: "array",
    of: pageSectionsObjects.map(({ name }) => defineArrayMember({ type: name })),
    group: "content",
})