import { Marquee } from "@/components/ui/marquee";
import { ProjectCard } from "./_components/projectCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Project = () => {
  const projects = [
    {
      title: "Pxxl App",
      image: "/project1.png",
      description:
        "Enterprise-grade cloud deployment platform enabling instant deployment of websites, APIs, and applications with global CDN and automated scaling.",
      category: "Platform",
      href: "#",
    },
    {
      title: "Olamide's Tour Website",

      image: "/project1.png",
      description:
        "Official site for Nigerian Musician: Olamide (Badoo), featuring tour schedules, ticket purchases, music releases, and exclusive content.",
      category: "Entertainment",
      href: "#",
    },
  ];
  return (
    <div className=" py-10">
      <div className="w-1/3 mx-auto relative">
        <Marquee pauseOnHover className="[--duration:10s]">
          <div className=" flex flex-row gap-4">
            <img src="/icons/css.svg" alt="" className="h-10 w-10" />
            <img src="/icons/bootsrap.svg" alt="" className="h-10 w-10" />
            <img src="/icons/firebase.svg" alt="" className="h-10 w-10" />
            <img src="/icons/git.svg" alt="" className="h-10 w-10" />
            <img src="/icons/github.svg" alt="" className="h-10 w-10" />
            <img src="/icons/js.svg" alt="" className="h-10 w-10" />
            <img src="/icons/html.svg" alt="" className="h-10 w-10" />
            <img src="/icons/react.svg" alt="" className="h-10 w-10" />
            <img src="/icons/tailwind-css.svg" alt="" className="h-10 w-10" />
            <img src="/icons/sass.svg" alt="" className="h-10 w-10" />
            <img src="/icons/redux.svg" alt="" className="h-10 w-10" />
          </div>
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </div>
      <div className="text-center">
        <h2 className="leading-tight text-[2.75rem] sm:text-[3rem] font-semibold">
          Here&apos;s What I&apos;ve Been Up To.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center mt-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              category={project.category}
              href={project.href}
            />
          ))}
        </div>
        <div className="mt-5">
          <Button>
            View All <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Project;
