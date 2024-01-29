import { Contact } from "~/components/contact";
import { Introduction } from "~/components/Introduction";
import { NewLetter } from "~/components/new-letter";
import { Projects } from "~/components/project";
import { RecentArticles } from "~/components/recent-articles";

export default function Home() {
  return (
    <div className="space-y-24">
      <Introduction />
      <Contact />
      <Projects />
      <RecentArticles />
      <NewLetter />
    </div>
  );
}
