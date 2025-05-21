import { defineArrayMember, defineField } from "sanity";
import hero from "../objects/sections/hero";
import mediaTextBlock from "../objects/sections/mediaTextBlock";
import keyCases from "../objects/sections/keyCases";
import contact from "../objects/sections/contact";
import form from "../objects/sections/form";
import mediaAppearances from "../objects/sections/mediaAppearancesSection";
import pageHeading from "../objects/sections/pageHeading";
import expandedKeyCase from "../objects/sections/expandedKeyCase";

const pageSectionsObjects = [
    hero,
    mediaTextBlock,
    keyCases,
    contact,
    form,
    mediaAppearances,
    pageHeading,
    expandedKeyCase
];

export default defineField({
    name: "pageSections",
    title: "Page Sections",
    type: "array",
    of: pageSectionsObjects.map(({ name }) => defineArrayMember({ type: name })),
    group: "content",
})