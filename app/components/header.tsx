import React from "react";
import { Button } from "@/components/ui/button";
import { File, Github, House, Twitter } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full sticky top-0 max-w-sm mx-auto z-50 py-4 px-6 bg-white/20 backdrop-blur-md border border-gray-100 rounded-2xl flex items-center justify-between gap-4">
      <div className="flex items-center">
        <button
          aria-label="Home"
          title="Home"
          className="p-2 rounded-md hover:bg-gray-100 transition"
        >
          <House size={20} color="#525252" />
        </button>
      </div>
      <div className="hidden md:block h-6 w-px bg-gray-200" />
      <nav aria-label="Social links" className="flex items-center gap-2">
        <a
          href="https://x.com/abdullahiola_05"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="p-2 rounded-md hover:bg-gray-100 transition"
          title="Twitter"
        >
          <Twitter size={20} color="#525252" />
        </a>
        <a
          href="https://github.com/OlaiwonAbdullahi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-2 rounded-md hover:bg-gray-100 transition"
          title="GitHub"
        >
          <Github size={20} color="#525252" />
        </a>

        <a
          href="https://docs.google.com/document/d/1PmtyGVVcy9xQnzoNNcAow_dvKYMAbac32cX0d1jitcM/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
          className="p-2 rounded-md hover:bg-gray-100 transition"
          title="Resume"
        >
          <File size={20} color="#525252" />
        </a>
      </nav>

      <div className="hidden md:block h-6 w-px bg-gray-200" />
      <div className="ml-2">
        <Link href={"#contact"}>
          <Button className="bg-primary px-4 py-2 rounded-lg shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50">
            Contact Me
          </Button>
        </Link>
      </div>
    </header>
  );
}
