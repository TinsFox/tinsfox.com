import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Introduction() {
  return (
    <div className="space-y-6">
      <Avatar className="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16">
        <AvatarImage
          src="https://buckets.tinsfox.com/profile_pic.jpeg"
          alt="TinsFox"
        />
        <AvatarFallback>TinsFox</AvatarFallback>
      </Avatar>

      <h1 className="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
        Hello!
      </h1>
      <p className="text-gray-900 dark:text-gray-400">
        I&apos;m TinsFox, currently work as a front-end developer in an
        advertising and marketing company, and develop some gadgets in my spare
        time.
      </p>
    </div>
  );
}
