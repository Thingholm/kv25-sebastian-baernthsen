import page from "./documents/page";
import blockContent from "./objects/blockContent";
import button from "./objects/button";
import link from "./objects/link";
import menuItem from "./objects/menuItem";
import hero from "./objects/sections/hero";
import homePage from "./singletons/homePage";
import settings from "./singletons/settings";

export const schemaTypes = [
    // documents
    page,

    // objects
    blockContent,
    button,
    link,
    menuItem,

    // sections
    hero,

    // singletons
    settings,
    homePage,
]