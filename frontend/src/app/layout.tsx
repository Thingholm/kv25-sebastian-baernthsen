import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { client } from "@/sanity/client";
import { homepageSeoQuery } from "@/sanity/queries";

const urbanist = Urbanist({
  variable: "--font-urbanist-sans",
  subsets: ["latin"],
});

async function getSeoData() {
  const data = await client.fetch(homepageSeoQuery);
  return data?.seoMetaFields;
}

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoData();

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body
        className={`${urbanist.variable} antialiased overflow-x-hidden`}
      >
        <Header/>
        <div className="h-[53px] relative block"></div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
