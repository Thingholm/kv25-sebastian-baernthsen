import PageBuilder from "@/components/pageBuilder/PageBuilder";
import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

const HOMEPAGE_QUERY = defineQuery(`*[_type == "homePage"][0]{ _id, title, pageSections }`)

export default async function IndexPage() {
  const { data: homePage } = await sanityFetch({
    query: HOMEPAGE_QUERY
  })

  return (
    <main className="text-venstre-blue-700">
      <div className="h-[74px] relative block"></div>
      <PageBuilder sections={homePage.pageSections}/>
    </main>
  );
}