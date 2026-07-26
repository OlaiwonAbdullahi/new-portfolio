const events = [
  {
    title: "Campfire — Ogbomosho",
    description:
      "Hack Club's annual satellite game jam, brought to Ogbomosho — teams build and ship games over a weekend for a shot at prizes. I ran it as lead organizer, from planning through execution, on February 28, 2026.",
    role: "Lead Organizer",
    href: "https://campfire.hackclub.com/ogbomosho",
  },
  {
    title: "Daydream — Lagos",
    description:
      "A Hack Club satellite game jam for teen developers across Lagos, giving participants about 24 hours to concept, build, and ship a playable game. I co-organized the event on September 27–28, 2025.",
    role: "Co-organizer",
    href: "https://daydream.hackclub.com/lagos",
  },
];

const domainOf = (href: string) =>
  href.replace(/^https?:\/\//, "").replace(/\/$/, "");

const Organizing = () => {
  return (
    <section className="mt-20">
      <h2 className="text-[24px] leading-[1.2] text-ink">Organizing</h2>
      <div className="mt-6 flex flex-col">
        {events.map((event, i) => (
          <div key={event.title}>
            {i > 0 && <hr className="border-t border-hairline" />}
            <div className="flex flex-col gap-2 py-4">
              <a
                href={event.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit cursor-pointer text-[18px] leading-[1.3] text-ink underline decoration-transparent underline-offset-4 transition-colors duration-150 ease-in-out hover:decoration-ink"
              >
                {event.title}
              </a>
              <a
                href={event.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit cursor-pointer items-center gap-1 text-[12px] uppercase leading-[1.2] tracking-[0.5px] text-ink-soft no-underline transition-colors duration-150 ease-in-out hover:text-ink hover:underline"
              >
                {domainOf(event.href)}
                <span aria-hidden="true">↗</span>
              </a>
              <p className="text-[15px] leading-[1.6] text-ink-soft">
                {event.description}
              </p>
              <span className="mt-1 w-fit cursor-default rounded-full border border-hairline px-3.5 py-1 text-[11px] leading-[1.2] text-ink-soft">
                {event.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Organizing;
