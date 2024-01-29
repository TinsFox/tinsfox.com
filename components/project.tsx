import Link from "next/link";
import { isDev } from "~/lib/env";
import { ComingSoon } from "./coming-soon";

export function Projects() {
	return (
		<div>
			<h2 className="uppercase text-xs font-semibold text-gray-400 mb-6">
				FEATURED PROJECTS
			</h2>
			{isDev ? (
				<>
					<div className="space-y-4">
						<a
							href="https://feedbackjar.app"
							rel="noopener noreferrer"
							target="_blank"
							className="flex items-end gap-4 group p-2 -m-2 rounded-lg"
						>
							<div className="max-w-sm">
								<h3 className="text-sm font-medium group-hover:text-primary-600">
									Feedbackjar
								</h3>
								<p className="text-gray-400 text-sm">
									Open source feedback, roadmaps and changelogs
								</p>
							</div>
							<div className="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"></div>
							<span className="inline-flex items-center justify-center flex-shrink-0 rounded z-10 relative h-10 w-10 text-base">
								<img
									className="rounded z-10 relative h-10 w-10 text-base"
									alt="Feedbackjar"
									src="/projects/feedbackjar.png"
								/>
							</span>
						</a>
						<a
							href="https://feedful.app"
							rel="noopener noreferrer"
							target="_blank"
							className="flex items-end gap-4 group p-2 -m-2 rounded-lg"
						>
							<div className="max-w-sm">
								<h3 className="text-sm font-medium group-hover:text-primary-600">
									Feedful
								</h3>
								<p className="text-gray-400 text-sm">
									Modern news reader in tweetdeck style
								</p>
							</div>
							<div className="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"></div>
							<span className="inline-flex items-center justify-center flex-shrink-0 rounded z-10 relative h-10 w-10 text-base">
								<img
									className="rounded z-10 relative h-10 w-10 text-base"
									alt="Feedful"
									src="/projects/feedful.png"
								/>
							</span>
						</a>
						<a
							href="https://github.com/fayazara/hawa"
							rel="noopener noreferrer"
							target="_blank"
							className="flex items-end gap-4 group p-2 -m-2 rounded-lg"
						>
							<div className="max-w-sm">
								<h3 className="text-sm font-medium group-hover:text-primary-600">
									Hawa
								</h3>
								<p className="text-gray-400 text-sm">
									A simple white noise app which sits in the menubar
								</p>
							</div>
							<div className="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"></div>
							<span className="inline-flex items-center justify-center flex-shrink-0 rounded z-10 relative h-10 w-10 text-base">
								<img
									className="rounded z-10 relative h-10 w-10 text-base"
									alt="Hawa"
									src="/projects/hawa.png"
								/>
							</span>
						</a>
					</div>
					<div className="flex items-center justify-center mt-6 text-sm">
						<Link
							type="button"
							className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md transition-transform active:scale-x-[0.98] active:scale-y-[0.99] text-sm gap-x-1.5 px-2.5 py-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
							href="/projects"
						>
							<span className="">All Projects →</span>
						</Link>
					</div>
				</>
			) : (
				<ComingSoon href="/projects"></ComingSoon>
			)}
		</div>
	);
}
