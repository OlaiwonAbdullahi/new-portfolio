import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  category?: string;
  image?: string;
  href?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  href = "#",
}: ProjectCardProps) {
  return (
    <Card className="w-full max-w-md bg-white/30 backdrop-blur-2xl border-gray-100 shadow-none rounded-3xl    duration-300">
      <CardHeader className="">
        <div className="">
          <img src={image} alt="" className="h-full w-full rounded-xl" />
        </div>
      </CardHeader>

      <CardContent className="">
        <h3 className="text-3xl font-bold text-black mb-2 text-start">
          {title}
        </h3>
        <p className="text-gray-600 text-base leading-relaxed text-start">
          {description}
        </p>
      </CardContent>

      <CardFooter className="pt-2">
        <Button
          className="w-fit justify-between group bg-[#e5e5e5] text-primary text-base"
          asChild
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            View Project
            <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
