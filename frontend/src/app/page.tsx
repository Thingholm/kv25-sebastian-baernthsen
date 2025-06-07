import PageBuilder from "@/components/pageBuilder/PageBuilder";
import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

const HOMEPAGE_QUERY = defineQuery(`*[_type == "homePage"][0] {
  _id,
  title,
  pageSections[] {
    _type,
    _key,
    ...,
    buttons[] {
      _key,
      _type,
      text,
      variant,
      "link": link {
        _type,
        linkType,
        externalUrl,
        "internalLink": internalLink-> {
          _id,
          "slug": slug
        }
      }
    }
  }
}`)

export default async function IndexPage() {
  const { data: homePage } = await sanityFetch({
    query: HOMEPAGE_QUERY
  })

  return (
    <main className="text-venstre-blue-700">
      <PageBuilder sections={homePage.pageSections}/>
    </main>
  );
}