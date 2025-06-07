import { defineQuery } from "next-sanity";

export const homepageSeoQuery = defineQuery(`*[_type == "homePage"][0] {
  seoMetaFields {
    metaTitle,
    metaDescription,
    metaImage,
    metaKeywords,
    openGraph {
      url,
      title,
      description,
      image,
      siteName
    }
  }
}`);

export const pageSeoQuery = defineQuery(`*[_type == "page" && slug.current == $slug][0] {
  seoMetaFields {
    metaTitle,
    metaDescription,
    metaImage,
    metaKeywords,
    openGraph {
      url,
      title,
      description,
      image,
      siteName
    }
  }
}`); 