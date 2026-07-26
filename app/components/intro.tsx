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
          I&apos;m a Software engineer based in Nigeria. Most of my work is for
          startups and small businesses who need a real product, not just a
          demo.
        </p>
        <p className="text-[15px] leading-[1.6] text-ink-soft">
          I&apos;m currently at MyfitHub, with earlier stints at Lanstellar and
          Lumaara. Some of what I&apos;ve built: a mobile wallet, an escrow
          marketplace, a mentorship platform, a dues app for course reps.
        </p>
        <p className="text-[15px] leading-[1.6] text-ink-soft">
          Outside client work, I organize Hack Club hackathons — Campfire in
          Ogbomosho and Daydream in Lagos, where teenagers get about 24 hours to
          build and ship their first game.
        </p>
      </div>
    </header>
  );
};

export default Intro;
