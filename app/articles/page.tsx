import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { Article, allArticles } from "contentlayer/generated";

function ArticleCard(article: Article) {
  return (
    <li>
      <Link href={article.url} className="ground">
        <article>
          <time
            className="relative z-10 order-first mb-3 flex items-center text-sm text-gray-400 dark:text-gray-500 pl-3.5"
            dateTime="2022-09-05"
          >
            <span
              className="absolute inset-y-0 left-0 flex items-center"
              aria-hidden="true"
            >
              <span className="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-500"></span>
            </span>
            {format(parseISO(article.date), "LLLL d, yyyy")}
          </time>
          <h2 className="text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-primary-600">
            {article.title}
          </h2>
          <p className="relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400">
            {article.summary}
          </p>
        </article>
      </Link>
    </li>
  );
}

export default function ArticlesPage() {
  const articles = allArticles.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  console.log("articles: ", articles);
  return (
    <div>
      <div className="mx-auto max-w-xl py-8">
        <h1 className="mb-8 text-center text-2xl font-black">
          Next.js + Contentlayer Example
        </h1>
        <ul>
          {articles.map((post, idx) => (
            <ArticleCard key={idx} {...post} />
          ))}
        </ul>
      </div>
    </div>
  );
}
