import Link from "next/link";

export function ComingSoon(props: { href: string }) {
	return (
		<div className="flex items-center justify-center mt-6 text-sm">
			<Link
				type="button"
				className="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md transition-transform active:scale-x-[0.98] active:scale-y-[0.99] text-sm gap-x-1.5 px-2.5 py-1.5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
				href={props.href}
			>
				<span className="">Coming soon</span>
			</Link>
		</div>
	);
}
