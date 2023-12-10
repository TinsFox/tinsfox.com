import { format, parseISO } from "date-fns";
import { allArticles } from "contentlayer/generated";
import type { Metadata } from "next";

interface DocPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || "";
  const doc = allArticles.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    throw new Error(`Article not found for slug: ${params.slug}`);
  }

  return doc;
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params });

  if (!doc) {
    throw new Error(`Article not found for slug: ${params.slug}`);
  }

  return {
    title: doc.title,
    description: doc.description,
  };
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  const res = allArticles.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
  return res;
}

const ArticleLayout = async ({ params }: DocPageProps) => {
  const article = await getDocFromParams({ params });

  if (!article) throw new Error(`Article not found for slug: ${params.slug}`);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={article.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(article.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">{article.title}</h1>
      </div>
      <div dangerouslySetInnerHTML={{ __html: article.body.raw }} />
      {/* <MDXContent className="[&>*]:mb-3 [&>*:last-child]:mb-0" /> */}
    </article>
  );
};

export default ArticleLayout;
