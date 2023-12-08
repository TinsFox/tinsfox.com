import { format, parseISO } from "date-fns";
import { allArticles } from "contentlayer/generated";
import type { Metadata } from "next";
import { absoluteUrl } from "~/lib/utils";

export const generateStaticParams = async () =>
  allArticles.map((article) => ({ slug: article._raw.flattenedPath }));

type ArticlesPageProps = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({
  params,
}: ArticlesPageProps): Promise<Metadata> => {
  const article = allArticles.find(
    (article) => article.slugAsParams === params.slug
  );
  if (!article) {
    throw new Error(`Article not found for slug: ${params.slug}`);
  }
  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      url: absoluteUrl(article.url),
      // TODO
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      // TODO
      images: ["siteConfig.ogImage"],
      creator: "@TinsFox",
    },
  };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const article = allArticles.find(
    (article) => article.slugAsParams === params.slug
  );
  if (!article) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={article.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(article.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">{article.title}</h1>
      </div>
      <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: article.body.html }}
      />
    </article>
  );
};

export default PostLayout;
