import { Contact } from "~/components/Contact";
import { Introduction } from "~/components/Introduction";
import { NewLetter } from "~/components/NewLetter";
import { Projects } from "~/components/Projects";
import { RecentArticles } from "~/components/RecentArticles";

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
