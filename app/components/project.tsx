import { Marquee } from "@/components/ui/marquee";
import { ProjectCard } from "./_components/projectCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Project = () => {
  const projects = [
    {
      title: "Wishcube App",
      image: "/wishcube.png",
      description:
        "WishCube is an AI-powered celebration platform that lets you create personalized animated greeting cards, host virtual party rooms, and send integrated digital gifts — all in one place. Features include voice message narration, confetti animations, RSVP tracking, and multi-channel sharing via WhatsApp, Instagram, and email.",
      category: "Entertainment",
      href: "https://wishcube.abdullahiolaiwon.xyz/",
    },
    {
      title: "Mantle Mentor Webapp",
      image: "/mantle.png",
      description:
        "The Mantle Mentorship Program is a virtual mentorship platform dedicated to transferring practical and life-based skills to the next generation of leaders. Running 4 cohorts per year globally, it connects mentees with experienced mentors to provide clarity, career direction, and personal development support.",
      category: "Education",
      href: "https://www.mantlementor.com/en",
    },
    {
      title: "Escro Marketplace",
      image: "/project4.png",
      description:
        "Escro is a secure multi-vendor marketplace where every transaction is protected by escrow technology — funds are only released once delivery is confirmed. The platform serves customers, store owners, couriers, and logistics agencies with tools like a no-code store builder, AI route optimization, and real-time order tracking.",
      category: "E-Commerce",
      href: "https://escrostore.netlify.app/",
    },
    {
      title: "Moyinol",

      image: "/project4.png",
      description:
        "Official site for Moyinol Consulting: Moyinol Consulting Limited combines deep regulatory expertise with innovative solutions to help financial institutions stay compliant,  and prepared for future challenges in AML.",
      category: "Entertainment",
      href: "https://www.moyinolconsulting.org/",
    },

    {
      title: "Lisa Tech",
      image: "/project3.png",
      description:
        "Lisa Tech website is a Landing Page for an AI-powerd drones that intelligently identify ,map,and report waste. ",
      category: "Platform",
      href: "https://dronewastemgt.vercel.app/",
    },
    {
      title: "SmartPay",
      image: "/smartpay.png",
      description:
        "SmartPay is a user-friendly mobile wallet platform designed to simplify bill payments, top-ups, and purchases directly from your digital wallet.",
      href: "https://smartpay-psi.vercel.app/",
    },
    {
      title: "Life Of Shiz",

      image: "/project1.png",
      description:
        "Official site for an Engineer & Content Creator: Shizrae, featuring her Journey, Personality, Brand Timeline, and exclusive content.",

      href: "https://lifeofshiz.vercel.app/",
    },
    {
      title: "Exclusive Store",

      image: "/eccormerce.png",
      description:
        "Built an Ecommerce website featuring product listing,authentication,checkout,cart, and exclusive content.",

      href: "https://exclusive-ecommerce-store-abdul.vercel.app/",
    },
    {
      title: "Unity High School ",

      image: "/unity.png",
      description:
        "Official site for Unity High School: featuring the school details, Contact Details, and exclusive content.",
      href: "https://unityhighschool.vercel.app/",
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
          <Link href={"https://github.com/OlaiwonAbdullahi/"}>
            <Button>
              View All <ChevronRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
