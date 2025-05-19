import page from "./documents/page";
import blockContent from "./objects/blockContent";
import button from "./objects/button";
import keyCase from "./objects/keyCase";
import link from "./objects/link";
import mediaAppearanceItem from "./objects/mediaAppearanceItem";
import menuItem from "./objects/menuItem";
import contact from "./objects/sections/contact";
import form from "./objects/sections/form";
import hero from "./objects/sections/hero";
import keyCases from "./objects/sections/keyCases";
import mediaAppearancesSection from "./objects/sections/mediaAppearancesSection";
import mediaTextBlock from "./objects/sections/mediaTextBlock";
import homePage from "./singletons/homePage";
import mediaAppearances from "./singletons/mediaAppearances";
import settings from "./singletons/settings";

export const schemaTypes = [
    // documents
    page,

    // objects
    blockContent,
    button,
    link,
    menuItem,
    keyCase,
    mediaAppearanceItem,

    // sections
    hero,
    mediaTextBlock,
    keyCases,
    contact,
    form,
    mediaAppearancesSection,

    // singletons
    settings,
    homePage,
    mediaAppearances,
]