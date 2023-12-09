import Link from "next/link";
import { allArticles } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
export function RecentArticles() {
  const articles = allArticles.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <div>
      <h2 className="uppercase text-xs font-semibold text-gray-400 mb-6">
        RECENT ARTICLES
      </h2>
      <>
        <ul className="space-y-16">
          {articles.slice(0, 2).map((article) => (
            <li key={article._id}>
              <a href={article.slug} className="group">
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
                    {article.description}
                  </p>
                </article>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center mt-6 text-sm">
          <Link
            type="button"
            className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md transition-transform active:scale-x-[0.98] active:scale-y-[0.99] text-sm gap-x-1.5 px-2.5 py-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
            href="/articles"
          >
            <span className="">All Articles →</span>
          </Link>
        </div>
      </>
    </div>
  );
}
