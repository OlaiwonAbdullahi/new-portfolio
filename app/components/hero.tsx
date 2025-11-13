import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

const Hero = () => {
  return (
    <div className="max-w-3xl mx-auto min-h-screen flex flex-col justify-center items-start px-6 sm:px-8 space-y-4">
      <Image
        src={"/dp.jpg"}
        alt="dp"
        width={120}
        height={120}
        className="rounded-full "
      />
      <div className="space-y-2">
        <h2 className="leading-tight text-[2.75rem] sm:text-[3rem] font-semibold">
          Hey, I&apos;m Abdullahi Olaiwon. <br />
          <span>Software Engineer</span>
        </h2>
        <p className="text-lg text-neutral-600 max-w-md">
          Solving complex societal problems using 1&apos;s and 0&apos;s.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button className="text-lg h-12 px-8 rounded-xl">Hire Me</Button>
          <Button className="text-lg h-12 px-6 bg-green-300 text-green-900 rounded-full flex items-center gap-2">
            <span className="h-3 w-3 bg-green-900 rounded-full animate-pulse"></span>
            Available for new project
          </Button>
        </div>
      </div>
      <div className="">
        <Marquee fade={true}>
          <div>Content 1</div>
          <div>Content 2</div>
          <div>Content 3</div>
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
