import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

const SOCIALMEDIALINKS_QUERY = defineQuery(`*[_type == "settings"]{ _id, socialMediaLinks }`)

export async function getSocialMediaLinks() {
    const { data: socialMediaLinks } = await sanityFetch({
        query: SOCIALMEDIALINKS_QUERY,
        params: {}
    })

    if (!socialMediaLinks) throw new Error("Failed to fetch social media links");

    return socialMediaLinks[0];
}