const Intro = () => {
  return (
    <header className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <h1 className="text-[40px] sm:text-[52px] leading-[1.1] text-ink">
          Abdullahi Olaiwon
        </h1>
        <p className="text-[15px] leading-[1.6] text-ink-soft">
          Software Engineer
        </p>
      </div>

      <span className="inline-flex w-fit cursor-default items-center gap-2 rounded-full border border-hairline px-3.5 py-1.5 text-[14px] leading-[1.4] text-ink-soft">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
        Available for new projects
      </span>

      <div className="mt-2 flex flex-col gap-4">
        <p className="text-[15px] leading-[1.6] text-ink-soft">
          I love building clean, scalable, and user-focused digital products
          that solve real problems. My work blends creativity, functionality,
          and innovation to deliver meaningful experiences.
        </p>
        <p className="text-[15px] leading-[1.6] text-ink-soft">
          I&apos;m a Nigerian frontend developer passionate about crafting
          seamless user experiences with modern web technologies. Over the
          years, I&apos;ve built and contributed to a diverse range of
          projects.
        </p>
        <p className="text-[15px] leading-[1.6] text-ink-soft">
          A self-driven developer, I&apos;ve grown through consistent
          learning, real-world projects, and community-focused training like
          Web3Bridge Cohort XI. With over 15+ production-ready projects, I
          enjoy solving complex problems, understanding how things work, and
          bringing ideas to life through code.
        </p>
      </div>
    </header>
  );
};

export default Intro;
