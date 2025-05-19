import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

const MEDIAAPPEARANCES_QUERY = defineQuery(`*[_type == "mediaAppearances"]{ _id, appearances }`)

export async function getMediaAppearances() {
    const { data: mediaApperances } = await sanityFetch({
        query: MEDIAAPPEARANCES_QUERY,
        params: {}
    })

    if (!mediaApperances) throw new Error("Failed to fetch media appearances");

    return mediaApperances[0];
}