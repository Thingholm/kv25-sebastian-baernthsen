import PageBuilder from "@/components/pageBuilder/PageBuilder";
import { sanityFetch } from "@/sanity/lib/live";

const PAGE_QUERY = `*[_type == "page" && slug.current == $slug][0]`;

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: page } = await sanityFetch({
      query: PAGE_QUERY,
      params: await params
  })

  return (
    <main className="text-venstre-blue-700">
      <PageBuilder sections={page.pageSections}/>
    </main>
  );
}