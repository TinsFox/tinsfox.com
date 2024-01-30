import Link from "next/link";
import React from "react";
interface IAllThings {
  categorizationName: string;
  description: string;
  things: IThing[];
}

type IThing = {
  name: string;
  description: string;
  sourceLink: string;
};

const allThings: IAllThings[] = [
  {
    categorizationName: "Hardware",
    description: "",
    things: [
      {
        name: "Apple AirPods Pro 2",
        description:
          "I use it to listen music and block external noise interference.",
        sourceLink: "https://www.apple.com.cn/airpods-pro/",
      },
    ],
  },
  {
    categorizationName: "Sortware",
    description: "",
    things: [
      {
        name: "Visual Studio Code",
        description: "",
        sourceLink: "https://code.visualstudio.com/",
      },
    ],
  },
];

export default function WhatsInMyBagPage() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
      <main className="min-h-screen">
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            What&apos;s in my bag?
          </h2>
          <p className="mt-6 text-base text-gray-600 dark:text-gray-400">
            Something I&apos;m using.
          </p>
        </div>
        <div className="space-y-24">
          <ul className="space-y-8">
            {allThings.map((categorization, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <React.Fragment key={index}>
                <li className="relative after:-z-10 after:block after:h-[2px] after:absolute after:top-1/2 after:transform after:bg-gray-100 dark:after:bg-white/10 after:w-full after:left-0 after:right-0">
                  <span className="font-medium text-sm text-gray-600 dark:text-gray-500 bg-gray-50 dark:bg-black pr-4">
                    {categorization.categorizationName}
                  </span>
                </li>
                {categorization.things.map((thing) => (
                  <li key={thing.sourceLink} className="group">
                    <Link
                      href={thing.sourceLink}
                      rel={"noopener noreferrer"}
                      target="_blank"
                    >
                      <p className="text-base font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary-600">
                        {thing.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {thing.description}
                      </p>
                    </Link>
                  </li>
                ))}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
