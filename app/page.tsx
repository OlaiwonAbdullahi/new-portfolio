import Connect from "./components/connect";
import Intro from "./components/intro";
import Organizing from "./components/organizing";
import Project from "./components/project";
import WorkExperience from "./components/work";

export default function Page() {
  return (
    <main className="mx-auto max-w-[640px] px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <Intro />
      <WorkExperience />
      <Organizing />
      <Project />
      <Connect />
    </main>
  );
}
