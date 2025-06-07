import page from "./documents/page";
import blockContent from "./objects/blockContent";
import button from "./objects/button";
import keyCase from "./objects/keyCase";
import link from "./objects/link";
import mediaAppearanceItem from "./objects/mediaAppearanceItem";
import menuItem from "./objects/menuItem";
import contact from "./objects/sections/contact";
import expandedKeyCase from "./objects/sections/expandedKeyCase";
import form from "./objects/sections/form";
import hero from "./objects/sections/hero";
import keyCases from "./objects/sections/keyCases";
import mediaAppearancesSection from "./objects/sections/mediaAppearancesSection";
import mediaTextBlock from "./objects/sections/mediaTextBlock";
import pageHeading from "./objects/sections/pageHeading";
import homePage from "./singletons/homePage";
import mediaAppearances from "./singletons/mediaAppearances";
import settings from "./singletons/settings";
import seoMetaFields from "./objects/seo/seo";
import openGraph from "./objects/seo/openGraph";

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
    seoMetaFields,
    openGraph,

    // sections
    hero,
    mediaTextBlock,
    keyCases,
    contact,
    form,
    mediaAppearancesSection,
    pageHeading,
    expandedKeyCase,

    // singletons
    settings,
    homePage,
    mediaAppearances,
]