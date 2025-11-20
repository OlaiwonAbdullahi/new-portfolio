import About from "./components/about";
import ContactForm from "./components/contact";
import Header from "./components/header";
import Hero from "./components/hero";
import Project from "./components/project";
import WorkExperience from "./components/work";
export default function Page() {
  return (
    <div className=" max-w-3xl border-x-[1.5px] mx-auto pt-[60px] min-h-screen border-neutral-300 ">
      <Header />
      <div className="max-w-2xl mx-auto  px-6 sm:px-8">
        <Hero />
        <About />
      </div>
      <div className=" px-6 sm:px-8 border-t border-t-[#e6e6e6] mt-12 ">
        <Project />
      </div>
      <div className="max-w-3xl mx-auto   mt-12">
        <WorkExperience />
        <div className="border-t border-t-[#e6e6e6]">
          <ContactForm />
        </div>
      </div>
      <div className=" border-t border-t-[#e6e6e6] py-12 text-center text-gray-500">
        Copyright © 2025 Abdullahi Olaiwon.
      </div>
    </div>
  );
}
