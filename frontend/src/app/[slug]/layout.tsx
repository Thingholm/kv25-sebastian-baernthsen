import type { Metadata } from "next";
import { client } from "@/sanity/client";
import { pageSeoQuery } from "@/sanity/queries";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = await params.slug;
  const seo = await getSeoData(slug);

  return {
    title: seo?.metaTitle || "Default Title",
    description: seo?.metaDescription || "Default Description",
    keywords: seo?.metaKeywords || [],
    openGraph: seo?.openGraph ? {
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      url: seo.openGraph.url,
      siteName: seo.openGraph.siteName,
      images: seo.openGraph.image ? [
        {
          url: seo.openGraph.image.asset.url,
          width: 1200,
          height: 630,
          alt: seo.openGraph.title,
        }
      ] : [],
    } : undefined,
    twitter: {
      card: 'summary_large_image',
      title: seo?.metaTitle,
      description: seo?.metaDescription,
      images: seo?.metaImage ? [seo.metaImage.asset.url] : [],
    },
  };
}

async function getSeoData(slug: string) {
  const data = await client.fetch(pageSeoQuery, { slug });
  return data?.seoMetaFields;
}

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 