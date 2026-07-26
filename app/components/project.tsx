const projects = [
  {
    title: "Duevy",
    description:
      "Duevy is a campus fintech platform that gives course reps a simple way to collect dues, levies, and payments from students, with transparent records and approval-based fund distribution.",
    category: "Fintech",
    href: "http://duevy.app/",
  },
  {
    title: "CSC'29 Dinner & Awards Night",
    description:
      "A voting and ticketing platform built for the CSC'29 Dinner and Awards Night 2026, letting attendees vote on award categories and secure their seats for the event.",
    category: "Events",
    href: "https://dinner.eventsnests.xyz/",
  },
  {
    title: "OCLA Botanicals",
    description:
      "OCLA Botanicals is a bulk botanical supplier for the beauty and wellness industry, offering private label manufacturing, raw oils, butters, and finished haircare products for global brands and wholesalers.",
    category: "Beauty & Wellness",
    href: "https://oclabotanicals.com/",
  },
  {
    title: "OCLA Equip",
    description:
      "OCLA Equip supplies industrial equipment — stainless steel mixing tanks, processing systems, filling machinery, and production lines — to manufacturers, factories, and laboratories across Nigeria and Africa.",
    category: "Industrial",
    href: "https://oclaequip.com/",
  },
  {
    title: "Wishcube App",
    description:
      "WishCube is an AI-powered celebration platform that lets you create personalized animated greeting cards, host virtual party rooms, and send integrated digital gifts — all in one place. Features include voice message narration, confetti animations, RSVP tracking, and multi-channel sharing via WhatsApp, Instagram, and email.",
    category: "Entertainment",
    href: "https://usewishcube.com/",
  },
  {
    title: "Mantle Mentor Webapp",
    description:
      "The Mantle Mentorship Program is a virtual mentorship platform dedicated to transferring practical and life-based skills to the next generation of leaders. Running 4 cohorts per year globally, it connects mentees with experienced mentors to provide clarity, career direction, and personal development support.",
    category: "Education",
    href: "https://mantlementor.com/en",
  },
  {
    title: "Escro Marketplace",
    description:
      "Escro is a secure multi-vendor marketplace where every transaction is protected by escrow technology — funds are only released once delivery is confirmed. The platform serves customers, store owners, couriers, and logistics agencies with tools like a no-code store builder, AI route optimization, and real-time order tracking.",
    category: "E-Commerce",
    href: "https://escrostore.netlify.app/",
  },
  {
    title: "Moyinol Consulting",
    description:
      "Official site for Moyinol Consulting: Moyinol Consulting Limited combines deep regulatory expertise with innovative solutions to help financial institutions stay compliant, and prepared for future challenges in AML.",
    category: "Compliance",
    href: "https://moyinolconsulting.org/",
  },
  {
    title: "Lisa Tech",
    description:
      "Lisa Tech website is a landing page for AI-powered drones that intelligently identify, map, and report waste.",
    category: "Platform",
    href: "https://dronewastemgt.vercel.app/",
  },
  {
    title: "SmartPay",
    description:
      "SmartPay is a user-friendly mobile wallet platform designed to simplify bill payments, top-ups, and purchases directly from your digital wallet.",
    category: "Fintech",
    href: "https://smartpay-psi.vercel.app/",
  },
];

const domainOf = (href: string) =>
  href.replace(/^https?:\/\//, "").replace(/\/$/, "");

const Project = () => {
  return (
    <section className="mt-20">
      <h2 className="text-[24px] leading-[1.2] text-ink">Projects</h2>
      <div className="mt-6 flex flex-col">
        {projects.map((project, i) => (
          <div key={project.title}>
            {i > 0 && <hr className="border-t border-hairline" />}
            <div className="flex flex-col gap-2 py-4">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit cursor-pointer text-[18px] leading-[1.3] text-ink underline decoration-transparent underline-offset-4 transition-colors duration-150 ease-in-out hover:decoration-ink"
              >
                {project.title}
              </a>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit cursor-pointer items-center gap-1 text-[12px] uppercase leading-[1.2] tracking-[0.5px] text-ink-soft no-underline transition-colors duration-150 ease-in-out hover:text-ink hover:underline"
              >
                {domainOf(project.href)}
                <span aria-hidden="true">↗</span>
              </a>
              <p className="text-[15px] leading-[1.6] text-ink-soft">
                {project.description}
              </p>
              <span className="mt-1 w-fit cursor-default rounded-full border border-hairline px-3.5 py-1 text-[11px] leading-[1.2] text-ink-soft">
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
