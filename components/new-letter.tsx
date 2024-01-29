import { HeroiconsEnvelope } from "./icon/HeroiconsEnvelope";

export function NewLetter() {
	return (
		<div>
			<div className="mb-6 flex items-center gap-3">
				<div className="flex-none rounded-full p-1 text-primary-500 bg-primary-500/10">
					<div className="h-1.5 w-1.5 rounded-full bg-current"></div>
				</div>
				<h2 className="uppercase text-xs font-semibold text-gray-400">
					STAY IN TOUCH
				</h2>
			</div>
			<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
				Get notified when I publish something new, and unsubscribe at any time.
			</p>
			<div className="flex items-center gap-3 mt-6">
				<div className="relative flex-1">
					<input
						type="text"
						placeholder="Email Address"
						className="form-input relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3.5 py-2.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 ps-11"
					/>
					<span className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3.5">
						<HeroiconsEnvelope className="flex-shrink-0 text-gray-400 dark:text-gray-500 h-5 w-5"></HeroiconsEnvelope>
					</span>
				</div>
				<button
					type="button"
					className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md transition-transform active:scale-x-[0.98] active:scale-y-[0.99] text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
				>
					<span className="">Join →</span>
				</button>
			</div>
		</div>
	);
}
