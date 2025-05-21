import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

const PAGES_QUERY = defineQuery(`*[_type == "page"]{ _id, name, slug }`);

export async function getPages() {
    const { data: pages } = await sanityFetch({
        query: PAGES_QUERY,
        params: {}
    });

    if (!pages) throw new Error("Failed to fetch pages");

    return pages;
}