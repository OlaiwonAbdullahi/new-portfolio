import About from "./components/about";
import Header from "./components/header";
import Hero from "./components/hero";
import Project from "./components/project";
import WorkExperience from "./components/work";
export default function Page() {
  return (
    <div className=" max-w-4xl border-x-[1.5px] mx-auto pt-[60px] min-h-screen border-neutral-300 ">
      <Header />
      <div className="max-w-3xl mx-auto  px-6 sm:px-8">
        <Hero />
        <About />
      </div>
      <div className=" px-6 sm:px-8">
        <Project />
      </div>
      <div className="max-w-3xl mx-auto  px-6 sm:px-8 mt-12">
        <WorkExperience />
      </div>
    </div>
  );
}
